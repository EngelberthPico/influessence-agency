import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Reveal } from '../../shared/reveal';
import { Tilt3d } from '../../shared/tilt-3d';
import { Sparkle } from '../../shared/sparkle';

const VIDEO_BASE = '/assets/media/sobre-nosotros';

@Component({
  imports: [Reveal, Tilt3d, Sparkle],
  selector: 'app-sobre-nosotros',
  styleUrl: './sobre-nosotros.scss',
  templateUrl: './sobre-nosotros.html',
})
export class SobreNosotros implements AfterViewInit, OnDestroy {
  readonly posterSrc = `${VIDEO_BASE}/sobre-nosotros-poster.webp`;

  @ViewChild('videoWrap') private readonly videoWrapRef?: ElementRef<HTMLDivElement>;
  @ViewChild('videoEl') private readonly videoElRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('mp4Source') private readonly mp4SourceRef?: ElementRef<HTMLSourceElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.videoWrapRef) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.loadAndPlayVideo();
            this.observer?.disconnect();
          }
        }
      },
      { rootMargin: '200px 0px' }
    );
    this.observer.observe(this.videoWrapRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private loadAndPlayVideo(): void {
    if (!this.mp4SourceRef || !this.videoElRef) {
      return;
    }
    this.mp4SourceRef.nativeElement.src = `${VIDEO_BASE}/sobre-nosotros.mp4`;

    const video = this.videoElRef.nativeElement;
    video.load();
    video.play().catch(() => {});
  }
}
