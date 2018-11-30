function onKeyDown() {
    if (event.keyCode == 13) {
        submitEvent();
    }
}

function submitEvent() {
    if (DeviceCheck() != true) {
        alert("해당 디바이스는 이벤트 참여가 불가능합니다.")
        return;
    } else {
        alert("해당 디바이스는 이벤트 참여가 가능합니다.")
    }

    var valid = validateSubmit();

    if (valid) {
        submit();
    }
}

function submit() {
    var campaign = window.location.pathname.split('/')[1];
    var url = "http://api.samsungthemesmagazine.com/campaigns/" + campaign + "/submits/";

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: $('#submitForm').serialize(),
        timeout: 5000,
        error: function(xhr, status, error) {
            if(xhr.status == 400 && "non_field_errors" in xhr.responseJSON) {
                alert("이미 응모된 계정 입니다.");
            } else {
                alert("처리중 오류가 발생 하였습니다. 다시 응모하여 주십시오.");
            }
        },
        success: function(response) {
            document.getElementById("submitForm").submit();
            alert("정보 전송 완료 되었습니다.");
        }
    });
}

function getCampaignList() {
    $.ajax({
        url: "http://api.samsungthemesmagazine.com/campaigns/",
        type: "GET",
        timeout: 5000,
        error: function(xhr, status, errorThrown) {
            alert("처리중 오류가 발생 하였습니다. 다시 응모하여 주십시오.");
        },
        success: function(response) {
            alert(response);
        }
    });
}

function validateSubmit() {
    if (!$("#name").val()) {
        alert("'이름'은 필수 입력 입니다.");
        $("#name").focus();
        return false;
    } else if (!$("#name").val().match(/^[가-힣]{2,8}|[a-zA-Z]{2,20}/)) {
        alert("이름을 정확히 입력해주세요");
        $("#name").focus();
        return false;
    }

    if (!$("#account").val()) {
        alert("'삼성계정'은 필수입력 입니다.");
        $("#account").focus();
        return false;
    } else if (!$("#account").val().match(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i)&&!$("#account").val().match(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/)) {
        alert("삼성계정이 정확하지않습니다. 양식에 맞게 입력해주세요.");
        $("#account").focus();
        return false;
    }

    if (!$("#phone").val()) {
        alert("'휴대폰번호'는 필수입력 입니다.");
        $("#phone").focus();
        return false;
    } else if (!$("#phone").val().match(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/)) {
        alert("휴대폰번호는 (-)를 제외한 숫자로 11자 입력해주세요");
        $("#phone").focus();
        return false;
    }

    if (!$("#checked_01").is(':checked')) {
        alert("개인정보 수집에 동의하셔야 이벤트 참여가 가능합니다.");
        $("#checked_01").focus();
        return false;
    }

    if (!$("#checked_02").is(':checked')) {
        alert("개인정보 처리위탁에 동의하셔야 이벤트 참여가 가능합니다.");
        $("#checked_02").focus();
        return false;
    }

    return true;
}
