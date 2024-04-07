import "./result.css"
import data from "../data.json"

console.log (data)

export default function Result() {
    return (
        <div className="container">
            <div className="result">
                <p>Your Result</p>
                <div className="circle">
                    <h1>76</h1><span>of 100</span>
                </div>
                <h2>Great</h2>
                <p className="performance-percent">Your performance exceed 65% of the people conducting the test here!</p>
            </div>

            <div className="summary">
                <h2>Summary</h2>
        
            {data.map((item, key)=>(
                <div  
                // key = {item.id}  ეს რა საჭიროა? ლექციაზე ჰქონდა
                className={`${item.id === 1 ? "reaction" :
                              item.id === 2 ? "memory" :
                              item.id === 3 ? "verbal" :
                              item.id === 4 ? "visual" : ""
                              }`}>
                    <div className="description">
                        <img src={item.icon} alt="" />
                        <p>{item.category}</p>
                    </div>
                    <p className="result-from">{item.score} / 100</p>
                </div> 
                    ))}

                    <div className="continue">Continue</div>
                
                </div>

                </div>
            )
        
        }