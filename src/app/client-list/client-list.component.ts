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

  ngOnInit() {
    this.clientService.getClients().subscribe(
      list => {
        this.clientArray = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

}
