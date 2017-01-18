<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.html %}

  <body>
    {% include header.html %}
    <main>
        {{ content }}
    </main>
    {% include chat.html %}
    {% include footer.md %}
  </body>
</html>