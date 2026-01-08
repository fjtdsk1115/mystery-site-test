const ANSWER = "test111";

const pw = document.getElementById("pw");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

function go() {
  const v = pw.value.trim();

  if (v === ANSWER) {
    location.href = "clear.html";
  } else {
    msg.textContent = "アクセス拒否";
    pw.focus();
    pw.select();
  }
}

btn.addEventListener("click", go);
pw.addEventListener("keydown", (e) => {
  if (e.key === "Enter") go();
});

