import {
  makeMarkupForCountriesList,
  makeMarkupForCountryCard,
  makeCountriesList,
  makeCountryCard,
  clearPage,
  searchingCountry,
} from './index';
import Notiflix from 'notiflix';

export const fetchCountries = function (name) {
  if (searchingCountry.length < 1) {
    clearPage();
    return;
  }
  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        clearPage();
      } else if (data.length > 1) {
        makeCountriesList();
        makeMarkupForCountriesList(data);
      } else if (data.length === 1) {
        makeCountryCard();
        makeMarkupForCountryCard(data);
      }
    })
    .catch(() => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      clearPage();
    });
};
