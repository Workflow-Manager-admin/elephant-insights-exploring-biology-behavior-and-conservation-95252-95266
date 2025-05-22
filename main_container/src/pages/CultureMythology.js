import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function CultureMythology() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Tigers in Culture & Mythology</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Ancient Cultural Significance</h2>
          <p className="section-content">
            Throughout history, tigers have been powerful symbols, representing strength, courage, dignity, and cunning across various 
            Asian cultures. As apex predators commanding both fear and respect, it's no surprise that tigers have embedded themselves 
            deeply in human mythology, art, literature, and religion.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Tigers in Asian Religions</h2>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Hinduism</h3>
          <p className="section-content">
            In Hindu mythology, tigers are associated with several deities. The goddess Durga, one of the main forms of Shakti, 
            is often depicted riding a tiger, symbolizing her power over the most ferocious animal. The tiger represents Durga's 
            unlimited power and strength. Lord Shiva, the destroyer in the Hindu trinity, is sometimes portrayed wearing a tiger 
            skin, representing his conquest over animal instincts.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Buddhism</h3>
          <p className="section-content">
            In Buddhist traditions, tigers often symbolize strength and courage. In Tibetan Buddhism, the tiger is one of the Four 
            Dignities representing confidence and awareness. The famous Zen koan "Riding the Tiger" uses the tiger as a metaphor 
            for powerful life forces that cannot be controlled, only directed with great skill and wisdom.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Chinese Culture and Taoism</h3>
          <p className="section-content">
            In Chinese culture, the tiger is one of the Four Great Beasts and one of the 12 animals in the Chinese zodiac. It ranks 
            third in the Chinese zodiac and represents power, courage, and protection against evil spirits, fire, and thieves. In 
            Taoism, the White Tiger is the guardian of the West and symbolizes the autumn season, the element of metal, and the color white.
          </p>
          <p className="section-content">
            The tiger is also considered one of the most important animals in Chinese art and mythology. The image of a tiger was often 
            worn by Chinese children as a protective amulet, and tiger imagery was embroidered on clothes and shoes to ward off evil 
            spirits and bring good luck.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Tigers in Asian Folklore and Mythology</h2>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Korean Mythology</h3>
          <p className="section-content">
            In Korean mythology, the tiger is both revered and feared. The foundation myth of Korea includes a tiger who wanted to become 
            human but lacked the patience to complete the required ritual. Tigers in Korean folklore are often depicted as wise but easily 
            outwitted creatures, contrasting with their fearsome physical nature. The tiger is also considered the guardian of the West 
            and symbolizes courage and dignity.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Japanese Mythology</h3>
          <p className="section-content">
            Although tigers have never existed naturally in Japan, they were introduced through Chinese art and mythology and feature 
            prominently in Japanese folklore. In Japanese art, the tiger often appears with bamboo, a symbol of resilience, creating 
            imagery that represents both strength and flexibility. The tiger is also associated with the god of wealth, Bishamonten, one 
            of the Seven Lucky Gods in Japanese mythology.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Indian Folklore</h3>
          <p className="section-content">
            Beyond religious contexts, tigers feature prominently in Indian folk tales and fables. In various regional stories, they 
            represent both danger and nobility. Many stories feature humans or weaker animals outwitting tigers, while others portray 
            tigers as protectors or helpers to humans who show them respect or kindness.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Southeast Asian Traditions</h3>
          <p className="section-content">
            In many Southeast Asian cultures, such as those in Malaysia, Indonesia, and Thailand, tigers were believed to be the 
            embodiment of ancestral spirits or supernatural beings. There are numerous tales of humans transforming into tigers or 
            tigers taking human form. In some traditions, shamans were believed to be able to call upon tiger spirits to help heal 
            the sick or protect villages from evil spirits.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">National Symbols and Modern Culture</h2>
          <p className="section-content">
            The tiger's cultural importance continues in modern times, with several nations adopting it as a national symbol:
          </p>
          <ul>
            <li><strong>India:</strong> The Bengal tiger is India's national animal, symbolizing power, grace, and national pride.</li>
            <li><strong>Malaysia:</strong> The Malayan tiger appears on the country's coat of arms and is a national symbol.</li>
            <li><strong>South Korea:</strong> The tiger is featured in their national emblem and was the mascot for the 1988 Seoul Olympics.</li>
            <li><strong>Bangladesh:</strong> The Bengal tiger is the national animal, featured on currency and official seals.</li>
          </ul>
          
          <p className="section-content">
            In modern global culture, tigers continue to captivate the human imagination. They feature prominently in:
          </p>
          <ul>
            <li>
              <strong>Literature:</strong> From Rudyard Kipling's "The Jungle Book" (featuring the tiger villain Shere Khan) to 
              Yann Martel's "Life of Pi" with its memorable Bengal tiger Richard Parker
            </li>
            <li>
              <strong>Films and Television:</strong> Tigers have starred in countless documentaries and films, including Disney's 
              animated classics and IMAX nature films
            </li>
            <li>
              <strong>Sports Teams:</strong> Tigers are one of the most popular mascots for sports teams worldwide, from the Detroit 
              Tigers in baseball to Leicester Tigers in rugby
            </li>
            <li>
              <strong>Advertising:</strong> The tiger's striking appearance makes it a popular choice for brands, with Tony the Tiger 
              of Kellogg's Frosted Flakes and Esso/Exxon's "Put a Tiger in Your Tank" being famous examples
            </li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">Symbolism and Meaning</h2>
          <p className="section-content">
            Across cultures and time periods, tigers have consistently symbolized certain qualities:
          </p>
          <ul>
            <li><strong>Power and Strength:</strong> As apex predators, tigers naturally represent physical might and dominance</li>
            <li><strong>Courage and Fearlessness:</strong> The tiger's willingness to face any opponent has made it a symbol of bravery</li>
            <li><strong>Independence:</strong> The solitary nature of tigers has made them symbols of self-sufficiency and freedom</li>
            <li><strong>Protection:</strong> Many cultures view tigers as guardians against evil forces</li>
            <li><strong>Passion and Sensuality:</strong> The tiger's grace and beauty, combined with its fierce nature, has associated it with primal passion and desire</li>
          </ul>
          <p className="section-content">
            This rich cultural heritage highlights the profound impact tigers have had on human civilizations. As we work to protect the 
            species from extinction, we're also preserving a powerful symbol that has inspired and awed humanity for thousands of years.
          </p>
          <blockquote>
            "The tiger, like all wild things, was meant to be free. In its freedom lies its beauty; in its independence, its soul." 
            — Ancient Chinese proverb
          </blockquote>
        </div>

        <div className="navigation-buttons">
          <Link to="/conservation" className="nav-button">← Back to Conservation</Link>
          <Link to="/ecosystem" className="nav-button">Next: Ecosystem Role →</Link>
        </div>
      </div>
    </div>
  );
}

export default CultureMythology;
