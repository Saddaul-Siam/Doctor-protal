import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BannerOption from '../BannerOption/BannerOption';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <BannerOption />
      <Services />
      <About />
      <AppointmentBanner />
      <Blogs />
      <OurDoctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;