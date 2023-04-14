import { FooterV3, Header } from '../../components';
import { FooterItem, FooterSNItem, Park } from "../../interfaces/KiaParksInterfaces";
import './InauguracionesPage.scss';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { 
    Home01, Home02, Home03, Home04, Home05, Home06,Home07,
    Home01Mobile,Home02Mobile,Home03Mobile,Home04Mobile,Home05Mobile,Home06Mobile,Home07Mobile,
    HomeEng02,HomeEng03,HomeEng05,HomeEng06,HomeEng07,
    HomeEng02Mobile,HomeEng03Mobile,HomeEng05Mobile,HomeEng06Mobile,HomeEng07Mobile,
    HomeButton01,HomeButton02,HomeButton04,HomeButton05,
  } from '../../assets/images/index';
import {
    InauguracionesChile01,
    InauguracionesChile02,
    InauguracionesChile03,
    InauguracionesChile04,
    InauguracionesChile05,
    InauguracionesChile06,
    InauguracionesChile07,
    InauguracionesChile08,

    InauguracionesPeru01,
    InauguracionesPeru02,
    InauguracionesPeru03,
    InauguracionesPeru04,
    InauguracionesPeru05,
    InauguracionesPeru06,

    InauguracionesParaguay01,
    InauguracionesParaguay02,
    InauguracionesParaguay03,
    InauguracionesParaguay04,
    InauguracionesParaguay05,
    InauguracionesParaguay06,
    InauguracionesParaguay07,
    InauguracionesParaguay08,
    InauguracionesParaguay09,

    InauguracionesGalapagos01,
    InauguracionesGalapagos02,
    InauguracionesGalapagos03,
    InauguracionesGalapagos04,
    InauguracionesGalapagos05,
    InauguracionesGalapagos06,
    InauguracionesGalapagos07,
    InauguracionesGalapagos08,
    InauguracionesGalapagos09,
    InauguracionesGalapagos10,
    InauguracionesGalapagos11,
    InauguracionesGalapagos12,
    InauguracionesGalapagos13,
    InauguracionesGalapagos14,
    InauguracionesGalapagos15,
    InauguracionesGalapagos16,
    InauguracionesGalapagos17,

    InauguracionesQuito01,
    InauguracionesQuito02,
    InauguracionesQuito03,
    InauguracionesQuito04,
    InauguracionesQuito05,
    InauguracionesQuito06,
    InauguracionesQuito07,
    InauguracionesQuito08,
    InauguracionesQuito09,
    InauguracionesQuito10,
    InauguracionesQuito11,
    InauguracionesQuito12,
    InauguracionesQuito13,
    InauguracionesQuito14,
    InauguracionesQuito15,
    InauguracionesQuito17,
    InauguracionesQuito16,
    InauguracionesQuito18,
    InauguracionesQuito19,
    InauguracionesQuito20,
    InauguracionesQuito21,
    InauguracionesQuito22,
    InauguracionesQuito23,
    InauguracionesQuito24,
    InauguracionesQuito25,
    InauguracionesQuito26,
    InauguracionesQuito27,
    InauguracionesQuito28,
    InauguracionesQuito29,
    InauguracionesQuito30,
    InauguracionesQuito31,
    InauguracionesQuito32,
    InauguracionesQuito33,
    InauguracionesQuito34,
    InauguracionesQuito35,
    InauguracionesQuito36,
    InauguracionesQuito37,
    InauguracionesQuito38,
    InauguracionesQuito39,
    InauguracionesQuito40,
    InauguracionesQuito41,
    InauguracionesQuito42,
    InauguracionesQuito43,
    InauguracionesQuito44,
    InauguracionesQuito45,
    InauguracionesQuito46,
    InauguracionesQuito47,
    InauguracionesQuito48,
    InauguracionesQuito49,
    InauguracionesQuito50,
    InauguracionesQuito51,
    InauguracionesQuito52,
    InauguracionesQuito53,
    InauguracionesQuito54,
    InauguracionesQuito55,
    InauguracionesQuito56,
    InauguracionesQuito57
} from '../../assets/images/Inauguraciones';

const InauguracionesChile = [
    InauguracionesChile01,
    InauguracionesChile02,
    InauguracionesChile03,
    InauguracionesChile04,
    InauguracionesChile05,
    InauguracionesChile06,
    InauguracionesChile07,
    InauguracionesChile08,
];

const InauguracionesPeru = [
    InauguracionesPeru01,
    InauguracionesPeru02,
    InauguracionesPeru03,
    InauguracionesPeru04,
    InauguracionesPeru05,
    InauguracionesPeru06
];

const InauguracionesParaguay = [
    InauguracionesParaguay01,
    InauguracionesParaguay02,
    InauguracionesParaguay03,
    InauguracionesParaguay04,
    InauguracionesParaguay05,
    InauguracionesParaguay06,
    InauguracionesParaguay07,
    InauguracionesParaguay08,
    InauguracionesParaguay09
];

const InauguracionesGalapagos = [
    InauguracionesGalapagos01,
    InauguracionesGalapagos02,
    InauguracionesGalapagos03,
    InauguracionesGalapagos04,
    InauguracionesGalapagos05,
    InauguracionesGalapagos06,
    InauguracionesGalapagos07,
    InauguracionesGalapagos08,
    InauguracionesGalapagos09,
    InauguracionesGalapagos10,
    InauguracionesGalapagos11,
    InauguracionesGalapagos12,
    InauguracionesGalapagos13,
    InauguracionesGalapagos14,
    InauguracionesGalapagos15,
    InauguracionesGalapagos16,
    InauguracionesGalapagos17
];

const InauguracionesQuito = [
    InauguracionesQuito01,
    InauguracionesQuito02,
    InauguracionesQuito03,
    InauguracionesQuito04,
    InauguracionesQuito05,
    InauguracionesQuito06,
    InauguracionesQuito07,
    InauguracionesQuito08,
    InauguracionesQuito09,
    InauguracionesQuito10,
    InauguracionesQuito11,
    InauguracionesQuito12,
    InauguracionesQuito13,
    InauguracionesQuito14,
    InauguracionesQuito15,
    InauguracionesQuito17,
    InauguracionesQuito16,
    InauguracionesQuito18,
    InauguracionesQuito19,
    InauguracionesQuito20,
    InauguracionesQuito21,
    InauguracionesQuito22,
    InauguracionesQuito23,
    InauguracionesQuito24,
    InauguracionesQuito25,
    InauguracionesQuito26,
    InauguracionesQuito27,
    InauguracionesQuito28,
    InauguracionesQuito29,
    InauguracionesQuito30,
    InauguracionesQuito31,
    InauguracionesQuito32,
    InauguracionesQuito33,
    InauguracionesQuito34,
    InauguracionesQuito35,
    InauguracionesQuito36,
    InauguracionesQuito37,
    InauguracionesQuito38,
    InauguracionesQuito39,
    InauguracionesQuito40,
    InauguracionesQuito41,
    InauguracionesQuito42,
    InauguracionesQuito43,
    InauguracionesQuito44,
    InauguracionesQuito45,
    InauguracionesQuito46,
    InauguracionesQuito47,
    InauguracionesQuito48,
    InauguracionesQuito49,
    InauguracionesQuito50,
    InauguracionesQuito51,
    InauguracionesQuito52,
    InauguracionesQuito53,
    InauguracionesQuito54,
    InauguracionesQuito55,
    InauguracionesQuito56,
    InauguracionesQuito57
];



interface InauguracionesInterface {
    initialParks: Park[];
    lang: string;
    chooseLang: (lang: string) => void;
}

interface linkContent {
    to: string;
    image: any;
  }


export const InauguracionesPage = ({ initialParks, lang, chooseLang }: InauguracionesInterface) => {
    const mainWidth = window.outerWidth;
    const getBannerGalleryImages = () =>{
        if( mainWidth > 600 ){
        if(lang==='es'){
            return [Home01,Home02,Home03,Home07,Home04,Home05,Home06];
        }else{
            return [Home01,HomeEng02,HomeEng03,HomeEng07,Home04,HomeEng05,HomeEng06];
        }
        }else{
        if(lang==='es'){
            return [Home01Mobile,Home02Mobile,Home03Mobile,Home07Mobile,Home04Mobile,Home05Mobile,Home06Mobile];
        }else{
            return [Home01Mobile,HomeEng02Mobile,HomeEng03Mobile,HomeEng07Mobile,Home04Mobile,HomeEng05Mobile,HomeEng06Mobile];
        }
        }
    }
    const footerLinks: FooterItem[] = [
        {
            url: 'https://worldwide.kia.com/int/company/sustainability/about/strategy',
            titleEsp: 'Sostenibilidad',
            titleEng: 'Sustainability',
        },
        {
            url: 'https://worldwide.kia.com/int/sounds-in-nature',
            titleEsp: 'Nuestra inspiración',
            titleEng: 'Our Inspiration',
        },
        {
            url: '/chile/ciudaddeportivauss',
            titleEsp: 'Kia Parks Chile',
            titleEng: 'Kia Parks Chile',
        },

        {
            url: '/ecuador',
            titleEsp: 'Kia Parks Ecuador',
            titleEng: 'Kia Parks Ecuador',
        },
        {
            url: '/paraguay/parquenuguasu',
            titleEsp: 'Kia Parks Paraguay',
            titleEng: 'Kia Parks Paraguay',
        },
        {
            url: '/peru/puericultorio',
            titleEsp: 'Kia Parks Peru',
            titleEng: 'Kia Parks Peru',
        },
    ];

    const footerSN: FooterSNItem[] = [
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

    const parksProyects:linkContent[] = [
        {
          to: 'chile/ciudaddeportivauss',
          image: HomeButton01
        },
        {
          to: 'ecuador/',
          image: HomeButton02
        },
        {
          to: 'paraguay/parquenuguasu',
          image: HomeButton04
        },
        {
          to: 'peru/puericultorio',
          image: HomeButton05
        },
      ];
    
      const urlList = [
        '/vision',
        '/chile/ciudaddeportivauss',
        '/ecuador/parquedelamujeryelnino',
        '/ecuador/galapagosbaltra',
        '/vision',
        '/paraguay/parquenuguasu',
        '/peru/puericultorio'
      ]
    
      const [descriptionText, setDescriptionText] = useState(urlList[0]);
      const navigate = useNavigate();

      const onHandleImageComponent= (indx:number )=>{
        setDescriptionText(urlList[indx - 1]);
      }
    
    
    
      const onGoToSection = ( url:string ) => {
        console.log(url);
        navigate( url );
        window.scrollTo(0, 0);
      }

    return (
        <>
            <Header lang={lang} chooseLang={chooseLang} />

            <div id="InauguracionesMainContainer">
                
                <div id="MainGallery">
                    <SimpleImageSlider
                        width="100%"
                        height="100%"
                        images={getBannerGalleryImages()}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        slideDuration={2}
                        autoPlayDelay={3.5}
                        onCompleteSlide={(idxLeft, length) => { onHandleImageComponent(idxLeft) }}
                    />
                    <button onClick={() => onGoToSection(descriptionText)} className='more-btn'>
                        {
                            (lang === 'es')
                                ? <p>Conoce más</p>
                                : <p>Learn more</p>
                        }
                    </button>
                </div>

                <div id="MainContainer" className="container">
                    <div className="intro-text">
                        {
                            (lang === 'es')
                                ? <p>Cada nuevo desarrollo de Kia Parks es una historia de colaboración entre Kia y un gobierno local, teniendo como objetivo el mejoramiento de la calidad de vida para la comunidad. Creemos que esto es digno de festejarse y cada que logramos inaugurar un nuevo desarrollo, hacemos una fiesta conmemorativa. Aquí se pueden ver algunos recuerdos de estos eventos y acompañarnos en el festejo.</p>
                                : <p>Every new development by Kia Parks is a story of collaboration between Kia and a local government, with the aim of improving the quality of life for the community. We believe that this is worthy of celebration, and every time we inaugurate a new development, we hold a commemorative party. Here you can see some memories of these events and join us in the celebration.</p>
                        }

                    </div>
                    <div className="gallery-item">
                        <h2>Chile</h2>
                        <div className="gallery-cont">
                            <SimpleImageSlider
                                width="100%"
                                height="100%"
                                slideDuration={3}
                                autoPlayDelay={3}
                                images={InauguracionesChile}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>
                    <div className="gallery-item">
                        <h2>Ecuador - Quito</h2>
                        <div className="gallery-cont">
                            <SimpleImageSlider
                                width="100%"
                                height="100%"
                                slideDuration={3}
                                autoPlayDelay={3}
                                images={InauguracionesQuito}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>
                    <div className="gallery-item">
                        <h2>Ecuador - Galápagos</h2>
                        <div className="gallery-cont">
                            <SimpleImageSlider
                                width="100%"
                                height="100%"
                                slideDuration={3}
                                autoPlayDelay={3}
                                images={InauguracionesGalapagos}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>

                    <div className="gallery-item">
                        <h2>Paraguay</h2>
                        <div className="gallery-cont">
                            <SimpleImageSlider
                                width="100%"
                                height="100%"
                                slideDuration={3}
                                autoPlayDelay={3}
                                images={InauguracionesParaguay}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>

                    <div className="gallery-item">
                        <h2>Perú</h2>
                        <div className="gallery-cont">
                            <SimpleImageSlider
                                width="100%"
                                height="100%"
                                slideDuration={3}
                                autoPlayDelay={3}
                                images={InauguracionesPeru}
                                showBullets={true}
                                showNavs={true}
                                autoPlay={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <FooterV3 snLinks={footerSN} blockLinks={footerLinks} lang={lang} chooselang={chooseLang} />
        </>
    )
}
