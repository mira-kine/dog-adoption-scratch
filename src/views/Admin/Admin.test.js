import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Admin from '../Admin/Admin';

test('renders Admin page', () => {
  const { container } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
