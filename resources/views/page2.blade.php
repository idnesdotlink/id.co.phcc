@component('layout.base')

@slot('title')
    Page 1
@endslot

@slot('bodyclass')
  body test
@endslot

<div class="content">
  <div class="container">
    <div class="row">
      <div class="content-a col-12 col-lg-9">
        <slide-component></slide-component>
      </div>
      <div class="content-b col-12 col-lg-3">[3]</div>
    </div>
  </div>
</div>

@slot('footerscript')
<script src="{{ mix('/js/page2.js') }}"></script>
@endslot

@endcomponent
