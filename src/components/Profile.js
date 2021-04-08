import React from 'react'

export default function Profile() {
    return (
        <div>
            <div>
                <label for="name"> Name </label>
                <input type="text" name="name" id="name" /><br/>
                
                <label for="birthday"> Birthday </label>
                <input type="text" name="birthday" id="birthday" /><br/>

                <label for="zipcode"> Zipcode </label>
                <input type="text" name="zipcode" id="zipcode" /><br/>

                <label for="gender"> Gender </label>
                <input type="text" name="gender" id="gender" /><br/>

                <label for="pettype"> Type of Pet </label>
                <input type="text" name="pettype" id="pettype" /><br/>

                <label for="temperment"> Temperment </label>
                <input type="text" name="temperment" id="temperment" /><br/>

                <label for="playdate"> Ideal Playdate </label>
                <input type="text" name="playdate" id="playdate" /><br/>

                <label for="profilepic"> Upload a profile pic </label>
                <input type="text" name="profilepic" id="profilepic" /><br/>

                <button>Save</button>
            </div>
        </div>
    )
}