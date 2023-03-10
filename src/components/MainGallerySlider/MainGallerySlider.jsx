import SimpleImageSlider from "react-simple-image-slider";

export const MainGallerySlider = ({galleryImages}) => {
  
  return (
    <div id="MainGallery">
        <SimpleImageSlider
            width="100%"
            height="100%"
            images = { galleryImages }
            showBullets={true}
            showNavs={true}
        />
    </div>
  )
}
