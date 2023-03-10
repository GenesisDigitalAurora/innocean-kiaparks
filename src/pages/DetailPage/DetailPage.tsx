import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { VideoComponent } from "../../components/VideoComponent/VideoComponent"
import { uniquePark } from "../../interfaces";
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer,   } from 'react-leaflet';
import './DetailPage.scss';
import { ItemTextGalleryComponent } from '../../components/ItemTextGalleryComponent/ItemTextGalleryComponent';
import { useNavigate } from 'react-router-dom';
import { MainGallerySlider } from '../../components/MainGallerySlider/MainGallerySlider';
import { FooterV3, Header } from '../../components';

export const DetailPage = ( { parkInfo, lang, chooseLang }:uniquePark ) => {
    
    const navigate = useNavigate();
    const onGoToSection = ( url:string ) => {
        navigate( url );
        window.scrollTo(0, 0);
      }
      
      const GetMainGallery = ()=>{
        if(parkInfo.galleryImages.length > 0){
            return <MainGallerySlider galleryImages={parkInfo.galleryImages}/>
        }
        return <></>;
      }

  return (
    <>
        <Header lang={lang} chooseLang={chooseLang}/>   
        <HelmetProvider>
            <Helmet>
                <title>{`Kia Parks / ${parkInfo.country} / ${parkInfo.location}`}</title>
            </Helmet>
        </HelmetProvider>

        <div id="DetailMainContainer">
            <div id='MainTitle' className="container">
                <h1><strong>Kia Parks { parkInfo.country }</strong><br/><span>{ parkInfo.location }</span></h1>
            </div>

            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={ parkInfo.detailImageOld } alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={ parkInfo.detailImageNew } alt="Image two" />}
            />
            
            <div className="container display-flex intro-text01">
                <div className="intro-left text-justfy col-6">
                    {
                        (lang === 'es')
                        ?<h1>Conoce nuestro espacio</h1>
                        :<h1>Learn more of our space</h1>
                    }
                    <br />
                    <p>
                        { 
                            (lang === 'es')
                            ? parkInfo.description01Esp
                            : parkInfo.description01Eng
                        }
                    </p>
                </div>
                <div className="intro-right text-center col-6">
                    <div id='MapContainer'>
                        <MapContainer center={parkInfo.maps as LatLngExpression} zoom={parkInfo.zoom}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        </MapContainer>
                    </div>
                </div>
            </div>
            
            {/* <div className="invitation-cont">
                <div className="container">
                    <h3>¿Quieres formar parte de está o alguna otra iniciativa?</h3>
                    <button className="more-btn">Descúbre cómo</button>
                </div>
            </div> */}

            {
                (parkInfo.videoActivated)
                ? <VideoComponent title={parkInfo.country} lang={lang}  bgImage={parkInfo.detailVideoImage} videoURL={ parkInfo.detailVideoURL } />
                : ''
            }

            {
                parkInfo.description02(lang)
            }
                
            <div id="GalleryContainer">
                <>
                    {
                        parkInfo.descriptionsSet.map( (itemDesc, i) => {
                            return(
                                <ItemTextGalleryComponent
                                    lang={lang}
                                    key={`__${i}${itemDesc.type}`}
                                    descTextEsp={itemDesc.descTextEsp} 
                                    descTextEng={itemDesc.descTextEng} 
                                    type={itemDesc.type} 
                                    images={itemDesc.images}
                                    indx={i} /> 
                            )
                        })
                    }
                    
                </>
                <GetMainGallery/>
            </div>
            {/* <div className="invitation-cont">
                <div className="container">
                    <h3><strong>¿Te gustaría aportar a nuestras iniciativas?</strong></h3>
                </div>
            </div> */}
            <div id="SelectOther" style={{display: `${(parkInfo.country === 'Ecuador')? 'block':'none'}`}}>
                <div className="container">
                    <button onClick={ () => onGoToSection((parkInfo.resumeCountry === 'Quito, Ecuador')? '/ecuador/galapagosbaltra/':'/ecuador/parquedelamujeryelnino/') }>
                        {
                            ( parkInfo.resumeCountry === 'Quito, Ecuador' )
                            ?<span>Galápagos</span>
                            :<span>Quito</span>
                        }
                    </button>
                </div>
            </div>
        </div>
        <FooterV3 snLinks={parkInfo.footerSN} blockLinks={parkInfo.footer} lang={lang} chooselang={chooseLang} />
    </>
  )
}
