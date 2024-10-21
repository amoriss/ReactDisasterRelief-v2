import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetHelp from './components/GetHelp';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import Boxes from './components/Boxes';
/*import { useEffect, useState } from 'react';*/
import './App.css';


const App = () => {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/get-help" element={<GetHelp />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/volunteer" element={<Volunteer />} />
                    </Routes>
                </main>
                {/* <Boxes/>*/}
                <Footer />
            </div>
        </Router>
    )
}
//function App() {
//    const [forecasts, setForecasts] = useState();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//        : <table className="table table-striped" aria-labelledby="tableLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tableLabel">Weather forecast</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );

//    async function populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        setForecasts(data);
//    }
//}

export default App;