import React from 'react';
import axios from 'axios';
import Confirmar from './Confirmar';

const apiKey = "pczElohYIxt0gfQGR1BkZAD6vF4CKUSJ";

class Resultado extends React.Component {

        state = {
            papers: [],
            data: [],
            show: true
        }

        similar = async(titulo, keywords, abstract) => {
            await this.setState({ data: [titulo, keywords, abstract] });
            this.setState({ show: !this.state.show });
            console.log(this.state.show);

        }

        consulta = () => {
            const query = JSON.stringify([{
                query: this.props.query
            }]);
            axios.post(`https://core.ac.uk:443/api-v2/articles/search?metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=${apiKey}`, query)
                .then(res => {
                    const papers = res.data;
                    this.setState({ papers })

                    var d = Object.values(this.state.papers[0]);
                    this.setState({ papers: d[2] })

                    console.log(this.state.papers);
                })
        }

        componentDidMount() {
            this.consulta();

        }

        render() {
            if (this.state.show) {

                if (this.state.papers !== undefined) {
                    return ( <table border = "1" >
                        <tbody>
                        <tr className = "letras" >
                        <th > ID </th> 
                        <th > TITULO </th> 
                        <th > KEYWORDS </th> 
                        <th > ABSTRACT </th> 
                        <th > OPCIONES </th> 
                        </tr>
                        </tbody> 
                        {this.state.papers.map(paper => {
                                return ( 
                                <tbody>
                                <tr key = { parseInt(paper.id) } >
                                    <td className = "letras" > { paper.id } </td> 
                                    <td className = "letras" > { paper.title } </td> 
                                    <td className = "letras" > { paper.topics } </td> 
                                    <td className = "letras" > { paper.description } </td> 
                                    <td className = "letras" >
                                    <button className = "boton"
                                    onClick = {
                                        () => this.similar(paper.title, paper.topics, paper.description) } > Similares </button> 
                                    <button className = "boton"> GPT - 2 </button> 
                                    </td>
                                    </tr>
                                </tbody>
                                )
                            })
                        } </table>)
                    }
                } else {
                    return ( 
                        <Confirmar data = { this.state.data }/>
                    )
                }
            }
        }

        export default Resultado;