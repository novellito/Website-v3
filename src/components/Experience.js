import React from 'react';
import styled from 'styled-components';
import nbc from '../assets/nbc.png';
import csun from '../assets/csun-seal.png';
import lees from '../assets/lees.png';
import Container from '../containers/ContainerHOC';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  bluePrimary,
  blueSecondary,
  white,
  blueTertiary,
  primaryTextColor
} from '../colors';

const Wrapper = styled.section`
  background: ${blueTertiary};

  .vertical-timeline::before {
    top: unset;
  }

  h1 {
    color: ${primaryTextColor};
    margin-top: 0;
    padding-top: 2em;
  }

  .vertical-timeline-element-icon {
    justify-content: center;
    display: flex;
  }

  .nbc {
    width: 85%;
    margin-top: auto;
  }

  .csun {
    width: 100%;
  }

  .lees {
    width: 50px;
    height: 35px;
    position: relative;
    top: 10px;
  }

  /* Override timeline styles to fix date position issues */
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      left: 88%;
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      right: 140%;
    }
    .vertical-timeline-element-content {
      width: 45% !important; /* resolves issue with aligning date */
    }
  }
`;
const Experience = props => {
  return (
    <Wrapper>
      <h1>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={nbc} alt="" className="nbc" />}
        >
          <h3 className="vertical-timeline-element-title">
            Media Tech Associate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">NY / LA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2014 - May 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={csun} alt="" className="csun" />}
        >
          <h3 className="vertical-timeline-element-title">
            BS in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">CSU Northridge</h4>
          <p>Deans List Fall 2014 - Spring 2018 • GPA: 3.6 (Cum Laude)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2017 - July 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={csun} alt="" className="csun" />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer & Tech Support Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSUN Distance Learning Center
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2014 - April 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={csun} alt="" className="csun" />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSUN Career Center
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2014 - April 2017"
          iconStyle={{ background: 'white', color: '#fff' }}
          icon={<img src={lees} alt="" className="lees" />}
        >
          <h3 className="vertical-timeline-element-title">Store Supervisor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lake Balboa, CA
          </h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Wrapper>
  );
};

export default Experience;
