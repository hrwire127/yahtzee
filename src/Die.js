import React, { Component } from "react";
import "./Die.css";

class Die extends Component
{
    static defaultProps =
        {
            numwords: ["one", "two", "three", "four", "five", "six"]
        }
    render()
    {
        const { numwords, locked, value, idx, disabled, isRolling } = this.props;
        return (
            <i
                className={`Die fas fa-dice-${numwords[value - 1]} fa-5x ${!locked || 'Die-locked'} ${isRolling && 'Die-rolling'}`}
                onClick={() => this.props.handleClick(idx)}
                disabled={disabled}
            >
            </i>
        );
    }
}

export default Die;
