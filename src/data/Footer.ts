interface FooterLink {
    texto: string;
    href: string;
}

export const links: FooterLink[] = [
    {texto: 'Inicio', href: '/'},
    {texto: 'Nosotros', href: '/nosotros'},
    {texto: 'Historia', href: '/historia'},
    {texto: 'Blog de Noticias', href: '/blog'},
    {texto: 'Transparencia', href: '/transparencia'},
    {texto: 'Contacto', href: '/contacto'},
];

interface ContactInfo {
    direccion: string;
    telefono: string;
    email: string;
    horario: string;
}

export const info: ContactInfo = {
    direccion: 'Plaza de Armas S/N, Castro, Chiloé',
    telefono: '+56 (65) 253 8000',
    email: 'rrpp@municipalidadcastro.cl',
    horario: 'Lunes a Viernes: 8:30 - 14:00 hrs'
}

export const socialLinks = {
    facebook: 'https://www.facebook.com/IlustreMunicipalidaddeCastro/',
    instagram: 'https://www.instagram.com/ilustremunicipalidaddecastro/'
}