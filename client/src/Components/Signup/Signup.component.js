import React,{ Component } from 'react'

export default class Signup extends Component{

    render(){
        return (
            <div className="signup">
             <form className="form--signup">
                <label className="label--username element">username:</label>
                <input name="displayName" className="username element" type="text" placeholder="username" value="" required />
                <label className="label--email element">email:</label>
                <input name="email" className="username element" type="email" placeholder="email" value="" required/>
                <label className="label--password element">password:</label>
                <input name="password" className="username element" type="password" placeholder="password" value="" required />
                <label className="label--confirmpassword element">Confirm Password:</label>
                <input name="confirmPassword" className="confirm_password element" type="password" placeholder="confirm password" value="" required />
                <button type="button" className="btn--login btn">Register</button>
             </form>  
            </div>
        )
    }
}
