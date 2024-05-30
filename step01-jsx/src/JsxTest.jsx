import index from "./index.css";


const JsxTest = () => {
    //javaScript
    const test = "오늘은 목요일";

    // function sayHello()  람다식으로 변경
    const sayHello = ()=>{
        console.log("버튼 클릭")
    }

    const cssStyle={
        color:"red",
        backgroundColor:"yellow"

    }


    return (
        <>
            <h3 className="a">JSX문법 = {test} </h3>
                <button onClick={sayHello}>클릭</button>
            <br/>
                <button>클릭2</button>
                {
                1+1 ===2 ? <div style={cssStyle}>맞다</div> : <div>틀리다</div>
                }
            <br/>
            
                {
                1+1===2 && <div>정답!!!</div>
                }

        </>
    );
};

export default JsxTest;