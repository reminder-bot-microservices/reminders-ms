export interface IReminder {
  title: string;
  description: string;
  date_to_remind: Date;
  early_reminder?: number;
  repeat_on: string[];
  completed?: boolean;
}

export interface IHandlePaginationReturn {
  metadata: {
    limit: number;
    page: number;
    lastPage: number;
  };
  skip: number;
}

export type TFiltersRange = 'day' | 'week' | 'month';

export interface IHandleRemindersRangeReturn {
  startDate: Date;
  endDate: Date;
}
