import { Route } from 'react-router-dom'
import { Scheduler } from './containers'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Scheduler} />
    </div>
  );
}

export default App
