---
layout: page
title: Videos
photos:
- image: DSC01864_EDIT_SM.jpeg
  alt: A photo of Josh Jones holding a camera, looking into a mirror
- image: DSC05995_EDIT_MD.jpeg
  alt: A photo of a Tokyo street with trees on either side
---

<div class="photo-gallery">
  <% data.photos.each do |photo| %>
    <div class="photo-container">
      <img src="/images/<%= photo.image %>" alt="photo.alt" class="photo">
    </div>
  <% end %>
</div>

I enjoy crafting beautiful videos and sharing stories about the things I've learned on my adventures. I'm currently posting these on the <a href="https://www.youtube.com/@josh_around/videos" target="_blank">@josh_around</a>  YouTube channel.
Please stop by and and watch some whenever you like! 🍿

<div class="d-flex">
  <button class="cta-button js-youtube-button">Visit me on YouTube ✨</button>
</div>
