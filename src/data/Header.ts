export const contactInfo = {
    phone: '+56 (65) 253 8000',
    email: 'rrpp@municipalidadcastro.cl'
};

export const socialLinks = {
    facebook: 'https://www.facebook.com/IlustreMunicipalidaddeCastro/',
    instagram: 'https://www.instagram.com/ilustremunicipalidaddecastro/'
};

interface MenuItem {
    texto: string;
    href: string;
}

export const menu: MenuItem[] = [
    {texto: 'Inicio', href: '/'},
    {texto: 'Nosotros', href: '/nosotros'},
    {texto: 'Historia', href: '/historia'},
    {texto: 'Blog', href: '/blog'},
    {texto: 'Transparencia', href: '/transparencia'},
    {texto: 'Contacto', href: '/contacto'},
]