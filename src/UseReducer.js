import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          dispatch({ type: "ERROR" });
        } else {
          dispatch({ type: "CONFIRM" });
        }
      }, 3000);
    }
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
            dispatch({ type: "WRITE", payload: event.target.value });
          }}
          disabled={state.loading}
        />
        <button
          disabled={state.loading}
          onClick={() => {
            dispatch({ type: "CHECK" });
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
            dispatch({ type: "DELETE" });
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CANCEL" });
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
            dispatch({ type: "RESET" });
          }}
        >
          Recupera Estado Inicial
        </button>
      </React.Fragment>
    );
  }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  CONFIRM: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
    deleted: false,
  },
  ERROR: {
    ...state,
    error: true,
    loading: false,
    confirmed: false,
    deleted: false,
  },
  CHECK: { ...state, loading: true },
  DELETE: { ...state, deleted: true },
  CANCEL: { ...state, confirmed: false },
  RESET: initialState,
  WRITE: { ...state, value: payload },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  }
  return { ...state };
};

export { UseReducer };
