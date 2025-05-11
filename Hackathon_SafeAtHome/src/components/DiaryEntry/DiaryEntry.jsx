import React from 'react';
import './DiaryEntry.css';

const DiaryEntry = ({ value, onChange }) => {
  return (
    <div className="diary-container" dir="rtl">
      <label htmlFor="entry" className="diary-label">רשום/י מה אתה מרגיש:</label>
      <textarea
        id="entry"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="כתוב/י כאן..."
        className="diary-textarea"
        rows="5"
      />
    </div>
  );
};

export default DiaryEntry;
