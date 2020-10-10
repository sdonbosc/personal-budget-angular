// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { D3PieChartModel } from './d3-pie-chart-model.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
    budgetServerURL : string = "http://localhost:3000/budget";
    constructor(private http: HttpClient) { }

    getPersonalBudget(): Observable<D3PieChartModel[]> {
        return this.http.get<D3PieChartModel[]>(this.budgetServerURL)
        .pipe(
          catchError(this.handleError<D3PieChartModel[]>('getPersonalBudget', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}

