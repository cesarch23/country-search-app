import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Storage } from '../interfaces/storage.interface';
import { Region } from '../interfaces/regions.type';

const  baseUrl= 'https://restcountries.com/v3.1';
@Injectable({providedIn: 'root'})
export class CountriesService {

  public storage: Storage = {
    byCapital: { searchTerm: "", countries:  [] },
    byCountry: { searchTerm: "", countries:  [] },
    byRegion:  { region: ""    , countries:  [] }
  }

  constructor(private http:HttpClient) {
    this.loadLocalStorage();

  }

  saveStorage(){
    localStorage.setItem("storage",JSON.stringify(this.storage));
  }
  loadLocalStorage(){
    const storeValue = localStorage.getItem("storage");
    if(storeValue) this.storage= JSON.parse(storeValue);
  }

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
    ).pipe(
      tap((countries)=>{
        this.storage.byCapital ={searchTerm:capital, countries:countries };
        this.saveStorage();

      })
    );
  }
  getCountries(country:string):Observable<Country[]>{
    const url = `${baseUrl}/name/${country}?fullText=true`;
    //https://restcountries.com/v3.1/name/peru?fullText=true
    return this.http.get<Country[]>(url).pipe(
      catchError(()=>of([]))
    ).pipe(
      tap(countries=>{
        this.storage.byCountry={ searchTerm:country, countries:countries };
        this.saveStorage();

      })
    );
  }
  getRegion(region:Region):Observable<Country[]>{
    const url = `${baseUrl}/region/${region}`;
    //https://restcountries.com/v3.1/region/europe

    return this.http.get<Country[]>(url).pipe(
      catchError(()=>of([]))
    ).pipe(
      tap(countries=>{
        this.storage.byRegion = {countries:countries,region:region};
        this.saveStorage();

      })
    );
  }

}
