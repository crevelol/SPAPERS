import React from 'react';

class Headers extends React.Component{
  render(){
    return (
      <div>
          <form action="/buscar/" method="GET">
              <input type="text" name="titulo" value={this.props.data[0]}/>
              <input type="text" name="keywords" value={this.props.data[1]}/>
              <input type="text" name="abstract" value={this.props.data[2]}/>
              <input type="submit" value=" Confirmar"/>
          </form>
      </div>
    );
  }
}

export default Headers;