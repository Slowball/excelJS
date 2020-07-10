import {ExcelComponent} from "@core/ExcelComponent";


export class FormulaComponent extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'FormulaComponent',
            listeners: ['input', 'click']
        });
    }

    toHTML() {
        return `
            <div class="excel__info">fx</div>
            <div class="excel__inputs" spellcheck="false" contenteditable></div>
        `;
    }

    onInput(event) {
        console.log('Formula: onInput', event)
    }

    onClick() {
        console.log('click')
    }
}