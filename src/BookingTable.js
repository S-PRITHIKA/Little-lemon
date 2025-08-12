import React from 'react';

const BookingTable = ({ bookingData }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Room</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.map((booking, index) => (
          <tr key={index}>
            <td>{booking.name}</td>
            <td>{booking.room}</td>
            <td>{booking.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
