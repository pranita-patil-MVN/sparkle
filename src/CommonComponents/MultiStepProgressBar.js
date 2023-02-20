import React from "react";
import "../css/MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ div, onDivNumberClick, noOfSteps }) => {
  var stepPercentage = 0;

  if (div === "divOne") {
    stepPercentage = 0;
  } else if (div === "divTwo") {
    switch (noOfSteps.length) {
      case 1:
        stepPercentage = 0;
        break;
      case 2:
        stepPercentage = 100;
        break;
      case 3:
        stepPercentage = 15.5;
        break;
      case 4:
        stepPercentage = 35.5;
        break;
      case 5:
        stepPercentage = 25;
        break;
      default:
        break;
    }
  } else if (div === "divThree") {
    switch (noOfSteps.length) {
      case 1:
        stepPercentage = 0;
        break;
      case 2:
        stepPercentage = 100;
        break;
      case 3:
        stepPercentage = 15.5;
        break;
      case 4:
        stepPercentage = 70.5;
        break;
      case 5:
        stepPercentage =50;
        break;
      default:
        break;
    }
  } else if (div === "divFour") {
    switch (noOfSteps.length) {
      case 1:
        stepPercentage = 0;
        break;
      case 2:
        stepPercentage = 100;
        break;
      case 3:
        stepPercentage = 15.5;
        break;
      case 4:
        stepPercentage = 100;
        break;
      case 5:
        stepPercentage =75;
        break;
      default:
        break;
    }
  } else if (div === "divFive") {
    switch (noOfSteps.length) {
      case 1:
        stepPercentage = 0;
        break;
      case 2:
        stepPercentage = 100;
        break;
      case 3:
        stepPercentage = 15.5;
        break;
      case 4:
        stepPercentage = 100;
        break;
      case 5:
        stepPercentage =100;
        break;
      default:
        break;
    }
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      {noOfSteps.map((items, key) => (
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              onClick={() => onDivNumberClick(items.toString())}
            >
              {index + 1}
            </div>
          )}
        </Step>
      ))}

      {/* <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onDivNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onDivNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onDivNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onDivNumberClick("5")}
          >
            {index + 1}
          </div>
        )}
      </Step> */}
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
