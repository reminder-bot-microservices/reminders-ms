import { type IReminder } from 'src/types';

export const remindersSeed: IReminder[] = [
  {
    title: 'Doctor Appointment',
    description: 'Annual check-up with Dr. Smith',
    date_to_remind: new Date('2025-04-10T09:00:00Z'),
    early_reminder: 30,
    repeat_on: ['yearly'],
    completed: false,
  },
  {
    title: 'Team Meeting',
    description: 'Monthly sync with the product team',
    date_to_remind: new Date('2025-04-05T15:00:00Z'),
    early_reminder: 10,
    repeat_on: ['monthly'],
    completed: false,
  },
  {
    title: 'Submit Project Report',
    description: 'Finalize and submit the quarterly report',
    date_to_remind: new Date('2025-04-08T18:00:00Z'),
    early_reminder: 60,
    repeat_on: [],
    completed: false,
  },
  {
    title: 'Call Mom',
    description: 'Check in and say hi',
    date_to_remind: new Date('2025-04-06T20:00:00Z'),
    early_reminder: 15,
    repeat_on: ['weekly'],
    completed: false,
  },
  {
    title: 'Pay Credit Card Bill',
    description: 'Avoid late fees',
    date_to_remind: new Date('2025-04-09T12:00:00Z'),
    early_reminder: 120,
    repeat_on: ['monthly'],
    completed: false,
  },
];
