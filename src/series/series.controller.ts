import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { ApiAcceptedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SeriesEntity } from './entities/series.entity';

@ApiTags('Series')
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  @ApiAcceptedResponse ({type: SeriesEntity})
  create(@Body() createSeriesDto: CreateSeriesDto) {
    return this.seriesService.create(createSeriesDto);
  }

  @Get()
  @ApiOkResponse({ type: SeriesEntity, isArray: true })
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SeriesEntity })
  findOne(@Param('id') id: string) {
    return this.seriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SeriesEntity })
  update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
    return this.seriesService.update(+id, updateSeriesDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SeriesEntity })
  remove(@Param('id') id: string) {
    return this.seriesService.remove(+id);
  }
}
