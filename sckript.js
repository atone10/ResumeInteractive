const character = document.getElementById('character');

// Sprite properties
const frameWidth = 100; // Width of a single frame
const totalFrames = 1; // Total number of frames in the spritesheet
let currentFrame = 0;
let positionX = 0; // Character's horizontal position
const speed = 3.5; // Speed of movement
const maxPositionX = window.innerWidth - character.clientWidth; // Maximum horizontal boundary

// Update the sprite frame
function updateSprite() {
    currentFrame = (currentFrame + 1) % totalFrames;
    const frameX = currentFrame * frameWidth;
    character.style.backgroundPosition = `-${frameX}px 0`;
}

// Move the character horizontally within screen limits
function moveCharacter(deltaX) {
    positionX += deltaX;
    positionX = Math.max(0, Math.min(positionX, maxPositionX)); // Keep within bounds
    character.style.left = `${positionX}px`;
    updateSprite();
}

// Listen for arrow key events
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        moveCharacter(speed);
    } else if (event.key === "ArrowLeft") {
        moveCharacter(-speed);
    }
});

// Adjust boundaries on window resize
window.addEventListener("resize", () => {
    maxPositionX = window.innerWidth - character.clientWidth;
    positionX = Math.max(0, Math.min(positionX, maxPositionX));
    character.style.left = `${positionX}px`;
});
