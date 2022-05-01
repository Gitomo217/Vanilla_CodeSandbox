/*テキストボックスの値を取得し、初期化する*/

document.getElementById("add-button").addEventListener(
  /* 第1引数*/
  "click",
  /* 第2引数*/
  function () {
    const inputText = document.getElementById("add-text").value;
    /**テキストボックス初期化 */
    document.getElementById("add-text").value = "";

    /* divタグの生成*/
    const div = document.createElement("div");
    div.className = "list-row";

    /** liタグの生成*/
    const li = document.createElement("li");
    li.innerText = inputText;

    /**完了ボタン生成 */
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", function () {
      alert("完了");
    });

    /**削除ボタン生成 */
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", function () {
      /** 親要素のタグを取得*/
      const deleteTarget = deleteButton.parentNode;
      /** 未完了のTODO（DOM）から、要素を削除      */
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    /**divタグの子要素として追加 */
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    /**htmlファイル内のulタグに要素を追加 */
    document.getElementById("incomplete-list").appendChild(div);
  }
);
