//
//物件管理チェック
//
function fnArticleEditCheck() {
	tmp = form.article.value;
	if (tmp.length == 0) {
		alert('物件名を入力してください');
		return;
	}
	if (tmp.length > 100) {
		alert('物件名は100文字以内で入力してください');
		return;
	}
	if (isLength(100, "物件名", form.article)) { return; }
	if (isLength(100, "部屋番号", form.room)) { return; }
	if (isLength(200, "鍵場所", form.keyPlace)) { return; }
	if (isLength(100, "住所", form.address)) { return; }
	if (isLength(200, "備考", form.articleNote)) { return; }
	if (isLength(100, "キーBox番号", form.keyBox)) { return; }
	if (isLength(100, "3Dパース", form.drawing)) { return; }
	if (isLength(100, "営業担当者", form.sellCharge)) { return; }
	/*
		tmp = form.room.value;
		if (tmp.length > 100) {
			alert('部屋番号は100文字以内で入力してください');
			return;
		}

		tmp = form.keyplace.value;
		if (tmp.length > 200) {
			alert('鍵場所は200文字以内で入力してください');
			return;
		}

		tmp = form.address.value;
		if (tmp.length > 100) {
			alert('住所は100文字以内で入力してください');
			return;
		}

		tmp = form.articlenote.value;
		if (tmp.length > 200) {
			alert('備考は200文字以内で入力してください');
			return;
		}

		tmp = form.keybox.value;
		if (tmp.length > 100) {
			alert('キーBox番号は100文字以内で入力してください');
			return;
		}

		tmp = form.drawing.value;
		if (tmp.length > 100) {
			alert('3Dパースは100文字以内で入力してください');
			return;
		}

		tmp = form.sellCharge.value;
		if (tmp.length > 100) {
			alert('営業担当者は100文字以内で入力してください');
			return;
		}


		if (confirm('この内容で登録します。よろしいですか？')) {
			form.act.value = 'articleEditComplete';
			form.submit();
		}
	}

	*/

	function fnArticleDeleteCheck(no) {

		if (confirm('削除します。よろしいですか？')) {
			form.articleNo.value = no;
			form.act.value = 'articleDelete';
			form.submit();
		}
	}
