import { Header, } from './components/header';
import { Navbar } from './components/nav';
import { Images } from './components/images';
import './logo.svg';
import "./App.css";
import { CategoriesSec } from './components/categories';
import { MobileSec } from './components/cards-sec/mobile-sec';
import { CarSec } from './components/cards-sec/car-sec';
import { BikeSec } from './components/cards-sec/bike-sec';
import {HouseSec} from './components/cards-sec/houses-sec';
import {VideoSec} from './components/cards-sec/video-sec';
import {TabletSec} from './components/cards-sec/tablets-sec';
import {PlotsSec} from './components/cards-sec/plot-sec';
import { JobsSec } from './components/cards-sec/jobs-sec';
import { Appfooter } from './components/app-footer';
import { Footer } from './components/footer';
import { CopySec } from './components/copy-sec';

function App() {
  return (
    <section className="main">
      <Header />
      <Navbar />
      <div className='hero-sec'>
        <Images src={"/assets/Hero pic.jpeg"} alt={"Hero Pic"} />
      </div>
      <CategoriesSec />
      <MobileSec />
      <CarSec />
      <BikeSec />
      <HouseSec />
      <VideoSec />
      <TabletSec />
      <PlotsSec />
      <JobsSec />
      <Appfooter />
      <Footer />
      <CopySec />
    </section>
  );
}

export default App;
