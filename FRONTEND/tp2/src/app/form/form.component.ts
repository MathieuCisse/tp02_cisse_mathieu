import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formIsValid: boolean = false; //si le formulaire est valide lors du submit
  nom: string = "";             //nom de l'utilisateur
  prenom: string = "";          //prenom de l'utilisateur
  adresse: string = "";         //adresse de l'utilisateur
  cp: string = "";              //code postal de l'utilisateur
  ville: string = "";           //ville de l'utilisateur
  pays: string = "";            //pays de l'utilisateur
  telephone: string = "";       //téléphone de l'utilisateur
  email: string = "";           //email de l'utilisateur
  civilite: string = "";        //civilitéé de l'utilisateur
  identifiant: string = "";     //identifiant de l'utilisateur
  motdepasse: string = "";      //mot de passant de l'utilisateur

  /**
   * Constructeur
   */
  constructor() { }

  /**
   * Fonction appelé à la validation du formulaire
   * Modification de l'attribut formIsValid si le formulaire est valide
   * Si le formulaire est valide alors le ngIf dans le template laissera passer les données au composant récapitulatif
   * @param registerForm
   */
  sendToRecap(registerForm: NgForm) {
    this.formIsValid = registerForm.valid ?? false;
  }

}
