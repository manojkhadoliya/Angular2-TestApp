import { Injectable } from "@angular/core";
import {PROPERTIES} from "./property.value"
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Property} from "./property"
@Injectable()
export class inputJSONService {
	result: Object;
	http: Http;
	constructor(http: Http) {
		this.http = http;
	}
	getJson(){
		return Promise.resolve(PROPERTIES);
	}
}