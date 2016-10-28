import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app-routes";
import {ContactApp} from "../components/contact-app";
import {ContactService} from "../services/contact-service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ContactList} from '../components/contact-list/contact-list';
import {ListChildrenComponent} from '../components/contact-list/list-li';
import {ContactDetail} from '../components/contact-detail/contact-detail';
import {Anotation} from '../components/contact-detail/anotation';
import {Collection} from '../components/collection/collection';
import {Operate} from '../widget/operate';
import {Footer} from '../widget/footer';
import {DateReform} from '../pipes/date-reform.pipe';
import {BtnClickDirective} from '../directive/btn-click.directive';

@NgModule({
  declarations: [
    ContactApp,
    ContactList,
    ContactDetail,
    Anotation,
    Collection,
    Operate,
    Footer,
    ListChildrenComponent,
    DateReform,
    BtnClickDirective
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ContactService],
  bootstrap   : [ContactApp]
})
export class AppModule {

}
