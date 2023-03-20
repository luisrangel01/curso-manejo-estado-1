import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("empezando el efecto");
    if (loading) {
      setTimeout(() => {
        console.log(`haciendo la validacion`);
        setLoading(false);
        console.log(`terminando la validacion`);
      }, 3000);
    }
    console.log("terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {error && <p>Error: el código es incorrecto</p>}
      {loading && <p>Cargando...</p>}
      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading((prevState) => !prevState)}>
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
