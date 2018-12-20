---
layout: home
title: pages.home.title
---

<main class="bs-docs-masthead" id="content" role="main">
  <div class="container">
    <h1>Multiple Select</h1>
    <p class="lead">{% t pages.home.lead %}</p>
    <p class="lead">
      <a href="https://github.com/wenzhixin/multiple-select" class="btn btn-outline-inverse btn-lg">
        {% t pages.home.download %}
      </a>
      <a href="../getting-started" class="btn btn-outline-inverse btn-lg">
        {% t pages.getting_started.title %}
      </a>
    </p>
    <p class="version">{% t pages.home.current_version %} v{{ site.current_version }}</p>
  </div>
</main>

<div>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h2 class="bs-docs-featurette-title">{% t pages.home.sub_title %}</h2>
        <p class="lead">{% t pages.home.sub_lead %}</p>
      </div>

      <div class="col-md-4">
        {% include ads.html %}
      </div>
    </div>

    <hr class="half-rule">

    <div class="row">
      <div class="col-md-5">
        {% tf home/feature.md %}
      </div>
      <div class="col-md-7">
        {% capture my_include %}{% include latest-release.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
    </div>
  </div>
</div>
