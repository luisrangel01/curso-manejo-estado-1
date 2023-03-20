import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  // componentWillMount() {
  //   console.log(`componentWillMount...`)
  // }

  // componentWillUnmount() {
  //   console.log(`componentWillUnmount...`)
  // }

  // componentDidMount() {
  //   console.log(`componentDidMount...`)
  // }

  componentDidUpdate() {
    console.log(`actualizacion`, new Date());

    if (this.state.loading) {
      setTimeout(() => {
        console.log(`haciendo la validacion`);
        this.setState({ loading: false });
        console.log(`terminando la validacion`);
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error && <p>Error: el código es incorrecto</p>}
        {this.state.loading && <p>Cargando...</p>}
        <input placeholder="Código de seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => {
              return {
                loading: !prevState.loading,
              };
            })
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
