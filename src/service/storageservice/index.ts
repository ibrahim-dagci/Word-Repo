import storage from '../../storage';
import {
    LanguageService
} from '../webservice';

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
