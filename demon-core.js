elements.beryllium = {
    color: "#c8f4de",
    behavior: behaviors.METAL,
    category: "Chemistry",
    state: "solid",
    density: 1850,
    conduct: 0.9,
    temp: 1560,
    tempHigh: 2469,
    stateHigh: "beryllium_gas",
    reactions: {
        "plutonium": {
            elem1: null,
            elem2: "criticality_event",
            chance: 1.0,
        },
    },
};

elements.beryllium_gas = {
    color: "#e0fff7",
    behavior: behaviors.GAS,
    category: "Chemistry",
    state: "gas",
    density: 2.7,
};

elements.plutonium = {
    color: "#3d3d3d",
    behavior: behaviors.METAL,
    category: "Chemistry",
    state: "solid",
    density: 19840,
    conduct: 0.4,
    reactions: {
        "beryllium": {
            elem1: null,
            elem2: "criticality_event",
            chance: 1.0,
        },
    },
};

elements.criticality_event = {
    color: ["#ffff00", "#ffffff", "#ffffcc"],
    behavior: [
        "M2|M1|M2",
        "M1|XX|M1",
        "M2|M1|M2"
    ],
    category: "energy",
    state: "gas",
    density: 0,
    temp: 5000,
    tick: function(pixel) {
        explodeAt(pixel.x, pixel.y, 10);
        createPixelsCircle("radiation", pixel.x, pixel.y, 10);
        if (Math.random() < 0.05) {
            deletePixel(pixel.x, pixel.y);
        }
    }
};
