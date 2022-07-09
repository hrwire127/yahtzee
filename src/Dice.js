import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component
{
    render()
    {

        return <div className="Dice">
            {this.props.dice.map((d, idx) =>
                <Die
                    handleClick={this.props.handleClick}
                    value={d}
                    locked={this.props.locked[idx]}
                    idx={idx}
                    key={idx}
                    disabled={this.props.disabled}
                    isRolling={this.props.isRolling}
                />
            )}
        </div>
    }
}

export default Dice;