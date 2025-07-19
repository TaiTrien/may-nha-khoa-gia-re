import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ReactCompareImage from 'react-compare-image';
import { Button } from './ui/button';

interface ProductMediaProps {
  videoSrc?: string;
  frames?: string[];
  galleryImages: string[];
  beforeImage: string;
  afterImage: string;
}

const ProductMedia = ({
  videoSrc = '/product-demo.mp4',
  frames = [],
  galleryImages,
  beforeImage,
  afterImage,
}: ProductMediaProps) => {
  const [playing, setPlaying] = useState(true);
  const [frameIndex, setFrameIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const useVideo = videoSrc || frames.length === 0;

  useEffect(() => {
    if (!useVideo && frames.length) {
      if (playing) {
        intervalRef.current = setInterval(() => {
          setFrameIndex((prev) => (prev + 1) % frames.length);
        }, 100);
      }
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [playing, frames.length, useVideo]);

  const togglePlay = () => {
    if (useVideo && videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setPlaying(!playing);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-8">
      {/* Demo Section */}
      <div className="bg-gray-100 rounded-md p-4">
        {useVideo ? (
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-auto rounded"
            autoPlay={playing}
            loop
            muted
          />
        ) : (
          <img
            src={frames[frameIndex]}
            alt={`Frame ${frameIndex}`}
            className="w-full h-auto rounded"
          />
        )}
        <Button onClick={togglePlay} className="mt-2">
          {playing ? 'Pause' : 'Play'}
        </Button>
      </div>

      {/* Before/After Section */}
      <div className="bg-gray-100 rounded-md p-4">
        <div className="text-center font-medium mb-2">Before / After</div>
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          sliderLineColor="#3b82f6"
        />
      </div>

      {/* Image Gallery */}
      <div className="space-y-2">
        <Zoom>
          <img
            src={galleryImages[activeIndex]}
            alt={`Gallery ${activeIndex}`}
            className="w-full max-h-[400px] object-contain rounded-md"
          />
        </Zoom>
        <div className="flex gap-2 overflow-x-auto">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveIndex(idx)}
              className={`h-16 w-16 object-cover rounded-md cursor-pointer border ${
                activeIndex === idx
                  ? 'border-blue-500'
                  : 'border-transparent'
              }`}
              alt={`Thumb ${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMedia;
