<?php

namespace App\Http\Controllers;

use App\Todo;

class TodoController extends Controller
{
    public function store(Todo $todo){

        $this->validate(request(), [
            'task' => 'required|max:4',
            'body' => 'required|max:100'            
        ]);

        $body = request('body');
        $done = (request('task') === 'new') ? false : true;
        
        if (auth()->check()) {
            auth()->user()->addTask(
                new Todo(compact(['body', 'done']))
            );
        }

        return redirect()->home();
    }
}
