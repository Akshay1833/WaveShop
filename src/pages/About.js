import React from "react";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="flex w-auto h-auto md:p-10 md:-mt-5">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 w-full h-full md:rounded-lg">
          <div className="text-white text-center font-bold text-sm md:text-3xl lg:text-6xl pt-10">
            <h1>Welcome to WaveShop</h1>
            <h2 className="mt-10">Your Destination for Fashion and Style!</h2>
          </div>
          <div className="flex sm:text-xs md:text-lg text-white mt-12 p-20">
            {/* Updated paragraph with adjusted styles */}
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              {/* Break down the long paragraph */}
              At WaveShop, we believe that clothing is more than just fabric; it's
            a statement, an expression of your individuality. We're passionate
            about curating a collection that resonates with your unique style,
            offering a blend of trendy, comfortable, and effortlessly chic
            clothing that empowers you to embrace your personality. Dive into
            our carefully curated selection of apparel that spans the latest
            fashion trends, timeless classics, and exclusive designs. From
            casual wear that exudes laid-back elegance to sophisticated pieces
            that make a statement, each item in our collection is handpicked
            with quality and style in mind. Our commitment to quality goes
            beyond the fabric; we strive to provide an exceptional shopping
            experience. Whether you're searching for the perfect outfit for a
            special occasion or looking to refresh your everyday wardrobe, our
            user-friendly platform ensures seamless browsing, secure
            transactions, and prompt delivery to your doorstep. Embrace the
            rhythm of your style journey with WaveShop. Join us in celebrating
            fashion that resonates with your rhythm, your vibe, and your unique
            wave. Let's ride the wave of style together!
              {/* ... other parts of the text */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
