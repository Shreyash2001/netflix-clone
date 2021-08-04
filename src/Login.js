import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className="login">
        <div className="login__background">
        <div style={{position:"fixed", display:"flex", justifyContent:"space-between", width:"100%"}}>
            <div style={{padding:"10px"}}>
                <img style={{width:"200px", height:"130px", paddingLeft:"20px"}} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            </div>
            <div style={{padding:"50px 30px 10px 10px"}}>
                <Button style={{backgroundColor:"#e50914", textTransform:"inherit", color:"#fff", width:"80px", fontSize:"16px"}}>Sign In</Button>
            </div>
        </div>
        <div className="login__gradient" />
        </div>
        </div>
    )
}

export default Login
