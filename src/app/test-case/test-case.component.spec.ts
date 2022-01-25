import { TestBed } from '@angular/core/testing';
import { TestCase } from './models/test-case';
import { TestCaseComponent } from './test-case.component';

const makeSut = async () => {
  await TestBed.configureTestingModule({}).compileComponents();

  const fixture = TestBed.createComponent(TestCaseComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

const makeFakeTestCase = (): TestCase => ({ name: 'Any Test Case' });

describe(TestCaseComponent.name, () => {
  it('Should create Fixture', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  describe('Dom', () => {
    it('Should display TestCase when page is loaded', async () => {
      const { sut, fixture } = await makeSut();

      const fakeTestCase = makeFakeTestCase();
      sut.testCase = fakeTestCase;
      fixture.detectChanges();

      const element: HTMLElement =
        fixture.nativeElement.querySelector('.test-case');

      expect(element.textContent?.trim()).toEqual(fakeTestCase.name);
    });
  });
});
