import { IsString } from 'class-validator';
import { PaginationDto } from './';
import type { TFiltersRange } from 'src/types';

export class QueriesDto extends PaginationDto {
  @IsString()
  range?: TFiltersRange = 'week';
}
