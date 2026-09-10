// Highlight the current page in navigation
document.querySelectorAll('nav.crumbs a').forEach(a => {
  if (a.getAttribute('href') === location.pathname.split('/').pop()) {
    a.classList.add('active');
  }
});

// Quiz grading — in-memory only, no persistence between visits
function initQuiz(formId){
  const form = document.getElementById(formId);
  if(!form) return;
  const checkBtn = form.querySelector('.check-btn');
  const resetBtn = form.querySelector('.reset-btn');
  const scoreBox = form.querySelector('#quiz-score');
  const questions = form.querySelectorAll('.quiz-q');

  checkBtn.addEventListener('click', () => {
    let correctCount = 0;
    questions.forEach(q => {
      const correctVal = q.dataset.correct;
      const checked = q.querySelector('input:checked');
      q.classList.remove('correct','incorrect');
      q.querySelectorAll('label').forEach(l => l.classList.remove('chosen'));

      if(!checked){
        q.classList.add('incorrect');
        return;
      }
      checked.closest('label').classList.add('chosen');
      if(checked.value === correctVal){
        q.classList.add('correct');
        correctCount++;
      } else {
        q.classList.add('incorrect');
      }
    });
    scoreBox.style.display = 'block';
    scoreBox.textContent = `Your Score: ${correctCount} / ${questions.length} correct.`;
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    questions.forEach(q => {
      q.classList.remove('correct','incorrect');
      q.querySelectorAll('label').forEach(l => l.classList.remove('chosen'));
    });
    scoreBox.style.display = 'none';
  });
}
