import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Rules.css'

const KhoKho = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='main-container'>
      <div className="games-section">

        <div className="sports-heading">
          <h1>Kho-Kho</h1>
        </div>

        {/* Team Formation Rules */}
        <div className="sports-item-heading">
          <h2>Team Formation Rules:</h2>
        </div>
        <ul className='guidlines'>
          <li>A total of 9 players per team from a minimum of two different batches (year-wise).</li>
          <li>(7 players on the field, 6 active players sitting in the central lane, 1 active player on the pole, and 2 substitutes allowed).</li>
          <li>Each team must include at least one female player.</li>
          <li>There should not be more than 5 players from the same batch.</li>
          <li>A registered player can only play for one team.</li>
        </ul>

        {/* Game Rules */}
        <div className="sports-item-heading">
          <h2>Game Rules:</h2>
        </div>
        <ul className='guidlines'>
          <li>General Kho-Kho rules are applicable.</li>
          <li>Each match will be played in two innings.</li>
          <li>Each inning consists of two rounds, with each round lasting 4 minutes.</li>
          <li>Total duration per inning: 8 minutes (4 + 4).</li>
          <li>Total match duration: 16 minutes (8 + 8).</li>
          <li>The substitute player must play at least one inning.</li>
          <li>
            If two or more female players are on-field, the running team runs for 1 minute less.
            If chasing, the opponent team runs for 1 minute more.
            This rule does not apply if both teams have the same number of female players.
          </li>
          <li>
            Teams with all female players get a 4-minute benefit against mixed or male teams.
            They run for 8 minutes and chase for 12 minutes in all rounds.
          </li>
        </ul>

        {/* General Kho-Kho Rules */}
        <div className="sports-item-heading">
          <h2>General Kho-Kho Rules:</h2>
        </div>
        <ul className='guidlines'>
          <li>All basic Kho-Kho rules are applicable.</li>
          <li>Running team shall play in a 3-2-2 (7 players) sequence.</li>
          <li>6 players of the chasing team sit knee-down on squares; 1 stands near the pole.</li>
          <li>Turning the shoulder line beyond a right angle while chasing is a foul.</li>
          <li>A defender is not out if put out due to a foul.</li>
          <li>
            Fouls near the end lane cannot be completed by touching the same pole;
            two consecutive Khos or the opposite pole is required.
          </li>
          <li>The attacker who puts out the third defender must give Kho.</li>
          <li>Substituted attackers must give Kho before chasing.</li>
          <li>If any part of the runner’s body is inside the field, they are not out.</li>
          <li>
            Attackers may go out of court but must re-enter correctly and not through the Free Zone.
          </li>
          <li>Runners from both teams enter simultaneously from the Entry Zone.</li>
          <li>
            Crossing the central lane alone is not a foul unless it results in putting a defender out.
          </li>
          <li>Loss of cross-lane contact after a perfect Kho is not a foul.</li>
        </ul>

        {/* Officials */}
        <p className='para-guidlines'>
          <b>Umpires:</b> Supervise their respective halves. Fouls are indicated by continuous short whistles; outs by a short whistle.
        </p>

        <p className='para-guidlines'>
          <b>Referee:</b> Assists umpires and gives the final decision in case of disagreement.
        </p>

        <p className='para-guidlines'>
          <b>Time-keeper:</b> Maintains match time and signals start and end of turns using whistles.
        </p>

        {/* Contact */}
        <div className="sports-item-heading">
          <h2>For any queries contact:</h2>
        </div>
        <ul className='guidlines'>
          <li>Rahul Naik | 9014684204</li>
          <li>Ramavath Rahul | 9866719628</li>
        </ul>

        {/* Register */}
        <div className="register-button">
          <Link to="/register?game=Kho-Kho">Register Now</Link>
        </div>

      </div>
    </div>
  )
}

export default KhoKho
