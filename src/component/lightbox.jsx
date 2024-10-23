import React, { useState } from 'react';
import img1 from '../assets/images/pizza.jpg'; 
import img2 from '../assets/images/freid.jpg'; 
import img3 from '../assets/images/steak.jpg'; 
import img4 from '../assets/images/pizza-slice.jpg'; 
import img5 from '../assets/images/meal-3.jpg'; 
import img6 from '../assets/images/kofta.jpg'; 
import img7 from '../assets/images/hero-img.png'; 
import img8 from '../assets/images/meal-3.jpg'; 
import img9 from '../assets/images/ommelate.jpg'; 
import img10 from '../assets/images/meal-3.jpg'; 
import img11 from '../assets/images/kofta.jpg'; 
import img12 from '../assets/images/freid.jpg'

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];  

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation(); 
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = (e) => {
    e.stopPropagation();  
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className=''>
      <div className="gallery grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4 ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          className="w-full h-48 object-cover cursor-pointer"
          loading="lazy"  
          onClick={() => openLightbox(image)}  
        />
      ))}

      {selectedImage && (
        <div
          className="lightbox fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <span className="close absolute top-4 right-4 text-white text-3xl cursor-pointer">&times;</span>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          <button
            className="prev absolute left-4 text-white text-2xl"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <button
            className="next absolute right-4 text-white text-2xl"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Gallery;
