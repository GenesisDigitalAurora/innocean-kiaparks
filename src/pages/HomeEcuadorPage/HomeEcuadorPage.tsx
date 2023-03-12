import { 
  HomeEcuador01,
  HomeEcuadorMobile01,
  HomeEcuadorButton01,
  HomeEcuadorButton02,
} from '../../assets/images/index';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './HomeEcuadorPage.scss';
import { FooterSNItem, lang } from '../../interfaces';
import { FooterV3, Header } from '../../components';

interface linkContent {
  to: string;
  image: any;
}

export const HomeEcuadorPage = ({lang, chooseLang}:lang) => {

  const mainWidth = window.outerWidth
  
  const getBannerGalleryImages = () =>{
    if( mainWidth > 600 ){
      return [HomeEcuador01];
    }else{
      return [HomeEcuadorMobile01];
    }
  }

  const footerLinks = [
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
  ];
  
  const footerSN:FooterSNItem[] = [
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
      to: 'ecuador/parquedelamujeryelnino',
      image: HomeEcuadorButton01
    },
    {
      to: 'ecuador/galapagosbaltra',
      image: HomeEcuadorButton02
    },
  ];

  const urlList = [
    'vision',
    'chile/ciudaddeportivauss',
    'ecuador/parquedelamujeryelnino',
    'ecuador/galapagosbaltra',
    'vision',
    'paraguay/parquenuguasu',
    'peru/puericultorio'
  ]

  const [, setDescriptionText] = useState(urlList[0]);
  const navigate = useNavigate();

  const onHandleImageComponent= (indx:number )=>{
    setDescriptionText(urlList[indx - 1]);
  }



  const onGoToSection = ( url:string ) => {
    navigate( `/${url}` );
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header lang={lang} chooseLang={chooseLang}/>
      <div id="HomeEcuadorMainContainer">  
        <div id="MainGallery">
          <SimpleImageSlider
              width="100%"
              height="100%"
              images = {getBannerGalleryImages()}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              onCompleteSlide = {(idxLeft, length) => { onHandleImageComponent(idxLeft) }}
          />
        </div>
        <div id="MainContainer" className="container">
          <div id="LinkToContent">
            {
              parksProyects.map( linkTo => {
                return (
                  <button onClick={ () => onGoToSection(linkTo.to) } className='btn-linkto'>
                    <img src={linkTo.image} alt="Kia parks" />
                  </button>
                )
              })
            }
          </div>
        </div>
        <div id="BigInitiative">
          <div className="container">
            {
              (lang==='es')
              ?<p>Una gran iniciativa para Centro y Sudamérica.</p>
              :<p>A great initiative for Central and South America.​</p>
            }
            
            <button onClick={ ()=> onGoToSection('') } >
            {
              (lang==='es')
              ?<p>Descúbrela aquí</p>
              :<p>Discover it here</p>
            }
            </button>
          </div>
        </div>
      </div>
      <FooterV3 snLinks={footerSN} blockLinks={footerLinks} lang={lang} chooselang={chooseLang} />
    </>
  )
}
