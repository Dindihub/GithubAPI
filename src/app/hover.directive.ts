import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {

  constructor(public nowHover: ElementRef) {}

  ngOnInit(): void {
    this.nowHover.nativeElement.style.backgroundColor="orange"
  }
}


