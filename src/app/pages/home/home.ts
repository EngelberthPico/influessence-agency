import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { RetoSection } from '../../sections/reto/reto';
import { ServiciosTeaser } from '../../sections/servicios-teaser/servicios-teaser';
import { Diferenciador } from '../../sections/diferenciador/diferenciador';
import { Proceso } from '../../sections/proceso/proceso';
import { PorQueNosotros } from '../../sections/por-que-nosotros/por-que-nosotros';
import { SobreNosotros } from '../../sections/sobre-nosotros/sobre-nosotros';
import { Faq } from '../../sections/faq/faq';
import { CtaSection } from '../../components/cta-section/cta-section';

@Component({
  imports: [
    Hero,
    RetoSection,
    ServiciosTeaser,
    Diferenciador,
    Proceso,
    PorQueNosotros,
    SobreNosotros,
    Faq,
    CtaSection,
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
