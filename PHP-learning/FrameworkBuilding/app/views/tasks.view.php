<?php require('partials/header.php'); ?>

<div class="cont">
	<h1>My tasks</h1>
	<ul>
	 	<?php foreach($tasks as $task): 
	 		if (!$task->isComplete()): ?>
	 			<li>Description: <?= $task->describe(); ?></li>
	 		<?php else : ?>
	 			<li><strike><?= $task->describe();?></strike></li>
	 		<?php endif; ?>
	 		<br>
	 	<? endforeach; ?>
	</ul>
	<form method="POST" action="/tasks">
		<input type="text" name="description" placeholder="description">
		<button type="submit">Submit</button>
	</form>
</div>

<?php require('partials/footer.php'); ?>