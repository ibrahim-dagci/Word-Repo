import {LanguageService} from '../webservice';
import storage from '../../storage';

export const fetchAndSaveLanguages = async () => {
  await new LanguageService()
    .getAllLanguages()
    .then(res => {
      storage.set('languages', JSON.stringify(res));
    })
    .catch(e => {
      throw Error(e.message);
    });
};
