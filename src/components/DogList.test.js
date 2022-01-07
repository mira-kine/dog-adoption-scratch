import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogsList from './DogsList';

test.skip('renders Admin page', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogsList />
    </MemoryRouter>
  );
  await screen.findByText('Meet Tyson');
  expect(container).toMatchSnapshot();
});
