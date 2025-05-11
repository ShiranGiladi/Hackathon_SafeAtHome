import React from 'react';
import { SmileIcon, MehIcon, FrownIcon } from 'lucide-react';
import './MoodSelector.css';

const moods = [
  {
    id: 'safe',
    label: 'בטוח',
    Icon: SmileIcon,
    colorClass: 'icon-safe',
  },
  {
    id: 'concerning',
    label: 'מדאיג',
    Icon: MehIcon,
    colorClass: 'icon-concerning',
  },
  {
    id: 'harmful',
    label: 'מזיק',
    Icon: FrownIcon,
    colorClass: 'icon-harmful',
  },
];

const MoodSelector = ({ selectedMood, onSelect }) => {
  return (
    <div className="mood-selector" dir="rtl">
      {moods.map(({ id, label, Icon, colorClass }) => (
        <button
          key={id}
          className={`mood-btn ${selectedMood === id ? 'selected' : ''}`}
          onClick={() => onSelect(id)}
        >
          <div className={`mood-icon ${colorClass}`}>
            <Icon size={32} />
          </div>
          <span className="mood-label">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
