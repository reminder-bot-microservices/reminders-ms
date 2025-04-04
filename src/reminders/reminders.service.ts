/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { CreateReminderDto, UpdateReminderDto } from './dto';
import { type PaginationDto } from 'src/common/dtos';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RemindersService {
  constructor(private readonly prismaSvc: PrismaService) {}

  async create(createReminderDto: CreateReminderDto) {
    // todo => validation to verify date_to_remind is in the future and not past
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

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;
    const totalReminders = await this.prismaSvc.reminder.count();
    const lastPage = Math.ceil(totalReminders / page!);

    const reminders = await this.prismaSvc.reminder.findMany({
      take: limit,
      skip: (page! - 1) * limit!,
    });
    return {
      metadata: {
        limit,
        page,
        lastPage,
      },
      data: reminders,
    };
  }

  async findOne(id: number) {
    const getReminder = await this.prismaSvc.reminder.findFirst({
      where: { id },
    });
    if (!getReminder) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: `Reminder with id ${id} was not found!`,
      });
    }
    return getReminder;
  }

  async update(id: number, updateReminderDto: UpdateReminderDto) {
    await this.findOne(id); // if fails throws error
    try {
      return await this.prismaSvc.reminder.update({
        where: { id },
        data: updateReminderDto,
      });
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error,
      });
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id); // if fails throws error
      return await this.prismaSvc.reminder.delete({ where: { id } });
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error,
      });
    }
  }
}
