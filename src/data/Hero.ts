// Hero Inicio
interface HeroInicio {
    titulo: string;
    subtitulo: string;
    botonTexto: string;
    botonHref: string;
    imagenAlt: string;
}

export const inicio: HeroInicio = {
    titulo: 'Bienvenido a Castro',
    subtitulo: 'Descubre la belleza y cultura de nuestra comuna',
    botonTexto: 'Conoce nuestra Historia',
    botonHref: '#Historia',
    imagenAlt: 'Castro Chiloé'
}

// Hero Historia
interface HeroHistoria {
    titulo: string;
    subtitulo: string;
}

export const historia: HeroHistoria = {
    titulo: 'Historia de Castro',
    subtitulo: 'Descubre la rica historia y patrimonio cultural de nuestra ciudad, la tercera más antigua de Chile con existencia continuada.'
}

// Hero Blog de noticias
interface HeroNoticias {
    titulo: string;
    subtitulo: string;
}

export const noticias: HeroNoticias = {
    titulo: 'Blog de Noticias Castro',
    subtitulo: 'Mantente Informado sobre los acontecimientos más relevantes de nuestra comuna'
}

// Hero Portal Transparencia
interface HeroTransparecia {
    titulo: string;
    subtitulo: string;
}

export const transparencia: HeroTransparecia = {
    titulo: 'Portal transparencia',
    subtitulo: 'Garantizamos el acceso a la información pública y fomentamos la probidad en nuestra gestión municipal'
}

// Hero Contacto
interface HeroContacto {
    titulo: string;
    subtitulo: string;
}

export const contacto: HeroContacto = {
    titulo: 'Contacto',
    subtitulo: 'Estamos aquí para ayudarle. Comuniquese con nosotros a través de los siguientes medios'
}