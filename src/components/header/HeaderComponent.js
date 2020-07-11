import {ExcelComponent} from "@core/ExcelComponent";

export class HeaderComponent extends ExcelComponent {
    static className = 'excel__header';

    toHTML() {
        return `
            <label>
                <input type="text" class="excel__input" value="New table">
            </label>
            <div class="button">
                <div class="excel__button">
                    <i class="material-icons">delete_outline</i>
                </div>

                <div class="excel__button">
                    <i class="material-icons">clear</i>
                </div>
            </div>
    `;
    }
}