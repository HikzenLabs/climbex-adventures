export const WHATSAPP_NUMBER = "918493009936";

interface BookingDetails {
  name: string;
  duration?: string;
  price?: string;
  location?: string;
}

export function buildBookingLink({
  name,
  duration,
  price,
  location,
}: BookingDetails) {
  const details = [
    location && `Location: ${location}`,
    duration && `Duration: ${duration}`,
    price && `Price: ${price}`,
  ].filter(Boolean);

  const message = [
    "Hi Climbex Adventures,",
    `I would like to book *${name}*.`,
    ...details,
    `Link: ${window.location.href}`,
    "Please share the available dates and booking details.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
