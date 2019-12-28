import React from 'react';
import'./home.css';
import Header from './header';
import Icons from './icons'
import FeaturedArtist from './featuredartist';

function Home() {

  const heading = 'Stream Music, Pakistan.'
  const paragraph = "Welcome to the First Pakistan Online Music Streaming Application"

  return (
    <div><Header />
    <div className="homediv">
    <h1 style={{marginTop: "65px"}}>
      {heading}
    </h1>
    <p>{paragraph}</p>
    <Icons />
    <FeaturedArtist />
    </div>
    </div>
  );
}

export default Home;
