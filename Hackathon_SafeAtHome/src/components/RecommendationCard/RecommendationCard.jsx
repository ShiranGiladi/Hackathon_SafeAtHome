// import React from 'react';
// import '../RecommendationCard/RecommendationCard.css';

// const RecommandationCard = () => (
//   <div className="recommandation-card">
//     <h2>המלצות</h2>
//     <p>פיצוי מהחכמים לבעלי תקלות, בנוגע למצב הרוח.</p>
//   </div>
// );

// export default RecommandationCard;

// import React from 'react';
import './RecommendationCard.css';

const RecommendationCard = ({ hashtag, text }) => {
  return (
    <div className="recommendation-card">
      <p className="hashtag">{hashtag}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default RecommendationCard;
