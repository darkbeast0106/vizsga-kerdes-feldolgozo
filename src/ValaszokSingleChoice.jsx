import React, { Component } from "react";
import classNames from "classnames";
import replaceKatex from "./replaceKatex";

class ValaszokSingleChoice extends Component {
  render() {
    const { kerdes, azonosito, displayAnswer } = this.props;
    const valaszLehetosegek = kerdes.answerOptions;
    const valaszLista = [];
    valaszLehetosegek.forEach((valaszLehetoseg) => {
      const valaszLehetosegSzoveg = replaceKatex(valaszLehetoseg.description);
      valaszLista.push(
        <li
          className={classNames("list-group-item", {
            "list-group-item-success":
              displayAnswer &&
              kerdes.questions[0].correctAnswers.includes(valaszLehetoseg.id),
          })}
          key={valaszLehetoseg.id}
        >
          <input
            className="form-check-input"
            type="radio"
            name={azonosito}
            id={azonosito + valaszLehetoseg.id}
          />
          <label
            className="ps-2"
            htmlFor={azonosito + valaszLehetoseg.id}
            dangerouslySetInnerHTML={{ __html: valaszLehetosegSzoveg }}
          />
        </li>
      );
    });
    return (
      <ul>
        <ul className="list-group list-group-flush">{valaszLista}</ul>
      </ul>
    );
  }
}

export default ValaszokSingleChoice;
