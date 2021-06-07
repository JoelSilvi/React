import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const HandleChange = (e) => {};

  const HandleSubmit = (e) => {};

  const HandleReset = (e) => {};
  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={HandleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={HandleChange}
          value={form.constellation}
        />
        <input type="submit" value="Enviar" onClick={HandleSubmit} />
        <input type="reset" value="Limpiar" onClick={HandleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
