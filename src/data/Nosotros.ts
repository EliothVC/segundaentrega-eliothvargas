// Importación de Imagenes
import Concejal1 from '../assets/images/Concejal1.jpg';
import Concejal2 from '../assets/images/Concejal2.jpg';
import Concejal3 from '../assets/images/Concejal3.jpg';
import Concejal4 from '../assets/images/Concejal4.jpg';
import Concejal5 from '../assets/images/Concejal5.jpg';
import Concejal6 from '../assets/images/Concejal6.jpg';

// Sección del Alcalde
interface Alcalde {
    nombre: string;
    subtitulo: string;
    tituloEmail: string;
    textoEmail: string;
    tituloTelefono: string;
    textoTelefono: string;
};

export const alcalde: Alcalde = {
    nombre: "Baltazar Elgueta Cheuquepil",
    subtitulo: "Alcalde de la Ilustre Municipalidad de Castro",
    tituloEmail: "Email",
    textoEmail: "alcalde@municipalidadcastro.cl",
    tituloTelefono: "Teléfono",
    textoTelefono: "652538001 - 652538076"
}

// Sección de Concejales
interface Concejales {
    imagen: any;
    nombre: string;
    partido: string;
    tituloTelefono: string;
    textoTelefono: string;
    tituloEmail: string;
    textoEmail: string;
}

export const tarjetas: Concejales[] = [
    {
        imagen: Concejal1,
        nombre: "Ignacio Álvarez Vera",
        partido: "- Partido Socialista (PS)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 9818 3062",
        tituloEmail: "Email",
        textoEmail: "ignacioalvarezconcejal@municipalidadcastro.cl - ignacio.alvarez.vera@gmail.com"
    },
    {
        imagen: Concejal2,
        nombre: "Héctor Nicolás Álvarez Vargas",
        partido: "- Partido Socialista (PS)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 8991 7676",
        tituloEmail: "Email",
        textoEmail: "nicolasalvarezconcejal@municipalidadcastro.cl - concejalnicolasalvarez@gmail.com"
    },
    {
        imagen: Concejal3,
        nombre: "Jorge Bórquez Andrade",
        partido: "- Unión Demócrata Independiente (UDI)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 7854 7545",
        tituloEmail: "Email",
        textoEmail: "jorgeborquezconcejal@municipalidadcastro.cl - jorgeluisborquezconcejal@gmail.com"
    },
    {
        imagen: Concejal4,
        nombre: "Pablo Barrientos Torres",
        partido: "- Partido Liberal Independiente (IND)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 8900 6480",
        tituloEmail: "Email",
        textoEmail: "pablobarrientosconcejal@municipalidadcastro.cl"
    },
    {
        imagen: Concejal5,
        nombre: "Enrique Soto Díaz",
        partido: "- Partido Liberal Independiente (IND)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 3509 2544",
        tituloEmail: "Email",
        textoEmail: "enriquesotoconcejal@municipalidadcastro.cl"
    },
    {
        imagen: Concejal6,
        nombre: "Yoanna Morales Aguilar",
        partido: "- Partido Liberal Independiente (IND)",
        tituloTelefono: "Teléfono",
        textoTelefono: "+56 9 3146 9950",
        tituloEmail: "Email",
        textoEmail: "yoannamoralesconcejal@municipalidadcastro.cl"
    }
]