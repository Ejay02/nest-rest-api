import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'This action returns all items.';
  }

  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} item.`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    // return 'This action adds an item.';
    return `Name: ${createItemDto.name} 
    Description: ${createItemDto.description} 
    Qty: ${createItemDto.qty}`;
  }

  @Put('/:id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `This action updates item #${id} - Name: ${updateItemDto.name} `;
  }

  @Delete('/:id')
  delete(@Param('id') id): string {
    return `This action removes item #${id}.`;
  }
}
