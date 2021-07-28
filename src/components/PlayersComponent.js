import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PlayersContext } from '../context/playersContext'

function PlayersComponent() {
  const players = useContext(PlayersContext)
  function playerInfo() {
    return players.map(function (val, i) {
      return (
        <tr>
          <td key={i}>{i + 1}</td>
          <Link to={`/players/${val.Id}`}>
            <td>{val.firstName}</td>
          </Link>
        </tr>
      )
    })
  }
  return (
      <>
          <h2>Indian Cricket Team</h2>
          <table className='blue'>
              <thead>
              <tr>
                  <th>No</th>
                  <th>Players</th>
              </tr>
              </thead>
              <tbody>{playerInfo()}</tbody>
          </table>
      </>

  )
}

export default PlayersComponent
