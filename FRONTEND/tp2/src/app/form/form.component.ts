import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formIsValid: boolean = false;
  nom: string = "";
  prenom: string = "";
  adresse: string = "";
  cp: string = "";
  ville: string = "";
  pays: string = "";
  telephone: string = "";
  email: string = "";
  civilite: string = "";
  identifiant: string = "";
  motdepasse: string = "";

  constructor() { }

  ngOnInit(): void {}

  sendToRecap(registerForm: NgForm) {
    this.formIsValid = registerForm.valid ?? false;
  }

}
