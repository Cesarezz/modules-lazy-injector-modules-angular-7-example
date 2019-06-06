import { Component, OnInit } from '@angular/core';
import { Person } from '../../person';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-module1-list',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = this.personService.getPerson();
  }

}
