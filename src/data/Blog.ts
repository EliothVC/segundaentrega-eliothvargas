// Paginación
interface paginacion {
    pagina_actual: number;
    paginas_totales: number;
    url_actual: string;
    url_previous: string;
    url_next: string;
}

export const paginacion: paginacion = {
    pagina_actual: 1,
    paginas_totales: 1,
    url_actual: "/blog",
    url_previous: "blog",
    url_next: "blog",
}

// Sección Newsletter
interface newsletter {
    titulo: string;
    subtitulo: string;
    placeholder: string;
    boton: string;
}

export const newsletter: newsletter = {
    titulo: "Mantente Informado",
    subtitulo: "Suscríbete a nuestro newsletter y recibe las noticias más importantes de Castro directamente en tu correo",
    placeholder: "Tu correo electronico...",
    boton: "Suscribirme"
}