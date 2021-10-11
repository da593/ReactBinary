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
          z: "0.5",
          yD: "0.9",
          xB: "0.1",
          q: "1.1",
          reflux: "1.5",
          alpha: "2.45",
          data: [], 
          layout: {},
          stages:0,
          feedStage:0,
          minReflux:0,
          zValidity: false,
          yDValidity: false,
          xBValidityL: false,
          qValidity: false,
          refluxValidity: false,
          alphaValidity: false,
        };
        this.validateNumber = this.validateNumber.bind(this);
        this.validateDecimal = this.validateDecimal.bind(this);
        this.validateRatio = this.validateRatio.bind(this);
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
        Enter the reflux ratio, the ratio of liquid that re-enters the column divided by the liquid removed as a distilled product. Enter a value greater than 0 (e.g. 1.5)
        </Tooltip>
      );

      alphaToolTip = (props) => (
        <Tooltip {...props}>
        Enter the relative volatility between the two components which compares vapor pressure of the components. Enter a value greater than 0 (e.g. 2.5)
        </Tooltip>
      );
      
      setEmptyInput(name,boolean) {
        console.log(name,boolean)
        if (name === "z") {
            this.setState ({
                zValidity: boolean
            })
        }
        else if (name === "yD") {
            this.setState ({
                yDValidity: boolean
            })
        }
        else if (name === "xB") {
            this.setState ({
                xBValidity: boolean
            })
        }
        else if (name === "q") {
            this.setState ({
                qValidity: boolean
            })
        }
        else if (name === "reflux") {
            this.setState ({
                refluxValidity: boolean
            })
        }
        else if (name === "alpha") {
            this.setState ({
                alphaValidity: boolean
            })
        } 
    }
      validateNumber(event) {
        const re = /^-?\d*\.?\d*$/
        let {value,name} = event.target;

        if ( re.test(value)) {
            if (value === "") {
                this.setEmptyInput(name,true)
            }
            else if (value !== "") {
                this.setEmptyInput(name,false)
            }
            this.setState({
                [name]: value
              }, () => {
                this.getData()
              });
            }  
        }

      validateDecimal(event) {
        const re= /^(?:0*(?:\.\d*)?|1(\.0*)?)$/
        let {value,name} = event.target;
        
        if ( re.test(value)) {
            if (value === "") {
                this.setEmptyInput(name,true)
            }
            else if (value !== "") {
                this.setEmptyInput(name,false)
            }
            this.setState({
                [name]: value
              }, () => {
                this.getData()
              });
            }
        }

      validateRatio(event) {
        const re = /^\d*\.?\d*$/
        let {value,name} = event.target;

        if ( re.test(value)) {
            if (value === "") {
                this.setEmptyInput(name,true)
            }
            else if (value !== "") {
                this.setEmptyInput(name,false)
            }
            
            this.setState({
                [name]: value
              }, () => {
                this.getData()
              });
            }
        }


      getData() {
          
          let stage = calculationSequence(parseFloat(this.state.z),parseFloat(this.state.yD),parseFloat(this.state.xB),parseFloat(this.state.q),parseFloat(this.state.reflux),parseFloat(this.state.alpha))
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
            <><div className="header">
                <h1>McCabe-Thiele Diagram</h1>
                <p className="description">Calculates total number of stages, feed stage, and minimum reflux for a distillation column to separate a binary mixture with a given Relative Volatility.</p>
            </div>

            <div className="row" id="content-container">
                    <div className="col-sm-2"></div>
                    <div className="col-md-4" id="input-container">
                    <h2> Input </h2>
                    <div className="form-container">
                        <div className="form-group">
                            <div>
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.zToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp; Feed Composition (z)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="z"
                                    value={this.state.z}
                                    onChange={this.validateDecimal} 
                                    style={this.state.zValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.zValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for z between 0-1 (e.g. 0.45)</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="form-group">
                            <div>
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.yDToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp;Distillate Composition (yD)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="yD"
                                    value={this.state.yD}
                                    onChange={this.validateDecimal} 
                                    style={this.state.yDValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                    />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.yDValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for yD between 0-1 (e.g. 0.95)</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.xBToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp;Bottoms Composition (xB)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="xB"
                                    value={this.state.xB}
                                    onChange={this.validateDecimal} 
                                    style={this.state.xBValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                    />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.xBValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for xB between 0-1 (e.g. 0.05)</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div >
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.qToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp; Feed quality (q)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="q"
                                    value={this.state.q}
                                    onChange={this.validateNumber} 
                                    style={this.state.qValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                    />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.qValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for q (e.g. -1.2)</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.refluxToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp; Reflux Ratio (L/D)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="reflux"
                                    value={this.state.reflux}
                                    onChange={this.validateRatio} 
                                    style={this.state.refluxValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                    />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.refluxValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for L/D greater than 0 (e.g. 2.5) </span>
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <div>
                                <label>
                                    <OverlayTrigger placement="top" overlay={this.alphaToolTip}>
                                        <div className="icon-div">
                                            <BsInfoCircleFill />
                                        </div>
                                    </OverlayTrigger>
                                    &nbsp; Relative volatility (α)
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="alpha"
                                    value={this.state.alpha}
                                    onChange={this.validateRatio} 
                                    style={this.state.alphaValidity ? {border:"solid red",borderWidth:"1px",outline:"none"} : {border:""} }  
                                    />
                                <div className="validity-container">
                                    <span className="validity" style={{ visibility: this.state.alphaValidity ? 'visible' : 'hidden' }}>&nbsp; Enter a value for relative volality greater than 0 (e.g. 1.45)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                </div>
                    <div className="col">   
                        <br/>
                        <label className="answerLabel"> Number of Stages: {this.state.stages} </label>
                        <br />
                        <label className="answerLabel"> Optimal Feed Stage: {this.state.feedStage} </label>
                        <br />
                        <label className="answerLabel"> Minimum Reflux Ratio: {this.state.minReflux} </label>
                        <br />
                        <Plot
                        data={this.state.data}
                        layout={this.state.layout}
                        onInitialized={() => { this.getData(); } } />
                    </div>
                </div></>  
                )
            }
        }


export default Solver;



