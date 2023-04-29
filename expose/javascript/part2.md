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
    2. 1
    3. 3
    4. '3null'
    5. 4
    6. 0
    7. '3undefined'
    8. NaN
14. 
    1. true
    2. false
    3. true
    4. false
    5. false
    6. true
15. .
16. 
