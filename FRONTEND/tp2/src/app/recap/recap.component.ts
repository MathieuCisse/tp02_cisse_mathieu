import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent {

  @Input() nom: string = "";        //décorateur de l'input dédié au nom de l'utilisateur
  @Input() prenom: string = "";     //décorateur de l'input dédié au prénom de l'utilisateur
  @Input() adresse: string = "";    //décorateur de l'input dédié au adresse de l'utilisateur
  @Input() cp: string = "";         //décorateur de l'input dédié au code postal de l'utilisateur
  @Input() ville: string = "";      //décorateur de l'input dédié au ville de l'utilisateur
  @Input() pays: string = "";       //décorateur de l'input dédié au pays de l'utilisateur
  @Input() telephone: string = "";  //décorateur de l'input dédié au téléphone de l'utilisateur
  @Input() email: string = "";      //décorateur de l'input dédié au email de l'utilisateur
  @Input() civilite: string = "";   //décorateur de l'input dédié au civilite de l'utilisateur
  @Input() identifiant: string = "";//décorateur de l'input dédié au identifiant de l'utilisateur
  @Input() motdepasse: string = ""; //décorateur de l'input dédié au mot de passe de l'utilisateur

  /**
   * Constructeur
   */
  constructor() { }
}
