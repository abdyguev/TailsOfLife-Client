import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div class="content-wrapper">
                <img src="/images/pup.jpg" alt="image" />
                 <div class="text-wrapper">
                     <h1>HAPPY PAWS</h1>
                 </div>
                 <div class="content-wrapper" id="icons">
                     
                 </div>
                </div>
                <button ><Link to={'/shelter/signup'}>Shelter</Link></button>
                <button ><Link to={'/user/signup'}>User</Link></button>
            </div>
        )
    }
}
