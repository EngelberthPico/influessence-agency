import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Sparkle } from '../../shared/sparkle';

@Component({
  imports: [RouterLink, RouterLinkActive, Sparkle],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly router = inject(Router);

  private readonly scrolled = signal(false);
  private readonly currentUrl = signal(this.router.url);
  readonly isMenuOpen = signal(false);

  readonly isScrolled = computed(
    () =>
      this.scrolled() ||
      this.currentUrl().startsWith('/servicios') ||
      this.currentUrl().startsWith('/politica-de-privacidad')
  );

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.currentUrl.set(event.urlAfterRedirects));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  goHome(): void {
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
