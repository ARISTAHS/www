<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  $item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

  $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	//첨부된 이미지 가져오기
	for ($i=0; $i<3; $i++)  // 0~2 체크
	{
		if ($image_copied[$i]) //첨부된 이미지가 있으면 실행
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			// 배열로 리턴 [이미지 너비,이미지 높이,이미지 타입]

			$image_width[$i] = $imageinfo[0];  //이미지 너비 
			$image_height[$i] = $imageinfo[1];  //이미지 높이 
			$image_type[$i]  = $imageinfo[2];  //이미지 타입

			if ($image_width[$i] > 785)  //이미지 너비 값 제한
				$image_width[$i] = 785;  
		}
		else  //첨부된 이미지가 없으면 실행
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);

	$ripple = "concert_rip";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>홍보센터 - NEWS</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/news.css">


	<script src="https://kit.fontawesome.com/ef15d6eb6f.js" crossorigin="anonymous"></script>
	<script src="../common/js/prefixfree.min.js"></script>
<script>
		function check_input()	// 추가함수
		{
			if (!document.ripple_form.ripple_content.value)
			{
				alert("내용을 입력하세요!");    
				document.ripple_form.ripple_content.focus();
				return false;
			}
			document.ripple_form.submit();
		}
		
		function del_repple(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
				document.location.href = href;
			}
		}

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
    <img src="../sub4/common/images/sub4_main.jpg" alt="책상위에 놓친 플랩">
    <h3>홍보센터</h3>
  </div>

	<div class="subNav">
    <ul>
      <li><a class="current" href="../concert/list.php">NEWS</a></li>
      <li><a href="../sub4/sub4_2.html">미디어센터</a></li>
      <li><a href="../sub4/sub4_3.html">직무소개</a></li>
    </ul>
  </div>

	<article id="content">
    <div class="titleArea">
      <div class="lineMap">
        <span>home</span> &gt; <span>홍보센터</span> &gt; <strong>NEWS</strong>
      </div>
      <h2>NEWS<span></span></h2>
      <p>
        삼성디스플레이의 최근 소식을 전해드립니다.
      </p>
    </div>

    <div class="content_area">


		<div class="photo_bbs_wrap">

			<ul class="bbs_view_ttl">
				<li><?= $item_subject ?></li>
				<li>
					<span><?= $item_nick ?></span>
					<span><?= $item_date ?></span>
					<span><i class="fa-regular fa-eye"><i>조회수</i></i> <?= $item_hit ?></span>
				</li>
			</ul>


		<div class="bbs_view_cont">
			<?
				for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
				{
					if ($image_copied[$i])	// 첨부된 파일이 있으면
					{
						$img_name = $image_copied[$i];
						$img_name = "./data/".$img_name; 
						// ./data/2019_03_22_10_07_15_0.jpg
						// $img_width = $image_width[$i];
						
						// echo "<div class='img'><img src='$img_name' width='$img_width'></div>";
							echo "<div class='img'><img src='$img_name' alt='첨부이미지'></div>";
					}
				}
			?>
			<?= $item_content ?>
		</div>

<!-- 댓글보기 및 댓글입력 추가 : 시작 -->
 <div class="comment_wrap">
	<ul class="ripple_lst">
		<?
			$sql = "select * from $ripple where parent='$item_num'";
			$ripple_result = mysql_query($sql);

			while ($row_ripple = mysql_fetch_array($ripple_result))
			{
				$ripple_num     = $row_ripple[num];
				$ripple_id      = $row_ripple[id];
				$ripple_nick    = $row_ripple[nick];
				$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
				$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
				$ripple_date    = $row_ripple[regist_day];
		?>
		<li>
			<dl>
				<dt>
					<?=$ripple_nick?>
					<small><?=$ripple_date?></small>
				</dt>
				<dd>
					<span><?=$ripple_content?></span>

					<?  if($userid==$ripple_id || $userid=="admin" || $userlevel==1){	// 관리자, 글쓴이만 수정 가능 ?>
					<div class="ripple_input_modify">
						<form name='ripple_form_modify' method='post' action='insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>&ripple_num=<?=$ripple_num?>&mode=modify'>
							<textarea name='ripple_content'><?=$row_ripple[content]?></textarea>
							<a href='#'>수정</a>
						</form>
					</div>
					<? } ?>

				</dd>
			</dl>
			<?  if($userid==$ripple_id || $userid=="admin" || $userlevel==1){	// 관리자, 글쓴이만 삭제 가능 ?>

						<div class='func'>
							<a href='#' class="modify">
								<i class='fa-solid fa-pencil'><i>수정</i></i>
							</a>
							<a href="javascript:del_repple('delete_ripple.php?table=<?=$table?>&num=<?=$item_num?>&ripple_num=<?=$ripple_num?>')">
								<i class='fa-regular fa-trash-can'><i>삭제</i></i>
							</a>
						</div>
			<? } ?>
		</li>
	<?
		}
	?>
	</ul> 
	<form name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
		<ul class="ripple_input">
			<li>
				<?	
					if($userid){
						echo "<textarea rows='5' cols='65' placeholder='댓글을 입력하세요' name='ripple_content'></textarea>";
					} else {
						echo "<textarea rows='5' cols='65' placeholder='로그인 후 이용하세요' name='ripple_content' readonly></textarea>";
					}
				?>
			</li>
			<li><a href="#" onclick="check_input()">댓글쓰기</a></li>
		</ul>
	</form>
</div> 
<!-- end of ripple -->
<!-- 댓글보기 및 댓글입력 추가 : 끝 -->



<div class="btn_wrap">
	<a href="list.php?table=<?=$table?>&page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
	<? 
		if($userid==$item_id || $userlevel==1 || $userid=="admin")
		// 로그인된 아이디 == 글쓴이 이거나 최고 관리자면 참
		{
	?>
	<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">수정</a>
	<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>&liststyle=<?=$liststyle?>')">삭제</a>
	<?
		}
	?>
	<? 
		if($userid)  //로그인이 되면 글쓰기
		{
	?>
	<a href="write_form.php?table=<?=$table?>&liststyle=<?=$liststyle?>" class='active'>글쓰기</a>
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