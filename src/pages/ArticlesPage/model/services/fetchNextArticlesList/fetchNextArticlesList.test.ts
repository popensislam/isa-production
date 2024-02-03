import { fetchNextArticlesList } from './fetchNextArticlesList';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesList', () => {

  test('next page', async () => {

    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        hasMore: true,
        page: 1,
        limit: 4,
        isLoading: false,
        entities: {},
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test('has more = false', async () => {

    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        hasMore: false,
        page: 1,
        limit: 4,
        isLoading: false,
        entities: {},
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

});
