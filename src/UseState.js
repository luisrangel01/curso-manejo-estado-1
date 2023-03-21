import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  React.useEffect(() => {
    console.log("empezando el efecto");
    if (state.loading) {
      setTimeout(() => {
        console.log(`haciendo la validacion`);
        if (state.value !== SECURITY_CODE) {
          setState({
            ...state,
            error: true,
            loading: false,
            confirmed: false,
            deleted: false,
          });
        } else {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
            deleted: false,
          });
        }
        console.log(`terminando la validacion`);
      }, 3000);
    }
    console.log("terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
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
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Estas seguro que quieres eliminar?</p>
        <button
          onClick={() => {
            setState({ ...state, deleted: true });
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false });
          }}
        >
          No
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con exito</p>
        <button
          onClick={() => {
            setState({ ...state, value: "", confirmed: false, deleted: false });
          }}
        >
          Recupera UseState
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
