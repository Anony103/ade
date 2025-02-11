import React from 'react';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <section id="home" className="my-8 text-center">
      <h2 className="text-2xl font-bold">Home</h2>
      <img
        src={profile}
        alt="Your profile"
        className="mx-auto rounded-lg border-4 border-blue-500 mt-4 h-100"
      />
      <p className="mt-4">Welcome to my A.I Assignment website!</p>
    </section>
  );
}

export default Home;
