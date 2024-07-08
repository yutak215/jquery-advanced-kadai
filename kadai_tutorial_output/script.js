$(function(){
    $('.button-more').on('mouseover', function(){
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        },100);
    });

    $('.button-more').on('mouseout', function(){
        $(this).animate({
            opacity: 1,
            marginLeft: 0,
        },100);
    });

     // カルーセル
    $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $('#submit').on('click', function(event){
    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックをした結果をresultに格納
    let result = inputCheck();

    let error = result.error;
    let message = result.message;

    if(error == false){
        alert('お問い合わせを送信しました。')
    }else{
        alert(message);
    }
  });

  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').on('click',function(){
    inputCheck();
  });

  function inputCheck (){
    // errorのチェック結果
    let result;
    // エラーメッセージのテキスト
    let message = '';
    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // 名前欄のチェック
    if($('#name').val() == ''){
        $('#name').css('background-color', '#f79999');
        error = true;
        message += 'お名前を入力してください。\n';
    }else{
        $('#name').css('background-color', '#fafafa');
    }
    // フリガナ欄のチェック
    if($('#furigana').val() == '') {
        $('#furigana').css('background-color', '#f79999')
        error = true;
        message += 'フリガナを入力してください。\n';
    }else{
        $('#furigana').css('background-color', '#fafafa');
    }
    // お問い合わせ欄のチェック
    if($('#message').val() == '') {
        $('#message').css('background-color', '#f79999');
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
    }else{
        $('#message').css('background-color', '#fafafa');
    }
    // メールアドレスチェック
    if ($('#email').val() == '' ||
         $('#email').val().indexOf('@') == -1 ||
         $('#email').val().indexOf('.') == -1) {
       $('#email').css('background-color', '#f79999');
       error = true;
       message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
     }else{
       // エラーなし
       $('#email').css('background-color', '#fafafa');
     }
    //  Tel check
    if($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
        $('#tel').css('background-color', '#f79999');
        error = true;
        message += '電話番号に「-」が含まれていません。\n';
    }else{
        $('#tel').css('background-color', '#fafafa')
    }
    // チェックボックス
    if($('#agree').prop('checked') == false){
        error = true;
        message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }
    // submit
    if(error == true){
        $('#submit').attr('src', 'images/button-submit.png');
    }else{
        $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    result = {
        error: error,
        message: message
    }

    return result;
    };
  }
)

