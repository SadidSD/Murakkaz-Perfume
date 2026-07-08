// Mock data for Events page — replace with real content later

export interface UpcomingEvent {
  day: string;
  month: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface PreviousEvent {
  title: string;
  date: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface StoreLocation {
  name: string;
  address: string;
  phone: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    day: "03",
    month: "JUN",
    title: "We Are Going To Hold Again",
    subtitle: "",
    description:
      "Join us for our signature scent showcase. We're bringing together fragrance enthusiasts for an exclusive preview of our upcoming collection.",
    image: "/images/events/upcoming_1.jpg",
  },
  {
    day: "11",
    month: "JUL",
    title: "We Are Going To Another Again",
    subtitle: "",
    description:
      "An immersive experience where you can discover, sample, and learn about the art of perfumery from our master craftsmen.",
    image: "/images/events/upcoming_2.jpg",
  },
  {
    day: "15",
    month: "AUG",
    title: "International Convention On Rustication In 2026",
    subtitle: "",
    description:
      "Our biggest event of the year — a three-day convention celebrating everything about fragrance culture and artisanal perfumery.",
    image: "/images/events/upcoming_3.jpg",
  },
];

export const previousEvents: PreviousEvent[] = [
  {
    title: "Dhaka Fragrance Expo 2025",
    date: "March 15, 2025",
    image: "/images/events/prev_1.jpg",
    category: "Expo",
  },
  {
    title: "Dubai Premiere Show Lounge",
    date: "January 20, 2025",
    image: "/images/events/prev_2.jpg",
    category: "Premiere",
  },
  {
    title: "Annual Awards Ceremony",
    date: "December 5, 2024",
    image: "/images/events/prev_3.jpg",
    category: "Awards",
  },
  {
    title: "Community Meetup Chittagong",
    date: "October 18, 2024",
    image: "/images/events/prev_4.jpg",
    category: "Meetup",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/events/gallery_1.jpg", alt: "Event gallery photo 1" },
  { src: "/images/events/gallery_2.jpg", alt: "Event gallery photo 2" },
  { src: "/images/events/gallery_3.jpg", alt: "Event gallery photo 3" },
  { src: "/images/events/gallery_4.jpg", alt: "Event gallery photo 4" },
  { src: "/images/events/gallery_5.jpg", alt: "Event gallery photo 5" },
  { src: "/images/events/gallery_6.jpg", alt: "Event gallery photo 6" },
];

export const storeLocations: StoreLocation[] = [
  {
    name: "Murakkaz Dhaka Flagship",
    address: "House 42, Road 11, Block E, Bashundhara R/A, Dhaka - 1229",
    phone: "+880 1234-567890",
  },
  {
    name: "Murakkaz Chittagong",
    address: "Level 4, GEC More, Agrabad Commercial Area, Chittagong, BD - 4100",
    phone: "+880 9876-543210",
  },
  {
    name: "Murakkaz Sylhet Outlet",
    address: "Jail Road, Zindabazar, Opposite City Center, Sylhet, BD - 3100",
    phone: "+880 1122-334455",
  },
];
