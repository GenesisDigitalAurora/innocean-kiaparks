import { useNavigate } from "react-router-dom";
import './IntroductionComponent.scss';
import { resumePark } from '../../interfaces/';


export const IntroductionComponent = ( {parkInfo, lang}:resumePark) => {
  
  const navigate = useNavigate();

  const onGoToSection = ( url:string ) => {
    navigate( `/${url}` );
    window.scrollTo(0, 0);
  }

  return (
    <div className={`intro-component ${(parkInfo.side === 1)? 'back-order':''}`}>
        <div className="image-intro panel-side">
          <img src={ parkInfo.imageResume } alt="Kia Parks" />
        </div>
        <div className="info-component panel-side">
          <h2>{ parkInfo.resumeCountry }</h2>
          <h3>{ parkInfo.location }</h3>
          {
            (lang === 'es')
            ?<p>{ parkInfo.resumeEsp }</p>
            :<p>{ parkInfo.resumeEng }</p>
          }
          {
            (parkInfo.url === "proximamente")
            ? <i>Próximamente</i>
            : <button className='more-btn' onClick={ () => onGoToSection(parkInfo.url) }>{ (lang === 'es')?<span>Conoce más</span>:<span>Learn more</span> }</button>
          }
        </div>
    </div>
  )
}
