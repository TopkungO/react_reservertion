const CampingCard = ({ camping }) => {
  return (
    <article className="hover:scale-105 hover:duration-300 shadow-md p-2 rounded-md">
      <div className="h-[300px] rounded-md mb-2">
        <img
          src={camping.secure_url}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{camping.title}</h3>
      </div>

      <p className="text-gray-700">{camping.description}</p>
      <div className="flex justify-between">
        <p className="font-semibold">ราคา {camping.price} THB</p>
        <p>
          {camping.lat.toFixed(4)},{camping.lng.toFixed(4)}
        </p>
      </div>
    </article>
  );
};

export default CampingCard;
