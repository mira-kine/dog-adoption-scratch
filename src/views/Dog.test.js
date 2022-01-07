import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dog from '../views/Dog';
import { render, screen } from '@testing-library/react';

test('should render an individual dog', async () => {
  // render the component
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/6']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Mookie');
  expect(container).toMatchSnapshot();
});
