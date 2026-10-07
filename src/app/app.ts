import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { WhatsappButton } from './components/whatsapp-button/whatsapp-button';
import { Seo } from './shared/seo';
import { MetaPixel } from './shared/meta-pixel';

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
  private readonly metaPixel = inject(MetaPixel);
  private readonly platformId = inject(PLATFORM_ID);
  private lastPath: string | null = null;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateSeo();

        if (!isPlatformBrowser(this.platformId)) {
          return;
        }

        this.trackPageViewOnPathChange(event.urlAfterRedirects);

        const fragment = window.location.hash.slice(1);
        if (fragment) {
          this.waitForElementAndScroll(fragment);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const target = event.target as Element | null;
    const link = target?.closest('a');
    if (!link) {
      return;
    }
    const href = link.href;
    if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) {
      this.metaPixel.trackContact();
    }
  }

  private trackPageViewOnPathChange(url: string): void {
    const path = url.split('#')[0].split('?')[0];
    if (this.lastPath !== null && path !== this.lastPath) {
      this.metaPixel.trackPageView();
    }
    this.lastPath = path;
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
