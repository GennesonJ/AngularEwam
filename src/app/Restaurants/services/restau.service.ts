import {Injectable} from '@angular/core';
import {Restau} from "../modeles/restau";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestauService {

  private restau: BehaviorSubject<Restau[]> = new BehaviorSubject<Restau[]>([]);

  //private listRestau : Restau[] = this.restau.subscribe()

  constructor(private httpClient: HttpClient) {
    this.loadRestau()
  }

  public getRestau(): Observable<Restau[]> {
    return this.restau;
  }

  public loadRestau(): void {
    this.httpClient.get<Restau[]>("http://localhost:3000/restaurants").subscribe(value => this.restau.next(value));
  }

  public addRestau(restau: Restau): void {
    this.httpClient.post<{}>("http://localhost:3000/restaurants", restau).subscribe(value => this.restau.next([...this.restau.getValue(), restau]));
  }


  // public getRestau(elemId: number) :Restau{
  //   return this.restau = this.restau.filter((restau: Restau) => restau.id === elemId) ;
  // }
}
