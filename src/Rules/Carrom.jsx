import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const Carrom = () => {
  return (
    <div className='main-container'>
      <Helmet>
                <title>Carrom</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Carrom</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>A team must consist of two members (No batch restriction).</li>

                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                  <li>How to strike: </li>
                  <ul>
                    <li>A striker within the baseline must touch both the front line and the rear line.</li>
                    <li>While making a stroke, the elbow of the playing hand shall not come within the playing surface
                      nor shall extend beyond
                      the imaginary lines of the arrow.</li>
                    <li>Backward strikings are allowed.</li>
                  </ul>
                  <li>How to Score:</li>
                  <ul>
                    <li>The player who completes pocketing all his C/m first wins the board.</li>
                    <li>The value/points are as follows:</li>
                    <ul>
                      <li>Queen : 3 points</li>
                      <li>C/m : 1 point each</li>
                    </ul>
                  </ul>
                  <li>At the end of the board the number of C/m of the opponent on the C/B shall be the points gained by
                    that player in that
                    board.</li>
                  <li>The player is entitled to be credited with the value of the Queen, only if he wins the board.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Basic rules:</h2>
                </div>
                <ul className='guidlines'>
                <li>If the striker pockets the Queen and/or one or more coins, the player retrieves the striker and
                    takes another strike.</li>
                  <li>If the player pockets no pieces or commits a foul, the turn finishes.</li>
                  <li>In case of a foul the opponent can put the coin anywhere in the middle circle.</li>
                  
                </ul>

                <div className="sports-item-heading">
                    <h2>Covering the Queen:</h2>
                </div>
                <ul className='guidlines'>
                <li>A player may only pocket and cover the Queen if that player has already pocketed at least one
                    his/her own C/m (coin),
                    otherwise he has to pocket two his/her C/m to cover the
                    queen.</li>
                  <li>If a player pockets the Queen and his/her own C/m in the same turn, this counts and that player
                    has covered the Queen.</li>
                  <li>Queen and cover can be pocketed in the same striking, irrespective of the order of falling of coin
                    in the pockets.</li>
                  <li>When a player pockets the Queen but does not cover it, the Queen is returned as near as possible
                    to the centre circle by
                    the opponent.</li>
                  <li>While covering the Queen by a proper stroke, if a player pockets the striker along with his/her
                    own C/m, the C/m shall
                    be taken out for placing by the opponent. The player shall, however, continue his turn. If in that
                    subsequent stroke no
                    C/m of the player is pocketed, the Queen shall not be considered to have been covered and it shall
                    be taken out for
                    placing.</li>
                  <li>While covering the Queen, if a player pockets the last C/m of his opponent, he shall lose the
                    Board.</li>
                
                  
                </ul>

                <div className="sports-item-heading">
                    <h2>DUES AND/OR PENALTIES:</h2>
                </div>
                <ul className='guidlines'>
                <li>If in a proper stroke a player pockets his Striker alone, his turn shall be lost and one of his
                    black C/m will be taken
                    out as penalty by his opponent for placing. Such penalty C/m shall be called Due.</li>
                  <li>If a player pockets the Striker with his/her own C/m by a proper stroke, the number of C/m so
                    pocketed, with a Due C/m,
                    shall be taken out for placing and the player shall continue his/her turn.</li>
                  <li>If a player pockets the Striker with the C/m of his opponent by a proper stroke, the C/m so
                    pocketed shall be deemed to
                    have been pocketed.His/her turn shall be lost.</li>
                  <li>If a player pockets the C/m of his/her own or his/her opponent by an improper stroke, the C/m so
                    pocketed shall be
                    deemed to have been pocketed. The Penalty C/m shall be taken out for placing by the opponent and the
                    player shall lose
                    his/her turn.</li>
                  <li>If a player pockets his/her own C/m with the striker by an improper stroke, the C/m so pocketed
                    with two C/m, one as Due
                    and the other for Penalty shall be taken out for placing by the opponent and the player shall lose
                    his turn.</li>
                  <li>If a player touches the last piece directly before the queen, a penalty of his/her own C/m shall
                    be taken out for
                    placing by the opponent.</li>
                  <li>If the Queen and the Striker are pocketed together by a proper stroke, the Queen shall be taken
                    out for placing by the
                    Umpire. An additional C/m of his/her colour shall be taken out for placing by the opponent and the
                    player shall continue
                    his turn.</li>
                
                  
                </ul>
                <div className="sports-item-heading">
                    <h2>General Rules:</h2>
                </div>
                <ul className='guidlines'>
                <li>If a C/m and/or Queen jump out of the playing surface, the jumped C/m and/or the Queen shall be
                    placed by the Umpire in
                    the Centre Circle, if space permits, covering it fully or the maximum portion of it that is
                    available.</li>
                  <li>The winner of a board collects one point for each of the opponent's carrom men left at the finish
                    and three points for
                    the queen if covered by the winner (if covered by the loser, no-one gets those points).</li>

                </ul>

                <div className="sports-item-heading">
                    <h2>Game Format:</h2>
                </div>
                <ul className='guidlines'>
                    <li>All matches till the Quarter-Finals are knock-out matches having a time limit of 10 minutes. The
                  team which wins moves
                  to the next level. In the Semi-Finals, each team will play with all other three teams (League
                  matches), each match
                  consisting of three rounds (Boards) and the team that wins two out of three wins the match. Final will
                  be a 24 point
                  game with at most 10 Boards.</li>
                  <li>
                  *There is a chance of having a lucky loser.

                  </li>
                 

                </ul>
 

     

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Coordi1 | Mob1
                             </li>
                                <li>
                                Coordi2  | Mob2
                                </li>
                            </ul>
                <div className="register-button">
                <Link to="/register">Register Now</Link>

                </div>
            </div>


        </div>
  )
}

export default Carrom
