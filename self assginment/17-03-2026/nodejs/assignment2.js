function loadData() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "A2_Q1_2_score.json", true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            var data = JSON.parse(xhr.responseText);

            let rows = "";

            data.forEach(item => {
                rows += `<tr>
                    <td>${item.match}</td>
                    <td>${item.team1}</td>
                    <td>${item.team2}</td>
                    <td>${item.score1}</td>
                    <td>${item.score2}</td>
                    <td>${item.result}</td>
                </tr>`;
            });

            document.getElementById("body").innerHTML = rows;
        }
    };

    xhr.send();
}