import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
type Region =  "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  placeholder:string = "Write hire the region";
  countries:Country[]=[];
  isLoading=false;
  regions:Region[] = ["Africa" , "Americas" , "Asia" , "Europe" , "Oceania"]

  constructor(private countriesService:CountriesService){}

  searchByRegion(region:string)
  {
    console.log(region)
    this.isLoading=true;
    this.countriesService.getRegion(region).subscribe(resp=>{
     this.countries = resp;
     this.isLoading=false;
     console.log(this.regions)
    })
  }
}
