function variableDemo() {
    console.log(a); // undefined (hoisted but not initialized)
    console.log(b); // ReferenceError (TDZ)
    console.log(c); // ReferenceError (TDZ)

    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 40; // Same variable as above
        let b = 50; // New block-scoped variable
        const c = 60; // New block-scoped variable

        console.log(a); // 40
        console.log(b); // 50
        console.log(c); // 60
    }

    console.log(a); // 40 (var is function-scoped)
    console.log(b); // 20 (let is block-scoped)
    console.log(c); // 30 (const is block-scoped)
}

variableDemo();
