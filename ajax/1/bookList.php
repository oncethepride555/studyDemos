<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>图书列表</title>
		<style type="text/css">
			th,td{
				border-left: 1px solid #ddd;
				border-top: 1px solid #ddd;
			}
			table{
				border-right: 1px solid #ddd;
				border-bottom: 1px solid #ddd;
			}
		</style>
	</head>

	<body>
		<?php
			$arr = array();
			$arr[0] = array("name"=>"三国演义","author"=>"罗贯中","category"=>"古典文学","desc"=>"一个封建王朝的缩影");
			$arr[1] = array("name"=>"红楼梦","author"=>"曹雪芹","category"=>"古典文学","desc"=>"11111");
			$arr[2] = array("name"=>"西游记","author"=>"吴承恩","category"=>"古典文学","desc"=>"33344");
			$arr[3] = array("name"=>"水浒传","author"=>"施耐庵","category"=>"古典文学","desc"=>"44444");
		?>
		<!--cellspacing 单元格之间的距离-->
		<!--cellpadding  单元格内容与单元格边界之间的空白距离-->
		<table cellspacing="0" cellpadding="10">
			<thead>
				<tr>
					<th>名称</th>
					<th>作者</th>
					<th>分类</th>
					<th>描述</th>
				</tr>
			</thead>
			<tbody>
				<?php
					sleep(3);
					foreach($arr as $value){
						echo "<tr><td>$value[name]</td><td>$value[author]</td><td>$value[category]</td><td>$value[desc]</td>
				</tr>";
					}	
				?>
			</tbody>
		</table>
	</body>

</html>