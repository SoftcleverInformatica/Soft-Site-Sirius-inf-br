import { Component, Input } from '@angular/core';

@Component({
    selector: 'hero-section',
    templateUrl: 'hero-section.component.html',
    styleUrls: ['hero-section.component.scss'],
})
export class HeroSection {
    @Input() heading!: string;

    @Input() image!: string;
    @Input() paragraphs!: string[];
}
