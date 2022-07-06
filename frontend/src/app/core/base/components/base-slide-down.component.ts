import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'app-base-slide-dowm',
	templateUrl: './base-slide-down.component.html',
	styleUrls: ['./base-slide-down.component.scss'],
})
export class BaseSlideDownComponent {
	closeLineHeight: number;
	minLineHeight: number;
	endPosition: number;
	startPosition: number;
	isClose: boolean = false;

	@ViewChild('slideElem') el: ElementRef;
	@ViewChild('slideButton') elBtn: ElementRef;

	@Output() closeEmit = new EventEmitter();

	constructor() {}

	close(withAnimation: boolean) {
		this.isClose = true;
		this.el.nativeElement.classList.remove('slideUp');
		if (withAnimation) {
			this.el.nativeElement.classList.add('slideDown');
			setInterval(() => this.closeEvent(), 300);
		} else {
			this.closeEvent();
		}
	}

	closeEvent() {
		this.closeEmit.emit(null);
	}

	touchmove(event: TouchEvent) {
		if (this.isClose) return;

		const touch = event.targetTouches[0];
		this.el.nativeElement.style.top =
			touch.pageY < this.minLineHeight
				? this.el.nativeElement.style.top
				: `calc(${touch.pageY}px - 1.5em)`;
		if (event.targetTouches[0].pageY > this.closeLineHeight) {
			this.isClose = true;
			this.close(true);
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
		if (this.isClose) return;

		if (this.endPosition > this.startPosition) {
			this.el.nativeElement.style.top = '';
		}
		if (this.endPosition < this.closeLineHeight) {
			this.el.nativeElement.style.top = '';
		}
	}
}
