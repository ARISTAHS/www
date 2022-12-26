<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head> 
<meta charset="utf-8">
<title>회원가입 - 정보수정</title>

    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/form.css">


    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
    <script src="./js/member_check.js"></script> 
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
    $(document).ready(function() {
        //nick 중복검사		 
        $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
            var nick = $('#nick').val();

            $.ajax({
                type: "POST",
                url: "check_nick.php",
                data: "nick="+ nick,  
                cache: false, 
                success: function(data)
                {
                    $("#loadtext2").html(data);
                }
            });
        }); 

        //pass_confirm
        $("#pass_confirm").keyup(function(){
            
            if($('#pass').val() == $('#pass_confirm').val()){
                $('#loadtext_pass_confirm').html('<span class="success">비밀번호가 일치합니다.</span>');
                $('#pass_confirm').parent().parent('dl').removeClass('fail');
                $('#pass_confirm').parent().parent('dl').addClass('success');
            } else {
                $('#loadtext_pass_confirm').html('<span class="fail">비밀번호가 일치하지 않습니다.</span>');
                $('#pass_confirm').parent().parent('dl').removeClass('success');
                $('#pass_confirm').parent().parent('dl').addClass('fail');
            }
        });

    });
    </script>
    <script>

   function check_input()
   {
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit();
   }

   function reset_form()
   {
   
      history.go(-1);
   }
</script>
</head>
    <?
        include "../lib/dbconn.php";

        $sql = "select * from member where id='$userid'";
        $result = mysql_query($sql, $connect);

        $row = mysql_fetch_array($result);

        $hp = explode("-", $row[hp]);
        $hp1 = $hp[0];
        $hp2 = $hp[1];
        $hp3 = $hp[2];

        $email = explode("@", $row[email]);
        $email1 = $email[0];
        $email2 = $email[1];

        mysql_close();
    ?>
<body>

    <header>
        <h1>
            <a class="logo" href="../index.html"><img src="./images/samsunglogo.png" alt="삼성로고"></a>
        </h1>
    </header>

    <article id="content">
        <h2>회원정보 수정</h2>
        
        <div class="joinform_wrap">
            <form name="member_form" method="post" action="modify.php">

                <dl>
                    <dt><label for="id">아이디</label></dt>
                    <dd>
                        <input type="text" value="<?= $row[id] ?>" readonly>
                    </dd>
                </dl>
                <dl>
                    <dt><label for="pass">비밀번호</label></dt>
                    <dd>
                        <input type="password" name="pass" id="pass" placeholder="비밀번호를 입력하세요." required>
                    </dd>
                </dl>
                <dl>
                    <dt><label for="pass_confirm">비밀번호 확인</label></dt>
                    <dd>
                        <input type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호를 입력하세요." required>
                        <div class="notice_txt" id="loadtext_pass_confirm"></div>
                    </dd>
                </dl>
                <dl>
                    <dt><label for="name">이름</label></dt>
                    <dd>
                        <input type="text" name="name" id="name" value="<?= $row[name] ?>" required>
                    </dd>
                </dl>
                <dl>
                    <dt><label for="nick">닉네임</label></dt>
                    <dd>
                        <input type="text" name="nick" id="nick" value="<?= $row[nick] ?>" required>
                        <div class="notice_txt" id="loadtext2"></div>
                    </dd>
                </dl>
                <dl class="hp">
                    <dt>휴대폰</dt>
                    <dd>
                        <label class="hidden" for="hp1">전화번호앞3자리</label>
                        <select class="hp" name="hp1" id="hp1"> 
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                        </select>
                        <span>-</span>
                        <label class="hidden" for="hp2">전화번호중간4자리</label>
                        <input type="text" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" maxlength="4" required>
                        <span>-</span>
                        <label class="hidden" for="hp3">전화번호끝4자리</label>
                        <input type="text" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>"  maxlength="4" required>
                    </dd>
                </dl>
                <dl class="email">
                    <dt>이메일</dt>
                    <dd>
                        <label class="hidden" for="email1">이메일아이디</label>
                        <input type="text" id="email1" name="email1" value="<?= $email1 ?>" required>
                        <span>@</span> 
                        <label class="hidden" for="email2">이메일주소</label>
                        <input type="text" name="email2" id="email2" value="<?= $email2 ?>" required>
                    </dd>
                </dl>

                <div class="button">
                    <a href="#" class="btn ok" onclick="check_input()">수정하기</a>
                    <a href="#" class="btn cancel" onclick="reset_form()">취소하기</a>
                </div>

	        </form>
        </div>
                
	</article>

</body>
</html>
