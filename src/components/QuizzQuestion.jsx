import React from "react";

const QuizzQuestion = (props) => {
  const { questionText, questions, isCorrect ,handleSubmit} = props;
  return (
    <>
      <h1 className="my-3">
        Câu {questionText + 1} : {questions[questionText].questionText}
      </h1>
      <div className="flex flex-col">
        {questions[questionText].answerOptions.map((item) => (
          <button
            key={item.answerText}
            onClick={() => handleSubmit(item.isCorrect)}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {item.answerText}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuizzQuestion;
