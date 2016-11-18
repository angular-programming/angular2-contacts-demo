import {Directive, ElementRef, Input, Renderer} from "@angular/core";

const ClickingBackColor = '#eee';

@Directive({
  selector: "[btnClickStyle]",
  host: {
    "(click)": "doClick()"
  }
})
export class BtnClickDirective {
  private el: HTMLElement;
  private timer: any;
  private animating: boolean;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.transition = 'background-color .2s ease-out';
  }
  doClick() {
    if(this.animating) return;
    this.animating = true;
    this.el.prevBackColor = this.el.style.backgroundColor;
    this.el.style.backgroundColor = ClickingBackColor;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.el.style.backgroundColor = this.el.prevBackColor || '';
      this.animating = false;
    }, 200);
  }
}

interface HTMLElement {
  prevBackColor: string;
  style: any;
}
