// Tarjetas Acceso Rápido
interface AccesoRapido {
    id: number;
    texto: string;
    href: string;
}

export const tarjetas: AccesoRapido[] = [
    {id: 1, texto: 'Nosotros', href: '/nosotros'},
    {id: 2, texto: 'Noticias', href: '/blog'},
    {id: 3, texto: 'Ley de transparencia', href: '/transparencia'},
    {id: 4, texto: 'Historia', href: '/historia'},
]

// Sección Historia
interface HistoriaSection {
    texto: string;
}

export const historia: HistoriaSection[] = [
    {texto:'Castro, fundada en 1567, es la tercera ciudad más antigua de Chile que aún se mantiene en pie. Su nombre honra al gobernador español Martín Ruiz de Gamboa, quien la bautizó en honor al santuario de Castro en Galicia, España.'},
    {texto:'La comuna se caracteriza por sus tradicionales palafitos, construcciones sobre pilotes en el agua que son emblemáticas de Chiloé. Declarados Monumento Nacional, estas coloridas viviendas reflejan la adaptación de los chilotes al entorno acuático.'},
    {texto:'La iglesia de San Francisco, declarada Patrimonio de la Humanidad por la UNESCO, es uno de los símbolos más reconocibles de Castro y un excelente ejemplo de la arquitectura religiosa tradicional de Chiloé....'}
]

// Sección Transparencia
interface TransparenciaSection {
    titulo: string;
    texto: string;
    lista: string[];
}

export const transparencia: TransparenciaSection[] = [
    {
        titulo: 'Transparencia Activa',
        texto: 'De acuerdo con la Ley N° 20.285 sobre Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado, nuestra municipalidad pone a disposición de la ciudadanía información relevante sobre:',
        lista: [
            'Organización y dotación de personal',
            'Presupuesto y ejecución financiera',
            'Actas de sesiones del Concejo Municipal',
            'Planes, programas y proyectos',
            'Contratos y licitaciones',
            'Permisos y concesiones',
            'Información sobre remuneraciones'
        ]
    },
    {
        titulo: 'Derecho de Acceso a la Información',
        texto: 'Todas las personas tienen derecho a solicitar y recibir información completa, oportuna y veraz de los actos de la administración municipal, con las excepciones que establece la ley. Puede ejercer este derecho presentando una solicitud a través de nuestro portal de transparencia o directamente en nuestras oficinas.',
        lista: []
    }
]

interface info {
    numero: number;
    titulo: string;
    texto: string;
}

export const info: info[] = [
    {
        numero: 1,
        titulo: 'Consulta nuestro portal',
        texto: 'Revisa la información disponible en nuestra sección de transparencia activa'
    },
    {
        numero: 2,
        titulo: 'Solicita información',
        texto: 'Si no encuentras lo que buscas, presenta una solicitud formal de información'
    },
    {
        numero: 3,
        titulo: 'Recibe respuesta',
        texto: 'Obtendrás una respuesta dentro de los plazos establecidos por la ley'
    },
    {
        numero: 4,
        titulo: 'Apelación',
        texto: 'Si no estás conforme con la respuesta, puedes presentar un reclamo'
    }
]

// Sección Contacto
interface Contacto {
    titulo: string;
    texto: string;
    link: string;
}

export const contacto: Contacto[] = [
    {
        titulo: 'Contacto', 
        texto: 'Si tienes alguna pregunta, comentario o necesitas información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.',
        link: '/contacto'
    }
]