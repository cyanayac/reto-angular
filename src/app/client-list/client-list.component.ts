import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor( private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients();
  }

}
