import Header from '@/app/components/Header';
import { services } from '../../constants';

// Define the structure of a service
interface Service {
  name: string;
  description: string;
  price: number;
  image: string;
}
 
// Define the expected shape of the params
interface Params {
  slug: string;
}

interface ServicePageProps {
  params: Params;
}

function ServicePage({ params }: ServicePageProps) {
  const service: Service | undefined = services[params.slug];

  // If the service does not exist, return a 404 page
  if (!service) {
    return (
      <div>
        <Header color={'white'}/>
        {/* You can customize this 404 message */}
        <section className="flex items-center justify-center h-screen text-center">
          <div>
            <h1 className="text-5xl font-bold">404 - Not Found</h1>
            <p className="mt-4 text-lg">The requested service does not exist.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Header color={'white'}/>
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={service.image} // Use the service image
          alt={`${service.name} Hero`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold">{service.name}</h1>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Aligned Text */}
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Details</h2>
            <p className="mb-4 text-base md:text-lg">{service.description}</p>
            <p className="text-lg md:text-xl font-bold">Price: ${service.price}</p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={service.image} // You can use a different image if needed
              alt={service.name}
              className="w-full h-auto rounded-md" // Optional styling
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
