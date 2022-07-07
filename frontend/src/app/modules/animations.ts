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

export const pullDownAnimation = trigger('pullDownAnimation', [
	transition(':enter', [
		style({
			height: '0',
			overflow: 'hidden',
			borderWidth: 0,
			opacity: 0,
			padding: 0,
		}),
		animate(
			'0.3s',
			style({ padding: '*', height: '*', borderWidth: '*', opacity: '*' })
		),
	]),
	transition(':leave', [
		style({
			height: '*',
			overflow: 'hidden',
			borderWidth: '*',
			opacity: '*',
			padding: '*',
		}),
		animate(
			'0.3s',
			style({ padding: 0, height: '0', borderWidth: 0, opacity: 0 })
		),
	]),
]);
