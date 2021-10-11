import React,{Component} from 'react';
import ContactsPopUpContainer from './contactspopup';

class Footer extends Component{
    constructor (props) {
     super(props) 
     this.showContacts = this.showContacts.bind(this);  
    }
    showContacts(event) {
        
    }
    render() {
        return (

        <div className="footer-container">
            <ul>
                <li><ContactsPopUpContainer/></li>
            </ul>
        </div>
        )
    }
}

export default Footer