import { Shape } from './Base';

export class Sprite {
    constructor(private readonly shape: Shape) {}

    public draw(context: CanvasRenderingContext2D): void {
        console.log(this)
        const { width, depth } = this.shape.getDimensions();
        const { x, z } = this.shape.getPosition();

        context.save();

        //  Draw shape
        context.fillStyle = this.shape.getColour();
        context.fillRect(x, z, width, depth);
        context.strokeRect(x, z, width, depth);

        // Draw label
        const labels = this.shape.getLabel();
        context.fillStyle = '#000000';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        const baseFontSize = 12;
        context.font = `${baseFontSize}px Arial`;

        // reduce text size, if text will not fit in shape (6 padding)
        labels.forEach((line, index) => {
            const textWidth = context.measureText(line).width;
            const maxTextWidth = width - 6;

            const adjustedFontSize = textWidth > maxTextWidth
                ? Math.max((baseFontSize * maxTextWidth) / textWidth, 6)
                : baseFontSize;

            context.font = `${adjustedFontSize}px Arial`;

            context.fillText(
                line,
                x + width / 2,
                z + depth / 2 + (index * 14) - ((labels.length - 1) * 7)
            );
        });

        context.restore();
    }
}
