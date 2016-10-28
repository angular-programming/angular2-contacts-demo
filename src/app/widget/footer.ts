import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'my-footer',
  templateUrl: 'app/widget/footer.html',
  styleUrls: ['app/widget/footer.css']
})
export class Footer implements OnInit {
  private footer:boolean = true;

  constructor(
    private _location:Location
  ) {}

  ngOnInit() {
    this._location.path() == '' || this._location.path().indexOf('/contact-list') > -1  ? this.footer = true : this.footer = false;
  }
}
