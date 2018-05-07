import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer) {}
	@HostListener('mouseover')
	onMouseOver() {
		const part = this.elementRef.nativeElement.querySelector('.md-button');
		this.renderer.setElementStyle(part, 'display', 'block');
	}

	@HostListener('mouseout')
	onMouseOut() {
		const part = this.elementRef.nativeElement.querySelector('.md-button');
		this.renderer.setElementStyle(part, 'display', 'none');
	}
}
