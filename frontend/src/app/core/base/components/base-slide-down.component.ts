import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'base-slide-dowm',
	template: '',
	styleUrls: [],
})
export abstract class BaseSlideDownComponent {
	closeLineHeight: number;
	minLineHeight: number;
	endPosition: number;
	startPosition: number;

	@ViewChild('slideElem') el: ElementRef;
	@ViewChild('slideButton') elBtn: ElementRef;

	constructor() {}

	close(withAnimation: boolean) {
		this.el.nativeElement.classList.remove('slideUp');
		if (withAnimation) {
			this.el.nativeElement.classList.add('slideDown');
		} else {
			this.closeEvent();
		}
	}

	abstract closeEvent();

	touchmove(event: TouchEvent) {
		console.log(`move:${event.targetTouches[0].pageY}`);
		const touch = event.targetTouches[0];
		this.el.nativeElement.style.top =
			touch.pageY < this.minLineHeight
				? this.el.nativeElement.style.top
				: touch.pageY + 'px';
		if (event.targetTouches[0].pageY > this.closeLineHeight) {
			this.close(false);
		}
		this.endPosition = event.targetTouches[0].pageY;
		event.stopPropagation();
	}

	touchstart(event: TouchEvent) {
		console.log(`start:${event.targetTouches[0].pageY}`);
		this.startPosition = event.targetTouches[0].pageY;
		this.closeLineHeight =
			(screen.height - this.startPosition) * 0.5 + this.startPosition;
		this.minLineHeight = this.startPosition * 0.5;

		this.elBtn.nativeElement.classList.add('simple-line-active');
	}

	touchend(event: TouchEvent) {
		this.elBtn.nativeElement.classList.remove('simple-line-active');

		if (this.endPosition > this.startPosition) {
			this.el.nativeElement.style.top = '';
		}
		if (this.endPosition < this.closeLineHeight) {
			this.el.nativeElement.style.top = '';
		}
	}
}
