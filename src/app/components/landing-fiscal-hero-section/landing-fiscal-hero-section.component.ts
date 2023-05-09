import { Component, Input } from '@angular/core'

@Component({
  selector: 'landing-fiscal-hero-section',
  templateUrl: 'landing-fiscal-hero-section.component.html',
  styleUrls: ['landing-fiscal-hero-section.component.css'],
})
export class LandingFiscalHeroSection {
  @Input()
  title: string = 'Fiscal'
  rawp5mh: string = ' '
  constructor() {}
}