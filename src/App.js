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

  let topStationStrings = [];

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
      topStationStrings.push(`Best link station for point (${point.x},${point.y}) is the station at (${maxPowerStation.x},${maxPowerStation.y}) with power ${maxPower}`);
      console.log(`Best link station for point (${point.x},${point.y}) is the station at (${maxPowerStation.x},${maxPowerStation.y}) with power ${maxPower}`);
    } else {
      topStationStrings.push(`No link station within reach for point (${point.x},${point.y})`);
      console.log(`No link station within reach for point (${point.x},${point.y})`);
    }
  });

  const listItems = topStationStrings.map((str, index) =>  <li key={index}>{str}</li>);

  return (
    <div className="App">
      <h2>Power status for stations:</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;