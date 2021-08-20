let subjectsList = document.querySelector('#subjects_list');

subjectsList.style.display = 'none';

document.querySelector('#subjects_btn').addEventListener('mouseenter', function() {
    subjectsList.style.display = 'block';
})

subjectsList.addEventListener('mouseleave', function() {
    if (subjectsList.style.display == 'block') {
        subjectsList.style.display = 'none';
    }
})