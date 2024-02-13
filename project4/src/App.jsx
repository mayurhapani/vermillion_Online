import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  // console.log(text);
  console.log(analysis);

  const handelChange = (e) => {
    // console.log(e.target.value);

    setText(e.target.value);
  };

  const ANALYZE = () => {
    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
    const digitCount = text.replace(/\D/g, "").length;
    const vowelCount = (text.match(/[aeiou]/gi) || []).length;
    const consonantCount = text.replace(/[aeiou\d\s.!?]/gi, "").length;

    setAnalysis({
      charCount,
      wordCount,
      sentenceCount,
      digitCount,
      vowelCount,
      consonantCount,
    });
  };

  const UPPERCASE = (e) => {
    // console.log(text);
    // let uText = text.toUpperCase();
    // console.log(uText);
    setText(text.toUpperCase());
  };

  const LOWERCASE = () => {
    setText(text.toLowerCase());
  };

  const FORMATTEXT = () => {
    const formattedText = text.trim().replace(/\s+/g, " ");
    setText(formattedText);
  };

  const COPYTEXT = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        alert("Failed to copy text to clipboard.");
      });
  };
  const CLEARTEXT = () => {
    setText("");
  };
  return (
    <>
      <textarea
        value={text}
        onChange={handelChange}
        className="text-white w-full p-4 text-xl bg-gray-600"
        id="text"
        rows="10"
        placeholder="Enter Text Here"
      ></textarea>
      <div className="mt-5">
        <button onClick={ANALYZE} className="mr-5">
          ANALYZE
        </button>
        <button onClick={UPPERCASE} className="mr-5">
          UPPERCASE
        </button>
        <button onClick={LOWERCASE} className="mr-5">
          LOWERCASE
        </button>
        <button onClick={FORMATTEXT} className="mr-5">
          FORMAT TEXT
        </button>
        <button onClick={COPYTEXT} className="mr-5">
          COPY TEXT
        </button>
        <button onClick={CLEARTEXT} className="mr-5">
          CLEAR TEXT
        </button>
      </div>

      <div className="mt-10">
        {analysis ? (
          <>
            <div className="flex justify-between">
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.charCount}</h2>
                  <span>CHARACTERS</span>
                </div>
              </div>
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.wordCount}</h2>
                  <span>WORDS</span>
                </div>
              </div>
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.sentenceCount}</h2>
                  <span>SENTENCES</span>
                </div>
              </div>
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.digitCount}</h2>
                  <span>DIGITES</span>
                </div>
              </div>
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.vowelCount}</h2>
                  <span>VOVELS</span>
                </div>
              </div>
              <div className="w-32 h-32 bg-gray-500 rounded-lg flex justify-center items-center">
                <div className="">
                  <h2 className="text-4xl mb-3">{analysis.consonantCount}</h2>
                  <span>CONSTANTS</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
