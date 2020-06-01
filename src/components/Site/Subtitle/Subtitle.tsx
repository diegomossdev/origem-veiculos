import * as React from 'react';
import { Container } from 'react-bootstrap';

import background from '../../../assets/site/bg-subtitle.jpg';

interface SubtitleData {
  subtitle: string;
  description: string;
}

const Subtitle: React.FC<SubtitleData> = ({ subtitle, description }) => {
  return (
    <>
      <div className="subtitle-section" style={{ backgroundImage: `url(${background})` }}>
        <Container>
          <div>
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export { Subtitle };