import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

const contact_url = `./app/services/contacts.json`;

@Injectable()
export class ContactService {
  constructor(
    private _http:Http
  ) {}

  request(url:string, opts:any) {
    return this._http.request(url, new RequestOptions(opts))
    .map(res => {
      let _res = res.json();
      if(opts.id){
        for(let i=0; i<_res.length; i++){
          if(_res[i].id == opts.id){
            _res = _res[i];
          }
        }
      }
      if(opts.collection){
        let temp:any = [];
        for(let i=0; i<_res.length; i++){
          if(_res[i].collection == opts.collection){
            temp.push(_res[i]);
          }
        }
        _res = temp;
      }
      return _res;
    })
  }

  get(url:string, opts?:Object) {
    return this.request(url, (<any>Object).assign({
      method: 'get'
    }, opts));
  }

  getContactsData() {
    return new Observable(observable => {
      this.get(contact_url)
      .subscribe(res => {
        observable.next(res);
        observable.complete();
      })
    })
  }

  getContactById(id:number) {
    return new Observable(observable => {
      this.get(contact_url, {id:id})
      .subscribe(res => {
        observable.next(res);
        observable.complete();
      })
    })
  }

  getCollections() {
    return new Observable(observable => {
      this.get(contact_url, {collection:1})
      .subscribe(res => {
        observable.next(res);
        observable.complete();
      })
    })
  }

  addContact(obj:Object = {}) {
    let body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(contact_url, body, options).map(res => res.json());
  }

}
