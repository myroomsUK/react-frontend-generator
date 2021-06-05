export class Operation {
    constructor({ color, text, icon, onClick, visibility = (arg) => true, requiresConfirmation = false }) {
        this.color = color;
        this.text = text;
        this.icon = icon;
        this.onClick = onClick;
        this.visibility = visibility;
        this.requiresConfirmation = requiresConfirmation;
    }
}
