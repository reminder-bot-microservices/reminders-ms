/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/common/dtos';

@Injectable()
export class RemindersService {
  constructor(private readonly prismaSvc: PrismaService) {}

  async create(createReminderDto: CreateReminderDto) {
    return await this.prismaSvc.reminder.create({
      data: createReminderDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;
    const totalReminders: number = await this.prismaSvc.reminder.count();
    const lastPage: number = Math.ceil(totalReminders / page!);

    const reminders = this.prismaSvc.reminder.findMany({
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

  findOne(id: number) {
    return `This action returns a #${id} reminder`;
  }

  update(id: number, updateReminderDto: UpdateReminderDto) {
    return `This action updates a #${id} reminder`;
  }

  remove(id: number) {
    return `This action removes a #${id} reminder`;
  }
}
