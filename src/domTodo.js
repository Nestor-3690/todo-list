export default function(element, category, parent) {
    const elmnt = document.createElement("div");
    elmnt.classList.add(`${category}`);
    elmnt.textContent = `${element}`;
    parent.appendChild(elmnt);
}