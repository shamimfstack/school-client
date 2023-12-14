import SectionTitle from "../../../../components/SectionTItle";
import learningImg from "../../../../../public/images/happy-learning.jpg";
import busImg from "../../../../../public/images/school-bus.jpg";
import pencilImg from "../../../../../public/images/pencil.png";
import worldImg from "../../../../../public/images/world-knowledge.jpg";
import libraryImg from "../../../../../public/images/library.jpg";
import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";

const Activities = () => {
  return (
    <div className="py-24">
      <SectionTitle>Our Activities</SectionTitle>
      <div className="mt-8 flex flex-col lg:flex-row gap-5">
        {/* TODO: activities image will go here */}
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <img src={pencilImg} alt="pencil image" />
        </div>
        <div className="w-full lg:w3/5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ActivitiesCard
            image={learningImg}
            title={"Learn with Fun"}
          ></ActivitiesCard>
          <ActivitiesCard
            image={busImg}
            title={"Own Transportation"}
          ></ActivitiesCard>
          <ActivitiesCard
            image={worldImg}
            title={"Explore the World"}
          ></ActivitiesCard>
          <ActivitiesCard
            image={libraryImg}
            title={"Library"}
          ></ActivitiesCard>
        </div>
      </div>
    </div>
  );
};

export default Activities;
