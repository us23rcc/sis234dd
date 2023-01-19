import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { SeriesEntity } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private repository: Repository<SeriesEntity>,
  ){}
  async create(CreateSeriesDto: CreateSeriesDto): Promise<SeriesEntity> {
      const SerieExist = await this.repository.findOneBy({
      id:CreateSeriesDto.id,
      titulo:CreateSeriesDto.titulo.trim(),
      sinopsis:CreateSeriesDto.sinopsis.trim(),
      director:CreateSeriesDto.director.trim(),
      duracion:CreateSeriesDto.duracion,
      anio_estreno:CreateSeriesDto.anio_estreno,
      });
      if (SerieExist) throw new ConflictException(`La Serie ya existe`);
  
    return this.repository.save({
      id:CreateSeriesDto.id,
      titulo:CreateSeriesDto.titulo.trim(),
      sinopsis:CreateSeriesDto.sinopsis.trim(),
      director:CreateSeriesDto.director.trim(),
      duracion:CreateSeriesDto.duracion,
      anio_estreno:CreateSeriesDto.anio_estreno,
    });
  }

  findAll() : Promise<SeriesEntity[]> {
    return this.repository.find();
    
  }

  async findOne(id: number) {
    const serie = await this.repository.findOne({   where: { id }   });
    if (!serie) throw new NotFoundException(`La Serie N° ${id} no existe`);
    return serie;
  }

  async update(id: number, UpdateSeriesDto: UpdateSeriesDto) :Promise<SeriesEntity> {
    const serie = await this.repository.findOneBy({ id });
    if (!serie) throw new NotFoundException(`La Serie Reproduccion ${id} no existe`);

    const updateSerie = Object.assign(serie, UpdateSeriesDto);
    return this.repository.save(updateSerie);
  }

  async remove(id: number) :Promise<void> {
    const eliSerie = await this.repository.findOneBy({ id });
    if (!eliSerie) throw new NotFoundException(`No existe Serie Reproduccion ${id} en DB`);
    await this.repository.delete(id) ; 
    //throw new NotFoundException(`${id} ELIMINADO  EXITOSAMENTE`);
  }
}
