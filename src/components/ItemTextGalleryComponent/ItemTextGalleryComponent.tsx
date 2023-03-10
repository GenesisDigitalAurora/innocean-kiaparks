import { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { descItem } from "../../interfaces/";

export const ItemTextGalleryComponent = ({descTextEsp,descTextEng, images, type, indx, lang }:descItem) => {
    
    const [descriptionIndex, setDescriptionIndex] = useState(0);
    const [descriptionText, setDescriptionText] = useState(descTextEsp[0]);


    const initSlider = () =>{
        if(lang === 'es'){
            setDescriptionText(descTextEsp[0]);
        }else{
            setDescriptionText(descTextEng[0]);
        }
    }

    useEffect(() => {
      initSlider()
    }, [lang])
    

    const onHandleImageComponent= (indx:number )=>{
        setDescriptionIndex(indx-1);
        setDescriptionText(()=>{
            if(lang==='es'){
                return descTextEsp[indx - 1]
            }else{
                return descTextEng[indx - 1]
            }
        });
    }

    const MainDescItem = () => {
        return(
            <div>
                <h1 style={{fontSize: '4rem', textAlign:'center', padding:'50px 0'}}>
                    {
                        (indx === 0)
                        ? (lang === 'es')?'Antes':'Before'
                        : (lang === 'es')?'Después':'After'
                    }
                </h1>
                <div className={`ItemCont ${(type !== 'right')? 'reverse': ''}`}>
                    <div className="left">
                        <SimpleImageSlider
                            startIndex={descriptionIndex} 
                            onCompleteSlide = {(idxLeft, length) => { onHandleImageComponent(idxLeft) }}
                            width="100%" height="100%" 
                            images={images} 
                            showBullets={true} 
                            showNavs={true} />
                    </div>
                    <div className="right">
                        <div dangerouslySetInnerHTML={{ __html: descriptionText }}></div>
                    </div>
                </div>      
            </div>
        )      
        
    }

  return (
  <>
    <MainDescItem />
  </>
  )
}
