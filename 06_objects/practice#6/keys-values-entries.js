let computer = {
    price: 100000,
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM4',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200
  };

  console.log(computer['socket']);

  console.log(Object.keys(computer)); //property names
  console.log(Object.values(computer)); //property values
  console.log(Object.entries(computer)); //key-value
  