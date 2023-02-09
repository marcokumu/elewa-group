import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CardsModule } from '@elewa-group/features/components/cards';
// import { ActivityComponent } from './components/activity/activity.component';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent, ActivityComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent, ActivityComponent],
})
export class HomePageModule {}
