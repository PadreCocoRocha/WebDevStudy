<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use Illuminate\Http\Request;
use App\Mail\Welcome;
use App\User;

class RegistrationController extends Controller
{
	public function create()
	{
		return view('/registration/create');
	}

	// Injecting the registration request here will make laravel use it's
	// built-in Request method to validate data (defined in Request::rules())
	public function store(RegistrationRequest $request){
		// Create user
		$user = User::create([
			'name' => $request['name'],
			'email' => $request['email'],
			'password' => bcrypt($request['password'])
		]);

		// Authenticate user
		auth()->login($user);

		// Mail user with welcome
		\Mail::to($user)->send(new Welcome($user));

		//Redirect to the homepage
		return redirect()->home();
	}
}