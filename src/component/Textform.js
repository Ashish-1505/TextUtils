
import React, {useState}  from 'react'
export default function Textform(props) {
  const handleupclick=()=>{
      console.log("Upper case was clicked" + Text);
      let newtext=Text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to Upper Case","success");

  }
  const handleclear=()=>{
    console.log("Clear was clicked" + Text);
    let newtext="";
    setText(newtext);
    props.showAlert("Text Cleared","success");

}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = Text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Spelling Your Text","success");
}
  const handleloclick=()=>{
    console.log("Lower case was clicked" + Text);
    let newtext=Text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case","success");

}
  const handleonchange=(event)=>{
    console.log("On change");
    setText(event.target.value);
}
  const [Text, setText] = useState("");  
  return (
    <>
    <div className="container" style={{color:props.Mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor:props.Mode==='dark'?'black':'white',color:props.Mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to upper case</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Convert to lower case</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear text</button>
        <button type="submit" disabled={Text.length===0} onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
        
    </div>
    <div className="container my-3" style={{color:props.Mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
