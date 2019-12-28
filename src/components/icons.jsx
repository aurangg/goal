import React, { useState } from 'react';
import './icons.css';

function Icons() {

  let [artists] = useState([
    {
      name:'Lil Wayne',
      age: 37,
      imgSrc: "https://cdns-images.dzcdn.net/images/artist/2342b756645ad50f80215785d218bca8/200x200-000000-80-0-0.jpg",
      albumName: "Tha Carter V",
      year:2018,
      peak:1,
    },
    {
      name:'Eminem',
      age: 45,
      imgSrc: "https://static.wixstatic.com/media/6604a1_e76a57efeef24f8aaf57a0c2f759a2d3~mv2.jpg/v1/fit/w_300,h_300,al_c,q_80/file.jpg",
      albumName: "The Kamikaze",
      year:2018,
      peak:1,
    },
    {
      name: 'Jay-Z',
      age: 48,
      imgSrc: "https://madnews.files.wordpress.com/2010/02/jay.jpg",
      albumName: "Everything Is Love",
      year:2018,
      peak:2,
    },
    {
      name:"Kendrick Lamar",
      age: 35,
      imgSrc: "https://content.hungama.com/artist/profile%20image/200x200%20jpeg/5978392154.jpg",
      albumName: "DAMN.",
      year:2017,
      peak:1,
    }
  ]
)

  return (
    <div className="wholeDiv"><h1>Elite Group</h1>
    <div className="row">
    {artists.map((id) =>
      (
        <div className="col-lg-3">
        <div className="iconsdiv">
          <h2>
            {id.name}
          </h2>
          <p>{id.age}</p>
          <h3>Last Album: {id.albumName}</h3>
          <h3>Year: {id.year}</h3>
          <h3>Peak Positon: {id.peak} <span>on Billboard 200</span></h3>
          <img src={id.imgSrc} alt="Rappers"/>
        </div>
        </div>
      )
      )}
    </div>
    </div>
  )
}

export default Icons;
