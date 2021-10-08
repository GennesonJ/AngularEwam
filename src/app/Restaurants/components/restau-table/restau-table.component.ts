import {Component, Input, OnInit} from '@angular/core';
import {Restau} from "../../modeles/restau";
import {RestauService} from "../../services/restau.service";

@Component({
  selector: 'app-restau-table',
  templateUrl: './restau-table.component.html',
  styleUrls: ['./restau-table.component.css']
})
export class RestauTableComponent implements OnInit {

  @Input() restaus: Restau[] =[];

  constructor(private service:RestauService) { }

  ngOnInit(): void {
    this.service.getRestau().subscribe(value => this.restaus = value);

  }

}
