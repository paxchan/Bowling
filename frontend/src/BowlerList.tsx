import { useEffect, useState } from 'react';
import { Bowler } from './types/bowling';
import './App.css';

function BowlingList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/Bowler'); // ✅ Use 5000
        const data = await response.json();
        setBowlers(data);
      } catch (error) {
        console.error('Error fetching bowlers:', error);
      }
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <h1>Bowling League Bowlers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit ?? ''}{' '}
                {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingList;
