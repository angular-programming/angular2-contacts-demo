import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Operate} from '../../widget/operate';
import {ContactService} from '../../services/contact-service';

@Component({
  selector: 'list',
  templateUrl: 'app/components/contact-list/contact-list.html',
  styleUrls: ['app/components/contact-list/contact-list.css']
})
export class ContactList implements OnInit {
  contacts: {};
  private isAdd:number = 1;

  constructor(
    private _router: Router,
    private _contactService: ContactService
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    let ss_contacts = sessionStorage.getItem('contacts');
    if(!ss_contacts) {
      this._contactService.getContactsData().subscribe(data => {
        this.contacts = data;
        sessionStorage.setItem("contacts",JSON.stringify(data));
      });
    }else {
      this.contacts = JSON.parse(ss_contacts);
    }
  }

  addContact() {
    this._router.navigate(['/operate/isAdd', this.isAdd]);
  }

  routerNavigate(id: number) {
    this._router.navigate(['/contact-detail',id]);
  }

}
