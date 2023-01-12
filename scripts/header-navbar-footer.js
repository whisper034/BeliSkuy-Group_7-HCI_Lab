// * buat ngambil header, navBar, dan footer

let headerTake = document.getElementById("header");
headerTake.innerHTML = 
`
<div class="logo">
  <img src="../assets/logos/Logo.png" alt="logo_BeliSkuy_Group_7" width="150rem">
</div>
`;

let navTake = document.getElementById("nav");
navTake.innerHTML = 
`
<div class="navbar">
  <div class="top">
    <a href="../pages/gallery.html" class="gallery">Gallery</a>
    <a href="../pages/register.html" class="register">Register</a>
    <a href="../pages/cart.html" class="cart">Cart</a>
  </div>
  <div class="bottom">
    <a href="../pages/chat.html" class="chat">Chat</a>
    <a href="../pages/profile.html" class="profile">Profile</a>
  </div>
</div>
`;

let footerTake = document.getElementById("footer");
footerTake.innerHTML = 
`
<div class="footer">
  <div class="page">
    <div class="page-text">
      <h3>Pages</h3>
    </div>

    <div>
      <a href="../pages/gallery.html">
        Gallery
      </a>
    </div>

    <div>
      <a href="../pages/register.html">
        Register
      </a>
    </div>

    <div>
      <a href="../pages/cart.html">
        Cart
      </a>
    </div>

    <div>
      <a href="../pages/chat.html">
        Chat
      </a>
    </div>

    <div>
      <a href="../pages/profile.html">
        Profile
      </a>
    </div>
  </div>

  <div class="about-us">
    <div class="about-us-text">
      <h3>About Us</h3>
    </div>

    <div>
      <a href="../pages/faq.html">
        FAQ
      </a>
    </div>

    <div>
      <a href="../pages/return-policy.html">
        Return Policy
      </a>
    </div>

    <div>
      <a href="">
        Contact Us
      </a>
    </div>
  </div>

  <div class="social-media">
    <div class="social-media-text">
      <h3>Social Media</h3>
    </div>

    <div class="social-media-logo">
      <a href="https://id-id.facebook.com/" target="_blank">
        <img src="../assets/logos/facebook.png" alt="facebook_logo" width="30rem">
      </a>

      <a href="https://instagram.com/patrickjonathan99?igshid=YmMyMTA2M2Y=" target="_blank">
        <img src="../assets/logos/instagram.png" alt="instagram_logo" width="30rem">
      </a>

      <a href="https://twitter.com/GenshinImpact?t=UQmk7NOcrwmznGodTsXFYA&s=09" target="_blank">
        <img src="../assets/logos/twitter.png" alt="twitter_logo" width="30rem">
      </a>

      <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
        <img src="../assets/logos/youtube.png" alt="youtube_logo" width="30rem">
      </a>
    </div>
  </div>
</div>
`;