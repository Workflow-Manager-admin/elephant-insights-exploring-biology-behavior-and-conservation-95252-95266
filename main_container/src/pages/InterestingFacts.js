import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function InterestingFacts() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Interesting Facts About Tigers</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Remarkable Facts About These Magnificent Cats</h2>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>1. Unique Stripes</h3>
            <p className="section-content">
              A tiger's stripes are as unique as human fingerprints – no two tigers have the same pattern. Even more 
              fascinating, the striped pattern is not just in their fur but also etched into their skin. If you were to 
              shave a tiger, you would still see its stripes!
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>2. Night Vision Superpower</h3>
            <p className="section-content">
              Tigers have excellent night vision, with eyes that are six times more sensitive to light than human eyes. 
              A reflective layer called the tapetum lucidum behind their retinas reflects light back through the retina, 
              enhancing night vision. This is what causes their eyes to glow in the dark when light is shined on them.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>3. Swimming Champions</h3>
            <p className="section-content">
              Unlike most cats, tigers love water and are excellent swimmers. They can swim up to 6 kilometers (3.7 miles) 
              at a time and have been known to swim across rivers as wide as 29 kilometers (18 miles). They often soak in 
              ponds or streams to cool off during hot weather and can even hunt in water, preying on fish or crocodiles.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>4. Powerful Jumpers</h3>
            <p className="section-content">
              Tigers can jump forward distances of up to 10 meters (33 feet) – roughly the length of a school bus – and 
              reach heights of up to 5 meters (16 feet) in a single bound. This extraordinary leaping ability helps them 
              catch prey that attempts to flee.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>5. Roar Acoustics</h3>
            <p className="section-content">
              A tiger's roar can be heard as far as 3 kilometers (1.9 miles) away. Unlike many big cats, tigers cannot 
              purr while exhaling – they can only purr while inhaling. Instead of purring, they make a sound called 
              "chuffing" (a friendly snorting noise) as a non-threatening greeting or expression of pleasure.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>6. Tongue Texture</h3>
            <p className="section-content">
              A tiger's tongue is covered with papillae, small backward-facing hooks made of keratin. These rasps are 
              so rough they can lick the paint off buildings and strip flesh from bones. This specialized tongue helps 
              tigers clean every last morsel of meat from their prey's bones and also aids in grooming.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>7. Carnivorous Diet</h3>
            <p className="section-content">
              Tigers are obligate carnivores, meaning they must eat meat to survive. A single tiger can consume up to 
              40 kilograms (88 pounds) of meat in one feeding, though they usually eat a more modest 15-18 kilograms 
              (33-40 pounds) at a time. After a large meal, they may not eat again for several days.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>8. Pregnancy and Cubs</h3>
            <p className="section-content">
              Female tigers have one of the shortest pregnancies among big cats – just 103 days (compared to 108 days 
              for lions and 115 days for jaguars). Tiger cubs are born blind and weigh only about 1 kilogram (2.2 pounds). 
              Around 50% of tiger cubs don't survive to adulthood, making every successful birth crucial for conservation.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>9. White Tigers</h3>
            <p className="section-content">
              White tigers are not a separate species or subspecies. They're Bengal tigers with a genetic mutation that 
              causes their distinctive coloration. True white tigers have blue eyes and a pink nose. All white tigers in 
              captivity today can trace their ancestry back to a single white tiger named Mohan, who was captured in India 
              in 1951. Due to inbreeding, white tigers often suffer from various health problems.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>10. Silent Stalkers</h3>
            <p className="section-content">
              Despite their large size, tigers are incredibly stealthy. They have soft toe pads that allow them to move 
              silently through their environment. Their orange and black striped coat, which seems vibrant to human eyes, 
              is actually excellent camouflage in the dappled light of forests and tall grasses. Tigers can approach within 
              20 feet of their prey without being detected.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>11. Record Holders</h3>
            <p className="section-content">
              The largest tiger subspecies, the Siberian (Amur) tiger, is also the largest living cat species. The largest 
              wild Siberian tiger on record weighed 384 kg (847 pounds). The tiger is the national animal of India, Bangladesh, 
              Malaysia, and South Korea.
            </p>
          </div>
          
          <div className="fact-card">
            <h3 style={{fontSize: "1.4rem", marginBottom: "12px"}}>12. Memory Skills</h3>
            <p className="section-content">
              Tigers have excellent memory and cognitive abilities. They can remember the locations of territorial boundaries 
              for years and recognize other individual tigers they've previously encountered. In captivity, tigers have demonstrated 
              problem-solving skills equivalent to those of great apes.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2 className="section-title">Conclusion</h2>
          <p className="section-content">
            These fascinating facts highlight what remarkable creatures tigers truly are. From their physical adaptations to their 
            complex behaviors, tigers represent one of nature's most impressive evolutionary achievements. As we work to protect 
            these magnificent animals from extinction, learning about their unique characteristics helps us appreciate why they're 
            worth saving.
          </p>
          <p className="section-content">
            By exploring all the pages of this tiger blog, we hope you've gained a deeper understanding of tigers – their biology, 
            behavior, habitats, conservation challenges, cultural significance, and ecological importance. Each tiger is not just 
            an individual animal, but a vital part of its ecosystem and a living connection to thousands of years of natural and 
            cultural history.
          </p>
          <blockquote>
            "There is nothing like the thrill of walking through the jungle looking for a tiger and knowing they could be 
            watching you already." — Ashlan Gorse Cousteau
          </blockquote>
        </div>

        <div className="navigation-buttons">
          <Link to="/ecosystem" className="nav-button">← Back to Ecosystem</Link>
          <Link to="/" className="nav-button">Back to Introduction</Link>
        </div>
      </div>
    </div>
  );
}

export default InterestingFacts;
