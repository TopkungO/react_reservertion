import React, { useEffect } from "react";
import BookingCalender from "./BookingCalender";
import BookingForm from "./BookingForm";
import useBookingStore from "@/store/booking-store";

const BookingContainer = ({ campingId, price, bookings }) => {
  console.log(campingId, price, bookings);

  useEffect(() => {
    useBookingStore.setState({
      campingId,
      price,
      bookings,
    });
  }, [bookings, campingId, price]);
  
  return (
    <div className="flex flex-col md-8">
      <BookingCalender />
      <BookingForm />
    </div>
  );
};

export default BookingContainer;
