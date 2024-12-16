// Form Validation Logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registrationForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alert("Please fill out the form correctly.");
            } else {
                alert("Registration Successful!");
            }
            form.classList.add("was-validated");
        });
    }

    // Scroll event to reveal content
    const revealElement = document.querySelector(".reveal");
    window.addEventListener("scroll", () => {
        if (revealElement && window.scrollY > 200) {
            revealElement.style.opacity = "1";
        }
    });

    // Hover event for navbar links
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#FFD700";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#FFFFFF";
        });
    });

    // Product object example
    const product = {
        id: 1,
        name: "Premium Nanny Service",
        description: "Our top-tier nanny services provide unmatched care and flexibility.",
        price: "$500/month",
    };

    // Example of using product data in a modal
    const modalBody = document.querySelector(".modal-body");
    if (modalBody) {
        modalBody.textContent = `Name: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}`;
    }
});


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
