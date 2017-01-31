---
layout: default
comments: true
---
<article class = 'flex-panel transparent' itemscope itemtype="http://schema.org/BlogPosting">
  <div class = 'flex-item duo post article'>
    <div class="post-header">
      <a href = '{{site.baseurl}}/blog'>
        <div><i class = 'icon icon-back' aria-hidden = 'true'></i>All Posts</div>
        <time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
          {{ page.date | date: "%b %-d, %Y" }}
        </time>
        {% if page.author %}
          by 
          <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name" class = 'author green'>{{ page.author }}</span></span>
        {% endif %}
        <h1 class="post-title" itemprop="name headline">{{ page.title | escape }}</h1>
        </a>
    </div>
    <div class="post-content" itemprop="articleBody">
      {{ content }}
    </div>

    {% if site.disqus.shortname %}
      {% include disqus_comments.html %}
    {% endif %}
      
  </div>
  <aside class = 'flex-item trio article'>
    <ul class="post-list">
      <li><h2>Related Posts</h2></li>
      {% for post in site.posts %}
        {% if post != page %}
        <li>
          <i class="icon icon-arrow"></i>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </aside>
</article>

