import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpInternalService {
	protected headers = new HttpHeaders();

	constructor(protected http: HttpClient) {}

	protected getHeaders(): HttpHeaders {
		return this.headers;
	}

	protected getHeader(key: string): string | null {
		return this.headers.get(key);
	}

	protected setHeader(key: string, value: string): void {
		this.headers = this.headers.set(key, value);
	}

	protected deleteHeader(key: string): void {
		this.headers = this.headers.delete(key);
	}

	public getRequestString(url: string, httpParams?: any): Observable<any> {
		return this.http.get(this.buildUrl(url), {
			headers: this.getHeaders(),
			params: httpParams,
			responseType: 'text',
		});
	}

	public getRequest<T>(url: string, httpParams?: any): Observable<T> {
		return this.http.get<T>(this.buildUrl(url), {
			headers: this.getHeaders(),
			params: httpParams,
		});
	}

	public postRequest<T>(
		url: string,
		payload: object,
		httpParams?: any
	): Observable<T> {
		return this.http.post<T>(this.buildUrl(url), payload, {
			headers: this.getHeaders(),
			params: httpParams,
		});
	}

	public putRequest<T>(
		url: string,
		payload: object,
		httpParams?: any
	): Observable<T> {
		return this.http.put<T>(this.buildUrl(url), payload, {
			headers: this.getHeaders(),
			params: httpParams,
		});
	}

	public patchRequest<T>(url: string, payload: object) {
		return this.http.patch<T>(this.buildUrl(url), payload, {
			headers: this.getHeaders(),
		});
	}

	public deleteRequest<T>(url: string, httpParams?: any): Observable<T> {
		return this.http.delete<T>(this.buildUrl(url), {
			headers: this.getHeaders(),
			params: httpParams,
		});
	}

	protected buildUrl(url: string): string {
		return environment.baseUrl + '/' + url;
	}
}
