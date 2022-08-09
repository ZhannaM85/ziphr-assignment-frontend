import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.scss']
})
export class NewToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('New To Do');
  }

}
