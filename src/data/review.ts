// Real reviews of Climbex Adventures.
// Source: Tripadvisor (5.0 ★, 39 reviews) and Justdial (4.9 ★, 26 ratings), checked Nov 2026.
// Only verbatim text from the reviewers goes in `text`. Where we only have the review
// title, the card shows the title and links to the full review on Tripadvisor.

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g297622-d19381304-Reviews-Climbex_Adventures-Kashmir_Jammu_and_Kashmir.html";

export const TRIPADVISOR_WRITE_REVIEW_URL =
  "https://www.tripadvisor.com/UserReviewEdit-g297622-d19381304-Climbex_Adventures-Kashmir_Jammu_and_Kashmir.html";

export const JUSTDIAL_URL =
  "https://www.justdial.com/Srinagar/Climbex-Adventures-Rainawari/9999PX194-X194-220523205219-Z3E8_BZDET";

export interface RatingSource {
  platform: "Tripadvisor" | "Justdial" | "Google";
  rating: number;
  count: number;
  countLabel: string;
  note?: string;
  url: string;
}

export const ratingSources: RatingSource[] = [
  {
    platform: "Tripadvisor",
    rating: 5.0,
    count: 39,
    countLabel: "reviews",
    note: "#66 of 524 outdoor activities in Kashmir",
    url: TRIPADVISOR_URL,
  },
  {
    platform: "Justdial",
    rating: 4.9,
    count: 26,
    countLabel: "ratings",
    url: JUSTDIAL_URL,
  },
  // Add Google here once Climbex has a Google Business Profile with reviews.
];

export interface Review {
  id: number;
  name: string;
  from?: string;
  rating: number;
  title: string;
  /** Verbatim review text (only if we have it word-for-word). */
  text?: string;
  trip: string;
  date: string;
  source: "Tripadvisor" | "Justdial" | "Google";
  url: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Harshada W",
    from: "Mumbai",
    rating: 5,
    title: "Best Trek Leader ever !!",
    text: "We went with Leo to the Kashmir Great Lakes Trek In July 2021. It was my first Himalayan trek and was the best experience ever!!",
    trip: "Kashmir Great Lakes Trek",
    date: "July 2021",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
  {
    id: 2,
    name: "Charlie",
    from: "Panjim",
    rating: 5,
    title: "Fantastic Tour",
    trip: "Kashmir tour",
    date: "March 2020",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
  {
    id: 3,
    name: "Mufeedh Mujeeb",
    from: "Kerala",
    rating: 5,
    title: "Best time in Kashmir with Leo",
    trip: "Kashmir trip",
    date: "February 2021",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
  {
    id: 4,
    name: "Fahis",
    rating: 5,
    title: "Simply wonderful trip in Kashmir with Leo",
    trip: "Kashmir trip",
    date: "April 2021",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
  {
    id: 5,
    name: "Milesaway",
    rating: 5,
    title: "Best Days Ever",
    trip: "Camping in the mountains",
    date: "June 2021",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
  {
    id: 6,
    name: "Maria S",
    rating: 5,
    title: "Best travel to Kashmir India 🇮🇳",
    trip: "Summer trip with friends",
    date: "July 2019",
    source: "Tripadvisor",
    url: TRIPADVISOR_URL,
  },
];
