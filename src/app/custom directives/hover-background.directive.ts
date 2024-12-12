import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
  standalone: true
})
export class HoverBackgroundDirective {
  @Input() hoverColor: string = 'lightblue'; // Default hover color
  @Input() defaultColor: string = ''; // Default background color

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBackgroundColor(this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.defaultColor);
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
