// Реализуйте call, apply, bind

// Пример
let person = {
    lastName: "Dzigurda"
};

function fullName(salutaion, firstName) {
    console.log(salutaion, firstName, this.lastName);
}

let bind = (func, context, ...args) => {
    if (typeof func !== "function") {
        throw new TypeError("Not callable");
    }

    return (...targetArgs) => func.apply(context, args.concat(targetArgs));
};

// let bindFullName = bind(fullName, person, "Mr");

// bindFullName("Meaw");

let call = (func, context, ...args) => {
    let callee = Symbol("call");
    context[callee] = func;

    let result = context[callee](...args);
    delete context[callee];

    return result;
};

// call(fullName, person, "Hui", "Pizda");

let apply = (func, context, args) => {
    let callee = Symbol("call");
    context[callee] = func;

    let result = context[callee](...args);
    delete context[callee];

    return result;
};

// apply(fullName, person, ["Hui", "Pizda"]);
