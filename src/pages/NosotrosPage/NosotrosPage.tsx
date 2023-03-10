import { FooterV3, Header } from '../../components';
import { IntroductionComponent } from "../../components/IntroductionComponent/IntroductionComponent";
import { FooterItem, FooterSNItem, Park } from "../../interfaces/KiaParksInterfaces";
import './NosotrosPage.scss';

interface NosotrosInterface{
  initialParks:Park[];
  lang: string;
  chooseLang: (lang:string) => void;
}

export const NosotrosPage = ({initialParks, lang, chooseLang }: NosotrosInterface ) => {
  
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
      url: 'https://www.kia.com/cl/util/kia-global.html',
      titleEsp: 'Kia Parks Chile',
      titleEng: 'Kia Parks Chile',
    },

    {
      url: 'https://www.kia.com/ec/util/kia-global.html',
      titleEsp: 'Kia Parks Ecuador',
      titleEng: 'Kia Parks Ecuador',
    },
    {
      url: 'https://kia.com.py',
      titleEsp: 'Kia Parks Paraguay',
      titleEng: 'Kia Parks Paraguay',
    },
    {
      url: 'https://www.kia.com/pe/util/kia-global.html',
      titleEsp: 'Kia Parks Peru',
      titleEng: 'Kia Parks Peru',
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
        url: 'https://facebook.com/Kiaworldwideofficial/?mibextid=LQQJ4d'
    }
  ]

  return (
    <>
    <Header lang={lang} chooseLang={chooseLang}/>
      <div id="NosotrosMainContainer">  
        {/* <VideoComponent title="" bgImage={VideoMainImage} videoURL="https://www.youtube.com/embed/f1Pwk4XV-8o?autoplay=1&options=0&controls=0" /> */}
        <div id="MainContainer" className="container">
          <div className="intro-text">
            {
              (lang === 'es')
              ?<p>Kia Parks es una iniciativa que tiene como objetivo crear espacios sostenibles y amigables con el medio ambiente en diferentes países de América Latina.  En colaboración con distribuidores locales, gobiernos, agencias y otros socios, Kia ha identificado y seleccionado espacios de parques, puertos y otras áreas públicas que necesitaban ser reconstruidos y recuperados para un mejor disfrute y desarrollo de diferentes comunidades.</p>
              :<p>Kia Parks is an initiative that aims to create environmentally friendly and sustainable spaces in different countries in Latin America. In collaboration with local distributors, governments, agencies and other partners, Kia has identified and selected spaces from parks, ports, and other public areas that needed to be redeveloped and recovered for the better enjoyment and development of different communities.</p>
            }
            
          </div>
          {
            initialParks.map( park => <IntroductionComponent lang={lang} key={`${park.id}__`} parkInfo={park}/>)
          }
        </div>
      </div>
      <FooterV3 snLinks={footerSN} blockLinks={footerLinks} lang={lang} chooselang={chooseLang} />
    </>
  )
}
