import React from 'react';


interface Reminder {
  id: number;
  text: string;
  completed: boolean;
}

interface ReminderCardProps {
  reminders: Reminder[];
  onReminderClick: (id: number) => void;
  onNewClick: () => void;
  onRemoveClick: (id: number) => void;
  onInputChange: (id: number, newValue: string) => void;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminders, onReminderClick, onNewClick, onRemoveClick, onInputChange }) => {
  const openReminders = reminders.filter((reminder) => !reminder.completed);
  const completedReminders = reminders.filter((reminder) => reminder.completed);

  return (
    <div>
      <div className="">
        <div className='flex flex-col items-end pb-4 pr-4'>
          <div 
            className='text-3xl cursor-pointer'
            onClick={() => onNewClick()}
            >
              +
          </div>
        </div>
        {openReminders.map((reminder) => (
          <div key={reminder.id} className="flex justify-between p-4 border border-gray-200">
            <div className='flex items-center'>
              <div
                className="w-4 h-4 mr-4 border border-gray-500 rounded-full cursor-pointer"
                onClick={() => onReminderClick(reminder.id)}
              >
                {reminder.completed && <div className="w-full h-full bg-blue-500 rounded-full"></div>}
              </div>
              <input
                className='!outline-none'
                value={reminder.text}
                onChange={(e) => onInputChange(reminder.id, e.target.value)}
              />
            </div>
            <div 
              className='w-4 h-4 cursor-pointer'
              onClick={() => onRemoveClick(reminder.id)}
            >
              X
            </div>
          </div>
        ))}
        {completedReminders.map((reminder) => (
          <div key={reminder.id} className="flex items-center p-4 border border-gray-200">
            <div
              className="w-4 h-4 mr-4 border border-gray-500 bg-blue-500 rounded-full cursor-pointer"
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
