import {ExcelComponent} from "@core/ExcelComponent";

export class TableComponent extends ExcelComponent{
    static className = 'excel__table';

    toHTML() {
        return `
         <div class="row">
                <div class="row__info">

                </div>
                <div class="row__data">
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row__info">
                    1
                </div>
                <div class="row__data">
                    <div class="cell selected" contenteditable>
                        A1
                    </div>
                    <div class="cell" contenteditable>
                        B2
                    </div>
                    <div class="cell" contenteditable>
                        C3
                    </div>
                </div>
            </div>
        `;
    }
}