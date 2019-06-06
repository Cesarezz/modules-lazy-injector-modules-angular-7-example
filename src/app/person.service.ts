import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonService {

  public person: Person = {
    name: "Paco",
    surname: "Sánchez",
    age: 18
  };

  getPerson(): Person {
      return this.person;
  }

  constructor() { }
}
