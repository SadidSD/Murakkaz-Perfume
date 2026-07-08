export interface Product {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  priceVal: number;
  volume: string;
  image: string;
  family: string;
  gender: string;
  occasion: string;
  meter: string;
}

// Generate 120 products (12 items per page * 10 pages)
export const productsCatalog: Product[] = Array.from({ length: 120 }, (_, i) => {
  const pageIndex = Math.floor(i / 12) + 1;
  const itemIndex = (i % 12) + 1;

  const baseTypes = [
    {
      name: "Jade Serenity",
      description: "Inspired by Dio Savotage",
      rating: 4.8,
      reviews: 250,
      priceVal: 1720,
      image: "/images/products/jade_serenity.png",
      family: "Citrus",
      gender: "Unisex",
      occasion: "Casual",
      meter: "Moderate",
    },
    {
      name: "Coral Sea",
      description: "Inspired by Creed Aventus",
      rating: 4.9,
      reviews: 180,
      priceVal: 1420,
      image: "/images/products/coral_sea.png",
      family: "Fresh",
      gender: "Men",
      occasion: "Formal",
      meter: "Long Lasting",
    },
    {
      name: "Magnetism",
      description: "Inspired by YSL Y EDP",
      rating: 4.7,
      reviews: 120,
      priceVal: 1220,
      image: "/images/products/magnetism.png",
      family: "Woody",
      gender: "Men",
      occasion: "Night Out",
      meter: "Moderate",
    },
    {
      name: "Hellenist",
      description: "Inspired by Bleu De Chanel",
      rating: 4.9,
      reviews: 310,
      priceVal: 1320,
      image: "/images/products/hellenist.png",
      family: "Oriental",
      gender: "Women",
      occasion: "Date Night",
      meter: "Beast Mode",
    },
  ];

  const base = baseTypes[i % 4];

  // Add subtle variations based on item index and page index to make each page look unique
  const ratingVariation = Math.min(5.0, Math.max(3.8, base.rating + ((itemIndex % 3) - 1) * 0.1));
  const reviewVariation = base.reviews + (pageIndex * 8) - (itemIndex * 3);
  const priceVal = base.priceVal + (pageIndex * 20) - (itemIndex * 5);
  const priceStr = `${priceVal.toLocaleString()}tk`;

  return {
    id: (i + 1).toString(),
    name: base.name,
    description: base.description,
    rating: Number(ratingVariation.toFixed(1)),
    reviews: reviewVariation,
    price: priceStr,
    priceVal: priceVal,
    volume: "100ml",
    image: base.image,
    family: base.family,
    gender: base.gender,
    occasion: base.occasion,
    meter: base.meter,
  };
});
