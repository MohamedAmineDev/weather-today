import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherPanel from './components/WeatherPanel';
// This is the main component of the application
function App() {
  return (
    <div>
      <Header />
      <WeatherPanel />
    <Footer />
    </div>
  )
}

export default App;
