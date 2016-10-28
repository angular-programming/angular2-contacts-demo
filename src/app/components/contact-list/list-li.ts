import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'list-li',
  templateUrl: 'app/components/contact-list/list-li.html',
  styleUrls: ['app/components/contact-list/list-li.css']
})

export class ListChildrenComponent implements OnInit {
  @Input() contact:any = {};
  @Output() routerNavigate = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {

  }

  goDetail(num: number) {
    this.routerNavigate.emit(num);
  }

}
