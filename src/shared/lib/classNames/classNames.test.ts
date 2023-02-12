import { classNames } from './classNames';

describe('classNames', () => {
  test('classNames with first params', () => {
    expect(classNames('testClass')).toBe('testClass');
  });
  test('classNames with the first two params', () => {
    expect(classNames('testClass', { hovered: true })).toBe('testClass hovered');
  });
  test('classNames with all params', () => {
    expect(classNames('testClass', { hovered: true }, [ 'active' ])).toBe('testClass active hovered');
  });
  test('classNames with a lot of params', () => {
    expect(classNames('testClass', { hovered: true, active: true, focus: false }, [ 'block', 'header' ]))
      .toBe('testClass block header hovered active');
  });
  test('classNames with undefined', () => {
    expect(classNames('testClass', { hovered: true, focus: undefined }))
      .toBe('testClass hovered');
  });
});
