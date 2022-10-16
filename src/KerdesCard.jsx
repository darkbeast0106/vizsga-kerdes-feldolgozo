import React, { Component } from "react";
import replaceKatex from "./replaceKatex";
import classNames from "classnames";
import KerdesCardBody from "./KerdesCardBody";
//import "./KerdesCard.css";

class KerdesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAnswer: false,
    };
  }

  render() {
    const { kerdes, azonosito } = this.props;
    const kerdesSzoveg = replaceKatex(kerdes.description);
   
    const { displayAnswer } = this.state;
    if (kerdes.type !== "SingleChoice" && kerdes.type !== "MultiChoice") {
      console.log(kerdes);
    }
    
    if (kerdes.asset && kerdes.asset.assetType !== "Image") {
      console.log(kerdes.asset);
    }

    return (
      <div className="card mb-3">
        <div className="card-header">
          <strong dangerouslySetInnerHTML={{ __html: kerdesSzoveg }}></strong>
          {kerdes.asset && kerdes.asset.assetType === "Image" && (
            <img className="img-fluid" src={kerdes.asset.uri} alt="asset" />
          )}
        </div>
        <KerdesCardBody displayAnswer={displayAnswer} kerdes={kerdes} azonosito={azonosito} />
        <div className="card-footer d-grid gap-2">
          <button
            className={classNames("btn", {
              "btn-outline-success": !displayAnswer,
              "btn-outline-danger": displayAnswer,
            })}
            onClick={() =>
              this.setState({
                displayAnswer: !displayAnswer,
              })
            }
          >
            Válasz {displayAnswer ? "elrejtése" : "mutatása"}
          </button>
        </div>
      </div>
    );
  }
}

export default KerdesCard;
