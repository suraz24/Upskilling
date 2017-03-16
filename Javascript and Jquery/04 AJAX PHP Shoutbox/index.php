<?php include 'database.php'; ?>
<?php
//Create select query
    $query = "SELECT * FROM shouts ORDER BY id DESC";
    $shouts = mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html>
<head>
    <title>AJAX PHP SHOUTBOX</title>
    <link rel="stylesheet" href="css/stylesheet.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"> </script>
    <script src="js/script.js"> </script>

</head>
<body>
    <div id = "container">
        <header>
            <h1>JS Shoutbox </h1>
            <p>Try out my Shoutbox I created to practise AJAX. Feel free to shout out at anyone.</p>            
        </header>

        <section>
            <div id="shouts">
                <ul>
                <?php while($row = mysqli_fetch_assoc($shouts)) : ?>
                    <li>
                        <?php echo $row['name']; ?> :  <?php echo $row['shout']; ?>  [<?php echo $row['date']; ?>]
                    </li>
                <?php endwhile; ?>
                </ul>
            </div>
        </section>
        <footer>
            <form>
                <label> Name: </label>
                <input type = "text" id = "name" />
                <label>Shout Text: </label>
                <input type="text" name="shout" id="shout" />
                <input type="submit" id="submit" value="SHOUT!" />
        </footer>
    </div>
</body>
</html>