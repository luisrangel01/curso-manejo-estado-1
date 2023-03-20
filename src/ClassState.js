import React from "react";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
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
        if (this.state.value === SECURITY_CODE) {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, error: true });
        }
        console.log(`terminando la validacion`);
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error && !this.state.loading && <p>Error: el código es incorrecto</p>}
        {this.state.loading && <p>Cargando...</p>}
        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          disabled={this.state.loading}
        />
        <button
          onClick={() =>
            this.setState((prevState) => {
              return {
                loading: !prevState.loading,
                error:false
              };
            })
          }
          disabled={this.state.loading}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
