import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUPClick=()=>
    {
       // console.log("UpperCase" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick=()=>
    {
       // console.log("UpperCase" + text);
        let newText=text.toLowerCase();
        setText(newText);
       
    }
    const handleClearText=()=>
    {
       // console.log("UpperCase" + text);
        
        let newText = '';
        setText(newText)
       
    }

    const handleCopy =() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
       
    
      }
     
      const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
       // props.showAlert("Extra spaces removed!","success")
    
      }
      
    const handleOnChange=(event)=>
    {
       // console.log("on changed");
        setText(event.target.value);
    }
    
    




    const[text ,setText]=useState('');
    //setText=("new text");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}  </h1>
            <div className="mb-3">
               {/*<label for="myBox" class="form-label">Enter your Text below:</label>*/}
                <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-0' onClick={handleUPClick}> Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}> Convert to LowerCase</button>

            <button className='btn btn-primary mx-2' onClick={handleClearText}> Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}> Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}> Remove Extra Space</button>


        </div>
        <div className='container'>
            <h2> Your Text Summary</h2>
          {/* <p> {text.split(" ").length} Words and {text.length} Characters</p>*/}
         <p>{text.split(/\s+/).filter((element)=>
         {
            return element.length!==0}).length} Words and {text.length} Characters</p>
          
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h2>Preview</h2>
           
          <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>
        </>
    )
}
