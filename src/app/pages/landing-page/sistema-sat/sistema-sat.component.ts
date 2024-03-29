import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-sat',
    templateUrl: 'sistema-sat.component.html',
    styleUrls: ['sistema-sat.component.scss'],
})
export class SistemaSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
