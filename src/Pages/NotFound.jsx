import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white rounded-3xl px-4">
      <img
        src="https://i.ibb.co/B5G3zgyt/18499954-bubble-gum200-89-1.png"
        alt="404"
        className="w-56 mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Error 404
      </h1>

      <Link
        to="/"
        className="bg-lime-300 hover:bg-lime-400 px-8 py-3 rounded-lg font-medium transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
