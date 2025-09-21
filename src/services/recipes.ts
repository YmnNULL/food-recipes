import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Recipes {
    private httpClient: HttpClient = inject(HttpClient);

    getFoodDataByName(name: string | null): Observable<any> {
        return this.httpClient.get(environment.baseUrl + `search?q=${name}`)
    }

    getSpecificRecipeData(id: string | null): Observable<any> {
        return this.httpClient.get(environment.baseUrl + `get?rId=${id}`)
    }
}
