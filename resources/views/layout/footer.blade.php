<div class="footer">
  <div>
      <div class="container">
          <div class="row">
              <div class="col-sm-6 col-md-6 col-lg-3">
                  <a href="{{ route('one') }}" title="Permata Harapan Cancer Center">
                      <img src="{{ Storage::url('public/img/logo/white_outline.svg') }}" style="width:75%;" alt="logo">
                      <span class="logo" style="display:none;">Permata Harapan Cancer Center</span>
                  </a>
                  <p class="info">Permata Harapan Cancer Center memberikan pelayanan konsultasi, pemeriksaan dan tindakan medis oleh dokter spesialis atau dokter sub spesialis</p>
                  <div data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    AOS
                  </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3">
                  <h3 class="title">Kontak</h3>
                  <address>
                  Jl. Siwalan No. 37, Kerten, Laweyan, Surakarta<br/>
                  <a href="tel:+622717651717">(0271) 765 17 17</a><br/>
                  <a href="tel:+62271741919">(0271) 74 19 19</a><br/>
                  <a href="mailto:reg.phcc.co.id@gmail.com">reg.phcc.co.id@gmail.com</a>
                  </address>
              </div>
              <div class="col-sm-12 col-md-12 col-12 col-lg-6">
@include('components.photo')
              </div>
          </div>
      </div>
  </div>
  <div class="copyright">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
              &copy; 2017 <a href="{{ route('one') }}" target="_blank">Permata Harapan Cancer Center</a>.
              </div>
              <div class="col-md-6">
              <a data-toggle="tooltip" data-placement="top" title="Solo Cancer Society" href=""><img width="150px" src="{{ Storage::url('public/img/logo/greyscale/scs.svg') }}" /></a>
              <a data-toggle="tooltip" data-placement="top" title="Doctor Handbook" href=""><img width="150px" src="{{ Storage::url('public/img/logo/greyscale/doctorhandbook.svg') }}" /></a>
              <a data-toggle="tooltip" data-placement="top" title="Indo Cancer" href=""><img width="150px" src="{{ Storage::url('public/img/logo/greyscale/indocancer.svg') }}" /></a>
              </div>
          </div>
      </div>
  </div><!-- .copyright -->
</div>
