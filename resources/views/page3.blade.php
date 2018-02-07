@component('layout.base')

@slot('title')
    Page 2
@endslot

@slot('bodyclass')
  body
@endslot
<div class="content">
  <slide-component></slide-component>
</div>
@slot('footerscript')
<script src="{{ mix('/js/page3.js') }}"></script>
@endslot

@endcomponent

