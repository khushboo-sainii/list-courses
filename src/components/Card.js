import React from 'react'
import { FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    const info = course.description;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
      // Logic
      if(likedCourses.includes(course.id)) {
        // already liked
        setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id) ));
        toast.warning("Like Removed.");
      }
      else {
        // not liked previously.
        // we have to insert this course into liked course.
        if(likedCourses.length === 0) {
          setLikedCourses([course.id]);
        }
        else {
          // non-empty already
          setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully.");
      }
    }

  return (
    <div className='w-[300px] bg-bgDark opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt='' />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-content-center'>
        <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ?
              (<FcLike fontSize="1.75rem" />):
              (<FcLikePlaceholder fontSize="1.75rem" />)
            }

        </button>
      </div>
      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
        {info.length > 100 ? `${info.substring(0, 100)}...` : info}
        </p>
      </div>
    </div>
  )
}

export default Card
