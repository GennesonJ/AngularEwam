import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Restau} from "../../modeles/restau";

@Component({
  selector: 'app-restau-form',
  templateUrl: './restau-form.component.html',
  styleUrls: ['./restau-form.component.css']
})
export class RestauFormComponent implements OnInit {

  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() restauAdded = new EventEmitter<Restau>();

  public restau: Restau = {
    nom: "",
    adresse: "",
    evaluations: [],
    id: 0,
    noteMoyenne: "/",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.restauAdded.emit(this.restau);
      this.restau = {
        nom: "",
        adresse: "",
        evaluations: [],
        id: 0,
        noteMoyenne: "/",
      }
    }
  }

}
