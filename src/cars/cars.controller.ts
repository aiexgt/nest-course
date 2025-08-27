import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars: string[] = ['Toyota', 'Honda', 'Ford'];


    @Get()
    getAllCars(): string[] {
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param('id') id: string ): string {
        return this.cars[+id];
    }

}
