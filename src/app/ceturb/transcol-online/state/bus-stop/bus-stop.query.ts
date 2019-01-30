import { QueryEntity } from '@datorama/akita';
import { BusStopsState, BusStopsStore } from './bus-stop.store';
import { BusStop } from './bus-stop.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BusStopsQuery extends QueryEntity<BusStopsState, BusStop> {
  constructor(protected store: BusStopsStore) {
    super(store);
  }
}
