import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {


  @Input()
  countries:Country[]=[];
  displayedColumns: string[] = ['flag', 'name', 'capital', 'population', 'moreInfo'];


}
