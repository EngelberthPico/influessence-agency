import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { WhatsappButton } from './components/whatsapp-button/whatsapp-button';
import { Seo } from './shared/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(Seo);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSeo();

        if (!isPlatformBrowser(this.platformId)) {
          return;
        }

        const fragment = window.location.hash.slice(1);
        if (fragment) {
          this.waitForElementAndScroll(fragment);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
  }

  private updateSeo(): void {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const description = route.snapshot.data['description'];
    if (description) {
      this.seo.update(description, route.snapshot.url.length ? `/${route.snapshot.url.join('/')}` : '/');
    }
  }

  private waitForElementAndScroll(fragment: string, attemptsLeft = 30): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (attemptsLeft <= 0) return;
    setTimeout(() => this.waitForElementAndScroll(fragment, attemptsLeft - 1), 50);
  }
}
