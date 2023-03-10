import { 
    Bosque2,
    ChileResumeImage,
    ImageChileNew,
    ImageChileOld,
    ImageChileVideo,
    ImageChileDescription1_1,
    ImageChileDescription1_2,
    ImageChileDescription1_3,
    ImageChileDescription1_4,
    ImageChileDescription1_5,
    ImageChileDescription1_6,
    ImageChileDescription2_1,
    ImageChileDescription2_2,
    ImageChileDescription2_3,
    ImageChileDescription2_4,
    ImageChileDescription2_5,
    ImageChileDescription2_6,
    ImageChileGallery1,
    ImageChileGallery2,
    ImageChileGallery3,
    ImageChileGallery4,
    ImageChileGallery5,
    ImageChileGallery6,
    ImageChileGallery7,
} from "../assets/images";

export const kiaparks_chile_es = {
    id: 0,
    side: 0,
    country: "Chile",
    resumeCountry: "Santiago, Chile",
    location: "Ciudad Deportiva USS",
    maps: [-33.4287309, -70.537586],
    zoom: 20,
    resumeEsp: "Se hace presente renovando uno de los espacios principales de la Ciudad Deportiva USS con cargadores eléctricos, zona de ejercicios, canchas de tenis, zona lounge y de ocio, y muchos otros elementos que vienen a apoyar desde la sustentabilidad y electromovilidad.",
    resumeEng: "USS Sports City renews one of its leading spaces with electric chargers, an exercise area, tennis courts, a lounge area, leisure, and many other elements supporting sustainability and electromobility.",
    description01Esp: "Ciudad Deportiva USS abrió sus puertas en marzo de 2002, es el mayor complejo deportivo en Santiago de Chile. Con 12,5  hectáreas ofrece más de 8 zonas deportivas, en un lugar totalmente público para todos. Kia Chile se hace presente renovando uno de los espacios principales del centro deportivo con cargadores eléctricos, zona de ejercicios, canchas de tenis, zona lounge y de ocio, y muchos otros elementos que vienen a apoyar desde la sustentabilidad y electromovilidad.",
    description01Eng: "Ciudad Deportiva USS opened its doors in March 2002; it is the largest sports complex in Santiago de Chile. With 12.5 hectares, it offers more than eight sports areas in a public place for everyone. Kia Chile is present by renovating one of the main spaces of the sports center with electric chargers, an exercise area, tennis courts, a lounge and leisure area, and many other elements that support sustainability and electromobility.",
    description02: (lang) =>{
        return(
            <>
            <div className="container">
                <div className="intro-text">
                    {
                        (lang === 'es')
                        ?<p>Para darle una nueva personalidad y lograr motivar e inspirar a nuestros deportistas, se trabajaron, construyeron y reconstruyeron los espacios que más lo necesitaban apoyando desde un punto de vista sostenible.</p>
                        :<p>To give a new personality and motivate and inspire our athletes, the spaces that needed it the most were worked on, built, and rebuilt, supporting them from a sustainable point of view.</p>
                    }
                </div>
            </div>
            <div className='RehabilitedZones'  style={{ backgroundImage: `url(${Bosque2})`}}>
                <div className="description-rehab">
                    {
                        (lang === 'es')
                        ?<h1>Zonas Rehabilitadas:</h1>
                        :<h1>Rehabilitated Areas:</h1>
                    }
                    <br/>
                    <ul>
                        {
                         (lang === 'es')
                         ?(
                            <>
                                <li>Estacionamientos exclusivos para vehículos eléctricos, con cargadores Voltex</li>
                                <li>Pista de Calentamiento</li>
                                <li>Zona de Máquinas de Ejercicio</li>
                                <li>Zona Lounge</li>
                                <li>Zona Juegos y Minigolf</li>
                                <li>Limpieza y arreglos en Canchas de Tenis</li>
                                <li>Rampas de acceso inclusivo a Zona Kia Parks</li>
                                <li>Sistema de riego de bajo consumo</li>
                            </>
                         )
                         :(
                            <>
                                <li>Exclusive parking for electric vehicles, with Voltex chargers</li>
                                <li>Warm-up Track</li>
                                <li>Gym Area</li>
                                <li>Rest and Recreation Area</li>
                                <li>Playgrounds and Minigolf</li>
                                <li>Cleaning and repairs at Tennis Courts</li>
                                <li>Inclusive access ramps to Kia Parks Zone</li>
                                <li>Low-consumption irrigation system</li>
                            </>
                         ) 
                        }
                    </ul>
                </div>
            </div>
            </>
        );
    },
    imageResume: ChileResumeImage,
    url: "chile/ciudaddeportivauss",
    videoActivated: true,
    detailVideoURL: "https://www.youtube.com/embed/l2o028oIy5E?autoplay=1&options=0&controls=0",
    detailVideoImage: ImageChileVideo,
    detailImageNew: ImageChileNew,
    detailImageOld: ImageChileOld,
    descriptionsSet:[
        {
            descTextEsp: [
                '<h2>Estacionamiento</h2><p>Contábamos con un estacionamiento común, sin tecnología o inclusividad.</p>',
                '<h2>Acceso</h2><p>El acceso a las canchas de tenis y ahora \'Kia Park\' correspondía a solo una escalera en mal estado.</p>',
                '<h2>Área de Gimnasio</h2><p>Denotaba un gran desgaste por falta de mantenimiento.</p>',
                '<h2>Zona de Descanso y Recreación</h2><p>La zona estaba totalmente inutilizada.</p>',
                '<h2>Canchas de Tenis</h2><p>Las canchas presentaban signos de desgaste y elementos totalmente oxidados.</p>',
                '<h2>Zona Verde</h2><p>Se contaba con una zona tierrosa, con poca vegetación y falta de diseño.</p>'
            ],
            descTextEng: [
                '<h2>Parking Area</h2><p>We had a common parking lot without technology or inclusiveness.',
                '<h2>Principal Access</h2><p>The access to the tennis courts and now "Kia Park" corresponded to just a staircase in poor condition.</p>',
                '<h2>Gym Area</h2><p>It showed considerable wear due to a lack of maintenance.</p>',
                '<h2>Rest and Recreation Area</h2><p>The area was unused.</p>',
                '<h2>Tennis Courts</h2><p>The courts showed signs of wear and completely rusted elements.</p>',
                '<h2>Green Zone</h2><p>It was a dirt area with little vegetation and a lack of design.</p>',
            ],
            images:[
                { url: ImageChileDescription1_1 },
                { url: ImageChileDescription1_2 },
                { url: ImageChileDescription1_3 },
                { url: ImageChileDescription1_4 },
                { url: ImageChileDescription1_5 },
                { url: ImageChileDescription1_6 },
            ],
            type: 'left'
        },
        {
            descTextEsp: [
                '<h2>Estacionamiento</h2><p>Se realizó un trabajo de ingeniería para instalar 2 cargadores eléctricos exclusivos para vehículos EV y 2 estacionamientos exclusivos para discapacitados con señaléticas Kia.</p>',
                '<h2>Acceso</h2><p>La escalera se reconstruyó por completo con escalones constituidos por madera reciclada, además de señalética de luces de energía solar y se construyeron desde cero accesos para personas con movilidad reducida.</p>',
                '<h2>Área de Gimnasio</h2><p>En esta zona se colocaron máquinas en mejor estado y funcionamiento, además de una pista de calentamiento compuesta 100% de material de caucho reciclado y NFU. </p>',
                '<h2>Zona de Descanso y Recreación</h2><p>Poblamos de mobiliario compuesto por material 100% de plástico reciclado con sillones y toldos para el descanso de las personas, como también juegos para niños y una mini cancha de golf.</p>',
                '<h2>Canchas de Tenis</h2><p>Nuestro aporte fue, aplanar pasillos, mejorar y llenar de arcilla, modificar rejas, pintar mobiliario e instalación de carteles con mensajes motivacionales (todos con material reciclado).</p>',
                '<h2>Zona Verde</h2><p>Se colocaron árboles, maicilla, plantas, entre otros, a través de un paisajismo y trabajo inteligente que ayuda al ahorro de agua y al cuidado de la naturaleza.</p>'
            ],
            descTextEng: [
                '<h2>Parking Area</h2><p>Engineering work was done to install two exclusive electric chargers for EV vehicles and two parking spaces for disabled persons with Kia signage.</p>',
                '<h2>Principal Access</h2><p>The staircase was rebuilt entirely with steps made of recycled wood, and signage of solar-powered lights and accesses for people with reduced mobility were built from scratch.</p>',
                '<h2>Gym Area</h2><p>Machines in better condition and functioning were placed in this area, and a heating track was made of 100% recycled rubber material and NFU.</p>',
                '<h2>Rest and Recreation Area</h2><p>We place furniture made of 100% recycled plastic with armchairs and shades for people to rest, games for children, and a mini golf course.</p>',
                '<h2>Tennis Courts</h2><p>Our contributions were flattening corridors, improving and filling them with clay, modifying bars, painting furniture, and installing posters with motivational messages (all with recycled material).</p>',
                '<h2>Green Zone</h2><p>Trees, gross sand, and plants, among others, were placed through landscaping and intelligent work that helps save water and care for nature.',
            ],
            images:[
                { url: ImageChileDescription2_1 },
                { url: ImageChileDescription2_2 },
                { url: ImageChileDescription2_3 },
                { url: ImageChileDescription2_4 },
                { url: ImageChileDescription2_5 },
                { url: ImageChileDescription2_6 },
            ],
            type: 'right'
        }
    ],
    galleryImages:[
        { url: ImageChileGallery1 },
        { url: ImageChileGallery2 },
        { url: ImageChileGallery3 },
        { url: ImageChileGallery4 },
        { url: ImageChileGallery5 },
        { url: ImageChileGallery6 },
        { url: ImageChileGallery7 }
    ],
    footer:[
        {
            url: 'https://www.kia.com/cl/discover-kia/sustainability.html',
            titleEsp: 'Sustentabilidad',
            titleEng: 'Sustentability',
        },
        {
            url: 'https://www.kia.com/cl/discover-kia/our-inspiration.html',
            titleEsp: 'Nuestra Inspiración',
            titleEng: 'Our Inspiration',
        },
        {
            url: 'https://www.kia.com/cl/showroom/ev6/features.html',
            titleEsp: 'Ev6',
            titleEng: 'Ev6',
        },
        {
            url: 'https://www.kia.com/cl/main.html',
            titleEsp: 'Kia en CL',
            titleEng: 'Kia CL',
        }
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