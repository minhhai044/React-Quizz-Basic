import React, { useState } from "react";
import { questions } from "../assets/data";
import QuizzResult from "./QuizzResult";
import QuizzQuestion from "./QuizzQuestion";

const Quizz = () => {

  const [questionText, setQuestionText] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);
  const [result, setResult] = useState(false);

  const handleSubmit = (correct) => {
    setQuestionText(questionText + 1);
    if (correct) {
      setIsCorrect(isCorrect + 1);
    }
    if (questionText + 1 == questions.length) {
      setResult(true);
    }
  };
  return (
    <div className="p-12">
      {result ? (
        <QuizzResult isCorrect={isCorrect} questions={questions} handleBack={(backResult,backIsCorrect,backQuestionText)=>{
            setResult(backResult);
          setIsCorrect(backIsCorrect);
          setQuestionText(backQuestionText);
        }}/>
      ) : (
        <QuizzQuestion questionText={questionText} questions={questions} isCorrect={isCorrect} handleSubmit={handleSubmit}/>
      )}
    </div>
  );
};

export default Quizz;

// Chưa chia component
/**
 * <div className="p-12">
      {result ? (
        <>
          <h1>
            Kết quả : {isCorrect}/{questions.length}
          </h1>

          <button
            onClick={() => {
              setResult(false);
              setIsCorrect(0);
              setQuestionText(0);
            }}
            type="button"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Quay lại
          </button>
        </>
      ) : (
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
          </div>{" "}
        </>
      )}
    </div>
 */
