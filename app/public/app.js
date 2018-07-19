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
]

$('#survey-box').hide();

$('#info-sub').on('click', function(){
    const userName = $('#user-name').val().trim();
    const userPhoto = $('#photo-file').val().trim();

    $('#user-info').hide();
    $('#survey-box').show();
}) 

