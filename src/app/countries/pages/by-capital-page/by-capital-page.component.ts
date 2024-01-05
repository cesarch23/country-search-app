import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  placeholder:string = "Write hire the capital";
  countries:Country[]=[];
  initialSearchTerm:string="";
  isLoading:Boolean=false;
  st!:Storage;
  constructor(private countriesService:CountriesService){

  }

  ngOnInit(): void {
    // this.st=JSON.parse(localStorage.getItem("storage") || "");
    // if(this.st['byCapital'].searchTerm){
    //   this.countries=this.st['byCapital'].countries;
    //   this.initialSearchTerm=this.st['byCapital'].searchTerm;
    // }

    this.countries= this.countriesService.storage.byCapital.countries;
    this.initialSearchTerm= this.countriesService.storage.byCapital.searchTerm;
  }

  searchCapital(value:string){
    this.isLoading=true;
    this.countriesService.getCapitals(value).subscribe((resp)=>{
      this.countries=resp;
      this.isLoading=false;
    })
  }


}
