import { fetchArticleById } from './fetchArticleById';
import { Article, ArticleType } from '../../types/article';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';

describe('fetchArticleById', () => {

  test('fullfilled', async () => {
    const articleDetails: Article = {
      id: 'id',
      title: 'Article test',
      subtitle: 'subtitle',
      img: 'some img',
      user: {
        id: '1',
        username: 'admin'
      },
      views: 122,
      createdAt: '22.02.2022',
      type: [ ArticleType.IT ],
      blocks: []
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleDetails, message: 'success' }));
    const result = await thunk.callThunk('id');

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleDetails);
  });

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('id');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error');
  });
});
