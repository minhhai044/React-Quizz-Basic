import React from "react";

const QuizzResult = (props) => {
  const { isCorrect, questions ,handleBack} = props;
  return (
    <>
      <h1>
        Kết quả : {isCorrect}/{questions.length}
      </h1>

      <button
        onClick={() => {
            handleBack(false,0,0)
        }}
        type="button"
        className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Quay lại
      </button>
    </>
  );
};

export default QuizzResult;
