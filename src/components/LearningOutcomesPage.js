import React from 'react';
import learningOutcomes from '../data/learningOutcomes';
import './LearningOutcomesPage.css';

const LearningOutcomesPage = () => {
    return (
        <div className="learning-outcomes">
            <h1>Daily Learning Outcomes</h1>
            <ul>
                {learningOutcomes.map((item, index) => (
                    <li key={index}>
                        <strong>{item.day}:</strong> {item.outcome}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LearningOutcomesPage;