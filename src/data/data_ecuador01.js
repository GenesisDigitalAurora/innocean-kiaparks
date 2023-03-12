import { 
    Bosque2,
    EcuadorResumeImage1,
    ImageEcuador01New,
    ImageEcuador01Old,
    ImageEcuador01Video,
    ImageEcuador01Description1_1,
    ImageEcuador01Description1_2,
    ImageEcuador01Description1_3,
    ImageEcuador01Description1_4,
    ImageEcuador01Description1_5,
    ImageEcuador01Description1_6,
    ImageEcuador01Description1_7,
    ImageEcuador01Description1_8,
    ImageEcuador01Description1_9,
    ImageEcuador01Description1_10,
    ImageEcuador01Description1_11,
    ImageEcuador01Description1_12,
    ImageEcuador01Description1_13,
    ImageEcuador01Description1_14,
    ImageEcuador01Description1_15,
    ImageEcuador01Description1_16,
    ImageEcuador01Description1_17,
    ImageEcuador01Description2_1,
    ImageEcuador01Description2_2,
    ImageEcuador01Description2_3,
    ImageEcuador01Description2_4,
    ImageEcuador01Description2_5,
    ImageEcuador01Description2_6,
    ImageEcuador01Description2_7,
    ImageEcuador01Description2_8,
    ImageEcuador01Description2_9,
    ImageEcuador01Description2_10,
    ImageEcuador01Description2_11,
    ImageEcuador01Description2_12,
    ImageEcuador01Description2_13,
    ImageEcuador01Description2_14,
    ImageEcuador01Description2_15,
    ImageEcuador01Description2_16,
    ImageEcuador01Description2_17,
    ImageEcuador01Gallery1,
    ImageEcuador01Gallery2,
    ImageEcuador01Gallery3,
    ImageEcuador01Gallery4,
    ImageEcuador01Gallery5,
    ImageEcuador01Gallery6,
    ImageEcuador01Gallery7,
    ImageEcuador01Gallery8,
    ImageEcuador01Gallery9,
    ImageEcuador01Gallery10,
    ImageEcuador01Gallery11,
    ImageEcuador01Gallery12,
    ImageEcuador01Gallery13,
    ImageEcuador01Gallery14,
    ImageEcuador01Gallery15,
    
} from "../assets/images";

export const kiaparks_ecuador01 = {
    id: 1,
    side: 1,
    country: "Ecuador",
    resumeCountry: "Quito, Ecuador",
    location: "Parque de La Mujer y El Niño",
    maps: [-0.1842652, -78.4991902],
    zoom: 17,
    resumeEsp: "Alcanzamos la meta de apoyar la preservación del Parque de La Mujer y del Niño en sus 6,4 hectáreas. A través del deporte, la sana convivencia y juegos inclusivos, remodelamos todas las áreas comunes del parque utilizando como herramienta la sostenibilidad, y llevando un mensaje claro para motivar e impulsar el cuidado del medio ambiente.",
    resumeEng: "We reached the goal of supporting the preservation of the Women's and Children's Park in its 6.4 hectares. Through sports, healthy coexistence, and inclusive games, we restyle all the common areas of the park using sustainability as a tool and carrying a clear message to motivate and promote care for the environment.",
    description01Esp: "Este extenso parque, de 6.4 hectáreas, ubicado en medio de la ciudad de Quito, fue concebido como un merecido tributo a la incansable lucha de las mujeres por la igualdad de género, y también a aquellas que gracias a su temple y sacrificio se han destacado a lo largo de la historia del Ecuador. Remodelamos todas las áreas comunes del parque utilizando como herramienta la sostenibilidad, y llevando un mensaje claro para motivar e impulsar el cuidado del medio ambiente.",
    description01Eng: "This extensive 6.4-hectare park, located in the middle of the city of Quito, was conceived as a well-deserved tribute to the tireless struggle of women for gender equality and those who, thanks to their grit and sacrifice, have stood out throughout the history of Ecuador. We remodeled all the park's common areas using sustainability as a tool and carrying a clear message to motivate and promote care for the environment.",
    description02: (lang) => {
        return (
            <>
                <div className="container">
                    <div className="intro-text">
                        {
                            (lang === 'es')
                            ?<p>Líder y pionero en movilidad sostenible, Kia Ecuador decide enfocar sus esfuerzos a la comunidad con renovadas áreas verdes y espacios lúdicos que permitan concientizar y conectar con la naturaleza.</p>
                            :<p>Leader and pioneer in sustainable mobility, Kia Ecuador focused on the community with renovated green areas and recreational spaces that allow awareness and connection with nature.</p>
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
                                <li>Zona Pet Friendly</li>
                                <li>Túneles Verdes</li>
                                <li>Área de Gimnasio</li>
                                <li>Zona de Picnic</li>
                                <li>Juegos Infantiles</li>
                                <li>Esculturas</li>
                                <li>Baños</li>
                                <li>Canchas de Básquetbol</li>
                                <li>Graderías Canchas de Básquetbol</li>
                                <li>Mural</li>
                                <li>Canchas de Fútbol</li>
                                <li>Graderías Cancha de Fútbol</li>
                                <li>Canchas de Voleibol</li>
                                <li>Áreas Verdes y Señalética</li>
                                <li>Punto de Carga para vehículos eléctricos</li>   
                            </>)
                            :(<>
                                <li>Pet-Friendly Zone</li>
                                <li>Green Tunnels</li>
                                <li>Gym area</li>
                                <li>Picnic Area</li>
                                <li>Playground</li>
                                <li>Sculptures</li>
                                <li>Bathrooms</li>
                                <li>Basketball Courts</li>
                                <li>Bleachers Basketball Courts</li>
                                <li>Mural</li>
                                <li>Soccer fields</li>
                                <li>Soccer Bleachers Fiels</li>
                                <li>Volleyball Courts</li>
                                <li>Green Areas and Signages</li>
                                <li>Charging Station for Electric Vehicles</li>
                            </>)
                        }
                        </ul>
                    </div>
                </div>
            </>
        );
    },
    imageResume: EcuadorResumeImage1,
    url: "ecuador/parquedelamujeryelnino",
    videoActivated: true,
    detailVideoURL: "https://www.youtube.com/embed/FctcFcOmgu0?autoplay=1&options=0&controls=0",
    detailVideoImage: ImageEcuador01Video,
    detailImageNew: ImageEcuador01New,
    detailImageOld: ImageEcuador01Old,
    descriptionsSet: [
        {
            descTextEsp: [
                '<h2>Zona Pet Friendly</h2><p>Era un espacio con necesidad de mantenimiento y un espacio muy grande para aprovecharlo.</p>',
                '<h2>Túneles Verdes</h2><p>Se identifico la oportunidad de embellecer ambos túneles dándoles mantenimiento y que el espacio se vea más verde.</p>',
                '<h2>Área de Gimnasio</h2><p>Aparatos sin un continuo mantenimiento y espacios desgastados.</p>',
                '<h2>Zona de Picnic</h2><p>Requería una limpieza profunda y una renovación importante para atraer a más visitantes.</p>',
                '<h2>Juegos Infantiles</h2><p>Un lugar que requería mantenimiento, con juegos que por su condición, dejaban de ser atractivos para los niños.</p>',
                '<h2>Esculturas</h2><p>Representaciones que merecían atención y mayor cuidado.</p>',
                '<h2>Esculturas</h2><p>Representaciones que merecían atención y mayor cuidado.</p>',
                '<h2>Esculturas</h2><p>Representaciones que merecían atención y mayor cuidado.</p>',
                '<h2>Baños</h2><p>Pintura descuidada y zona con necesidad de remodelación.</p>',
                '<h2>Cancha de Básquetbol</h2><p>Una cancha que merecía un aspecto más inspirador para nuestros deportistas.</p>',
                '<h2>Graderías Cancha de Básquetbol</h2><p>Área con oportunidad de mejoría.</p>',
                '<h2>Mural</h2><p>Se contaba con un mural el cual ya no reflejaba la intención con la que se hizo inicialmente debido al desgaste y falta de pintura.</p>',
                '<h2>Canchas de Fútbol</h2><p>El pasto se encontraba con necesidad de remodelación al igual que las estructuras metálicas.</p>',
                '<h2>Graderías Canchas de Fútbol</h2><p>Se encontraban con un terminado de cemento.</p>',
                '<h2>Cancha de Voleibol</h2><p>Espacio con la oportunidad de mejorar su piso, gradas y alrededores.</p>',
                '<h2>Áreas Verdes y Señalética</h2><p>Espacios que se encontraron con la oportunidad de mejorar.</p>',
                '<h2>Punto de Carga para Vehículos Eléctricos</h2><p>Contábamos con un estacionamiento común, sin tecnología o inclusión.</p>',
            ],
            descTextEng: [
                '<h2>Pet Friendly Zone</h2><p>It needed maintenance and a vast room to take advantage of.</p>',
                '<h2>Green Tunnels</h2><p>The opportunity was identified to beautify both tunnels by maintaining them and making the space look greener.</p>',
                '<h2>Gym area</h2><p>Devices without continuous maintenance and worn spaces.</p>',
                '<h2>Picnic Area</h2><p>It required deep cleaning and a significant renovation to attract more visitors.</p>',
                '<h2>Playground</h2><p>A place that required maintenance, with games that, due to their condition, were no longer attractive to children.</p>',
                '<h2>Sculptures</h2><p>Representations that deserved attention and more excellent care.</p>',
                '<h2>Sculptures</h2><p>Representations that deserved attention and more excellent care.</p>',
                '<h2>Sculptures</h2><p>Representations that deserved attention and more excellent care.</p>',
                '<h2>Bathrooms</h2><p>Sloppy paint and need remodeling.</p>',
                '<h2>Basketball Courts</h2><p>A court that deserved a more inspiring look for our athletes.</p>',
                '<h2>Bleachers Basketball Courts</h2><p>Area with opportunity for improvement.</p>',
                '<h2>Mural</h2><p>There was a mural that no longer reflected the intention with which it was initially made due to wear and tear and lack of paint.</p>',
                '<h2>Soccer Fields</h2><p>The grass needed remodeling, as well as the metallic structures.</p>',
                '<h2>Soccer Fields Bleachers</h2><p>They were with a cement finish.</p>',
                '<h2>Volleyball Court</h2><p>Space with the opportunity to improve its floor, stands, and surroundings.</p>',
                '<h2>Green Areas and Signages</h2><p>Spaces that were found with the opportunity to improve.</p>',
                '<h2>Charging Station for Electric Vehicles</h2><p>We had a familiar parking lot without technology or inclusion.</p>',
            ],
            images: [
                { url: ImageEcuador01Description1_1 },
                { url: ImageEcuador01Description1_2 },
                { url: ImageEcuador01Description1_3 },
                { url: ImageEcuador01Description1_4 },
                { url: ImageEcuador01Description1_5 },
                { url: ImageEcuador01Description1_6 },
                { url: ImageEcuador01Description1_7 },
                { url: ImageEcuador01Description1_8 },
                { url: ImageEcuador01Description1_9 },
                { url: ImageEcuador01Description1_10 },
                { url: ImageEcuador01Description1_11 },
                { url: ImageEcuador01Description1_12 },
                { url: ImageEcuador01Description1_13 },
                { url: ImageEcuador01Description1_14 },
                { url: ImageEcuador01Description1_15 },
                { url: ImageEcuador01Description1_16 },
                { url: ImageEcuador01Description1_17 },
            ],
            type: 'left'
        },
        {
            descTextEsp: [
                '<h2>Zona Pet Friendly</h2><p>Colocamos mobiliario para que las personas puedan descansar mientras sus mascotas juegan, agregamos juegos para los amigos de 4 patas y colocamos zonas de hidratación para ambos.</p>',
                '<h2>Túneles Verdes</h2><p>Colocamos frases motivacionales dentro de los túneles y se puso un sistema de riego para que las plantas a su alrededor logren crecer y cubrir toda la zona; dando un espacio con sombra para todos los visitantes.</p>',
                '<h2>Área de Gimnasio</h2><p>Pusimos a punto las máquinas del área de gimnasia para los adultos mayores más activos.</p>',
                '<h2>Zona de Picnic</h2><p>Se readecuaron las áreas de BBQ, para inspirar los mejores momentos.</p>',
                '<h2>Juegos Infantiles</h2><p>Le dimos nueva vida al espacio para que los niños y sobre todo los papás, se sientan tranquilos y seguros.</p>',
                '<h2>Esculturas</h2><p>Se restauraron cada una de las esculturas para devolverles su mensaje y presencia.</p>',
                '<h2>Esculturas</h2><p>Se restauraron cada una de las esculturas para devolverles su mensaje y presencia.</p>',
                '<h2>Esculturas</h2><p>Se restauraron cada una de las esculturas para devolverles su mensaje y presencia.</p>',
                '<h2>Baños</h2><p>Reacondicionados con nuevo diseño de pintura el cuál se hizo posible por una dinámica con niños ecuatorianos.</p>',
                '<h2>Cancha de Básquetbol</h2><p>Se le dio una nueva personalidad con colores que inspiran, una cancha y aros en buenas condiciones, y para los espectadores, nuevas gradas.</p>',
                '<h2>Graderías Cancha de Básquetbol</h2><p>Se le dio una nueva personalidad con colores que inspiran, una cancha y aros en buenas condiciones, y para los espectadores, nuevas gradas.</p>',
                '<h2>Mural</h2><p>Rinde tributo a aquellas mujeres que hacían de este lugar su sitio de concentración para protestar en busca de mejores días para ellas y las futuras generaciones.</p>',
                '<h2>Canchas de Fútbol</h2><p>Dimos mantenimiento al pasto de una de las canchas y en ambas colocamos nuevas redes. Se colocó señalética y un área de hidratación cerca de ambas.</p>',
                '<h2>Graderías Cancha de Fútbol</h2><p>Se le dio mantenimiento y colocó un nuevo diseño a las gradas y más vida al pasto.</p>',
                '<h2>Cancha de Voleibol</h2><p>Se pintó la cancha de nuevo, le dimos mantenimiento a sus alrededores y próximamente se colocará una red para jugar.</p>',
                '<h2>Áreas Verdes y Señalética</h2><p>Se colocó mobiliario varias áreas verdes dentro del parque, colocamos señalética en cada una de las zonas del parque y dimos mantenimiento a las que ya existían.</p>',
                '<h2>Punto de Carga para Vehículos Eléctricos</h2><p>Se reconstruyó el parqueadero e instalamos un punto de carga para vehículos eléctricos.</p>',
            ],
            descTextEng: [
                '<h2>Pet Friendly Zone</h2><p>We place furniture so that people can rest while their pets play, we add games for 4-legged friends and we place hydration areas for both.</p>',
                '<h2>Green Tunnels</h2><p>We placed motivational phrases inside the tunnels and an irrigation system was installed so that the plants around them could grow and cover the entire area; giving a shady space for all visitors.​</p>',
                '<h2>Gym area</h2><p>We set up the machines in the gym area for the most active seniors.</p>',
                '<h2>Picnic Area</h2><p>The BBQ areas were readapted to inspire the best moments.</p>',
                '<h2>Playground</h2><p>We gave new life to the space so that children, and especially parents, feel calm and safe.</p>',
                '<h2>Sculptures</h2><p>Each of the sculptures were restored to return their message and presence.</p>',
                '<h2>Sculptures</h2><p>Each of the sculptures were restored to return their message and presence.</p>',
                '<h2>Sculptures</h2><p>Each of the sculptures were restored to return their message and presence.</p>',
                '<h2>Bathrooms</h2><p>Refurbished with a new paint design which was made possible by a dynamic with Ecuadorian children.</p>',
                '<h2>Basketball Courts</h2><p>It was given a new personality with inspiring colors, a court and hoops in good condition, and for the spectators, new bleachers.</p>',
                '<h2>Bleachers Basketball Courts</h2><p>It was given a new personality with inspiring colors, a well-maintained court and hoops, and for the spectators, new bleachers.</p>',
                '<h2>Mural</h2><p>It pays tribute to those women who made this place their rallying point to protest in search of better days for themselves and future generations.</p>',
                '<h2>Soccer fields</h2><p>We gave maintenance to the grass of one of the fields and in both we placed new nets. Signage and a hydration area were placed near both.</p>',
                '<h2>Soccer Bleachers Fiels</h2><p>Maintenance was given and a new design was placed on the stands and more life to the grass.</p>',
                '<h2>Volleyball Courts</h2><p>The court was painted again, we maintained its surroundings and soon a net will be placed to play.</p>',
                '<h2>Green Areas and Signages</h2><p>Furniture was placed in several green areas within the park, we placed signage in each of the park areas and we maintained those that already existed.</p>',
                '<h2>Charging Station for Electric Vehicles</h2><p>The parking lot was rebuilt and we installed a charging point for electric vehicles.</p>',
            ],
            images: [
                { url: ImageEcuador01Description2_1 },
                { url: ImageEcuador01Description2_2 },
                { url: ImageEcuador01Description2_3 },
                { url: ImageEcuador01Description2_4 },
                { url: ImageEcuador01Description2_5 },
                { url: ImageEcuador01Description2_6 },
                { url: ImageEcuador01Description2_7 },
                { url: ImageEcuador01Description2_8 },
                { url: ImageEcuador01Description2_9 },
                { url: ImageEcuador01Description2_10 },
                { url: ImageEcuador01Description2_11 },
                { url: ImageEcuador01Description2_12 },
                { url: ImageEcuador01Description2_13 },
                { url: ImageEcuador01Description2_14 },
                { url: ImageEcuador01Description2_15 },
                { url: ImageEcuador01Description2_16 },
                { url: ImageEcuador01Description2_17 },
            ],
            type: 'right'
        }
    ],
    galleryImages: [
        { url: ImageEcuador01Gallery1 },
        { url: ImageEcuador01Gallery2 },
        { url: ImageEcuador01Gallery3 },
        { url: ImageEcuador01Gallery4 },
        { url: ImageEcuador01Gallery5 },
        { url: ImageEcuador01Gallery6 },
        { url: ImageEcuador01Gallery7 },
        { url: ImageEcuador01Gallery8 },
        { url: ImageEcuador01Gallery9 },
        { url: ImageEcuador01Gallery10 },
        { url: ImageEcuador01Gallery11 },
        { url: ImageEcuador01Gallery12 },
        { url: ImageEcuador01Gallery13 },
        { url: ImageEcuador01Gallery14 },
        { url: ImageEcuador01Gallery15 },
    ],
    footer: [
        {
            url: 'https://www.kia.com/ec/discover-kia/sustainability.html',
            titleEsp: 'Sostenible',
            titleEng: 'Sustentability',
        },
        {
            url: 'https://www.kia.com/ec/discover-kia/our-inspiration.html',
            titleEsp: 'Nuestra Inspiración',
            titleEng: 'Our Inspiration',
        },
        {
            url: 'https://www.kia.com/ec/showroom/ev6/features.html',
            titleEsp: 'EV6',
            titleEng: 'EV6',
        },
        {
            url: 'https://www.kia.com/ec/main.html',
            titleEsp: 'Kia en ECU',
            titleEng: 'Kia ECU',
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
            url: 'https://twitter.com/kia_worldwide?s=11&t=dKuFEbCpVcgQmdG9RjH1ug'
        }
    ]
}