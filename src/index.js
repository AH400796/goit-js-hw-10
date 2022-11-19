import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
let searchingCountry = null;
const { inputCountry, countryList, countryInfoCard } = {
  inputCountry: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfoCard: document.querySelector('.country-info'),
};

inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  searchingCountry = e.target.value.trim();
  if (searchingCountry.length < 1) {
    countryList.innerHTML = '';
  }
  fetchCountries(searchingCountry);
}

export { countryList, countryInfoCard, searchingCountry };
