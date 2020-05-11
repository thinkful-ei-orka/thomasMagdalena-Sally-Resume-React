import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sally's Student Resume</h1>
      </header>
      <main>
        <address>
          <ul>
            <li>Sally Sandsworth</li>
            <li>Email: <a href="mailto:SalSan@midcal.org">SalSan@midcal.org</a></li>
            <li>Phone #: 555-5555</li>
          </ul>
          <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally Sandsworth crossing her arms and looking confident" />
      </address>
          <section>
            <h2>Education</h2>
            <ul>
              <li>University of Clintonsdale</li>
            </ul>

            <h2>Employment</h2>

            <h3>Jordan's Famous Steaks</h3>
            <h4>Job Title: Waitress</h4>
            <h4>Date of Employment: 03/14/2017-current</h4>
            <p>Handle customer orders with efficienty and pride, ensure the cleanliness of the establishment, make sure all guests are hosted with delight</p>
            <h3>Michanical Wonders</h3>
            <h4>Job Title: Technician</h4>
            <h4>Date of Employment: 08/21/2013-03/14/2017</h4>
            <p>Detail cars, fix engine issues, handled flat tires, ensure all fluids were topped off, mechanically ensures all parts on a range of cars were in working order</p>
          </section>
    </main>
    </div>
  );
}

export default App;
