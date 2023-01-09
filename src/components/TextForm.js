import React,{useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText) 
        props.showAlert("Coverted to UpperCase!","Success")
    } 
    const handleLowClick= ()=>{
       console.log("Lowercase was clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText)  
      props.showAlert("Coverted to LowerCase!","Success")
  }
  const clearText= ()=>{
    console.log("Clear Text"+ text);
    let newText=" ";
    setText(" ");
}
    const handleOnChnage=(event)=>
    {
        console.log("ON change");
        setText(event.target.value);
       
    }
    const handleCopy=(event)=>
    {
      console.log("I am copy");
      var text=document.getElementById("myBox");
      console.log(text);
     // text.selelct();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=(event)=>
    {
      var text=document.getElementById("myBox");
      let newText=text.value.split(/\s+/g);
      setText(newText.join(" "))
      text.value=newText;

    } 
    const [text,setText]=useState("Write your sentance");
    // setText("new text");//correct way to chnage the state
  return ( 
    
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1> 
  <div className="mb-3">
    
    <textarea  className="for m-control" value={text}   onChange={handleOnChnage} style={{width:"100%",backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'grey':'black'}} id="myBox" rows="8"></textarea>
  </div> 
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to UpperCase</button> 
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Covert to LowerCase</button> 
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text </button> 
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button> 
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button> 

  </div>
  <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and  {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
  </>
  )
}
