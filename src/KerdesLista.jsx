import React, { Component } from 'react';
import KerdesCard from './KerdesCard';

class KerdesLista extends Component {
    render() { 
        const { kerdesek } = this.props;
        const kerdesLista = [];
        let i = 0;
        const date = new Date();
        kerdesek.forEach(kerdes => {            
            const key = i + date.toUTCString();
            kerdesLista.push(<KerdesCard key={key} kerdes={kerdes} azonosito={key} />)
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