import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  test('renders form fields', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', () => {
    render(<BookingForm />);
    fireEvent.click(screen.getByText(/Confirm booking/i));
    // At least one alert should be present
    expect(screen.getAllByRole('alert').length).toBeGreaterThanOrEqual(1);
  });

  test('submits valid form and shows confirmation', () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/Full name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-08-20' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:30' } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: '3' } });

    fireEvent.click(screen.getByText(/Confirm booking/i));
    expect(screen.getByText(/Booking confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  });
});
