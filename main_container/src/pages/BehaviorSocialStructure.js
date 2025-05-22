import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function BehaviorSocialStructure() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Behavior and Social Structure</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Solitary Nature</h2>
          <p className="section-content">
            Unlike lions, tigers are primarily solitary animals. They establish and maintain territories that are marked with urine, 
            feces, scrapes, and scent from their specialized temporal glands. Adult tigers may temporarily share their kill with others, 
            especially during mating season, but they generally hunt and live alone. This solitary behavior helps distribute these 
            large predators across the landscape, ensuring there's enough prey to sustain their populations.
          </p>
          <p className="section-content">
            Despite their solitary nature, tigers are not antisocial. They communicate through various vocalizations, including 
            roars, grunts, growls, and chuffs. A tiger's roar can be heard up to 3 kilometers away and serves to advertise territory 
            and availability to potential mates. The "chuff" sound (a friendly snorting noise) is used as a greeting between 
            friendly individuals, particularly between mothers and cubs or during courtship.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Territorial Behavior</h2>
          <p className="section-content">
            Tigers are fiercely territorial, with adult males maintaining the largest territories that may overlap with those of several 
            females but rarely with other males. A male tiger's territory can be as large as 100 square kilometers (39 square miles), 
            while female territories are usually smaller, around 20 square kilometers (7.7 square miles). The size of territories 
            depends largely on prey density - in prey-rich areas, territories can be smaller.
          </p>
          <p className="section-content">
            Tigers mark their territories in several ways:
          </p>
          <ul>
            <li>Spraying urine mixed with scent on trees, bushes, and rocks</li>
            <li>Leaving feces in prominent locations</li>
            <li>Creating scratch marks on trees at approximately 2 meters high (showing their impressive size)</li>
            <li>Secreting scent from their facial glands by rubbing against objects</li>
          </ul>
          <p className="section-content">
            These territorial markings serve as "no trespassing" signs to other tigers and help prevent dangerous confrontations. When 
            territories do overlap, tigers typically avoid each other by using the same areas at different times.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Hunting and Predation</h2>
          <p className="section-content">
            Tigers are apex predators and among nature's most efficient hunters. They mainly hunt between dusk and dawn, using their 
            excellent night vision and camouflage to their advantage. A tiger will stalk its prey carefully, approaching as close 
            as possible (sometimes within 20-30 feet) before charging in a powerful burst of speed. Though they can sprint at 
            speeds up to 65 km/h (40 mph), they can only maintain this pace for short distances.
          </p>
          <p className="section-content">
            Tigers typically kill large prey with a powerful bite to the neck or throat, often severing the spinal cord or crushing 
            the windpipe. They can take down animals over twice their size and are capable of killing an adult gaur (Indian bison), 
            which can weigh over a ton. After a successful hunt, a tiger may drag its kill to a secluded area and cover it with 
            leaves and soil to hide it from scavengers. A large kill can sustain a tiger for several days, during which it will 
            return to feed periodically.
          </p>
          <p className="section-content">
            Common prey species include:
          </p>
          <ul>
            <li>Sambar and chital deer</li>
            <li>Wild boar</li>
            <li>Water buffalo</li>
            <li>Gaur (Indian bison)</li>
            <li>Various antelope species</li>
            <li>Smaller mammals when larger prey is scarce</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">Reproduction and Family Life</h2>
          <p className="section-content">
            Female tigers reach sexual maturity at 3-4 years of age, while males mature at 4-5 years. Tigers have no specific 
            breeding season and can mate year-round, though births are often more common in winter in some regions. During 
            courtship, which may last several days, the typically solitary tigers become sociable and may hunt together.
          </p>
          <p className="section-content">
            After a gestation period of about 103 days, female tigers give birth to a litter of 2-4 cubs in a sheltered den. 
            Newborn cubs are blind and helpless, weighing only 1-1.5 kg (2.2-3.3 lbs). The mother raises her cubs alone, teaching 
            them to hunt when they're about 6 months old. Cubs remain with their mother for 2-3 years before establishing their own 
            territories. Young males typically travel farther from their birth area than females to avoid conflict with established 
            adult males.
          </p>
          <p className="section-content">
            Tiger mothers are extraordinarily dedicated parents, hunting for their cubs while they're young and gradually teaching 
            them all the skills needed for independent survival. They fiercely protect their offspring, with mothers being known 
            to fight to the death to defend their cubs.
          </p>
          <blockquote>
            The maternal bond between a tigress and her cubs represents one of the strongest connections in the natural world. 
            For over two years, she invests everything in their survival, passing down ancient knowledge essential for the 
            continuation of her species.
          </blockquote>
        </div>

        <div className="navigation-buttons">
          <Link to="/biology" className="nav-button">← Back to Biology</Link>
          <Link to="/habitat" className="nav-button">Next: Habitat and Range →</Link>
        </div>
      </div>
    </div>
  );
}

export default BehaviorSocialStructure;
