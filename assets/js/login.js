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

})
var form = layui.form
form.verify({
    pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    repwd: function (value) {
        var pws = $(".reg-box [name=password]").val(),
        if (pws != value) {
            return "两次密码不一样"
        }
    }
    // 监听表单验证
//     $.axios({
//         type: "post",
//         url: "http://ajax.frontend.itheima.net/api/login",
//         dataType: "json",
//         // 快速获取表单中的数据
//         data: $(this).serialize(),
//         success: function (res) {
//             if (res.status !== 0) {
//                 return layer.msg('登录失败！')
//             }
//             layer.msg('登录成功！')
//             // 将登录成功得到的 token 字符串，保存到 localStorage 中
//             localStorage.setItem('token', res.token)
//             // 跳转到后台主页
//             location.href = '/index.html'
//         })
//     $(".reg-box").click
// })
