$(function () {
    // 切换注册页面与登录页面
    $("#link_reg").on("click", function () {
        $(".login-box").hide();
        $(".reg-box").show();
    })
    $("#link_login").on("click", function () {
        $(".login-box").show();
        $(".reg-box").hide();
    })
    // 测试密码框是否规范
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            var pws = $(".reg-box [name=password]").val()
            if (pws !== value) {
                return "两次密码不一样"
            }
        }

    })
    // 监听注册表单的提交事件
    // 监测提交表单事件
    $("#reg-box-layui-form").on("submit", function (e) {
        // 阻止提交事件
        e.preventDefault()
        $.post("http://ajax.frontend.itheima.net/api/reguser", {
            username: $("#reg-box-layui-form [name=uname]").val(),
            password: $("#reg-box-layui-form [name=password]").val(),
        }, function (res) {
            if (res.status == 0) {
                return layer.msg(res.message);
            } layer.msg("注册失败")
        }
        )
        // 模拟人的单击事件
        $("#link_login").click();
    })
    // 监听登录表单提交事件
    $("#login-box-layui-form").submit(function (e) {
        // 阻止提交事件
        e.preventDefault()
        $.ajax({
            method: "POST",
            url: "http://ajax.frontend.itheima.net/api/login",
            data: $(this).serialize(),
            success: function (res) {
                if (res.status == 0) {
                    layer.msg(res.message);
                    location.href = "/index.html"
                    return
                } layer.msg("登录失败")
            }
        })
    })
})