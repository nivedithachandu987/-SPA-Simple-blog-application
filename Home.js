import React from 'react';
import PostList from '../components/PostList';
import './Home.css';  

function Home() {
  return (
    <div className="home">
      <br></br>
      <img src="download.jpeg" alt="Hero" className="hero-image"  />
      <p>The Centers for Disease Control and Prevention (CDC) is warning of an increased risk of dengue fever in the U.S.

Dengue fever is a potentially life-threatening viral infection transmitted through the bite of infected mosquitoes.

The CDC issued a health alert, saying a higher-than-expected number of dengue fever cases have been reported in the U.S. Puerto Rico declared a health emergency with 1,498 cases reported. Among U.S. travelers, 745 cases were identified this year as of June 24.

The U.S. health alert comes as global outbreaks of dengue fever are on the rise, with a total of 9.7 million cases reported in Latin American countries since the beginning of 2024, more than twice the number recorded in all of 2023 (4.6 million).

"Four different subtypes of the virus can cause infections in humans," says Dr. Stacey Rizza, a Mayo Clinic infectious diseases specialist. "Wherever you have a significant number of mosquitoes and warm hot environments is where you see dengue transmission."</p>
      <h1>Blog Posts</h1>
      <PostList />
      <section className="info">
        <h2>About Our Blog</h2>
        <p>
          Welcome to our blog, where we share the latest updates and insights on various topics. 
          Stay tuned for exciting content and engaging posts that cater to your interests.
        </p>
      </section>
    </div>
  );
}

export default Home;
