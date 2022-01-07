import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import DogEdit from '../Edit/DogEdit';
import { render, screen } from '@testing-library/react';

test.skip('should render an individual dog', async () => {
  // render the component
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/5']}>
      <Route path="/dogs/:id/edit">
        <DogEdit />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Name:');
  expect(container).toMatchSnapshot();
});
