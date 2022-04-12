import Konva from "konva";
import React from "react";
import { Image, Layer, Stage } from "react-konva";
// import { useState } from "react/cjs/react.production.min";
import useImage from "use-image";
import Video from "./test";

const App = () => {
  const LionImage = () => {
    const [image] = useImage("https://konvajs.org/assets/lion.png");
    return <Image image={image} />;
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer image>
        {/* <URLImage src="https://konvajs.org/assets/yoda.jpg" x={150} /> */}
        <LionImage />
        <Video
          // togglePlay={playing}
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Physicsworks.ogv/Physicsworks.ogv.240p.vp9.webm"
        />
      </Layer>
    </Stage>
  );
};

export default App;
