/* 
작업 분량이 많아져서 제작한 인덱스 페이지 입니다.
Ctrl + F 로 위치 이동 가능

0. 기타 jquery
1. 자동 미디어쿼리
2. 우측네비
3. 시간에따라 변화
4. 마우스 휠 조정
5. 이미지슬라이드

*/
$(function() { // $(document).ready();  DOM로드가 완료된 후에 실행될 함수를 지정 축약형 = $() 풀버전 = $(document).ready();

	/* 0. 기타 jquery */
		// page_3 스킬 버튼 작용

		$(".cover").click(function(event) {
			if ($(this).children().css('display') == 'block') {
				$(this).css({
					"background": "rgba(0, 0, 0, 0.0)",
					"-webkit-transition": "0.3s",
					"transition": "0.3s"
				});
				$(this).children().css({
					"display": "none",
					"-webkit-transition": "0.3s",
					"transition": "0.3s"
				});
			} else {
				$(this).css({
					"background": "rgba(0, 0, 0, 0.5)",
					"-webkit-transition": "0.3s",
					"transition": "0.3s"
				});
				$(this).children().css({
					"display": "block",
					"-webkit-transition": "0.3s",
					"transition": "0.3s"
				});
			}
		});

		// page_5
		// 마우스 엔터리브 보이고 안보이고 클릭시 껏다켜고
		var page_5_text = $('#page_5 .content ul li:nth-child(2n - 1)');
		page_5_text.click(function(event) {
			$(this).find('.box_text').toggleClass('click_off');
			$(this).toggleClass('click_off');
		});
		page_5_text.mouseenter(function(event) {
			if ($(this).find('.box_text').hasClass("click_off") == true) {
				$(this).find('.box_text').css('display', 'inline-block');
			}
		});
		page_5_text.mouseleave(function(event) {
			if ($(this).find('.box_text').hasClass("click_off") == true) {
				$(this).find('.box_text').css('display', 'none');
			}
		});

	/* 1. 자동 미디어쿼리 */

	auto_media();
	function auto_media (){
		// 직접 만든 로직입니다.
		// 이론 설명
		// 1. 윈도우의 세로 가로값을 잡아서 그중 작은값을 잡아서 제작한 공식을 적용 후 $window_min 라는값에 담습니다.
		// 2. 공식은 1014(1080에서 스크롤 사이즈 뺀 값)에서 절반으로 줄어들때마다 지정값만큼 감소하는 로직을 작성합니다.
		// 	ㄴ가로세로값이 모두 1080기준인 이유는 가로모드일때는 1920 1080이 맞지만 세로모드로 변경하면 1080 1920으로 변경되고 
		// 	    그중 작은값을 기준으로 하기때문에 1080을 기준으로 작업합니다. 
		// 3. auto_media라는 이름의 함수로 감싸 윈도우 로딩과 창 사이즈 변경할때 작동하게 적용합니다.
		// - 기존 css 미디어쿼리는 특정 와이드값을 일일히 지정해야 반응하지만 이 로직을 사용하면 모든 기기에서 한번의 수치 입력으로 가변됩니다.

		// 선언부
		// .toFixed(2)
		var $window_width = $(window).width(); // 현재 width size
		var $window_height = $(window).height(); // 현제 height size
		var $window_min;
		if ($window_width > $window_height) {
			$window_min = 1014 / $window_height -1;
			var $window_point = $window_height;
			// console.log('높이값 (' + $window_height + ') 잡고있음')
		} else {
			$window_min = 1014 / $window_width - 1;
			var $window_point = $window_width;
			// console.log('넓이값 (' + $window_width + ') 잡고있음')
		}
		var $section = $("section");
		var $page_1 = $("#page_1");
		var $page_2 = $("#page_2");
		var $page_3 = $("#page_3");
		var $page_4 = $("#page_4");
		var $page_5 = $("#page_5");
		var $page_6 = $("#page_6");

		// 로직

		if ($window_width > $window_height) {
			// 세로모드일때
			
		} else {
			// 가로모드일때
			
		}

		$('.hover').addClass('_hover');
		if ($window_point <= 800 ){ // 로직 내용은 창의 작은쪽 사이즈가 800보다 작거나 같으면 모바일+패드로 취급하겠다
			// 확인해본바 Galaxy Tab S 800 * 1280 으로 패드중 가장 사이즈 큰 기기 최소값이 800으로 판단해서 지정한 값
			// 모바일 + 패드 모드 일때 (가로세로 동시에 확인하는중)
			$(".hover").removeClass('_hover');

		}
		if ($window_point <= 414 ) { // 창의 작은쪽 사이즈가 414보다 작거나 같으면 모바일로 취급하겠다
			// 확인해본바 iPhone 6 Plus 414 * 736 으로 모바일 가장 사이즈 큰 기기 최소값이 414으로 판단해서 지정한 값 (패드 제외)
			// 모바일 모드 일때 (가로세로 동시에 확인하는중)
			
		}
	};
	
	/* 2. 우측네비 */

	right_nav(); // 로딩시 실행용
	function right_nav(){

		var $right_nav_a = $('.right_nav a');
		var $footer = $('footer');

		var range_menu = []; // 메뉴 배열을 만들고
		var range_btn = []; // 버튼용 배열도 만든다

		function range_add (input_id, input_on){ // 함수를 생성하고 (id 명, 윈도우 위치값 중앙인지 상단인지 정하는값)
			range_menu.push({id: input_id, on:input_on}); // 메뉴 배열에 메뉴들을 담는다
			range_btn.push('scroll_' + input_id); // 버튼 배열에 경로로 쓸 이름들을 담는다
		};
		range_add('page_1',0);
		range_add('page_2',1);
		range_add('page_3',1);
		range_add('page_4',1);
		range_add('page_5',0);
		range_add('page_6',2);
		range_menu.push({id: 'footer', on:0});
		
		var page_ofs = []; // 화면의 위치 값을 넣을 배열을 만든다

		for (var i = 0; i < range_menu.length - 1; i++) { // 화면의 위치를 잡아서 배열에 담는다 (푸터 부분은 i+1 잡기용이라 i에 -1 해둠)
			page_ofs.push($('#'+range_menu[i].id).offset().top + range_menu[i].on*((($('#'+range_menu[i+1].id).offset().top - $('#'+range_menu[i].id).offset().top) / 2) - $(window).height() / 2) );
			// 수식 설명
			// on 이 0으로 되어있으면 그냥 배열 i번째 윈도우 탑값 0 값을 기준으로 잡음
			// on이 1로 되어있으면
			// 배열 i번째 윈도우 탑값 +( (input_on값[0 or 1] x ( 배열 i+1번째 윈도우 탑값 - (배열 i번째 윈도우 탑값 / 2) ) ) - 윈도우높이값 / 2 )
			// 한마디로 페이지 중앙 위치를 잡아서 이동

			smooth_scroll('.scroll_'+range_menu[i].id, i); // 아래로 토스해서 쓰겠다
		}

		page_ofs.push($footer.offset().top); // page_ofs에 푸터 상단 위치값을 추가
		
		// 토스 받아서 클릭에 삽입
		function smooth_scroll (toss, num){
			$(toss).css('cursor','pointer').click(function() {
				$('body,html').animate({scrollTop:page_ofs[num]},600).css({
					// 제이쿼리 에니메이트에서 이징쓰려면 플러그인 써야해서 css값에서 이징통제
					'-webkit-animation-timing-function': 'ease',
					'animation-timing-function': 'ease'
				});
			});
		};
		/*
		$(window).scroll(function () { // 윈도우 스크롤일 발생하면 실행
			for (var i = 0; i < range_menu.length -1 ; i++) {
				// console.log(window.scrollY)
				if (page_ofs[i] <= window.scrollY && window.scrollY <= page_ofs[i+1]) { // 해당 위치라면 마우스 오버같은상태
					$('.scroll_'+range_menu[i].id).css({
						'color': '#fff',
						'-webkit-transition': '0.3s',
						'transition': '0.3s'
					}).children('div').css({
						'height': '505%',
						'-webkit-transition': '0.3s',
						'transition': '0.3s'
					});
				} else { // 해당 위치가 아니라면 마우스 아웃같은 상태
					$('.scroll_'+range_menu[i].id).css({
						'color': '#333',
						'-webkit-transition': '0.3s',
						'transition': '0.3s'
					}).children('div').css({
						'height': '505%',
						'-webkit-transition': '0.3s',
						'transition': '0.3s'
					});
				}
			}
		});
		*/
	};

	/* 3. 시간에따라 변화 */

	// - 선언부 -

	// 시,분,초
	var point = 0; // 시간 조절용 값
	var hours = new Date().getHours(); // hours 에 내장객체의 시간값을 넣음
	var hours_point = ( point + hours ) % 24; // hours 에 내장객체 시간 값을 넣고 point를 통해 증감이 가능한 상태로 만들고 point 때문에 24시간을 벗어나면 초기화 하기위해 %24

	var minutes = new Date().getMinutes(); // minutes 에 내장객체의 분 값을 넣음
	var seconds = new Date().getSeconds(); // seconds 에 내장객체의 초 값을 넣음

	// 시간에 따라 다르게 나올 컬러칩 배열
	var color_back = [
		"#1f1935", /* 오전 0시 */ "#1f1941", /* 오전 1시 */ "#1c1956", /* 오전 2시 */ "#1a1a66", /* 오전 3시 */ "#83464d", /* 오전 4시 */ "#ef8031", /* 오전 5시 */
		"#f8ae29", /* 오전 6시 */ "#d8b2e9", /* 오전 7시 */ "#b4d4dc", /* 오전 8시 */ "#88b0d3", /* 오전 9시 */ "#7baad8", /* 오전 10시 */ "#6da4dd", /* 오전 11시 */

		"#639be5", /* 오전 12시 */ "#5798ea", /* 오후 1시 */ "#4889cd", /* 오후 2시 */ "#296b9b", /* 오후 3시 */ "#96899d", /* 오후 4시 */ "#f68d56", /* 오후 5시 */
		"#373148", /* 오후 6시 */ "#203e68", /* 오후 7시 */ "#1b225d", /* 오후 8시 */ "#1d1726", /* 오후 9시 */ "#20192a", /* 오후 10시 */ "#20192c", /* 오후 11시 */
	];

	// - html 상에서 선택 -

	// html에서 선택자를 통해 선택후 이름 부여
	var $time = $(".time"); // html 상에서 시분초 를 출력할 클래스 선택

	var $timeColor = $("._timeColor").css({
		'-webkit-transition': '0.2s',
		'transition': '0.2s'
	}); // html 상에서 시간 값에 따라 배경색이 변할 클래스 선택

	var $time_reset = $(".time_reset").css('cursor', 'pointer'); // html 상에서 시간 리셋 버튼 선택
	var $time_p = $(".time_p").css('cursor', 'pointer'); // html 상에서 시간 +1 버튼 선택

	// - 로직 -

	// 함수 로직 로딩시 1번 실행
	
	$time.html(setTime(hours_point,minutes,seconds));
	// 시분초 를 출력할 클래스에 정보값 (내부에 함수로 불러서)삽입
	// 로직속에 시간을 AM,PM체계로 정리하고 2자리 수로 유지하는 구문 포함되어있음

	$timeColor.css("background",color_back[hours_point]); // 시간에 따라 timeColor의 배경색을 변경

	//bg_change(); // 메인 사진이 시간에 따라 다르게 출력하게 하는 함수 호출.
	//color_change(); // 메인 폰트 컬러가 시간에 따라 다르게 출력하게 하는 함수 호출


	/* @@@@@@@@@@@@@@@ 리셋 후 1번 실행 [끝] @@@@@@@@@@@@@@@ */


	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 클릭시 한번 확인 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	// 시간 증감 버튼 클릭시 작동 로직
	$time_reset.click(function() {
		point =0;
		$timeColor.css("background",color_back[hours_point]); // 시간에 따라 timeColor의 배경색을 변경
	});
	$time_p.click(function() {
		point++;
		$timeColor.css("background",color_back[hours_point]); // 시간에 따라 timeColor의 배경색을 변경
	});

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 클릭시 한번 확인 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1초에 한번 확인 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	setInterval( function() {

		// 지역변수 선언 1초마다 다시 찾아야하는것만 다시 찾음
		hours_point = (point + hours ) % 24;
		minutes = new Date().getMinutes();
		seconds = new Date().getSeconds();

		// 1초 마다 실행할 로직
		$time.html(setTime(hours_point,minutes,seconds)); // 시분초 를 출력할 클래스에 정보값 (내부에 함수로 불러서)삽입
		$timeColor.css("background",color_back[hours_point]); // 시간에 따라 timeColor의 배경색을 변경

	}, 1000);
	
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1초에 한번 확인 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	/* @@@@@@@@@@@@@@@ 반복 사용할 함수 [시작] @@@@@@@@@@@@@@@ */

	function setTime(hour,minute,second){
		// 오전,오후 알고리즘 + 출력해보니 시,분,초 가 한자리수면 안이뻐서 작성하는 알고리즘
		var print = "";

		// 시간
		var inHour = hour%24;

		if (12 < inHour) {
			inHour = inHour - 12;
			if (inHour < 10){
				print += "PM 0" + inHour + " : ";
			} else{
				print += "PM " + inHour + " : ";
			}
		} else if(0 < inHour && inHour <= 12){
			if (inHour < 10){
				print += "AM 0" + inHour + " : ";
			}else{
				print += "AM " + inHour + " : ";
			}
		} else if (inHour <= 0){
			point = point + 24;
			print += "PM " + Number(inHour + 12) + " : ";
		}

		// 분
		if (minute < 10) {
			print += "0" + minute + " : ";
		} else {
			print += minute + " : ";
		}

		// 초
		if (second < 10) {
			print += "0" + second;
		} else {
			print += second;
		}
		return (print);
	};

	/* 4. 마우스 휠 조정*/

	mousewheel();
	function mousewheel (){

		/* 스크롤박스 사이즈 자동조정 부분 */
		var $page_3_wheelbox = $("#page_3 .wheelbox");
		var $page_3_ul = $("#page_3 .wheelbox ul");
		var $page_3_li = $("#page_3 .wheelbox ul li");
		
		/* li 정원 및 디자인 부분 */
		$page_3_li.width($page_3_li.height()); // 일단 li의 사이즈를 wheelbox의 세로값을 기준으로 조정한다
		$page_3_wheelbox.width( ($page_3_li.height()+parseInt($page_3_li.css('marginRight')) + parseInt($page_3_li.css('borderTopWidth')) * 2 ) * $page_3_li.length - parseInt($page_3_li.css('marginRight')) ); // 조정된 li 사이즈를 기준으로 wheelbox의 넓이조정
		$page_3_ul.width( ($page_3_li.height()+parseInt($page_3_li.css('marginRight')) + parseInt($page_3_li.css('borderTopWidth')) * 2 ) * $page_3_li.length - parseInt($page_3_li.css('marginRight')) ); // 조정된 li 사이즈를 기준으로 ul의 넓이조정

		/* 스크롤 통제 부분 */
		var $page_3_content = $("#page_3 .content");
		var $page_3_wheelbox = $("#page_3 .wheelbox");

		$page_3_content.on("mousewheel",function(event,delta){
			this.scrollLeft -= (delta * 50); // 스크롤 속도
			if (delta > 0) { // 스크롤 위로 돌림
				if (this.scrollLeft != 0) {
					event.preventDefault();
				}
			}else if (delta < 0) { // 스크롤 아래로 돌림
				if (this.scrollLeft + $(this).width() != $page_3_wheelbox.width() + parseInt($page_3_wheelbox.css("paddingLeft")) * 2 ) {
					event.preventDefault() - 1;
				}
			}
		});
	};

	/* 5. 이미지슬라이드 */
	var $sliderContainer = $('.sliderContainer'); // 할때마다 부르면 비용지출이 커서 잡아둠
	var nowMargin = 0; // 현제위치값
	var mouse_enter = 0; // 마우스가 올라가있는지 확인
	var imageNames = [ // 사용할 정보들 배열로 지정
		//내부에 메서드 생성
		{src: 'img/work_1.png', title:'삼성 SDS', content:'유지보수 및<br>접근성 마크 취득', url: 'https://www.samsungsds.com/global/ko/index.html'},
		{src: 'img/work_2.png', title:'삼성 테마', content:'워드프레스 사이트<br>제작 및 유지보수', url: 'https://www.samsungthemesmagazine.com/kr/'},
		{src: 'img/work_3.png', title:'삼성 테마이벤트', content:'삼성 이벤트 페이지<br>제작', url: 'https://www.samsungthemesmagazine.com/kr/event/%ec%82%bc%ec%84%b1-%ed%85%8c%eb%a7%88-%ec%b2%b4%ed%97%98%ed%95%98%ea%b3%a0-%ed%85%8c%eb%a7%88-%ec%bf%a0%ed%8f%b0-get/'},
		{src: 'img/work_4.png', title:'삼성 VR', content:'삼성 VR 360도 뷰 <br>비디오 페이지 제작', url: 'https://samsungvr.com/'}
	];
	imageNames = $.merge(imageNames, imageNames); // 무한스크롤 하려고 우측에 한번더 붙임

	setInterval( function() { // 0.04초 마다 실행
		if (mouse_enter == 1) {
			// 마우스오버시 무시
			return;
		}
		nowMargin = nowMargin - 4; // 함수가 실행될때마다 nowMargin을 -4씩 뺌
		$sliderContainer.css('margin-left' , nowMargin ); // margin-left값을 위에 빼놓은 값으로 대체
		if (parseInt($sliderContainer.css('margin-left')) < -($('.sliderContainer li').width() / 2 * $('.sliderContainer li').length) ) {
			// 위에 if문 로직 내용은 줄어들고있는 margin-left가 배열 한번 반복된 길이보다 작아지면 원래위치로 리셋하겠다
			// 한마디로 무한스크롤 구현
			nowMargin = nowMargin + ($('.sliderContainer li').width() / 2 * $('.sliderContainer li').length); 
		}
	}, 40); // 트렌스폼 , 엡솔루트

	// 마우스 오버아웃으로 스크롤 멈췄다가 움직였다가 하게함
	$sliderContainer.mouseenter(function(event) {
		mouse_enter = 1;
	});
	$sliderContainer.mouseleave(function(event) {
		mouse_enter = 0;
	});

	// 자꾸 함수로 감싸는 이유는 윈도우 리사이징때 함수만 불러서 쓰려고함
	// 그래서 이위에는 리사이징때 다시 부르면 안되서 위아래로 나뉨
	
	image_slider(); // 함수로 감싸놓은것 실행
	function image_slider(){
		// html쪽에서 미리 지정해놓은 ul에 li들 삽입
		for (var i = 0; i < imageNames.length; i++) {
			$('.sliderContainer').append('<li class="clear"><div class="imageTitle">- ' + imageNames[i].title + ' -</div><a href="' + imageNames[i].url + '" target="_blangk"><img class="centering" src="' + imageNames[i].src + '"/></a><div class="imageContent">' + imageNames[i].content + '</div></li>');
		}

		// ul이랑 li 사이즈 실시간으로 변경하려고 지정해둔값들
		$('.sliderContainer').width($('.imageSlider').width() * $('.sliderContainer li').length);
		$('.sliderContainer li').width($('.sliderContainer li').height());
	}

	/* 윈도우 리사이징 */
	$(window).resize(function(){

		/* */

		/* 1. 자동 미디어쿼리 */
		auto_media();

		/* 2. 우측네비 */
		right_nav();

		/* 4. 마우스 휠 조정 */
		mousewheel(); 

		/* 5. 이미지슬라이드 */
		image_slider()
		
	});

});