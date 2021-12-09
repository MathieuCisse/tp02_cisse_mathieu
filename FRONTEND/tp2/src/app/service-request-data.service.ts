import { Injectable } from '@angular/core';

@Injectable()
export class ServiceRequestDataService {

  clients: Array<any> = new Array<any>();
  catalogues: Array<{ libelle: string }> = new Array<{ libelle: string }>();

  constructor() { }

  public postClient(parametreClient: Array<any>) : boolean {
    return false;
  }

  public getClients() : Array<any>{
    return new Array<any>();
  }

  public postLogin(identifiant: string, motdepasse: string) : boolean {

    const bonIdentifiant :string = "mathieu";
    const bonMotdepasse :string = "mathieu";

    return identifiant == bonIdentifiant && motdepasse == bonMotdepasse;
  }

  public getCatalogue() : Array<{ libelle: string }> {
    return [
      { libelle: "Premierproduit" },
      { libelle: "Deuxiemeproduit" },
    ]
  }
}
