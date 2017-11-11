export function format(func){
    let result = "";
    for(let i=0; i<func.length; i++){
        let unicode = func.charCodeAt(i).toString(16);
        while(unicode.length<4){
            unicode += '0' + unicode;
        }
        result += '\\u' + unicode;
    }
    return result;
}