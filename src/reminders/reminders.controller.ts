import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PaginationDto } from 'src/common/dtos';

@Controller()
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @MessagePattern('createReminder')
  create(@Payload() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @MessagePattern('findAllReminders')
  findAll(@Payload() paginationDto: PaginationDto) {
    return this.remindersService.findAll(paginationDto);
  }

  @MessagePattern('findOneReminder')
  findOne(@Payload() id: number) {
    return this.remindersService.findOne(id);
  }

  @MessagePattern('updateReminder')
  update(@Payload() updateReminderDto: UpdateReminderDto) {
    return this.remindersService.update(
      updateReminderDto.id,
      updateReminderDto,
    );
  }

  @MessagePattern('removeReminder')
  remove(@Payload() id: number) {
    return this.remindersService.remove(id);
  }
}
