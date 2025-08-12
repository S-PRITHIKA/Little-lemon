import { render, screen, fireEvent } from '@testing-library/react';
import Booking from '../Booking';

test('shows error if name is empty', () => {
  render(<Booking />);
  fireEvent.click(screen.getByText(/Submit/i));
  expect(screen.getByText(/Name is required/)).toBeInTheDocument();
});
