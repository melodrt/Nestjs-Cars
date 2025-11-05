/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carService: CarsService, // <-- Cambiado a 'carService' (camelCase)
  ) {}

  @Get()
  getAllCars() {
    return this.carService.findAll(); // <-- Usando 'carService'
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carService.findOneById(id); // <-- Eliminado el '+' redundante
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      ok: true,
      method: 'POST',
    };
  }

  @Patch(':id')
  updateCar(@Body() body: any) {
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
