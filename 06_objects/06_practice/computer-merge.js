let motherBoard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
};

let cpu = {
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
};

let videoCard = {
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
};

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
};

// 1st variant to merge objects
let computer = {
    price: 100000, 
    ...motherBoard, //'...' is a spread operator
    //socket property from motherBpard is changed to socket property from cpu. The last property is added
    ...cpu,
    ...videoCard,
    ...ram,
};

//2nd variant to merge objects
//target object
let computerWithAssign = Object.assign (
    {
        price: 200000,
    },
    motherBoard, cpu, videoCard, ram //added objects
);

console.log(computer);
console.log(computerWithAssign);