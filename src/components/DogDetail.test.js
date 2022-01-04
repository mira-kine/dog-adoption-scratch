import { render, screen } from '@testing-library/react';
import Dog from '../views/Dog';
import { MemoryRouter, Route } from 'react-router-dom';

test('renders individual details', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route path="/dogs/:id">
        <Dog />;
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Barton');
  expect(container).toMatchSnapshot();
});
