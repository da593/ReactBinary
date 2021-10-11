import React,{Component} from 'react';
import {PageNames} from "./PageNames"
import './NavBar.css'


class NavBar extends Component {
    state = {clicked:false}
    render() {
        return (
            <nav className="navbar navbar-expand-sm justify-content-center">
                <h1 id="logo" className="navbar-brand d-flex w-50 mr-auto">Binary Distillation Solver</h1>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="navbar-nav w-100 justify-content-center">
                        {PageNames.map((item,index)=> {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href="#">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                        
                    </ul>
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar