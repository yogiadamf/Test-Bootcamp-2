function reverseText() {
  var forward = document.getElementById("input").value;
  var result = forward.split("").reverse().join("");
  document.getElementById("demo").innerHTML = result;
}

document.getElementById("btnreverse").addEventListener("click", reverseText);