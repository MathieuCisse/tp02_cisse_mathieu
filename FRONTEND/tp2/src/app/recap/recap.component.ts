import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  @Input() nom: string = "";
  @Input() prenom: string = "";
  @Input() adresse: string = "";
  @Input() cp: string = "";
  @Input() ville: string = "";
  @Input() pays: string = "";
  @Input() telephone: string = "";
  @Input() email: string = "";
  @Input() civilite: string = "";
  @Input() identifiant: string = "";
  @Input() motdepasse: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
