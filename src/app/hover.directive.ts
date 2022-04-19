import { Directive,ElementRef,OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(public toChange: ElementRef) {}

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor('purple');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeColor('green');
  }
  changeColor(color: string) {
    this.toChange.nativeElement.style.backgroundColor = 'color';
  }

  ngOnInit(): void {
    // this.nowHover.nativeElement.style.backgroundColor="orange"
  }
}


