import { Component, signal } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Sparkle } from '../../shared/sparkle';

interface FaqItem {
  q: string;
  a: string;
}

@Component({
  imports: [Reveal, Sparkle],
  selector: 'app-faq',
  styleUrl: './faq.scss',
  templateUrl: './faq.html',
})
export class Faq {
  readonly openIndex = signal<number | null>(null);

  readonly faqs: FaqItem[] = [
    {
      q: '¿Puedo contratar solamente un servicio?',
      a: 'Sí. Puedes contratar un servicio individual o combinar diferentes servicios según las necesidades de tu negocio.',
    },
    {
      q: '¿Puedo enviarles mis propios videos para editar?',
      a: 'Sí. Nuestros paquetes de edición están diseñados precisamente para trabajar con material proporcionado por el cliente.',
    },
    {
      q: '¿Cuánto tarda una página web?',
      a: 'El tiempo depende del alcance del proyecto. Antes de comenzar te presentamos un cronograma claro con las diferentes etapas.',
    },
    {
      q: '¿Puedo contratar un servicio mensual?',
      a: 'Sí. Contamos con opciones mensuales para estrategia de contenido, producción y mantenimiento digital.',
    },
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
