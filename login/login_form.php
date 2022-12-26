<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/login.css">

    <script src="https://kit.fontawesome.com/ef15d6eb6f.js" crossorigin="anonymous"></script>
</head>
<body>
    
    <div class="wrap">
        <header>
            <h1>
                <a class="logo" href="../index.html">
                   <img src="../member/images/samsunglogo.png" alt="로고">
                </a>
            </h1>
        </header>

        <article id="content">
            <h2>로그인</h2>
            
            <form  name="member_form" method="post" action="login.php"> 
                <span class="text">삼성디스플레이에 오신것을 환영합니다. 로그인 후 이용하세요!</span>

                <div id="id_pw_input">
                    <div class="row">
                        <label for="id">아이디</label>
                        <input type="text" name="id" class="login_input" required>
                    </div>    
                    <div class="row">
                        <label for="pass">비밀번호</label>
                        <input type="password" name="pass" class="login_input" required>
                    </div>						
                </div>

                <div id="login_button">
                    <button type="submit">로그인</button>
                </div>

                <ul class="lastlist">
                    <li>
                        <a href="./id_find.php">아이디 찾기</a>
                    </li>
                    <li>
                        <a href="./pw_find.php">비밀번호 찾기</a>
                    </li>
                </ul>
                <div class="join">
                    <span>회원가입 후 간편하게 이용하세요.</span>
                    <a href="../member/join.html"><i class="fa-solid fa-pen-to-square"></i></a>
                </div>
            </form>
        </article>
    </div>

</body>
</html>