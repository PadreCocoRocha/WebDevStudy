<h3>How's your mood right now?</h3>

{{-- selectable smiles container --}}
<form action="/mood" method="POST">
    {{ csrf_field() }}
    <div class="form-group inline-container mood">
        <span><a href="#"><i class="fa fa-hand-rock-o fa-2x"></i></a></span>
        <span><a href="#"><i class="fa fa-smile-o fa-2x"></i></a></span>
        <span><a href="#"><i class="fa fa-meh-o fa-2x"></i></a></span>
        <span><a href="#"><i class="fa fa-frown-o fa-2x"></i></a></span>
        <span><a href="#"><i class="fa fax-anger-o fa-2x"></i></a></span>
    </div>
    <div class="input-group">
        <input class="form-control" type="text" name="reason" placeholder="Any special reason?"> 
        <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
                <i class="glyphicon glyphicon-send"></i>
            </button>
        </div>
    </div>
</form>