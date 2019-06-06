import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person.service';
import { Person } from '../../person';


@Component({
  selector: 'app-order-list',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = this.personService.getPerson();
  }

}
