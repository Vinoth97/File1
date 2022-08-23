import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  fName !: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.fName = new FormGroup({username :new FormControl('vinoth'), email : new FormControl('vinoth@gamil.com'), password : new FormControl('')})
  }
  onsubmit(){
    console.log(this.fName.value)
  }

}
