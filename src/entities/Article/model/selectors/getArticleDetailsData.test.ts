import { getArticleDetailsIsLoading } from './getArticleDetailsData';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getArticleDetailsData', () => {
  test('return article details loading', () => {
    const isLoading = true;

    const state: DeepPartial<StateSchema> = { articleDetails: { isLoading } };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
  });
});
