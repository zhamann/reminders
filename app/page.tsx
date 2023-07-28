'use client'

import React, { useState, useEffect } from 'react';
import ReminderCard from '../components/reminders-card';

interface Reminder {
  id: number;
  text: string;
  completed: boolean;
}

const RemindersPage: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    // Fetch the reminders data from the JSON file
    async function fetchReminders() {
      try {
        const response = await fetch('/reminders.json');
        const data = await response.json();
        setReminders(data);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    }
    fetchReminders();
  }, []);
  
  const handleReminderClick = (id: number) => {
    setReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
      )
    );
  };

  return (
    <div className={'card border p-8 drop-shadow-md rounded mb-4 bg-white flex flex-col w-screen'}>
      <ReminderCard
        reminders={reminders}
        onReminderClick={handleReminderClick}
      />
    </div>
  );
};

export default RemindersPage;
