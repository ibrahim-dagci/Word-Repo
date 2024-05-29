import {SERVRER_ADRESS} from '../../constants';

export default class LanguageService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = SERVRER_ADRESS;
  }

  async getAllLanguages(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/languages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (!Array.isArray(response)) throw Error(response.message);

    return response;
  }
}
