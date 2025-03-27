import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const RateInteractive = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      scenario: "A car travels 240 miles in 4 hours.",
      question: "What is the car's speed in miles per hour?",
      options: ["60 miles per hour", "4 miles per hour", "240 miles per hour", "1 mile per hour"],
      answer: 0,
      explanation: "Divide the total distance (240 miles) by the total time (4 hours): 240 ÷ 4 = 60 miles per hour"
    },
    {
      scenario: "A factory produces 350 toys in 5 days.",
      question: "What is the production rate in toys per day?",
      options: ["5 toys per day", "70 toys per day", "350 toys per day", "1,750 toys per day"],
      answer: 1,
      explanation: "Divide the total production (350 toys) by the time period (5 days): 350 ÷ 5 = 70 toys per day"
    },
    {
      scenario: "A recipe requires 3 cups of flour to make 24 cookies.",
      question: "How much flour is needed per cookie?",
      options: ["8 cups per cookie", "3 cups per cookie", "0.125 cups per cookie", "1/8 cups per cookie"],
      answer: 2,
      explanation: "Divide the total flour (3 cups) by the number of cookies (24): 3 ÷ 24 = 0.125 cups per cookie"
    },
    {
      scenario: "A student earns $45 for working 6 hours at a store.",
      question: "What is the student's hourly pay rate?",
      options: ["$7.50 per hour", "$6.00 per hour", "$45.00 per hour", "$270.00 per hour"],
      answer: 0,
      explanation: "Divide the total pay ($45) by the number of hours worked (6): $45 ÷ 6 = $7.50 per hour"
    },
    {
      scenario: "A garden hose fills a 30-gallon tank in 10 minutes.",
      question: "What is the flow rate in gallons per minute?",
      options: ["3 gallons per minute", "10 gallons per minute", "30 gallons per minute", "300 gallons per minute"],
      answer: 0,
      explanation: "Divide the total volume (30 gallons) by the total time (10 minutes): 30 ÷ 10 = 3 gallons per minute"
    }
  ];
  
  const checkAnswer = (index) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].answer) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("");
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setFeedback("");
    } else {
      // Reset quiz when "Start Over" is clicked
      setCurrentQuestion(0);
      setSelectedOption(null);
      setFeedback("");
      setScore(0);
    }
  };
  
  const getButtonText = () => {
    if (currentQuestion >= questions.length - 1 && feedback.includes("Great")) {
      return "Start Over";
    }
    
    if (currentQuestion >= questions.length - 1) {
      return "Complete Quiz";
    }
    
    if (selectedOption === questions[currentQuestion].answer) {
      return "Next Question";
    }
    
    return "Skip";
  };
  
  return (
    <div className="bg-gray-100 p-8 w-full overflow-auto">
      <Card className="w-full mx-auto shadow-md bg-white">
        <div className="bg-sky-50 p-6 rounded-t-lg w-full">
          <h1 className="text-sky-900 text-2xl font-bold">Understanding "Per" in Rates</h1>
          <p className="text-sky-800">Learn how to use "per" to express relationships between quantities!</p>
        </div>
        
        <CardContent className="space-y-6 pt-6 w-full">
          {/* Definition Box */}
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h2 className="text-blue-900 font-bold mb-2">What does "per" mean?</h2>
            <p className="text-blue-600">
              In mathematics, "per" means "for each" or "divided by." It's used to express rates, which show how one quantity changes in relation to another.
              When we say "miles per hour," we mean "miles divided by hours" or "miles for each hour."
            </p>
          </div>
          
          {/* Example Box */}
          <Card className="border border-gray-200">
            <CardContent className="space-y-4 pt-4 p-6">
              <h3 className="text-lg font-semibold mb-2">Examples</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Speed Example:</p>
                  <p className="text-sm text-gray-600">If you travel 120 miles in 2 hours, your speed is:</p>
                  <p className="font-bold text-sm text-gray-800 pl-4">120 miles ÷ 2 hours = 60 miles per hour</p>
                </div>
                <div>
                  <p className="font-semibold">Cost Example:</p>
                  <p className="text-sm text-gray-600">If 5 apples cost $2.00, the cost per apple is:</p>
                  <p className="font-bold text-sm text-gray-800 pl-4">$2.00 ÷ 5 apples = $0.40 per apple</p>
                </div>
                <div>
                  <p className="font-semibold">Density Example:</p>
                  <p className="text-sm text-gray-600">If a 3 cubic centimeter object has a mass of 15 grams, its density is:</p>
                  <p className="font-bold text-sm text-gray-800 pl-4">15 grams ÷ 3 cubic centimeters = 5 grams per cubic centimeter</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Practice Section */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-purple-900 font-bold">Practice Time!</h2>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`rounded-full transition-all duration-300 ${
                      num < currentQuestion ? 'w-3 h-3 bg-green-500' : 
                      num === currentQuestion ? 'w-2 h-2 bg-purple-600 mt-0.5' : 
                      'w-3 h-3 bg-purple-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <p className="font-medium">{questions[currentQuestion].scenario}</p>
              <p className="mt-2 font-semibold">{questions[currentQuestion].question}</p>
            </div>
            
            <div className="space-y-2 mb-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => checkAnswer(index)}
                  disabled={selectedOption === questions[currentQuestion].answer && index !== questions[currentQuestion].answer}
                  className={`block w-full text-left p-3 rounded ${
                    selectedOption === index 
                      ? selectedOption === questions[currentQuestion].answer
                        ? 'bg-green-100 border border-green-500'
                        : 'bg-red-100 border border-red-500'
                      : selectedOption === questions[currentQuestion].answer && index !== questions[currentQuestion].answer
                        ? 'bg-white border border-gray-200 pointer-events-none'
                        : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } ${selectedOption === questions[currentQuestion].answer && index !== questions[currentQuestion].answer ? 'opacity-50 cursor-default' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {feedback && (
              <div className={`p-4 rounded-lg mb-4 ${feedback.includes("Correct") ? "bg-green-50 border border-green-200" : feedback.includes("complete") ? "bg-blue-50 border border-blue-200" : "bg-red-50 border border-red-200"}`}>
                <p className={`font-medium ${feedback.includes("Correct") ? "text-green-800" : feedback.includes("complete") ? "text-blue-800" : "text-red-800"}`}>
                  {feedback}
                </p>
                {selectedOption === questions[currentQuestion].answer && (
                  <p className="mt-2 text-gray-700">
                    {questions[currentQuestion].explanation}
                  </p>
                )}
              </div>
            )}
            
            <div className="flex justify-end">
              {(currentQuestion < questions.length - 1 || 
                (currentQuestion >= questions.length - 1 && feedback.includes("Great")) ||
                (currentQuestion >= questions.length - 1 && selectedOption === questions[currentQuestion].answer)
              ) && (
                <Button
                  onClick={nextQuestion}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {currentQuestion >= questions.length - 1 && (feedback.includes("Great") || selectedOption === questions[currentQuestion].answer) 
                    ? "Start Over" 
                    : selectedOption === questions[currentQuestion].answer 
                      ? "Next Question" 
                      : "Skip"}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-center text-gray-600 mt-4">
        Understanding rates and the meaning of "per" is essential for many real-world applications!
      </p>
    </div>
  );
};

export default RateInteractive;