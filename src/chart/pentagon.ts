import { Scores } from '../scoring/index';

export function drawPentagon(canvas: HTMLCanvasElement, scores: Scores) {
    const ctx = canvas.getContext('2d')!;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxRadius = 150;
    const traits = ['history', 'party', 'outdoor', 'fancy', 'chill'] as const;
    const labels = ['🏛 History', '🎉 Party', '🌳 Outdoor', '✨ Fancy', '☕ Chill'];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let level = 1; level <= 5; level++) {
        ctx.beginPath();
        for (let i = 0; i <= 5; i++) {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            const r = (level / 5) * maxRadius;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = '#ddd';
        ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const r = (scores[traits[i]] / 5) * maxRadius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 107, 107, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const x = cx + (maxRadius + 30) * Math.cos(angle);
        const y = cy + (maxRadius + 30) * Math.sin(angle);
        ctx.fillText(labels[i], x, y);
    }
}