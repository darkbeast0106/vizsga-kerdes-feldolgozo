import React, { Component } from 'react';
import KerdesCard from './KerdesCard';

class KerdesLista extends Component {
    render() { 
        const { kerdesek } = this.props;
        const kerdesLista = [];
        let i = 0;
        const date = new Date();
        kerdesek.forEach(kerdes => {
            kerdesLista.push(<KerdesCard key={i + date.toUTCString()} kerdes={kerdes} />)
            i++;
        });

        return (
            <div className="mt-3" >
                {kerdesLista}
            </div>
        );
    }
}
 
export default KerdesLista;