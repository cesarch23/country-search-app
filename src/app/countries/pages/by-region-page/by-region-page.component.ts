import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/regions.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  placeholder:string = "Write hire the region";
  countries:Country[]=[];
  region:Region="";
  isLoading=false;
  regions:Region[] = ["Africa" , "Americas" , "Asia" , "Europe" , "Oceania"];


  constructor(private countriesService:CountriesService){}
  ngOnInit(): void {
    this.countries= this.countriesService.storage.byRegion.countries;
    this.region=this.countriesService.storage.byRegion.region;
  }

  searchByRegion(region:Region)
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
