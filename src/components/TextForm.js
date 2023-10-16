//useState is a hook in react
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let regexPattern = /\s+/g; //regex pattern is a sequence of characters here s denotes blank space & g is for global, so this is a syntax to remove all extra spaces
        let newText = text.replace(regexPattern, " "); 
        setText(newText);
        alert("Extra spaces removed!", "success")
    }
    
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value); //by passing event as a parameter and using this syntax, now you can add text to the text box while value={text} is present in textarea
        
    }
   
    const [text, setText] = useState(''); //copy this syntax of hook(useState) from react.js org
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state


    return (
        <>
        <div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>

        </>
    )
}
