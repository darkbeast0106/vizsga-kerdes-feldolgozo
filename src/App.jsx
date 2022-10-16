import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import FajlInput from "./FajlInput";
import KerdesLista from "./KerdesLista";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Navbar />
        <main className="container">
          <FajlInput fileInputChange={this.readDataFromFile} />
          <KerdesLista kerdesek={data} />
        </main>
      </div>
    );
  }

  readDataFromFile = (file) => {
    const fileReader = new FileReader();
    let data = {};
    fileReader.onloadend = () => {
      const content = fileReader.result;
      const json = JSON.parse(content);
      data = Array.isArray(json) ? json[0] : json;
      this.setState({ data: data.exercises });
    };
    fileReader.readAsText(file);
  };
}

export default App;
