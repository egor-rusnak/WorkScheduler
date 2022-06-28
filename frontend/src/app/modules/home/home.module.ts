import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
	declarations: [HomeComponent, FooterNavComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MatFormFieldModule,
		MatSelectModule,
		MatSliderModule,
		MatInputModule,
	],
})
export class HomeModule {}
