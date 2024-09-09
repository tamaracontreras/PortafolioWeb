// Card.jsx
// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  return (
    <div className="p-4 w-full md:w-1/2 lg:w-1/2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h5 className="text-xl font-bold mb-2">{title}</h5>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
