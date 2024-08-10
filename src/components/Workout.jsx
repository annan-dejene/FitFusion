/* eslint-disable react/prop-types */
import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

const Workout = ({ workout }) => {
  console.log(workout);
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, exerciseIndex) => (
          <ExerciseCard
            index={exerciseIndex}
            key={exerciseIndex}
            exercise={exercise}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
