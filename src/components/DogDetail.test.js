import { render, screen } from '@testing-library/react';
import DogDetail from '../components/DogDetail';
// import { MemoryRouter, Route } from 'react-router-dom';

test.skip('renders individual Dog details', () => {
  const { container } = render(
    <DogDetail
      name="Barton"
      image="https://placedog.net/500?id=6"
      age={1}
      breed="Weimaraner"
      bio="Cute dog"
    />
  );
  const headerElement = screen.getByText('Barton');
  expect(headerElement).toBeInTheDocument();
  // await screen.findByText('Barton');
  // expect(container).toMatchSnapshot();
});
