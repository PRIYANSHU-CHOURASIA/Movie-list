import Navbar from './components/Navbar' ;
import HeroSection from './components/HeroSection';
import Footer from './components/Footer' ;
import MovieList from './components/MovieList' ;

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <MovieList/>
     <Footer/>
    </div>
  );
}

export default App;
