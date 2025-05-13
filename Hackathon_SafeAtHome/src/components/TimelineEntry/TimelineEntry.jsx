import './TimelineEntry.css';

const TimelineEntry = ({ entry, expanded, onToggle }) => {
  const getMoodColor = (mood) => {
    switch (mood) {
      case 'בטוח': return 'green';
      case 'מדאיג': return 'orange';
      case 'מזיק': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="timeline-entry">
      <div className="entry-header" onClick={() => onToggle(entry.date)}>
        <div className="dot" style={{ backgroundColor: getMoodColor(entry.mood) }}></div>
        <div className="entry-info">
          <span className="entry-date">{entry.date}</span>
          {/* <span className="entry-mood">{entry.mood}</span> */}
        </div>
      </div>

      {expanded && (
        <div className="entry-details">
          {/* <strong>תיאור מסווג:</strong>
          <div className="detail-box">{entry.detail}</div> */}
          {/* <strong>טקסט מקורי:</strong> */}
          <div className="detail-box">{entry.originalText}</div>
        </div>
      )}
    </div>
  );
};


export default TimelineEntry;
