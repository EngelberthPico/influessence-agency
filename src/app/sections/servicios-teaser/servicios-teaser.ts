import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../shared/reveal';
import { Tilt3d } from '../../shared/tilt-3d';
import { Sparkle } from '../../shared/sparkle';

interface ServicioTeaser {
  numero: string;
  titulo: string;
  descripcion: string;
}

@Component({
  imports: [RouterLink, Reveal, Tilt3d, Sparkle],
  selector: 'app-servicios-teaser',
  styleUrl: './servicios-teaser.scss',
  templateUrl: './servicios-teaser.html',
})
export class ServiciosTeaser {
  readonly servicios: ServicioTeaser[] = [
    {
      numero: '01',
      titulo: 'Estrategia de Contenido',
      descripcion: 'Contenido que tiene un propósito.',
    },
    {
      numero: '02',
      titulo: 'Edición de Video',
      descripcion: 'Tú entregas el material. Nosotros hacemos que cobre vida.',
    },
    {
      numero: '03',
      titulo: 'Diseño y Desarrollo Web',
      descripcion: 'Tu página web debería trabajar por tu negocio.',
    },
  ];
}
