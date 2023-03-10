import KiaWhiteColor from '../../assets/images/new-kia-logo-white.png';
import './FooterComponent.scss';

export const Footer = () => {
  return (
    <>
        <footer>
          <div id="FooterCont">  
            <div id="FooterLogo">
              <img src={ KiaWhiteColor } alt="Kia Parks" />
            </div>
            <div id="FooterPanels">  
              <div id="FooterPanelLeft">
                <ul>
                  <li>
                    <a href="https://www.kia.com/mx/shopping-tools/build-your-own.html" target="_blank" rel="noopener noreferrer"><strong>Compra tu Kia</strong></a>
                  </li>
                  <li>
                    <a href="https://www.kia.com/mx/service/service-care/maintenance.html" target="_blank" rel="noopener noreferrer"><strong>Propietarios</strong></a>
                  </li>
                  <li>
                    <a href="https://www.kia.com/mx/discover-kia/our-movement.html" target="_blank" rel="noopener noreferrer"><strong>Descubre Kia</strong></a>
                  </li>
                </ul>
                <div className="info-country">
                  Kia in <span>MX</span>
                </div>
                <div className="info_sns">
                        <a href="https://www.facebook.com/kiamexico" className="sns_spr spr_facebook" target="_blank" rel="noopener noreferrer" title="facebook">facebook</a>
                        <a href="https://twitter.com/KiaMexico" className="sns_spr spr_twitter"  target="_blank" rel="noopener noreferrer" title="twitter">twitter</a>
                        <a href="https://www.youtube.com/KiaMexico" className="sns_spr spr_youtube" target="_blank" rel="noopener noreferrer" title="youtube">youtube</a>
                        <a href="https://www.instagram.com/kiamexico/" className="sns_spr spr_instagram" target="_blank" rel="noopener noreferrer" title="instagram">instagram</a>                    
                </div>
              </div>
              <div id="FooterPanelRight">
                <div className="rack-links">
                  <button>Showroom</button>
                  <ul>
                    <li><a href='https://www.kia.com/mx/showroom/rio-sedan.html' target="_blank" rel="noopener noreferrer">Rio Sedán 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/rio-hatchback.html' target="_blank" rel="noopener noreferrer">Rio Hatchback 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/forte-sedan.html' target="_blank" rel="noopener noreferrer">Forte Sedán 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/forte-hatchback.html' target="_blank" rel="noopener noreferrer">Forte Hatchback 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/stinger.html' target="_blank" rel="noopener noreferrer">Stinger 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/soul.html' target="_blank" rel="noopener noreferrer">Soul 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/seltos.html' target="_blank" rel="noopener noreferrer">Seltos 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/niro.html' target="_blank" rel="noopener noreferrer">Niro 2023</a></li>
                    <li><a href='https://www.kia.com/mx/showroom/sorento.html' target="_blank" rel="noopener noreferrer">Sorento 2023</a></li>
                  </ul>
                </div>
                <div className="rack-links">
                  <button>Compra tu Kia</button>
                  <ul>
                    <li><a href='https://kiaseminuevoscertificados.mx/' target="_blank" rel="noopener noreferrer">Kia Seminuevos Certificados</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/promociones.html' target="_blank" rel="noopener noreferrer">Promociones</a></li>
                    <li><a href='https://www.apartatukia.com/' target="_blank" rel="noopener noreferrer">Aparta tu Kia</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/contact-dealer.html' target="_blank" rel="noopener noreferrer">WhatsApp Distribuidores</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/build-your-own.html' target="_blank" rel="noopener noreferrer">Configura tu Kia</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/request-a-brochure.html' target="_blank" rel="noopener noreferrer">Descargar Catálogo</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/finance-calculator.html' target="_blank" rel="noopener noreferrer">Cotiza tu Kia</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/request-a-test-drive.html' target="_blank" rel="noopener noreferrer">Solicitar Prueba de Manejo</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/finance/credit.html' target="_blank" rel="noopener noreferrer">Financiamiento</a></li>
                    <li><a href='https://www.kia.com/mx/shopping-tools/find-a-dealer.html' target="_blank" rel="noopener noreferrer">Encuentra un distribuidor</a></li>
                  </ul>
                </div>
                <div className="rack-links">
                  <button>Propietarios</button>
                  <ul>
                    <li><a href='https://www.kia.com/mx/service/service-care.html' target="_blank" rel="noopener noreferrer">Servicio</a></li>
                    <li><a href='https://www.kia.com/mx/service/accesorios.html' target="_blank" rel="noopener noreferrer">Accesorios</a></li>
                    <li><a href='https://www.kia.com/mx/service/warranty.html' target="_blank" rel="noopener noreferrer">Garantía</a></li>
                    <li><a href='https://www.kia.com/mx/service/kia-assistance.html' target="_blank" rel="noopener noreferrer">Kia Assistance</a></li>
                    <li><a href='https://www.kia.com/mx/service/manual.html' target="_blank" rel="noopener noreferrer">Manual de Usuario</a></li>
                    <li><a href='https://www.kia.com/mx/service/mykia.html' target="_blank" rel="noopener noreferrer">MyKia+</a></li>
                    <li><a href='https://www.kia.com/mx/service/driving-guide.html' target="_blank" rel="noopener noreferrer">Kia Tips</a></li>
                    <li><a href='https://www.kia.com/mx/service/kia-secure-parts.html' target="_blank" rel="noopener noreferrer">Kia Secure Parts</a></li>
                  </ul>
                </div>
                <div className="rack-links">
                  <button>Descubre Kia</button>
                  <ul>
                    <li><a href='https://www.kia.com/mx/discover-kia/our-movement.html' target="_blank" rel="noopener noreferrer">Nuestro movimiento</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/eventos.html' target="_blank" rel="noopener noreferrer">Eventos</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/social.html' target="_blank" rel="noopener noreferrer">Responsabilidad Social</a></li>
                    <li><a href='http://www.kia-pet.mx/' target="_blank" rel="noopener noreferrer">Kia Pet</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/visita-planta.html' target="_blank" rel="noopener noreferrer">Visita Planta</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/sponsorship.html' target="_blank" rel="noopener noreferrer">Patrocinio</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/ask.html' target="_blank" rel="noopener noreferrer">Ask</a></li>
                    <li><a href='https://www.kia.com/mx/util/privacy.html' target="_blank" rel="noopener noreferrer">Avisos de Privacidad</a></li>
                    <li><a href='https://www.kia.com/mx/discover-kia/sustainability.html' target="_blank" rel="noopener noreferrer">Sustentabilidad</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              ©COPYRIGHT. DERECHOS DE AUTOR 2021 KIA CORPORATION TODOS LOS DERECHOS RESERVADOS.<br/>
              “MARCA REGISTRADA”/ “M.R”/ “®”. TODOS LOS DERECHOS RESERVADOS. EL TEXTO, LAS IMÁGENES 
              Y GRÁFICAS DEL SITIO WEB KIA.COM ESTÁN PROTEGIDOS POR LOS DERECHOS DE AUTOR Y DERECHOS 
              DE PROPIEDAD INDUSTRIAL. EL CONTENIDO NO PUEDE SER COPIADO, DIFUNDIDO, ALTERADO NI 
              PONERSE A DISPOSICIÓN DE TERCEROS CON FINES COMERCIALES. SALVO ESPECIFICACIÓN EN 
              CONTRARIO, TODAS LAS MARCAS, NOMBRES Y AVISOS COMERCIALES PRESENTES EN KIA.COM 
              ESTÁN PROTEGIDAS BAJO LA LEY DE PROPIEDAD INDUSTRIAL. EN PARTICULAR, 
              ESTO APLICA A LAS MARCAS, NOMBRES Y AVISOS COMERCIALES, LOGOTIPOS Y EMBLEMAS DE KIA. 
              LAS MARCAS, NOMBRES Y AVISOS COMERCIALES Y LOS ELEMENTOS DEL DISEÑO QUE SE USAN EN 
              KIA.COM SON PROPIEDAD INDUSTRIAL DE KIA CORPORATION
            </div>
          </div>
        </footer>
    </>
  )
}
