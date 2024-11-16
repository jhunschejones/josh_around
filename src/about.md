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

Hey, I'm Josh! 👋🏻

I am a determined life-long learner and creator, passionate about well-designed and meticulously crafted music, film, software, and more. I love to take on new challenges and learn new domains, and I enjoy sharing what I've learned with others.

In 2024 I moved from my home in Chicago to Tokyo to attend language school. While in school I studied intermediate and advanced Japanese and made friends who helped me expand the way I see the world. Check out my <a href="/videos">videos</a> to see some of my most recent adventures.

Thanks for joining me on my journey!

<span class="hide-on-small">
  Josh
</span>
