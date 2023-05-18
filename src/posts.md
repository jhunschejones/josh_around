---
layout: page
title: Posts
paginate:
  collection: posts
---

<ul class="posts">
  <% paginator.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

<% if paginator.total_pages > 1 %>
  <ul class="pagination">
    <% if paginator.previous_page %>
    <li class="previous-page">
      <a href="<%= paginator.previous_page_path %>">&#8249; Previous Page</a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li class="next-page">
      <a href="<%= paginator.next_page_path %>">Next Page &#8250;</a>
    </li>
    <% end %>
  </ul>
<% end %>
