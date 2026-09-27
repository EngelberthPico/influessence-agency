import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Tilt3d } from '../../shared/tilt-3d';
import { Sparkle } from '../../shared/sparkle';

interface RetoCard {
  titulo: string;
  descripcion: string;
}

@Component({
  imports: [Reveal, Tilt3d, Sparkle],
  selector: 'app-reto',
  styleUrl: './reto.scss',
  templateUrl: './reto.html',
})
export class RetoSection {
  readonly retos: RetoCard[] = [
    {
      titulo: 'Contenido sin dirección',
      descripcion:
        'Publicar por publicar no construye una marca. Creamos contenido con intención, estrategia y objetivos claros.',
    },
    {
      titulo: 'Una presencia digital desactualizada',
      descripcion:
        'Tu página web es muchas veces el primer contacto con un cliente. Debe transmitir la calidad de lo que haces.',
    },
    {
      titulo: 'Oportunidades que se pierden',
      descripcion:
        'Cada visita, interacción y potencial cliente representa una oportunidad. Diseñamos experiencias digitales para aprovecharlas.',
    },
  ];
}
