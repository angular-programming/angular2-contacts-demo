import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ContactService} from 'shared/contact.service';
import {UtilService} from 'shared/util.service';

@Component({
  selector: 'my-operate',
  templateUrl: 'app/edit/edit.component.html',
  styleUrls: ['app/edit/edit.component.css']
})
export class EditComponent implements OnInit {
  isAdd: boolean;
  operateTitle: string;
  editId: number;
  contacts:any = {};
  contact:any = {};
  isName:boolean = false;
  isPhoneNum:boolean = false;
  isAddr:boolean = false;
  isEmail:boolean = false;
  isBir:boolean = false;
  nameTip:boolean = false;
  phoneTip:boolean = false;
  addrTip:boolean = false;
  emailTie:boolean = false;
  birTip:boolean = false;


  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute,
    private _constactService: ContactService,
    private _location:Location,
    private util: UtilService
    ) {}

  ngOnInit() {
    this.getContacts();
    this._activatedRoute.params.subscribe(params => {
      // this.isAdd = params['isAdd'];
      this.editId = params['id'];
      this.isAdd = !this.editId;
    })
    this.operateTitle = this.isAdd ? '新建联系人' : '编辑联系人';
    //
    if(!this.isAdd) this.getContactDetailById(this.editId);
  }

  submitForm() {
    this.nameTip = true;
    this.phoneTip = true;
    this.addrTip = true;
    this.emailTie = true;
    this.birTip = true;

    if(this.isName && this.isPhoneNum && this.isAddr && this.isEmail && this.isBir){
      if(this.isAdd) this.addContact();
      else this.editContact();
    }
  }
  getContacts() {
    this._constactService.getContactsData().subscribe(data => {
      this.contacts = data;
    });
  }

  getContactDetailById(id:number) {
    let ss_contacts = sessionStorage.getItem('contacts');
    if(ss_contacts) {
      this.contacts = JSON.parse(ss_contacts);
      this.contact = this.contacts[id-1];
    }else {
      this._constactService.getContactById(id).subscribe(data => {
        this.contact = data;
      });
    }
  }

  addContact() {
    let contacts_length = this.contacts.length;
    let new_id = this.contacts[contacts_length-1].id + 1;

    let new_contact = {
      "id": new_id,
      "name": this.contact.name,
      "telNum": this.contact.telNum,
      "address": this.contact.address,
      "email": this.contact.email,
      "birthday": this.contact.birthday,
      "collection": 0
    };
    this.contacts.push(new_contact);
    sessionStorage.setItem('contacts',JSON.stringify(this.contacts));
    this._router.navigate(['']);
  }

  editContact() {
    let edit_contact = {
      "id": this.editId,
      "name": this.contact.name,
      "telNum": this.contact.telNum,
      "address": this.contact.address,
      "email": this.contact.email,
      "birthday": this.contact.birthday,
      "collection": 0
    };
    let ss_contacts = sessionStorage.getItem('contacts');
    this.contacts = JSON.parse(ss_contacts);
    this.contacts.splice(this.editId - 1, 1, edit_contact);
    sessionStorage.setItem("contacts",JSON.stringify(this.contacts));
    this._router.navigate(['/list',this.editId]);
  }

  cancleOperate() {
    this._location.back();
  }

  //失去焦点事件
  onBlurName() {
    this.nameTip = true;
    this.isName = this.contact.name ? true : false;
  }
  onBlurPhone() {
    this.phoneTip = true;
    this.isPhoneNum = this.util.checkPhoneNum(this.contact.telNum);
  }
  onBlurAddr() {
    this.addrTip = true;
    this.isAddr = this.contact.address ? true : false;
  }
  onBlurEmail() {
    this.emailTie = true;
    this.isEmail = this.util.checkEmail(this.contact.email);
  }
  onBlurBir() {
    this.birTip = true;
    this.isBir = this.contact.birthday ? true : false;
  }
}
