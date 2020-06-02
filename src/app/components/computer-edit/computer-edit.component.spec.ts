import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerEditComponent } from './computer-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('ComputerEditComponent', () => {
  let component: ComputerEditComponent;
  let fixture: ComponentFixture<ComputerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerEditComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
