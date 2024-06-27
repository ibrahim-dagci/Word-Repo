import {Platform} from 'react-native';
import {SERVRER_ADRESS} from '../../constants';

export default class UserWordService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = SERVRER_ADRESS;
  }

  async getUserWords(token: string, lan1: string, lan2: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/user_words/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({lan1, lan2}),
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (!Array.isArray(response)) throw Error(response.message);

    return response;
  }

  async createUserWord(
    token: string,
    uri: string,
    wordData: {
      primaryLanguage: string;
      currentLanguage: string;
      word: string;
      mean: string;
    },
  ): Promise<any> {
    const fileUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const formData = new FormData();
    formData.append('audio', {
      uri: fileUri,
      name: 'audio.mp4',
      type: 'audio/mp4',
    });
    formData.append('wordData', JSON.stringify(wordData));
    const response = await fetch(`${this.baseUrl}/api/user_words/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);

    if (response.statusCode != 200) throw Error(response.message);

    return response;
  }
}
