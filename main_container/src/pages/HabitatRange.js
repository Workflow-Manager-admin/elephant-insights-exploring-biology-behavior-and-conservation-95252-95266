import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function HabitatRange() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Habitat and Range</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Historic Range</h2>
          <p className="section-content">
            Tigers once had one of the largest distributions of any land mammal, ranging from Eastern Turkey and the Caspian Sea 
            in the west, to the eastern coast of Russia and China in the east, and from Siberia in the north to the Indonesian 
            islands of Java, Bali, and Sumatra in the south. They occupied diverse habitats across Asia, from the snowy taiga of 
            Siberia to tropical mangrove swamps in the Sundarbans.
          </p>
          <p className="section-content">
            At the beginning of the 20th century, there were an estimated 100,000 tigers in the wild. Their range covered 
            approximately 1,000,000 square miles (2.6 million square kilometers), spanning 30 countries throughout Asia, the 
            Russian Far East, and parts of the Middle East.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Current Distribution</h2>
          <p className="section-content">
            Today, wild tigers have lost about 93% of their historic range. They now occupy just 7% of their former territory, 
            primarily in small, fragmented populations across 13 countries:
          </p>
          <ul>
            <li>India (which holds about 70% of the world's wild tigers)</li>
            <li>Russia</li>
            <li>Indonesia</li>
            <li>Nepal</li>
            <li>Bhutan</li>
            <li>Bangladesh</li>
            <li>China</li>
            <li>Malaysia</li>
            <li>Thailand</li>
            <li>Myanmar</li>
            <li>Laos</li>
            <li>Vietnam</li>
            <li>Cambodia</li>
          </ul>
          <p className="section-content">
            Three subspecies have gone extinct in the last century: the Caspian tiger (1970s), Javan tiger (1980s), 
            and Bali tiger (1940s). The South China tiger is considered "functionally extinct" in the wild, with only 
            a few dozen individuals possibly remaining.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Habitat Types</h2>
          <p className="section-content">
            Tigers are highly adaptable and can inhabit a wide range of environments, provided they have sufficient cover, 
            water, and prey. The diverse habitats where tigers can be found include:
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Tropical Rainforests</h3>
          <p className="section-content">
            The lush, dense forests of Indonesia, Malaysia, and parts of India provide excellent cover for hunting and 
            denning. The Sumatran tiger is specially adapted for this environment, with a darker coat and narrower stripes 
            that help it blend into the dense undergrowth and dappled light of rainforests.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Mangrove Forests</h3>
          <p className="section-content">
            The Sundarbans, spanning the border between India and Bangladesh, contains the world's largest mangrove forest 
            and supports a unique population of Bengal tigers that have adapted to swimming between islands and hunting in 
            tidal waters. These tigers have developed the ability to drink slightly saline water and primarily prey on 
            spotted deer, wild boar, and water monitors.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Dry Deciduous Forests</h3>
          <p className="section-content">
            Many of India's tigers inhabit dry and mixed deciduous forests with seasonal water sources. Areas like 
            Ranthambore, Bandhavgarh, and Kanha National Parks feature this habitat type, where tigers often concentrate 
            around water holes during the dry season.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Grasslands and Savannas</h3>
          <p className="section-content">
            Open grasslands interspersed with patches of forest, such as those found in Nepal's Terai region and parts of 
            central India, provide tigers with a mix of cover for stalking and open areas where prey animals gather.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Taiga (Boreal Forest)</h3>
          <p className="section-content">
            The Amur (Siberian) tiger inhabits the temperate forests of the Russian Far East and Northeast China, where 
            winters can be extremely harsh with deep snow and temperatures falling below -40°C (-40°F). These tigers 
            have thicker fur, more white in their coat, and larger territories due to lower prey density.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Habitat Requirements</h2>
          <p className="section-content">
            For a habitat to support tigers, it must provide:
          </p>
          <ul>
            <li>
              <strong>Sufficient Prey:</strong> A single tiger consumes 50-60 large prey animals annually. A healthy 
              ecosystem must support enough ungulates (deer, wild boar, etc.) to sustain the tiger population.
            </li>
            <li>
              <strong>Cover:</strong> Tigers rely on vegetation and landscape features for concealment while hunting
              and for establishing dens where females can raise cubs.
            </li>
            <li>
              <strong>Water:</strong> Regular access to water is essential, not only for drinking but also for cooling
              during hot weather. Tigers are strong swimmers and often use water bodies as part of their territory.
            </li>
            <li>
              <strong>Space:</strong> Tigers require large territories, particularly males who may patrol ranges of
              up to 100 square kilometers or more in areas with lower prey density.
            </li>
          </ul>
        </div>

        <div className="navigation-buttons">
          <Link to="/behavior" className="nav-button">← Back to Behavior</Link>
          <Link to="/conservation" className="nav-button">Next: Conservation Status →</Link>
        </div>
      </div>
    </div>
  );
}

export default HabitatRange;
