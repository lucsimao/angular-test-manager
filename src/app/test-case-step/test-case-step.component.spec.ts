import { TestBed } from '@angular/core/testing';
import { TestCaseStepComponent } from './test-case-step.component';
import { makeFakeStep } from '../test/testHelper';

const makeSut = async () => {
  await TestBed.configureTestingModule({}).compileComponents();

  const fixture = TestBed.createComponent(TestCaseStepComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

describe(TestCaseStepComponent.name, () => {
  it('Should create Fixture', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  describe('Dom', () => {
    it('Should display TestCase labels when page is loaded', async () => {
      const validLabels: {
        [key: string]: string;
      } = {
        ['.test-case-step-action-label']: 'Ação',
        ['.test-case-step-action-expected-label']: 'Resultado Esperado',
      };

      const { fixture } = await makeSut();
      for (const label of Object.keys(validLabels)) {
        const element: HTMLElement = fixture.nativeElement.querySelector(label);
        const result = element?.textContent?.trim();

        expect(element).withContext(`${label}`).toBeTruthy();
        expect(result)
          .withContext(`${label}`)
          .toEqual(String(validLabels[label]));
      }
    });

    it('Should display TestCase when page is loaded', async () => {
      const { sut, fixture } = await makeSut();
      sut.step = makeFakeStep();
      fixture.detectChanges();
      const validFields: {
        [key: string]: string;
      } = {
        ['.test-case-step-action']: makeFakeStep().action,
        ['.test-case-step-expected']: makeFakeStep().expected,
      };

      for (const field of Object.keys(validFields)) {
        const element: HTMLElement = fixture.nativeElement.querySelector(field);
        const result = element?.textContent?.trim();

        expect(element).withContext(`${field}`).toBeTruthy();
        expect(result)
          .withContext(`${field}`)
          .toEqual(String(validFields[field]));
      }
    });
  });
});
