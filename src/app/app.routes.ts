import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { PoliticaDePrivacidad } from './pages/politica-de-privacidad/politica-de-privacidad';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Influessence Agency | Creación de Contenido, Edición de Videos & Páginas Web',
    data: {
      description:
        'Creamos estrategias de contenido para marcas y creadores. Desarrollamos estrategias de contenido, guiones listos para grabar, edición de video profesional y páginas web que convierten.',
    },
  },
  {
    path: 'servicios',
    component: Servicios,
    title: 'Servicios | Influessence Agency',
    data: {
      description:
        'Estrategia de contenido, edición de video y diseño y desarrollo web para marcas y creadores. Conoce nuestros paquetes y precios.',
    },
  },
  {
    path: 'politica-de-privacidad',
    component: PoliticaDePrivacidad,
    title: 'Política de Privacidad | Influessence Agency',
    data: {
      description:
        'Conoce cómo Influessence Agency recopila y utiliza la información de los visitantes de este sitio, el uso de cookies y el procesamiento de pagos a través de Stripe.',
    },
  },
  { path: '**', redirectTo: '' },
];
