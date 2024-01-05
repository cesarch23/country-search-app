import { Component, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  placeholder:string = "Write hire the country";
  countries:Country[]=[];
  isLoading:Boolean=false;

   constructor(private countriesService:CountriesService){

   }

   searchCountry(country:string){
    this.isLoading=true;
      this.countriesService.getCountries(country).subscribe(countriesResp=>{
        this.countries=countriesResp;
        this.isLoading=false;
      })
   }


}
