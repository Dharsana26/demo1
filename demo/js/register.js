$(document).ready(function(){
	$("#save").click(function(){
		if($("#username").val()==""){
			$("#username").css("border","1px solid red");
			$("#username").focus();
			return false;
		}
		else{
			$("#username").css("border","1px solid green");
		}
		if($("#email").val()==""){
			$("#email").css("border","1px solid red");
			$("#email").focus();
			return false;
		}
		else{
			$("#email").css("border","1px solid green");
		}
		if($("#password").val()==""){
			$("#password").css("border","1px solid red");
			$("#password").focus();
			return false;
		}
		else{
			$("#password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/register.php",
			dataType:"json",
			data:$("#registerForm").serialize(),
			success:function(res){
				if(res.status=="Done"){
					window.location="login.html";
				}
			}

		})
	})
})