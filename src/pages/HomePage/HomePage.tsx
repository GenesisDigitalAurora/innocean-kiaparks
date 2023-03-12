import { 
  Home01, Home02, Home03, Home04, Home05, Home06,Home07,
  Home01Mobile,Home02Mobile,Home03Mobile,Home04Mobile,Home05Mobile,Home06Mobile,Home07Mobile,
  HomeEng02,HomeEng03,HomeEng05,HomeEng06,HomeEng07,
  HomeEng02Mobile,HomeEng03Mobile,HomeEng05Mobile,HomeEng06Mobile,HomeEng07Mobile,
  HomeButton01,HomeButton02,HomeButton04,HomeButton05,
} from '../../assets/images/index';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { FooterV3 } from '../../components';
import './HomePage.scss';
import { FooterItem, FooterSNItem, lang } from '../../interfaces';
import { Header } from '../../components/HeaderComponent/HeaderComponent';

interface linkContent {
  to: string;
  image: any;
}

export const HomePage = ({lang, chooseLang}:lang) => {
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

  const footerLinks:FooterItem[] = [
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
    {
      url: 'social-network',
      titleEsp: '',
      titleEng: '',
    }
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
    'vision',
    'chile/ciudaddeportivauss',
    'ecuador/parquedelamujeryelnino',
    'ecuador/galapagosbaltra',
    'vision',
    'paraguay/parquenuguasu',
    'peru/puericultorio'
  ]

  const [descriptionText, setDescriptionText] = useState(urlList[0]);
  const navigate = useNavigate();

  const onHandleImageComponent= (indx:number )=>{
    setDescriptionText(urlList[indx - 1]);
  }



  const onGoToSection = ( url:string ) => {
    navigate( url );
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Header lang={lang} chooseLang={chooseLang} />
      <div id="HomeMainContainer">  
        <div id="MainGallery">
          <SimpleImageSlider
              width="100%"
              height="100%"
              images = {getBannerGalleryImages()}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              slideDuration={2}
              autoPlayDelay={3.5}
              onCompleteSlide = {(idxLeft, length) => { onHandleImageComponent(idxLeft) }}
          />
          <button onClick={ () => onGoToSection(descriptionText) } className='more-btn'>
            {
              (lang==='es')
              ? <p>Conoce más</p>
              : <p>Learn more</p>
            }
          </button>
        </div>
        <div id="MainContainer" className="container">
          <div id="LinkToContent">
            {
              parksProyects.map( (linkTo, i) => {
                return (
                  <button key={`${i}_item`} onClick={ () => onGoToSection(linkTo.to) } className='btn-linkto'>
                    <img src={linkTo.image} alt="Kia parks" />
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
      <FooterV3 snLinks={footerSN} blockLinks={footerLinks} lang={lang} chooselang={chooseLang} />
    </>
  )
}
