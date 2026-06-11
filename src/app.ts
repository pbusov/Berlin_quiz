import { questions } from './questions/index';
import { calculateScores } from './scoring/index';
import { drawPentagon } from './chart/pentagon';

const quizContainer = document.getElementById('quiz')!;
const canvas = document.getElementById('pentagon') as HTMLCanvasElement;

let currentQuestion = 0;
const responses: { trait: string; score: number }[] = [];

function renderQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${q.question}</h2>
        <div class="options">
            ${q.options.map(opt => `<button data-score="${opt.score}">${opt.label}</button>`).join('')}
        </div>
        <p>${currentQuestion + 1} / ${questions.length}</p>
    `;

    quizContainer.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            responses.push({ trait: q.trait, score: parseInt((btn as HTMLElement).dataset.score!) });
            currentQuestion++;
            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                showResults();
            }
        });
    });
}

function showResults() {
    const scores = calculateScores(responses);
    quizContainer.innerHTML = '<h2>Your Berlin Personality</h2>';
    canvas.style.display = 'block';
    drawPentagon(canvas, scores);
}

renderQuestion();