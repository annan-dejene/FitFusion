/* eslint-disable react/prop-types */
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import GeneratorHeader from "./GeneratorHeader";
import Button from "./Button";
import { WORKOUTS, SCHEMES } from "../utils/swolider";
import { FaCaretDown } from "react-icons/fa";

const Generator = ({
  poison,
  setPoison,
  muscles,
  setMuscles,
  goal,
  setGoal,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevVal) => !prevVal);
  };

  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val != muscleGroup)); // deselecting muscle group
      return;
    }

    if (muscles.length >= 3) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]); // selecting muscle group

    if (muscles.length == 2) {
      setShowModal(false);
    }

    console.log(muscles);
  };

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Fit", "o'clock"]}
    >
      <GeneratorHeader
        index={"01"}
        title={"Pick your poision"}
        description={"Select the workout you wish to enjoy."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((workout, workoutIndex) => (
          <button
            className={
              "bg-slate-950 border duration-200 hover:border-blue-600 rounded-lg px-4 py-3 " +
              (workout === poison ? "border-blue-600" : "border-blue-400")
            }
            key={workoutIndex}
            onClick={() => {
              setMuscles([]);
              setPoison(workout);
            }}
          >
            <p className="capitalize">{workout.replace("_", " ")}</p>
          </button>
        ))}
      </div>

      <GeneratorHeader
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihlation."}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          className="relative p-3 flex items-center justify-center cursor-pointer"
          onClick={toggleModal}
        >
          <p className="capitalize">
            {muscles.length === 0
              ? poison === "individual"
                ? "Select muscle groups"
                : "Select workout split"
              : muscles.join(", ")}
          </p>
          <FaCaretDown className="absolute top-3 right-3" />
        </button>

        {showModal && (
          <div className="flex flex-col p-3">
            {poison === "individual"
              ? WORKOUTS[poison].map((workout, workoutIndex) => (
                  <button
                    key={workoutIndex}
                    className={
                      "text-center capitalize py-2 " +
                      (muscles.includes(workout) ? "text-blue-400 " : " ") + // if muscle is selected, change color
                      (muscles.length === 3 && !muscles.includes(workout)
                        ? "text-gray-400 " // if 3 muscles are selected and current muscle is not selected, change color
                        : " hover:text-blue-400 ")
                    }
                    onClick={() => updateMuscles(workout)}
                  >
                    {workout}
                  </button>
                ))
              : Object.keys(WORKOUTS[poison]).map(
                  (muscleGroup, muscleGroupIndex) => (
                    <button
                      key={muscleGroupIndex}
                      className={
                        "text-center capitalize hover:text-blue-400 py-2 " +
                        (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                      }
                      onClick={() => updateMuscles(muscleGroup)}
                    >
                      {muscleGroup}
                    </button>
                  )
                )}
          </div>
        )}
      </div>

      <GeneratorHeader
        index={"03"}
        title={"Select your Goal"}
        description={"Choose the ultimate objective of your workout."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            className={
              "bg-slate-950 border duration-200 hover:border-blue-600 rounded-lg px-4 py-3 " +
              (scheme === goal ? "border-blue-600" : "border-blue-400")
            }
            key={schemeIndex}
            onClick={() => setGoal(scheme)}
          >
            <p className="capitalize">{scheme.replace("_", " ")}</p>
          </button>
        ))}
      </div>

      <Button buttonText={"Formulate"} func={updateWorkout} />
    </SectionWrapper>
  );
};

export default Generator;
