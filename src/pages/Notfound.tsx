import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Page not found
      </p>
      <p className="mt-2 text-sm text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default Notfound;