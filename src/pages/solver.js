import React,{Component} from 'react';
import { BsInfoCircleFill } from "react-icons/bs";



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
        };
        this.validateNumber = this.validateNumber.bind(this);
        this.validateDecimal = this.validateDecimal.bind(this);
        this.validateRatio = this.validateRatio.bind(this);
      }
    
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
        
        event.preventDefault();
      }

    render() {
        return (
        
        <form onSubmit={this.handleSubmit}>

            <h1> Input </h1>
            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Feed Composition (z) </label>
                <input 
                type="text" 
                name="z" 
                value={this.state.z} 
                pattern="[0-9]*[.]?[0-9]+"
                onChange={this.validateDecimal}
                />

                </div>
            </div>


            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Distillate Composition (yD) </label>
                <input 
                    type="text" 
                    name="yD" 
                    value={this.state.yD} 
                    pattern="[0-9]*[.]?[0-9]+"
                    onChange={this.validateDecimal}
                />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Bottoms Composition (xB) </label>
                <input 
                    type="text" 
                    name="xB" 
                    value={this.state.xB} 
                    pattern="?[0-9]*[.]?[0-9]+"
                    onChange={this.validateDecimal}

                />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Feed quality (q) </label>
                <input 
                    type="text" 
                    name="q" 
                    value={this.state.q} 
                    pattern="[-]?[0-9]*[.]?[0-9]+"
                    onChange={this.validateNumber}

                />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Reflux Ratio (L/D) </label>
                <input 
                    type="text" 
                    name="reflux" 
                    value={this.state.reflux} 
                    pattern="[0-9]*[.]?[0-9]+"
                    onChange={this.validateRatio}
                />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                <label className="col-sm-4 col-form-label"><BsInfoCircleFill/> Relative volatility (α) </label>
                <input 
                    type="text" 
                    name="alpha" 
                    value={this.state.alpha} 
                    pattern="[0-9]*[.]?[0-9]+"
                    onChange={this.validateRatio}
                />
                </div>
            </div> 
            
            <div className="row justify-content-center mt-5">
                <div className="col-sm-1">
                    <button className="btn btn-dark" type ="button">Solve</button>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-dark" type ="button">Reset</button>
                </div>
            </div>

            <div>
                
            </div>
        </form>

        )

      }
}


export default Solver;

