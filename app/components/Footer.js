export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo  */}
        <div>
          <h2 className="text-2xl font-bold text-teal-600">banquee.</h2>
        </div>

        {/* About  */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Blog  */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Blog</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Crypto
              </a>
            </li>
          </ul>
        </div>

        {/* Webflow  */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Webflow</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                Styleguide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media  */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Social Media</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Credits  */}
      <div className="border-t border-gray-200 py-4 px-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>
          Made by{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Pawel Gola
          </a>{" "}
          · Powered by{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Webflow
          </a>
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Impressum
          </a>
          <a href="#" className="hover:underline">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
