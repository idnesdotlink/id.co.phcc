@php
$stream = [1,2,3,4,5,6,7,8,9];
@endphp
<div>
<h3 class="title">Photo Stream</h3>
<div class="stream">
    @foreach($stream as $item)
    <div>
        <a class="image-link" href="{{ Storage::url('public/img/slider/'.'3'.'.png') }}">
            <img data-src="holder.js/80x80" witdh="80" height="80"/>
        </a>
    </div>
    @endforeach
</div>
</div>
