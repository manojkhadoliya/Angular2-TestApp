import { Component, OnInit } from '@angular/core';
import { inputJSONService } from './../_Services/inputjson.service';
import { Property } from './../_Services/Property';
import { Book } from './../_Models/book.model';
import { BookService } from './../_Services/book.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [inputJSONService, BookService],
})
export class HomeComponent implements OnInit {
	public properties: Array<Property>;
	public name: String;
	propertyService: inputJSONService;
	public books: Array<Book>;
	isBook: Boolean =false;
	constructor(inputJSON: inputJSONService, private bookService: BookService) {
		this.propertyService = inputJSON;
	}

	ngOnInit(): any {

		this.propertyService.getJson().then((properties: Property[]) => {
			this.properties = properties;
			console.log(this.properties)
		});
	}
	getAllBooks(): any {
		this.bookService.getAllBooks().then((result: Book[]) => {
			this.books = result;
			for(let i=0; i< this.books.length; i++){
				console.log("****", this.books[i].title);
			}
			this.isBook = true;
			console.log("**************",this.books);
		});
	}
	isBold:Boolean = true;
	isLeft25: Boolean = false;
	setClasses(book:Book){
		if(book.price != undefined){
			if(isNaN(parseInt(book.price.toString()))){
				this.isBold = false;
			}
			else
			{
				this.isBold = true;
				this.isLeft25 = false;
			}
		}
		
		let classes = {
			bold:this.isBold,
			left25:this.isLeft25
		}
		return classes;
	}
}
