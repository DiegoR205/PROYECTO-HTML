document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    
    const cards = [
        { title: "ADIDAS", content: "PREDATOR ACCURACY ROSADO", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/predatorrosa.jpg" },
        { title: "ADIDAS", content: "PREDATOR ACCURACY 3", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/predator 3.avif" },
        { title: "ADIDAS", content: "F50", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/F50.jpeg" },
        { title: "ADIDAS", content: "CRAZY FAST2", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/crazyfast2.avif" },
        { title: "NIKE", content: "MERCURIAL VAPOR XIII ELITE", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/MERCURIAL VAPOR XIII ELITE.jpg" },
        { title: "NIKE", content: "LEGEND VI", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/legendvi.jpg" },
        { title: "NIKE", content: "PHANTOM GT", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/phantomgt.webp" },
        { title: "ADIDAS", content: "SPEEDPORTAL 1", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/speedportal 1.avif" },
        { title: "NIKE", content: "MERCURIAL SUPERFLY 8", img: "C:/Users/diego.rojas/Downloads/PROYECT HTML/ASSENTS/IMG/mercurial superfly8.jpg" } 
    ];

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.title}" style="width:100%; border-radius: 10px;">
            <h2>${card.title}</h2>
            <p>${card.content}</p>
        `;
        gridContainer.appendChild(cardElement);
    });
});

