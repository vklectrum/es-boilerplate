export function findString(text, pattern) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        pattern.lastIndex = i;
        if (pattern.test(text)) {
            count++;
            i = pattern.lastIndex-1;
        }
    }
    return count;
}
