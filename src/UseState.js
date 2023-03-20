import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("empezando el efecto");
    if (loading) {
      setTimeout(() => {
        console.log(`haciendo la validacion`);
        if (value !== SECURITY_CODE) {
          setError(true);
        }
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
      {error && !loading && <p>Error: el código es incorrecto</p>}
      {loading && <p>Cargando...</p>}
      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          // setError(false);
          setValue(event.target.value);
        }}
        disabled={loading}
      />
      <button
        disabled={loading}
        onClick={() => {
          // setError(false);
          setLoading((prevState) => !prevState);
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
