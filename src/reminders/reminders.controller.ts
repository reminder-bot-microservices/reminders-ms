import { QueriesDto } from 'src/common/dtos/filters.dto';
import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Controller()
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @MessagePattern('remindersSeed')
  seed() {
    return this.remindersService.seeder();
  }

  @MessagePattern('createReminder')
  create(@Payload() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @MessagePattern('findAllReminders')
  findAll(@Payload() queries: QueriesDto) {
    return this.remindersService.findAll(queries);
  }

  @MessagePattern('findOneReminder')
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.remindersService.findOne(id);
  }

  @MessagePattern('updateReminder')
  // using unkown because with dto doesn't weeeeeeeeeeks
  patch(@Payload() updateReminderDto: unknown) {
    return this.remindersService.update(updateReminderDto as UpdateReminderDto);
  }

  @MessagePattern('removeReminder')
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.remindersService.remove(id);
  }
}
