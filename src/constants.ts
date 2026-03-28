import { MenuItem, Deal, Review } from './types';

export const WHATSAPP_NUMBER = "923001234567"; // Placeholder
export const PHONE_NUMBER = "021-12345678"; // Placeholder
export const ADDRESS = "Plot 123, Block 4, Gulshan-e-Iqbal, Karachi";
export const OPENING_HOURS = "12:00 PM - 12:00 AM";

export const DEALS: Deal[] = [
  {
    id: 'deal-1',
    title: 'Deal 1 — Roll Deal',
    includes: ['1 Chicken Cheez Roll', '1 Chicken Mayo Garlic Roll', '1 Beef Malai Kabab Roll', '3× Cold Drinks'],
    price: 1100,
    badge: 'BEST VALUE'
  },
  {
    id: 'deal-2',
    title: 'Deal 2 — Malai Boti',
    includes: ['1 Plat Malai Boti', '2 Seekh Kabab', '2 Plain Paratha', '1 Cold Drink', 'Mayo Dip'],
    price: 950
  },
  {
    id: 'deal-3',
    title: 'Deal 3 — Karahi Meal',
    includes: ['Chicken Creamy Karahi 250g', '2 Plain Paratha', '2 Cold Drinks', 'Rita', 'Kheer 200g'],
    price: 1000
  },
  {
    id: 'deal-4',
    title: 'Deal 4 — Keema Fry',
    includes: ['Dum Smoky Keema Fry 300g', '2 Plain Paratha', 'Kheer Malai 200g', 'Cold Drink', 'Rita Dip'],
    price: 1100
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Pakistani Mains
  { 
    id: 'm1', 
    name: 'Chicken Cheez Malai Handi (250g)', 
    description: 'Our signature creamy handi topped with melted mozzarella and traditional spices. A melt-in-your-mouth experience.', 
    price: 600, 
    category: 'Pakistani Mains', 
    isBestseller: true, 
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'm2', 
    name: 'Dum Keema Fry (300g)', 
    description: 'Smoky slow-cooked minced meat with a rich blend of aromatic spices. Perfectly paired with hot paratha.', 
    price: 600, 
    category: 'Pakistani Mains', 
    isBestseller: true, 
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'm3', 
    name: 'Chicken Karahi', 
    description: 'Traditional street-style karahi cooked with fresh tomatoes, green chilies, and secret Shah Jee spices.', 
    price: 500, 
    category: 'Pakistani Mains', 
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'm4', 
    name: 'Beef Karahi', 
    description: 'Tender beef chunks slow-cooked in a spicy tomato-based gravy. A hearty Karachi classic.', 
    price: 950, 
    category: 'Pakistani Mains', 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' 
  },
  
  // BBQ
  { 
    id: 'b1', 
    name: 'Malai Boti (Chicken)', 
    description: 'Succulent chicken pieces marinated in cream and mild spices, grilled to perfection over charcoal.', 
    price: 380, 
    category: 'BBQ Corner', 
    isBestseller: true, 
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'b2', 
    name: 'Seekh Kabab (Beef Malai)', 
    description: 'Juicy beef skewers with a hint of cream and traditional BBQ flavor. Soft and flavorful.', 
    price: 350, 
    category: 'BBQ Corner', 
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'b3', 
    name: 'Chatkhara Boti (Beef BBQ)', 
    description: 'Tangy and spicy beef chunks grilled over charcoal for that authentic smoky taste.', 
    price: 400, 
    category: 'BBQ Corner', 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'b4', 
    name: 'Gola Kabab', 
    description: 'Soft, melt-in-your-mouth kababs with a rich blend of spices. A true BBQ delicacy.', 
    price: 480, 
    category: 'BBQ Corner', 
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800' 
  },

  // Chinese
  { 
    id: 'c1', 
    name: 'Chinese Rice', 
    description: 'Classic egg fried rice with fresh vegetables and a hint of soy. Perfect companion for Shashlik.', 
    price: 400, 
    category: 'Chinese Corner', 
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'c2', 
    name: 'Chicken Shashlik', 
    description: 'Sweet and sour chicken with bell peppers, served with our signature fried rice.', 
    price: 500, 
    category: 'Chinese Corner', 
    image: 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?semt=ais_hybrid&w=740&q=80' 
  },
  { 
    id: 'c3', 
    name: 'Creamy Pasta', 
    description: 'Rich white sauce pasta with grilled chicken and mushrooms. A modern favorite.', 
    price: 400, 
    category: 'Chinese Corner', 
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800' 
  },

  // Rolls
  { 
    id: 'r1', 
    name: 'Chicken Cheez Roll', 
    description: 'Crispy paratha roll filled with cheesy chicken and our secret chutney.', 
    price: 275, 
    category: 'Rolls & Wraps', 
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'r2', 
    name: 'Chicken Mayo Garlic Spicy Roll', 
    description: 'Spicy chicken roll with extra garlic mayo and fresh onions for a bold kick.', 
    price: 250, 
    category: 'Rolls & Wraps', 
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'r3', 
    name: 'Beef Malai Kabab Roll', 
    description: 'Juicy beef malai kabab wrapped in a crispy, golden paratha.', 
    price: 250, 
    category: 'Rolls & Wraps', 
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800' 
  },

  // Desserts
  { 
    id: 'd1', 
    name: 'Rasmalai (300g)', 
    description: 'Traditional sweet milk dessert with soft cheese dumplings. A perfect end to your meal.', 
    price: 400, 
    category: 'Desserts', 
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'd2', 
    name: 'Kheer', 
    description: 'Creamy rice pudding topped with pistachios and almonds. Traditional Karachi style.', 
    price: 350, 
    category: 'Desserts', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZK5N8ezZpJjZjM-FRa_NowYfDcMQ1fQG83g&s' 
  },
  { 
    id: 'd3', 
    name: 'Fruit Trifle', 
    description: 'Layered dessert with custard, jelly, fruits, and sponge cake. A family favorite.', 
    price: 500, 
    category: 'Desserts', 
    image: 'https://plus.unsplash.com/premium_photo-1669293558903-3f76917a2f45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RnJ1aXQlMjBUcmlmbGV8ZW58MHx8MHx8fDA%3D' 
  },

  // Healthy
  { 
    id: 'h1', 
    name: 'Talbina', 
    description: 'A healthy Sunnah food made from barley, milk, and honey. Nutritious and delicious.', 
    price: 250, 
    category: 'Healthy Food', 
    image: 'data:image/jpeg;base64,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' 
  },
];

export const REVIEWS: Review[] = [
  { id: 'rev1', name: 'Ahmed R.', area: 'Gulshan-e-Iqbal', rating: 5, text: 'Malai Boti was absolutely amazing. Ordered directly on WhatsApp and it was at my door in 30 minutes. Better than anything I\'ve had on delivery apps.' },
  { id: 'rev2', name: 'Sara K.', area: 'DHA Phase 6', rating: 5, text: 'The Dum Keema Fry is a must-try! Authentic smoky flavor and very generous portions. Highly recommend ordering direct.' },
  { id: 'rev3', name: 'Zain M.', area: 'North Nazimabad', rating: 4, text: 'Great value deals. The Roll Deal is perfect for a quick family dinner. Fast delivery and fresh food.' },
];
