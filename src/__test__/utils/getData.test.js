import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Call API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234' }));
    return getData('https://google.com')
      .then(response => (
        expect(response.data).toEqual('1234')
      ));
  });
});
