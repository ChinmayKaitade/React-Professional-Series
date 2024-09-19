import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // heart button click logic (course is favorite or not)
    if (likedCourses.includes(course.id)) {
      // pahele se like hua pada hai course
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked Removed👎");
    } else {
      // pahale se like nahi hai ye course
      // insert karna hai ye course liked course me
      if (likedCourses === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty pahele se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully👍");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      {/* course image  */}
      <div className="relative">
        <img src={course.image.url} />

        {/* heart button  */}
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center ">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      {/* course title & description  */}
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
