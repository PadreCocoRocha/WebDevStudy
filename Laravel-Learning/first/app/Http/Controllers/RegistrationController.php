<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class RegistrationController extends Controller
{
    public function create()
    {
    	return view('/registration/create');
    }

    public function store(){
    	// Validate Data
    	$this->validate(request(), [
    		'name' => 'required',
    		'email' => 'required|unique:users|email',
    		'password' => 'required|confirmed'
    	]);

    	// Create user
    	$user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

    	// Authenticate user
    	auth()->login($user);

    	//Redirect to the homepage
    	return redirect()->home();
    }
}