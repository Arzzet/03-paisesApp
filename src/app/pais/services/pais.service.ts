import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlv3: string = 'https://restcountries.com/v3.1';
  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams()
      .set('fields', 'name,cca2,capital,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlv3}/name/${termino}`;	
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlv3}/capital/${termino}`;	
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo(id:string): Observable<Country>{
    const url = `${this.apiUrlv3}/alpha/${id}`;	
    return this.http.get<Country>(url);
  }

  buscarRegion(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlv3}/region/${termino}?params`;	
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }


}
