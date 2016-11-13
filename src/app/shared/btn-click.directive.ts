import {Directive, ElementRef, Input, Renderer} from "@angular/core";

@Directive({
  selector: "[btnClickStyle]",
  host: {
    "(click)": "btnClick()"
  }
})
export class BtnClickDirective {
  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
  btnClick() {
    this._addClasssName("btn-click");
  }
  private _addClasssName(className: string) {
    this.el.className = this.el.className + " " + className;
  }
}
