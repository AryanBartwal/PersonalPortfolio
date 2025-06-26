import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <h1>My Resume</h1>
            <p>Click the link below to download my resume:</p>
            <a href="/personal-e-portfolio/resume.pdf" download>
                Download Resume
            </a>
            <div style={{ marginTop: '2rem' }}>
                <iframe
                    src="/personal-e-portfolio/resume.pdf"
                    title="Resume Preview"
                    width="100%"
                    height="600px"
                    style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
};

export default ResumePage;