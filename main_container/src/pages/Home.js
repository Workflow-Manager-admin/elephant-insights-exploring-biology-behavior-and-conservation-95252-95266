import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Welcome to Tiger Insights</div>
          <h1 className="page-title">Introduction to Tigers</h1>
        </div>

        <div className="content-section">
          <p className="section-content">
            The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.
            It is most recognizable for its dark vertical stripes on orange-brown fur with a lighter underside.
            An apex predator, it primarily preys on ungulates such as deer and wild boar. It is territorial and
            generally a solitary but social predator, requiring large contiguous areas of habitat to support its
            requirements for prey and rearing of its offspring.
          </p>
          
          <p className="section-content">
            Tigers once ranged widely from the Eastern Anatolia Region in the west to the Amur River basin in the east,
            and in the south from the foothills of the Himalayas to Bali in the Sunda islands. Since the early 20th century,
            tiger populations have lost at least 93% of their historic range and have been extirpated from Western and
            Central Asia, the islands of Java and Bali, and in large areas of Southeast and South Asia and China.
            Today, the tiger's range is fragmented, stretching from Siberian temperate forests to subtropical and
            tropical forests on the Indian subcontinent, Indochina and Sumatra.
          </p>

          <p className="section-content">
            The tiger is listed as Endangered on the IUCN Red List. As of 2015, the global wild tiger population was
            estimated to number between 3,062 and 3,948 mature individuals, with most of the populations living in
            small pockets isolated from each other. India currently hosts the largest tiger population. Major reasons
            for population decline are habitat destruction, habitat fragmentation and poaching. Tigers are among the
            most recognizable and popular of the world's charismatic megafauna. They have featured prominently in
            ancient mythology and folklore and continue to be depicted in modern films and literature, appearing on
            many flags, coats of arms and as mascots for sporting teams. The tiger is the national animal of India,
            Bangladesh, Malaysia and South Korea.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">About This Blog</h2>
          <p className="section-content">
            This multi-page blog explores various aspects of tiger biology, behavior, conservation, and cultural
            significance. Use the navigation menu to explore different topics:
          </p>
          <ul>
            <li>Introduction (current page)</li>
            <li>Biology and Subspecies</li>
            <li>Behavior and Social Structure</li>
            <li>Habitat and Range</li>
            <li>Conservation Status and Threats</li>
            <li>Tigers in Culture & Mythology</li>
            <li>Their Role in the Ecosystem</li>
            <li>Interesting Facts</li>
          </ul>
          <p className="section-content">
            Each page offers detailed information about these magnificent big cats, one of nature's most
            iconic predators. Let's explore the fascinating world of tigers together!
          </p>
        </div>

        <div className="navigation-buttons">
          <div></div>
          <Link to="/biology" className="nav-button">Next: Biology and Subspecies →</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
