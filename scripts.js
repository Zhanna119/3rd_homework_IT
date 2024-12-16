const dataSection = document.getElementById('data-section');
const adviceSection = document.getElementById('advice-section');

async function fetchNannies() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const nannies = await response.json();

    nannies.forEach(nanny => {
        const nannyCard = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${nanny.name}</h5>
                        <p class="card-text">
                            <strong>Email:</strong> ${nanny.email}<br>
                            <strong>City:</strong> ${nanny.address.city}
                        </p>
                    </div>
                </div>
            </div>
        `;
        dataSection.innerHTML += nannyCard;
    });
}

async function fetchParentingTip() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        const advice = data.slip.advice;

        const adviceCard = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Parenting Tip</h5>
                    <p class="card-text">${advice}</p>
                </div>
            </div>
        `;

        adviceSection.innerHTML = adviceCard;

    } catch (error) {
        console.error('Error receiving an advice:', error);
        adviceSection.innerHTML = '<p class="text-danger">Try later.</p>';
    }
}

fetchParentingTip();

fetchNannies();
fetchParentingTip();

