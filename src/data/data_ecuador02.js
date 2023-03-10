import { 
    EcuadorResumeImage2,
    ImageEcuador02New,
    ImageEcuador02Old,
    ImageEcuador02Video,
    ImageEcuador02BannerWater,
    ImageEcuador02Description1_1,
    ImageEcuador02Description1_2,
    ImageEcuador02Description1_3,
    ImageEcuador02Description1_4,
    ImageEcuador02Description1_5,
    ImageEcuador02Description1_6,
    ImageEcuador02Description1_7,
    ImageEcuador02Description1_8,
    ImageEcuador02Description1_9,
    ImageEcuador02Description1_10,
    ImageEcuador02Description1_11,
    ImageEcuador02Description2_1,
    ImageEcuador02Description2_2,
    ImageEcuador02Description2_3,
    ImageEcuador02Description2_4,
    ImageEcuador02Description2_5,
    ImageEcuador02Description2_6,
    ImageEcuador02Description2_7,
    ImageEcuador02Description2_8,
    ImageEcuador02Description2_9,
    ImageEcuador02Description2_10,
    ImageEcuador02Gallery1,
    ImageEcuador02Gallery2,
    ImageEcuador02Gallery3,
    ImageEcuador02Gallery4,
    ImageEcuador02Gallery5,
    ImageEcuador02Gallery6,
    ImageEcuador02Gallery7,
    ImageEcuador02Gallery8,
    ImageEcuador02Gallery9,
    ImageEcuador02Gallery10,
    ImageEcuador02Gallery11,
    ImageEcuador02Gallery12,
    ImageEcuador02Gallery13,
    ImageEcuador02Gallery14,
    ImageEcuador02Gallery15,
} from "../assets/images";

export const kiaparks_ecuador02 = {
    id: 2,
    side: 0,
    country: "Ecuador",
    resumeCountry: "Galápagos, Ecuador",
    location: "Canal de Itabaca, Puerto Baltra y Sta Cruz",
    maps: [-0.6077938, -91.3122743],
    zoom: 8,
    resumeEsp: "Declaradas por la Unesco como “Patrimonio de la Humanidad” en 1979, y “Reserva de la Biosfera” en 1985, son conocidas por ser el hábitat de especies endémicas únicas, tales como: tortugas Galápagos, piqueros de patas azules, fragatas, iguanas, leones marinos, pingüinos, entre muchas otras. La principal intervención realizada en la Isla de Santa Cruz fue el reacondicionamiento de los puertos de Itabaca que reciben anualmente más de 292.000 turistas y residentes.",
    resumeEng: "Declared by UNESCO as a “World Heritage Site” in 1979, and “Biosphere Reserve” in 1985, they are known for being the habitat of unique endemic species, such as: Galapagos tortoises, blue-footed boobies, frigate birds, iguanas, sea lions, penguins, among many others. The main intervention carried out on the Island of Santa Cruz was the reconditioning of the ports of Itabaca, which annually receive more than 292,000 tourists and residents.",
    description01Esp: "Declaradas por la Unesco como “Patrimonio de la Humanidad” en 1979, y “Reserva de la Biosfera” en 1985, son conocidas por ser el hábitat de especies endémicas únicas, tales como: tortugas Galápagos, piqueros de patas azules, fragatas, iguanas, leones marinos, pingüinos, entre muchas otras. Por esta razón, son también conocidas como “Islas Encantadas”. La principal intervención realizada en la Isla de Santa Cruz fue el reacondicionamiento de los puertos de Itabaca que reciben anualmente más de 292.000 turistas y residentes.",
    description01Eng: "The Galápagos Islands, declared by Unesco as a 'World Heritage Site' in 1979 and a 'Biosphere Reserve' in 1985, are known for being the habitat of unique endemic species, such as Galapagos tortoises, blue-footed boobies, frigates, iguanas, sea lions, penguins, among many others. For this reason, they are also known as 'Enchanted Islands.' The primary intervention carried out on the Island of Santa Cruz was reconditioning the ports of Itabaca, which annually receive more than 292,000 tourists and residents.",
    description02: (lang) => {
        return (
            <>
                <div className="container">
                    <div className="intro-text">
                        {
                            (lang === 'es')
                            ?<p>Segunda reserva marina más grande del planeta, Kia Ecuador decide enfocar sus esfuerzos a la comunidad con nuevas áreas de descanso y espacios lúdicos que permitan concientizar y conectar con la naturaleza.</p>
                            :<p>The second largest marine reserve on the planet, Kia Ecuador, has decided to focus its efforts on the community with new rest areas and recreational spaces that allow for raising awareness and connecting with nature.</p>
                        }
                    </div>
                </div>
                <div className='RehabilitedZones' style={{ backgroundImage: `url(${ImageEcuador02BannerWater})` }}>
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
                                ?<li>Puertos del Canal de Itabaca lado de Baltra y Santa Cruz</li>
                                :<li>Ports of Canal de Itabaca Baltra y Santa Cruz</li>
                            }
                            
                        </ul>
                    </div>
                </div>
            </>
        );
    },
    imageResume: EcuadorResumeImage2,
    url: "ecuador/galapagosbaltra",
    videoActivated: true,
    detailVideoURL: "https://www.youtube.com/embed/5Y8QJVgtBdI?autoplay=1&options=0&controls=0",
    detailVideoImage: ImageEcuador02Video,
    detailImageNew: ImageEcuador02New,
    detailImageOld: ImageEcuador02Old,
    descriptionsSet: [
        {
            descTextEsp: [
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta de áreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca- Santa Cruz</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta deáreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca- Santa Cruz</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta deáreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca- Santa Cruz</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta deáreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca- Santa Cruz</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta deáreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
                '<h2>Canal de Itabaca- Santa Cruz</h2><p>La seguridad en los puertos no era suficiente, el techo, la falta deáreas de descanso para los visitantes, entre otras, proyectaban una gran oportunidad de mejoría.</p>',
            ],
            descTextEng: [
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>Security in the ports was not enough, the roof, and the lack of rest areas for visitors, among others, projected an excellent opportunity for improvement.</p>',
            ],
            images: [
                { url: ImageEcuador02Description1_1 },
                { url: ImageEcuador02Description1_2 },
                { url: ImageEcuador02Description1_3 },
                { url: ImageEcuador02Description1_4 },
                { url: ImageEcuador02Description1_5 },
                { url: ImageEcuador02Description1_6 },
                { url: ImageEcuador02Description1_7 },
                { url: ImageEcuador02Description1_8 },
                { url: ImageEcuador02Description1_9 },
                { url: ImageEcuador02Description1_10 },
                { url: ImageEcuador02Description1_11 },
            ],
            type: 'left'
        },
        {
            descTextEsp: [
                '<h2>Canal de Itabaca-Baltra</h2><p>Remodelamos los puertos, reforzamos la seguridad y más importante se han consruido áreas de descanso.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>Remodelamos los puertos, reforzamos la seguridad y más importante se han consruido áreas de descanso.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>Remodelamos los puertos, reforzamos la seguridad y más importante se han consruido áreas de descanso.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>Remodelamos los puertos, reforzamos la seguridad y más importante se han consruido áreas de descanso.</p>',
                '<h2>Canal de Itabaca-Baltra</h2><p>Remodelamos los puertos, reforzamos la seguridad y más importante se han consruido áreas de descanso.</p>',
                '<h2>Canal de Itabaca-Santa Cruz</h2><p>Se instaló una electrolinera de carga rápida que funciona únicamente con paneles solares dotando de energía limpia a sus alrededores.</p>',
                '<h2>Canal de Itabaca-Santa Cruz</h2><p>Se instaló una electrolinera de carga rápida que funciona únicamente con paneles solares dotando de energía limpia a sus alrededores.</p>',
                '<h2>Canal de Itabaca-Santa Cruz</h2><p>Se instaló una electrolinera de carga rápida que funciona únicamente con paneles solares dotando de energía limpia a sus alrededores.</p>',
                '<h2>Canal de Itabaca-Santa Cruz</h2><p>Se instaló una electrolinera de carga rápida que funciona únicamente con paneles solares dotando de energía limpia a sus alrededores.</p>',
                '<h2>Canal de Itabaca-Santa Cruz</h2><p>Se instaló una electrolinera de carga rápida que funciona únicamente con paneles solares dotando de energía limpia a sus alrededores.</p>',
            ],
            descTextEng: [
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Baltra Canal</h2><p>We remodeled the ports, reinforced security, and, most importantly, rest areas have been built.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>A fast-charging electric station was installed that works solely with solar panels, providing clean energy to its surroundings.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>A fast-charging electric station was installed that works solely with solar panels, providing clean energy to its surroundings.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>A fast-charging electric station was installed that works solely with solar panels, providing clean energy to its surroundings.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>A fast-charging electric station was installed that works solely with solar panels, providing clean energy to its surroundings.</p>',
                '<h2>Itabaca-Santa Cruz Canal</h2><p>A fast-charging electric station was installed that works solely with solar panels, providing clean energy to its surroundings.</p>',
            ],
            images: [
                { url: ImageEcuador02Description2_1 },
                { url: ImageEcuador02Description2_2 },
                { url: ImageEcuador02Description2_3 },
                { url: ImageEcuador02Description2_4 },
                { url: ImageEcuador02Description2_5 },
                { url: ImageEcuador02Description2_6 },
                { url: ImageEcuador02Description2_7 },
                { url: ImageEcuador02Description2_8 },
                { url: ImageEcuador02Description2_9 },
                { url: ImageEcuador02Description2_10 },
            ],
            type: 'right'
        }
    ],
    galleryImages: [
        { url: ImageEcuador02Gallery1 },
        { url: ImageEcuador02Gallery2 },
        { url: ImageEcuador02Gallery3 },
        { url: ImageEcuador02Gallery4 },
        { url: ImageEcuador02Gallery5 },
        { url: ImageEcuador02Gallery6 },
        { url: ImageEcuador02Gallery7 },
        { url: ImageEcuador02Gallery8 },
        { url: ImageEcuador02Gallery9 },
        { url: ImageEcuador02Gallery10 },
        { url: ImageEcuador02Gallery11 },
        { url: ImageEcuador02Gallery12 },
        { url: ImageEcuador02Gallery13 },
        { url: ImageEcuador02Gallery14 },
        { url: ImageEcuador02Gallery15 },
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
            titleEng: 'Kia in ECU',
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