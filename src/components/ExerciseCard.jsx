/* eslint-disable react/prop-types */
import { useState } from "react";

const ExerciseCard = ({ exercise, index }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetIncrement = () => {
    setSetsCompleted((prevVal) => (prevVal + 1) % 6);
  };

  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0 {index + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full lg:text-center text-lg sm:text-xl md:text-2xl flex-1">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2 p-2 ">
        {exercise.description.split("___").map((desc, idx) => (
          <div className="text-sm" key={idx}>
            {desc}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => (
          <div
            key={info}
            className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
          >
            <h3 className="capitalize text-slate-400 text-sm">
              {info === "reps" ? `${exercise.unit}` : info}
            </h3>
            <p className="font-medium">{exercise[info]}</p>
          </div>
        ))}

        <button
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full"
          onClick={handleSetIncrement}
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets completed</h3>
          <p className="font-medium">{setsCompleted || 0} / 5</p>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
