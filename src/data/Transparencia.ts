// Información Principal

/* 
    Columna Principal
*/
interface Info {
    titulo: string;
    descripcion: string;
    titulo2: string;
    descripcion2: string
}

export const info: Info = {
    titulo: 'Ley de Transparencia',
    descripcion: 'De acuerdo con la Ley N° 20.285 sobre Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado, nuestra municipalidad pone a disposición de la ciudadanía información relevante sobre nuestra gestión, organización, presupuesto y más.',
    titulo2: '¿Qué es la Transparencia Activa?',
    descripcion2: 'La Transparencia Activa se refiere a la obligación de los órganos de la Administración del Estado de publicar y mantener actualizada en sus sitios web información relevante sobre su gestión, de manera proactiva, sin necesidad de que sea solicitada. Esta información debe ser completa, veraz, oportuna y accesible para todas las personas.',
}

interface Ley {
    id: number;
    titulo: string;
    descripcion: string;
}

export const ley: Ley[] = [
    {id: 1, titulo: 'Marco Legal', descripcion: 'La Ley de Transparencia establece los principios y plazos para garantizar el acceso a la información pública.'},
    {id: 2, titulo: 'Derechos Ciudadanos', descripcion: 'Todas las personas tienen derecho a solicitar y recibir información de los actos de la administración municipal.'}
]

/*
    barra lateral
*/

interface Barra {
    titulo: string;
    descripcion: string;
    descripcion2?: string;
    boton?: string;
    href?: string;
    claseFondo: string;
    claseBoton: string;
}

interface DataBarra {
    tarjetas: Barra[];
}

export const dataBarra: DataBarra = {
    tarjetas: [
        {
            titulo: 'Solicitud de información',
            descripcion: 'Si no encuentra la información que busca, puede presentar una solicitud formal de información.',
            boton: 'Solicitar informacion',
            href: '#solicitud-informacion',
            claseFondo: 'bg-red-50',
            claseBoton: 'bg-red-500 hover:bg-blue-700'
        },
        {
            titulo: 'Plazos de respuesta',
            descripcion: 'La municipalidad tiene un plazo máximo de <strong>20 días hábiles</strong> para responder a su solicitud de información',
            descripcion2: 'En casos excepcionales, este plazo puede extenderse por otros 10 días hábiles.',
            claseFondo: 'bg-red-50',
            claseBoton: 'bg-red-500 hover:bg-blue-700'
        },
        {
            titulo: 'Portal de Transparencia',
            descripcion: 'Acceda a nuestro portal oficial de transparencia para consultar información detallada.',
            boton: 'Portal de Transparencia',
            href: 'https://transparencia.municastro.cl/',
            claseFondo: 'bg-green-50',
            claseBoton: 'bg-green-500 hover:bg-blue-700'
        },
    ]
}

// Sección Preguntas Frecuentes
interface Pregunta {
    titulo: string;
    parrafo: string
}

export const pregunta: Pregunta[] = [
    {titulo: '¿Qué información puedo solicitar?', parrafo: 'Puede solicitar cualquier información que posea la municipalidad y que no esté sujeta a las excepciones establecidas en la Ley de Transparencia, como aquella que afecte la seguridad nacional, derechos de terceros o el debido cumplimiento de las funciones del órgano.'},
    {titulo: '¿Cuánto tiempo tiene la municipalidad para responder?', parrafo: 'La municipalidad tiene un plazo máximo de 20 días hábiles para responder a su solicitud. En casos excepcionales y debidamente fundados, este plazo puede extenderse por otros 10 días hábiles.'},
    {titulo: '¿Qué pasa si no estoy conforme con la respuesta?', parrafo: 'Si no está conforme con la respuesta recibida o si no se le ha respondido dentro del plazo establecido, puede presentar un reclamo ante el Consejo para la Transparencia.'},
    {titulo: '¿Hay algún costo por solicitar información?', parrafo: 'No, el acceso a la información pública es gratuito. Solo en casos excepcionales, cuando la reproducción de la información solicitada implique costos significativos, se podrá cobrar un monto que no exceda el valor de reproducción.'}
] 

// Sección Solicitud de Información
interface Solicitud {
    label: string;
    id: string;
}

export const solicitud: Solicitud[] = [
    {label: 'Nombre Completo *', id: 'solicitante-nombre'},
    {label: 'RUT *', id: 'solicitante-rut'},
    {label: 'Correo electrónico *', id: 'solicitante-correo'},
    {label: 'Teléfono *', id: 'solicitante-telefono'},
]

interface Informacion {
    label: string;
    id: string;
    placeholder: string;
}

export const informacion: Informacion[] = [
    {label: 'Información solicitada *', id: 'solicitante-informacion', placeholder: 'Describa detalladamente la información que necesita'},
    {label: 'Fundamento de la solicitud (opcional)', id: 'solicitante-fundamento', placeholder: 'Describa detalladamente la información que necesita'},
]

interface Plazo {
    parrafo: string;
    boton: string;
}

export const plazo: Plazo = {
    parrafo: 'De acuerdo con la Ley de Transparencia, la municipalidad tiene un plazo máximo de 20 días hábiles para responder a su solicitud. En casos excepcionales, este plazo puede extenderse por otros 10 días hábiles.',
    boton: 'Enviar Solicitud'
} 