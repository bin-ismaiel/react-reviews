import Review from "./review";
import reviews from "./data.js";
import { useState } from "react";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => {
      let newIndex = (prev + 1) % reviews.length;
      return newIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      let newIndex = (prev - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const random = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === currentIndex) {
      random = currentIndex + 1;
    }
    console.log(random);
    setCurrentIndex(random % reviews.length);
  };

  return (
    <main>
      <Review {...reviews[currentIndex]} />
      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
      <button onClick={random}>Suprise</button>
    </main>
  );
};
export default App;
