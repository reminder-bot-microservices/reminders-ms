import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { type CreateReminderDto } from 'src/reminders/dto';

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
