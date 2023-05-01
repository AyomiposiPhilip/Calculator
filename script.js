class Calculator {
    constructor(prev, current, operator){
        this.prev = prev;
        this.current = current;
        this.operator = operator;
    }

    addNumber(number){
        return document.getElementById("current").innerText += number.innerText;
    }

    appendOperator(current, prev, operand){
        var prev_int = parseInt(prev);
        var current_int = parseInt(current);
        if(isNaN(prev_int) || isNaN(current_int)){
            document.getElementById("prev").innerText = `${this.current.innerText}  ${operand.innerText}`;
            document.getElementById("current").innerText = "";
            this.operator = operand.innerHTML;
        }else{
            if(this.operator == "+"){
                var answer = prev_int + current_int;
                document.getElementById("prev").innerText = `${answer}  ${operand.innerText}`;
                document.getElementById("current").innerText = "";
                this.operator = operand.innerHTML;
            }else if(this.operator == "-"){
                var answer = prev_int - current_int;
                document.getElementById("prev").innerText = `${answer}  ${operand.innerText}`;
                document.getElementById("current").innerText = "";
                this.operator = operand.innerHTML;
            }else if(this.operator == "×"){
                var answer = prev_int * current_int;
                document.getElementById("prev").innerText = `${answer}  ${operand.innerText}`;
                document.getElementById("current").innerText = "";
                this.operator = operand.innerHTML;
            }else if(this.operator == "÷"){
                var answer = prev_int / current_int;
                document.getElementById("prev").innerText = `${answer}  ${operand.innerText}`;
                document.getElementById("current").innerText = "";
                this.operator = operand.innerHTML;
            }
        }
    }

    delete_char(current){
        document.getElementById("current").innerText = current.slice(0, current.length-1);
    }

    clear(){
        document.getElementById("current").innerText = "";
        document.getElementById("prev").innerText = "";
    }

    calculate(prev, current, operator){
        var prev_int = parseFloat(prev);
        var current_int = parseInt(current);
        if(this.operator == "+"){
            var answer = prev_int + current_int;
            document.getElementById("current").innerText = answer;
            document.getElementById("prev").innerText = "";
        }else if(this.operator == "-"){
            var answer = prev_int - current_int;
            document.getElementById("current").innerText = answer;
            document.getElementById("prev").innerText = "";
        }else if(this.operator == "×"){
            var answer = prev_int * current_int;
            document.getElementById("current").innerText = answer;
            document.getElementById("prev").innerText = "";
        }else if(this.operator == "÷"){
            var answer = prev_int / current_int;
            document.getElementById("current").innerText = answer;
            document.getElementById("prev").innerText = "";
        }
    }
}

const calculator = new Calculator(prev, current, "");

function number(value){
    const prev = document.getElementById("prev").innerText;
    const current = document.getElementById("current").innerText;
    calculator.addNumber(value);
    calculator.updateDisplay(value);
}

function delete_char(){
    const prev = document.getElementById("prev").innerText;
    const current = document.getElementById("current").innerText;
    calculator.delete_char(current)
}

function clear_btn(){
    const prev = document.getElementById("prev").innerText;
    const current = document.getElementById("current").innerText;
    calculator.clear(current);
}

function operator(value){
    const prev = document.getElementById("prev").innerText;
    const current = document.getElementById("current").innerText;
    calculator.appendOperator(current, prev, value);
}

function equals(){
    const prev = document.getElementById("prev").innerText;
    const current = document.getElementById("current").innerText;
    calculator.calculate(prev, current);
}