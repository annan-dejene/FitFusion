/* eslint-disable react/prop-types */

const Button = ({ buttonText, func }) => {
  return (
    <button
      className="px-8 py-4 mx-auto rounded-md bg-slate-950 border-2 border-blue-400 border-solid blueShadow duration-200"
      onClick={func}
    >
      <p>{buttonText}</p>
    </button>
  );
};

export default Button;
