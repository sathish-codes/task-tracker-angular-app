import { Component } from '@angular/core';
import { FormControl,FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private addRowForm: FormGroup = this.builder.group({});
  private submitted = false;
  constructor(private builder: FormBuilder){}

  ngOnInit() {
       this.addRowForm = this.builder.group({
            tname: ['', [Validators.required, Validators.minLength(1)]],
            tdate: ['', [Validators.required, Validators.minLength(1)]],
            tassign: ['', [Validators.required, Validators.minLength(1)]]
        })
    }

  ngOnChanges() {
    
  }

  get formErrors() { return this.addRowForm.controls; }

  handleSubmit(){
    this.submitted = true;
    if (this.addRowForm.invalid) { return; }
    this.names.push({
      name: this.addRowForm.value.tname,
      date: this.addRowForm.value.tdate,
      assigned: this.addRowForm.value.tassign
    })      
  }

  deleteRow(item){
    for (let list of this.names) {
      if(item.name===list.name)
      this.names.pop();
    }
  }

  names = [{
        name: 'Test Task#1',
        date: '12/01/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#2',
        date: '12/02/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#3',
        date: '12/03/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#4',
        date: '12/04/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#5',
        date: '12/05/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#6',
        date: '12/06/2012',
        assigned: 'John Doe'
      }, {
        name: 'Test Task#7',
        date: '12/07/2012',
        assigned: 'John Doe'
      }];

 };
