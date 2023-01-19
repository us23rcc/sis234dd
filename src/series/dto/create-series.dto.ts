import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateSeriesDto {

          @ApiProperty()
          readonly id: number;

          @ApiProperty()
          @IsNotEmpty({message: 'El campo Titulo es obligatorio'})
          @IsString({ message: 'El campo nombre debe ser tipo cadena' })
          readonly titulo: string;

          @ApiProperty()
          @MinLength(10, { message: 'El campo sinopsis debe ser minimo 50 caractares' })
          @IsNotEmpty({message: 'El campo sinopsis es obligatorio'})
          readonly sinopsis: string;

          @ApiProperty()
          @IsNotEmpty({message: 'El campo director nombre es obligatorio'})
          readonly director: string;

          @ApiProperty()
          @IsNotEmpty({message: 'El campo duracion es obligatorio'})
          @IsNumber({}, { message: 'El campo Duracion debe ser tipo numérico' })
          readonly duracion: number;

          @ApiProperty()
          @IsNotEmpty({message: 'El campo año de estreno es obligatorio'})
          @IsNumber({}, { message: 'El campo Año de estreno debe ser tipo numérico' })
          readonly anio_estreno: number;
}
