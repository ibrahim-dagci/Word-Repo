import {err} from 'react-native-svg';
import {SERVRER_ADRESS} from '../constants';

export default class Websercice {
  private baseUrl: string;
  private userName: string;
  private password: string;

  constructor(userName: string, password: string) {
    this.baseUrl = SERVRER_ADRESS;
    this.userName = userName;
    this.password = password;
  }

  async signIn(): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/users/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: this.userName,
        password: this.password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (!response.user) throw Error(response.message);

    return response;
  }
}
