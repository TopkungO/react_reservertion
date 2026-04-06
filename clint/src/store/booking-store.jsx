import { create } from "zustand";

const bookingStore = () => ({
  // eslint-disable-next-line no-unused-vars
  campingId: "",
  price: 0,
  bookings: [],
  range: []
});

const useBookingStore = create(bookingStore);
export default useBookingStore
