function addData() {
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var telefone = document.getElementById("telefone").value;
	var data = document.getElementById("data").value;

	list.unshift({"nome":nome , "email":email , "telefone":telefone, "data":data });
	setList(list)

	console.log(nome);
}
