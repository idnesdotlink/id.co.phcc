<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{$title or null}}</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" type="text/css">
  </head>
  <body class="{{$bodyclass or null}}">
    <div id="app">
      <page-container-component>
          @include('layout.header')
          {{ $slot }}
          @include('layout.footer')
      </page-container-component>
    </div>
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    {{$footerscript or null}}
    <script src="{{ mix('/js/common.js') }}"></script>
  </body>
</html>
