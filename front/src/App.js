import React, { Component } from 'react';
import './App.css';
import vegaEmbed from 'vega-embed';

class App extends Component {

  constructor(props){
    super(props);
  }

  state = {
    spec : ["tema 1", "tema 2", "tema 3"],
    values : [
      {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
      {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
    ]
  }

  createGraph(){
    var myData = this.state.values;

    var spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "description": "A simple bar chart with embedded data.",
      "data": {
        "name": "myData"
      },
      "mark": "bar",
      "encoding": {
        "y": {"field": "a", "type": "ordinal"},
        "x": {"field": "b", "type": "quantitative"}
      }
    };

    const embed_opt = {"mode": "vega-lite"};
    const el = document.getElementById('vis');
    const view = vegaEmbed("#vis", spec, embed_opt)
    .catch(error => console.log("Failure to insert graphic"))
    .then((res) =>  res.view.insert("myData", myData).run());

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

          var obj = {
            x: "abcd",
            y: {"field": "defg", "type": "quantitative"}
          };
          // this.setState({spec});
          this.divTarget.value=JSON.stringify(obj, null, 2);
        }

      }> Cambialo </button>
      <button className="btn btn-primary" onClick={() =>  this.createGraph()}>Graph</button>
      <div id="vis"></div>
      </div>
    );
  }
}


export default App;
