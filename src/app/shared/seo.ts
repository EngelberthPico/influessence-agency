import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

const SITE_URL = 'https://influessenceagency.com';

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(description: string, path: string): void {
    const url = `${SITE_URL}${path}`;

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: this.document.title });
    this.meta.updateTag({ name: 'twitter:title', content: this.document.title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
