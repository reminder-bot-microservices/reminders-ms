/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { QueriesDto } from 'src/common/dtos';
import type { CreateReminderDto, UpdateReminderDto } from './dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';
import { remindersSeed } from 'src/utils/db_seed';
import {
  handlePagination,
  handleRemindersRange,
  validateReminder,
} from 'src/utils/helpers';

@Injectable()
export class RemindersService {
  constructor(private readonly prismaSvc: PrismaService) {}

  async seeder() {
    try {
      return await this.prismaSvc.reminder.createMany({
        data: remindersSeed,
      });
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error,
      });
    }
  }

  async create(createReminderDto: CreateReminderDto) {
    validateReminder(createReminderDto);
    try {
      return await this.prismaSvc.reminder.create({
        data: createReminderDto,
      });
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error,
      });
    }
  }

  async findAll(queries: QueriesDto) {
    const { range, ...paginationDto } = queries;
    // filters
    const { startDate: gte, endDate: lte } = handleRemindersRange(range!);

    // pagination
    const totalReminders = await this.prismaSvc.reminder.count({
      where: { date_to_remind: { gte, lte } },
    });
    const { skip, metadata } = handlePagination(paginationDto, totalReminders);

    const reminders = await this.prismaSvc.reminder.findMany({
      take: metadata.limit,
      skip,
      where: {
        date_to_remind: {
          gte,
          lte,
        },
      },
    });
    return {
      metadata,
      data: reminders,
    };
  }

  async findOne(id: number) {
    const reminder = await this.prismaSvc.reminder.findFirst({
      where: { id },
    });
    if (!reminder) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: `Reminder with id ${id} was not found!`,
      });
    }
    return reminder;
  }

  async update(updateReminderDto: UpdateReminderDto) {
    try {
      await this.findOne(updateReminderDto.id); // if fails throws error
      validateReminder(updateReminderDto);
      return await this.prismaSvc.reminder.update({
        where: { id: updateReminderDto.id },
        data: updateReminderDto,
      });
    } catch (error) {
      throw new RpcException(error);
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // if fails throws error
      return await this.prismaSvc.reminder.delete({ where: { id } });
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
