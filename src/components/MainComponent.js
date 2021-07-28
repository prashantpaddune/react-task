import { Redirect, Route, Switch } from 'react-router-dom'
import PlayersComponent from './PlayersComponent'
import PlayersDetailedComponent from './PlayersDetailedComponent'

function MainComponent() {
  return (
    <>
      <Switch>
        <Route exact path='/players' component={() => <PlayersComponent />} />
        <Route path='/players/:playerId' component={PlayersDetailedComponent} />
        <Redirect to='/players' />
      </Switch>
    </>
  )
}

export default MainComponent
