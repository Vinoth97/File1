import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tuesday',
  templateUrl: './task-tuesday.component.html',
  styleUrls: ['./task-tuesday.component.css']
})
export class TaskTuesdayComponent implements OnInit {

  constructor() { }
  show: boolean= false
  showButtonStudent : boolean= false
  showButtonTeacher : boolean = false
  teacherInput = false
  selectedValue = ''
  name :any = ''
  nameOfStudent = false
  ngOnInit(): void {
  }
  showData(){
    this.show = true
  }
  showCategory(event:any){
    this.selectedValue = event.target.value
    if(this.selectedValue =='Student')
    {
      this.showButtonStudent =true
      this.showButtonTeacher = false
      this.teacherInput= false
    }
    else if(this.selectedValue == 'Teacher')
    {
      this.showButtonStudent = false
      this.showButtonTeacher = true
      this.nameOfStudent = false
    }
  }
  showStudentName(studentName : any){
    this.nameOfStudent = true
    this.teacherInput= false
    this.name= studentName
    
  } 
  showTeacherInput(){
    this.teacherInput=true
    this.nameOfStudent = false
  }
}
