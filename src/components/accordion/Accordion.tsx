import classes from "./Accordion.module.scss";
import { QuestionData,ResponseData } from "../questionData/Data";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Card from "../ui/card/Card";

const Accordion = () => {

    const [activeId,setActiveId] = useState<string|null>(null)

    // console.log("activeId:", "activeIdState:",activeId)
    const toggleAccordion = (id:string)=>{
        // console.log("activeId:",id, "activeIdState:",activeId)
        setActiveId((currentState)=>currentState===id?null:id)
    };

    return ( 
        <div className={classes["accordion-container"]}>
            <h2>Frequently asked questions</h2>
            <div className={classes["items-section"]}>
                <hr />
                {QuestionData.map((data)=>{
                    const isOpen = activeId===data.id;
                    console.log("isOpen:",isOpen)
                    const response = ResponseData.find((res)=>res.id===data.id);
                    // console.log("responseData:",response)
                    return(
                        <Card className={classes["data-item"]} key={data.id}>
                            <div className={classes["data-content"]}>
                                <div className={classes.left}>
                                    <p>{data.id}</p>
                                    <p>{data.question}</p>
                                </div>

                                <div className={classes.right}>
                                    {isOpen?(
                                        <FaMinus size={18} onClick={()=>toggleAccordion(data.id)} />
                                    ):(
                                        <FaPlus size={18} onClick={()=>toggleAccordion(data.id)} />
                                    )}
                                </div>
                            </div>
                            {/* 👇👇==============Accordion conmtent=============👇👇*/}
                            {isOpen &&(
                                <div className={classes["accordion-content"]}>
                                    <p>{response?.response}</p>
                                </div>
                            )}
                            {/*👆👆 ==============Accordion conmtent============= 👆👆*/}
                            <hr />
                        </Card>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Accordion;


