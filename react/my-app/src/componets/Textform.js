import React from "react";
import { useState } from "react";
import * as ReactDOMClient from "react-dom/client";

// hooks jo hai wo bina class banaye class function ko use karne deta hai

export default function Textform(prop) {
  // imp thing is when you create hook then react make track of that(if changes happen then it make in output also)
  // here what is below is suppose it is a variable and other one is function
  // we can't set values of text directly we have to change it using setText functions
  const [text, setText] = useState("Enter Text Here");
  // to change this text variable use below one
  // setText("pass your new text");
  
  //after typing very element we have to diplay on screen 
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value)

  };
  
  // uppercase convertor
  const handleUpClick = () => {
    prop.showAlert("Converted to UpperCase","success");
    let tex1 = text.toUpperCase();
    setText(tex1);

  };

  // lower case convertor
  const handleloClick = () => {
    let tex1 = text.toLowerCase();
    prop.showAlert("Converted to LowerCase","success");
    setText(tex1);
  };

  // removing vowels from text
  const remove = () => {
    let updatedtext = "";
    for (let index = 0; index < text.length; index++) {
      let temp = text[index];
      // creating array of vowels
      const vowels = ["a", "e", "i", "o", "u"];
      const vowels2 = ["A", "E", "I", "O", "U"];
      // if wala logic not right
      if (vowels.includes(temp)) {
        updatedtext = updatedtext + "";
      } 
      else if(vowels2.includes(temp)) {
        updatedtext = updatedtext + "";
      }
      else {
        updatedtext = updatedtext + temp;
      }
    }
    prop.showAlert("Vowels are removed","success");
    setText(updatedtext);
  };

  // clearing text
  const onClickClear = () => {
    setText("");
  };

  const handleCopy=()=>
  {
    // getting element of particular id and copy text in text variable  
    const text=document.getElementById("inputPassword5");
    text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Copy to clipboard","success");
  };
  
  // removing extra space 
  const handleExtraSpace=()=>
  {
    let newtext =text.split(/[ ]+/);//this is where my array split
    setText(newtext.join(" "))
  }
  return (
    <div>
      {/* ${prop.mode==='light'?'dark':'light'} this statement is change according to switch or mode change by the users */}
      <div className={`text-center text-${prop.mode==='light'?'dark':'light'} bg-${prop.mode}`}>
        <label htmlFor="inputPassword5" className={`form-label text-center text-${prop.mode==='light'?'dark':'light'}`}>
          <h3>Enter the text</h3>
        </label>
        <br />
        <textarea
          rows={5}
          cols={100}
          id="inputPassword5"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <br></br>
        <button className="btn btn-primary mx-5 my-4" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary my-4" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary my-4 mx-5" onClick={onClickClear}>
          Clear Text
        </button>
        <button className="btn btn-primary my-4 mx-5" onClick={remove}>
          Remove Vowels
        </button>
        <button className="btn btn-primary my-4 mx-5" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-4 mx-5" onClick={handleExtraSpace}>
         Remove Extra space
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <spanp>
          Toatal Words:{text.split(" ").length} <br />
          Total character:{text.length}
        </spanp>
        {/* time take to read one character is 0.008 per minute*/}
        <p>Time Taken to read:{text.length * 0.008}</p>
      </div>
    </div>
  );
}
