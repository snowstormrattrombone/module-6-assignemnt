import { useState } from "react";

function Content() {
  let [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <main className="container content__box">
      <textarea
        value={text}
        onChange={handleTextAreaChange}
        placeholder="Type here"
      />
      <button onClick={handleButtonClick}>Display Text</button>
      <p className="display__text">You Typed: {displayText}</p>
    </main>
  );
}

export default Content;
