import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { List } from '../list'
import { toArray } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list:  List[];
  registerForm: FormGroup;
  submitted = false;
  
  selectedList:  List  = { id :  null , name: null, flag:  null};
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.apiService.readList().subscribe((list: List[])=>{
    this.list = list;
    })
    console.log(this.list);

    this.registerForm = this.formBuilder.group({
           name: ['',  [Validators.required, Validators.maxLength(255)]],
        })
    }

   get f() { return this.registerForm.controls;}


   onSubmit(form) {
    this.submitted = true;
 
    if (this.registerForm.invalid) {
      console.log('INVALIDO')
      return;
    }
    
     window.location.reload();
    this.apiService.createList(form.value).subscribe((list: List)=>{

    });

    
}
  onChange(x){
    this.apiService.updateList(x).subscribe((list: List)=>{
      });

  }

  sortAsc(){
    this.apiService.sortListAsc().subscribe((list: List[])=>{
    this.list = list;
    })
  }

  sortDsc(){
    this.apiService.sortListDsc().subscribe((list: List[])=>{
    this.list = list;
    })
  }

}
