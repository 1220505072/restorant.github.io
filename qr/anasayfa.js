window.addEventListener("load", () => {
    // Hoş geldiniz mesajını göster
    const welcomeMessage = document.getElementById("welcomeMessage");
    setTimeout(() => {
        welcomeMessage.classList.add("visible");
    }, 1000); // 1 saniye sonra yazı görünür olacak
});
