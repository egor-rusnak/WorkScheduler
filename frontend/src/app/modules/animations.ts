import { animate, style, transition, trigger } from '@angular/animations';

export const leftSlideAbsoluteAnimation = trigger(
	'leftSlideAbsoluteAnimation',
	[
		transition(':enter', [
			style({ opacity: 0, left: '-500px', right: '500px' }),
			animate('500ms', style({ opacity: 1, left: '*', right: '*' })),
		]),
	]
);
export const hideBlockAnimation = trigger('hideBlockAnimation', [
	transition(':leave', [
		animate('100ms', style({ opacity: 0, transform: 'scale(0)' })),
	]),
]);
