import KiaWhiteColor from '../../assets/images/new-kia-logo-white.png';
import './FooterComponent.scss';

export const FooterV2 = () => {
  return (
    <>
        <footer>
          <div id="FooterContV2">  
            <div id="FooterLogo">
              <img src={ KiaWhiteColor } alt="Kia Parks" />
            </div>
            <div id="FooterPanels"> 
              <div id="FooterPanelLeft">
                
                <ul>
                  <li>
                    <a href="https://worldwide.kia.com/int/company/sustainability/about/strategy?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" target="_blank" rel="noopener noreferrer"><strong>Sostenibilidad</strong></a>
                  </li>
                  <li>
                    <a href="https://www.kia.com/cl/util/kia-global.html?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" target="_blank" rel="noopener noreferrer"><strong>Kia in Chile</strong></a>
                  </li>
                  <li>
                    <a href="https://www.kia.com/ec/util/kia-global.html?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" target="_blank" rel="noopener noreferrer"><strong>Kia in Ecuador</strong></a>
                  </li>
                  <li>
                    <a href="https://kia.com.py/?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" target="_blank" rel="noopener noreferrer"><strong>Kia in Paraguay</strong></a>
                  </li>
                  <li>
                    <a href="https://www.kia.com/pe/util/kia-global.html?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" target="_blank" rel="noopener noreferrer"><strong>Kia in Peru</strong></a>
                  </li>
                </ul>

                <div className="info_sns">
                  <a href="https://www.youtube.com/KiaMexico?utm_source=micrositio&utm_medium=menunavegacion&utm_campaign=kiaparks_organic&utm_content=ene23" className="sns_spr spr_youtube" target="_blank" rel="noopener noreferrer" title="youtube">youtube</a>
                </div> 
                
              </div>
              <div id="FooterPanelRight">
                <div className="copyright">
                  ©COPYRIGHT. DERECHOS DE AUTOR 2021 KIA CORPORATION TODOS LOS DERECHOS RESERVADOS.“MARCA REGISTRADA”/ “M.R”/ “®”. TODOS LOS DERECHOS RESERVADOS. EL TEXTO, LAS IMÁGENES Y GRÁFICAS DEL SITIO WEB KIA.COM ESTÁN PROTEGIDOS POR LOS DERECHOS DE AUTOR Y DERECHOS DE PROPIEDAD INDUSTRIAL. EL CONTENIDO NO PUEDE SER COPIADO, DIFUNDIDO, ALTERADO NI PONERSE A DISPOSICIÓN DE TERCEROS CON FINES COMERCIALES. SALVO ESPECIFICACIÓN EN CONTRARIO, TODAS LAS MARCAS, NOMBRES Y AVISOS COMERCIALES PRESENTES EN KIA.COM ESTÁN PROTEGIDAS BAJO LA LEY DE PROPIEDAD INDUSTRIAL. EN PARTICULAR, ESTO APLICA A LAS MARCAS, NOMBRES Y AVISOS COMERCIALES, LOGOTIPOS Y EMBLEMAS DE KIA. LAS MARCAS, NOMBRES Y AVISOS COMERCIALES Y LOS ELEMENTOS DEL DISEÑO QUE SE USAN EN KIA.COM SON PROPIEDAD INDUSTRIAL DE KIA CORPORATION
                </div> 
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
