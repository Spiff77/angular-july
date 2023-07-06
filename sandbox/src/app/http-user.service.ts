import { Injectable } from '@angular/core';
import {User} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  private url = `${environment.base_api_url}users`

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  add(value: User): Observable<User> {
    return this.http.post<User>(this.url, value)

  }
}
/*
- Environements
 1 - Générer l'environement: ng generate environments
 2 - Associer des valeurs dans ces environments (voir git - Sandbox)
 3 - Utiliser ces valeurs dans le service (voir git - Sandbox, HttpUserService)

- Deploy
 1 - Installer http-server 'npm install -g http-server'
 2 - Build du projet grace à 'ng build --configuration=production'
 3 - Deplacement en console dans ./dist/[projectName]
 4 - Lancer http-server
 5 - Enjoy


 */
