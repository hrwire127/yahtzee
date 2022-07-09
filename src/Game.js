import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

class Game extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            dice: Array.from({ length: this.props.NUM_DICE }, (i) => i = Math.ceil(Math.random() * 6)),
            locked: Array(this.props.NUM_DICE).fill(false),
            rollsLeft: this.props.NUM_ROLLS,
            isRolling: false,
            scores: {
                ones: undefined,
                twos: undefined,
                threes: undefined,
                fours: undefined,
                fives: undefined,
                sixes: undefined,
                threeOfKind: undefined,
                fourOfKind: undefined,
                fullHouse: undefined,
                smallStraight: undefined,
                largeStraight: undefined,
                yahtzee: undefined,
                chance: undefined
            }
        };
        this.roll = this.roll.bind(this);
        this.doScore = this.doScore.bind(this);
        this.toggleLocked = this.toggleLocked.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
        this.animateRoll = this.animateRoll.bind(this)
    }
    increaseScore(num)
    {
        this.setState(st => ({ totalscore: st.totalscore + num }))
    }

    animateRoll()
    {
        this.setState({ isRolling: true }, () =>
        {
            setTimeout(this.roll, 1000)
        })
    }

    roll(evt)
    {
        // roll dice whose indexes are in reroll
        this.setState(st => ({
            dice: st.dice.map((d, i) =>
                st.locked[i] ? d : Math.ceil(Math.random() * 6)
            ),
            locked: st.rollsLeft > 1 ? st.locked : Array(this.props.NUM_DICE).fill(true),
            rollsLeft: st.rollsLeft - 1,
            isRolling: false
        }));
    }

    toggleLocked(idx)
    {
        // toggle whether idx is in locked or not
        if (this.state.rollsLeft > 0)
        {
            let arr = [...this.state.locked];
            arr.splice(idx, 1, !arr[idx])
            console.log(arr)
            this.setState({
                locked: arr
            });
        }
    }

    doScore(rulename, ruleFn)
    {
        // evaluate this ruleFn with the dice and score this rulename
        this.setState(st => ({
            scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
            rollsLeft: this.props.NUM_ROLLS,
            locked: Array(this.props.NUM_DICE).fill(false)
        }));
        this.animateRoll();
    }

    displayRollInfo()
    {

        const messages = [
            "0 Rolls Left",
            "1 Roll Left",
            "2 Rolls Left",
            "Starting Round"
        ]
        return messages[this.state.rollsLeft]
    }
    render()
    {
        const { d, locked, rollsLeft, isRolling, scores, dice } = this.state;
        return (
            <div className='Game'>
                <header className='Game-header'>
                    <h1 className='App-title'>Yahtzee! </h1>

                    <section className='Game-dice-section'>
                        <Dice
                            dice={dice}
                            locked={locked}
                            handleClick={this.toggleLocked}
                            disabled={rollsLeft === 0}
                            isRolling={isRolling}
                        />
                        <div className='Game-button-wrapper'>
                            <button
                                className='Game-reroll'
                                disabled={locked.every(x => x) || rollsLeft === 0 || isRolling}
                                onClick={this.animateRoll}
                            >
                                {this.displayRollInfo()}
                            </button>
                        </div>
                    </section>
                </header>
                <ScoreTable doScore={this.doScore} scores={scores} />
            </div>
        );
    }
}

export default Game;
