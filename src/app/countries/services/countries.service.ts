import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of } from 'rxjs';

const  baseUrl= 'https://restcountries.com/v3.1';
@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http:HttpClient) { }

  getCountryDetails(code:string):Observable<Country | null>{
    const url = `${baseUrl}/alpha/${code}`;
//    https://restcountries.com/v3.1/alpha/{code}
    return this.http.get<Country[]>(url).pipe(
      map(countries=>countries.length > 0? countries[0]: null ),
      catchError(()=>of(null))
    );

  }

  getCapitals(capital:string):Observable<Country[]>{
    const url = `${baseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(()=>of([]))
    );
  }
  getCountries(country:string):Observable<Country[]>{
    const url = `${baseUrl}/name/${country}?fullText=true`;
    //https://restcountries.com/v3.1/name/peru?fullText=true
    return this.http.get<Country[]>(url).pipe(
      catchError(()=>of([]))
    );
  }
  getRegion(region:string):Observable<Country[]>{
    const url = `${baseUrl}/region/${region}`;
    //https://restcountries.com/v3.1/region/europe

    return this.http.get<Country[]>(url).pipe(
      catchError(()=>of([]))
    );
  }

}
