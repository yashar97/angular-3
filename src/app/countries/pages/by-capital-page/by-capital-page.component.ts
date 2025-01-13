import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(c => {
        this.countries = c;
        console.log(this.countries)
      })
  }

}
