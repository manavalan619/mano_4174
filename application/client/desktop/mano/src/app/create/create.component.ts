import { Component, OnInit } from '@angular/core';

import { CreateService } from './create.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

mano = {
   name: '',
   email: ''
};

  constructor(
private createService: CreateService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.createService.GpCreate(this.mano)
  .subscribe(
    data => {
       console.log('data created successfully');
this.mano.name = '';

this.mano.email = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}