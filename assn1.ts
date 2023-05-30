let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(isTrue);  // Output: true
console.log(isFalse); // Output: false

//any
let anystat: any = "Good evening";
console.log(anystat); // Output: Good evening

//array of strings(homogenous)
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]

//array (heterogenous)
let heteroArray: (string | number)[] = ["cricket", "ipl", "RCB", 17];
console.log(heteroArray); 
