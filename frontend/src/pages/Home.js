import * as React from 'react';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className="home-page">
        <div className="m-3 row page-title">
          <h2>Welcome To My Wesbite</h2>
        </div>
        <div className="m-1 row content">
          <div className="">
            <Carousel></Carousel>
          </div>
        </div>
    </div>
  );
}