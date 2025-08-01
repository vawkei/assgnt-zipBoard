import classes from "./Accordion.module.scss";
import { QuestionData, ResponseData } from "../questionData/Data";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Card from "../ui/card/Card";

const Accordion = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [animationState, setAnimationState] = useState<string | null>(null);
  const [closingId, setClosingId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (activeId === id) {
      setAnimationState("exiting");
      setClosingId(id);
    } else {
      setActiveId(id);
      setAnimationState("entering");
      setClosingId(null);
    }
  };

  const handleAnimationEnd = (id: string) => {
    if (animationState === "exiting" && closingId === id) {
      setActiveId(null);
      setAnimationState(null);
      setClosingId(null);
    } else {
      setAnimationState(null);
    }
  };

  return (
    <div className={classes["accordion-container"]}>
      <h2>Frequently asked questions</h2>
      <div className={classes["items-section"]}>
        <hr />
        {QuestionData.map((data) => {
          const isOpen = activeId === data.id;
          console.log("isOpen:", isOpen);

          const shouldRenderContent = isOpen || closingId === data.id;
          console.log("shouldRenderContent:", shouldRenderContent);

          const response = ResponseData.find((res) => res.id === data.id);
          // console.log("responseData:",response)

          return (
            <Card className={classes["data-item"]} key={data.id}>
              <div className={classes["data-content"]}>
                <div className={classes.left}>
                  <p>{data.id}</p>
                  <p>{data.question}</p>
                </div>

                <div className={classes.right}>
                  {isOpen ? (
                    <FaMinus
                      size={18}
                      onClick={() => toggleAccordion(data.id)}
                    />
                  ) : (
                    <FaPlus
                      size={18}
                      onClick={() => toggleAccordion(data.id)}
                    />
                  )}
                </div>
              </div>
              {/* 👇👇==============Accordion conmtent=============👇👇*/}
              {shouldRenderContent && (
                <div
                  className={`${classes["accordion-content"]}
                                    ${
                                      animationState === "exiting" &&
                                      closingId === data.id
                                        ? classes["slide-up"]
                                        : animationState === "entering" &&
                                          activeId === data.id
                                        ? classes["slide-down"]
                                        : ""
                                    }`}
                  onAnimationEnd={() => handleAnimationEnd(data.id)}>
                  <p>{response?.response}</p>
                </div>
              )}
              {/*👆👆 ==============Accordion conmtent============= 👆👆*/}
              <hr />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;



