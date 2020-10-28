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


 let keys = Object.keys(computer); 
 let values = Object.values(computer); 
 let entries = Object.entries(computer); 

  for (let key of keys) {
      console.log(`${key}: ${computer[key]}`);
  }

  for (let value of values) {
      console.log(value);
  }

  for (let entry of entries) {
    console.log(`${entry[0]}: ${entry[1]}`);
  }

  // the same 
  for (let [key,value] of entries) {
      console.log(`${key}: ${value}`);
  }


  // FOR IN
  // OLD variant,dont use
  for (let key in computer) {
    if (!computer.hasOwnProperty(key)) {
        continue;
    }
    console.log(`${key}: ${computer[key]}`);
}