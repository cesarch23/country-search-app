import { Country } from "./country.interface";
import { Region } from "./regions.type";

export interface Storage
{
  byCapital:byCapitalCountries,
  byRegion:byRegionCountries,
  byCountry:byCountry
}
export interface byCapitalCountries{
  searchTerm:string,
  countries:Country[]
}
export interface byRegionCountries{
  region:Region,
  countries:Country[]
}
export interface byCountry{
  searchTerm:string,
  countries:Country[]
}
