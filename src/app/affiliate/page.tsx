import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from 'next/link';

export default function Affiliates() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-indigo-600">
            Affiliate Program
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10">
            Partner with us and earn commission by promoting Images by Oleg
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600 text-center">
            Why Join Our Affiliate Program?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>
              <strong>Earn competitive commissions:</strong>  Get rewarded for every new customer you refer to Images by Oleg.
            </li>
            <li>
              <strong>Exclusive discounts and offers:</strong>  Provide your audience with special deals and promotions.
            </li>
            <li>
              <strong>High-quality marketing materials:</strong> Access a range of banners, text links, and other resources to promote Images by Oleg effectively.
            </li>
            <li>
              <strong>Dedicated support:</strong> Our affiliate team is here to assist you with any questions or concerns.
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600 text-center">
            How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>
              <strong>Sign up:</strong> Join our affiliate program and create your account.
            </li>
            <li>
              <strong>Get your unique link:</strong> We&apos;ll provide you with a personalized referral link to share.
            </li>
            <li>
              <strong>Promote Images by Oleg:</strong> Share your link on your website, social media, or with your network.
            </li>
            <li>
              <strong>Earn commissions:</strong> When someone signs up for a paid plan using your link, you earn a commission.
            </li>
          </ol>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600">
            Ready to Become an Affiliate?
          </h2>
          <Link href="/signup" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 text-base sm:text-lg md:text-xl">
            Join Now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
