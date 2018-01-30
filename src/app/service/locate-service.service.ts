/**
 * Created by Levi on 2018/1/29.
 */
import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LocateService{

  constructor(private http: Http) { }

  // private blogUrl = 'blog/list';
  private locUrl = 'json/'; //'json/8.8.8.8'

  getLocation() : Promise<any>{
    return this.http.get(this.locUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
