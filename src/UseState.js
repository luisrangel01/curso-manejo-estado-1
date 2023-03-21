import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  }

  const [state, setState] = React.useState(initialState);

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
      deleted: false,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
      confirmed: false,
      deleted: false,
    });
  };

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onCancel = () => {
    setState({ ...state, confirmed: false });
  };

  const onReset = ()=> {
    setState(initialState)
  }

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
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
            onWrite(event.target.value);
          }}
          disabled={state.loading}
        />
        <button
          disabled={state.loading}
          onClick={() => {
            onCheck();
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
            onDelete();
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            onCancel();
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
            onReset();
          }}
        >
          Recupera UseState
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
