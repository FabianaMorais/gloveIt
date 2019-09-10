import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from  './list';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/glove/backend";

  constructor(private httpClient: HttpClient) { }

  readList(): Observable<List[]>{
    return this.httpClient.get<List[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createList(list: List): Observable<List>{
    return this.httpClient.post<List>(`${this.PHP_API_SERVER}/api/create.php`, list);
  }
  
  updateList(list: List){
    return this.httpClient.put<List>(`${this.PHP_API_SERVER}/api/update.php`, list);   
  }

 
  sortListAsc(): Observable<List[]>{
    return this.httpClient.get<List[]>(`${this.PHP_API_SERVER}/api/sortAsc.php`);
  }

  sortListDsc(): Observable<List[]>{
    return this.httpClient.get<List[]>(`${this.PHP_API_SERVER}/api/sortDsc.php`);
  }
}
