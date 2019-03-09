import { Layout } from "./layout.js";
import { Canvas } from "./canvas.js";
import { Graph } from "./graph.js";
import { UI } from "./ui.js";
import { Title } from "./title.js";
import { Scale } from "./scale.js";
import { Axis } from "./axis.js";
import { Options } from "./options.js";

class MainView {
	constructor() {
		this.layout = new Layout();
		this.canvas = new Canvas(this.layout);
		this.graph = new Graph(this.layout, this.canvas.graphSvg);
		this.ui = new UI(this.layout, this.canvas.uiContainer);
		this.title = new Title(this.layout, this.canvas.titleContainer);
		this.scale = new Scale(this.layout);
		this.axis = new Axis(this.scale, this.layout, this.canvas.graphSvg);
	}
}

function testView() {
	let mainView = new MainView();
}

testView();