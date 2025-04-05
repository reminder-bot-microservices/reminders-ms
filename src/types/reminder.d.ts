export interface IReminder {
  title: string;
  description: string;
  date_to_remind: Date;
  early_reminder?: number;
  repeat_on: string[];
  completed?: boolean;
}
