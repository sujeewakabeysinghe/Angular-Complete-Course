 import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gtnCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  color1: string = 'red';
  @Input() gtnCustomDirective: string = ''; // or you can name this as color2 and pass the value from parent as color2='black' along with the directive name which is gtnCustomDirective 

  constructor(
    private element: ElementRef,
    private renderer: Renderer2 // another way
  ) {
    console.log(this.element);
    console.log(this.element.nativeElement); // this gives the access to element

    console.log(this.renderer);
  }

  ngOnInit(): void {
   this.element.nativeElement.style.color = this.color1;
   this.renderer.setStyle(
    this.element.nativeElement,
    'backgroundColor',
    this.color1
   )
  }

  @HostListener('mouseenter') onMouseEnter() { // mouseenter, mouseleave etc. these are there 
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
     ) 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.gtnCustomDirective
     ) 
  }

}
