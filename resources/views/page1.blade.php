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
      <div class="col home-slider">
        <slider-component :thumbnail="false">
          <div>
            <img src="{{ asset('storage/img/slider/emergency.jpg') }}"/>
            <p>Hospitable</p>
          </div>
          <div>
            <img src="{{ asset('storage/img/slider/hospitable.jpg') }}"/>
            <p>Easier</p>
          </div>
          <div>
            <img src="{{ asset('storage/img/slider/pharmacy.jpg') }}"/>
            <p>Better</p>
          </div>
        </slider-component>
      </div>
    </div>
  </div>
</div>

<div class="content">
  <div class="container">
    <div class="row">
      <div class="content-a col-12 col-lg-9">
        [9]
      </div>
      <div class="content-b col-12 col-lg-3">[3]</div>
    </div>
  </div>
</div>

@slot('footerscript')
<script src="{{ mix('/js/page1.js') }}"></script>
@endslot

@endcomponent
