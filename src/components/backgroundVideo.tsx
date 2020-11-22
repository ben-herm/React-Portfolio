import React, { useEffect, useRef } from "react";

interface backgroundVideoProps {}

const BackgroundVideo: React.FC<backgroundVideoProps> = ({}) => {
  const videoRef = useRef();
  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 5000);
  // }, []);
  return (
    <video
      ref={videoRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      }}
      autoPlay
      loop
      muted
      id="video"
    >
      <source src="/videos/technology.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
