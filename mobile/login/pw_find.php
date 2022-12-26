<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>비밀번호찾기</title>

    <link rel="stylesheet" href="../member/css/common.css">
    <link rel="stylesheet" href="./css/member.css">


    <script src="https://kit.fontawesome.com/ef15d6eb6f.js" crossorigin="anonymous"></script>
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script>
        $(document).ready(function() {

            $(".find").click(function() {    // id입력 상자에 id값 입력시
                var id = $('.find_id').val(); //green2
                var name = $('.find_name').val(); //홍길동
                var hp1 = $('#hp1').val(); 
                var hp2 = $('#hp2').val(); 
                var hp3 = $('#hp3').val(); 

                $.ajax({
                    type: "POST",
                    url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
                    data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                    cache: false, 
                    success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                    {
                        $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                    }
                });
                
            }); 

        });
    </script>
</head>
<body>
    <div id="wrap">
        <header>
            <h1>
                <a class="logo" href="../index.html">
                    <img src="../member/images/samsunglogo.png" alt="로고">
                </a>
            </h1>
        </header>

        <article id="content" class="be">
            <div class="title">
                <h2>비밀번호 찾기</h2>
                <p class="tex">입력하신 정보는 별도의 수집 및 저장 하지 않습니다.</p>
            </div>

            <form name="find" method="post" action="find2.php" class="be"> 
           
                <div id="login_form">
                    <div class="row">
                        <label for="id">아이디</label>
                        <input type="text" name="id" id="id" class="login_input find_id" placeholder="cesco123" title="아이디" maxlength="41">
                    </div>

                    <div class="row">
                        <label for="name">이름</label>
                        <input type="text" name="name" id="name" class="find_input find_name" placeholder="홍길동">
                    </div>
                
                    <div class="row telBox">
                        <label for="hp1">휴대전화</label>
                        <label class="hidden" for="hp1">전화번호앞3자리</label>
                        <select class="hp find_input" name="hp1" id="hp1"> 
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                        </select>
                        <span class="symbol">-</span>
                        <label class="hidden" for="hp2">전화번호중간4자리</label>
                        <input type="text" class="hp find_input" name="hp2" id="hp2" maxlength="4" placeholder="0000">
                        <span class="symbol">-</span>
                        <label class="hidden" for="hp3">전화번호끝4자리</label>
                        <input type="text" class="hp find_input" name="hp3" id="hp3" maxlength="4" placeholder="0000">
                    </div>
                </div>

                <div id="button">
                    <button type="button" class="find">비밀번호 찾기</button>
                </div>
                        
                <ul class="find_wrap">
                    <li>
                        <a href="./login_form.php">로그인</a>
                    </li>
                    <li>
                        <a href="./id_find.php">아이디 찾기</a>
                    </li>
                </ul>

                <div class="join">
                    <span>회원가입 후 간편하게 이용하세요.</span>
                    <a href="../member/join.html"><i class="fa-solid fa-pen-to-square"></i></a>
                </div>
                
                <span id="loadtext"></span>
               
            </form>
                
        </article>

    </div>
</body>
</html>