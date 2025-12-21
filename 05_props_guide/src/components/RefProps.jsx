import { forwardRef, useRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-neutral-300 font-medium mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className={`w-full px-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current?.focus();
    }
  };

  const focusSecondInputRef = () => {
    secondInputRef.current?.focus();
  };

  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Second Input Value: ${secondInputRef.current.value}`);
    }
  };
  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = "";
      secondInputRef.current?.focus();
    }
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Ref Props</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div>
        <h3>Try out Ref</h3>
        <CustomInput
          ref={inputRef}
          label="First Input with ref"
          placeholder="Typeing Something"
        />
        <CustomInput
          ref={secondInputRef}
          label="Second Input with ref"
          placeholder="Typeing Something else..."
        />
        <div className="flex flex-wrap gap-3">
          <button
            onClick={focusInput}
            className="bg-rose-600 cursor-pointer border text-white border-rose-800 px-2 py-1 rounded-md"
          >
            Focus First Input
          </button>
          <button
            onClick={getInputValue}
            className="bg-blue-600 cursor-pointer border text-white border-blue-800 px-2 py-1 rounded-md"
          >
            Get First Input Value
          </button>
          <button
            onClick={clearInput}
            className="bg-amber-600 cursor-pointer border text-white border-amber-800 px-2 py-1 rounded-md"
          >
            Clear First Input
          </button>
        </div>

        {/* Second Input Controls */}
        <div className="flex flex-wrap gap-3 mt-2">
          <button
            onClick={focusSecondInputRef}
            className=" bg-green-600 cursor-pointer border text-white border-green-800 px-2 py-1 rounded-md"
          >
            Focus Second Input
          </button>

          <button
            onClick={getSecondInputValue}
            className="bg-violet-600 cursor-pointer border text-white border-vbg-violet-800 px-2 py-1 rounded-md"
          >
            Get Second Input Value
          </button>
          <button
            onClick={clearSecondInput}
            className="bg-sky-600 cursor-pointer border text-white border-kbg-sky-800 px-2 py-1 rounded-md"
          >
            Clear Second Input
          </button>
        </div>
      </div>
    </section>
  );
};

export default RefProps;
