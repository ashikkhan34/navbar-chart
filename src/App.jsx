import Navbar from "./Compenents/Header/Navbar";
import LineChart from "./Compenents/LineChart/LineChart";
import PriceOptions from "./Compenents/PriceOptions/PriceOptions";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  );
};

export default App;