import { type NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Features from '../components/Features'

const LandingHome: NextPage = () => {


  return (
  
    <div className="background-container">
      <Head>
        <title>Query IQ</title>
        <meta name="Query IQ" content="SQL Query Performance Metrics" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        
        {/* Bold */}
        <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@700&display=swap" rel="stylesheet"/>
        {/* Semi Bold */}
        <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@600&display=swap" rel="stylesheet"/>
        {/* Medium */}
        <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@500&display=swap" rel="stylesheet"/>
        {/* Regular */}
        <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400&display=swap" rel="stylesheet"/>

      </Head>
      <Header />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingHome;
