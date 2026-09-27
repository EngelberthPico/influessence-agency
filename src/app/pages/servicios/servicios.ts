import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaSection } from '../../components/cta-section/cta-section';
import { Reveal } from '../../shared/reveal';
import { Tilt3d } from '../../shared/tilt-3d';
import { Sparkle } from '../../shared/sparkle';

interface PrecioItem {
  titulo: string;
  detalle?: string;
  precio: string;
  caracteristicas?: string[];
  stripeUrl?: string;
}

interface ServicioDetalle {
  numero: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  precios: PrecioItem[];
  extra?: string[];
  condiciones?: string[];
  nota?: string;
  servicioAdicional?: PrecioItem;
}

@Component({
  imports: [CtaSection, Reveal, Tilt3d, Sparkle],
  selector: 'app-servicios',
  styleUrl: './servicios.scss',
  templateUrl: './servicios.html',
})
export class Servicios {
  readonly servicios: ServicioDetalle[] = [
    {
      numero: '01',
      titulo: 'Estrategia de Contenido',
      subtitulo: 'Contenido que tiene un propósito.',
      descripcion:
        'Para marcas y creadores de contenido de cualquier nicho: cocina, beauty, bienes raíces, lifestyle, fitness y más. Diseñamos calendarios, ideas y guiones pensados para comunicar tu propuesta, conectar con tu audiencia y mantener una presencia constante. Nos enfocamos en la plataforma que más uses para crear tu contenido.',
      precios: [
        {
          titulo: 'Parrilla Esencial',
          detalle: '15 piezas (4 publicaciones/semana), idea + guión de cada video o carrusel',
          precio: '$259',
          caracteristicas: [
            '15 piezas de contenido al mes',
            '4 publicaciones por semana',
            'Idea y guión detallado de cada video o carrusel',
            'Calendario de contenido organizado y listo para grabar',
            'Ideas alineadas a tu marca y a tu audiencia',
            'Ronda de ajustes sobre la parrilla antes de iniciar',
            'Llamada personalizada de 30 minutos',
          ],
          stripeUrl: 'https://buy.stripe.com/28E9AT2FL0Fu4G533O93z06',
        },
        {
          titulo: 'Parrilla Pro',
          detalle:
            '25 ideas (6 publicaciones/semana) + 5 guiones de video agresivo para pauta (usables también en feed)',
          precio: '$399',
          caracteristicas: [
            '25 ideas de contenido al mes',
            '6 publicaciones por semana',
            '5 guiones de video agresivo pensados para pauta publicitaria o generar alcance y conversión',
            'Guiones reutilizables también en tu feed orgánico',
            'Calendario de contenido detallado y organizado',
            'Enfoque estratégico orientado a alcance y conversión',
            'Llamada personalizada de 1 hora',
          ],
          stripeUrl: 'https://buy.stripe.com/aFa9ATcgl87W8WlfQA93z04',
        },
        {
          titulo: 'Parrilla Empresarial',
          detalle:
            '12 ideas (3 publicaciones/semana) + edición de 12 publicaciones al mes (3 por semana)',
          precio: '$499',
          caracteristicas: [
            '12 ideas de contenido al mes',
            '3 publicaciones por semana',
            'Guiones reutilizables también en tu feed orgánico',
            'Calendario de contenido detallado y organizado',
            'Enfoque estratégico orientado a alcance y conversión',
            'Llamada personalizada de 1 hora',
            'Edición completa de los 12 videos incluidos: música, animaciones, textos y subtítulos, corrección de color',
          ],
          stripeUrl: 'https://buy.stripe.com/6oU4gza8dgEs1tT0VG93z03',
        },
      ],
    },
    {
      numero: '02',
      titulo: 'Edición de Video',
      subtitulo: 'Tú entregas el material. Nosotros hacemos que cobre vida.',
      descripcion:
        'Convertimos tus grabaciones en videos dinámicos, profesionales y listos para publicar.',
      extra: [
        'Edición completa',
        'Música y animaciones',
        'Textos y subtítulos',
        'Corrección de color',
        'Hasta 1 minuto por video',
      ],
      precios: [
        {
          titulo: 'Sencillo (1 video)',
          precio: 'Desde $40-$60',
          detalle:
            'Ideal si quieres probar el servicio o necesitas editar un solo video con calidad profesional, listo para publicar en cualquier plataforma.',
          caracteristicas: ['El precio final depende del nivel de edición requerido'],
          stripeUrl:
            'https://wa.me/14077156067?text=' +
            encodeURIComponent('Estoy interesad@ en la edición de un video!'),
        },
        {
          titulo: 'Pack 10 (10 videos)',
          precio: '$250',
          detalle:
            'Perfecto para mantener una presencia constante en redes sociales durante todo el mes, con edición profesional en cada pieza.',
          caracteristicas: ['Edición estándar de video'],
          stripeUrl: 'https://buy.stripe.com/4gM4gzdkp3RG6OdeMw93z01',
        },
        {
          titulo: 'Pack 20 (20 videos)',
          precio: '$475',
          detalle:
            'La opción con mejor precio por video, pensada para marcas y creadores que publican con alta frecuencia.',
          caracteristicas: ['Edición estándar de video'],
          stripeUrl: 'https://buy.stripe.com/8x29ATdkpcocegF7k493z00',
        },
      ],
      condiciones: [
        'Cada video puede tener hasta 1 minuto de duración.',
        'El paquete se reserva con el pago del 100% por anticipado.',
        'Tienes 1 mes desde el pago para enviarnos los videos a editar. Pasado ese plazo, el material no enviado se pierde sin excepción.',
        'Entrega en máximo 3 días después de recibir cada video (¡a veces antes!).',
        'Incluye 1 ronda de revisión por video para ajustes o recomendaciones.',
      ],
      nota: '(Con cupos limitados)',
    },
    {
      numero: '03',
      titulo: 'Diseño y Desarrollo Web',
      subtitulo: 'Tu página web debería trabajar por tu negocio.',
      descripcion:
        'Diseñamos sitios web modernos, rápidos y estratégicos que generan confianza y convierten visitantes en clientes.',
      precios: [
        {
          titulo: 'Landing page (1-5 páginas)',
          precio: 'Desde $1,500',
          caracteristicas: [
            'Hasta 5 páginas de contenido',
            'Diseño a medida, responsive y optimizado para conversión',
            'Formulario de contacto integrado',
            'Optimización básica de SEO',
            'Integración con redes sociales y WhatsApp',
            'Entrega lista para publicar',
          ],
          stripeUrl:
            'https://wa.me/14077156067?text=' +
            encodeURIComponent(
              'Hola, estoy interesad@ en cotizar una Landing Page (1-5 páginas).',
            ),
        },
        {
          titulo: 'Sitio pyme (5-10 páginas + blog)',
          precio: 'Desde $4,000',
          caracteristicas: [
            'Entre 5 y 10 páginas + sección de blog',
            'Diseño a medida, responsive y optimizado para conversión',
            'Panel para gestionar el blog y actualizar contenido',
            'Optimización de SEO on-page',
            'Integración con redes sociales, WhatsApp y formularios',
            'Ideal para pymes que buscan posicionarse en digital',
          ],
          stripeUrl:
            'https://wa.me/14077156067?text=' +
            encodeURIComponent(
              'Hola, estoy interesad@ en cotizar un Sitio Pyme (5-10 páginas + blog).',
            ),
        },
        {
          titulo: 'E‑commerce / avanzado',
          precio: 'Desde $7,000',
          caracteristicas: [
            'Tienda en línea con catálogo de productos ilimitado',
            'Pasarela de pagos y gestión de inventario',
            'Diseño a medida, responsive y optimizado para conversión',
            'Panel de administración completo',
            'Optimización de SEO y velocidad de carga',
            'Integraciones a medida (CRM, email marketing y más)',
          ],
          stripeUrl:
            'https://wa.me/14077156067?text=' +
            encodeURIComponent(
              'Hola, estoy interesad@ en cotizar una tienda E-commerce / sitio avanzado.',
            ),
        },
      ],
      servicioAdicional: {
        titulo: 'Mantenimiento mensual',
        precio: 'Desde $200/mes',
        caracteristicas: [
          'Actualizaciones y copias de seguridad periódicas',
          'Monitoreo de seguridad y rendimiento',
          'Cambios de contenido y ajustes menores incluidos',
          'Soporte técnico prioritario',
          'Reporte mensual del estado del sitio',
        ],
        stripeUrl:
          'https://wa.me/14077156067?text=' +
          encodeURIComponent(
            'Hola, estoy interesad@ en el servicio de Mantenimiento mensual para mi sitio web.',
          ),
      },
    },
  ];

  private readonly route = inject(ActivatedRoute);

  readonly activeTab = signal(0);

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const tab = Number(params.get('tab'));
      this.activeTab.set(Number.isInteger(tab) && tab >= 0 && tab < this.servicios.length ? tab : 0);
    });
  }

  selectTab(index: number): void {
    this.activeTab.set(index);
  }
}
