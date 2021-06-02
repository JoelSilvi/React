import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  IncrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Comunicacion entre Componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        <Hijo
          IncrementarContador={this.IncrementarContador}
          mensaje="Mensaje para el hijo N°1"
        />
        <Hijo
          IncrementarContador={this.IncrementarContador}
          mensaje="Mensaje para el hijo N°2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.IncrementarContador}>+</button>
    </>
  );
}
