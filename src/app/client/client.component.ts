import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor( private clientService: ClientService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formGroup = this.clientService.form;
  formControls = this.clientService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if(this.clientService.form.valid){
      if (this.clientService.form.get('$key').value == null)
        this.clientService.insertClient(this.clientService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.clientService.form.reset();
    }

  }

}
