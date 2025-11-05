// Sección Navegación
interface Navegador {
    titulo?: string;
    subtitulo: string;
    href: string;
}

export const navegador: Navegador[] = [
    {
        titulo: 'Contenido',
        subtitulo: 'Introducción',
        href: '#introducción'
    },
    {
        subtitulo: 'Fundación e Historia Temprana',
        href: '#fundacion'
    },
    {
        subtitulo: 'Desarrollo Urbano y Económico',
        href: '#desarrollo'
    },
    {
        subtitulo: 'Patrimonio Cultural',
        href: '#patrimonio'
    },
    {
        subtitulo: 'Navegación y Entorno Marino',
        href: '#navegacion'
    },
]

// Sección Introducción
interface Introduccion {
    titulo: string;
    parrafo1: string;
    texto1: string;
    parrafo2: string;
}

export const introduccion: Introduccion = {
    titulo: 'Introducción',
    parrafo1: '"…Situada al fondo de un complicado y pintoresco fiordo, la ciudad de Castro se alza risueña, con su gran calle principal en pendiente y sus pequeñas casas… El ambiente despejado y alegre nos alivia de la pesadez… Al borde del mar, algunas casas y bodegones suelen avanzar sobre pilotes, mostrando así las credenciales de perfecta ciudad chilota".',
    texto1: '- Benjamín Subercaseaux, "Chile o una loca geografía"',
    parrafo2: 'Elogiosos comentarios para la mayor agrupación urbana de la provincia, ubicada entre los 42° 29′ 10″ de latitud Sur y 73° 48′ 15″ de latitud Oeste, a 113 Kms. de Chacao, puerto de entrada a Chiloé. Su localización en el centro mismo de la Isla Grande, como ciudad base, permite el fácil traslado a otras localidades. Es la Capital Provincial, eje administrativo, con funciones comerciales, financieras, educativas, turísticas, culturales, sociales, en constante crecimiento. Emplazada en una pequeña terraza, entre los 35 y 50 metros sobre el nivel del mar, al borde de una ensenada por el lado oriental y del río Gamboa por el occidental, la convierten en una acogedora ciudad, con un magnífico fondeadero. Su estratégica posición en el fiordo le entrega características paisajistas únicas por el entorno que domina. Ha tenido una espectacular proyección urbana y poblacional, extendiéndose por varios sectores. Mantiene los caracteres de urbe con "aires chilotes" en múltiples aspectos, y sus viviendas obedecen a pautas de diseño que facilitan la concentración familiar, alrededor de la gran cocina-comedor. Dada la configuración topográfica, aliadas al aspecto cultural, pueden distinguirse algunas soluciones urbanas particulares, como los palafitos. Lo moderno se alía con la tradición en Castro, una de las ciudades más antiguas del país, con existencia continuada y larga historia.'
}

// Sección Fundación e Historia Temprana
interface Fundacion {
    titulo: string;
    parrafo: string;
}

export const fundacion: Fundacion[] = [
    {
        titulo: 'Habitantes Originarios',
        parrafo: 'Entre los aspectos relevantes de su evolución histórica tenemos que este sector fue habitado por indígenas Chono y Veliche o Huilliche por siglos, los nombres que dieron a los lugares son herencia de estas importantes culturas, junto con la tradición del bordemar'
    },
    {
        titulo: '1567: Fundación de Castro',
        parrafo: 'En el siglo XVI Martín Ruiz de Gamboa y Avendaño efectúa la conquista de Chiloé, fundando en Febrero de 1567 la ciudad de Santiago de Castro, la más austral de América. La llamó Santiago en honor al Patrono de España Apóstol Santiago, y Castro, en reconocimiento al Presidente de la Real Audiencia de Lima y Virrey interino del Perú, licenciado Lope García de Castro.'
    },
    {
        titulo: 'Primera Ciudad Chilota',
        parrafo: 'Primera ciudad chilota, capital del archipiélago y última población hacia el Estrecho de Magallanes. La única con título de ciudad en Chiloé y correspondiente plano de Damero o tablero de ajedrez, característico de las ciudades españolas.'
    },
    {
        titulo: 'Momentos Críticos',
        parrafo: 'Ha estado marcada por momentos críticos en su transcurso histórico: terremotos, ataques de corsarios como Simón de Cordes en 1600 y Henrich Brouwer en 1643, incendios; sin embargo, ha sabido reponerse ante la adversidad.'
    },
    {
        titulo: '1696: Escudo de Armas',
        parrafo: 'El Rey de España Carlos II le entrega el 14 de Agosto de 1696 su Escudo de Armas con la inscripción "la mui noble i leal ciudad de Castro" siendo Gobernador de Chile don Tomás Marín de Poveda y de Chiloé don Baltazar del Cózar y Gallo.'
    },
    {
        titulo: 'Centro Misionero',
        parrafo: 'Fue centro del trabajo misionero jesuita y franciscano, desde aquí iniciaba su periplo por el archipiélago la "misión circular" y se diferenciaba de otros pueblos por sus iglesias y conventos.'
    },
    {
        titulo: '1826: Incorporación a Chile',
        parrafo: 'En 1765 toda la provincia pertenecía al Virreinato del Perú, el año 1826 es incorporada a la República de Chile y el 30 de Agosto del mismo año se crea la Provincia de Chiloé con capital Castro. '
    },
]

// Sección Desarrollo Urbano y Económico
interface Desarrollo {
    titulo: string;
    parrafo: string;
    texto: string;
}

export const desarrollo: Desarrollo = {
    titulo: 'Desarrollo Urbano y Económico',
    parrafo: 'En el siglo XIX y principios del XX tiene prosperidad por la actividad maderera y agrícola, especialmente el comercio de papas. En 1912, se inaugura el ferrocarril de trocha angosta que la une con Ancud. En la centuria recién pasada grandes incendios la devastaron, especialmente el de 1936, recobrando años más tarde su importancia, y luego el devastador terremoto y maremoto de 1960 con sus secuelas produce la migración campo-ciudad, creciendo con poblaciones hacia sectores altos. En los decenios ´70 y ´80 se extiende hacia el norte y sur, junto a todo el proceso de desarrollo urbanístico.',
    texto: 'Así, Santiago de Castro muestra el empuje de sus habitantes en esta perspectiva de cinco siglos.'
}

// Sección Patrimonio Cultural
interface PatrimonioItem {
    titulo: string;
    contenido: string;
}

interface Patrimonio {
    titulo: string;
    parrafoInicial: string;
    destacados: PatrimonioItem[];
    parrafos: string[];
}

export const patrimonio: Patrimonio = {
    titulo: 'Patrimonio Cultural y Atractivos',
    parrafoInicial: 'Ofrece múltiples lugares atractivos esta ciudad-puerto. Iniciamos el recorrido turístico-cultural que jamás pierde su interés desde la calle San Martín y descendemos hacia la salida Norte, apreciando los palafitos de Pedro Montt, antiguo barrio citadino localizado en el límite urbano de antaño; por allí, entre sus calles, circulaba lentamente el tren chilote.',
    destacados: [
        {
            titulo: 'Palafitos',
            contenido: 'Sus habitaciones sobre pilotes, levantadas en el bordemar de la ciudad, representan la vital relación entre tierra y mar que se da en todo el archipiélago; hoy circunscritos por la carretera-puente construida en la década del 60.'
        },
        {
            titulo: 'Iglesia San Francisco',
            contenido: 'Símbolo emblemático de Castro y hermoso Monumento Nacional, pintada de colores resplandecientes. Su construcción data de 1910, dirigiendo la obra el Superior del Convento de la época Padre Angel Subiabre.'
        }
    ],
    parrafos: [
        'Nos desviamos al Este, por una ruta de tierra cruzamos el puente de madera, y ascendemos al mirador del cerro Ten-Ten, cuyo nombre recuerda la serpiente bienhechora que levantó las montañas, en una terrible lucha con Caicaivilú, para salvar a los hombres, según nos relata el "mito mapache-huilliche". Se alza majestuoso, vigilando el puerto, formando un pequeño estero donde finaliza el fiordo castreño; estamos a 4 Kms. del centro de la ciudad y la vista es panorámica.',
        'Apreciamos toda la urbe, las nuevas poblaciones, la bahía, el balneario del lugar, sectores adyacentes; a lo lejos sobresalen las torres de la iglesia, hito de navegación y referencia urbana.',
        'Después de deleitarnos con los paisajes circundantes retomamos la ruta de ingreso a Castro, por calle O´Higgins nos dirigimos hacia el Oeste hasta calle Gabriela Mistral y Avda. Galvarino Riveros, viendo las poblaciones y conjuntos habitacionales formados después de 1960. Toda esta "parte alta" de la ciudad se conformó recientemente.',
        'Salimos del límite urbano y por el camino que serpentea los verdes campos llegamos al Parque Municipal, ubicado en el sector de La Chacra, lugar donde se localizan los 55 módulos de gastronomía que expenden los platos tradicionales durante el Festival Costumbrista. Recinto habilitado a fines de la década del 70, donde en el mes de Febrero se efectúa el famoso "Festival Costumbrista", fiesta viva de gastronomía, artesanía, folklore y costumbres chilotas, evento de trascendencia que se ha proyectado y consolidado a nivel nacional e internacional.',
        'También se ha instalado en este tradicional perímetro el Museo de Arte Moderno, único en el país, entrelazado con la trama cultural chilota y ubicado en un lugar privilegiado como mirador; posee diversas colecciones de arte contemporáneo. La visión al estero y ciudad es hermosa, incluso cuando los cielos están despejados se observa la Cordillera de Los Andes e islas interiores.',
        'Retornamos y por la calle El Arrayán llegamos al cerro Millantuy, en medio de la ciudad. Mirador natural, ya que desde su cumbre junto a la estatua de la Virgen, se puede observar el plano urbano central de Castro, el río Gamboa y su catarata que contornea entre los cerros y el barrio del mismo nombre, la famosa "piedra del camahueto", la bahía con el colorido siempre verde y los poblados de Yutuy, Quento, Chañihué, Rauco. A los pies del cerro el típico cementerio local, con sus callejones y sus bóvedas en forma de pequeñas casas. El panorama es bellísimo desde este lugar.',
        'Por calle Freire llegamos hasta la Plazuela Gamboa, el otro mirador castreño, ubicado al occidente del plano de la ciudad. Se aprecia la desembocadura del río Gamboa, los palafitos, las nuevas casas que cubren las laderas, el local del Internado Campesino que recoge elementos de la arquitectura tradicional chilota, adaptándolo a lo moderno en perfecta integración. La Plazuela es el centro de paisajes deleitosos, allí se ubica el busto del fundador de Castro, siendo además un entorno de leyenda, porque sería el sector desde donde comenzaba el túnel de los jesuitas, quienes ocultaron allí sus tesoros, según cuenta la tradición.',
        'Descendemos al sur por la suave ladera pavimentada y atravesamos el puente sobre el Río Gamboa, que abre su silencioso cauce por entre las montañas y se extingue en el estuario por el oriente. Contemplamos a sus orillas las tradicionales casas-palafitos del Gamboa, uno de los lugares de mayor atracción. Bordeamos el fiordo con sus pequeños acantilados, recuerdos topográficos del período glacial. Maravillosa bahía, singular en su formación, de tranquilas aguas y pequeñas playas de cantos rodados que otrora, fueron recorridas por las bandas canoeras Chono, los primitivos habitantes de Chiloé, cuyos sitios arqueológicos, los conchales, aún permanecen en sus arcaicos entornos como sustrato de investigación. Una de las últimas expansiones urbanas de Castro fue por estos lugares como nuevo barrio residencial, con hermosas construcciones en sus lomajes y bordemar, muy atrayentes.',
        'Continuamos hacia Nercón, pequeño poblado ubicado a 5 Kms. de la ciudad con su destacada iglesia de madera, donde se venera a su patrono San Miguel. Templo declarado Monumento Nacional y construido en 1886 por el maestro carpintero chilote José María Barría; en su nave lateral cuelga un velero "ex-voto", símbolo de la devoción del marinero isleño. Su pequeño cementerio y el atractivo astillero de embarcaciones menores en el sector puente, permiten apreciar las formas y maderas empleadas en la construcción naval con los carpinteros de ribera. Allí se ubica la popular "animita de Nercón", de gran devoción comunitaria. Esta localidad es hoy un sector residencial castreño, de amplia proyección turística con cabañas y hoteles.',
        'Regresamos hacia Plaza de Armas, núcleo originario de la ciudad que se desarrolló en función de este lugar, en sus costados se localizaron las tierras para la iglesia, el Cabildo y vecinos principales. En la actualidad concentra en su perímetro los servicios públicos más importantes, se suman otros elementos atrayentes como la concha acústica, el obelisco, los bellos prados y árboles. Lugar de descanso y recreación, además de activo centro social.',
        'Visitamos la Iglesia San Francisco, símbolo emblemático de Castro y hermoso Monumento Nacional, pintada de colores resplandecientes y mediatizadores; su construcción data de 1910, dirigiendo la obra el Superior del Convento de la época Padre Angel Subiabre, los carpinteros fueron dirigidos por el carpintero mayor Don Salvador Calixto Sierpe de la localidad de Yutuy. Los planos de la iglesia fueron confeccionados por el arquitecto Don Eduardo Provasoli, destacando por su imponente estructura, realizada totalmente en madera de la zona, y el exterior de su fachada con planchas de fierro cincado. Calificada de estilo neogótico, con rica ornamentación interior, cuyas dimensiones son de 1.300 m2, 52 m. de largo por 27 de ancho, su cúpula tiene 32 m. de alto y en el frontis posee dos torres de 5 por 5 y 42 m. de altura. En ambas torres se encuentran dos campanas que pesan 20 y 18 quintales respectivamente. Con este templo se cierra el ciclo de las grandes iglesias de la arquitectura chilota.',
        'A un costado de la Iglesia tenemos el Salón Parroquial, construcción bellísima de la arquitectura tradicional isleña contemporánea. Concurrimos al Museo Arqueológico-Etnográfico, donde encontramos valiosas colecciones de elementos y artefactos líticos usados por la culturas indígenas, artilugios y objetos de madera del trabajo cotidiano insular, muestras fotográficas, mapas, imaginería religiosa, enmarcadas en el acervo cultural chilote.',
        'Bajamos por calle Blanco, principal arteria comercial hasta el puerto, fondeadero de lanchas y botes. En la década del 20 y 30 la gran actividad marítima hace del puerto el corazón de Castro, embarcándose miles de toneladas de papas y maderas hacia puertos del norte y sur del país. Momentos donde la calle Lillo era la más importante, con grandes construcciones y callejones sobre palafitos.',
        'Visitamos el muelle Los Chalupones, de gran importancia, lugar de encuentro de los isleños que diariamente llegan a vender sus productos del mar y chacarería desde las diversas islas en vistosas embarcaciones. La activa vida de estos habitantes ha transformado este lugar en centro de comunicación social, ofreciendo al visitante temas de reflexión sobre la cultura y desarrollo local. Sector donde se encuentra la Feria de Artesanía y Mercado Campesino Lillo, allí se expenden múltiples elementos de artesanía, variedad de carnes y mariscos, licores, pescados, hortalizas y frutos; todos componentes esenciales de la alimentación chilota, en un comercio singular y atrayente, con medidas de volumen locales como el "almud", que testimonian la persistencia del pasado en la isla.',
        'También se localizan las típicas cocinerías-palafitos, donde se reúnen los viajeros de las lanchas de itinerario junto a numerosas personas para degustar la gastronomía típica, contemplando la hermosa vista de la bahía y el movimiento de embarcaciones en diálogos del quehacer diario. En el presente una bahía que cada vez aumenta su atractivo, con la presencia de yates y transatlánticos que la surcan en sus recorridos turísticos.',
        'Continuamos por la costanera que bordea la ciudad, desde Pedro Montt a la Punta de Diamante en su acceso Norte, observamos en el emplazamiento de la antigua estación a la locomotora del añorado Ferrocarril chilote de trocha angosta de 60 cm. que unía a la ciudad de Ancud, cuyas vías llegaban hasta el mismo puerto para dejar su carga de productos agrícolas y de madera. La vida cotidiana giraba en torno a la pequeña estación del tren, que era el paseo obligado de antaño. El terremoto del 60 con sus secuelas terminó con este singular medio de transporte, quedando en la memoria la multiplicidad de anécdotas cotidianas relacionadas con el pequeño tren.',
        'Circundamos el bordemar Norte y sus palafitos de Pedro Montt y Punta Chonos, donde rememoramos el histórico duelo de Guillermo Eyzaguirre Rouse y Carlos del Canto Medan por defender sus ideas políticas en 1915. Barrio centenario y antigua ruta de ingreso a Castro, con viviendas palafíticas sobre lumillas que reflejan la identidad del hombre y el mar; caminamos por la calle El Tejar, nombre que deriva de una antiquísima fábrica de tejas que existía en tal lugar, acceso peatonal de antaño, hasta el final de calle Pedro Montt, hito de entrada por la ruta 5, abierto desde el año 1958. Desde aquí nos dirigimos al centro de la ciudad después de conocer la "Venecia chilota", la más meridional y última ciudad castellana del Imperio Español.'
    ]
}

// Sección Navegación y Entorno Marino
interface Navegacion {
    titulo: string;
    parrafos: string[];
}

export const navegacion: Navegacion = {
    titulo: 'Navegación y Entorno Marino',
    parrafos: [
        'Para la navegación de la bahía castreña es importante explicar que el fiordo de Castro corresponde al molde de ocupación que por siglos ejercieron los hielos sobre el terreno, quedando descubierto cuando éstos comenzaron a retirarse. Este espacio fue ocupado por las aguas del interior, formando un entorno de características paisajistas extraordinarias, calificado como único en su género en todo el mundo.',
        'Como la vieja Galicia española, la nueva Galicia Insular tiene vocación por el bordemar, o al menos, allí está su verdadero rostro, y este fiordo es el corazón para los habitantes costeros. Si el mar aparece en la geografía, significa que es parte del territorio y así lo asume el chilote; la riqueza del vocabulario vernáculo demuestra un conocimiento del mar y lo científico cede para dejar paso al conocimiento práctico del marino isleño, donde sus palabras y sabidurías dan cuenta de un hombre aliado con las señales marinas. Mucho podrá decirse de este maritorio y así irá conociendo al hombre y su ligazón con el medio náutico.',
        'El puerto-fiordo de la "Venecia Insular" tiene una enorme tradición histórica, muchos navegantes anclaron en sus aguas, mencionamos a Baltasar de Cordes, Henrich Brouwer, los Padres de la Compañía de Jesús que salían en su "misión circular" anual, José de Moraleda, Roberto Maldonado, y tantos otros que emularon a los primeros nautas que surcaron sus aguas, los pueblos Chono y Veliche, cuyas "dalcas" o embarcaciones dominaron el mar interior, iniciando la historia náutica chilota.',
        'En la década del 30 y 40 los vapores de las Compañías navieras recalaban, uniendo Castro con Aisén y Magallanes. Era uno de los puertos de mayor movimiento en todo el litoral, se comercializaban papas y maderas por miles de toneladas al resto del país, siendo el principal sector castreño, antes que los caminos terrestres conectaran con otras ciudades. Época de veleros y chalupones que llegaban de todo el archipiélago junto a sus tripulantes a ofrecer los productos de la tierra y mar, desde aquí retornan a sus hogares en los recovecos de las diversas islas con los productos para su cotidiano sustento. Centro neurálgico y paseo obligado de los habitantes en decenios pasados; hoy llegan lanchas desde la isla Quehui, Chelín y otras ínsulas adyacentes, como también aquellos botes procedentes "del otro lado" como se decía antiguamente de los sectores frente al puerto: Quento, Chañihué, Yutuy.',
        'El crecimiento de industrias relacionadas con el mar revitalizan esta bahía y sector portuario de permanente atracción. Fiordo que se encuentra decorado con casas pintadas de vivos colores e iglesias de altas torres, en el verdegris paisaje chilote; servían entre otros aspectos de orientación a las embarcaciones de madera, que navegan "a la vista" de la costa, como en el presente, cuando se viaja por las tranquilas aguas de esta hidrovía.',
        'Iniciamos la navegación desde el Muelle Los Chalupones, donde las lanchas y botes de turismo recalan. Rumbo al Norte del fiordo observamos la costanera que bordea la ciudad, apreciando los palafitos de Punta Chonos y Pedro Montt, las típicas habitaciones sobre pilotes. Circunnavegamos el Cerro Ten-Ten de playas hermosas que forma un pequeño estero donde finaliza el fiordo. Con rumbo al Este pasamos por el sector costero de Putemún con su tradicional mitilicultura, una de las más antiguas de Chiloé, y apreciamos los miles de flamencos que llegan a anidar a sus ricas playas pródigas de mariscos, sector donde concluye la bahía.',
        'Se prosigue al Sur y recorremos la costa de Quento junto a su pequeño villorrio marino, con casas al bordemar en medio de un espectacular ambiente; presenta en sus riberas vetas de carbón de piedra. Continuamos al balneario de Tongoy, famoso por sus playas, frente a Castro, con permanente tránsito de lanchas para gozar de las bondades del lugar. Desde aquí atravesamos a la boya que nos señala el lugar de mayor profundidad de la bahía, presenciando a los lobos marinos como regalo de la naturaleza insular, son un símbolo ecológico de la fauna castreña que retozan y juguetean en las aguas junto a su casa-boya. Únicos ejemplares que habitan cerca de la ciudad que podemos contemplar en estos recorridos náuticos. Hacia el Sur y siempre costeando, pasamos por la localidad de Chañihué, con sus casas en medio de las verdes lomas y los senderos que suben serpenteando por las colinas y las playas de cantos rodados en alianza con el ambiente marino, nos refrescan la visión. Al frente, la ciudad de Castro se ve panorámica, inolvidable, con sus construcciones emblemáticas que la identifican.',
        'Llegamos a Yutuy con su pequeño estero de gran belleza, mirando las jaulas salmoneras, nuevo recurso económico incorporado a Chiloé. Desembarcamos en su playa y visitamos el poblado que mira a la ciudad capital; fue un antiguo sector de misiones, donde destaca su novedosa iglesia, el cementerio y el tradicional "corral de pesca" en la desembocadura del río. Degustamos sus productos frutícolas y hortícolas con las primeras cosechas, debido a que se localiza en una posición geográfica privilegiada, donde el sol lo irradia permanentemente. El camino que lo une a Castro se realizó en la década del 70 y bordea internamente el fiordo, aunque todavía se utiliza permanentemente el "camino del mar". Yutuy es similar a aquellas caletas de pescadores griegos, que esporádicamente se reparten entre los laberintos peloponésicos.',
        'Reembarcamos en un paisaje de égloga y bordeando los acantilados llegamos a Punta Peuque, idílico lugar, enclave estratégico para ingresar a la bahía. El relieve se interna hacia el mar, formando una puntilla de singular belleza en Peuque, junto a las casas que lo circundan. Antiguamente bajo sus aguas se encontraban ricos bancos de moluscos y siembra artificial de mitílidos. Desde los roqueríos cercanos al sur-este, cruzamos hasta la entrada del fiordo de Castro contemplando la villa de Rauco, a unas 6 millas aproximadamente de navegación. Centro de misiones en siglos anteriores y ex-puerto petrolero, nexo entre la villa de Chonchi y Castro por el camino de antaño que bordea la costa, siendo su época de mayor desarrollo. Poseía una tradicional iglesia ya desaparecida y jaulas salmoneras rodean sus entornos; sector donde concluye el trayecto.',
        'Costeando se retorna por la franja occidental hacia el norte, se aprecia el sector de Nalhuitad, un mirador natural por los paisajes panorámicos que presenta, en cuyas riberas tenemos centros salmonídeos. Contemplamos la comarca de Llicaldad, paraje bello y enigmático, donde la leyenda cuenta que en la catarata del Río Bravo van los neófitos que desean iniciarse en el arte de la brujería, bañándose bajo sus aguas para sacarse el bautismo y quedar aptos en el ejercicio de la hechicería; también centros de cultivos de salmón decoran sus aguas.',
        'Se bordea por Nercón, a unos 5 Kms. de Castro, pequeño poblado de antigua data. Destaca desde el mar la hermosa torre de su iglesia de madera, Monumento Nacional, hito de navegación, y el micro-astillero de embarcaciones menores. Hoy es un sector residencial, con balnearios adyacentes, como la famosa "Punta del Piojo", pequeña puntilla de contornos similares a este ácaro, junto a las cabañas de turismo, camping, hoteles y casas del lugar.',
        'Todas las playas de estos sectores fueron recorridas por las bandas canoeras Chono, los primitivos habitantes de Chiloé, cuyos sitios arqueológicos, los "conchales", son de importancia científica relevante, no sólo por el material lítico encontrado, sino que se constituyen en un auténtico sitio de investigación. Asimismo, dichas playas son pródigas en mariscos y pueden observarse mariscadores o recolectores con sus paldes, gualatos o azadas, yoles o canastos, buscando la alimentación diaria cuando la baja marea permite esta labor cotidiana.',
        'Se continúa con rumbo Norte por la Playa Sabanilla, a unos 3 Kms. de distancia. La ciudad aparece grandiosa, emplazada en su pequeña terraza entre los 30 y 50 metros sobre el nivel del mar, mostrando a lo lejos las simbólicas y ágiles torres de la Iglesia San Francisco. Ingresamos al sector de la desembocadura del Río Gamboa si la marea lo permite, presenciando los palafitos ubicados en sus riberas, y se contornea por la parte Sur de Castro navegando paralelamente a las casas que allí se localizan, tal cual una "Venecia insular", hasta llegar al muelle Los Chalupones entre las múltiples embarcaciones en la bahía.',
        'Así, la navegación por el puerto-fiordo castreño es una experiencia gratificante, emulando el rumbo de tantos otros que lo hicieron en siglos pasados y de nautas chilotes del presente, contribuyendo a revalorizar la identidad y el medio ambiente, teniendo como eje de vida a la ciudad-puerto. ¡Viva la diferencia!'
    ]
}