import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

//<div appHighlight></div>
//<input appHighlight
//input,div,etc--called host element
//no view , no styles
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    console.log('directive called')
  }

  @HostListener('click')
  onClick() {
    console.log('directive host clicked')
  }
  @HostListener('mouseenter')
  onEnter() {
    console.log('directive host enter')
    this.renderer.setStyle(this.hostElement.nativeElement, 'background', 'lightgreen')
  }
  @HostListener('mouseleave')
  onLeave() {
    console.log('directive host leave')
    this.renderer.removeStyle(this.hostElement.nativeElement, 'background')
  }
}
