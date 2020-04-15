let arr1 = "{[()]}";
let arr2 = "{[(])}";
let arr3 = "{{[[(())]]}}";

let Arr = arr3;
let Stack = [];

for (let i = 0; i <= Arr.length - 1; i++) {
    if (Arr[i] == "{" || Arr[i] == "[" || Arr[i] == "(") {
        Stack.push(Arr[i])
    } else if ((Stack.length != 0) && (
            (Arr[i] == ")" && Stack[Stack.length - 1] == "(") ||
            (Arr[i] == "]" && Stack[Stack.length - 1] == "[") ||
            (Arr[i] == "}" && Stack[Stack.length - 1] == "{")
        )) {
        Stack.pop();
    }
}

if (Stack.length == 0) {
    console.log("Yes")
} else {
    console.log("No")
}