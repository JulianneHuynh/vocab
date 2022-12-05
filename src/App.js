import React from "react";
import VocabularyPage from "./Page";


function App() {

  useEffect(()=>{
    fetch("https://urban-dictionary7.p.rapidapi.com/v0/define")
    .then(res=> res.json())
    .then(termsArray => console.log(termsArray))
  }, [])

  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;