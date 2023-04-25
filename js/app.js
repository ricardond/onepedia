
document.addEventListener("DOMContentLoaded", () => {
    const pieceContainer = document.querySelector("#pieceContainer");
    const pirateCount = 772;
    const fetchPirate = async () => {
      for (let i = 1; i <= 772; i++) {
        await getPiece(i);
      }
    };
    const getPiece = async (id) => {
      const url = `https://api.api-onepiece.com/characters/${id}`;
      const resp = await fetch(url);
      const data = await resp.json();
    
      creatPieceCard(data);
    };
  
    const creatPieceCard = (piece) => {
      const card = document.createElement("div");
      card.classList.add("pirate");
  
      const name = piece.french_name[0].toUpperCase() + piece.french_name.slice(1);
      const id = piece.id.toString().padStart(3, "0");
      const job = piece.job;
      const age = piece.age;
      const bounty = piece.bounty;
      const filename = piece.filename;
  
      const pieceInnerHTML = `
        <div class="col d-flex justify-content-center">
          <div class="card shadow-sm" style="width:18rem;">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="https://images.api-onepiece.com/characters/${filename}" alt="${name}">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted ">Job: ${job}</h6>
              <p class="card-text">Recompensa:<br>${bounty}</p>
            </div>
          </div>
        </div>
      `;
  
      card.innerHTML = pieceInnerHTML;
      pieceContainer.appendChild(card);
    };
    fetchPirate();
  });

  
  