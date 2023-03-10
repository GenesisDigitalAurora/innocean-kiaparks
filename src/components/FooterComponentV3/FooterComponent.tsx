import KiaWhiteColor from '../../assets/images/new-kia-logo-white.png';
import { FooterItem, FooterSNItem } from '../../interfaces';
import './FooterComponentV3.scss';

interface FooterInterface {
  blockLinks: FooterItem[];
  lang: string;
  snLinks: FooterSNItem[];
  chooselang: (lang:string) => void;
}

export const FooterV3 = ({blockLinks, lang, chooselang, snLinks}:FooterInterface) => {

  const selectLang = (lang:string) =>{
    chooselang(lang);
  }

  return (
    <>
        <footer>
          <div id="FooterContV3">  
            <div id="FooterLogo">
              <img src={ KiaWhiteColor } alt="Kia Parks" />
            </div>
            <div id="FooterPanels"> 
              <div id="FooterPanelLeft">
                
                <ul>
                  {
                    blockLinks.map( (link,i) => {
                      return(
                        <li key={`${i}`}>
                          <a href={`${link.url}?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23`} target="_blank" rel="noopener noreferrer">
                            <strong>
                            {
                              (lang === 'es')
                              ? link.titleEsp
                              : link.titleEng
                            }
                            </strong>
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>

                <div className="info_sns">
                {
                    snLinks.map( (snLink,i) => {
                      return(
                        <a key={`${i}`} href={`${snLink.url}?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23`} className={`sns_spr spr_${snLink.net}`} target="_blank" rel="noopener noreferrer" title="youtube">youtube</a>
                      )
                    })
                  }
                  
                </div> 
                
              </div>
              <div id="FooterPanelRight">
                <div className="select-lang">
                  <button onClick={ () => selectLang('es') } disabled={lang === 'es'}>
                    {
                      (lang === 'es')
                      ?<span>Español</span>
                      :<span>Spanish</span>
                    }
                  </button>
                   | 
                   <button onClick={ () => selectLang('en') } disabled={lang === 'en'}>
                    {
                      (lang === 'es')
                      ?<span>Inglés</span>
                      :<span>English</span>
                    }
                   </button>
                </div>
                <div className="copyright">
                {/* ©COPYRIGHT. DERECHOS DE AUTOR 2021 KIA CORPORATION TODOS LOS DERECHOS RESERVADOS.“MARCA REGISTRADA”/ “M.R”/ “®”. TODOS LOS DERECHOS RESERVADOS. EL TEXTO, LAS IMÁGENES Y GRÁFICAS DEL SITIO WEB KIA.COM ESTÁN PROTEGIDOS POR LOS DERECHOS DE AUTOR Y DERECHOS DE PROPIEDAD INDUSTRIAL. EL CONTENIDO NO PUEDE SER COPIADO, DIFUNDIDO, ALTERADO NI PONERSE A DISPOSICIÓN DE TERCEROS CON FINES COMERCIALES. SALVO ESPECIFICACIÓN EN CONTRARIO, TODAS LAS MARCAS, NOMBRES Y AVISOS COMERCIALES PRESENTES EN KIA.COM ESTÁN PROTEGIDAS BAJO LA LEY DE PROPIEDAD INDUSTRIAL. EN PARTICULAR, ESTO APLICA A LAS MARCAS, NOMBRES Y AVISOS COMERCIALES, LOGOTIPOS Y EMBLEMAS DE KIA. LAS MARCAS, NOMBRES Y AVISOS COMERCIALES Y LOS ELEMENTOS DEL DISEÑO QUE SE USAN EN KIA.COM SON PROPIEDAD INDUSTRIAL DE KIA CORPORATION */}
                  {
                    (lang === 'es')
                    ? <p>Copyright © 2023 Kia Corporation. All Rights Reserved.</p>
                    : <p>Copyright © 2023 Kia Corporation. All Rights Reserved.</p>
                  }
                </div> 
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
