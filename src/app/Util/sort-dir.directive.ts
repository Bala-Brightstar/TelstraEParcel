import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Sort } from './Sort';

@Directive({
  selector: '[appSortDir]'
})
export class SortDirDirective {
  @Input() appSortDir: Array<any>;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }
  
  @HostListener ("click")
  sortData() {
    const sort = new Sort();
    const elem = this.targetElem.nativeElement;
    const order = elem.getAttribute("data-order");
    const type = elem.getAttribute("data-type");
    const property = elem. getAttribute("data-name");
    if (order === "desc") {
      console.log(this.appSortDir)
        this.appSortDir.sort(sort.startSort(property, order, type));
        elem.setAttribute("data-order", "asc");
    }else{
      console.log("esle"+this.appSortDir)
      this.appSortDir.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order","desc");
    }
}

}
