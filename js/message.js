const APP_ID = "3Jmgz5tO371ERzjRtsmksixO-gzGzoHsz";
const APP_KEY = "DpTPC0iDNQ2kr3nG9U5fHWpH";

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let messageList = document.getElementById("messageList");
var query = new AV.Query("Message");
query
  .find()
  .then(function(messages) {
    // 查询到评论列表后，在前端展示到相应的位置中。
    console.log(messages);
    messages.forEach(item => {
      let li = document.createElement("li");
      li.innerText = `${item.attributes.name || "匿名用户"}:${
        item.attributes.content
      }`;
      messageList.appendChild(li);
    });
  })
  .catch(function(error) {
    alert(JSON.stringify(error));
  });

let messageForm = document.getElementById("postMessage");
messageForm.addEventListener("submit", e => {
  e.preventDefault();
  let MessageObject = AV.Object.extend("Message");
  let messageObject = new MessageObject();
  let messageContent = messageForm.querySelector("input[name=messageContent]")
    .value;
  let name = messageForm.querySelector("input[name=name]").value;

  messageObject
    .save({
      content: messageContent,
      name: name
    })
    .then(object => {
      alert("留言成功");
      let li = document.createElement("li");
      li.innerText = `${object.attributes.name}:${object.attributes.content}`;
      messageList.appendChild(li);
      messageForm.querySelector("input[name=messageContent]").value = "";
    });
});
