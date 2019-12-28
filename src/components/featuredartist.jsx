import React, { useState } from 'react';
import './featured.css'
import './icons.css';


function FeaturedArtist(){
  let [featuredones] = useState([
    {
      name:"Drake",
      age:35,
      latestSong:"WAR",
      imgSrc: "http://thespreadmag.com/wp-content/uploads/2016/09/drake-200x200.jpg",
      parentLabel: "OVO",
      childLabel:"UMG",
    },
    {
      name:"Young Thug",
      age:30,
      latestSong:"London",
      imgSrc: "https://cdns-images.dzcdn.net/images/artist/e4c79e04a1a9bc94c605b9cf30068724/500x500.jpg",
      parentLabel: "Atlantic ",
      childLabel: "YSL ",
    },
    {
      name:"J Cole",
      age:34,
      latestSong:"Costa Rica",
      imgSrc: "http://edmhunters-563e.kxcdn.com/mediafiles/dj/images/j-cole_11.jpg",
      parentLabel: "Roc-Nation",
      childLabel: "Dreamville",
    },
    {
      name:"21 Savage",
      age:24,
      latestSong:"A lot",
      imgSrc: "https://edmhunters-563e.kxcdn.com/mediafiles/dj/images/21-savage_12.jpg",
      parentLabel:"Epic ",
      childLabel:"none",
    },
    {
      name:"Kanye West",
      age:40,
      latestSong:"Blessings",
      imgSrc: "https://e-cdns-images.dzcdn.net/images/artist/ede9b27e10a97024653d6d0d21fbccae/200x200-000000-80-0-0.jpg",
      parentLabel: "Roc-Nation",
      childLabel:"G.O.O.D. Music",
    },
    {
      name:"Juice WRLD",
      age:21,
      latestSong:"Fine China",
      imgSrc: "https://e-cdns-images.dzcdn.net/images/artist/32458864045f1087652738e10bcdf74b/500x500.jpg",
      parentLabel: "Interscope ",
      childLabel:"none",
    },
    {
      name:"Nicki Minaj",
      age:33,
      latestSong:"Megatron",
      imgSrc: "https://static.billets.ca/artist/min/s1/nicki-minaj-200x200.jpg",
      parentLabel: "Young Money ",
      childLabel:"Cash Money",
    },
    {
      name:"Tyler The Creator",
      age:29,
      latestSong:"IGOR",
      imgSrc: "https://akeem.eu/wp-content/uploads/2019/05/akeem-tyler-the-creator-1-200x200.jpg",
      parentLabel: "Sony Music ",
      childLabel:"Odd Future",
    },
  ])

const bgStyle = {
  backgroundColor: "white"
}

  return(
    <div className="wholeDiv headings">
      <h1>Featured Artists</h1>
      <div className="row">
        {featuredones.map((id) => (
          <div className="col-md-3">
            <div className="iconsdiv nameStyle" style={bgStyle}>
              <h2>{id.name}</h2>
              <h3>Age: {id.age}</h3>
              <h3>Latest Single: {id.latestSong}</h3>
              <h3>Parent Label: {id.parentLabel}</h3>
              <h3 hidden={id.childLabel==="none" ? "hidden":""}>Child Label: {id.childLabel}</h3>
              <img src={id.imgSrc} alt="Featured"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedArtist;
