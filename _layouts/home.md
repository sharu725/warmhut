---
layout: default
---
<section class = 'blog'>
  <div class = 'land'>
    <div class = 'intro center-text'><div class = ''>{{ content }}</div></div>
  </div>
  <div class = 'flex-panel article'>
      <div class = 'flex-item tripple'>
          <ul class="post-list">
            <!--<h1>Latest Posts</h1>-->
            {% for post in site.posts %}
            <li>
              <h2>
                <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
              </h2>
              <time class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</time>
                {% if post.author %}
                    by 
                    <span itemprop="author" itemscope itemtype="http://schema.org/Person">
                    <span itemprop="name" class = 'author green'>{{ post.author }}</span></span>
                <div class = 'flex-panel featured'>
                <div class = 'flex-item duo'>
                    <figure><img src = '{{site.baseurl}}/assets/posts/{{post.image}}.jpg'></figure>
                  {% endif %}
                </div>
                <div class = 'flex-item duo'>
                  {{ post.excerpt }}
                </div>
              </div>
            </li>
            {% endfor %}
          </ul>
      </div>
      <aside class = 'flex-item trio'>
        <ul class="post-list">
          <li>
            <h2>Categories</h2>
            <div class = 'tags'>Business</div>
            <div class = 'tags'>Tech</div>
          </li>
          <li><h2>Recent Posts</h2></li>
          {% for post in site.posts %}
            <li>
              <i class="icon icon-arrow"></i>
              <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
            </li>
          {% endfor %}
        </ul>
      </aside>
  </div>
</section>
