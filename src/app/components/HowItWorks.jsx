const HowItWorks = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center shadow-md p-6">
      <p className="text-lg w-12 h-12 flex justify-center items-center font-semibold mb-2 bg-green-100 text-green-500 rounded-full">
        {steps.step}
      </p>
      <h3 className="font-semibold mb-2">{steps.title}</h3>

      <p className="text-gray-700 text-sm">{steps.description}</p>
    </div>
  );
};
export default HowItWorks;
