import {Routes} from "@angular/router";
import {ContactList} from "../components/contact-list/contact-list";
import {ContactDetail} from "../components/contact-detail/contact-detail";
import {Anotation} from "../components/contact-detail/anotation";
import {Collection} from "../components/collection/collection";
import {Operate} from "../widget/operate";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "contact-list",
    pathMatch: 'full'
  },
  {
    path: "contact-list",
    component: ContactList
  },
  {
    path: "contact-detail/:id",
    component: ContactDetail,
    children: [
      {
        path: "",
        component: Anotation
      }
    ]
  },
  {
    path: "operate/id/:id",
    component: Operate
  },
  {
    path: "operate/isAdd/:isAdd",
    component: Operate
  },
  {
    path: "collection",
    component: Collection
  }
];
