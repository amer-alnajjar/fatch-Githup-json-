let input = document.querySelector(".container .gitName input"),
  button = document.querySelector(".container .gitName button"),
  showname = document.querySelector(".container .showName");

//لما  يضغط على البتن نفذ الفانكشن هاي
button.onclick = function () {
  getnames();
};

//الفانكشن الي بتجيب النيم
function getnames() {
  //عملنا كوندشن بتفحص الانبت
  if (input.value === "") {
    swal("You did not enter your name", "Please... enter your name");
  } else {
    //جبن الكود تبع ِالاي بي اي

    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())

      .then((data) => {
        showname.innerHTML = "";

        //هنعمل لوب على داتا
        data.forEach((e) => {
          //انشئنا ديف والنص داخل الديف وحطيناه جواه
          let creatdiv = document.createElement("div");
          let creartxt = document.createTextNode(e.name);
          creatdiv.appendChild(creartxt);

          //بدنا نشء سبان وانجط فييها عدد الستارز وانحط النص الي انشؤنا جوا السبان وانحطهم في الديف
          let createspan_stars = document.createElement("span");
          let createtextspan_stars = document.createTextNode(
            `${e.stargazers_count} stars`
          );
          createspan_stars.appendChild(createtextspan_stars);
          creatdiv.appendChild(createspan_stars);

          //انشءنا الرابط ودواه تكست وعملناله اتشريف لما يغط عليه يروع على الرابطز وحطيناه في الديف
          let createurl = document.createElement("a");
          let creartxturl = document.createTextNode("visit");
          createurl.href = `https://github.com/${input.value}/${e.name}`;
          createurl.setAttribute("target", "_blank");
          createurl.appendChild(creartxturl);
          creatdiv.appendChild(createurl);

          //حطيناه جوا الكونتينر
          showname.appendChild(creatdiv);

          input.value = "";
          input.focus();
        });
      });
  }
}
