export function createFighterPreview(fighter) {
    const { name, source, health, attack, defense } = fighter;
  
    const container = document.createElement("div");
    container.classList.add("fighter-preview");
  
    const img = document.createElement("img");
    img.src = source;
    img.classList.add("fighter-image");
  
    const nameEl = document.createElement("h3");
    nameEl.textContent = name;
  
    const stats = document.createElement("p");
    stats.textContent = `Health: ${health}, Attack: ${attack}, Defense: ${defense}`;
  
    container.append(img, nameEl, stats);
    return container;
  }