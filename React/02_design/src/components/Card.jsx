const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        src="https://images.unsplash.com/photo-1765498067720-6ff6847f8f85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="unsplash unsplash"
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quam
          natus. Exercitationem maiores ea officia!
        </p>
        <button className="mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
