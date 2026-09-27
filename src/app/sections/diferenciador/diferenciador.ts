import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Sparkle } from '../../shared/sparkle';

@Component({
  imports: [Reveal, Sparkle],
  selector: 'app-diferenciador',
  styleUrl: './diferenciador.scss',
  templateUrl: './diferenciador.html',
})
export class Diferenciador {
  readonly pasos = ['ESTRATEGIA', 'CONTENIDO', 'PRESENCIA DIGITAL', 'CRECIMIENTO'];
}
