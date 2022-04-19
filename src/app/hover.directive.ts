import { Directive,ElementRef,OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(public toChange: ElementRef) {}

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor('black');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeColor('white');
  }
  changeColor(color: string) {
    this.toChange.nativeElement.style.backgroundColor = color;
    this.toChange.nativeElement.style.color='white';
  }

  ngOnInit(): void {
    // this.nowHover.nativeElement.style.backgroundColor="orange"
  }
}

// changeColor(color: string) {
//     this.toChange.nativeElement.style.backgroundColor = color;
//   }


