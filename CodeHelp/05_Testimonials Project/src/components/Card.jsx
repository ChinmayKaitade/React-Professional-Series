import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px]  z-[25]"
          src={review.image}
        />

        <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] left-[10px] z-[-10]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>

        <p className="text-violet-300 text-sm uppercase">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
