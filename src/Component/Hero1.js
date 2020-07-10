import React from 'react';

export default function Hero(){
    return(
        <div class="hero">
            <h1>
                Random character generator. 

                <button>Pokemon Generator</button>
                <button>Pokemon Trainer Generator</button>


                <img class='profile' alt="profile" src={require('./Images/profile.png')} />
            </h1>
        </div>
    )
}