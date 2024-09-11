/* eslint-disable react/prop-types */
// Card.jsx
// eslint-disable-next-line react/prop-types
const Card = ({
  title,
  description,
  image,
  showButtons,
  projectLink,
  repoLink,
}) => {
  return (
    <div className="p-4 w-full md:w-1/2 lg:w-1/2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h5 className="text-xl font-bold mb-2">{title}</h5>
          <p className="text-gray-700">{description}</p>
          {showButtons && (
            <div className="flex justify-between">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Ver Proyecto
                </button>
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Ver Repositorio
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
