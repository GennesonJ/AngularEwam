import {Eval} from "../../Evaluation/modeles/eval";

export interface Restau {
  id : number,
  nom : string,
  adresse : string,
  evaluations : Eval[]
  noteMoyenne: string,

}
