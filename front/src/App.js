import React, { Component } from 'react';
import vegaEmbed from "vega-embed";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      spec : {
        "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
        "description": "A simple bar chart with embedded data.",
        "data": {
          "values": [
            {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
            {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
            {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
          ]
        },
        "mark": "bar",
        "encoding": {
          "y": {"field": "a", "type": "ordinal"},
          "x": {"field": "b", "type": "quantitative"}
        }
      }
    };
  }

  render() {
    return (
      <div className="App">

        <textarea
          cols="40"
          rows="20"
          ref={(div) => this.divTarget=div}>
          Soy un div
        </textarea>

        <button onClick={() => {

          // var obj = {
          //   x: "abcd",
          //   y: {"field": "defg", "type": "quantitative"}

          this.state.spec
        };

        this.divTarget.value=JSON.stringify(obj, null, 2);
      }}> Cambialo </button>
    </div>
  );
}
}

export default App;
