const mainDiv = document.querySelector(".main-sketch-box")

function start() {
const size = 660/16;

    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.height = `${size}px`;
            newDiv.style.width = `${size}px`;
            newDiv.style.margin = "0px";
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black";
            })
            mainDiv.appendChild(newDiv);
        }
    }
}


start();