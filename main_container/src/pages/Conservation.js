import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function Conservation() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Conservation Status and Threats</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Current Conservation Status</h2>
          <p className="section-content">
            Tigers are classified as Endangered on the IUCN Red List of Threatened Species. According to the most recent 
            comprehensive surveys, the global wild tiger population is estimated to be between 3,726 and 5,578 individuals. 
            This represents a significant decline from the estimated 100,000 tigers that roamed Asia at the beginning of the 
            20th century.
          </p>
          <p className="section-content">
            Of the nine subspecies of tiger that existed in the 1900s, three (the Bali, Javan, and Caspian tigers) have gone 
            extinct. The South China tiger is considered functionally extinct in the wild, with no confirmed sightings for 
            over two decades. The remaining six subspecies have varying conservation statuses:
          </p>
          <ul>
            <li><strong>Critically Endangered:</strong> Malayan tiger, Sumatran tiger, South China tiger</li>
            <li><strong>Endangered:</strong> Bengal tiger, Amur (Siberian) tiger, Indochinese tiger</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">Primary Threats</h2>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>1. Habitat Loss and Fragmentation</h3>
          <p className="section-content">
            The single largest factor in the decline of tiger populations is the loss and fragmentation of their habitat. 
            Forests across Asia have been cleared for:
          </p>
          <ul>
            <li>Agriculture and plantations (particularly palm oil, rubber, and tea)</li>
            <li>Human settlements and urban expansion</li>
            <li>Infrastructure development (roads, dams, railways)</li>
            <li>Mining and industrial activities</li>
            <li>Logging (both legal and illegal)</li>
          </ul>
          <p className="section-content">
            As forests are converted to other land uses, tiger populations become isolated in small patches of habitat, 
            leading to reduced genetic diversity and increased vulnerability to local extinction events. Habitat fragmentation 
            also forces tigers to venture into human-dominated landscapes, increasing conflict.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>2. Poaching and Illegal Wildlife Trade</h3>
          <p className="section-content">
            Tigers continue to be killed for their parts, which command high prices in illegal wildlife markets, 
            particularly in China and Southeast Asia. Nearly every part of the tiger has value in traditional 
            Asian medicine, despite the lack of scientific evidence for their efficacy:
          </p>
          <ul>
            <li>Bones are ground into powder for remedies purported to treat arthritis and other ailments</li>
            <li>Skin is used for decorative rugs and clothing</li>
            <li>Claws and teeth are sold as amulets and jewelry</li>
            <li>Whiskers are believed to bring good luck</li>
            <li>Meat is considered a delicacy in some regions</li>
          </ul>
          <p className="section-content">
            A single tiger can be worth up to $50,000 on the black market, creating a powerful economic incentive 
            for poaching. Advanced poaching networks often use sophisticated methods, including steel traps, 
            poison, and firearms.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>3. Human-Wildlife Conflict</h3>
          <p className="section-content">
            As tigers lose their natural habitat and prey base, encounters with humans increase, sometimes resulting 
            in human casualties or livestock predation. When tigers kill livestock or attack people, retaliatory 
            killings often follow. This conflict is particularly intense around the edges of protected areas and in 
            corridors between habitat fragments where tigers and humans compete for space and resources.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>4. Depletion of Prey Base</h3>
          <p className="section-content">
            Tigers require a large number of prey animals to survive. The decline of ungulate populations due to 
            overhunting by humans has severely impacted tiger populations. When natural prey becomes scarce, tigers 
            are more likely to target livestock, exacerbating human-tiger conflict.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Conservation Efforts</h2>
          <p className="section-content">
            Despite these challenges, there have been some notable conservation successes in recent years. After 
            decades of decline, global tiger numbers have shown signs of recovery in some regions. Key conservation 
            initiatives include:
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Global Tiger Recovery Program</h3>
          <p className="section-content">
            In 2010, the 13 tiger range countries committed to TX2 – an ambitious goal to double wild tiger numbers 
            by 2022 (the Chinese Year of the Tiger). While this specific target wasn't met, several countries, 
            including India, Nepal, and Russia, have seen significant increases in their tiger populations.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Protected Areas and Corridors</h3>
          <p className="section-content">
            The establishment and effective management of protected areas remain crucial for tiger conservation. 
            Equally important are wildlife corridors that allow tigers to move between protected areas, maintaining 
            genetic exchange and enabling them to respond to environmental changes, including climate change.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Anti-Poaching Measures</h3>
          <p className="section-content">
            Many tiger reserves have strengthened their anti-poaching efforts with better training, equipment, 
            and technology. Methods include:
          </p>
          <ul>
            <li>Camera trap networks to monitor tiger populations</li>
            <li>Drone surveillance to detect illegal activity</li>
            <li>DNA analysis to track tiger products in trade</li>
            <li>Community-based patrol teams involving local stakeholders</li>
          </ul>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Community Engagement</h3>
          <p className="section-content">
            Successful tiger conservation recognizes that local communities must benefit from conservation efforts. 
            Programs that provide alternative livelihoods, compensation for livestock losses, and community-based 
            ecotourism can transform communities from potential adversaries to conservation allies.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Translocation and Reintroduction</h3>
          <p className="section-content">
            In some areas, tigers are being reintroduced to habitats where they were previously extirpated. 
            Kazakhstan has plans to reintroduce tigers to the Ili-Balkhash region, while India has successfully 
            translocated tigers to repopulate reserves like Panna and Sariska, which had lost their tiger populations 
            to poaching.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Future Outlook</h2>
          <p className="section-content">
            The future of wild tigers depends on addressing multiple challenges simultaneously: protecting and 
            connecting habitats, eliminating poaching and illegal trade, reducing human-tiger conflict, and 
            ensuring prey availability. Climate change adds another layer of uncertainty, as it may alter habitat 
            suitability and prey distributions.
          </p>
          <p className="section-content">
            While the situation remains precarious, there is reason for optimism. Tiger conservation has attracted 
            significant political support and funding. Several populations are showing signs of recovery, and public 
            awareness about the importance of tiger conservation continues to grow. With sustained commitment from 
            governments, conservation organizations, local communities, and the global public, there is hope that 
            this iconic predator can recover and thrive in the wild.
          </p>
          <blockquote>
            "In saving the tiger, we save ourselves and ensure that the forests upon which billions of people depend
            remain standing for generations to come." — Conservation biologist, Dr. K. Ullas Karanth
          </blockquote>
        </div>

        <div className="navigation-buttons">
          <Link to="/habitat" className="nav-button">← Back to Habitat</Link>
          <Link to="/culture" className="nav-button">Next: Cultural Significance →</Link>
        </div>
      </div>
    </div>
  );
}

export default Conservation;
