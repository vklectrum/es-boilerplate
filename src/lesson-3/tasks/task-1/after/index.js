export default(count=10, timeOut=1000, callback=(val)=>val)=>{
    if(typeof count !=='number' || typeof timeOut !=='number'){
        throw new Error("Wrong  parameters. Parameters count and timeOut should be a number type.");
    }
    for (let i = 0; i < count; i++) {
        setTimeout(()=>{
            console.log(callback(i));
        },timeOut*i);
    }
}