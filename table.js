function terimainput() {
	var a0 = document.forms["form"]["nama"]. value;
	var a1 = document.forms["form"]["email"]. value;
	var a2 = document.forms["form"]["komentar"]. value;

	var tabel = document.getElementById('tabelinput')
	var row = tabel. insertRow(1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);

	cell0. innerHTML = a0;
	cell1. innerHTML = a1;
	cell2. innerHTML = a2;

	alert("Data Berhasil Di Entry")
}