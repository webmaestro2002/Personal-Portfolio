import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-links" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'yellow', 
                  fontSize: '18px', 
                  fontWeight: 'bold' 
                }}>
                Live
              </a>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'yellow', 
                  fontSize: '18px', 
                  fontWeight: 'bold' 
                }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}
