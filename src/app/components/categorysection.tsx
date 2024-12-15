import Image from "next/image";

interface Cards {
  text: string;
  imagePath: string;
}

const cardData: Cards[] = [
  {
    text: "Dining",
    imagePath: "/banner.png",
  },
  {
    text: "Living",
    imagePath: "/image2.png",
  },
  {
    text: "Bedroom",
    imagePath: "/image1.png",
  },
];

const CategorySection = () => {
  return (
      <section>
      <h2 className="text-[32px] text-center mt-8 font-bold">Browse The Renge</h2>
        <p className="text-[16px] text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <div className="block md:block lg:flex xl:flex gap-6 overflow-x-auto p-6 justify-around">

          {cardData.map((card, index) => (
              <div
                  key={index}
                  className="w-full md:w-full lg:w-[720px] xl:w-[720px] h-[480px] my-5 md:my-5 lg:my-0 xl:my-0 border rounded-lg shadow-lg overflow-hidden text-center flex flex-col justify-between"
              >
                  <Image
                      src={card.imagePath}
                      alt={card.text}
                      width={720}
                      height={360} // Adjusted height for the image
                      className="w-full h-[360px] object-cover" />
                  <div className="p-4">
                      <h3 className="text-lg font-medium">{card.text}</h3>
                  </div>
              </div>
          ))}
      </div>
      </section>
  );
};

export default CategorySection;
