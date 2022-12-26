<? 
	session_start(); 
  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);
  $row = mysql_fetch_array($result);       
	$item_num = $row[num];
	$item_id = $row[id];
	$item_name = $row[name];
  $item_nick = $row[nick];
	$item_hit = $row[hit];
  $item_date = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	$item_content = $row[content];
	$is_html = $row[is_html];
	if ($is_html!="y") {
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
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
					<form  name="board_form" method="post" action="insert.php?liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" id="subject" name="subject"></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="content">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="content" id="content"></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>
					</form>
				</div>

		</div>
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>