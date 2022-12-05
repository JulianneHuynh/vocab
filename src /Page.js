import React from "react";
import VocabularyList from "./List";
import VocabularyForm from "./Form";
import Search from "./Search";

function Page() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ef74b207a8mshf1e64aec3ba6973p11d69ajsn04158c94739e',
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };
  
  fetch('https://urban-dictionary7.p.rapidapi.com/v0/define?term=yeet', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <Container>
      <h1> Search Term </h1>
      <br /> 
            <List/>
            <Search/>
            <Form/>
    </Container>
  );
}

export default Page;