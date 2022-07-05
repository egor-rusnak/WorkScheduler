import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';

@NgModule({
	declarations: [HomeComponent, FooterNavComponent],
	imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
