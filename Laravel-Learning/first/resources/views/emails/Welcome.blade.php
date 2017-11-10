@component('mail::message')
# Introduction

Welcome to My first Laravel app, {{ $user->name }}!

@component('mail::button', ['url' => 'http://localhost:8000'])
Start Browsing!
@endcomponent

@component('mail::panel')
Don't forget, {{ $user->name }} <br>
We can put some effect sentence here!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
