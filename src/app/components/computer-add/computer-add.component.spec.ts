import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerAddComponent } from './computer-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('ComputerAddComponent', () => {
  let component: ComputerAddComponent;
  let fixture: ComponentFixture<ComputerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerAddComponent ],
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
    fixture = TestBed.createComponent(ComputerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
