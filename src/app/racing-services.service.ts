import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RacingServicesService {

  constructor(private http:Http) { }
    getData ()
   {

    return this.http.get('http://127.0.0.1:8000/applicant').map((res) => res.json())

   }
  }
