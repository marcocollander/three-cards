const indexes = (): number[] => {
    let i: number = Math.floor(Math.random() * 3),
        j: number = 0,
        k: number = 0;

    switch (i) {
        case 0:
            j = 1;
            k = 2;
            break;
        case 1:
            j = 0;
            k = 2;
            break;
        case 2:
            j = 0;
            k = 1;
    }

    return [i, j, k];
};

export default indexes;
