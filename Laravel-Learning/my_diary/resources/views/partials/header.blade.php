<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset=utf-8>
        {{-- This is used to solve internet explorer compatibiity problems --}}
        <meta name=description content="My day-to-day manager">
        {{-- This sets the viewport width to the device's width --}}
        <meta name=viewport content="width=device-width, initial-scale=1">
        <!-- Cross-site Requrst Forgery Token -->
        <title>{{ config('app.name', 'My diary') }}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Styles -->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>