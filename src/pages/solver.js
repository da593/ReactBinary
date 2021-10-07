import React,{Component} from 'react';
import { BsInfoCircleFill } from "react-icons/bs";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import {calculationSequence} from "../calculation/calculations";
import {getDataArray,renderChart} from "../calculation/util";
import Plot from 'react-plotly.js';

class Solver extends Component {
    constructor(props) {
        super(props);
        this.state = {
          z: 0.5,
          yD: 0.9,
          xB: 0.1,
          q: 1.1,
          reflux: 1.5,
          alpha: 2.45,
          data: [], 
          layout: {},
          stages:0,
          feedStage:0,
          minReflux:0,
        };

        this.validateNumber = this.validateNumber.bind(this);
        this.validateDecimal = this.validateDecimal.bind(this);
        this.validateRatio = this.validateRatio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      zToolTip = (props) => (
        <Tooltip {...props}>
        Enter the composition of the more volatile component in the binary composition. Enter a value from 0-1 (e.g. 0.525)
        </Tooltip>
      );

      yDToolTip = (props) => (
        <Tooltip {...props}>
        Enter the distillate composition of the more volatile component that leaves the top of the column. Enter a value from 0-1 (e.g. 0.925)
        </Tooltip>
      );

      xBToolTip = (props) => (
        <Tooltip {...props}>
        Enter the bottoms composition of the more volatile component that leaves the bottom of the column. Enter a value from 0-1 (e.g. 0.05)
        </Tooltip>
      );

      qToolTip = (props) => (
        <Tooltip {...props}>
        Enter the feed quality.<br/>q{'<'}0 for superheated vapor,<br/> q=0 for saturated vapor,<br/> 0{'<'}q{'<'}1 for a mixture of liquid and vapor, <br/> q=1 for saturated liquid,<br/>q{'>'}1 for subcooled liquid
        </Tooltip>
      );

      refluxToolTip = (props) => (
        <Tooltip {...props}>
        Enter the reflux ratio, ratio of liquid that reenters the column divided by the liquid removed as a distilled product. Enter a value greater than 0 (e.g. 1.5)
        </Tooltip>
      );

      alphaToolTip = (props) => (
        <Tooltip {...props}>
        Enter the relative volatility between the two components which compares vapor pressure of the components. Enter a value greater than 0 (e.g. 2.5)
        </Tooltip>
      );
    
      validateNumber(event) {
        let {value,name} = event.target;
        this.setState({
          [name]: parseFloat(value, 10) || 0
        });
      }

      validateDecimal(event) {
        
        let {value,name} = event.target;
        
        
        this.setState({
            [name]: value
          });
      }

      validateRatio(event) {
        let {value,name} = event.target;
        
        this.setState({
            [name]: value
          });
      }

      handleSubmit(event) {
        this.getData()
        
        event.preventDefault();
      }

      getData() {
          let stage = calculationSequence(this.state.z,this.state.yD,this.state.xB,this.state.q,this.state.reflux,this.state.alpha)
          let data = renderChart(getDataArray())

          this.setState ({
              data: data[0],
              layout:data[1],
              stages:stage[0],
              feedStage:stage[1],
              minReflux:stage[2],
          })
      }

    render() {
        return (
            <><div class="header">
                <h1>McCabe-Thiele Diagram</h1>
                <p1 class="description">Calculates total number of stages, feed stage, and minimum reflux for a distillation column to separate a binary mixture with a given Relative Volatility.</p1>
            </div>
            <div className="row">
                    <div className="col-5">
                        <form onSubmit={this.handleSubmit}>

                            <h2> Input </h2>
                            <div className="form-group row">
                                <div className="col-sm-10">

                                    <label id="z" className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.zToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp; Feed Composition (z)
                                    </label>

                                    <input
                                        type="text"
                                        name="z"
                                        value={this.state.z}
                                        pattern="[0-9]*[.]?[0-9]+"
                                        onChange={this.validateDecimal} />
                                </div>
                            </div>


                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.yDToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp;Distillate Composition (yD)
                                    </label>
                                    <input
                                        type="text"
                                        name="yD"
                                        value={this.state.yD}
                                        pattern="[0-9]*[.]?[0-9]+"
                                        onChange={this.validateDecimal} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.xBToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp;Bottoms Composition (xB)
                                    </label>
                                    <input
                                        type="text"
                                        name="xB"
                                        value={this.state.xB}
                                        pattern="?[0-9]*[.]?[0-9]+"
                                        onChange={this.validateDecimal} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.qToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp; Feed quality (q)
                                    </label>
                                    <input
                                        type="text"
                                        name="q"
                                        value={this.state.q}
                                        pattern="[-]?[0-9]*[.]?[0-9]+"
                                        onChange={this.validateNumber} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.refluxToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp; Reflux Ratio (L/D)
                                    </label>
                                    <input
                                        type="text"
                                        name="reflux"
                                        value={this.state.reflux}
                                        pattern="[0-9]*[.]?[0-9]+"
                                        onChange={this.validateRatio} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <label className="col-sm-4 col-form-label">
                                        <OverlayTrigger placement="top" overlay={this.alphaToolTip}>
                                            <div className="icon-div">
                                                <BsInfoCircleFill />
                                            </div>
                                        </OverlayTrigger>
                                        &nbsp; Relative volatility (α)
                                    </label>
                                    <input
                                        type="text"
                                        name="alpha"
                                        value={this.state.alpha}
                                        pattern="[0-9]*[.]?[0-9]+"
                                        onChange={this.validateRatio} />
                                </div>
                            </div>

                            <div className="row justify-content-center mt-5">
                                <div className="col-sm-1">
                                    <button className="btn btn-dark" type="button" onClick={this.handleSubmit}>Solve</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-3">
                            <br />
                        <label class="answerLabel"> Number of Stages: {this.state.stages} </label>
                        <br />
                        <label class="answerLabel"> Optimal Feed Stage: {this.state.feedStage} </label>
                        <br />
                        <label class="answerLabel"> Minimum Reflux Ratio: {this.state.minReflux} </label>
                        <br />
                            </div>
                            <div className="col-6">
                                <Plot
                                data={this.state.data}
                                layout={this.state.layout}
                                onInitialized={() => { this.getData(); } } />
                            </div>
                        </div>

                    </div>
                </div></>  


        )

      }
}


export default Solver;



