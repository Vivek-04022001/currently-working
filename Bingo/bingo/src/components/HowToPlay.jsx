// Import React and Tailwind CSS
import React from "react";
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'

// HowToPlay component
const HowToPlay = () => {
    const sampleImages = [image1,image2, image3]
  return (
    <div className="mx-auto p-4 text-3xl  font-manrope  ">
      <h1 className=" mb-4 underline text-center font-extrabold">
        Game Instructions: Quiz Bingo
      </h1>

      <div className="mb-4">
        <h2 className=" mb-2 bg-primary text-white px-4 inline-block">
          Objective:
        </h2>
        <p>
          Cross out three straight lines on the Bingo grid by finding answers to
          the quiz questions.
        </p>
      </div>
      <hr className="my-6 bg-black text-black border border-black" />
      <div className="mb-4">
        <h2 className=" text-center font-extrabold mb-6 underline">
          How to Play:
        </h2>
        <ol className="space-y-8">
          <li>
            <span className="mr-4 px-4 text-white bg-primary  ">1</span> You
            have a 4x4 grid containing answers to 16 quiz questions.
          </li>
          <li>
            <span className="mr-4 px-4 text-white bg-primary  ">2</span>
            The quiz questions will be announced one by one.
          </li>
          <li>
            <span className="mr-4 px-4 text-white bg-primary  ">3</span>
            Find the correct answer on the grid and mark its cell by crossing it
            out.
          </li>
          <li>
            <span className="mr-4 px-4 text-white bg-primary  ">4</span>
            To win, create three straight lines – horizontal, vertical, or
            diagonal – by crossing out cells with correct answers.
          </li>

          {
            sampleImages.map(image => (
                <div className="w-1/2">
                    <img src={image} alt="" />
                </div>
            ))
          }

          <li>
            <span className="mr-4 px-4 text-white bg-primary  ">5</span>
            The game continues until someone completes three straight lines and
            shouts "Bingo!"
          </li>
        </ol>
      </div>

      <div className="mb-4">
        <h2 className=" mb-2 text-center font-extrabold underline">Winning:</h2>
        <p>
          The first player to cross out three straight lines shouts "Bingo!" and
          is declared the winner.
        </p>
      </div>
    </div>
  );
};

// Export HowToPlay component
export default HowToPlay;
