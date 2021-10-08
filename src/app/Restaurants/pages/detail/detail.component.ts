import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RestauService} from "../../services/restau.service";
import {Restau} from "../../modeles/restau";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  elemId: number = 0;
  restau: Restau = {
    nom: "",
    adresse: "",
    evaluations: [],
    id: 0,
    noteMoyenne: "/",
  };

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // this._activatedRoute.params.subscribe( (params: Params) => {
    //   this.elemId = params['id'];
    //   this.restau = RestauService.getRestau(this.elemId);
    // })


  }

}
