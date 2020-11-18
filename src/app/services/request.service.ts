import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => this.http.get(url,
      { headers: { 'content-type': 'application/json'},
        responseType: 'json',
        observe: 'response'}
      )
        .subscribe(
          (data) => {
            if (data.status === 204) {
              resolve();
            } else if (data.body && data.ok) {
              // @ts-ignore
              resolve(data.body);
            } else {
              reject(data.body ? data.body : '');
            }
          },
          (error) => {
            reject(error);
          }
        )
    );
  }

  getAll<T>(url: string): Promise<T[]> {
    return new Promise((resolve, reject) => this.http.get(url, {
      headers: { 'content-type': 'application/json'},
      responseType: 'json',
      observe: 'response'})
      .subscribe(
        (data) => {
          if (data.status === 204) {
            resolve([]);
          } else if (data.body && data.ok) {
            // @ts-ignore
            resolve(data.body);
          } else {
            reject(data.body ? data.body : []);
          }
        },
        (error) => {
          reject(error);
        }
      )
    );
  }

  add<T>(url: string, element: T): Promise<T> {
    const urlToSend = url;
    return new Promise((resolve, reject) => this.http.post(urlToSend, JSON.stringify(element), {
      headers: { 'content-type': 'application/json'},
      responseType: 'json',
      observe: 'response'})
      .subscribe(
        (data) => {
          if (data.body && data.ok) {
            // @ts-ignore
            resolve(data.body);
          } else {
            reject(data.body);
          }
        },
        (error) => {
          reject(error);
        }
      )
    );
  }

  save<T, R>(url: string, element: T): Promise<R> {
    const urlToSend = url;
    return new Promise((resolve, reject) => this.http.post(urlToSend, JSON.stringify(element), {
      headers: { 'content-type': 'application/json'},
      responseType: 'json',
      observe: 'response'})
      .subscribe(
        (data) => {
          if (data.body && data.ok) {
            // @ts-ignore
            resolve(data.body);
          } else {
            reject(data.body);
          }
        },
        (error) => {
          reject(error);
        }
      )
    );
  }

  update<T, R>(url: string, element: T): Promise<R> {

    return new Promise((resolve, reject) => this.http.put(url, JSON.stringify(element), {
      headers: { 'content-type': 'application/json'},
      responseType: 'json',
      observe: 'response'})
      .subscribe(
        (data) => {
          if (data.body && data.ok) {
            // @ts-ignore
            resolve(data.body);
          } else {
            reject(data.body);
          }
        },
        (error) => {
          reject(error);
        }
      )
    );
  }

  delete(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => this.http.delete(url, {
      headers: { 'content-type': 'application/json'},
      responseType: 'json',
      observe: 'response'})
      .subscribe(
        (data) => {
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      )
    );
  }

}
