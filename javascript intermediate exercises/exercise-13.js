function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }


    if (Array.isArray(obj)) {
        const clonedArray = [];
        for (let i = 0; i < obj.length; i++) {
            clonedArray[i] = deepClone(obj[i]);
        }
        return clonedArray;
    }

    // Handle objects
    const clonedObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObject[key] = deepClone(obj[key]);
        }
    }
    return clonedObject;
}


const original = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345,
    },
    hobbies: ["reading", "gaming"],
};

const cloned = deepClone(original);
console.log(cloned);
console.log(cloned !== original);
console.log(cloned.address !== original.address);
console.log(cloned.hobbies !== original.hobbies); 