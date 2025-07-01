import { useState } from "react";
import bg1 from "../../assets/faqs/bg1.jpg";

function FAQS() {
  const [faqs, _] = useState<FaqsSlideProps[]>([
    {
      q: "Do you have vegetarian/vegan/gluten-free options?",
      a: "Yes! We have several vegetarian dishes, and we can adapt many of our pastas to be vegan or gluten-free. Just let us know what you need and we'll do our best to make sure you enjoy your meal to the fullest. We don't currently offer gluten-free pizza.",
    },
    {
      q: "Do you accept reservations?",
      a: "Yes, we highly recommend making a reservation in order to ensure a spot. Nevertheless if you come as walk in we will do our best to find you a table!",
    },
    {
      q: "Do you have delivery?",
      a: "Not for the moment, we love when you come in and enjoy everything right here, in the moment. If you're unable to visit us in person, you can always order ahead and pick up your food at the restaurant.",
    },
    {
      q: "What dessert should I absolutely try?",
      a: "The tiramisu is a classic — it never disappoints! But if you're in the mood for something different, our lemon tart is one of our personal favorites. Choosing just one might be the hardest part!",
    },
    {
      q: "Are dogs allowed? Can we bring our pet?",
      a: "We love animals! But to keep the space comfortable and safe for everyone, we currently only allow service dogs with proper identification.",
    },
    {
      q: "Is there parking available?",
      a: "We don't have private parking at the moment, but there are public lots and private parking options just a short walk away.",
    },
  ]);

  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  return (
    <div
      className="w-full h-screen bg-center bg-cover flex justify-center items-center flex-col gap-14 select-none"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <span
        style={{ fontFamily: "Ittrecoleta Regular" }}
        className="md:text-8xl text-5xl text-white"
      >
        FAQ<span className="font-sans">'</span>s
      </span>
      <span
        className="md:w-[40%] w-[90%] h-auto overflow-x-auto flex bg-white rounded-3xl snap-mandatory snap-x hide-scrollbar hover:scale-105 tr cursor-pointer"
        onClick={() => setSelectedSlide((selectedSlide + 1) % faqs.length)}
      >
        <span
          className="flex w-full tr"
          style={{ transform: `translateX(-${selectedSlide * 100}%)` }}
        >
          {faqs.map((faq) => (
            <FaqsSlide a={faq.a} q={faq.q} />
          ))}
        </span>
      </span>
    </div>
  );
}

export default FAQS;

type FaqsSlideProps = {
  q: string;
  a: string;
};

const FaqsSlide: React.FC<FaqsSlideProps> = ({ q, a }) => {
  return (
    <div className="min-w-full snap-center p-5 md:text-2xl text-xl flex flex-col gap-2">
      <span className="" style={{ fontFamily: "Afacad-Bold" }}>
        Q: {q}
      </span>
      <span style={{ fontFamily: "Afacad-Regular" }}>A: {a}</span>
    </div>
  );
};
