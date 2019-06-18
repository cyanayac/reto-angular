import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor( private clientService: ClientService) { }
  clientArray = [];
  promAge= ""

  ngOnInit() {
    this.clientService.getClients().subscribe(
      list => {
        this.clientArray = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.calculateProm()
      });
      
  }

  calculateProm(){
    let numClients = this.clientArray.length;
    let sumAge = 0;
    
    if(numClients > 0){
      for (let client of this.clientArray) {
        sumAge = sumAge + parseFloat(client.age);
      }
      this.promAge = (sumAge/ numClients).toFixed(2);
      console.log(this.promAge); 
    }

  }

}
