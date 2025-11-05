// Sección Contacto

/* Formulario de Contacto */
interface Formulario {
    campos: CampoFormulario[];
    asuntos: Asunto[];
}

interface CampoFormulario {
    id: string;
    label: string;
    placeholder: string;
    required?: boolean; 
}

interface Asunto {
    valor: string;
    texto: string;
}

export const formulario: Formulario = {
    campos: [
        {
            id: 'nombre',
            label: 'Nombre Completo',
            placeholder: 'Ingrese su nombre',
            required: true
        },
        {
            id: 'email',
            label: 'Correo Electrónico',
            placeholder: 'Ingrese su correo electrónico',
            required: true
        },
        {
            id: 'telefono',
            label: 'Teléfono',
            placeholder: 'Ingrese su teléfono',
        },
        {
            id: 'mensaje',
            label: 'Mensaje',
            placeholder: 'Escriba su mensaje aqui',
            required: true
        },
    ],
    asuntos: [
        {valor: '', texto: 'Selecione un asunto'},
        {valor: 'Información', texto: 'Solicitud de Información'},
        {valor: 'Sugerencia', texto: 'Sugerencia'},
        {valor: 'Reclamo', texto: 'Reclamo'},
        {valor: 'Otro', texto: 'Otro'}
    ]
}

// Información de Contacto
interface InfoContacto {
    id: number;
    titulo: string;
    contenido: string;
    tipo: string;
}

export const info: InfoContacto[] = [
    {
        id: 1,
        titulo: 'Dirección',
        contenido: 'Plaza de Armas S/N, Castro, Chiloé, Región de Los Lagos',
        tipo: 'direccion'
    },
    {
        id: 2,
        titulo: 'Teléfono',
        contenido: '+56 (65) 253 8000',
        tipo: 'telefono'
    },
    {
        id: 3,
        titulo: 'Email',
        contenido: 'rrpp@municipalidadcastro.cl',
        tipo: 'email'
    },
    {
        id: 4,
        titulo: 'Horario de Atención',
        contenido: 'Lunes a Viernes: 8:30 - 14:00 hrs',
        tipo: 'horario'
    },
]

// Redes Sociales
interface RedSociales {
    nombre: string;
    url: string;
}

export const red: RedSociales[] = [
    {
        nombre: 'Facebook',
        url: 'https://www.facebook.com/IlustreMunicipalidaddeCastro/'
    },
    {
        nombre: 'Instagram',
        url: 'https://www.instagram.com/ilustremunicipalidaddecastro/'
    }
]

// Contactos de Emergencia
interface Emergencia {
    id: number;
    servicio: string;
    telefono: string;
    color: string;
}

export const emergencia: Emergencia[] = [
    {
        id: 1,
        servicio: 'Emergencias',
        telefono: '133 - Carabineros de Chile',
        color: 'bg-green-800'
    },
    {
        id: 2,
        servicio: 'Ambulancias',
        telefono: '131 - Servicio de Ambulancia',
        color: 'bg-red-800'
    },
    {
        id: 3,
        servicio: 'Bomberos',
        telefono: '132 / 65 263 2222 - Bomberos de Castro',
        color: 'bg-linear-to-br from-red-500 to-yellow-400'
    },
]

// Mapa de Ubicación
interface Mapa {
    titulo: string;
    src: string;
    ancho: string;
    alto: string;
}

export const mapa: Mapa = {
    titulo: 'Nuestra Ubicación',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.0205844419113!2d-73.76407165499141!3d-42.48299678535336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x962219e92a9d409d%3A0xe36bfc9e872e8141!2sMunicipalidad%20de%20Castro!5e0!3m2!1ses-419!2scl!4v1758582380413!5m2!1ses-419!2scl',
    ancho: '100%',
    alto: '450'
}

// Oficinas Municipales
interface Oficinas {
    id: number;
    siglas: string;
    nombre: string;
    direccion: string;
    telefono: string;
}

export const oficinas: Oficinas[] = [
    {
        id: 1,
        siglas: 'D.O',
        nombre: 'Dirección de Obras Municipales',
        direccion: 'Av. Bernardo O\'Higgins 550',
        telefono: '(65) 253 8050'
    },
    {
        id: 2,
        siglas: 'D.E',
        nombre: 'Dirección de Educación',
        direccion: 'Sotomayor 260',
        telefono: '(65) 253 8100'
    },
    {
        id: 3,
        siglas: 'D.S',
        nombre: 'Dirección de Salud',
        direccion: 'Pedro Montt 250',
        telefono: '(65) 253 8150'
    }
]