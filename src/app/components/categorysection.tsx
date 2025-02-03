import Image from "next/image";

interface Cards {
  text: string;
  imagePath: string;
}

const cardData: Cards[] = [
  {
    text: "Office",
    imagePath: "/banner.png",
  },
  {
    text: "House",
    imagePath: "/image2.png",
  },
  {
    text: "Decoration",
    imagePath: "/image1.png",
  },
];

const CategorySection = () => {
  return (
      <section>
      <h2 className="text-[32px] text-center mt-8 font-bold">Our Categorise</h2>
        <p className="text-[16px] text-center mb-8">Select the category for more info. And get it on Rent</p>
        
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {cardData.map((card, index) => (
              <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto border rounded-lg shadow-lg overflow-hidden text-center flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
              >
            <Image
                src={card.imagePath}
                alt={card.text}
                width={720}
                height={360}
                className="w-full h-[240px] object-cover"
            />
            <div className="p-4 bg-white">
                <h3 className="text-lg font-medium text-gray-800">{card.text}</h3>
            </div>
              </div>
          ))}
            </div>
      </section>
  );
};

export default CategorySection;
