---
layout: page
title: About me
photos:
- image: DSC05633_Lightroom 5_XS.jpeg
  alt: A headshot of Josh Jones smiling in front of a nature background
- image: DSC01864_EDIT_SM.jpeg
  alt: "Josh holding a camera looking into a mirror"
---

<div class="photo-gallery headshot">
  <% data.photos.each do |photo| %>
    <div class="photo-container">
      <img src="/images/<%= photo.image %>" alt="<%= photo.alt %>" class="photo"/>
    </div>
  <% end %>
</div>

Hey there! 👋🏻 My name is Josh Jones. I am a determined life-long learner and creator, as passionate about well-designed technology and software products as I am about meticulously crafted music and Japanese language learning. I love to take on new challenges and learn new domains that interest me. I also enjoy putting together experiments and sharing what I've learned along the way with others. Thanks for joining me on my journey!
