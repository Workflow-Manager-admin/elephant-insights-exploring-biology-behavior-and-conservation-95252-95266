import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

// PUBLIC_INTERFACE
function BiologySubspecies() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-subtitle">Tiger Insights</div>
          <h1 className="page-title">Biology and Subspecies</h1>
        </div>

        <div className="content-section">
          <h2 className="section-title">Physical Characteristics</h2>
          <p className="section-content">
            Tigers are the largest extant cat species and a member of the genus Panthera. They are muscular, powerful predators 
            with exceptionally strong forequarters and necks. A male tiger can weigh up to 660 pounds (300 kg) and reach a 
            head and body length of 9 feet (2.7 meters), with a tail adding another 3 feet (0.9 meters). Females are somewhat 
            smaller and lighter than males. The Siberian (or Amur) tiger represents the largest subspecies, while the Sumatran 
            tiger is the smallest.
          </p>
          <p className="section-content">
            The tiger's most recognizable feature is a pattern of dark vertical stripes on reddish-orange fur with a lighter 
            underside. Their striped pattern serves as camouflage, helping them to blend with tall grasses, shadows, and 
            dappled forest light. Each tiger has a unique stripe pattern – no two tigers are exactly alike, similar to human 
            fingerprints. The stripes on a tiger's skin continue onto its skin, so if it were to be shaved, the distinctive 
            pattern would still be visible.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Adaptations</h2>
          <p className="section-content">
            Tigers possess several remarkable adaptations:
          </p>
          <ul>
            <li>Retractable claws that stay sharp by remaining sheathed when not in use</li>
            <li>Specialized night vision with a reflective layer (tapetum lucidum) behind their retinas</li>
            <li>Keen hearing with ears that can rotate independently to locate prey</li>
            <li>Powerful jaws with specialized carnassial teeth for slicing meat</li>
            <li>Rough tongue covered in small, sharp projections (papillae) for stripping meat from bones and grooming</li>
            <li>Specialized foot pads that allow silent movement while hunting</li>
            <li>White spots on the backs of their ears which may serve as "false eyes" or visual signals to other tigers</li>
          </ul>
        </div>

        <div className="content-section">
          <h2 className="section-title">Tiger Subspecies</h2>
          <p className="section-content">
            Historically, nine subspecies of tigers were recognized. However, a 2015 genetic study found evidence for only two tiger 
            clades: the continental and the Sunda Island group. Currently, the IUCN recognizes six extant subspecies, with three having 
            become extinct in the last century.
          </p>

          <table>
            <thead>
              <tr>
                <th>Subspecies</th>
                <th>Scientific Name</th>
                <th>Distribution</th>
                <th>Status</th>
                <th>Population Est.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bengal</td>
                <td>P. t. tigris</td>
                <td>Indian subcontinent</td>
                <td>Endangered</td>
                <td>~2,500</td>
              </tr>
              <tr>
                <td>Siberian (Amur)</td>
                <td>P. t. altaica</td>
                <td>Russian Far East, Northeast China</td>
                <td>Endangered</td>
                <td>~500-550</td>
              </tr>
              <tr>
                <td>Sumatran</td>
                <td>P. t. sumatrae</td>
                <td>Sumatra, Indonesia</td>
                <td>Critically Endangered</td>
                <td>~400-500</td>
              </tr>
              <tr>
                <td>Malayan</td>
                <td>P. t. jacksoni</td>
                <td>Malay Peninsula</td>
                <td>Critically Endangered</td>
                <td>~150-200</td>
              </tr>
              <tr>
                <td>Indochinese</td>
                <td>P. t. corbetti</td>
                <td>Mainland Southeast Asia</td>
                <td>Endangered</td>
                <td>~350</td>
              </tr>
              <tr>
                <td>South China</td>
                <td>P. t. amoyensis</td>
                <td>South China</td>
                <td>Critically Endangered</td>
                <td>~20-30 (possibly extinct in wild)</td>
              </tr>
              <tr>
                <td>Caspian</td>
                <td>P. t. virgata</td>
                <td>Central Asia, Turkey, Iran</td>
                <td>Extinct (1970s)</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Javan</td>
                <td>P. t. sondaica</td>
                <td>Java, Indonesia</td>
                <td>Extinct (1980s)</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Bali</td>
                <td>P. t. balica</td>
                <td>Bali, Indonesia</td>
                <td>Extinct (1940s)</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          
          <p className="section-content">
            Each subspecies has adapted to its specific environment, resulting in variations in size, coat color, and stripe patterns. 
            For example, Siberian tigers have thicker fur and more white on their coats to adapt to snowy conditions, while Sumatran 
            tigers are smaller with darker, more closely spaced stripes suited to dense tropical forests.
          </p>
        </div>

        <div className="navigation-buttons">
          <Link to="/" className="nav-button">← Back to Introduction</Link>
          <Link to="/behavior" className="nav-button">Next: Behavior and Social Structure →</Link>
        </div>
      </div>
    </div>
  );
}

export default BiologySubspecies;
