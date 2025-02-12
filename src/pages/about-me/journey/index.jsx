import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import PropTypes from "prop-types";
import { Block } from "../../../components/block";
import { TextBlock } from "../../../components/typography";

// Separate TimeBlock Component
const TimeBlock = ({ year, title, children }) => (
  <Block className="timeline" spacing={[40]}>
    <Block spacing={[5]} className="year">
      <TextBlock type="regularLight" style={{ height: 24 }}>
        {year}
      </TextBlock>
      <TextBlock type="title2">{title}</TextBlock>
    </Block>
    <TextBlock type="regular" style={{ maxWidth: 480 }} className="subtext">
      {children}
    </TextBlock>
  </Block>
);

TimeBlock.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Main Component utilizing TimeBlock
const About = () => (
  <div className="">
    <div className="section__title section__title__new">MY JOURNEY</div>
    <div className="page-header">
      <div className="page-header__image" style={{ marginBottom: 50 }}>
        <StaticImage src="./img1.png" alt="about" />
      </div>
    </div>
    <div className="timeline-holder">
      <TimeBlock year="2017" title="First Job - Burning Glass">
        Secured a role at Burning Glass during campus placements, starting as an
        intern with C and C++, eventually rising to a full-time Software
        Development Engineer.
      </TimeBlock>
      <TimeBlock year="2018" title="Web Development Transition">
        Fate smiled as I transitioned to the web development team, taking charge
        of crafting Single Page Applications and dynamic web apps.
      </TimeBlock>
      <TimeBlock year="2019" title="Frontend Freedom at Plivo">
        Embracing the role of Frontend Developer at Plivo, I relished the
        autonomy to construct high-performing web pages, refining my skills
        along the way.
      </TimeBlock>
      <TimeBlock year="2020" title="Promoted to Senior Frontend Developer">
        The pandemic hit hard, turning 2020 and the subsequent year into a
        whirlwind of work-from-home days, revolving around hand sanitization
        rituals and adapting to the new norm.
      </TimeBlock>
      <TimeBlock year="2021" title="SDE-1 Role at Contacto">
        Stepped into the product engineering team at Contacto, delving into a
        tech stack enriched with Electron, React, Vue, Redux, SCSS, and more.
      </TimeBlock>
      <TimeBlock year="2022" title="Mastering React Artistry">
        A year dedicated to mastering React, unraveling its intricacies,
        comprehending value passing, event loops, and core concepts, while also
        broadening my skillset.
      </TimeBlock>
      <TimeBlock year="2023" title="Promoted to SDE-2">
        As a Senior UI engineer at Plivo, focused on exciting feature
        development and optimizing performance, I honed leadership skills.
      </TimeBlock>
      <TimeBlock year="2024" title="Evolving into a Senior/Lead Engineer">
        Last year, I embraced ownership and responsibility, evolving into a
        better Senior/Lead Engineer. The past year brought invaluable learnings,
        shaping me into a more adept professional.
      </TimeBlock>
      <TimeBlock year="2025" title="Promotion to SDE3 & AI Innovation">
        Achieved promotion to SDE3, marking a significant career milestone. Led
        a complete application overhaul leveraging AI technologies,
        demonstrating technical leadership while continuing to build and explore
        new frontiers in software development.
      </TimeBlock>
    </div>
  </div>
);

export default About;
