import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { PlayersContext } from '../context/playersContext'
function PlayersDetailedComponent() {
  const players = useContext(PlayersContext)
  const { playerId } = useParams()
  const [player, setPlayer] = useState([])

  useEffect(() => {
    const player = players.filter((p) => p.Id === +playerId)
    setPlayer({ ...player[0] })
  }, [players, playerId])

  return (
      <>
        <div className='App'>
          <main>
            <ul id="cards">
              <li className="card" id="card_1">
                <div className="card__content">
                  {/*here we can add lazy loading */}
                  {player.length === 0 ? 'waiting....' : <div>
                    <h2>{player.firstName + ' ' + player.Lastname}</h2>
                    <p>
                      Player Type : {player.player_type} <br/>
                      Upcoming Match: {player.upcomingMatchesList.against_team} <br/>
                      Date: {player.upcomingMatchesList.next_match_date} <br/>
                      Total Run: {player.total_run} <br/>
                      Total Wickets: {player.total_wickets} <br/>
                      Total Century: {player.total_centuries} <br/>
                      Average Run: {parseInt(player.total_run / player.total_match)} <br/>
                      Average Wicket: {parseInt(player.total_run / player.total_wickets)} <br/>
                    </p>
                  </div>}
                  <figure>
                    <img src={`/assets/${player.Id}.jpeg`} alt="Image description"/>
                  </figure>
                </div>
              </li>
            </ul>
          </main>
        </div>
      </>
  )
}

export default PlayersDetailedComponent
