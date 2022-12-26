<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  $item_nick    = $row[nick];
	$item_hit     = $row[hit];

  $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]); 	// 공백문자 대체

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);	// 공백문자 대체
		$item_content = str_replace("\n", "<br>", $item_content);	// 내려쓰기 대체
	}

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css">
	<link rel="stylesheet" href="./css/greets.css">


	<script src="https://kit.fontawesome.com/ef15d6eb6f.js" crossorigin="anonymous"></script>
	<script src="../common/js/prefixfree.min.js"></script>
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</head>

<body>
<? include "../common/sub_header.html" ?>

<div class="visual">
    <img src="../sub6/common/images/sub6_main.jpg" alt="메인">
    <h3>공지사항</h3>
  </div>

	<div class="subNav">
    <ul>
      <li><a class="current" href="../greet/list.php">공지사항</a></li>
      <li><a href="../sub6_2.html">FAQ</a></li>
      <li><a href="../sub6_3.html">찾아오시는 길</a></li>
    </ul>
  </div>

	<article id="content">
    <div class="titleArea">
      <div class="lineMap">
        <span>home</span> &gt; <span>고객지원</span> &gt; <strong>공지사항</strong>
      </div>
      <h2>공지사항<span></span></h2>
      <p>
        삼성디스플레이의 최근 이슈 및 공지사항을 알려드립니다.
      </p>
    </div>

		<div class="content_area">

		<div class="bbs_wrap">
<ul class="bbs_view_ttl">
	<li><?= $item_subject ?></li>
	<li>
		<span><?= $item_nick ?></span>
		<span><?= $item_date ?></span>
		<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
	</li>
</ul>


<div class="bbs_view_cont"><?= $item_content ?></div>

<div class="btn_wrap">
	<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
	<? 
		if($userid==$item_id || $userlevel==1 || $userid=="admin")
		// 로그인된 아이디 == 글쓴이 이거나 최고 관리자면 참
		{
	?>
	<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">수정</a>
	<a href="javascript:del('delete.php?num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
	<?
		}
	?>
	<? 
		if($userid)  //로그인이 되면 글쓰기
		{
	?>
	<a href="write_form.php?liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
	<?
		}
	?>
</div>
</div>

			</div>
		</article>
		<? include "../common/sub_footer.html" ?>
	</body>
</html>