import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  country?: Country;
  constructor(
    private countriesService: CountriesService,
    private activedRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    // this.activedRoute.params.subscribe((resp) => {
    //   this.countriesService.getCountryDetails(resp['id']).subscribe((re) =>
    //     {
    //         if (!re) {
    //           return this.router.navigateByUrl('');
    //         }
    //         return console.log('se tiene un  pais');
    //     }
    //   );
    // });

    //FORMA 2

    this.activedRoute.params.pipe(
        switchMap(params=>this.countriesService.getCountryDetails(params['id']))
    ).subscribe(count=>{
      if(!count) return this.route.navigateByUrl('');
      return this.country=count;
    })
  }
}
