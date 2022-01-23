import { TestBed } from '@angular/core/testing';
import { TestCaseComponent } from './test-case.component';

const makeSut = async () => {
  await TestBed.configureTestingModule({}).compileComponents();

  const fixture = TestBed.createComponent(TestCaseComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

describe(TestCaseComponent.name, () => {
  it('Should create Fixture', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });
});
