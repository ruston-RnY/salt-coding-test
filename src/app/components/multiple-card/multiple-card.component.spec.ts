import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MultipleCardComponent } from './multiple-card.component';

describe('MultipleCardComponent', () => {
  let component: MultipleCardComponent;
  let fixture: ComponentFixture<MultipleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleCardComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
