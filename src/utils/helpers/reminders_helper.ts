import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import type { PaginationDto } from 'src/common/dtos';
import { type CreateReminderDto } from 'src/reminders/dto';
import type {
  IHandlePaginationReturn,
  IHandleRemindersRangeReturn,
  TFiltersRange,
} from 'src/types';

export const validateDateToRemindIsFuture = (dateToRemind: Date): boolean => {
  const now: Date = new Date();
  if (dateToRemind <= now) {
    throw new RpcException({
      status: HttpStatus.BAD_REQUEST,
      message: 'date to remind cannot be in the past!',
    });
  }
  return true;
};

const validateReminderEarlyReminder = (early_reminder: number): boolean => {
  if (early_reminder < 0) {
    throw new RpcException({
      status: HttpStatus.BAD_REQUEST,
      message: 'early reminder do not allow negative numbers!',
    });
  }
  return true;
};

export const validateReminder = (data: Partial<CreateReminderDto>) => {
  const getPropsToChange = Object.keys(data);

  getPropsToChange.forEach((prop) => {
    switch (prop) {
      case 'date_to_remind':
        return validateDateToRemindIsFuture(data.date_to_remind!);
      case 'early_reminder':
        return validateReminderEarlyReminder(data.early_reminder!);
    }
  });
};

// ---------- pagination helper
export const handlePagination = (
  paginationDto: PaginationDto,
  remindersCountInDB: number,
): IHandlePaginationReturn => {
  const { limit, page } = paginationDto;
  const lastPage = Math.ceil(remindersCountInDB / page!);

  return {
    skip: (page! - 1) * limit!, // items to skip to be in the requested page
    metadata: {
      limit: limit!,
      page: page!,
      lastPage,
    },
  };
};

// ---------- filte reminders
export const handleRemindersRange = (
  range: TFiltersRange,
): IHandleRemindersRangeReturn => {
  const today = new Date();
  let startDate: Date;
  let endDate: Date;

  if (range === 'day') {
    // returning dates with first and last hour of the day, to get day reminders range
    startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
    );
    endDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
    );
  } else if (range === 'month') {
    // returning first and last day of the month, to get month reminders range
    startDate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0);
    endDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      -1,
      23,
      59,
      59,
    );
  } else {
    // returning first and last day of the week, to get week reminders range
    const currentDay = today.getDay(); // day of the week => 1(monday)-7(sunday)
    const currentDate = today.getDate(); // date of the day in the month => 23

    // if it is not monday, make it monday
    const getFirstDayOfTheWeek =
      currentDay > 1 ? currentDate - (currentDay - 1) : currentDate;
    const differenceToDay7: number = 7 - currentDay;
    const getLastDayOfTheWeek =
      currentDay < 7 ? differenceToDay7 + currentDate : currentDate;

    startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      getFirstDayOfTheWeek,
      0,
      0,
      0,
    );

    endDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      getLastDayOfTheWeek,
      23,
      59,
      59,
    );
  }

  return {
    startDate,
    endDate,
  };
};
