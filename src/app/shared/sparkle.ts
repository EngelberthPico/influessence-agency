import { Component, computed, input } from '@angular/core';

const SHAPES = {
  dot: {
    viewBox: '0 0 24 24',
    path: 'M12 0C12.6 6.7 17.3 11.4 24 12C17.3 12.6 12.6 17.3 12 24C11.4 17.3 6.7 12.6 0 12C6.7 11.4 11.4 6.7 12 0Z',
    aspect: 24 / 24,
  },
  flare: {
    viewBox: '0 0 24 40',
    path: 'M12 0C12.6 12 17 19 24 20C17 21 12.6 28 12 40C11.4 28 7 21 0 20C7 19 11.4 12 12 0Z',
    aspect: 24 / 40,
  },
} as const;

@Component({
  selector: 'app-sparkle',
  standalone: true,
  template: `
    <svg
      [attr.width]="width()"
      [attr.height]="size()"
      [attr.viewBox]="shape().viewBox"
      fill="currentColor"
      aria-hidden="true"
    >
      <path [attr.d]="shape().path" />
    </svg>
  `,
  host: { class: 'sparkle' },
})
export class Sparkle {
  readonly size = input(18);
  readonly variant = input<keyof typeof SHAPES>('dot');

  protected readonly shape = computed(() => SHAPES[this.variant()]);
  protected readonly width = computed(() => Math.round(this.size() * this.shape().aspect));
}
