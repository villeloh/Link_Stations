import './App.css';
import LinkStation from './model/LinkStation';
import Point from './model/Point';

/**
 * Main app / program file. Prints the maximum power levels that are provided to a pre-determined set of points
 * by a pre-determined set of link stations.
 * @author Ville Lohkovuori 
 * (06/2021)
 */

function App() {

  // Since the data is static and this is a simple use case, there's no need to use useState() for now
  const linkStations = [new LinkStation(0, 0, 10), new LinkStation(20, 20, 5), new LinkStation(10, 0, 12)];

  const points = [new Point(0, 0), new Point(100, 100), new Point(15, 10), new Point(18, 18)];

  let topStationListItems = [];

  points.forEach(point => {
    
    let maxPower = 0;
    let maxPowerStation = null;

    linkStations.forEach((station, index) => {

      const providedPower = station.powerAt(point.x, point.y);

      if (providedPower > maxPower) {
        maxPower = providedPower;
        maxPowerStation = linkStations[index];
      }
    });

    if (maxPowerStation) {

      topStationListItems.push(<li>Best link station for point <strong>( {point.x}, {point.y} )</strong> is the station at <strong>( {maxPowerStation.x}, {maxPowerStation.y} )</strong> with power <strong>{maxPower.toFixed(2)}</strong></li>);
    } else {
      topStationListItems.push(<li>No link station within reach for point <strong>( {point.x}, {point.y} )</strong></li>);
    }
  });

  // This is not the most ideal way to deal with visuals, but the list items and <strong> tags were easy & quick to do
  const linkStationListItems = linkStations.map((station, index) => <li key={index}>Station #{index+1}: <strong>( x: {station.x}, y: {station.y}, reach: {station.reach} )</strong></li>);
  const pointListItems = points.map((point, index) => <li key={index}>Point #{index+1}: <strong>( x: {point.x}, y: {point.y} )</strong></li>);

  return (
    <div className="App">

      <h1>AUTOMATIC POWER CALCULATOR</h1>
      <h2>Link Stations:</h2>
      <ul>{linkStationListItems}</ul>
      <h2>Points:</h2>
      <ul>{pointListItems}</ul>

      <h2>Best stations for points:</h2>
      <ul>{topStationListItems}</ul>
    </div>
  );
}

export default App;