const surveyQuestions = [
    q1 = {
        num: 'Question 1',
        quest: 'I am a home-body. Staying in and relaxing on a couch is my ideal Friday night',
    },
    q2 = {
        num: 'Question 2',
        quest: 'I love working out. Keeping my body fit is a huge priority for me',
    },
    q3 = {
        num: 'Question 3',
        quest: 'My home/desk is usually very neat and organized',
    },
    q4 = {
        num: 'Question 4',
        quest: 'Plans are usually very spontaneous for me, I like to go with the flow',
    },
    q5 = {
        num: 'Question 5',
        quest: 'I am obsessed with watching/playing sports. It is almost a religion',
    },
    q6 = {
        num: 'Question 6',
        quest: 'I am a very religious person',
    },
    q7 = {
        num: 'Question 7',
        quest: 'Family is everything to me',
    },
    q8 = {
        num: 'Question 8',
        quest: "I don't really care what people think of me",
    },
    q9 = {
        num: 'Question 9',
        quest: 'Having a nice car and a nice house is important to me',
    },
    q10 = {
        num: 'Question 10',
        quest: 'I love to watch cartoons',
    },
];

// function init() {
//     $('#survey-box').hide();
//     $('#info-sub').on('click', function (event) {
//         // event.preventDefault();
//         userName = $('#user-name').val().trim();
//         userPhoto = $('#photo-file').val().trim();

//         $('#user-info').hide();
//         $('#survey-box').show();
//         surveyPlay(userName, userPhoto);
//     });
// }

function surveyPlay() {
    $('#send-survey').on('click', function (event) {
        event.preventDefault();
        const userName = $('#user-name').val().trim();
        const userPhoto = $('#photo-file').val().trim();
        const newFriend = {
            name: userName,
            photo: userPhoto,
            scores: [   
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        }
        console.log(newFriend);

        $.post("/api/friends", newFriend)
            .then(function (data) {
                console.log(data);
            }); 
    })
}

surveyPlay();