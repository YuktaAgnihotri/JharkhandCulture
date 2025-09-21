import React, { useState, useEffect } from "react";
import dance from '../assets/dance.jpg'
import sohari from '../assets/sohariPainting.jpg'
import Home from "../pages/Home";
//import {idols} from '../assets/drumdance.webp'
//import {painting} from '../assets/wallpainting.webp'
const images = [
  {
    src: "https://www.shutterstock.com/image-photo/ranchi-india-08-tuesday-2019-600w-1488573422.jpg",
    caption: "Traditional Tribal Dance of Jharkhand",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/terracotta-crafts.jpg",
    alt : "img",
    caption: "Dokra Craft – Ancient Metal Casting Art",
  },
  {
    src: "https://www.ritiriwaz.com/wp-content/uploads/2019/11/Jharkhand-Craft-560x420.jpg",
    caption: "Sohrai Painting – Folk Wall Art",
  },
  {src :"https://im.hunt.in/cg/jhar/About/Profile/JharkhandWoodcrafts.jpg",
    caption: "Handloom & Weaving Traditions",
  },
];

export default function JharkhandBackgroundCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[current].src})` }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Discover Jhankhand
            
          </h1>
          <p className="mt-4 text-lg md:text-2xl italic">
            {images[current].caption}
          </p>
          <Home/>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

  