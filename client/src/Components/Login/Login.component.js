import React,{ Component } from 'react'

export default class Login extends Component{
    render(){
        return (
            <div className="login">
                <form className="form--login">
                    <label className="label--email element">email:</label>
                    <input className="email element" name="email" type="email" placeholder="email" value="" required/>
                    <label className="label--password element">password:</label>
                    <input className="password element" name="password" type="password" placeholder="password" value="" required />
                    <button type="button" className="btn--login btn">Login</button>
                    <button type="button" className="btn--google btn">Google login</button>   
                </form>
            </div>
        )
    }
}
