import React from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";

export default function Home() {
  return (
    <div className='w-full'>
      <Header/>
      <Navbar/>
      <div>lorem*30</div>
    </div>
  );
}
