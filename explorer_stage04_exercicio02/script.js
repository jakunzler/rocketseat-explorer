executionType = prompt("Prezado usuário, seja bem vindo. \n Você deseja executar um exemplo ou inserir novos dados? \n Digite 'Exemplo' ou 'Inserir'").toUpperCase();
console.log(executionType)
let numberStudents;
let numberTests;
let students = [];

switch (executionType) {
    case "INSERIR":
        numberStudents = Number(prompt('Quantos alunos há na turma?'));
        numberTests = Number(prompt("Quantos testes foram aplicados?"));

        for (indStudent = 1; indStudent <= numberStudents; indStudent++) {
            
            let student = prompt(`Qual é o nome completo do(a) ${indStudent}º aluno(a)?`);

            let middleName = student.split(" ");
            let nameLength = middleName.length;

            let firstName = middleName.splice(0, 1);
            let familyName = middleName.splice(nameLength - 2, 1);

            let scores = [];
            for (indTest = 1; indTest <= numberTests; indTest++) {
                scores.push(prompt(`Qual é a nota na ${indTest}º Prova?`))
            }

            let average = scores.reduce((a, b) => Number(a) + Number(b), 0) / scores.length;

            if (average >= 7) {
                scholarshipStatus = "aprovado";
            }
            else if (6 <= average && average < 7) { 
                scholarshipStatus = "de recuperação"
            }
            else if (0 < average && average < 6) {
                scholarshipStatus = "reprovado"
            }
            else {
                scholarshipStatus = "N/A"
            }

            students.push({
                studentName: {
                    firstName: firstName,
                    middleName: middleName,
                    familyName: familyName
                },
                scores: scores,
                average: average,
                status: scholarshipStatus,
                avatar: "images/avatar-standard.jpg"
            })

        }

        break;

    case "EXEMPLO":

        students = [
            {
            studentName: {
                firstName: "Jakeliny",
                middleName: "",
                familyName: "Gracielly"
            },
            scores: [4, 7],
            average: 5.5,
            status: "de recuperação",
            avatar: "images/avatar-jakeliny.png"
        },
        
        {
            studentName: {
                firstName: "Jonas",
                middleName: "Augusto",
                familyName: "Kunzler"
            },
            scores: [3, 6.5],
            average: 4.75,
            status: "reprovado",
            avatar: "images/avatar-jonas.jpeg"
        },
        
        {
            studentName: {
                firstName: "Mayk",
                middleName: "",
                familyName: "Brito"
            },
            scores: [9,10],
            average: 9.5,
            status: "aprovado",
            avatar: "images/avatar-mayk.jpeg"
        },

        {
            studentName: {
                firstName: "Fernanda",
                middleName: "Moreira",
                familyName: "Pereira"
            },
            scores: [7, 4],
            average: 5.5,
            status: "de recuperação",
            avatar: "images/avatar-fernanda.jpg"
        },
        
        {
            studentName: {
                firstName: "Julio",
                middleName: "Cesar",
                familyName: "Kunzler"
            },
            scores: [4.5, 5.5],
            average: 5,
            status: "reprovado",
            avatar: "images/avatar-julio.jpg"
        },
        
        {
            studentName: {
                firstName: "Marcos",
                middleName: "Rogério",
                familyName: "Brito"
            },
            scores: [9,9],
            average: 9,
            status: "aprovado",
            avatar: "images/avatar-marcos.jpg"
        },

        ]

        break;

    default:
        alert("Seleção indisponível. Segue um exemplo.");

        students = [
            {
            studentName: {
                firstName: "Jakeliny",
                middleName: "",
                familyName: "Gracielly"
            },
            scores: [4, 7],
            average: 5.5,
            status: "de recuperação",
            avatar: "images/avatar-jakeliny.png"
        },
        
        {
            studentName: {
                firstName: "Jonas",
                middleName: "Augusto",
                familyName: "Kunzler"
            },
            scores: [3, 6.5],
            average: 4.75,
            status: "reprovado",
            avatar: "images/avatar-jonas.jpeg"
        },
        
        {
            studentName: {
                firstName: "Mayk",
                middleName: "",
                familyName: "Brito"
            },
            scores: [9,10],
            average: 9.5,
            status: "aprovado",
            avatar: "images/avatar-mayk.jpeg"
        },

        {
            studentName: {
                firstName: "Fernanda",
                middleName: "Moreira",
                familyName: "Pereira"
            },
            scores: [7, 4],
            average: 5.5,
            status: "de recuperação",
            avatar: "images/avatar-fernanda.jpg"
        },
        
        {
            studentName: {
                firstName: "Julio",
                middleName: "Cesar",
                familyName: "Kunzler"
            },
            scores: [4.5, 5.5],
            average: 5,
            status: "reprovado",
            avatar: "images/avatar-julio.jpg"
        },
        
        {
            studentName: {
                firstName: "Marcos",
                middleName: "Rogério",
                familyName: "Brito"
            },
            scores: [9,9],
            average: 9,
            status: "aprovado",
            avatar: "images/avatar-marcos.jpg"
        },

        ]

    }
