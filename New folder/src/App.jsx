import { useState } from "react";

import Image1 from "./assets/image.jpg";

import {

  GlassMagnifier,
 
} from "@vanyapr/react-image-magnifiers";

function App() {
  const [state, setState] = useState({
    allowOverflow: true,
    magnifierBorderSize: 5,
    magnifierBorderColor: "rgba(255, 255, 255, .5)",
    magnifierSize: "30%",
    square: false,
  });

  return (
    <div className=" min-h-screen flex justify-center py-20 max-w-5xl mx-auto">
      <div className="w-full  aspect-square ">
        {/* <img src={Image1} /> */}
        <div className=" flex">
          <GlassMagnifier
            className="input-position"
            imageSrc={Image1}
            // imageAlt="Example"
            // largeImageSrc={Image1}
            // allowOverflow={state.allowOverflow}
            // magnifierSize={state.magnifierSize}
            // magnifierBorderSize={state.magnifierBorderSize}
            // magnifierBorderColor={state.magnifierBorderColor}
            // square={state.square}
          />
        </div>
        {/* <div className="border border-red-200 m-4 h-[500px] aspect-square p-4">
          <Magnifier
            imageSrc={ImageSmall}
            imageAlt="Example"
            largeImageSrc={Image1} // Optional
            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
          />
        </div> */}
      </div>
    </div>
  );
}

export default App;
