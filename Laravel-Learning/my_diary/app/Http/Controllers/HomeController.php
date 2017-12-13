<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Todo, User};

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todos = auth()->user()->todos;

        $doneTodos = [];
        $undoneTodos = [];

        foreach($todos as $todo){
            if ($todo->done) array_push($doneTodos, $todo);
            else array_push($undoneTodos, $todo);
        }

        return view('home',compact('doneTodos', 'undoneTodos'));
    }

    public function logout(){
        auth()->logout();
        return redirect()->home();
    }
}
