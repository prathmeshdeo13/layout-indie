import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndievisualSidebarComponent } from './indievisual-sidebar.component';

describe('IndievisualSidebarComponent', () => {
  let component: IndievisualSidebarComponent;
  let fixture: ComponentFixture<IndievisualSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndievisualSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndievisualSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
