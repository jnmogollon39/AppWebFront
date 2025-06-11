// src/FormComponent.jsx
import { useState } from "react";

export default function FormComponent() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://intgrfunction.azurewebsites.net/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    alert("Enviado al backend");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}
