import { Component, OnInit } from '@angular/core';
import {Restau} from "../../modeles/restau";
import {RestauService} from "../../services/restau.service";

@Component({
  selector: 'app-restau',
  templateUrl: './restau.component.html',
  styleUrls: ['./restau.component.css']
})
export class RestauComponent implements OnInit {

  public restaus: Restau[] = [];

  constructor(private restauService: RestauService) { }

  ngOnInit(): void {
    this.loadRestau();
  }

  private loadRestau(): void {
    this.restauService.getRestau().subscribe(value => this.restaus = value);
  }

  public restauAdded(restau: Restau): void {
    this.restauService.addRestau(restau);
  }

}
