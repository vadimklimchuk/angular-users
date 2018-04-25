import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  public placeholder;

  @Output()
  public search = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onSearch(value: string): void {
    this.search.emit(value);
  }

}
