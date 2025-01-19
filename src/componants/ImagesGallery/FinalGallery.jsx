import React from "react";
import { ImageGallery } from "./ImageGallery";
import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpg";
import im3 from "../../assets/im3.jpg";
import im4 from "../../assets/im4.jpg";
import im5 from "../../assets/im5.jpg";

const FinalGallery = () => {
  const galleryItems = [
    { imageUrl: im1, caption: "Image 1" },
    { imageUrl: im2, caption: "Image 2" },
    { imageUrl: im3, caption: "Image 3" },
    { imageUrl: im4, caption: "Image 4" },
    { imageUrl: im5, caption: "Image 5" },
  ];

  const isMobile = window.innerWidth <= 768; 

  return (
    <div className=" ">
      <h1 className="text-center my-4 text-6xl  text-white font-bold">Previous Glimpses</h1>
      <ImageGallery
        items={galleryItems}
        direction="left"       
        speed="normal"    
        background = "cover"    
        pauseOnHover={true}    
        imageWidth={isMobile ? 350 : 450} 
        imageHeight={isMobile ? 200 : 300}     
      />
    </div>
  );
};

export default FinalGallery;
