import { countryList, countryInfoCard } from './index';

const makeMarkupForCountriesList = function (arr) {
  const markup = arr
    .map(
      ({ name, flags }) => `<li class="country">
  <img class="country-flag" src="${flags.svg}" alt="${name.official}" width="70"/>
  <p class="country-name">${name.official}</p></li>`
    )
    .join('');

  countryList.innerHTML = markup;
};

const makeMarkupForCountryCard = function (arr) {
  const markup = arr.map(
    ({ name, flags, capital, languages, population }) =>
      `<div class="card-title">
  <img class="country-flag-card" src="${flags.svg}" alt="${name.official}" width="70" />
  <p class="country-name-card">${name.official}</p>
</div>
<p class="info"><span class="info-title">Capital: </span>${capital}</p>
<p class="info"><span class="info-title">Population: </span>${population}</p>
<p class="info"><span class="info-title">Languages: </span>${Object.values(languages).join(', ')}</p>`
  );

  countryInfoCard.innerHTML = markup;
};

const makeCountriesList = function () {
  countryInfoCard.innerHTML = '';
  countryInfoCard.classList.remove('card-style');
  countryList.classList.add('card-style');
};

const makeCountryCard = function () {
  countryList.innerHTML = '';
  countryList.classList.remove('card-style');
  countryInfoCard.classList.add('card-style');
};

const clearPage = function () {
  countryList.innerHTML = '';
  countryInfoCard.innerHTML = '';
  countryList.classList.remove('card-style');
  countryInfoCard.classList.remove('card-style');
};

export { makeMarkupForCountriesList, makeMarkupForCountryCard, makeCountriesList, makeCountryCard, clearPage };
