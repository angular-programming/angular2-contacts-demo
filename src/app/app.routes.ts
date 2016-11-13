import {Routes} from "@angular/router";

import {CollectionComponent} from './collection/collection.component';
import {ListComponent, ItemComponent} from './list';
import {DetailComponent, AnotationComponent} from './detail';
import {EditComponent} from './edit/edit.component';


export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: 'full'
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "list/:id",
    component: DetailComponent
  },
  {
    path: "edit",
    component: EditComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  },
  {
    path: "collection",
    component: CollectionComponent
  }
];
