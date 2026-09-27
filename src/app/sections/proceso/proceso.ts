import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { Sparkle } from '../../shared/sparkle';

interface PasoProceso {
  numero: string;
  titulo: string;
  descripcion: string;
}

@Component({
  imports: [Reveal, Sparkle],
  selector: 'app-proceso',
  styleUrl: './proceso.scss',
  templateUrl: './proceso.html',
})
export class Proceso {
  readonly pasos: PasoProceso[] = [
    {
      numero: '01',
      titulo: 'Descubrimos',
      descripcion: 'Conocemos tu negocio, tu audiencia, tus objetivos y tu situación actual.',
    },
    {
      numero: '02',
      titulo: 'Diseñamos la estrategia',
      descripcion:
        'Definimos qué necesitas, qué debes comunicar y dónde están tus oportunidades de crecimiento.',
    },
    {
      numero: '03',
      titulo: 'Creamos',
      descripcion:
        'Desarrollamos el contenido, los recursos digitales y las experiencias que harán realidad la estrategia.',
    },
    {
      numero: '04',
      titulo: 'Lanzamos',
      descripcion: 'Ponemos todo en marcha, optimizado y listo para conectar con tu audiencia.',
    },
    {
      numero: '05',
      titulo: 'Evolucionamos',
      descripcion: 'Analizamos lo que funciona, identificamos oportunidades y seguimos mejorando.',
    },
  ];
}
