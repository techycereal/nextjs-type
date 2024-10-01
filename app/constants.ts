// Define the structure of a service
interface Service {
  name: string;
  description: string;
  price: number;
  image: string;
}

// Define the structure of a location
interface Location {
  name: string;
  description: string;
  image: string;
}

// Export the services object with the correct type
export const services: Record<string, Service> = {
  'massage-therapy': {
    name: 'Massage Therapy',
    description: 'Experience the soothing benefits of our massage therapy, designed to relieve tension, reduce stress, and promote relaxation. Choose from various techniques, including Swedish, deep tissue, and aromatherapy. Each session is customized to meet your individual needs, ensuring a unique experience that rejuvenates both body and mind.',
    price: 80, // Example price, adjust as necessary
    image: '/massage-therapy.webp',
  },
  'facial-treatments': {
    name: 'Facial Treatments',
    description: 'Our facial treatments are tailored to your skin type, utilizing high-quality products to cleanse, exfoliate, and nourish your skin, leaving you with a radiant glow. We assess your skin’s needs and create a personalized treatment plan that includes masks, serums, and moisturizers to achieve optimal results.',
    price: 100, // Example price, adjust as necessary
    image: '/facial-treatments.jpg',
  },
  'body-treatments': {
    name: 'Body Treatments',
    description: 'Indulge in our invigorating body treatments that exfoliate and hydrate your skin, removing dead skin cells and leaving you smooth and refreshed. Our expert therapists use a blend of natural ingredients and techniques to ensure your skin is nourished and revitalized, perfect for preparing your skin for any occasion.',
    price: 90, // Example price, adjust as necessary
    image: '/body-treatment.jfif',
  },
  'manicures-pedicures': {
    name: 'Manicures & Pedicures',
    description: 'Treat yourself to a luxurious manicure and pedicure, including nail shaping, cuticle care, exfoliation, and a relaxing massage, followed by your choice of polish. Our services are designed to enhance the beauty of your hands and feet while providing a soothing experience, ensuring you leave feeling pampered and polished.',
    price: 50, // Example price, adjust as necessary
    image: '/manicures.jfif',
  },
  'aromatherapy': {
    name: 'Aromatherapy',
    description: 'Combine the healing power of touch with the soothing properties of essential oils in our aromatherapy massage, tailored to promote relaxation and rejuvenation. Each session begins with a consultation to select the oils that resonate with you, enhancing your experience and leaving you feeling balanced and restored.',
    price: 85, // Example price, adjust as necessary
    image: '/aromatherapy.jfif',
  },
};

// Export the locations array with the correct type
export const locations: Location[] = [
  {
    name: 'Downtown Spa',
    description: 'Located in the heart of the city, our Downtown Spa offers a tranquil oasis for relaxation and rejuvenation.',
    image: '/downtown.jpg', // Image path should be in public directory
  },
  {
    name: 'Uptown Spa',
    description: 'Our Uptown Spa features luxurious treatment rooms and a serene environment for the ultimate spa experience.',
    image: '/uptownspa.jpg', // Image path should be in public directory
  },
  {
    name: 'Coastal Spa',
    description: 'Overlooking the ocean, our Coastal Spa provides a unique ambiance and the finest spa services.',
    image: '/coastal-spa.jpg', // Image path should be in public directory
  },
];
