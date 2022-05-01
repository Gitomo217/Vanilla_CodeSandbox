/*テキストボックスの値を取得し、初期化する*/
document.getElementById("add-button").addEventListener(
  /* 第1引数*/
  "click",
  /* 第2引数（無名関数）*/
  function () {
    const inputText = document.getElementById("add-text").value;
    /**テキストボックス初期化 */
    document.getElementById("add-text").value = "";

    /**タスク生成 */
    createIncompleteTask(inputText);
  }
);

/**未完了リストから、タスクを削除 */
const deleteFromIncompleteList = (targetElement) => {
  /** 親要素のタグを取得*/
  const deleteTarget = targetElement;
  /** 未完了のTODO（DOM）から、要素を削除      */
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

/**タスクの生成 */
const createIncompleteTask = (inputText) => {
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
    /** 未完了リストから削除*/
    deleteFromIncompleteList(completeButton.parentNode);
    /**削除対象の要素取得 */
    const completeDiv = completeButton.parentNode;
    /** 削除対象のタスク名取得*/
    const originTaskName = completeDiv.firstElementChild.innerText;
    /** div配下の要素を初期化*/
    completeDiv.textContent = null;
    /** div配下の要素を生成*/
    const completeLi = document.createElement("li");
    completeLi.innerText = originTaskName;
    const backButton = document.createElement("button");
    /**戻すボタン生成 */
    backButton.innerText = "戻す";
    backButton.addEventListener("click", function () {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      createIncompleteTask(deleteTarget.firstElementChild.innerText);
    });
    completeDiv.appendChild(completeLi);
    completeDiv.appendChild(backButton);
    document.getElementById("complete-list").appendChild(completeDiv);
  });

  /**削除ボタン生成 */
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", function () {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  /**divタグの子要素として追加 */
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  /**htmlファイル内のulタグに要素を追加 */
  document.getElementById("incomplete-list").appendChild(div);
};
