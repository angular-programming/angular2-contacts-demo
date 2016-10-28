import {Component, OnInit} from '@angular/core';
import {Footer} from '../../widget/footer';
import {ContactService} from '../../services/contact-service';

@Component({
  selector: 'call-record',
  templateUrl: 'app/components/collection/collection.html',
  styleUrls: ['app/components/collection/collection.css']
})
export class Collection implements OnInit {
  collections:any = [];
  contacts:any = {};

  constructor(private _constactService: ContactService) { }

  getCollectionContact() {
    let ss_contacts = sessionStorage.getItem('contacts');
    if(ss_contacts) {
      this.contacts = JSON.parse(ss_contacts);
      for(let i=0;i<this.contacts.length; i++){
        if(this.contacts[i].collection == 1){
          this.collections.push(this.contacts[i]);
        }
      }
    }else {
      this._constactService.getCollections().subscribe(data => {
        this.collections = data;
      })
    }
  }

  ngOnInit() {
    this.getCollectionContact();
  }
}
