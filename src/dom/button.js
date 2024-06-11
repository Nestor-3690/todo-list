export default function(attribute, parent, id) {
    const button = document.createElement("button");
    button.classList.add(`${attribute}`);
    if (id) {
        button.setAttribute("id", `${id}`);
    }
    parent.appendChild(button);
}