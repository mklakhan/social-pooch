import React from 'react'

export default function Login() {
    return (
        <div>
            <div>
                <label for="username"> Username </label>
                <input type="text" name="username" id="username" /><br/>
                <label for="password"> Password </label>
                <input type="text" name="password" id="password" /><br/>
                <button>Login</button>
            </div>
        </div>
    )
}
