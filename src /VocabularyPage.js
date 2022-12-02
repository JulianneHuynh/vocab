import React from "react";
import VocabularyList from "VocabularyList";
import VocabularyForm from "VocabularyForm";
import Search from "./Search";

function VocabularyPage() {



  return (
    <Container>
      <h1> Search Term </h1>
      <br /> 
            <VocabularyList/>
            <Search/>
            <VocabularyForm/>
    </Container>
  );
}