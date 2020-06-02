import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Computer } from '../models/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  brand = ['Dell', 'HP', 'Apple', 'Asus'];
  type = ['Portable', 'Fixe', 'Tablette hybride'];
  category = ['Gaming', 'Bureautique', 'Premier prix'];
  urlApi = 'http://localhost:8000/api/computers';

  constructor(private httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]>{
    return this.httpClient.get<Computer[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getComputerById(id: number): Observable<Computer>{
    return this.httpClient.get<Computer>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addComputer(computer: Computer):Observable<Computer>{
    computer.dateEnterStock = new Date();
    return this.httpClient.post<Computer>(this.urlApi, computer).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editComputer(computerToUpdate: Computer): Observable<Computer>{
    return this.httpClient.put<Computer>(this.urlApi + '/' + computerToUpdate.id, computerToUpdate).pipe(
      catchError(this.handleError)
    );
  }

  deleteComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.urlApi + '/' + computer.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
