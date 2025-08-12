import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingTable from './BookingTable';

test('renders booking data in a table', () => {
  const bookingData = [
    { name: 'John Doe', room: '101', date: '2025-08-11' },
    { name: 'Jane Smith', room: '102', date: '2025-08-12' },
  ];

  render(<BookingTable bookingData={bookingData} />);

  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});
