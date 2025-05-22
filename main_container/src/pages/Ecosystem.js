import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function Ecosystem() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Role in the Ecosystem</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Apex Predators: Nature's Regulators</h2>
          <p className="section-content">
            Tigers occupy a crucial position at the top of the food chain as apex predators. This role extends far beyond 
            simply being the largest and most powerful hunters in their habitats. As apex predators, tigers help maintain 
            the delicate balance of the ecosystems they inhabit through multiple ecological mechanisms.
          </p>
          <p className="section-content">
            Their predatory role is essential in keeping prey populations in check. Without natural predators like tigers, 
            herbivore populations can grow unchecked, leading to overgrazing, habitat degradation, and eventually, population 
            crashes due to starvation. By controlling prey numbers, tigers help prevent these boom-and-bust cycles, promoting 
            more stable and healthy ecosystems.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Trophic Cascades: The Ripple Effect</h2>
          <p className="section-content">
            Tigers create what ecologists call "trophic cascades" – indirect effects that ripple throughout the food web. When 
            tigers hunt, they don't just affect the animals they prey on; their presence changes the behavior of prey species, 
            which in turn affects vegetation patterns and other wildlife. This phenomenon has been termed "ecology of fear."
          </p>
          <p className="section-content">
            For instance, in areas where tigers are present, herbivores like deer and wild boar alter their feeding patterns to 
            avoid predation risk. Rather than lingering in one area and overgrazing, they move more frequently and avoid certain 
            high-risk locations. This behavioral change allows vegetation to recover in areas that would otherwise be heavily 
            grazed, promoting greater plant diversity and forest regeneration.
          </p>
          <p className="section-content">
            Studies in ecosystems around the world have shown that removing top predators often leads to "mesopredator release" – 
            an increase in medium-sized predators that were previously kept in check by the apex predator. This can lead to 
            declines in smaller animals that these mesopredators hunt. In tiger habitats, the absence of tigers can allow 
            populations of wild dogs, jackals, and smaller cats to increase, putting additional pressure on smaller prey species.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Biodiversity Support</h2>
          <p className="section-content">
            Tigers contribute to biodiversity in several important ways:
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Habitat Maintenance</h3>
          <p className="section-content">
            By regulating herbivore populations, tigers prevent overgrazing and maintain the structure and composition of forest 
            ecosystems. This helps preserve habitat for countless other species, from insects and reptiles to birds and mammals.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Scavenger Support</h3>
          <p className="section-content">
            Tiger kills provide food for a variety of scavengers, including vultures, smaller carnivores, and insects. A single 
            large kill can feed not just the tiger but also support these other species in the food web. This redistribution of 
            nutrients plays an important role in ecosystem functioning.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Selective Predation</h3>
          <p className="section-content">
            Tigers often target the most vulnerable individuals in prey populations – the old, weak, or sick. This selective 
            predation can help maintain healthier prey populations by removing genetically inferior individuals. It also prevents 
            the spread of disease within prey species, as sick individuals are more likely to be culled before they can infect others.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Umbrella Species: Protecting Habitats</h2>
          <p className="section-content">
            Tigers serve as "umbrella species" in conservation efforts. Because tigers require large, intact habitats with healthy 
            prey populations, protecting tigers effectively means protecting entire ecosystems and the multitude of species within them.
          </p>
          <p className="section-content">
            A single male tiger may patrol a territory of up to 100 square kilometers. By setting aside sufficient land to support 
            viable tiger populations, conservationists indirectly protect thousands of other species that share these habitats, from 
            towering trees to tiny insects. This makes tiger conservation an efficient strategy for preserving biodiversity at a 
            large scale.
          </p>
          <p className="section-content">
            Tiger reserves and protected areas established across Asia serve as critical refuges not just for tigers but for 
            countless other species. For example, India's tiger reserves are home to over 60% of the country's leopard population, 
            all major deer species, and thousands of plant species, many with medicinal properties.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Ecosystem Services: Benefits to Humans</h2>
          <p className="section-content">
            The presence of tigers in an ecosystem ultimately provides tangible benefits to human communities as well:
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Watershed Protection</h3>
          <p className="section-content">
            By maintaining healthy forest ecosystems, tigers indirectly protect watersheds. The forests that tigers help preserve 
            regulate water flow, reduce soil erosion, and filter water, providing clean water to downstream communities. Many major 
            Asian rivers originate in or flow through tiger habitats, providing water for hundreds of millions of people.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Carbon Sequestration</h3>
          <p className="section-content">
            The forests protected for tiger conservation store vast amounts of carbon, helping mitigate climate change. A healthy 
            tiger population indicates a healthy forest, which in turn means more carbon being sequestered from the atmosphere.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Ecotourism</h3>
          <p className="section-content">
            Tigers are charismatic species that attract tourists, providing economic benefits to local communities through ecotourism. 
            This creates financial incentives for conservation and can provide sustainable livelihoods for people living near 
            tiger habitats.
          </p>
          
          <h3 style={{fontSize: "1.4rem", marginBottom: "12px", marginTop: "24px"}}>Cultural and Spiritual Values</h3>
          <p className="section-content">
            As discussed in the Culture and Mythology section, tigers hold immense cultural and spiritual significance for many 
            communities. Their continued existence in the wild preserves these cultural connections and spiritual values.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">The Cost of Losing Tigers</h2>
          <p className="section-content">
            When tigers disappear from an ecosystem, the consequences can be far-reaching and sometimes unexpected. Studies in 
            various predator-free zones have documented phenomena such as:
          </p>
          <ul>
            <li>Explosion of herbivore populations followed by overgrazing and habitat degradation</li>
            <li>Changes in forest composition as preferred browsing species are eliminated</li>
            <li>Increased erosion and decreased water quality as vegetation cover is reduced</li>
            <li>Cascading extinctions of other species dependent on habitat structures maintained by predator-prey dynamics</li>
          </ul>
          <p className="section-content">
            These ecological disruptions can eventually circle back to affect human communities through reduced ecosystem 
            services, such as clean water, forest products, and natural disaster mitigation.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Keystone Species</h2>
          <p className="section-content">
            In ecology, the concept of a "keystone species" refers to a species that has a disproportionately large effect on 
            its environment relative to its abundance. Tigers are considered keystone species because their presence or absence 
            dramatically affects the structure and function of entire ecosystems.
          </p>
          <p className="section-content">
            As we work to conserve tigers, we're not just saving a magnificent predator – we're preserving the ecological 
            processes that sustain life across vast landscapes. By understanding the tiger's ecological role, we gain appreciation 
            for how interconnected all species are in the web of life, and why the loss of even a single species can trigger 
            far-reaching consequences.
          </p>
          <blockquote>
            "When we save tigers, we save humanity. For it is the forest that provides us clean air, clean water, and a stable 
            climate – and tigers are the guardians of these forests." — Dr. K. Ullas Karanth, Wildlife Conservationist
          </blockquote>
        </div>

        <div className="navigation-buttons">
          <Link to="/culture" className="nav-button">← Back to Culture</Link>
          <Link to="/facts" className="nav-button">Next: Interesting Facts →</Link>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
