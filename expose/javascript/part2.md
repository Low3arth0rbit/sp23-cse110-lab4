1. Line 12 will print `3` to the console. This is because `var` does not have block scope, meaning it can still be accessed outside of the for loop as long as it is used within the function.
2. Line 13 will print `150` which is the last `discountedPrice` that was used to calculate last `finalPrice`. The same reasoning applies in that `vars` are not confined in the block. Thus, it can be used anywhere within the function.
3. Line 14 will print `150` which is the last `finalPrice` that was pushed to `discounted` array. Again the same reasoning that `vars` not having block scope, but function scoped.
4. The function will return `[50,100,150]`. The function iterates through the given prices, which in this case is `[100,200,300]`, and takes the discount by the given discount amount, which in this case is `0.5`. Then, for every iteration, the calculated price is added to the `discounted` array which gets returned at the end.
5. Line 12 will cause an error. `let` is block scoped, meaning it can only accessed in the block it is declared in. Since the `console.log` is outside of the forloop, it cannot access the `let i`. 
6. Line 13 will cause an error. Same reasoning as previous question.
7. Line 14 will return `150` which is the last `finalPrice` that was pushed to `discounted` array. This happens because `finalPrice` was declared in the block of the function, meaning it is defined throughout the function, which the `console.log` falls under.
8. The function will return `[50,100,150]`. The variables are all used within their scope and there will be no errors.
9. Line 11 will cause an error. Reasoning is the same as Question 5.
10. Line 12 will return `3`. `const` is block scoped but it is declared directly under the function. This means that the `length` variable is defined within the function with the constant value of `3` which was assigned with the length of `prices` parameter.
11. The function will return `[50,100,150]`. All variables are within the scope and no `const` variables are being reassigned a value after the initial declaration.
12. 
    1. student.name
    2. student["Grad Year"]
    3. student.greeting()
    4. student["Favorite Teacher"].name
    5. student.courseLoad[0]
13. 
    1. '32'
        - For addition, if any of the operands is a string, it converts the other one into a string. In this case, javascript converts 2 into string and concatenate the two string.
    2. 1
        - For subtraction, string of number will be converted to number and use proper math. In this case, 3 gets converted to a number and carrys out '3-2'.
    3. 3
        - null in arithmetic equation is turned into 0. Thus the result of '3+null' is 3.
    4. '3null'
        - Since 3 is a string, the plus sign is a concatenation symbol and converts null into string.
    5. 4
        - true in arithmetic equation takes the value of 1. Thus 'true+3' is carried out as '1+3'.
    6. 0
        - false in arithmetic equation takes the value of 0, as well as null as mentioned before. Thus 'false+null' is carried out as '0+0'.
    7. '3undefined'
        - since 3 is a string, the plus sign is a concatenation symbol and convers undefined into string.
    8. NaN
        - subtraction always makes it into arithmetic equation of numbers. However, the value 'undefined' is 'NaN' when it is converted to number, thus the answer.
14. 
    1. true
        - when comparing string with numbers, it will convert the value to numbers. And since 2 is greater than 1, it results in true.
    2. false
        - in comparing two strings, it will compare character by character. since 2 is greater than 1, it results in false.
    3. true
        - string 2 is converted to number. 2 is equal to 2.
    4. false
        - 3 equal sign makes it so that it does not do type conversion. Thus the number 2 is not equal to the string 2.
    5. false
        - true is converted to a number 1. 1 is not equal to 2.
    6. true
        - 3 equal sign is a strict comparision without type conversion. However, the result of `Boolean(2)` is true which makes the equality `true===true`. This is true.
15. The difference between `==` and `===` is that double equal sign allows for type conversion while the triple equal sign does not. This means that while `true==1` is true, since true is evaluated as 1, `true===1` is false, because they are of different types and does not equal one another.
16. [part1-question16.js](part2-question16.js)
17. The result would be `[2,4,6]`. In modifyArray function, it will first start as the 0th index of the input array, which in this case is '1'. It takes that value and puts it into the function callback, which will return input\*2 or in this case '1\*2' which is 2. This value is pushed to the newArr. Then it repeats for the following numbers, which are 2 and 3 resulting in 4 and 6 respectively. 
18. [part1-question18.js](part2-question18.js)
19. The outptu of the code is in the order of '1, 4, 3, 2'