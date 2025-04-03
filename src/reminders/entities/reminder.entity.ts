export class Reminder {
  id: string;
  title: string;
  description: string;
  date_to_remind: Date;
  early_reminder?: number;
  repeat_on: string[];
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
