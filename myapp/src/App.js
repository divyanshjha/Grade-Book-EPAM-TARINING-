
// import './App.css';
import Tables from './components/Tables'
import Charts from './components/Charts'
import Header from './components/Header';
import { Doughnut } from "react-chartjs-2";
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Tables></Tables> 
      <Charts></Charts>
      <Footer></Footer>
    </div>
  );
}

export default App;
