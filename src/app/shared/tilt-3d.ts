import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTilt3d]',
  standalone: true,
  host: { class: 'tilt-3d' },
})
export class Tilt3d {
  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 14;
    const rotateX = y * -14;
    this.el.nativeElement.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = '';
  }
}
