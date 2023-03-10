import { 
    Bosque2,
    ParaguayResumeImage,
    ImageParaguayNew,
    ImageParaguayOld,
    ImageParaguayVideo,
    ImageParaguayDescription1_1,
    ImageParaguayDescription1_2,
    ImageParaguayDescription1_3,
    ImageParaguayDescription1_4,
    ImageParaguayDescription1_5,
    ImageParaguayDescription1_6,
    ImageParaguayDescription1_7,
    ImageParaguayDescription1_8,
    ImageParaguayDescription1_9,
    ImageParaguayDescription1_10,
    ImageParaguayDescription1_11,
    ImageParaguayDescription2_1,
    ImageParaguayDescription2_2,
    ImageParaguayDescription2_3,
    ImageParaguayDescription2_4,
    ImageParaguayDescription2_5,
    ImageParaguayDescription2_6,
    ImageParaguayDescription2_7,
    ImageParaguayDescription2_8,
    ImageParaguayDescription2_9,
    ImageParaguayDescription2_10,
    ImageParaguayDescription2_11,
    ImageParaguayGallery1,
    ImageParaguayGallery2,
    ImageParaguayGallery3,
    ImageParaguayGallery4,
    ImageParaguayGallery5,
    ImageParaguayGallery6,
    ImageParaguayGallery7,
} from "../assets/images";

export const kiaparks_paraguay = {
    id: 3,
    side: 1,
    country: "Paraguay",
    resumeCountry: "Asunción, Paraguay",
    location: "Parque Ñu Guasú",
    maps: [-25.2595100, -57.5319678],
    zoom: 15,
    resumeEsp: "“La inclusión y el deporte” son el impacto de este proyecto. La colocación de rampas para sillas de ruedas, señalamientos en sistema braille, hasta la remodelación de espacios para actividad física y la rehabilitación de los espacios verdes, reflejan nuestro mensaje de sostenibilidad.",
    resumeEng: "“Inclusion and sport” are the impact of this project. The placement of wheelchair's ramps, braille signs, even the remodeling of spaces for physical activity and the rehabilitation of green spaces, reflect our sustainability message.",
    description01Esp: "El Parque Ñu Guasú es un área verde de 25 ha. aproximadamente, ubicada en Luque, ciudad del Departamento Central de Paraguay. Logramos construir la Zona Kia Parks, en donde se construyeron rampas para permitir el acceso a personas en sillas de ruedas y lograr un espacio más inclusivo; siguiendo el mismo objetivo, se instalaron señaléticas en sistema braille, se remodelaron los espacios para actividad física al aire libre y se rehabilitaron jardines y espacios verdes, reflejando el mensaje de sostenibilidad y responsabilidad social de Kia Paraguay",
    description01Eng: "Ñu Guasú Park is a green area of 25 ha. They are located in Luque, a city in the Central Department of Paraguay. We managed to build the Kia Zone, where ramps were constructed to allow access for people in wheelchairs and achieve a more inclusive space; Following the same objective, Braille signs were installed, areas for outdoor physical activity were remodeled, and gardens and green spaces were rehabilitated, reflecting Kia Paraguay's message of sustainability and social responsibility.",
    description02: (lang) => {
        return (
            <>
                <div className="container">
                    <div className="intro-text">
                        {
                            (lang === 'es')
                            ?<p>El recuperar y crear nuevas zonas verdes, restaurar áreas deportivas y recreativas es nuestra manera de reflejar nuestro mensaje de sostenibilidad. El impacto de este proyecto es “la inclusión y el deporte”.</p>
                            :<p>Recovering and creating new green areas and restoring sports and recreational areas is our way of reflecting our sustainability message. The impact of this project is "inclusion and sport."</p>
                        }
                    </div>
                </div>
                <div className='RehabilitedZones' style={{ backgroundImage: `url(${Bosque2})` }}>
                    <div className="description-rehab">
                        {
                            (lang === 'es')
                            ?<h1>Zonas Rehabilitadas:</h1>
                            :<h1>Rehabilitated Areas:</h1>
                        }
                        <br />
                        <ul>
                            {
                                (lang === 'es')
                                ?(<>
                                    <li>Acceso</li>
                                    <li>Canchas de Fútbol</li>
                                    <li>Cancha de Voleibol</li>
                                    <li>Canchas de Tenis para Niños</li>
                                    <li>Canchas de Tenis para Adultos</li>
                                    <li>Túnel Ecológico</li>
                                    <li>Espacio para Yoga</li>
                                    <li>Área de Gimnasio</li>
                                    <li>Zona de Descanso</li>
                                    <li>Zona de Niños</li>
                                    <li>Zona de Hidratación</li>
                                </>)
                                :(<>
                                    <li>Principal Access</li>
                                    <li>Soccer Fields</li>
                                    <li>Volleyball Court</li>
                                    <li>Children's Tennis Courts</li>
                                    <li>Adult's Tennis Courts</li>
                                    <li>Ecological Tunnel</li>
                                    <li>Yoga Area</li>
                                    <li>Gym Area</li>
                                    <li>Rest Area</li>
                                    <li>Playground</li>
                                    <li>Hydration Zone</li>
                                </>)
                            }
                        </ul>
                    </div>
                </div>
            </>
        );
    },
    imageResume: ParaguayResumeImage,
    url: "paraguay/parquenuguasu",
    videoActivated: true,
    detailVideoURL: "https://www.youtube.com/embed/CjcT5P2ixXQ?autoplay=1&options=0&controls=0",
    detailVideoImage: ImageParaguayVideo,
    detailImageNew: ImageParaguayNew,
    detailImageOld: ImageParaguayOld,
    descriptionsSet: [
        {
            descTextEsp: [
                '<h2>Acceso</h2><p>Seleccionamos un puente principal para ingreso al Kia Parks, este se encontraba sin acceso para personas discapacidades, así como poca seguridad para niños.</p>',
                '<h2>Cancha de Fútbol</h2><p>Se encontraban en descuido tanto la cancha como las gradas para el público.</p>',
                '<h2>Cancha de Voleibol</h2><p>Existía una zona tierrosa sin los equipos para realizar el deporte en el lugar.</p>',
                '<h2>Cancha de Tenis Niños</h2><p>Dos canchas para niños descuidadas, con la pista agrietada y cercos sin tejido metálico.</p>',
                '<h2>Cancha de Tenis Adultos</h2><p>Cancha descuidada y sin el equipamiento básico para disfrutar de este deporte. Los bancos para los aficionados se encontraban en mal estado.</p>',
                '<h2>Túnel Ecológico</h2><p>Un espacio con oportunidad de construir una zona de sombra para los corredores.</p>',
                '<h2>Zona de Yoga</h2><p>Sector de gimnasia que estaba sin uso.</p>',
                '<h2>Zona de Gimnasio</h2><p>Equipos para ejercicio al aire libre se encontraban en mal estado y sin mantenimiento poniendo en riesgo a las personas.</p>',
                '<h2>Zona de Descanso</h2><p>Se contaba con una zona de descanso que se fue deteriorando con el clima.</p>',
                '<h2>Área de Niños</h2><p>Se encontraba en mal estado para su uso o entretenimiento.</p>',
                '<h2>Zona de Hidratación</h2><p>Zona exclusiva para realizar cargas o refrescarse. La misma se encontraba en mal y sin acceso a agua corriente.</p>',
            ],
            descTextEng: [
                '<h2>Principal Access</h2><p>We selected a central bridge to enter the Kia Zone; there was no handicapped access and little security for children.</p>',
                '<h2>Soccer Fields</h2><p>Public fields and stands were neglected.</p>',
                '<h2>Volleyball Court</h2><p>There was a dirt area without the equipment to carry out the sport.</p>',
                "<h2>Children's Tennis Court</h2><p>Two neglected children's courts, cracked tracks, and fences without metal mesh.</p>",
                "<h2>Adult's Tennis Courts</h2><p>The field is in a state of abandonment and without the essential equipment to enjoy this sport. The benches for the fans were in poor condition.</p>",
                '<h2>Ecological Tunnel</h2><p>A space with the opportunity to build a shaded area for runners.</p>',
                '<h2>Yoga Area</h2><p>The gymnastics sector was abandoned and in disrepair.</p>',
                '<h2>Gym Area</h2><p>Outdoor exercise equipment was in bad condition and without maintenance, putting people at risk.</p>',
                '<h2>Rest Area</h2><p>There was a rest area that deteriorated with the weather.</p>',
                '<h2>Playground</h2><p>It was in a bad state for use or entertainment.</p>',
                '<h2>Hydratation Zone</h2><p>Exclusive area for charging or cooling off. It was in a terrible state and without access to running water.</p>',
            ],
            images: [
                { url: ImageParaguayDescription1_1 },
                { url: ImageParaguayDescription1_2 },
                { url: ImageParaguayDescription1_3 },
                { url: ImageParaguayDescription1_4 },
                { url: ImageParaguayDescription1_5 },
                { url: ImageParaguayDescription1_6 },
                { url: ImageParaguayDescription1_7 },
                { url: ImageParaguayDescription1_8 },
                { url: ImageParaguayDescription1_9 },
                { url: ImageParaguayDescription1_10 },
                { url: ImageParaguayDescription1_11 },
            ],
            type: 'left'
        },
        {
            descTextEsp: [
                '<h2>Acceso</h2><p>Se realizaron reparaciones y pintura a la madera, colocación de cartelería en chapa, reparación de la rampa de acceso para personas con discapacidad con mayor seguridad y colocación de plantas tipo enredadera en la pérgola.</p>',
                '<h2>Cancha de Fútbol</h2><p>Se realizó una limpieza y cuidado del césped en ambas canchas, reparación y pintura de graderías, tensado de cerco, instalación de cerco nuevo en los laterales en lugar de red de contención, pintura de la cancha con el logo de Kia, pintura de arcos y mejora de la iluminación del predio.</p>',
                '<h2>Cancha de Voleibol</h2><p>Reparaciones y pintura de mampostería de contorno, nivelación de la arena y eliminación de malezas, colocación de red con logo, cambio de luces a LED y pintura de columnas de la red.</p>',
                '<h2>Cancha de Tenis Niños</h2><p>Se realizaron reparaciones y pintura de pisos, pintura de mural, reparación y pintura de graderías, colocación de red con logo y reparación de tejido metálico existente.</p>',
                '<h2>Cancha de Tenis Adultos</h2><p>Se realizaron reparaciones y pintura de pisos y graderías, pintura de mural, colocación de red con logo, instalación de 2 bancos nuevos y colocación de cerco de tejido metálico</p>',
                '<h2>Túnel Ecológico</h2><p>Construimos un túnel de plantas naturales con estructura de metal y media sombra verde de 30 metros de largo con iluminación led nocturna, más tótem de cemento con logo de la marca, código QR que direcciona al landing page y código QR que direcciona a Spotify. El “túnel ecológico” cuenta con un sistema de riego con tecnología avanzada para su mantenimiento.</p>',
                '<h2>Zona de Yoga</h2><p>Transformado en una zona de yoga, realizando una reparación de estructura existente y refuerzo con vigas de metal para pérgola, colocación de plantas trepadoras tipo enredadera, reparación del piso e instalación de un bebedero, de cartelería y banco existente. Caminero: reparación y pintura del piso con juego para niños.</p>',
                '<h2>Zona de Gimnasio</h2><p>Se realizaron varios cambios y reparaciones como: Restauración y mantenimiento de equipos de ejercicio, incorporación de placas con información sobre las máquinas, cómo se usan y qué músculos trabajan, así como un código QR para escanear y escuchar Spotify mientras se entrena.</p>',
                '<h2>Zona de Descanso</h2><p>Se realizaron reparaciones del piso, techo y de la estructura de madera, mantenimiento de bancos de madera con adición de placa con código QR para Spotify de quienes concurran a ese espacio. Se implementaron rampas y caminos para libre circulación de personas discapacitadas.</p>',
                '<h2>Área de Niños</h2><p>Se realizó un mantenimiento y pintura a las estructuras de juegos de niños (hamaca + cúpula de colores). En el caso de las hamacas se cambiarán los pedazos de madera. </p>',
                '<h2>Zona de Hidratación</h2><p>Sabemos de la importancia del agua en el deporte, para lograr ese acceso a todas las personas que visiten el Kia Parks, se enderezaron las barras del techo y se le dio mantenimiento a la pintura, se reparó el material de los bancos, el piso y se dio un tratamiento de malezas.</p>',
            ],
            descTextEng: [
                '<h2>Principal Access</h2><p>Repairs and painting were made to the wood, placement of sheet metal signage, Restoration of the access ramp for the disabled with more excellent safety, and order of vine-type plants in the pergola.</p>',
                '<h2>Soccer Fields</h2><p>The lawn was cleaned and cared for on both pitches; bleachers were repaired and painted; the fence was tightened; a new wall was installed on the sides instead of the containment net; the rise was painted with the Kia logo; the arches were painted, and the improvement of the lighting of the property.</p>',
                '<h2>Volleyball Court</h2><p>Repairs and painting of contour masonry, leveling the sand and removing weeds, placement of net with logo, changing lights to LED, and image of net columns.</p>',
                "<h2>Children's Tennis Court</h2><p>Repairs and painting of floors, mural painting, repair and painting of bleachers, placement of a net with logo, and repair of existing metallic fabric were carried out.</p>",
                "<h2>Adult's Tennis Courts</h2><p>Repairs and painting of floors and bleachers, mural painting, placement of a net with logo, installation of 2 new benches, and post of a metal mesh fence were carried out.</p>",
                "<h2>Ecological Tunnel</h2><p>We built a 30-meter-long tunnel of natural plants with a metal structure and green semi-shade with LED lighting at night, plus a cement totem with the brand's logo and QR code that leads to Spotify. The 'ecological tunnel' has an irrigation system with advanced technology for its maintenance.</p>",
                '<h2>Yoga Area</h2><p>It was transformed into a yoga area, repairing the existing structure and reinforcing it with metal beams for the pergola, placing climbing plants such as the Malvecino vine, repairing the floor, and installing a drinking fountain, signage, and an existing bench. Caminero: repair and painting of the floor with a game for children.</p>',
                '<h2>Gym Area</h2><p>Several changes and repairs were made, such as the Restoration and maintenance of exercise equipment, the incorporation of plates with information about the machines, how they are used, and what muscles work, and a QR code to scan and listen to Spotify while training.</p>',
                '<h2>Rest Area</h2><p>Repairs were made to the floor, ceiling, and wooden structure, and maintenance of wooden benches with the addition of a plate with a QR code for Spotify for those who attend that space. Ramps and paths were implemented for the free movement of disabled people.</p>',
                "<h2>Playground</h2><p>Maintenance and painting were done on the children's play structures (hammock + colored dome). In the case of hammocks, the pieces of wood will be changed.</p>",
                '<h2>Hydratation Zone</h2><p>We know the importance of water in sports. To achieve this access for all the people who visit the Kia Zone, the roof bars were straightened, the paint was maintained, the material on the benches on the floor, and the weed treatment was given.</p>',
            ],
            images: [
                { url: ImageParaguayDescription2_1 },
                { url: ImageParaguayDescription2_2 },
                { url: ImageParaguayDescription2_3 },
                { url: ImageParaguayDescription2_4 },
                { url: ImageParaguayDescription2_5 },
                { url: ImageParaguayDescription2_6 },
                { url: ImageParaguayDescription2_7 },
                { url: ImageParaguayDescription2_8 },
                { url: ImageParaguayDescription2_9 },
                { url: ImageParaguayDescription2_10 },
                { url: ImageParaguayDescription2_11 }
            ],
            type: 'right'
        }
    ],
    galleryImages: [
        { url: ImageParaguayGallery1 },
        { url: ImageParaguayGallery2 },
        { url: ImageParaguayGallery3 },
        { url: ImageParaguayGallery4 },
        { url: ImageParaguayGallery5 },
        { url: ImageParaguayGallery6 },
        { url: ImageParaguayGallery7 },
    ],
    footer: [
        {
            url: 'https://worldwide.kia.com/int/company/sustainability/about/strategy',
            titleEsp: 'Sostenible',
            titleEng: 'Sustainability',
        },
        {
            url: 'https://kia.com.py/descubri-kia/nuestra_inspiracion',
            titleEsp: 'Nuestra Inspiración',
            titleEng: 'Our Inspiration',
        },
        {
            url: 'https://kia.com.py/modelo/caracteristica/18/EV6',
            titleEsp: 'EV6',
            titleEng: 'EV6',
        },
        {
            url: 'https://kia.com.py/',
            titleEsp: 'Kia en PY',
            titleEng: 'Kia in PY',
        },
    ],
    footerSN: [
        {
            net: 'youtube',
            url: 'https://www.youtube.com/@kiacsachannel'
        },
        {
            net: 'linkedin',
            url: 'https://www.linkedin.com/company/kiaworldwide/'
        },
        {
            net: 'instagram',
            url: 'https://instagram.com/kia.worldwide?igshid=YmMyMTA2M2Y='
        },
        {
            net: 'twitter',
            url: 'https://facebook.com/Kiaworldwideofficial/?mibextid=LQQJ4d'
        }
    ]
}