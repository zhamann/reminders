import React from 'react';


interface Reminder {
  id: number;
  text: string;
  completed: boolean;
}

interface ReminderCardProps {
  reminders: Reminder[];
  onReminderClick: (id: number) => void;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminders, onReminderClick }) => {
  const openReminders = reminders.filter((reminder) => !reminder.completed);
  const completedReminders = reminders.filter((reminder) => reminder.completed);

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Open</h2>
        {openReminders.map((reminder) => (
          <div key={reminder.id} className="flex items-center mb-2">
            <div
              className="w-4 h-4 mr-2 border border-gray-500 rounded-full cursor-pointer"
              onClick={() => onReminderClick(reminder.id)}
            >
              {reminder.completed && <div className="w-full h-full bg-blue-500 rounded-full"></div>}
            </div>
            <span>{reminder.text}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Completed</h2>
        {completedReminders.map((reminder) => (
          <div key={reminder.id} className="flex items-center mb-2">
            <div
              className="w-4 h-4 mr-2 border border-gray-500 bg-blue-500 rounded-full cursor-pointer"
              onClick={() => onReminderClick(reminder.id)}
            >
              {!reminder.completed && (
                <div className="w-full h-full bg-white rounded-full"></div>
              )}
            </div>
            <span>{reminder.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderCard;
