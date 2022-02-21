//需求1.:点击a链接,显示隐藏
document.querySelector(".register a").onclick = function () {
  //隐藏注册 , 显示登录
  document.querySelector(".register").style.display = "none";
  document.querySelector(".login").style.display = "block";
};
document.querySelector(".login a").onclick = function () {
  //隐藏登录 , 显示注册
  document.querySelector(".login").style.display = "none";
  document.querySelector(".register").style.display = "block";
};

//需求2. 输入内容校验是否符合规则
let inp1 = document.querySelector(".login [name=username]");
let inp2 = document.querySelector(".login [name=password]");
let inp3 = document.querySelector(".register [name=username]");
let inp4 = document.querySelector(".register [name=password]");

checkIput(inp1, "用户名", 2, /^\S{2,15}$/);
checkIput(inp2, "密码", 6, /^\S{6,15}$/);
checkIput(inp3, "用户名", 2, /^\S{2,15}$/);
checkIput(inp4, "密码", 6, /^\S{6,15}$/);

//校验封装
function checkIput(ele, txt, n, reg) {
  ele.oninput = function () {
    //进行非空校验
    if (this.value.trim() == "") {
      this.nextElementSibling.style.display = "block";
      this.nextElementSibling.innerHTML = txt + `不能为空`;
      return; //真的出现空白,后面的代码就不用执行了
    } else {
      this.nextElementSibling.style.display = "none";
      this.nextElementSibling.innerHTML = ``;
    }
    //长度校验 -用户名长度不能小于2位或超过15位
    if (reg.test(this.value)) {
      this.nextElementSibling.style.display = "none";
      this.nextElementSibling.innerHTML = ``;
    } else {
      this.nextElementSibling.style.display = "block";
      this.nextElementSibling.innerHTML = txt + `长度不能小于${n}位或超过15位`;
      return;
    }
  };
}
