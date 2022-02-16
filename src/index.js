module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map(i => i.join(''));
    let result = str;
    let flag = true;
    while (flag) {
        let condition = result;
        brackets.forEach(el => result = result.replace(el, ''));
        flag = result == condition ? false : true; 
    }
    return !result;
}
