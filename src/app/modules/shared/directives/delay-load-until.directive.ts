import { Directive, TemplateRef, ViewContainerRef, EmbeddedViewRef, Input } from '@angular/core';

@Directive({
    selector: '[blsDelayLoadUntil]'
})
export class DelayLoadUntilDirective<T = unknown> {
    private _context: DelayLoadUntilContext<T> = new DelayLoadUntilContext<T>();
    private _loadedViewRef: EmbeddedViewRef<DelayLoadUntilContext<T>> | null = null;
    private _isLoaded = false;

    constructor(
        private _viewContainer: ViewContainerRef,
        private _template: TemplateRef<DelayLoadUntilContext<T>>
    ) { }

    @Input()
    set blsDelayLoadUntil(value: T) {
        this._context.$implicit = this._context.blsDelayLoadUntil = value;
        this.refreshView();
    }

    private refreshView() {
        if (!!this._context.$implicit) {
            this._isLoaded = true;
        }

        if (this._isLoaded) {
            if (!this._loadedViewRef) {
                this._loadedViewRef = this._viewContainer.createEmbeddedView(this._template);
            }
        }
    }
}

export class DelayLoadUntilContext<T = unknown> {
    public $implicit: T = null!;
    public blsDelayLoadUntil: T = null!;
}
