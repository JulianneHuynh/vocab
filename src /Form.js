import React from "react";

function Form(){
  
  return (
    <form>
            <input 
                placeholder="Term"/>
            <input 
              placeholder="Phonetic Transcription" />
            <input 
                placeholder="Definition"/>
            <input 
                placeholder="Example" 
                step="1"/>
            <button type="submit">Add Term</button>
        </form>
    )
}