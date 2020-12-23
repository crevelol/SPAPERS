import React from 'react';

import Resultado from './Resultado';

class Buscador extends React.Component {

    state = {
        show: true,
        query: '',
    }

    handleChange = event => {
        this.setState({ query: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ show: !this.state.show })

    }

    render(){
        
        if(this.state.show) {
            return (
                <div className="Buscador">
                  <form onSubmit={this.handleSubmit}>
                  <table className="Tabla">
                    <tbody>
                        <tr>
                            <td>
                            
                            <img className="imagen" src={Logo} alt=""/>
                            <p className="letras letras-tam">Machine Learning For Scientific Documents</p>
                            
                            <input className="tam-bus" id="search" type="text" name="query" placeholder="Buscar artículos: Entre una o más palabras" onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <button className="bus boton" type="submit"><img src="./busqueda.svg"></img>Buscar</button>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                  </form>
              </div>
            );
        }else{
            return (
                <Resultado query={this.state.query}/>
            )
            
        }
  }
}

export default Buscador;