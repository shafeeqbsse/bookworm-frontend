import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ReviewTabbedContainerComponent} from "./review-tabbed-container.component";

describe('ReviewTabbedContainerComponent', () => {
    let component: ReviewTabbedContainerComponent;
    let fixture: ComponentFixture<ReviewTabbedContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReviewTabbedContainerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewTabbedContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
