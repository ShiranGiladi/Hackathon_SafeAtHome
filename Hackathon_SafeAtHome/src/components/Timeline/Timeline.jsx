import React, { useState } from 'react';
import './Timeline.css';
import TimelineEntry from '../TimelineEntry/TimelineEntry';

const Timeline = ({ moodData }) => {
  const [expandedDate, setExpandedDate] = useState(null);

  const toggleDetails = (date) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  return (
    <div className="timeline">
      <h2>Your Emotional Timeline</h2>
      {moodData.map((entry) => (
        <TimelineEntry
          key={entry.date}
          entry={entry}
          isExpanded={expandedDate === entry.date}
          onToggle={toggleDetails}
        />
      ))}
    </div>
  );
};

export default Timeline;
