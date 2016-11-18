import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'my-footer',
  templateUrl: 'app/shared/footer.component.html',
  styleUrls: ['app/shared/footer.component.css']
})
export class FooterComponent implements OnInit {
  private isListPage:boolean = true;

  constructor(
    private _location:Location
  ) {}

  ngOnInit() {
    this.isListPage = this._location.path() == '' || this._location.path().indexOf('/list') > -1 
  }
}
