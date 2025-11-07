/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(
    private readonly carService: CarsService, // <-- Cambiado a 'carService' (camelCase)
  ) {}

  @Get()
  getAllCars() {
    return this.carService.findAll(); // <-- Usando 'carService'
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCardDto: CreateCarDto) {
    return createCardDto;
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: any )
    {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
