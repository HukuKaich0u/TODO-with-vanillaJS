var onClickAdd = function () {
    var inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteTodo(inputText);
};
var createIncompleteTodo = function (todo) {
    var li = document.createElement("li");
    var div = document.createElement("div");
    div.className = "list-row";
    var p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;
    // button tag(完了)を生成
    var completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", function () {
        alert("完了");
        // 押された完了ボタンの親のliタグ配下にある完了ボタンと削除ボタンを削除
        var moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        // 戻すボタンを生成してdivタグ配下に追加する
        var backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", function () {
            var _a;
            // TODOの内容を取得して未完了リストに追加する
            var todoText = backButton.previousElementSibling.innerText;
            console.log(todoText);
            createIncompleteTodo(todoText);
            (_a = backButton.closest("li")) === null || _a === void 0 ? void 0 : _a.remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);
        // 未完了リストに追加
        document.getElementById("complete-list").appendChild(moveTarget);
    });
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", function () {
        var bool = confirm("本当に削除しますか？");
        if (bool) {
            var deleteTarget = deleteButton.closest("li");
            deleteButton.closest("ul").removeChild(deleteTarget);
        }
    });
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById("incomplete-list").appendChild(li);
};
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", onClickAdd);
