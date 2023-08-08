import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ){}

  create(createEventDto: CreateEventDto) {
    return this.eventRepository.save(createEventDto);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  update( eventId: number, updateEventDto: UpdateEventDto){
      return this.eventRepository.update(eventId, updateEventDto)
  }

  show(eventId: number){
      return this.eventRepository.findOne({where: {id: eventId}});
  }

  delete(eventId: number){
      return this.eventRepository.delete(eventId);
  }
}
