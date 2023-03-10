import { 
    Bosque2,
    PeruResumeImage,
    ImagePeruNew,
    ImagePeruOld,
    ImagePeruVidedo,
    ImagePeruDescription1_1,
    ImagePeruDescription1_2,
    ImagePeruDescription1_3,
    ImagePeruDescription1_4,
    ImagePeruDescription1_5,
    ImagePeruDescription1_6,
    ImagePeruDescription2_1,
    ImagePeruDescription2_2,
    ImagePeruDescription2_3,
    ImagePeruDescription2_4,
    ImagePeruDescription2_5,
    ImagePeruDescription2_6,
    ImagePeruGallery1,
    ImagePeruGallery2,
    ImagePeruGallery3,
    ImagePeruGallery4,
    ImagePeruGallery5,
    ImagePeruGallery6,
    ImagePeruGallery7,
    ImagePeruGallery8,
    ImagePeruGallery9,
} from "../assets/images";

export const kiaparks_lima = {
    id: 4,
    side: 0,
    country: "Lima, Peru",
    resumeCountry: "Lima, Peru",
    location: "Puericultorio Pérez Araníbar",
    maps: [-12.10050, -77.06550],
    zoom:20,
    resumeEsp: "En Lima, contamos con el Puericultorio Pérez Araníbar, un centro de atención a cargo de la beneficencia a niños con espacios al aire libre donde jugar, correr y realizar actividades al aire libre.",
    resumeEng: "In Lima, we have the Puericultorio Pérez Araníbar, a care center run by a charity for children with outdoor spaces where they can play, run and do outdoor activities.",
    description01Esp: "En Lima, contamos con el Puericultorio Pérez Araníbar con una antigüedad de más de 200 años, un centro de atención a cargo de la beneficencia de niños con espacios al aire libre donde pueden jugar, correr y realizar actividades al aire libre. El Proyecto del Puericultorio Pérez Araníbar en Perú, tiene como objetivo cambiar la vida de más de 120 niños en condición de abandono por medio de la remodelación total del área de recreación y deporte.",
    description01Eng: "The Pérez Araníbar Puericultorio Project in Peru aims to change the lives of more than 120 abandoned children by remodeling the recreation and sports area. The space being renovated in Lima is the Puericultorio Pérez Araníbar, which is over 200 years old. It is a care center run by the children's charity with outdoor spaces where they can play, run and do outdoor activities.",
    description02: (lang) =>{
        return(
            <>
            <div className="container">
                <div className="intro-text">
                    {
                        (lang === 'es')
                        ?<p>La construcción del proyecto tomó alrededor de 1 mes en ejecutarse. El movimiento de estos niños nos inspira a apoyar su desarrollo.</p>
                        :<p>The construction of the project took about one month. The movement of these children inspires us to support their growth.</p>
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
                            ?(<>
                                <li>Canchas de Fútbol</li>
                                <li>Canchas Multidisciplinarias (Fútbol y Basketbol)</li>
                                <li>Canchas de Voley</li>
                                <li>Playgrounds (3)</li>
                                <li>Edificio Central</li>
                                <li>Edificios Colindantes</li>   
                            </>)
                            :(<>
                                <li>Soccer Fields</li>
                                <li>Multidisciplinary Courts (Football and Basketball)</li>
                                <li>Volleyball courts</li>
                                <li>Playgrounds (3)</li>
                                <li>Central Building</li>
                                <li>Buldings around the area</li>
                            </>)   
                        }
                    </ul>
                </div>
            </div>
            </>
        );
    },
    imageResume: PeruResumeImage,
    url: "peru/puericultorio",
    videoActivated: true,
    detailVideoURL: "https://www.youtube.com/embed/-ESbve6mAG4?autoplay=1&options=0&controls=0",
    detailVideoImage: ImagePeruVidedo,
    detailImageNew: ImagePeruNew,
    detailImageOld: ImagePeruOld,
    descriptionsSet:[
        {
            descTextEsp: [
                '<h2>Cancha de Fútbol</h2><p>La cancha principal de fútbol se encontraba con un gran desgaste y signos de falta de mantenimiento.</p>',
                '<h2>Canchas Multidisciplinarias</h2><p>Las canchas de cemento presentaban signos de desgaste, al igual que desperfectos como huecos y elementos totalmente oxidados.</p>',
                '<h2>Playgrounds</h2><p>La zona de playground se encontraba en pésimas condiciones en donde los niños jugaban sobre tierra estructuras de madera y metálicas con gran desgaste.</p>',
                '<h2>Playgrounds</h2><p>Asimismo el edificio central denotaba falta de mantenimiento.</p>',
                '<h2>Edificio Central</h2><p>La cancha auxiliar, al igual que la principal, denotaba un gran desgaste en el pasto sinténtico.</p>',
                '<h2>Edificios Colindantes</h2><p>Los edificios colindantes también presentaban signos de falta de mantenimiento.</p>'
            ],
            descTextEng: [
                '<h2>Soccer field</h2><p>The main soccer field was heavily worn and lacking in maintenance.</p>',
                '<h2>Multidisciplinary Courts</h2><p>The cement courts showed wear and other damages, such as holes and completely rusted elements.</p>',
                '<h2>Playgrounds</h2><p>The playground was found in terrible conditions where the children played on the ground, and wooden and metal structures with a lot of wear.</p>',
                '<h2>Playgrounds</h2><p>Also, the central building showed a lack of maintenance.</p>',
                '<h2>Central Building</h2><p>As the main one, the auxiliary court showed a lot of wear on the synthetic grass.</p>',
                '<h2>Buildings around the area</h2><p>The adjoining buildings also present a lack of maintenance.</p>',
            ],
            images:[
                { url: ImagePeruDescription1_1 },
                { url: ImagePeruDescription1_2 },
                { url: ImagePeruDescription1_3 },
                { url: ImagePeruDescription1_4 },
                { url: ImagePeruDescription1_5 },
                { url: ImagePeruDescription1_6 },
            ],
            type: 'left'
        },
        {
            descTextEsp: [
                '<h2>Canchas de Fútbol</h2><p>Se cambió completamente los arcos de la cancha de fútbol por una nueva de pasto sintético.</p>',
                '<h2>Edificio Central</h2><p>Finalmente se hizo un trabajo de remodelación externa del edificio frente a la cancha.                    </p>',
                '<h2>Canchas Multidisciplinarias</h2><p>Se resanaron todas las grietas y huecos de la loza deportiva. Se pintó la cancha con pintura ecoamigable y se hicieron nuevos arcos y aros de básquetbol de acero inoxidable.</p>',
                '<h2>Playgrounds</h2><p>Se colocó un nuevo pasto sintético en toda la zona del playground. Asimismo se colocaron nuevos juegos para niños y se dieron un completo mantenimiento a los juegos actuales. Además se remodeló y resanó todo el edificio principal de la zona intervenida.</p>',
                '<h2>Playgrounds</h2><p>Se colocó un nuevo pasto sintético en toda la zona del playground. Asimismo se colocaron nuevos juegos para niños y se dieron un completo mantenimiento a los juegos actuales. Además se remodeló y resanó todo el edificio principal de la zona intervenida.</p>',
                '<h2>Cancha de Voley</h2><p>Se cambió completamente el pasto sintético de la cancha auxiliar y se colocó una cerca para la seguridad de los niños. Se incluyó una nueva red para practicar voleibol.</p>'
            ],
            descTextEng: [
                '<h2>Soccer field</h2><p>The floor of the soccer field was entirely replaced by new synthetic grass.</p>',
                '<h2>Central Building</h2><p>We did external remodeling work on the building in front of the pitch.</p>',
                '<h2>Multidisciplinary Courts</h2><p>All the cracks and holes in the sports tile were patched up. The court was painted eco-friendly, and new stainless steel basketball hoops and goals were made.</p>',
                '<h2>Playgrounds</h2><p>New synthetic grass was placed throughout the playground area. Likewise, new games for children were set, and complete maintenance was given to the current games. In addition, the entire main building in the intervened area was remodeled and repaired.</p>',
                '<h2>Playgrounds</h2><p>New synthetic grass was placed throughout the playground area. Likewise, new games for children were set, and complete maintenance was given to the current games. In addition, the entire main building in the intervened area was remodeled and repaired.</p>',
                '<h2>Volleyball Court</h2><p>The synthetic grass of the auxiliary field was utterly changed, and a fence was placed for the safety of the children. A new net was included to practice volleyball.</p>',
            ],
            images:[
                { url: ImagePeruDescription2_1 },
                { url: ImagePeruDescription2_2 },
                { url: ImagePeruDescription2_3 },
                { url: ImagePeruDescription2_4 },
                { url: ImagePeruDescription2_5 },
                { url: ImagePeruDescription2_6 },
            ],
            type: 'right'
        }
    ],
    galleryImages:[
        { url: ImagePeruGallery1 },
        { url: ImagePeruGallery2 },
        { url: ImagePeruGallery3 },
        { url: ImagePeruGallery4 },
        { url: ImagePeruGallery5 },
        { url: ImagePeruGallery6 },
        { url: ImagePeruGallery7 },
        { url: ImagePeruGallery8 },
        { url: ImagePeruGallery9 },
    ],
    footer:[
        {
            url: 'https://www.kia.com/pe/discover-kia/sustainability.html',
            titleEsp: 'Sostenible',
            titleEng: 'Sustainability',
        },
        {
            url: 'https://www.kia.com/pe/discover-kia/our-inspiration.html',
            titleEsp: 'Nuestra Inspiración',
            titleEng: 'Our Inspiration',
        },
        {
            url: 'https://www.kia.com/pe/showroom/ev6-cv-22my/features.html',
            titleEsp: 'EV6',
            titleEng: 'EV6',
        },
        {
            url: 'https://www.kia.com/pe/discover-kia/kia-peru.html',
            titleEsp: 'Kia en Pe',
            titleEng: 'Kia in Pe',
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