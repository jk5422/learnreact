import './App.css'
import CountdownTimer from './CountdownTimer'

function App() {

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer initialMinutes={5} />
    </div>
  )
}

export default App