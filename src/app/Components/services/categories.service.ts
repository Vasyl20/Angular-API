import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

constructor(private http: HttpClient) { }

    getCategories(): Observable<ApiCollectionResponse> {
       return this.http.get<ApiCollectionResponse> ('https://localhost:44357/api/category')
    }

}
