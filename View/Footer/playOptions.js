class PlayOptions {
    constructor(dims, container) {
        this.dims = dims;
        this.container = container;
        this.optionsPanel = this.createOptionsPanel();
    }

    createOptionsPanel() {
        let optionsPanel = this.container.append("div")
            .attr("class", "timeOptions");
        let forward = this.createButton(optionsPanel);
        let back = this.createButton(optionsPanel);
        let play = this.createButton(optionsPanel);
        return optionsPanel;
    }

    createButton(optionsPanel) {
        let buttonWidth = this.dims.playButtonWidth;
        let button = optionsPanel.append("input")
            .attr("type", "button")
            .style("width", buttonWidth + "px")
            .attr("class", "timeButton");
        return button;
    }
}

export { PlayOptions };