import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  @Input()
  placeholder: string ="";
  @Input()
  initialSearchTerm:string="";
  // @Output()
  // onValue:EventEmitter<string> = new EventEmitter();

  // sendSearchValue(value:string){
  //   this.onValue.emit(value)
  // }

  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter();

  private debounce:Subject<string> = new Subject();

  ngOnInit(): void {
    this.debounce.pipe(
        debounceTime(300)
    ).subscribe((val)=>{
      console.log(val);
      this.onDebounce.emit(val);
    })
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
  sendSearchTerm(term:string){
    this.debounce.next(term);
    //First sent to subscribers
    //second add delay in milisconds
    //third emit value to father and start the search
  }

  // sentValue(value:string){
  //   this.onDebounce.emit(value)
  // }
}
