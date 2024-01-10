import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('add filters', () => {
    const filters = {
      sort: 'date',
      order: 'asc',
      q: 'react',
      view: undefined
    };

    const params = getQueryParams(filters);

    expect(params).toBe('?sort=date&order=asc&q=react');
  });
});
