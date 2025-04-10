import { IsBoolean, IsString } from 'class-validator';
import { PaginationDto } from './';
import type { TFiltersRange } from 'src/types';
import { Type } from 'class-transformer';

export class QueriesDto extends PaginationDto {
  @IsString()
  range?: TFiltersRange = 'week';

  @IsBoolean()
  @Type(() => Boolean)
  completed?: boolean = false;
}
