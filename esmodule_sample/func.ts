const add = (a: number, b: number): number => {
    return a + b
};

const add_async = async (a: number, b: number): Promise<number> => {
    return new Promise<number>(resolve => {
        setTimeout((): void => {
            resolve(a + b);
        }, 2000);
    });
};

export {add, add_async}
