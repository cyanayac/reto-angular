import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firebase: AngularFireDatabase) { }
  clientList: AngularFireList<any>;


  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required)
  });

  getClients(){
    this.clientList = this.firebase.list('clients');
    return this.clientList.snapshotChanges();
  }

  insertClient(client){
    this.clientList.push({
      name: client.name,
      lastName: client.lastName,
      age: client.age,
      birthdate: client.birthdate
    });
  }
}
