import React, { useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import MoodSelector from '../../components/MoodSelector/MoodSelector';
import DiaryEntry from '../../components/DiaryEntry/DiaryEntry';

const EntryPage = () => {
  const [mood, setMood] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = () => {
    console.log('נשלח:', { mood, entry });
    alert('היומן נשמר בהצלחה!');
    setMood('');
    setEntry('');
  };

  return (
      <section className="entry-section">
        <AppHeader />
        <MoodSelector selectedMood={mood} onSelect={setMood} />
        <DiaryEntry value={entry} onChange={setEntry} />
        <div className="submit-btn-container">
          <button onClick={handleSubmit} className="submit-btn">
            שמור יומן
          </button>
        </div>
      </section>
  );
};

export default EntryPage;