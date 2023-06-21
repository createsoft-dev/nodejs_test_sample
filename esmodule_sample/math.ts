const add = (a: number, b: number): number => {
    return a + b
};

const add_async = async (a: number, b: number): Promise<number> => {
    return new Promise<number>(resolve => {
        setTimeout((): void => {
            resolve(a + b);
        }, 1000);
    });
};

const div_async = async (a: number, b: number): Promise<number> => {
    return new Promise<number>((resolve, reject): void => {
        setTimeout((): void => {
            if (b === 0) {
                reject(new Error('zero division'));
            }
            resolve(a / b);
        }, 1000);
    });
}

export {
    add,
    add_async,
    div_async
}
