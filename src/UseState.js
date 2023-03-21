import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  React.useEffect(() => {
    console.log("empezando el efecto");
    if (state.loading) {
      setTimeout(() => {
        console.log(`haciendo la validacion`);
        if (state.value !== SECURITY_CODE) {
          setState({ ...state, error: true, loading: false });
        } else {
          setState({ ...state, error: false, loading: false });
        }
        console.log(`terminando la validacion`);
      }, 3000);
    }
    console.log("terminando el efecto");
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {state.error && !state.loading && <p>Error: el código es incorrecto</p>}
      {state.loading && <p>Cargando...</p>}
      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({ ...state, value: event.target.value });
        }}
        disabled={state.loading}
      />
      <button
        disabled={state.loading}
        onClick={() => {
          setState({ ...state, loading: true });
        }}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
