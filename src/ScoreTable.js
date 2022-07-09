import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component
{

    render()
    {

        const { scores, doScore } = this.props;

        function getTotalScore() 
        {
            let totalScore = 0;
            for (let k in scores)
            {
                if (scores[k])
                {
                    totalScore += scores[k];
                }
            }
            return totalScore;
        }

        return (
            <div className="ScoreTable">
                <section className="ScoreTable-section">
                    <h2>Upper</h2>
                    <table cellSpacing="0">
                        <tbody>
                            <RuleRow name="Ones" desc={"1 point per 1"} score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
                            <RuleRow name="Twos" desc={"2 points per 2"} score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
                            <RuleRow name="Threes" desc={"3 point per 3"} score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
                            <RuleRow name="Fours" desc={"4 point per 4"} score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
                            <RuleRow name="Fives" desc={"5 point per 5"} score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
                            <RuleRow name="Sixes" desc={"6 point per 6"} score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
                        </tbody>
                    </table>
                </section>
                <section className="ScoreTable-section ScoreTable-section-lower">
                    <h2>Lower</h2>
                    <table cellSpacing="0">
                        <tbody>
                            <RuleRow name="Three of Kind" desc={"Sum all dice if 3 are the same"} score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
                            <RuleRow name="Four of Kind" desc={"Sum all dice if 4 are the same"} score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
                            <RuleRow name="Full House" desc={"24 points for a full house"} score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
                            <RuleRow name="Small Straight" desc={"30 points for a small straight"} score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
                            <RuleRow name="Large Straight" desc={"40 points for a large straight"} score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
                            <RuleRow name="Yahtzee" desc={"50 points for yeahtzee"} score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
                            <RuleRow name="Chance" desc={"Sum of all dice"} score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
                        </tbody>
                    </table>
                </section>
                <h2>Total Score: {getTotalScore()}</h2>
            </div>
        )
    }
}

export default ScoreTable;