import { AfterViewInit , EventEmitter, ViewRef} from '@angular/core';


export abstract class AbstractContainerComponent implements AfterViewInit{

    attached: EventEmitter<any> = new EventEmitter()
    panelRemoved: EventEmitter<number> = new EventEmitter()
    public displayRemove: boolean = false;

    ngAfterViewInit(): void {
        this.attached.emit("attached")
        this.attached.complete()
    }

    abstract createPanel(title: string): HTMLElement;

    abstract removePanel(index);

}