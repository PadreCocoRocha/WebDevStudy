
<div class="container-fluid full-height" style="padding-right: 0;">
    <div class="col-sm-6 full-height main-column-border">

        <h3>Done this week <i class="glyphicon glyphicon-ok" style="color: darkgreen;"></i></h3>
        
        <br>

        <ul class="no-dots inline-container">
            @foreach ( $doneTodos as $todo)
                <li>
                    <p>{{ $todo->body }}</p>
                    <span><i class="glyphicon glyphicon-remove"></i></span>
                </li>
            @endforeach
        </ul>

        {{-- tasks already done formulary --}}
        <form action="/todo" method="POST">
            {{ csrf_field() }}
            <div class="input-group bottom-aligned column-input">
                <input type="hidden" name="task" value="done">
                <input class="form-control" type="text" name="body" placeholder="Done tasks here">
                <div class="input-group-btn">
                    <button type="submit" class="btn btn-primary">
                        <i class="glyphicon glyphicon-plus"></i>
                    </button>
                </div>
            </div>
        </form>

    </div> {{-- left side - done tasks --}}
    
    <div class="col-sm-6 full-height main-column-border">
        <h3>Todo this week <i class="glyphicon glyphicon-time" style="color: orange;"></i></h3>
        <br>
        <ul class="no-dots inline-container">
            @foreach ( $undoneTodos as $todo)
                <li>
                    <p>{{ $todo->body }}</p>
                    <span><i class="glyphicon glyphicon-ok"></i></span>
                </li>
            @endforeach
        </ul>

        {{-- new task to be done formulary --}}
        <form action="/todo" method="POST">
            {{ csrf_field() }}
            <div class="input-group bottom-aligned column-input">
                <input type="hidden" name="task" value="new">
                <input class="form-control" type="text" name="body" placeholder="To do tasks here">
                <div class="input-group-btn">
                    <button type="submit" class="btn btn-primary">
                        <i class="glyphicon glyphicon-plus"></i>
                    </button>
                </div>
            </div>
        </form>
        
    </div> {{-- Right side - to do tasks --}}
</div>