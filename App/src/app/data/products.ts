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

// Custom defined mock dataset per page to ensure visual difference
const pageDataTemplates: Record<number, Array<{
  name: string;
  description: string;
  rating: number;
  reviews: number;
  priceVal: number;
  image: string;
  family: string;
  gender: string;
  occasion: string;
  meter: string;
}>> = {
  1: [
    { name: "Jade Serenity", description: "Inspired by Dio Savotage", rating: 4.8, reviews: 250, priceVal: 1720, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Unisex", occasion: "Casual", meter: "Moderate" },
    { name: "Coral Sea", description: "Inspired by Creed Aventus", rating: 4.9, reviews: 180, priceVal: 1420, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Formal", meter: "Long Lasting" },
    { name: "Magnetism", description: "Inspired by YSL Y EDP", rating: 4.7, reviews: 120, priceVal: 1220, image: "/images/products/magnetism.png", family: "Woody", gender: "Men", occasion: "Night Out", meter: "Moderate" },
    { name: "Hellenist", description: "Inspired by Bleu De Chanel", rating: 4.9, reviews: 310, priceVal: 1320, image: "/images/products/hellenist.png", family: "Oriental", gender: "Women", occasion: "Date Night", meter: "Beast Mode" },
    { name: "Magnetism Light", description: "Inspired by YSL L'Homme", rating: 4.5, reviews: 95, priceVal: 1150, image: "/images/products/magnetism.png", family: "Citrus", gender: "Men", occasion: "Daily Wear", meter: "Intimate" },
    { name: "Hellenist Intense", description: "Inspired by Bleu De Chanel Parfum", rating: 4.9, reviews: 142, priceVal: 1650, image: "/images/products/hellenist.png", family: "Oriental", gender: "Women", occasion: "Formal", meter: "Beast Mode" },
    { name: "Jade Serenity Sport", description: "Inspired by Dio Savotage Cool", rating: 4.6, reviews: 88, priceVal: 1520, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Unisex", occasion: "Casual", meter: "Moderate" },
    { name: "Coral Sea Gold", description: "Inspired by Creed Aventus Cologne", rating: 4.8, reviews: 110, priceVal: 1580, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Daily Wear", meter: "Long Lasting" },
    { name: "Coral Sea Absolute", description: "Inspired by Creed Viking", rating: 4.7, reviews: 64, priceVal: 1620, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Formal", meter: "Long Lasting" },
    { name: "Jade Serenity Elixir", description: "Inspired by Sauvage Elixir", rating: 4.9, reviews: 205, priceVal: 1890, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Unisex", occasion: "Night Out", meter: "Beast Mode" },
    { name: "Magnetism Night", description: "Inspired by YSL La Nuit De L'Homme", rating: 4.8, reviews: 154, priceVal: 1290, image: "/images/products/magnetism.png", family: "Woody", gender: "Men", occasion: "Date Night", meter: "Intimate" },
    { name: "Hellenist Bloom", description: "Inspired by Chance Chanel", rating: 4.7, reviews: 78, priceVal: 1390, image: "/images/products/hellenist.png", family: "Floral", gender: "Women", occasion: "Daily Wear", meter: "Moderate" },
  ],
  2: [
    { name: "Amber Gold", description: "Inspired by Xerjoff Erba Pura", rating: 4.9, reviews: 195, priceVal: 2120, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Unisex", occasion: "Night Out", meter: "Beast Mode" },
    { name: "Velvet Oud", description: "Inspired by Tom Ford Oud Wood", rating: 4.8, reviews: 210, priceVal: 2420, image: "/images/products/magnetism.png", family: "Woody", gender: "Men", occasion: "Formal", meter: "Long Lasting" },
    { name: "Rouge 540", description: "Inspired by Baccarat Rouge 540", rating: 4.9, reviews: 420, priceVal: 2820, image: "/images/products/hellenist.png", family: "Oriental", gender: "Unisex", occasion: "Date Night", meter: "Beast Mode" },
    { name: "Silver Mountain", description: "Inspired by Creed Silver Mountain Water", rating: 4.7, reviews: 135, priceVal: 1820, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Daily Wear", meter: "Moderate" },
    { name: "Gold Dust", description: "Inspired by Xerjoff Naxos", rating: 4.8, reviews: 85, priceVal: 2250, image: "/images/products/jade_serenity.png", family: "Oriental", gender: "Unisex", occasion: "Night Out", meter: "Long Lasting" },
    { name: "Velvet Oud Sport", description: "Inspired by TF Grey Vetiver", rating: 4.6, reviews: 72, priceVal: 1980, image: "/images/products/magnetism.png", family: "Woody", gender: "Men", occasion: "Casual", meter: "Moderate" },
    { name: "Rouge Lumiere", description: "Inspired by BR540 Extrait", rating: 4.9, reviews: 165, priceVal: 2990, image: "/images/products/hellenist.png", family: "Oriental", gender: "Unisex", occasion: "Date Night", meter: "Beast Mode" },
    { name: "Silver Spring", description: "Inspired by Creed Himalaya", rating: 4.6, reviews: 54, priceVal: 1750, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Daily Wear", meter: "Moderate" },
    { name: "Amber Gold Fresh", description: "Inspired by Xerjoff Renaissance", rating: 4.7, reviews: 62, priceVal: 2050, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Unisex", occasion: "Casual", meter: "Long Lasting" },
    { name: "Velvet Tobacco", description: "Inspired by TF Tobacco Vanille", rating: 4.8, reviews: 188, priceVal: 2550, image: "/images/products/magnetism.png", family: "Woody", gender: "Unisex", occasion: "Night Out", meter: "Beast Mode" },
    { name: "Rouge Satin", description: "Inspired by Oud Satin Mood", rating: 4.9, reviews: 112, priceVal: 2890, image: "/images/products/hellenist.png", family: "Floral", gender: "Women", occasion: "Formal", meter: "Beast Mode" },
    { name: "Silver Crest", description: "Inspired by Creed Green Irish Tweed", rating: 4.8, reviews: 145, priceVal: 1880, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Formal", meter: "Long Lasting" },
  ],
  3: [
    { name: "Noir Extreme", description: "Inspired by Tom Ford Noir Extreme", rating: 4.8, reviews: 164, priceVal: 2250, image: "/images/products/magnetism.png", family: "Woody", gender: "Men", occasion: "Date Night", meter: "Long Lasting" },
    { name: "Royal Oud", description: "Inspired by Creed Royal Oud", rating: 4.7, reviews: 92, priceVal: 2950, image: "/images/products/coral_sea.png", family: "Woody", gender: "Men", occasion: "Formal", meter: "Moderate" },
    { name: "Green Irish", description: "Inspired by Creed Green Irish Tweed", rating: 4.8, reviews: 205, priceVal: 1950, image: "/images/products/coral_sea.png", family: "Citrus", gender: "Men", occasion: "Daily Wear", meter: "Long Lasting" },
    { name: "Ocean Breeze", description: "Inspired by Davidoff Cool Water", rating: 4.5, reviews: 340, priceVal: 1150, image: "/images/products/jade_serenity.png", family: "Fresh", gender: "Men", occasion: "Casual", meter: "Intimate" },
    { name: "Noir Sparkle", description: "Inspired by TF Noir De Noir", rating: 4.7, reviews: 58, priceVal: 2350, image: "/images/products/magnetism.png", family: "Floral", gender: "Unisex", occasion: "Night Out", meter: "Long Lasting" },
    { name: "Royal Sandal", description: "Inspired by Creed Original Santal", rating: 4.6, reviews: 49, priceVal: 1850, image: "/images/products/coral_sea.png", family: "Oriental", gender: "Unisex", occasion: "Daily Wear", meter: "Moderate" },
    { name: "Green Mint", description: "Inspired by Versace Eros", rating: 4.7, reviews: 280, priceVal: 1250, image: "/images/products/jade_serenity.png", family: "Citrus", gender: "Men", occasion: "Night Out", meter: "Beast Mode" },
    { name: "Ocean Tide", description: "Inspired by Acqua Di Gio", rating: 4.8, reviews: 310, priceVal: 1350, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Casual", meter: "Moderate" },
    { name: "Noir Velvet", description: "Inspired by TF Black Orchid", rating: 4.8, reviews: 172, priceVal: 2150, image: "/images/products/magnetism.png", family: "Floral", gender: "Women", occasion: "Night Out", meter: "Beast Mode" },
    { name: "Royal Rose", description: "Inspired by TF Cafe Rose", rating: 4.6, reviews: 67, priceVal: 2450, image: "/images/products/hellenist.png", family: "Floral", gender: "Women", occasion: "Date Night", meter: "Moderate" },
    { name: "Green Cedar", description: "Inspired by Hermes Terre D'Hermes", rating: 4.8, reviews: 220, priceVal: 1450, image: "/images/products/jade_serenity.png", family: "Woody", gender: "Men", occasion: "Formal", meter: "Long Lasting" },
    { name: "Ocean Wave", description: "Inspired by ADG Profondo", rating: 4.8, reviews: 125, priceVal: 1490, image: "/images/products/coral_sea.png", family: "Fresh", gender: "Men", occasion: "Casual", meter: "Long Lasting" },
  ],
};

// Fill rest of the pages (4 to 10) dynamically cycling so we have 120 items
export const productsCatalog: Product[] = Array.from({ length: 120 }, (_, i) => {
  const pageIndex = Math.floor(i / 12) + 1;
  const itemIndex = i % 12;

  // Use defined page templates if available, else fallback to cycling page 1-3
  const activeTemplatePage = pageDataTemplates[pageIndex] 
    ? pageIndex 
    : ((pageIndex - 1) % 3) + 1;

  const baseProduct = pageDataTemplates[activeTemplatePage][itemIndex];

  // Variations to make page 4+ look different even if they copy template properties
  const ratingVariation = Math.min(5.0, Math.max(3.8, baseProduct.rating + (pageIndex % 3 - 1) * 0.05));
  const reviewVariation = baseProduct.reviews + (pageIndex * 3);
  const priceVal = baseProduct.priceVal + (pageIndex * 15);
  const priceStr = `${priceVal.toLocaleString()}tk`;

  // Make sure page 4+ titles have a page suffix so they look distinct
  const pageSuffix = pageIndex > 3 ? ` Vol.${pageIndex}` : "";

  return {
    id: (i + 1).toString(),
    name: `${baseProduct.name}${pageSuffix}`,
    description: baseProduct.description,
    rating: Number(ratingVariation.toFixed(1)),
    reviews: reviewVariation,
    price: priceStr,
    priceVal: priceVal,
    volume: "100ml",
    image: baseProduct.image,
    family: baseProduct.family,
    gender: baseProduct.gender,
    occasion: baseProduct.occasion,
    meter: baseProduct.meter,
  };
});
