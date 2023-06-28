const mainDiv = document.querySelector(".main-sketch-box")

function start() {
    const size = 660/16;

    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.height = `${size}px`;
            newDiv.style.width = `${size}px`;
            newDiv.style.margin = "0px";
            newDiv.classList.add("inside-box");
            newDiv.addEventListener("mouseover", () => {
            let color1 = Math.floor(Math.random() * 256) + 1;
            let color2 = Math.floor(Math.random() * 256) + 1;
            let color3 = Math.floor(Math.random() * 256) + 1;
            newDiv.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
            })
            mainDiv.appendChild(newDiv);
        }
    }
}

// Learn how to use the function itself on 2nd event argument

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const allDivs = document.querySelectorAll(".inside-box");
    allDivs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
});

const newSize = document.querySelector(".newSize");
newSize.addEventListener("click", () => {
    let newSize = prompt("How much squares do you want per row?: ");
    if (parseInt(newSize) != newSize || newSize < 0) {
        alert("Please input a valid number");
    }
    else if (newSize > 100) {
        alert("Please input a number below 100");
    }
    else {
        mainDiv.textContent = "";
        const size = 660/newSize;

        for (let i=0; i<newSize; i++) {
            for (let j=0; j<newSize; j++) {
                const newDiv = document.createElement("div");
                newDiv.style.height = `${size}px`;
                newDiv.style.width = `${size}px`;
                newDiv.style.margin = "0px";
                newDiv.classList.add("inside-box");
                newDiv.addEventListener("mouseover", () => {
                    let color1 = Math.floor(Math.random() * 256) + 1;
                    let color2 = Math.floor(Math.random() * 256) + 1;
                    let color3 = Math.floor(Math.random() * 256) + 1;
                    newDiv.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;                })
                mainDiv.appendChild(newDiv);
            }
        }
    }
})




start();
