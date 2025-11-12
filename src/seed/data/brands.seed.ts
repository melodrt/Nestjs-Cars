import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Volkswagen',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mercedes',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'BMW',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Nissan',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Hyundai',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Subaru',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Lexus',
        createdAt: new Date().getTime(),
    },  
    {
        id: uuid(),
        name: 'Mazda',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mitsubishi',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Porsche',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Rolls-Royce',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
    },  
    
]