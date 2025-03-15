'use client'; // Only if using Next.js App Router
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function SingleBlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <div className="text-center mb-4">
        <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
          App
        </span>
      </div>

      <h1 className="text-4xl font-bold text-center mb-4">
        How To Start Using Banko For Your Startup
      </h1>

  
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.
      </p>


      <div className="mb-10">
        <Image
          src="/image/image (6).png" 
          alt="Startup Payment"
          width={800}
          height={450}
          className="rounded-lg object-cover w-full"
        />
      </div>

      
      <div className="prose prose-lg max-w-none">
        <h2>Et malesuada fames ac turpis</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi blandit commodo nulla facilisi nullam vehicula ipsum a arcu. Odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Enim facilisis gravida neque convallis a cras semper auctor neque. Ultricies tristique nulla aliquet enim tortor.
        </p>

        <p>
          Est pellentesque elit ullamcorper dignissim cras tincidunt. Mauris blandit cursus risus at ultrices mi tempus imperdiet nulla. Congue quisque egestas diam in arcu cursus. Ut etiam sit amet nisl purus. Eget egestas purus viverra accumsan in nisl nisi. Morbi tempus iaculis urna id volutpat lacus laoreet non. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.
        </p>

        <h2>Nascetur ridiculus mus</h2>
        <p>
          Sed eu malesuada odio, ac venenatis velit. Suspendisse nec facilisis nisl. Sagittis at varius vel pharetra vel turpis nunc. Id leo in vitae turpis massa sed elementum. Est ante in nibh mauris cursus mattis molestie a. Egestas pretium aenean pharetra magna ac placerat vestibulum. Nec nam aliquam sem et tortor consequat id porta nibh. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Viverra nam libero justo laoreet sit amet cursus sit amet dictum. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu.
        </p>
      </div>

   
      <div className="mt-12 flex justify-center space-x-4">
        <span className="text-gray-500">Share article:</span>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
