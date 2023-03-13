import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../../assets/images/new-kia-logo.png'
import { lang } from '../../interfaces';
import './HeaderComponent.scss';

export const Header = ({lang, chooseLang}:lang) => {
  const mainWidth = window.innerWidth;
  const mobileWidth = 800
  const navigate = useNavigate();
  const [headerStatusMobile, setHeaderStatusMobile] = useState(true);


  const initMenuMobileStatus = () => {
    if(mainWidth <= mobileWidth){
      setHeaderStatusMobile(false);
    }
  }

  const openMenuMobile = () => {
    if(headerStatusMobile && mainWidth <= mobileWidth){
      setHeaderStatusMobile(false);
    }else if(!headerStatusMobile && mainWidth <= mobileWidth){
      setHeaderStatusMobile(true);
    }
  }
  
  const onGoToSection = (section:string | null) => {
    navigate( `/${section}` );
    window.scrollTo(0, 0);
    setHeaderStatusMobile(false);
  }

  useEffect(() => {
    initMenuMobileStatus();
  }, [])
  

  return (
    <>
        <header>
            <div id="HeaderTop"></div>
            <div id="HeaderLogo">
              
              <nav id='HeaderMainMenuLeft'>
                
                <button onClick={openMenuMobile} id="MobileMainMenuButton">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <ul className={`main-listbuttons ${(headerStatusMobile)?'open':'close'}`}>
                  <li className='nav-item'>
                    <button onClick={ () => onGoToSection('')}>
                      {
                        (lang === 'es')
                        ?<span>Inicio</span>
                        :<span>Home</span>
                      }
                    </button>
                  </li>

                  <li className='nav-item'>
                    <button onClick={ () => onGoToSection('vision')}>
                      {
                        (lang === 'es')
                        ?<span>Visión</span>
                        :<span>Our vision</span>
                      }
                    </button>
                  </li>

                  <li className='nav-item nav-submenu'>  
                    <button>
                      {
                        (lang === 'es')
                        ?<span>Países</span>
                        :<span>Countries</span>
                      }
                    </button>
                    <ul>
                      <li className='nav-item'><button onClick={ () => onGoToSection('chile/ciudaddeportivauss')}><span>Chile</span></button></li>
                      <li className='nav-item'><button onClick={ () => onGoToSection('ecuador')}><span>Ecuador</span></button></li>
                      <li className='nav-item'><button onClick={ () => onGoToSection('paraguay/parquenuguasu')}><span>Paraguay</span></button></li>
                      <li className='nav-item'><button onClick={ () => onGoToSection('peru/puericultorio')}><span>Perú</span></button></li>
                    </ul>

                  </li>

                  
                  
                  {/* <li className='nav-item'>
                    <button>
                      {
                        (lang === 'es')
                        ?<span>Inauguraciones</span>
                        :<span>Opening Events</span>
                      }
                    </button>
                  </li>
                  <li className='nav-item faq-item'>
                    <button>
                      {
                        (lang === 'es')
                        ?<span>Conócenos </span>
                        :<span>FAQ's</span>
                      }
                    </button>
                  </li> */}
                </ul>
              </nav>

              <button onClick={ () => onGoToSection(null) } id="MainLogo">
                <img src={ MainLogo } alt="KIA : Parks" />
              </button>


              {/* <nav id='HeaderMainMenuRight'>
                <ul className="main-listbuttons">
                  <li className='nav-item'>
                    <button>
                      {
                        (lang === 'es')
                        ?<span>Conócenos </span>
                        :<span>FAQ's</span>
                      }
                    </button>
                  </li>
                </ul>
              </nav> */}
            </div>
        </header>
    </>
  )
}