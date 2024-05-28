import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from "../../utilities/base-component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent extends BaseComponent implements OnInit {
  
  private API_KEY = '20524329-a56f712174c95d9a33f77f075';
  private API_URL = 'https://pixabay.com/api/';
  
  @Output() imageDataChange = new EventEmitter<string[]>();

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {

  }

  searchImages(query: string): Observable<string[]> {

    const params = {
      key: this.API_KEY,
      q: encodeURIComponent(query),
      image_type: 'photo',
      per_page: '18',
      orientation: 'horizontal'
    };

    return this
      .http
      .get<any>(this.API_URL, { params })
      .pipe(
        map(response => response.hits.map((hit: any) => hit.webformatURL))
    );
  }
  
  onSearchChange(event: Event) {

    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;

    if (query.length > 0) {
      this
        .searchImages(query)
        .subscribe(images => {
          console.log("emitting event")
          this.imageDataChange.emit(images);
      });
    }
  }
}