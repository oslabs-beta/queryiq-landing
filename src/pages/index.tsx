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
    <>
    <div className="background-container">
      <Head>
        <title>Query IQ</title>
        <meta name="Query IQ" content="SQL Query Performance Metrics" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header />
        <Hero/>
        <About />
        <Features />
        <FAQ />
        <Team />
        <Footer />
    </div>
    </>
  );
};

export default LandingHome;
