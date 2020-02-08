import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DelayLoadUntilDirective } from './directives/delay-load-until.directive';

const decl: Type<any>[] = [
    DelayLoadUntilDirective
];

@NgModule({
    declarations: [...decl],
    imports: [CommonModule, FormsModule],
    exports: [...decl, CommonModule, FormsModule]
})
export class SharedModule { }
