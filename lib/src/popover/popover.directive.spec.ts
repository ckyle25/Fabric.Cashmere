import { PopoverDirective } from './popover.directive';
import { SimpleChange, ViewContainerRef } from '@angular/core';
import { PopoverContentComponent } from './popoverContent.component';
import { Triggers } from './popover.model';

describe('PopoverDirective', () => {
    let directive: PopoverDirective;
    const mockPopoverComponent: PopoverContentComponent = new PopoverContentComponent(<any>undefined);
    const mockViewContainerRef: any = {
        createComponent: jasmine.createSpy('createComponent')
            .and.returnValue({
                'instance': mockPopoverComponent,
                'destroy': jasmine.createSpy('destroy')
            }),
        element: {nativeElement: ''}
    };

    const mockResolver: any = {
        resolveComponentFactory: jasmine.createSpy('resolveComponentFactory')
    };

    beforeEach(() => {
        directive = new PopoverDirective(mockViewContainerRef, mockResolver, <any>undefined, <any>undefined);
        directive.content = mockPopoverComponent;
    });

    describe('constructor', () => {
        it('should create an instance', () => {
            expect(directive).toBeTruthy();
        });
    });
});
