import * as React from 'react';
import Layout from '../components/shared/layout';
import { Helmet } from 'react-helmet';
// import { Link } from "gatsby"
import HeroBanner from '../components/home/heroBanner';
import AboutMe from '../components/home/aboutMe';
import Associates from '../components/home/associates';
import Skills from '../components/home/skills';
import Projects from '../components/home/projects';
import Socials from '../components/home/socials';

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: 'Roboto, Neue Helvetica, sans-serif, serif',
};

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Josh Mayo - Web developer | joshmayo.co.uk</title>
      </Helmet>
      <main style={pageStyles}>
        <HeroBanner />
        <AboutMe />
        <Associates />
        <Skills />
        <Projects />
        <Socials />
      </main>
    </Layout>
  );
};

export default IndexPage;
