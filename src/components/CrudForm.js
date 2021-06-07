import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    HandleReset();
  };

  const HandleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  const focusMethod = function getFocus() {
    document.getElementById("myTextField").focus();
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={HandleSubmit}>
        <input
          id="myTextField"
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
        <input
          type="submit"
          value="Enviar"
          onClick={HandleSubmit}
          onClick={focusMethod}
        />
        <input type="reset" value="Limpiar" onClick={HandleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
