import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import DogEdit from '../Edit/DogEdit';
import { render, screen } from '@testing-library/react';

test('should render an individual dog', async () => {
  // render the component
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/6/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Mookie');
  expect(container).toMatchSnapshot();
});
