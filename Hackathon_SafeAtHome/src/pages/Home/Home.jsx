import { useState } from 'react';
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

import './Home.css';
import "react-calendar/dist/Calendar.css";

const Home = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());
    const [username, setUsername] = useState("משתמש");

    const markedDates = {
        '2025-05-02': 'green',
        '2025-05-06': 'yellow',
        '2025-05-12': 'red'
    };

    const formatDateKey = (date) => {
        return date.toLocaleDateString('en-CA'); 
    };

    const handleClickDay = () => {
        navigate('/entryPage');
    };

    return (
        <section className='home-container'>
            <h1>היי {username}</h1>

            <Calendar
                onClickDay={handleClickDay}
                value={date}
                onChange={setDate}
                view="month"
                tileContent={({ date, view }) => {
                    if (view === 'month') {
                        const key = formatDateKey(date);
                        const color = markedDates[key];
                        if (color) {
                            return (
                                <div className="dot-container">
                                    <span className={`dot ${color}`}></span>
                                </div>
                            );
                        }
                    }
                    return null;
                }}
            />

            <p className='monthly-summary-message'>הכל נראה תקין</p>
        </section>
    )
}

export default Home