import { Injectable, NotFoundException } from '@nestjs/common'; // ¡Añade NotFoundException aquí!
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: uuid(),
      brand: 'Mazda',
      model: 'CX-5',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      // Ahora NotFoundException estará disponible
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }
}
