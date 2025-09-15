function executeConsole(codeString, variables) {

    const context = {
        $math: {
            sum: (a, b) => a + b,
            mul: (a, b) => a * b,
        },
        $logger: console.log.bind(console),
    };

    const keys = [
        ...Object.keys(context),
        ...Object.keys(variables)
    ];
    const values = [...Object.values(context), ...Object.values(variables)]

    return new Function(...keys, codeString)(...values);
}
