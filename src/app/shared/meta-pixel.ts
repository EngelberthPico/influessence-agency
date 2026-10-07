import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MetaPixel {
  private readonly platformId = inject(PLATFORM_ID);

  trackPageView(): void {
    this.fire('PageView');
  }

  trackContact(): void {
    this.fire('Contact');
  }

  private fire(event: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', event);
    }
  }
}
