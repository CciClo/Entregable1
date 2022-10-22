import { useState } from "react";
import quotes from "../assets/quotes.json";
import ChangeButton from "./ChangeButton";


const QuoteBox = () => {
  const colors = [
    "rgba(255, 0, 0, 0.87)",
    "rgba(223, 255, 0, 0.87)",
    "rgba(8, 255, 0, 0.87)",
    "rgba(0, 159, 255, 0.87)",
    "rgba(8, 0, 255, 0.87)",
    "rgba(163, 0, 255, 0.87)",
    "rgba(163, 0, 255, 0.87)",
    "rgba(255, 0, 84, 0.87)",
    "rgba(255, 0, 0, 0.87)",
    "rgb(139, 255, 0)"
  ];
  const randomColor = () => { return  Math.floor(Math.random() * colors.length)};
  const randomQuote = () => { return  Math.floor(Math.random() * quotes.length)};
  const [colorLett, setColorLett] = useState(randomColor);
  const [quoteLett, setQuoteLett] = useState(randomQuote);

  const change = () => {
    setColorLett(randomColor());
    setQuoteLett(randomQuote());
  };
  document.body.style = `background: ${colors[colorLett]}`
  return (
    <div style= {{color: colors[colorLett]}}>
      <div className="quote">
        <i class="fa-solid fa-quote-left"></i>
        <h2>{quotes[quoteLett].quote}</h2>
      </div>
      <div>
        <p>{quotes[quoteLett].author}</p>
      </div>
      <ChangeButton change={change}/>
    </div>
  );
};

export default QuoteBox;