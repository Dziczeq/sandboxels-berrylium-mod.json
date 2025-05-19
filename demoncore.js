elements.beryllium = {
    color: "#c8f4de",
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 1850,
    tempHigh: 2469,
    stateHigh: "beryllium_gas",
    tick: function(pixel) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let x = pixel.x + i;
                let y = pixel.y + j;
                if (isEmpty(x, y, true)) continue;
                let target = pixelMap[x][y];
                if (!target || target.element === "beryllium") continue;
                if (target.element === "pluton") {
                    if (Math.random() < 0.3) {
                        changePixel(target, "fire");
                        if (Math.random() < 0.15) {
                            changePixel(pixel, "fire");
                        }
                    }
                }
            }
        }
    }
};

elements.pluton = {
    color: "#4b0082",
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 19800,
    tempHigh: 6400,
    stateHigh: "pluton_gas",
    tick: function(pixel) {
        
    }
};
elements.pluton = {
    color: "#4b0082",
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    density: 19800,
    tempHigh: 6400,
    stateHigh: "pluton_gas",
    tick: function(pixel) {
        
        if (Math.random() < 0.05) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let x = pixel.x + i;
                    let y = pixel.y + j;
                    if (!isEmpty(x, y, true)) {
                        let target = pixelMap[x][y];
                        if (target && target.element !== "pluton") {
                            changePixel(target, "radiation");
                        }
                    }
                }
            }
        }

        if (Math.random() < 0.01) {
            changePixel(pixel, "fire");
        }
    }
};
