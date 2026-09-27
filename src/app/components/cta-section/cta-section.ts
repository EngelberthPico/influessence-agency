import { Component, input } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Sparkle } from '../../shared/sparkle';

@Component({
  imports: [Reveal, Sparkle],
  selector: 'app-cta-section',
  styleUrl: './cta-section.scss',
  templateUrl: './cta-section.html',
})
export class CtaSection {
  readonly eyebrow = input('¿Listo para dar el siguiente paso?');
  readonly heading = input('Hagamos que tu presencia digital trabaje para tu negocio');
  readonly subtext = input(
    'Cuéntanos dónde está tu negocio hoy y hacia dónde quieres llevarlo. Nosotros te ayudamos a definir qué sigue.'
  );
  readonly buttonText = input('Hablemos de tu marca →');
  readonly tagline = input(
    'Sin compromiso. Sin discursos de venta. Solo una conversación sobre tu negocio.'
  );
}
