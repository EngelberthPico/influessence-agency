import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sparkle } from '../../shared/sparkle';

interface HeroSlide {
  image: string;
  mobileImage: string;
  imageWidth: number;
  imageHeight: number;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  audience?: string;
  ctaText: string;
  ctaHref: string;
  ctaExternal: boolean;
}

const AUTOPLAY_MS = 6000;

@Component({
  imports: [RouterLink, Sparkle],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  readonly slides: HeroSlide[] = [
    {
      image: 'assets/DSC_2361-11.webp',
      mobileImage: 'assets/DSC_2361-11-mobile.webp',
      imageWidth: 2667,
      imageHeight: 4000,
      eyebrow: 'Estrategia · Contenido · Tecnología',
      titleLine1: 'Necesitas más que una buena',
      titleLine2: 'presencia digital',
      subtitle:
        'Creamos la estrategia, el contenido y las herramientas digitales que convierten atención en oportunidades reales.',
      ctaText: 'Hablemos de tu marca →',
      ctaHref: 'https://wa.me/14077156067',
      ctaExternal: true,
    },
    {
      image: 'assets/DSC_2366-12.webp',
      mobileImage: 'assets/DSC_2366-12-mobile.webp',
      imageWidth: 2667,
      imageHeight: 4000,
      eyebrow: 'Resultados · Crecimiento · Alcance',
      titleLine1: 'Convierte seguidores en',
      titleLine2: 'comunidad real',
      subtitle:
        'Ayudamos a empresas y creadores a crecer en redes sociales con estrategias medibles que generan resultados, no solo likes.',
      ctaText: 'Fideliza tu comunidad →',
      ctaHref: 'https://wa.me/14077156067',
      ctaExternal: true,
    },
    {
      image: 'assets/DSC_2566-Edit-13.webp',
      mobileImage: 'assets/DSC_2566-Edit-13-mobile.webp',
      imageWidth: 2933,
      imageHeight: 4400,
      eyebrow: 'Lo que hacemos',
      titleLine1: 'Estrategia, edición y desarrollo',
      titleLine2: 'todo en un solo lugar',
      subtitle:
        'Estrategia de Contenido, Edición de Video y Diseño y Desarrollo Web: todo lo que tu marca necesita para crecer en digital.',
      ctaText: 'Ver todos los servicios →',
      ctaHref: '/servicios',
      ctaExternal: false,
    },
  ];

  readonly activeIndex = signal(0);
  readonly restUnlocked = signal(false);

  private readonly platformId = inject(PLATFORM_ID);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
      // Safety net in case the first slide's load/error events never fire.
      setTimeout(() => this.restUnlocked.set(true), 8000);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  onFirstImageLoaded(): void {
    this.restUnlocked.set(true);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
    this.restartAutoplay();
  }

  onPrevClick(): void {
    this.activeIndex.update((i) => (i - 1 + this.slides.length) % this.slides.length);
    this.restartAutoplay();
  }

  onNextClick(): void {
    this.activeIndex.update((i) => (i + 1) % this.slides.length);
    this.restartAutoplay();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.onNextClick();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.onPrevClick();
    }
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.timer = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.slides.length);
    }, AUTOPLAY_MS);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private restartAutoplay(): void {
    this.startAutoplay();
  }
}
