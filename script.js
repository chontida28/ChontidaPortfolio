// เปิดรูป
function openImage(src) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popup.style.display = "flex";
    popupImg.src = src;
}

// ปิดรูป
function closeImage() {
    document.getElementById("popup").style.display = "none";
}

// กด ESC เพื่อปิด
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeImage();
    }
});

// คลิกพื้นหลังเพื่อปิด
document.getElementById("popup").addEventListener("click", function(e){
    if(e.target.id === "popup"){
        closeImage();
    }
});

// เอฟเฟกต์เลื่อนเข้ามา
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";
    observer.observe(card);
});

