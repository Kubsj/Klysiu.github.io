<!DOCTYPE html>
<html lang="pl">
  <head>
    <link rel="stylesheet" href="style.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=\, initial-scale=1.0" />
    <title>Document</title>
  </head>
 
    <div class="website">
      <div class="nav-header">
        <a href="#main">Strona główna</a>
        <a href="#projects">Zdjęcia</a>
        <a href="#contact">Kontakt</a>
      </div>

      <div class="login-container">
        <div class="logged-screen">
          <p class="email-p">Welcome <b><?php echo $_POST["email"]; ?></b></p>

          <p class="pass-p">Your current password is <b><?php echo $_POST["pass"]; ?></b></p>
        </div>
      </div>
      <div class="footer"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
