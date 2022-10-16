import React, { Component } from "react";
import katex from "katex";
//import "./KerdesCard.css";

class KerdesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAnswer: false,
    };
  }

  render() {
    const { kerdes } = this.props;
    const kerdesSzoveg = this.replaceKatex(kerdes.description);
    const valaszLehetosegek = kerdes.answerOptions;
    const valaszLista = [];
    console.log(kerdes);
    valaszLehetosegek.forEach((valaszLehetoseg) => {
      const valaszLehetosegSzoveg = this.replaceKatex(
        valaszLehetoseg.description
      );
      valaszLista.push(
        <li
          className="list-group-item"
          key={valaszLehetoseg.id}
          dangerouslySetInnerHTML={{ __html: valaszLehetosegSzoveg }}
        />
      );
    });
    return (
      <div className="card mb-3">
        <div className="card-header">
          <strong dangerouslySetInnerHTML={{ __html: kerdesSzoveg }}></strong>
          {kerdes.asset && kerdes.asset.assetType === "Image" && (
          <img className="img-fluid" src={kerdes.asset.uri} alt="asset" />
        )}
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">{valaszLista}</ul>
        </div>
      </div>
    );
  }

  replaceKatex = (text = "") => {
    while (text.indexOf("KATEX") > 0) {
      const startIndex = text.indexOf("<KATEX>");
      const endIndex = text.indexOf("</KATEX>") + 8;
      const katexText = text.substring(startIndex, endIndex);

      const katexContent = text.substring(startIndex + 7, endIndex - 8);
      const html = katex.renderToString(katexContent, {
        throwOnError: false,
        output: "html",
      });
      text = text.replace(katexText, html);

      /*
      const displayStart = katexText.indexOf("texttt{") + 7;
      const displayEnd = katexText.indexOf("}}");
      const displayText =
        "<span class='katex'>" +
        katexText.substring(displayStart, displayEnd) +
        "</span>";

        text = text.replace(katexText, displayText);
        */
    }
    return text;
  };
}

export default KerdesCard;
