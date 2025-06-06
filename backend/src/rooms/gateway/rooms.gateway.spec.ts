import { Test, TestingModule } from '@nestjs/testing';

import { RoomsService } from '../service/rooms.service';
import { RoomsInMemoryRepository } from '../repository/rooms.in-memory.repository';
import { ClientsService } from '../../clients/service/clients.service';
import { KeywordsInMemoryRepository } from '../../keywords/repository/keywords.in-memory.repository';

import { RoomsGateway } from './rooms.gateway';

describe('RoomsGateway', () => {
  let gateway: RoomsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsGateway, RoomsService, RoomsInMemoryRepository, ClientsService, KeywordsInMemoryRepository],
    }).compile();

    gateway = module.get<RoomsGateway>(RoomsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
