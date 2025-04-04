import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [PrismaModule, RemindersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
