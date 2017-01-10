import { Component, OnInit } from '@angular/core';
import { inputJSONService } from './../_Services/inputjson.service'
import { Property } from './../_Services/Property'
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [inputJSONService],
})
export class HomeComponent implements OnInit {
	public properties: Array<Property>;
	public name:String;
	propertyService: inputJSONService;
	constructor(inputJSON: inputJSONService) {
		this.propertyService = inputJSON;
	}

	ngOnInit(): any {

		this.propertyService.getJson().then((properties: Property[]) => { 
			this.properties = properties;
			console.log(this.properties)
		});



	}
}
