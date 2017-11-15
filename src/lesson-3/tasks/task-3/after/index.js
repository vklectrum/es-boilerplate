export default (sum = 0) => {
    return (operand) => {
        if (typeof operand !== 'number') {
            throw new Error("Wrong  parameter! Parameter should be a number.");
        }
        console.log(sum += operand)
    }
} 