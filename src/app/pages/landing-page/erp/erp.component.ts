import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'erp',
    templateUrl: 'erp.component.html',
    styleUrls: ['erp.component.scss'],
})
export class ERP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('ERP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'ERP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
