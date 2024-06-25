import React, { useState, useEffect, useContext } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Loader from "../components/Loader.jsx";
import { QuestionsContext } from "../context/shuffled.jsx";


const Game = () => {
  const [loading, isLoading] = useState(true);
  const [counting, setCounting] = useState(0);
  const [play, setPlay] = useState(false);
  const { shuffled } = useContext(QuestionsContext);


  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 3000);
    
  }, []);

useEffect(()=>{
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        handleArrowBtns("left");
        break;
      case "ArrowRight":
        handleArrowBtns("right");
        break;
      default:
        break;
    }
  };
   // Add event listener for keydown
   document.addEventListener("keydown", handleKeyDown);

   // Cleanup the event listener when the component unmounts
   return () => {
     document.removeEventListener("keydown", handleKeyDown);
   };
},[counting])


  const handleArrowBtns = (e) => {
    if (e === "right") {
      counting === 15 ? setCounting(0) : setCounting((prev) => prev + 1);
    } else if (e === "left") {
      counting === 0 ? setCounting(15) : setCounting((prev) => prev - 1);
    }
  };


 

  return (
    <section >
      {/* <button onClick={handleQuestions}>Shuffle</button> */}
      <div className="Container Container-shadow border border-white my-6 rounded-lg bg-white ">
        <div className="flex items-center justify-between min-h-[50dvh]">
          <div>
            <BiSolidLeftArrow
              size="32px"
              className="text-primary mx-4 "
              onClick={(e) => handleArrowBtns("left")}
            />
          </div>
          {/* game Container */}
          {loading ? (
            <Loader />
          ) : (
            <div className="grow flex flex-col justify-between space-y-24 text-6xl text-center ">
              <h2 className="font-manrope">
                {shuffled[counting].question_english}
              </h2>
              <h2 className="font-hindi">
                {shuffled[counting].question_hindi}
              </h2>
            </div>
          )}

          <div>
            <BiSolidRightArrow
              size="32px"
              className="text-primary mx-4 "
              onClick={() => handleArrowBtns("right")}
            />
          </div>
        </div>
        <h1 className="text-center text-2xl mb-3 font-extrabold font-serif   ">
          {counting + 1}/16
        </h1>
      </div>
    </section>
  );
};

export default Game;
