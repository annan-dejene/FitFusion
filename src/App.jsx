import { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/generateWorkout";

function App() {
  const [workout, setWorkout] = useState(null);

  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    if (!muscles.length) {
      // if muscles is empty, return.. because we don't have any muscles selected to train
      return;
    }
    let newWorkout = generateWorkout({ muscles, poison, goal });
    console.log(newWorkout);
    setWorkout(newWorkout);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} setWorkout={setWorkout} />}
    </main>
  );
}

export default App;
