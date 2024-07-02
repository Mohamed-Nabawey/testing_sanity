export default {}

export function getComponentProps() {
    return {
        "anchorId": { type: String, default: "" },
        "backgroundColor": { type: String, default: "" },
        "backgroundImage": { type: String, default: "" },
        "backgroundType": { type: String, default: "" },
        "overlayColor": { type: Boolean, default: false },
        "paddingButtom": { type: Number, default: false },
        "paddingTop": { type: Number, default: false }
    }
}

export function getArgTypes() {
    return {
        "anchorId": { control: 'text' },
        "backgroundColor": { control: 'color' },
        "backgroundImage": { control: 'text' },
        "backgroundType": { control: 'text' },
        "overlayColor": { control: 'boolean' },
        "paddingButtom": { control: 'number' },
        "paddingTop": { control: 'number' }
    }
}