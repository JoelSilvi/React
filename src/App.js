import React from "react";
import SelectsAnidados from "./components/SelectsAnidados";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
