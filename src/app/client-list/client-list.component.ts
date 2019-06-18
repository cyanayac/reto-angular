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
  promAge= "";

  ngOnInit() {
    this.clientService.getClients().subscribe(
      
      list => {
        this.clientArray = list.map(item =>{
          return {
            $key: item.key,
            deathDate: this.add_years(parseFloat(item.payload.val().age)),
            ...item.payload.val()
          };
        });
        this.calculateProm()
      });
      
  }

  // Canculando edad promedio
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

  // Obteniendo fecha aleatoria con la edad
  add_years(n) {
    let dt = new Date();
    let mth = new Date(dt.setFullYear(dt.getFullYear() + n));      
    let dy = new Date(mth.setMonth(mth.getMonth() + n)); 
    return new Date(dy.setDate(dy.getDate() + n)); 
  }

}
