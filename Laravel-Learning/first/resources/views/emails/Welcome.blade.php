@component('mail::message')
# Introduction

This is the body of my <b>message</b>!

- some
- not useful
- points
- that can eventually
- be useful

@component('mail::button', ['url' => 'http://localhost:8000'])
Start Browsing!
@endcomponent

@component('mail::panel')
We can put some effect sentence here!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
