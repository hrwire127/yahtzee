import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component
{
    render()
    {
        return (
            <div className='App'>
                <Game NUM_DICE={5} NUM_ROLLS={2} />
            </div>
        );
    }
}

export default App;
