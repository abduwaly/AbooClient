/**
 * Created by Levi on 2018/1/29.
 */
import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LocateService{

  constructor(private http: Http) { }

  private blogUrl = 'blog/list';

  getLocation() : Promise<any>{
    return this.http.get(this.blogUrl)
      .toPromise()
      .then(response => console.log("??????????????",response))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
