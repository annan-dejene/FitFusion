/* eslint-disable react/prop-types */
const GeneratorHeader = ({ index, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
};

export default GeneratorHeader;
