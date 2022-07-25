<?php 
	if (! isset($_SESSION['username'])) {
		header("Location: ../../login.php");
	}
?>
<?php
	
require '../../model/User.php';


if (isset($_SESSION['user_list'])) {
    var_dump($_SESSION['user_list']);
}

$products = getAll();

?>


<div style="text-align:center">
    <table class="table" border="1">
        <thead>
        <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($products as $product): ?>
            <tr>
                
                <td><?php echo $product['id'] ?></td>
                <td><?php echo $product['fullname'] ?></td>
                <td><?php echo $product['username'] ?></td>
                <td><?php echo $product['email'] ?></td>
               
                <td>
                    
                    <a href="dashboard_update_prod.php?id=<?php echo $product['id'] ?>"
                       class="btn btn-sm btn-outline-secondary">Update</a>
                   
                </td>
            </tr>
        <?php endforeach;; ?>
        </tbody>
    </table>
</div>
