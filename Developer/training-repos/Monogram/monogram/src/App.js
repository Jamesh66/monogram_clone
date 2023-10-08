import './App.css';
//Import SASS
import './components/nav/Nav.scss'
import './components/banner/Banner.scss'
import './global/Fonts.scss'
import './global/Global.scss'
import './components/toggle-button/toggleButton.scss'
import './components/featured-items/featuredItems.scss'

//Components
import Nav from "../src/components/nav/Nav";
import Banner from "../src/components/banner/Banner";
import FeaturedItems from './components/featured-items/featuredItems';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <FeaturedItems/>
    </div>
  );
}

export default App;
