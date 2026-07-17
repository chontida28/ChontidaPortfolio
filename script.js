/* ===============================
   Animation
================================ */

.hero-text,
.hero-img,
.about-box,
.contact-box,
.card{

opacity:0;

transform:translateY(50px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/* Active Menu */

nav ul li a.active{

color:#ff4d94;

font-weight:700;

position:relative;

}

nav ul li a.active::after{

content:"";

position:absolute;

left:0;

bottom:-6px;

width:100%;

height:3px;

background:#ff4d94;

border-radius:20px;

}
