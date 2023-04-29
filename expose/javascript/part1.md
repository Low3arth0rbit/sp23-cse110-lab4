1. Line 9 prints: `values added: 20`
2. Line 13 prints: `final result: 20`
3. Line 9 prints: `values added: 20`
4. Line 13 will return an error because `let` is only available in the if block. Since line 13 is outside of the blockm `result` is not declared in the scope.
5. Line 9 will not run due to error at line 7. You cannot reassign a value to a `const`
6. Line 13 will not run for the same reason as previous question.