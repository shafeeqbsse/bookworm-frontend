import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ReviewAverageDisplayComponent} from "./review-average-display.component";

describe('ReviewAverageDisplayComponent', () => {
    let component: ReviewAverageDisplayComponent;
    let fixture: ComponentFixture<ReviewAverageDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReviewAverageDisplayComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewAverageDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
