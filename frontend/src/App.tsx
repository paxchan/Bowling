import './App.css';
import BowlerList from './BowlerList';

function Header() {
  return (
    <div>
      <h1>Bowling League Bowlers</h1>
      <p>
        These are specifically the bowlers from the Marlins and Sharks teams
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;
