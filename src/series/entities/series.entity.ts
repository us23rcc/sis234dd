import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity('series')
export class SeriesEntity {
          @PrimaryColumn()
          @Generated('increment')
          id: number;
          
          @Column({length:250})
          titulo: string;
          
          @Column({length:5000})
          sinopsis: string;
          
          @Column({length:100})
          director: string;
          
          @Column()
          duracion: number; 
          
          @Column()
          anio_estreno: number;
}
