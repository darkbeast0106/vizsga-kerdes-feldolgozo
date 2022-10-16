import React, { Component } from 'react';
import ValaszokMultiChoice from './ValaszokMultiChoice';
import ValaszokSingleChoice from './ValaszokSingleChoice';

class KerdesCardBody extends Component {
    render() { 
        const { kerdes } = this.props;
        let content = "";
        switch (kerdes.type) {
            case "SingleChoice":
                content = <ValaszokSingleChoice {... this.props} />
                break;
            
            case "MultiChoice":
                content = <ValaszokMultiChoice {... this.props} />
                break;
            default:
                console.log(kerdes);
                content = <h2>A kérdéstípus jelenlegi verzíóban nem megjeleníthető. További információ a konzolon.</h2>
                break;
        }
        return ( <div className="card-body">
            {content}
        </div> );
    }
}
 
export default KerdesCardBody;