import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Validation } from '../utils/utils.validation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private static url = 'https://testbankapi.firebaseio.com/clients.json';

  constructor(private htpp: HttpClient) {

  }

  public getUsers(): Promise<User[]> {
    return new Promise(
      (resolve , rejec) => {
        const users: User[] = [];
        this.htpp.get(DataService.url).subscribe(
          (response: User[]) => {
            // tslint:disable-next-line: forin
            for (const user in response) {
              const us = {
                firstname: response[user].firstname,
                birthdate: new Date(response[user].birthdate),
                identification : parseInt(''+response[user].identification),
                lastname : response[user].lastname,
              };
              if (Validation.validateExist(us , users)) {
               users.push(us);
              }
            }
            resolve(users);
          } , (error) => {
            console.log('Error' , error);
            rejec('error');
          }
        );
      }
    );
  }

  saveUser(info: any) {
    console.log('mostrando en Data.service info:', info);
    return this.htpp.post(DataService.url, info);
  }
}
