import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BookService {
    public result: any;
	constructor(private http: Http) {
	}
	getAllBooks(){
        return this.http.get("/api/books").map(res => res.json()).toPromise();

	}
}