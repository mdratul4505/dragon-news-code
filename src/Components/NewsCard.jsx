import { FaBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    details,
    rating,
    total_view,
    author,
    tags = [],
  } = news;

  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString("en-CA")
    : "Unknown Date";

  return (
    <div className="bg-base-100 border rounded-xl shadow-sm overflow-hidden mb-6">
      {/* ---------- Header ---------- */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-secondary" />
          <FaShareAlt className="cursor-pointer hover:text-secondary" />
        </div>
      </div>

      {/* ---------- Title ---------- */}
      <div className="px-4 pb-2">
        <h2 className="text-lg font-bold leading-snug hover:text-secondary cursor-pointer border-l-4 border-secondary pl-2">
          {title}
        </h2>
      </div>

      {/* ---------- Image ---------- */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* ---------- Details ---------- */}
      <div className="px-4 py-3">
        <p className="text-gray-700 text-sm leading-relaxed">
          Wednesday, August 24, 2022 |{" "}
          <span className="font-medium">Tag Cloud Tags:</span>{" "}
          {tags.join(", ")} —{" "}
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
          <span className="text-orange-500 font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      </div>

      {/* ---------- Footer ---------- */}
      <div className="flex justify-between items-center border-t border-base-200 px-4 py-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-orange-500 text-lg" />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye className="text-gray-500 text-lg" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard
