<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.html %}

  <body>
    <main>
        {{ content }}
    </main>
    <script src='https://code.jquery.com/jquery-3.1.0.min.js' integrity='sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s='   crossorigin='anonymous'></script>
    <script src='{{site.baseurl}}/site.js'></script>
  </body>
</html>