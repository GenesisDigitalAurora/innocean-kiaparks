import { useState } from 'react';
import VideoPlayer from '../../assets/images/KiaParksVidePlayer.png';
import { VideoProps } from '../../interfaces';
import { ModalBgLayout } from '../../layout/ModalBgLayout';
import { BGMainVideo } from '../../assets/images';
import './VideoComponent.scss';

export const VideoComponent = ( { 
  title = null, 
  bgImage = null, 
  videoURL = undefined,
  lang
 }:VideoProps ) => {

  const [videoStatus, setVideoStatus] = useState(false);

  const handleVidePlayer = () => {
    if(!videoStatus){
      setVideoStatus(true);
    }else{
      setVideoStatus(false);
    }
  }

  const videPlayerModal = () => {
    if(!videoStatus){
      return;
    }else{
      return (
        <ModalBgLayout>
          <div id="VideoModal">
            <iframe 
              width="100%"
              height={450} 
              src={ videoURL } 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
            <div onClick={ handleVidePlayer } className="btn-close">
              Cerrar
            </div>
          </div>
        </ModalBgLayout>
      )
    }
  }

  return (
    <>
      <div id="ViideoContainer" style={{ backgroundImage: `url(${bgImage})`}}>
        {
          (lang === 'es')
          ?<h1>Nuestro compromiso de crear un futuro mejor y sostenible como marca. Creando armonía con la naturaleza, las comunidades y la sostenibilidad.</h1>
          :<h1>Our commitment is to create a better and sustainable future as a brand. We are creating harmony with nature, communities, and sustainability.</h1>
        }
        
        <div id="VideoComponent">
          <img src={ BGMainVideo } alt="Kia Parks Video" />
          <div className='hover-video'>
            <button onClick={ handleVidePlayer } className="btn-video">
                <img src={ VideoPlayer } alt="Kia Parks Video" />
                {
                  (lang === 'es')
                  ?<p>Ver video</p>
                  :<p>Watch video</p>
                }
            </button>
            {/* <div className="main-slogan">
                {
                  ( !!title )
                  ? <><h1>{ title }</h1><h2>Kia Parks</h2></>
                  : <><h1>Kia Parks</h1><br/></>
                }
                
            </div> */}
          </div>
        </div>
      </div>
      {
        videPlayerModal()        
      }
    </>
  )
}
