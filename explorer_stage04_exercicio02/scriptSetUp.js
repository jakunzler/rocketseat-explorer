for (ind = 0; ind <= students.length - 1; ind++) {

    let image = document.createElement("img");
    image.src = `${students[ind].avatar}`;
    image.alt = `Avatar do estudante ${students[ind].studentName.familyName}`;
    image.title = `Avatar do estudante ${students[ind].studentName.familyName}`;

    let div = document.createElement("div");
    div.className = "studentProfile";

    document.querySelector('main').appendChild(div);

    let studentProfile = document.querySelector(`.studentProfile:nth-child(${ind + 1})`);
    studentProfile.append(image);

    let pStudantName = document.createElement('p');
    pStudantName.innerText = `${students[ind].studentName.firstName} ${students[ind].studentName.familyName}`
    div.append(pStudantName);

    let pAverage = document.createElement('p');
    pAverage.innerText = `Média ${students[ind].average}`
    div.append(pAverage);
    
    let pStatus = document.createElement('p');
    pStatus.innerText = `O(A) estudante está ${students[ind].status}`
    div.append(pStatus);
}
