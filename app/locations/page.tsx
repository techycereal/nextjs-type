import { locations } from '../constants';
import Header from '../components/Header';

const Locations = () => {
  return (
    <>
      <Header color='black'/>
      <div className="max-w-7xl mx-auto px-4 py-24">

        {locations.map((location, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            {/* Location Image */}
            <img
              src={location.image} // Image path for the location
              alt={location.name}
              className="w-full md:w-1/2 h-auto rounded-md mb-6 md:mb-0"
            />
            
            {/* Location Text */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-semibold mb-2">{location.name}</h2>
              <p className="text-lg">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Locations;
