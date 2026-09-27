import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Tilt3d } from '../../shared/tilt-3d';
import { Sparkle } from '../../shared/sparkle';

interface Razon {
  titulo: string;
  descripcion: string;
}

@Component({
  imports: [Reveal, Tilt3d, Sparkle],
  selector: 'app-por-que-nosotros',
  styleUrl: './por-que-nosotros.scss',
  templateUrl: './por-que-nosotros.html',
})
export class PorQueNosotros {
  readonly razones: Razon[] = [
    {
      titulo: 'Estrategia primero',
      descripcion:
        'Antes de crear, entendemos. Cada proyecto comienza con tus objetivos y necesidades reales.',
    },
    {
      titulo: 'Pensado para crecer',
      descripcion: 'Construimos soluciones que pueden evolucionar junto con tu negocio.',
    },
    {
      titulo: 'Todo en un solo lugar',
      descripcion: 'Estrategia, contenido, video y desarrollo web bajo un mismo equipo.',
    },
    {
      titulo: 'Calidad sin complicaciones',
      descripcion: 'Trabajo profesional, comunicación directa y soluciones claras.',
    },
  ];
}
