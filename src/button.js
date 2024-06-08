export default function(attribute, parent) {
    const button = document.createElement("button");
    button.classList.add(`${attribute}`);
    parent.appendChild(button);
}