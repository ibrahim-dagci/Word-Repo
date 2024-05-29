import {SERVRER_ADRESS} from '../../constants';

export default class UserService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = SERVRER_ADRESS;
  }

  async signIn(email: string, password: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/users/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (!response.user) throw Error(response.message);

    return response;
  }

  async signUp(
    userName: string,
    password: string,
    email: string,
    primaryLanguage: string,
  ): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/users/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
        primaryLanguage: primaryLanguage,
      }),
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (response.statusCode != 200) throw Error(response.message);

    return response;
  }

  async isAuthor(token: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/api/users/me`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        return res.json();
      })
      .catch(e => e);
    if (!response._id) throw Error(response.message);

    return response;
  }
}
