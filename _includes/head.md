<head>
  <meta name="google-site-verification" content="TLRk-3-wIkzXkZnNroKjhMm_Qxu_FiZx60_AsyWCPYo" />
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% seo %}
  {% if page.noindex %}{% include noindex.html %}{% endif %}
  <meta itemprop = 'description' name="description" content="{{ page.excerpt | default: page.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">  
  {% if page.keywords %}<meta itemprop = 'keywords' content = '{{page.keywords}}'>{% endif %}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="shortcut icon" type="image/ico" href="/favicon.ico">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000">
  <link rel="canonical" href="{{ page.url | replace:'index.htm l','' | absolute_url }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ '/feed.xml' | relative_url }}">
  {% if site.google_analytics %}{% include google-analytics.html %}{% endif %}
  <style>
      .goal,
      .insight,
      .screen .face-one .display{
        background-repeat:no-repeat;
        background-position:top center;
      }
      .insight{
         background-image: url({{site.baseurl}}/assets/layout/creative.jpg);
      }
      .screen .face-one .display{
        background-image: url({{site.baseurl}}/assets/layout/creative-min.jpg);
      }
      .goal{
         background-image:url({{site.baseurl}}/assets/layout/art.jpeg);
      }
      .dev{
        background-image:url({{site.baseurl}}/assets/layout/type.png);
        background-repeat:repeat;
      }
      .weather{
        background-image:url({{site.baseurl}}/assets/layout/graphics.png);-->-->
      }
      @font-face {
        font-family: 'fontello';
        src:url('{{ site.baseurl }}/assets/fontello.woff?62263755') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      [class^="icon-"]:before, [class*=" icon-"]:before {
        font-family: "fontello";
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        margin-right: .2em;
        text-align: center;
        font-variant: normal;
        text-transform: none;
        line-height: 1em;
        margin-left: .2em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .icon-rss:before { content: '\e800'; } 
      .icon-arrow:before { content: '\e801'; } 
      .icon-book:before { content: '\e803'; } 
      .icon-chat:before { content: '\e804'; } 
      .icon-music:before { content: '\e805'; } 
      .icon-elite:before { content: '\e806'; } 
      .icon-facebook:before { content: '\e807'; } 
      .icon-cancel:before { content: '\e808'; }
      .icon-heart:before { content: '\e809'; }
      .icon-mail:before { content: '\e80a'; }
      .icon-search:before { content: '\e80b'; }
      .icon-rocket:before { content: '\e80c'; }
      .icon-share:before { content: '\e80d'; }
      .icon-back:before { content: '\e80e'; }
      .icon-undo:before { content: '\e810'; }
      .icon-bars:before { content: '\f008'; }
      .icon-desktop:before { content: '\f108'; }
      .icon-laptop:before { content: '\f109'; }
      .icon-cool:before { content: '\f164'; }
      .icon-cloud:before { content: '\f1be'; }
      .icon-agree:before { content: '\f2b5'; }
      .icon-twitter:before { content: '\f309'; }

      {% capture include_to_scssify %}
      {% include critical.scss %}
      {% endcapture %}
      {{ include_to_scssify | scssify }}
  </style>
</head>
