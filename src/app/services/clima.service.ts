import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = 'e14076ba353d28221666cb1ea2b08b88';
  keyp ='be665555ac9a1636a085b7a69869a89c';

  constructor(private http: HttpClient) { 

  }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }
}
