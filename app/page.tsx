import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { services } from "./constants";
import Link from "next/link";

// Define the props for ServiceCard
interface ServiceCardProps {
  title: string;
  image: string;
  name: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, title, image }) => {

  return (
    <div className="relative group">
      {/* Service Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Button inside the image */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <Button className="px-4 py-2 font-semibold rounded-md">
          <Link href={`/services/${name}`}>View {title}</Link>
        </Button>
      </div>
    </div>
  );
};


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header color={'white'}/>

      {/* Hero Section */}
      <section>
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          <img
            alt="Luxury Spa"
            src='hero-spa.jpg'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 2 }}>
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold">Relax, Rejuvenate, and Refresh</h1>
              <p className="mt-4 text-lg">Experience world-class treatments in the heart of tranquility</p>
              <Button className="w-40 h-12 mt-10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(services).map((key) => (
              <ServiceCard
                key={key}
                name={key} 
                title={services[key].name}
                image={services[key].image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What should I expect during my first visit?</AccordionTrigger>
              <AccordionContent>
                You’ll be greeted by our friendly staff and given a brief consultation before your treatment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to book an appointment in advance?</AccordionTrigger>
              <AccordionContent>
                Yes, appointments are recommended to ensure availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What services do you offer for couples?</AccordionTrigger>
              <AccordionContent>
                We offer couples massages and body treatments designed for relaxation together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Cancellations must be made 24 hours in advance to avoid a fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>      
    </div>
  );
};

export default Home;
