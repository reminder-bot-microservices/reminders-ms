import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateReminderDto {
  @IsString()
  title: string;

  @IsDate()
  date_to_remind: Date;

  @IsNumber({ allowNaN: false })
  @IsPositive()
  @Min(0)
  delay_to_notify: number;

  @IsOptional()
  @IsArray()
  repeat_on?: string[];

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsString()
  extra_information?: string;
}
