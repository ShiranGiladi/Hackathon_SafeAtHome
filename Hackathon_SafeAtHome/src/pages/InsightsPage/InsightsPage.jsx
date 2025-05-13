import React, { useState } from 'react';
import RecommandationCard from '../../components/RecommendationCard/RecommendationCard';
import TimelineEntry from '../../components/TimelineEntry/TimelineEntry';

const InsightsPage = () => {
  const [moodData] = useState([
    {
      mood: 'בטוח',
      date: '2025-05-09',
      // detail: 'מרגיש טוב ורגוע. נהנה מיום שקט.',
      originalText: 'היום היה נחמד, שתיתי קפה בחוץ והרגשתי רגועה לגמרי.',
    },
    {
      mood: 'מדאיג',
      date: '2025-05-08',
      // detail: 'מרגיש חרד, מתמודד עם כמה דברים.',
      originalText: 'לא ישנתי טוב בלילה, מלא מחשבות לגבי מה שהבן זוג אמר לי אתמול לגבי הלבוש.',
    },
    {
      mood: 'מזיק',
      date: '2025-05-07',
      // detail: 'מרגיש עצבני ומוצף מהאירועים האחרונים.',
      originalText: 'היה לי ויכוח קשה עם הבן זוג והרגשתי מותקפת.',
    },
  ]);
  const [expandedDate, setExpandedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredData, setFilteredData] = useState(moodData.slice(0, 5));

  const toggleDetails = (date) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

  const handleDateSearch = () => {
    if (!selectedDate) return;
    const selected = new Date(selectedDate);
    const closest = [...moodData]
      .sort((a, b) => {
        return Math.abs(new Date(a.date) - selected) - Math.abs(new Date(b.date) - selected);
      })
      .slice(0, 5);
    setFilteredData(closest);
    setExpandedDate(null);
  };

  return (
    <div className="insights-page" dir="rtl">
      <h2 className="page-title">ציר הזמן הרגשי שלך</h2>

      <div className="date-search">
        <label htmlFor="datePicker" className="date-label">
          בחרי תאריך:
        </label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={handleDateSearch}>הצג רשומות קרובות</button>
      </div>

      <RecommandationCard />

      <div className="timeline">
        {filteredData.map((entry) => (
          <TimelineEntry
            key={entry.date}
            entry={entry}
            expanded={expandedDate === entry.date}
            onToggle={toggleDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default InsightsPage;
