import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  placeholder:string = "Write hire the capital";
  countries:Country[]=[];
  isLoading:Boolean=false;

  constructor(private countriesService:CountriesService){

  }
  searchCapital(value:string){
    this.isLoading=true;
    this.countriesService.getCapitals(value).subscribe((resp)=>{
      this.countries=resp;
      this.isLoading=false;
    })
  }


}
