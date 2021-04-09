import React from 'react'

export default function NewAccount() {
    return (
        <div>
            <div>
                <label for="username"> Enter a Username </label>
                <input type="text" name="username" id="username" /><br/>
                <label for="password"> Enter a Password </label>
                <input type="text" name="password" id="password" /><br/>
                <button>Create Username</button>
            </div>
        </div>
    )
}