import React, {Component} from "react";
import NavBar from "../nav/navBar"
import "./homepage.css";
// import Image from './pictures/picFive.png'
import axios from 'axios';


export default class HomePage extends Component{

    constructor(){
        super();

        this.state = {
            showMenu: false
        };
    }

    componentWillMount(){
        axios.get('/auth/user').then((data)=>{
            this.setState({showMenu: data.data.auth})
            console.log('nav button status: '+this.state.showMenu);
        })
    }

    render(){

        // const styleLogout = this.state.showMenu ? {} : {display: 'none'};
        const otherBtn = this.state.showMenu ? {display: 'none'} : {};

        return(
            <React.Fragment>
                <NavBar/>
                {/* <img className='imgUno' src={Image}/> */}
                <div className="center homeJtron">
                    <div className="container-fluid">
                    {/* <div class="row"> */}
                    {/* <div className='col l6 offset-l6 disCont'> */}
                        <h1 className="display-3 jHin">JobHuntr</h1>
                    <div className='yew'>
                        <ul className='yew'>unlimited opportunities</ul>
    
                        <ul className='yew' style={otherBtn}>In order to get started, please login!</ul> 
                    </div>
                        <p><a className="btn btn1" href="/register/employer" role="button" style={otherBtn}>Sign Up as Employer</a>
                        <a className="btn btn1" href="/register/candidate" role="button" style={otherBtn}>Sign Up as Job Seeker</a></p>
                    {/* </div> */}
                    {/* </div> */}
                    </div>
                </div>
                
               
            </React.Fragment>

        )
    }
}
