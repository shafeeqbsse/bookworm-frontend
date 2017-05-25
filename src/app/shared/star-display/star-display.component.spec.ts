import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {StarDisplayComponent} from "./star-display.component";

describe('StarDisplayComponent', () => {
    let component: StarDisplayComponent;
    let fixture: ComponentFixture<StarDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StarDisplayComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
