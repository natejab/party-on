import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Autoplay plugin for Keen Slider
function Autoplay({ delay = 3000 }) {
  return (slider) => {
    let timeout;
    const clear = () => clearTimeout(timeout);
    const next = () => {
      slider.next();
      run();
    };
    const run = () => {
      clear();
      timeout = setTimeout(next, delay);
    };

    slider.on("created", run);
    slider.on("dragStarted", clear);
    slider.on("animationEnded", run);
    slider.on("updated", run);
  };
}

const ImageSlider = () => {
  const [loaded, setLoaded] = useState(false);
  const sliderRef = useRef();
  const sliderInstanceRef = useRef();

  const [bindSlider] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
      },
      created(slider) {
        sliderInstanceRef.current = slider;
        setLoaded(true);
      },
    },
    [Autoplay({ delay: 3000 })]
  );

  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];

  return (
    <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto py-8">
      {/* Left Arrow */}
      {loaded && (
        <button
          onClick={() => sliderInstanceRef.current?.prev()}
          className="text-black bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Slider */}
      <div
        ref={(node) => {
          bindSlider(node);
          sliderRef.current = node;
        }}
        className="keen-slider w-[90%] rounded-2xl overflow-hidden"
      >
        {images.map((src, idx) => (
          <div
            className="keen-slider__slide flex justify-center items-center"
            key={idx}
          >
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="object-center w-full h-[300px] md:h-[600px] rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {loaded && (
        <button
          onClick={() => sliderInstanceRef.current?.next()}
          className="text-black bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
