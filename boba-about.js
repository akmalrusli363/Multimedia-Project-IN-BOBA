(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.madokarunning = function() {
	this.initialize(img.madokarunning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,136);


(lib.sayakarunning = function() {
	this.initialize(img.sayakarunning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1064,139);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.SayakaRunning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzIKIAAwUIPnAAIAAQUg");
	mask.setTransform(50,52.3);

	// mami
	this.instance = new lib.sayakarunning();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.752);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleY:0.76,x:-100},0).wait(3).to({x:-200},0).wait(3).to({x:-300},0).wait(3).to({x:-400},0).wait(3).to({x:-500},0).wait(3).to({x:-595},0).wait(3).to({x:-695},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,104.5);


(lib.MadokaRunning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2INIAAwZILtAAIAAQZg");
	mask.setTransform(37.5,52.5);

	// madoka
	this.instance = new lib.madokarunning();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.773,0.772);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-75},0).wait(4).to({x:-148},0).wait(4).to({x:-225},0).wait(4).to({x:-300},0).wait(4).to({x:-382},0).wait(4).to({x:-456},0).wait(4).to({x:-530},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,105);


(lib.VideoButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape.setTransform(87.8,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape_1.setTransform(77.7,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcA/QgDgFgCgNQgNAYgTABQgMAAgIgIQgJgIgDgKQgEgKAAgJQAAgUAMgOQAMgPATAAQAMABAMAIIAAgkQAAgMACgCQACgDAEgBQAEAAACAEQACADAAAGIAAAPIgCAXIgDAaQAAAWACANQABAMAFABQAFAAAAADQAAADgDADQgCAFgFAAQgFAAgDgHgAgXgBQgIAJAAAPQAAAPAGAJQAGALALAAQASgBAMgfIAAgbQgLgKgNAAQgMAAgJAKg");
	this.shape_2.setTransform(67.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA5IABgmIgBglQAAgJAGAAQAHAAAAAJIgBAlIABAmQAAAJgHAAQgGAAAAgJgAgFgwQgCgDAAgEQAAgEACgDQADgDADAAQAEAAABACQACADAAADQAAAEgCAEQgDADgDAAQgDAAgCgCg");
	this.shape_3.setTransform(60.4,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA+IgSgvIgNgjIgGgRIgEgKQgDgJAAgFQAAgDACgCQACgDADAAQAFABADAGIAEANIAJAcIALAfQAMAnACAAQABAAAIgYIARg3IAKgfQACgIAFAAQADABACACQACACAAACIgDALIgIAZIgPAsIgPAsQgDAHgHABQgFAAgDgIg");
	this.shape_4.setTransform(52.8,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFACB").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_5.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.TeamButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAyAqQgCgGAAgKIAAghQAAgMgEgIQgFgHgJAAQgIAAgIAKQgIAKgEANIABAmQAAAKgGAAQgIAAAAgNQAAgMADgXQAAghgSAAQgJAAgIAKQgIAKgDANIABAmQAAAKgHAAQgJAAAAgNQAAgMAEgXIgBgUIgCgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAIIAAAHQAMgXASAAQALAAAHAHQAGAFACALQAMgXATAAQANAAAIAKQAHALAAAPIgBAbIAAAHIABAFQAAABABABQAAAAAAABQABAAAAABQAAAAABAAIADABIACAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAFgDACQgDAEgEAAQgHAAgDgFg");
	this.shape.setTransform(85,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_1.setTransform(71.7,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape_2.setTransform(61.4,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEBCQgCgCAAgFIABg7IgBg3IgbABQgJAAAAgHQAAgHAJAAIAiABIAggBQAEAAADACQADACAAADQAAADgDACQgDACgEAAIgZgBIgBA3IABA7QAAAFgCACQgCADgDAAQgDAAgCgDg");
	this.shape_3.setTransform(52.2,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFACB").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_4.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.LocationButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYAqQgDgGAAgKIABghQAAgMgFgIQgGgHgJAAQgIAAgJAKQgJAKgDANIABAmQAAAKgHAAQgJAAAAgNQAAgMAEgXIgBgUIgCgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAIIAAAHQANgXASAAQAPAAAIAKQAIALAAAPIgBAbIAAAHIABAFQAAABAAABQABAAAAABQAAAAABABQAAAAAAAAIADABIACAAIABACQAAAFgDACQgDAEgEAAQgHAAgCgFg");
	this.shape.setTransform(102.4,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_1.setTransform(91.9,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA5IABgmIgBglQAAgJAGAAQAHAAAAAJIgBAlIABAmQAAAJgHAAQgGAAAAgJgAgFgwQgCgDAAgEQAAgEACgDQADgDADAAQAEAAABACQACADAAADQAAAEgCAEQgDADgDAAQgDAAgCgCg");
	this.shape_2.setTransform(84.8,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_3.setTransform(79.8,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_4.setTransform(71.7,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAiQgMgOAAgUQAAgTAMgOQANgOAUABQALAAAJAEQAIAGAAAFQAAADgBACIgEABQgDAAgDgCQgJgIgKAAQgLAAgKAKQgJALAAAOQAAAPAJALQAKAKANAAQAKAAAKgHIAFgDQAFABAAAEQAAAFgKAGQgLAGgLgBQgSAAgNgNg");
	this.shape_5.setTransform(62,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_6.setTransform(52.3,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABBEIgcABQgEAAgDgDQgCgCAAgFIABg6IgBg8QAAgEACgDQACgCADAAQAEAAACACQACADAAAEIgBA8IABA3IASAAIAVAAIAMgBQADAAACACQACACAAADQAAADgCACQgCACgFAAg");
	this.shape_7.setTransform(42.9,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFACB").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_8.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.AboutBobaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape.setTransform(174.3,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAiQAAgMAEgXIgCgUIgCgQQAAgEACgDQACgCAEAAQADAAACACQACADAAADIgBAIIAAAIQAEgKAIgHQAGgHAIAAQAIAAAFADQAEAEAAADQAAAEgCADQgCABgDABQgDgBgEgCQgDgEgCAAQgGAAgHANQgIAMgCANIAAAhQAAAKgHAAQgIAAAAgNg");
	this.shape_1.setTransform(166.5,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_2.setTransform(157.3,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_3.setTransform(148.9,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA9IABg9IgBg8QAAgIAGgBQAHABAAAIIgBA8IABA9QAAAJgHAAQgGAAAAgJg");
	this.shape_4.setTransform(143.8,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_5.setTransform(136.8,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAyQgQgVAAgdQAAgdAQgUQARgUAYAAQAPAAAMAFQAMAGAAAHQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgFgDIgKgGQgGgCgJAAQgTgBgLASQgNAQAAAXQAAAXANARQAMARARABQAKgBAGgCQAIgBADgCIAHgFIAFgCQAEAAAAAGQABAFgNAHQgNAHgSAAQgYAAgQgUg");
	this.shape_6.setTransform(125.6,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_7.setTransform(110.1,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYA8QAAAKgGAAQgJgBABgNQgBgMAEgXIgCgtIgBglQAAgDABgCQACgDAEAAQADAAACADQACACAAAEIAAA6QAFgJAIgHQAIgFAKgBQAKAAAIAIQAPANAAAXQAAAUgMAPQgMAPgQAAQgNAAgLgKgAgMgCQgIAHgFAOIABAcQALALAMAAQAKAAAJgLQAIgKAAgPQAAgQgFgIQgFgJgKAAQgJgBgJAKg");
	this.shape_8.setTransform(100.1,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_9.setTransform(89.9,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBDQgMgFgBgGQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEAAIAEAAIABgzIgBgcIAAgVIgDABQgFAAAAgHQAAgDAFgEQAFgDAGgCQAOgDALAAQAKAAAKADQAJADAGAGQALAJAAAMQAAAVgUAKQANADAIAKQAJAKgBANQAAATgPAKQgPAKgZAAQgTAAgLgDgAgYA4QAIACAJAAQATAAALgHQANgIAAgOQAAgLgKgIQgKgHgKgCQgPAEgFAAQgGAAgFgCIABA1gAACgKQAFAAAEgCQAGgDAFgGQAFgHAAgIQAAgIgJgHQgIgGgRAAQgIAAgJACIgBAtQADgBAJAAQAJAAAGABg");
	this.shape_10.setTransform(79,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_11.setTransform(65.7,20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_12.setTransform(57.7,22.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_13.setTransform(47.2,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA8QABAKgIAAQgHgBAAgNQAAgMADgXIgBgtIgCglQAAgDACgCQACgDACAAQAEAAACADQACACAAAEIAAA6QAEgJAJgHQAIgFAKgBQAKAAAIAIQAOANAAAXQAAAUgLAPQgLAPgRAAQgOAAgKgKgAgMgCQgIAHgFAOIABAcQALALAMAAQALAAAIgLQAJgKAAgPQgBgQgFgIQgGgJgJAAQgJgBgJAKg");
	this.shape_14.setTransform(37.3,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAlA/IgGgTIgHgVIgdAAIgUAAIgMAnQgCAIgFAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgIIAFgPIAFgQIgDAAQgJgBAAgGQAAgHAJAAIAHAAIAYhDQAEgMAGAAQAEABACADQADACABAEIAGAPIASA2IAIAAQAEAAACACQADACAAADQAAAHgNAAIAFANIADAKIAFAQQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgFgBgDgGgAgQgDIgFAOIAVAAIAUAAQgSg7gCAAQgCAAgOAtg");
	this.shape_15.setTransform(26.4,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFACB").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_16.setTransform(100,19.3,1.429,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,200,40.5);


(lib.VideoButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_6.setTransform(87.8,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape_7.setTransform(77.7,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcA/QgDgFgCgNQgNAYgTABQgMAAgIgIQgJgIgDgKQgEgKAAgJQAAgUAMgOQAMgPATAAQAMABAMAIIAAgkQAAgMACgCQACgDAEgBQAEAAACAEQACADAAAGIAAAPIgCAXIgDAaQAAAWACANQABAMAFABQAFAAAAADQAAADgDADQgCAFgFAAQgFAAgDgHgAgXgBQgIAJAAAPQAAAPAGAJQAGALALAAQASgBAMgfIAAgbQgLgKgNAAQgMAAgJAKg");
	this.shape_8.setTransform(67.9,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA5IABgmIgBglQAAgJAGAAQAHAAAAAJIgBAlIABAmQAAAJgHAAQgGAAAAgJgAgFgwQgCgDAAgEQAAgEACgDQADgDADAAQAEAAABACQACADAAADQAAAEgCAEQgDADgDAAQgDAAgCgCg");
	this.shape_9.setTransform(60.4,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA+IgSgvIgNgjIgGgRIgEgKQgDgJAAgFQAAgDACgCQACgDADAAQAFABADAGIAEANIAJAcIALAfQAMAnACAAQABAAAIgYIARg3IAKgfQACgIAFAAQADABACACQACACAAACIgDALIgIAZIgPAsIgPAsQgDAHgHABQgFAAgDgIg");
	this.shape_10.setTransform(52.8,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_11.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.TeamButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAyAqQgCgGAAgKIAAghQAAgMgEgIQgFgHgJAAQgIAAgIAKQgIAKgEANIABAmQAAAKgGAAQgIAAAAgNQAAgMADgXQAAghgSAAQgJAAgIAKQgIAKgDANIABAmQAAAKgHAAQgJAAAAgNQAAgMAEgXIgBgUIgCgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAIIAAAHQAMgXASAAQALAAAHAHQAGAFACALQAMgXATAAQANAAAIAKQAHALAAAPIgBAbIAAAHIABAFQAAABABABQAAAAAAABQABAAAAABQAAAAABAAIADABIACAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAFgDACQgDAEgEAAQgHAAgDgFg");
	this.shape_5.setTransform(85,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_6.setTransform(71.7,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape_7.setTransform(61.4,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEBCQgCgCAAgFIABg7IgBg3IgbABQgJAAAAgHQAAgHAJAAIAiABIAggBQAEAAADACQADACAAADQAAADgDACQgDACgEAAIgZgBIgBA3IABA7QAAAFgCACQgCADgDAAQgDAAgCgDg");
	this.shape_8.setTransform(52.2,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_9.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.LocationButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAYAqQgDgGAAgKIABghQAAgMgFgIQgGgHgJAAQgIAAgJAKQgJAKgDANIABAmQAAAKgHAAQgJAAAAgNQAAgMAEgXIgBgUIgCgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAIIAAAHQANgXASAAQAPAAAIAKQAIALAAAPIgBAbIAAAHIABAFQAAABAAABQABAAAAABQAAAAABABQAAAAAAAAIADABIACAAIABACQAAAFgDACQgDAEgEAAQgHAAgCgFg");
	this.shape_9.setTransform(102.4,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_10.setTransform(91.9,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA5IABgmIgBglQAAgJAGAAQAHAAAAAJIgBAlIABAmQAAAJgHAAQgGAAAAgJgAgFgwQgCgDAAgEQAAgEACgDQADgDADAAQAEAAABACQACADAAADQAAAEgCAEQgDADgDAAQgDAAgCgCg");
	this.shape_11.setTransform(84.8,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_12.setTransform(79.8,20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_13.setTransform(71.7,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAiQgMgOAAgUQAAgTAMgOQANgOAUABQALAAAJAEQAIAGAAAFQAAADgBACIgEABQgDAAgDgCQgJgIgKAAQgLAAgKAKQgJALAAAOQAAAPAJALQAKAKANAAQAKAAAKgHIAFgDQAFABAAAEQAAAFgKAGQgLAGgLgBQgSAAgNgNg");
	this.shape_14.setTransform(62,22.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_15.setTransform(52.3,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AABBEIgcABQgEAAgDgDQgCgCAAgFIABg6IgBg8QAAgEACgDQACgCADAAQAEAAACACQACADAAAEIgBA8IABA3IASAAIAVAAIAMgBQADAAACACQACACAAADQAAADgCACQgCACgFAAg");
	this.shape_16.setTransform(42.9,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_17.setTransform(70,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,40.5);


(lib.AboutBobaButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAiQgLgNgBgSQgKgDAAgGQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAGABQAEgQALgLQALgKANABQAPgBAJAJQAJAHAAANQAAANgLAGQgMAHgQAAQgIAAgOgDQABANAJAJQAIAJAJAAQAGAAAGgCIAIgDQAHgGACAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABAAIABADQAAAGgKAGQgLAHgMgBQgSAAgKgNgAgIgaQgIAJgDALQAKAEALAAQANAAAHgFQAHgDAAgIQAAgHgFgFQgEgFgJAAQgLAAgIAJg");
	this.shape_17.setTransform(174.3,22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAiQAAgMAEgXIgCgUIgCgQQAAgEACgDQACgCAEAAQADAAACACQACADAAADIgBAIIAAAIQAEgKAIgHQAGgHAIAAQAIAAAFADQAEAEAAADQAAAEgCADQgCABgDABQgDgBgEgCQgDgEgCAAQgGAAgHANQgIAMgCANIAAAhQAAAKgHAAQgIAAAAgNg");
	this.shape_18.setTransform(166.5,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_19.setTransform(157.3,22.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_20.setTransform(148.9,20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA9IABg9IgBg8QAAgIAGgBQAHABAAAIIgBA8IABA9QAAAJgHAAQgGAAAAgJg");
	this.shape_21.setTransform(143.8,20);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_22.setTransform(136.8,22.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghAyQgQgVAAgdQAAgdAQgUQARgUAYAAQAPAAAMAFQAMAGAAAHQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgFgDIgKgGQgGgCgJAAQgTgBgLASQgNAQAAAXQAAAXANARQAMARARABQAKgBAGgCQAIgBADgCIAHgFIAFgCQAEAAAAAGQABAFgNAHQgNAHgSAAQgYAAgQgUg");
	this.shape_23.setTransform(125.6,20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAoQgDgGAAgLQgEAKgJAHQgJAHgJAAQgLAAgIgHQgPgNAAgZQAAgTAMgOQALgPASAAQAMAAAKAJQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgCADgGAAQgFAAgDgHgAgVgYQgJALAAAOQAAAPAGAKQAFAJAKAAQAJAAAJgJQAIgJAEgOIgBgbQgKgKgLAAQgMAAgIAKg");
	this.shape_24.setTransform(110.1,22.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYA8QAAAKgGAAQgJgBABgNQgBgMAEgXIgCgtIgBglQAAgDABgCQACgDAEAAQADAAACADQACACAAAEIAAA6QAFgJAIgHQAIgFAKgBQAKAAAIAIQAPANAAAXQAAAUgMAPQgMAPgQAAQgNAAgLgKgAgMgCQgIAHgFAOIABAcQALALAMAAQAKAAAJgLQAIgKAAgPQAAgQgFgIQgFgJgKAAQgJgBgJAKg");
	this.shape_25.setTransform(100.1,20);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_26.setTransform(89.9,22.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkBDQgMgFgBgGQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEAAIAEAAIABgzIgBgcIAAgVIgDABQgFAAAAgHQAAgDAFgEQAFgDAGgCQAOgDALAAQAKAAAKADQAJADAGAGQALAJAAAMQAAAVgUAKQANADAIAKQAJAKgBANQAAATgPAKQgPAKgZAAQgTAAgLgDgAgYA4QAIACAJAAQATAAALgHQANgIAAgOQAAgLgKgIQgKgHgKgCQgPAEgFAAQgGAAgFgCIABA1gAACgKQAFAAAEgCQAGgDAFgGQAFgHAAgIQAAgIgJgHQgIgGgRAAQgIAAgJACIgBAtQADgBAJAAQAJAAAGABg");
	this.shape_27.setTransform(79,20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAlIAAg4IgJAAQgJAAAAgGQAAgGAJAAIAIABIAAgVQAAgIAHgBQAGABAAAIIgBAVIAPgBQAJAAAAAGQAAAGgJAAIgPAAIgBApQAAARACAEQABAFAGABQADgBADgCIAFgBQAEAAAAAEQAAADgGAEQgHAEgHABQgOAAAAgYg");
	this.shape_28.setTransform(65.7,20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWAYQgNAXgUAAQgOAAgIgLQgIgKAAgQIABgbQAAgGgBgGIgCgJQAAgDADgDQACgCADAAQAIAAAAAPIgBAmQAAANAFAHQAFAIAKAAQAIAAAJgKQAIgKAEgOIgBgmQAAgJAHAAQAIAAAAANQAAANgDAVQAAAOACAJQACAIACABIADABIACAAIABACQAAAEgDAEQgDADgFAAQgLAAAAgXg");
	this.shape_29.setTransform(57.7,22.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAiQgLgOAAgUQAAgTALgOQANgOARABQASAAAMANQAMAOAAATQAAAUgMAOQgMANgSAAQgSAAgMgNgAgUgZQgJALAAAOQAAAPAJALQAIAKAMAAQAMAAAJgKQAIgLAAgPQAAgOgIgLQgIgKgNAAQgLAAgJAKg");
	this.shape_30.setTransform(47.2,22.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYA8QABAKgIAAQgHgBAAgNQAAgMADgXIgBgtIgCglQAAgDACgCQACgDACAAQAEAAACADQACACAAAEIAAA6QAEgJAJgHQAIgFAKgBQAKAAAIAIQAOANAAAXQAAAUgLAPQgLAPgRAAQgOAAgKgKgAgMgCQgIAHgFAOIABAcQALALAMAAQALAAAIgLQAJgKAAgPQgBgQgFgIQgGgJgJAAQgJgBgJAKg");
	this.shape_31.setTransform(37.3,20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAlA/IgGgTIgHgVIgdAAIgUAAIgMAnQgCAIgFAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgIIAFgPIAFgQIgDAAQgJgBAAgGQAAgHAJAAIAHAAIAYhDQAEgMAGAAQAEABACADQADACABAEIAGAPIASA2IAIAAQAEAAACACQADACAAADQAAAHgNAAIAFANIADAKIAFAQQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgFgBgDgGgAgQgDIgFAOIAVAAIAUAAQgSg7gCAAQgCAAgOAtg");
	this.shape_32.setTransform(26.4,20);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("Ap/DLQg8gBAAg7IAAkdQAAg7A8AAIT/AAQA8AAAAA7IAAEdQAAA7g8ABg");
	this.shape_33.setTransform(100,20.3,1.429,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,40.5);


(lib.pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AC7AAQAABOg3A2Qg3A3hNAAQhNAAg2g3Qg3g2AAhOQAAhMA3g3QA2g3BNAAQBNAAA3A3QA3A3AABMg");
	this.shape.setTransform(0,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AiDCEQg3g3ABhNQgBhMA3g3QA2g3BNAAQBNAAA3A3QA3A3gBBMQABBNg3A3Qg3A2hNABQhNgBg2g2g");
	this.shape_1.setTransform(0,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AFeizQAABAgjBeQgWA4gtBdQgqBVhrCnQg2BTgtBDQgthCg1hTQhsimgphXQgxhngSgvQgjhdAAhAQAAiRBmhmQBmhnCRAAQCRAABnBnQBmBmAACRg");
	this.shape_2.setTransform(0,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AhiF9QhsimgphXQgxhngRguQgkheAAhAQAAiQBmhnQBnhnCQAAQCQAABoBnQBmBnAACQQAABAgjBeQgWA5gtBcQgrBUhrCoQg1BUgtBCQgshCg2hTg");
	this.shape_3.setTransform(0,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-1,72,108);


(lib.eyeemoticon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKA7QgdgdAAgvIAvAAQAAAgAPASQAQASAaAAQAbAAAQgTQAQgSAAgfIAuAAQAAAugdAdQgeAdgvAAQgvAAgbgcgACmgCQgPgOAAgUQAAgUAPgPQAOgPAVAAQAUAAAOAPQAOAOABAVQgBAUgOAOQgOAOgUAAQgVAAgOgOgAjqgCQgOgOAAgUQAAgUAOgPQAOgPAVAAQAUAAAPAPQAOAOAAAVQAAAUgOAOQgPAOgUAAQgVAAgOgOg");
	this.shape.setTransform(-0.2,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhMAwQgcgcAAgwIAuAAQABAgAPASQAQATAaAAQAbgBAQgSQAPgTAAgfIAvAAQAAAugeAeQgcAcgvAAQgvAAgdgcgACdgQQgHgPAAgSIAAgBQAIgKARgHQAbgIAJAAQATAAAPAIQAHAPAAARQgKAMgQAHQgGADgHACQgKACgLAAQgTAAgQgHgAjzgQIgBgBQgHgPAAgRIAAgBQAJgKAQgHQAJgFAKgCQAIgBAJAAQATAAAPAIQAHAPAAARIgBABQgIALgRAHQgGADgHACQgKACgLAAQgTAAgPgHg");
	this.shape_1.setTransform(0,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhNAlQgcgcAAgvIAuAAQAAAgAQARQAQATAbAAQAaAAAQgTQAPgSAAgfIAvAAQAAAtgeAeQgdAcguAAQgwAAgcgcgADMgfIg4AAIAAghIA4AAIAzAAIAAAhgAjGgfIg4AAIAAghIA4AAIAzAAIAAAhg");
	this.shape_2.setTransform(0.1,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNAyQgcgdAAgvIAuAAQAAAgAQASQAQASAbAAQAaAAAQgTQAPgSAAgfIAvAAQAAAugeAdQgdAdguAAQgwAAgcgcgADMgrIg4AZIAAgiIA4gZIAzAZIAAAigAjGgrIg4AZIAAgiIA4gZIAzAZIAAAig");
	this.shape_3.setTransform(0.1,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhNA+QgcgcAAgvIAuAAQAAAfAQASQAQATAbAAQAaAAAQgTQAPgTAAgeIAvAAQAAAtgeAeQgdAcguAAQgwAAgcgcgADMg4Ig4AyIAAghIA4gyIAzAyIAAAhgAjGg4Ig4AyIAAghIA4gyIAzAyIAAAhg");
	this.shape_4.setTransform(0.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNBMQgcgcAAgwIAuAAQAAAgAQASQAQATAbAAQAagBAQgSQAPgTAAgfIAvAAQAAAugeAeQgdAcguAAQgwAAgcgcgADMg5Ig4BAIgMghIBEhNIBABNIgNAhgAjGg5Ig4BAIgNghIBFhNIA/BNIgMAhg");
	this.shape_5.setTransform(0.1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhNBaQgcgdAAgwIAuAAQAAAhAQASQAQASAbAAQAaAAAQgTQAPgSAAggIAvAAQAAAvgeAdQgdAdguAAQgwAAgcgcgADMg6Ig4BPIgZghIBRhpIBMBpIgZAhgAjGg6Ig4BPIgZghIBRhpIBMBpIgZAhg");
	this.shape_6.setTransform(0.1,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhMAsQgcgcAAgvIAuAAQAAAgAQARQAQATAaAAQAbAAAQgTQAPgSAAgfIAvAAQAAAtgeAeQgdAdgugBQgwAAgcgcgACbgVQgGgQAAgSIAAAAQAMgGARgFQAcgGAIAAQATAAAQAGQAEAQAAAQQgNAJgQAEIgOADQgKACgLAAQgSAAgQgFgAj3gVIgBAAQgEgPAAgTIAAAAQAMgGARgFIATgFIARgBQASAAAQAGQAFAQAAAQIgCABQgLAIgRAEIgNADQgKACgLAAQgTAAgQgFg");
	this.shape_7.setTransform(0,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhLAzQgdgcAAgvIAvAAQAAAgAPARQAQATAaAAQAbAAAQgTQAQgTAAgeIAuAAQAAAtgdAeQgeAdgugBQgwAAgbgcgACggMQgJgPgBgSIAAgBQAGgNAPgKQAcgKAIABQAUgBAOAKQAKAOAAATQgGAPgPAJQgHAEgHADQgKADgLAAQgTAAgQgKgAjwgMIgCAAQgIgPgBgSIAAgBQAHgNAPgKQAJgFAKgCQAIgCAJAAQATgBAPAKQAJAOABATIgBABQgGAOgPAJQgHAEgGADQgKADgMAAQgTAAgPgKg");
	this.shape_8.setTransform(-0.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},11).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,8.1,49.9,17.3);


(lib.homeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhLgvIAABfICXAAIAAhf");
	this.shape.setTransform(13.4,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiFBBICFiEICGCH");
	this.shape_1.setTransform(13.4,4.2,1,0.621);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiFgEICFhSICGBUIg6gFIAABeIiXAAIAAheg");
	this.shape_2.setTransform(13.4,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLBXIAAheIg6ADICFhSICGBUIg6gFIAABeg");
	this.shape_3.setTransform(13.4,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,19.4);


(lib.prevArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape.setTransform(7.5,15,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_1.setTransform(22.5,15,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(5,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_2.setTransform(7.5,15,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(5,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_3.setTransform(22.5,15,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(4,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_4.setTransform(7.5,15,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(4,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_5.setTransform(22.5,15,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(7,7,7,0.4)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,30,33);


(lib.nextArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape.setTransform(22.5,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_1.setTransform(7.5,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(5,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_2.setTransform(22.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(5,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_3.setTransform(7.5,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(4,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_4.setTransform(22.5,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(4,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_5.setTransform(7.5,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(7,7,7,0.4)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_6.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,30,33);


(lib.gotoArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("AgnhjIBPBjIhPBk");
	this.shape.setTransform(14.5,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("AgnhjIBPBjIhPBk");
	this.shape_1.setTransform(5.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,20,23);


(lib.Runners = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// madoka
	this.instance = new lib.MadokaRunning();
	this.instance.parent = this;
	this.instance.setTransform(206.7,44.7,0.905,0.905,0,0,0,305.1,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[206.8,44.7,235.6,43.1,243.5,42.7,269.9,41.5,291.3,41.3,296,41.3,300.5,41.3,322.3,41.5,357.6,43.3,400.8,45.6,414.6,46,449.8,47.1,493.7,46,521.9,45.3,572.6,43.1,592.2,42.2,602.4,42.1,619.1,41.9,631.6,43,639.4,43.8,649.9,45.4,655.9,46.3,667.7,48.2,685.5,50.9,699.3,50.8,702.1,50.8,704.7,50.7,714.2,50.2,725.7,48,732.3,46.8,745.3,44.2,773.4,39.3,817.5,40.1,833.7,40.4,856.4,41.6,869.3,42.2,894.8,43.7,952.3,46.7,1011.4,46.2,1070.7,45.8,1127.7,41.9,1132.4,41.6,1136.7,41.3]}},96).to({_off:true},1).wait(15));

	// sayaka
	this.instance_1 = new lib.SayakaRunning();
	this.instance_1.parent = this;
	this.instance_1.setTransform(282.5,45.3,1,1,0,0,0,400,52.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[282.5,45.2,298.1,44.7,315.2,44.1,350.3,43.2,383.2,43.3,402.9,43.4,437.9,44.1,472.9,44.9,492.6,45,525.5,45.1,560.6,44.1,619.5,42.5,649.6,42.1,699.1,41.5,738.7,42.7,754.8,43.2,824.8,44.5,877.4,45.5,910.7,47.2,989.2,51.1,1099.2,50.5,1184.6,50,1253.2,47]}},72).to({skewY:180,guide:{path:[1253.2,47,1184.6,50,1099.2,50.5,989.2,51.1,910.7,47.2,877.4,45.5,824.8,44.5,754.8,43.2,738.7,42.7,699.1,41.5,649.6,42.1,619.5,42.5,560.6,44.1,556.2,44.2,551.9,44.3]}},1).to({guide:{path:[551.8,44.4,521.3,45.2,492.5,45,472.8,44.9,437.8,44.2,402.8,43.5,383.1,43.4,376.3,43.4,369.3,43.4]}},11).to({skewY:0,guide:{path:[369.4,43.3,376.3,43.3,383.2,43.3,402.9,43.4,437.9,44.1,472.9,44.9,492.6,45,525.5,45.1,560.5,44.1,619.4,42.5,649.6,42.1,699.1,41.5,738.7,42.7,754.8,43.2,824.8,44.5,877.4,45.5,910.7,47.2,974.9,50.4,1060,50.5]}},1).to({guide:{path:[1060.1,50.5,1079.1,50.6,1099.2,50.5,1184.6,50,1253.2,47]}},11).to({_off:true},1).wait(15));

	// letters outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AA1DGIgUgFQgKgDgIgFQgIgFgFgFIAAgtIgBAWIgBAUQgCAEgIAFQgJAEgMAFQgMAEgOADQgNADgMAAQgRAAgQgGQgRgGgNgOIgBlMQACgKAHgHQAHgIAKgEQAKgFAMgDQAMgCANAAQAMAAANACQAMADAKAFQALAEAIAIQAHAHADAKIABBBIAAglIABgkQAEgHAIgGQAIgHAKgEQAJgEALgCQALgDALAAQANAAANADQAMADAKAGQAKAGAGAKQAGAIAAANIAACgIAAChQgOARgUAFQgUAHgSAAQgLAAgLgCgAAXA2IABBxQAEAEAOADQANAEAQABQAQAAAPgEQAPgDAIgJIAAk5QABgJgHgFQgGgGgKgDQgKgEgMAAQgMgBgLACQgLACgIAFQgJAEgEAFIgBCKIgpgBIgCiEQgCgHgJgFQgIgEgMgDQgLgCgNAAQgMABgMACQgLACgIAEQgHAEgCAHIACFBQAIAKARACQAQACARgCQAQgCANgEQANgEADgDIAEhug");
	this.shape.setTransform(194.2,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("ADXDEIgmgLIgSh+IgFgBIgJAAIgFA0IgGA0IgEALQgKAPgTAGQgSAGgUAAQgRgBgQgEQgQgEgMgGQgMgHgHgIQgHgHABgIIBLkxQAGgOAKgJQAKgJAMgGQANgGAOgCQAOgDAOAAQAOAAAOADQAOACALAFQAMAEAIAIQAJAHAEAHIBjFRQgaAPgTAGQgTAHgPAAQgRAAgTgGgACzAmIASCCIAZAIQAMAEANAAQANABAOgEQAOgEAQgJIhelAQgDgGgKgFQgKgFgOgCQgOgDgPAAQgQAAgNADQgOAEgLAGQgLAIgFALIhLEwQgBADAGAEQAHAEALADQAKACAOACQANACANgBQANgBAKgEQALgEAGgJIAOh8gAiADEIgVgEQgJgEgJgEQgIgFgEgFIAAgtIgCAVIAAAUQgDAEgJAFQgIAFgMAEQgMAFgOACQgOADgMAAQgRAAgQgFQgQgGgOgOIgBlMQACgKAHgHQAHgJAKgEQAKgFAMgDQANgCAMAAQANAAAMACQAMADALAFQAKAEAIAJQAIAHADAKIABBBIABglIAAgkQAFgIAIgGQAHgGAKgFQAKgEALgCQALgCAKgBQANAAANADQANAEAKAFQAKAHAGAJQAGAJAAANIgBCfIAAChQgOARgTAGQgUAHgTgBQgKAAgLgCgAifA0IACByQAEAEANADQAOADAQABQAQAAAPgDQAPgEAHgJIABk4QAAgJgGgFQgHgHgJgCQgKgEgMgBQgMAAgLACQgLACgJAEQgJAEgDAFIgCCLIgpgBIgCiEQgDgIgIgEQgJgEgLgDQgLgDgNABQgNAAgLADQgLACgIAEQgIAEgBAHIABFBQAJAKAQACQARABAQgBQARgCANgFQANgDACgEIAFhugACLhJQAGgPAGgDQAGgDAGANQAGANAGAhIgvACQAFgYAGgQg");
	this.shape_1.setTransform(212.5,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AEVDIQgVgCgNgHIgqh/IgdhaIgTg/IgMgoIgGgXIgCgNQAGgIAKgGQAKgGANgEQAMgFANgCQANgCAMAAQAPAAAPADQAOAEAMAHIAiB8IAOg9IAPg8QAJgHAQgGQARgGASAAQAMAAAMADQANACALAHQAJAGAIALQAHAKACAQIhNFLQgNAFgVAFQgVAEgXABIgQABQgOAAgNgCgADNivQgQABgOAFQgOAFgGAHIABACIADALIAJAdIASA4IAeBcIAqCLQAFADAKACIAWACIAZgBIAZgBIAVgDIANgEIBKk8QgCgLgGgHQgGgGgKgEQgJgDgLgBQgKgBgKABQgKABgIADQgHACgDADIgvDEIg2jEQgJgFgPgCIgNAAIgSABgABGDEIgmgLIgSh/IgFAAIgJAAIgFA0IgFA0IgEALQgKAPgTAGQgSAFgUAAQgRAAgQgEQgQgEgMgHQgNgGgHgIQgIgIACgHIBMkyQAFgNAKgJQALgJAMgGQANgGAOgCQAOgDANAAQAOAAAOADQANACAMAFQAMAEAIAHQAJAHADAIIBjFQQgZAQgUAGQgSAGgQAAQgRAAgSgFgAAhAlIATCDIAYAIQANADANABQAMAAAOgDQAOgEAQgJIhdlAQgDgGgLgFQgJgFgOgDQgOgDgOAAQgQAAgOAEQgOADgKAHQgMAHgEAMIhNEwQAAADAGAEQAIADAKADQALADAOACQANABANAAQANgBAKgEQALgFAGgIIAOh8gAkSDEIgUgFQgJgDgJgFQgIgEgEgGIAAgsIgCAVIgBAUQgDAEgIAFQgIAFgMAEQgMAEgOADQgOADgMAAQgRAAgQgGQgQgFgOgPIgBlMQACgJAHgIQAHgIAKgEQAKgFAMgDQANgCAMAAQAMAAANACQAMADAKAFQALAEAIAIQAHAIAEAJIABBBIABglIAAgjQAFgIAHgGQAIgGAKgFQAKgEAKgCQAMgDAKAAQANAAANADQAMADAKAGQALAGAFAKQAGAJABANIgBCfIAAChQgOARgTAGQgVAGgSAAQgLAAgLgCgAkwA0IABBxQAEAEAOAEQANADAQABQAQAAAQgDQAOgEAIgJIAAk4QABgJgGgGQgHgGgJgDQgLgDgMgBQgMAAgKACQgLACgJAEQgJAEgEAFIgBCLIgqgBIgCiFQgCgHgJgEQgIgFgLgCQgMgDgNABQgMAAgMACQgKACgJAFQgHAEgCAHIACFBQAJAJAQACQAQACARgCQARgCAMgEQANgEADgDIAEhugAgGhJQAGgPAFgDQAHgDAGANQAGANAFAhIgtACQAFgYAFgQg");
	this.shape_2.setTransform(227,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("ACKDIQgVgCgNgHIgph/IgehaIgTg/IgLgoIgGgXIgBgNQAFgIAKgGQAKgGAMgEQAMgFANgCQANgCANAAQAOAAAPADQAOAEAMAHIAjB8IAOg9IAOg8QAJgHARgGQARgGASAAQAMAAAMADQANACAKAHQAKAGAIALQAHAKACAQIhOFLQgNAFgUAFQgVAEgXABIgRABQgNAAgOgCgABDivQgQABgOAFQgPAFgGAHIABACIAEALIAJAdIASA4IAdBcIArCLQAFADAKACIAWACIAZgBIAZgBIAVgDIAMgEIBLk8QgCgLgGgHQgHgGgJgEQgKgDgKgBQgLgBgKABQgJABgIADQgHACgEADIgvDEIg2jEQgIgFgQgCIgNAAIgRABgAhDDEIgmgLIgSh/IgGAAIgJAAIgFA0IgGA0IgDALQgLAPgTAGQgSAFgUAAQgRAAgQgEQgPgEgNgHQgNgGgHgIQgHgIABgHIBNkyQAFgNAKgJQAKgJAMgGQANgGAOgCQAOgDAOAAQAOAAAOADQAOACALAFQAMAEAIAHQAJAHAEAIIBiFQQgaAQgTAGQgSAGgPAAQgRAAgSgFgAhoAlIASCDIAZAIQANADANABQAMAAAOgDQANgEAQgJIhdlAQgDgGgKgFQgKgFgOgDQgNgDgQAAQgQAAgNAEQgOADgLAHQgLAHgFAMIhMEwQAAADAGAEQAHADALADQALADANACQAOABAMAAQANgBALgEQAKgFAHgIIANh8gAmcDEIgVgFQgJgDgJgFQgHgEgFgGIAAgsIgBAVIgBAUQgDAEgIAFQgJAFgMAEQgMAEgOADQgOADgLAAQgSAAgPgGQgRgFgNgPIgClMQADgJAGgIQAIgIAJgEQALgFAMgDQAMgCANAAQAMAAAMACQANADAKAFQAKAEAJAIQAHAIADAJIABBBIABglIAAgjQAFgIAIgGQAIgGAKgFQAJgEALgCQALgDAKAAQANAAANADQANADAKAGQAKAGAGAKQAGAJAAANIgBCfIAAChQgOARgTAGQgUAGgTAAQgKAAgLgCgAm7A0IACBxQAEAEANAEQAOADAQABQAQAAAPgDQAPgEAIgJIAAk4QAAgJgGgGQgHgGgJgDQgKgDgMgBQgMAAgLACQgLACgJAEQgJAEgDAFIgBCLIgqgBIgCiFQgCgHgJgEQgJgFgLgCQgLgDgNABQgNAAgLACQgLACgIAFQgHAEgCAHIACFBQAIAJARACQAQACAQgCQARgCANgEQANgEACgDIAFhugAFajFID0gDQAKAJAHAPQAGAOABAPQgBAKgCALQgCAKgFAJQgGAJgIAHQgIAHgMADIhfACIAAACIAeABIAdABQAGACAFAGQAFAGAEAIQAEAIADAJIABASQAAANgEANQgGANgLALIhEACIABAKIAAAPIA6AAIA4gBQANARAFAPQAFAPAAANQAAATgIAUQgKATgLANIjsAEgAFxivIAAFaIDLgDQAFgHAFgKQAEgKACgMQACgMgCgMQgCgNgJgMIh8ABIgChEIBSgCQAEgGACgJQABgKAAgKQgBgLgDgIQgDgIgEgCIhKgDIgEgtIB0gBQALgDAGgLQAGgLABgMQABgNgCgLQgDgLgFgEgAiQhJQAGgPAGgDQAHgDAFANQAHANAFAhIgvACQAFgYAGgQg");
	this.shape_3.setTransform(240.9,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("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");
	this.shape_4.setTransform(268.8,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3366").s().p("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");
	this.shape_5.setTransform(296,50.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3366").s().p("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");
	this.shape_6.setTransform(312.3,50.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3366").s().p("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");
	this.shape_7.setTransform(329.7,50.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3366").s().p("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QAUgDATgIQAYAMAJANQAJAOgCANQgCAMgKALQgLALgRAGQgQAFgUABQgUAAgUgIgAHHAlQgPADgMABIAAAoQAKACAKAAQALAAAKgCQAKgDAHgEQAHgEAFgFQAEgFAAgGQAAgFgFgGQgEgFgMgHQgMAEgOACgAMfBTQgNgCgGgOQgHgOAAgUQgBgTAEgVQADgWAIgSQAHgSAKgKQAKgLANADQAJADAFANQAGAOACATQABASgCAUQgCAVgGARQgHASgKAMQgKALgNAAIgBAAgAMrA3QAFgIAEgMQAEgNACgPIADgcQAAgOgBgLQgCgMgFgEQgEAAgFAIQgEAIgEANQgEAMgDAPQgCAPgBAOQgBAOACAKQACALAFADIgBAAQAGABAEgHgAXVhLQAGgQAGgDQAHgCAGANQAGANAFAgIgvACQAFgYAGgPgAhYhLQAGgQAGgDQAGgCAGANQAGANAGAgIgvACQAFgYAGgPgAy/hLQAGgQAGgDQAHgCAGANQAGANAFAgIgvACQAFgYAGgPgAQ3hiQAHgGALgDQALgCAMACQALACAJAGQAJAGABAKQgBANgHAGQgHAGgKADQgKADgMABIgWABgARNhZIAAATQAHACAGgBQAGgBAEgDQAEgCACgDQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgDgJgKgBIgCAAQgIAAgHADgAGWhiQAGgGALgDQAMgCALACQAMACAIAGQAJAGACAKQgBANgHAGQgHAGgKADQgKADgMABIgXABgAGrhZIAAATQAHACAGgBQAGgBAEgDQAFgCACgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQgDgJgJgBIgCAAQgJAAgHADg");
	this.shape_8.setTransform(347.9,50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3366").s().p("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");
	this.shape_9.setTransform(372.7,50.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3366").s().p("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");
	this.shape_10.setTransform(389.6,50.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3366").s().p("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");
	this.shape_11.setTransform(404.9,50.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF3366").s().p("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");
	this.shape_12.setTransform(411.9,49.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF3366").s().p("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");
	this.shape_13.setTransform(419.2,49.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,51,102,0.937)").s().p("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");
	this.shape_14.setTransform(419.2,49.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,51,102,0.875)").s().p("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");
	this.shape_15.setTransform(419.2,49.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,51,102,0.812)").s().p("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");
	this.shape_16.setTransform(419.2,49.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,51,102,0.749)").s().p("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");
	this.shape_17.setTransform(419.2,49.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,51,102,0.686)").s().p("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");
	this.shape_18.setTransform(419.2,49.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,51,102,0.624)").s().p("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");
	this.shape_19.setTransform(419.2,49.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,51,102,0.561)").s().p("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");
	this.shape_20.setTransform(419.2,49.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,51,102,0.502)").s().p("AFBDUQgagGgXgNIgDlRQAZgUAggLQAhgLAiAAQAaAAAYAGQAYAGAVAMQATANAPATQANASAFAaQgEAogEANQANAEAOAJQANAIAMAMQAKAMAGASQAIASgBAWQABALgDAOQgHAegWAXQgYAYggAPQggAQgmAIQgmAIgiAAQgdAAgcgHgAF1ijQgYACgWAIQgVAHgPANIADE5QARAKAaAEQAbAEAfgBQAegCAhgHQAfgHAagNQAbgNATgTQASgTAFgZQAEgfgHgVQgIgVgNgNQgOgMgSgGQgRgFgOAAQAGgGAEgIQAEgJADgJQACgJACgbQgEgXgOgPQgOgQgUgKQgVgJgXgEQgQgCgPAAIgSABgAlfDUQgbgGgWgNIgDlRQAYgUAhgLQAhgLAiAAQAZAAAYAGQAYAGAVAMQAUANAOATQANASAFAaQgDAogFANQANAEAOAJQAOAIALAMQALAMAGASQAHASAAAWQAAALgDAOQgGAegXAXQgXAYggAPQghAQglAIQgmAIgiAAQgdAAgcgHgAksijQgXACgWAIQgWAHgPANIAEE5QAQAKAaAEQAbAEAggBQAegCAggHQAggHAagNQAbgNASgTQATgTAEgZQAFgfgIgVQgHgVgOgNQgOgMgRgGQgRgFgPAAQAHgGADgIQAFgJACgJQADgJABgbQgEgXgOgPQgOgQgTgKQgVgJgYgEQgPgCgQAAIgSABgEAkCADUQgMgGgHgIQgIgJgEgMQgDgLgBgMQABgLADgLQASgcAMgGQALgFAQAAQAPAAAMAEQAMAFAHAJQAIAIADALQAEAKABAMQgBAMgEALQgEALgHAKQgIAJgLAGQgMAGgPABQgPAAgLgGgEAj4ACIQgEAJAAALQAAAKAFAJQAFAJAIAGQAJAHAMAAQAMgBAKgGQAJgHAFgJQAFgJAAgLQABgLgEgJQgFgJgJgGQgJgFgOAAQgOAAgWAWgEAhxADUQgMgGgHgIQgHgJgFgMQgDgLAAgMQAAgLADgLQATgcAMgGQALgFAPAAQAQAAAMAEQALAFAIAJQAHAIAEALQAEAKAAAMQAAAMgEALQgEALgIAKQgHAJgMAGQgMAGgOABQgQAAgLgGgEAhoACIQgFAJABALQAAAKAFAJQAEAJAIAGQAJAHANAAQAMgBAJgGQAJgHAGgJQAEgJABgLQABgLgFgJQgEgJgKgGQgIgFgOAAQgPAAgVAWgAdmDRQgUgIgVgTIACi2IgcghIgbgkIgcgkIgcgiQACgOAIgKQAfgYAOgDQAOgDAOABQANAAANAEQALADAJAHIA0BGIAUgmIASgkQAMgEAQgDQAQgDAOAAQAOAAANADQAOACAMAGQAMAGAKAIQAKAJAGANIhfCNIgBBbIgCBcQgNARgWAKQgWALgYAAQgSAAgVgIgAcViqQgKABgaANQgIAGgCALIBtCEIgBC0QAPAOARAFQARAFARgCQAQgBAOgHQANgHAIgJIADi1IBciJQgEgKgPgGQgOgFgRgBQgRgCgRACQgQACgIADIg0BiIhQhoIgPgBIgEAAIgPABgA5sDTQgVgCgNgHIgph/IgehaIgTg/IgLgoIgHgXIgBgNQAGgIAKgGQAjgPAMgCQANgCANAAQAOAAAPADQAOAEAMAHIAjB8IAOg9IAOg8QAJgHARgGQARgGASAAQAMAAAMADQANACAKAHQAKAGAIALQAHAKACAQIhOFLQgNAFgUAFQgVAEgXABIgRABQgNAAgOgCgA7RieQgPAFgGAHIABACIAEALIAJAdIASA4IAdBcIArCLQAFADAKACIAWACIAZgBIAZgBIAVgDIAMgEIBLk8QgCgLgGgHQgHgGgJgEQgKgDgKgBQgLgBgKABQgJABgIADQgHACgEADIgvDEIg2jEQgIgFgQgCIgFAAQgQAAgnAHgAabDPIgmgLIgSh/IgFAAIgJAAIgGA0IgFA0IgEALQgKAPgTAGQgSAFgUAAQgSAAgPgEQgQgEgMgHQgNgGgHgIQgIgIABgHIBNkyQAZgfANgGQANgGAOgCQANgDAPAAQANAAAPADQANACAMAFQAMAEAIAHQAJAHADAIIBjFQQgZAQgUAGQgSAGgPAAQgSAAgSgFgAZ3AwIASCDIAYAIQANADANABQANAAANgDQAOgEAQgJIhdlAQgEgGgJgFQgKgFgOgDQgOgDgPAAQgQAAgOAEQgOADgaAaIhNEwQAAADAGAEQAIADAKADQALADAOACQANABANAAQANgBAKgEQALgFAGgIIAOh8gANZDPIglgLIgSh/IgGAAIgJAAIgFA0IgGA0IgDALQgLAPgTAGQgSAFgUAAQgRAAgQgEQgPgEgNgHQgNgGgHgIQgHgIABgHIBNkyQAZgfAMgGQANgGAOgCQAOgDAOAAQAOAAAOADQAOACALAFQAMAEAIAHQAJAHAEAIIBjFQQgaAQgTAGQgTAGgPAAQgRAAgTgFgAM1AwIATCDIAYAIQANADANABQAMAAAOgDQAOgEAQgJIhelAQgDgGgKgFQgKgFgOgDQgNgDgQAAQgQAAgNAEQgOADgbAaIhMEwQAAADAGAEQAHADALADQALADANACQAOABAMAAQANgBALgEQAKgFAHgIIANh8gArUDPIgmgLIgSh/IgGAAIgIAAIgFA0IgGA0IgEALQgLAPgSAGQgSAFgVAAQgRAAgPgEQgQgEgNgHQgMgGgIgIQgHgIACgHIBMkyQAZgfANgGQANgGANgCQAOgDAPAAQANAAAOADQAOACAMAFQALAEAJAHQAJAHAEAIIBjFQQgbAQgSAGQgUAGgPAAQgQAAgTgFgAr5AwIATCDIAZAIQAMADANABQANAAAOgDQAOgEAQgJIhelAQgEgGgKgFQgKgFgOgDQgNgDgQAAQgPAAgNAEQgPADgbAaIhMEwQAAADAHAEQAGADAMADQAKADANACQAOABAMAAQAOgBAKgEQALgFAGgIIANh8gA86DPIgmgLIgSh/IgGAAIgJAAIgFA0IgGA0IgDALQgLAPgTAGQgSAFgUAAQgRAAgQgEQgPgEgNgHQgNgGgHgIQgHgIABgHIBNkyQAZgfAMgGQANgGAOgCQAOgDAOAAQAOAAAOADQAOACALAFQAMAEAIAHQAJAHAEAIIBjFQQgaAQgTAGQgTAGgPAAQgRAAgSgFgA9fAwIASCDIAZAIQANADANABQAMAAAOgDQAOgEAQgJIhelAQgDgGgKgFQgKgFgOgDQgNgDgQAAQgQAAgNAEQgOADgbAaIhMEwQAAADAGAEQAHADALADQALADANACQAOABAMAAQANgBALgEQAKgFAHgIIANh8gAAgDFQgcgPgSgZQgVgZgKgiQgMghAAgnQAAgvAPgoQAOgpAZgdQAYgcAhgQQAhgQAmAAQAhAAAaAOQAaAPARAYQAQAZAJAgQAIAgAAAjQAAAlgLAnQgKAngVAgQgVAgggAWQgfAVgqADQghAAgbgOgAA/ibQgeAOgWAaQgUAagNAlQgMAkAAAqQgBAiAKAeQAJAdAQAXQAQAWAXANQAYAMAcAAQAhgDAbgRQAbgQARgaQATgaALggQAKghACghQADgfgGggQgGgfgOgZQgOgYgWgPQgXgPgeAAQgiAAgcAPgEgiTADPIgVgFQgJgDgJgFQgHgEgFgGIAAgsIgBAVIgBAUQgDAEgIAFQgJAFgMAEQgMAEgOADQgOADgLAAQgSAAgPgGQgRgFgNgPIgClMQADgJAGgIQAIgIAJgEQALgFAMgDQAMgCANAAQAMAAAMACQANADAKAFQAKAEAJAIQAHAIADAJIABBBIABglIAAgjQAFgIAIgGQAIgGAKgFQAJgEALgCQALgDAKAAQANAAANADQANADAKAGQAKAGAGAKQAGAJAAANIgBCfIAAChQgOARgTAGQgUAGgTAAQgKAAgLgCgEgiyAA/IACBxQAEAEANAEQAOADAQABQAQAAAPgDQAPgEAIgJIAAk4QAAgJgGgGQgHgGgJgDQgKgDgMgBQgMAAgLACQgLACgJAEQgJAEgDAFIgBCLIgqgBIgCiFQgCgHgJgEQgJgFgLgCQgLgDgNABQgMAAgfAJQgHAEgCAHIACFBQAIAJARACQAQACAQgCQARgCANgEQANgEACgDIAFhugASbDIIgFlzQAWgIATgEQASgEAQAAQAaAAAbAHQAbAIAZAOQAZANAVAUQAWATAOAXQAQAYAIAbQAIAbgBAcQgCAhgLAbQgLAbgRAVQgRAUgWAPQgVAPgZAJQgZAKgZAEQgZAEgXAAQgaAAgmgIgASticIADFTQAWAEAZAAQAbgBAagGQAbgGAZgMQAZgMAUgUQAUgTANgbQANgbACgjQACgegLgcQgKgcgTgYQgTgXgagRQgZgSgdgJQgbgKgdAAIgGAAQgaAAgXAJgA2ci6ID0gDQAXAmABAPQgBAKgCALQgCAKgFAJQgGAJgIAHQgIAHgMADIhfACQAPACAPABIAdABQAGACAFAGQAFAGAEAIQAEAIADAJIABASQAAAMgEAOQgGANgLALIhEACIABAKIAAAPIA6AAIA4gBQANARAFAPQAFAPAAANQAAATgIAUQgKATgLANIjsAEgA2FikIAAFaIDLgDQAFgHAFgKQAEgKACgMQACgMgCgMQgCgNgJgMIh8ABIgChEIBSgCQAEgGACgKQABgJAAgKQAAgLgLgSIhKgDIgEgtIB0gBQALgDAGgLQAGgLABgMQABgNgKgagAFxBuIgChNQASAAAUgCQAUgCATgJQAYAMAKAOQAEAngKALQgLAKgRAGQgQAGgUAAQgUAAgTgIgAGGA2IAAApQAJABAKAAQALAAAKgCQAKgCAHgEQAHgEAFgGQAEgFAAgGQAAgFgEgFQgFgGgmAAQgPADgLAAgAkwBuIgBhNQARAAAVgCQATgCATgJQAZAMAJAOQAFAngLALQgKAKgRAGQgQAGgVAAQgTAAgUgIgAkbA2IAAApQAJABALAAQALAAAKgCQAJgCAIgEQAHgEAFgGQADgFAAgGQABgFgFgFQgEgGgnAAQgOADgMAAgABWBgQgMgBgHgPQgGgOgBgTQgBgUAFgWQADgVAIgSQAHgRAKgLQAggFAFAOQAGANACATQABATgCAUQgCAUgGASQgHASgKALQgKALgNAAIgCAAgABkgoQgFAIgKAnQgDAPAAAOQgBAOACALQACALAEADQAGABAEgIQAFgHAEgNQAEgMACgPIADgcQAAgPgBgLQgDgLgEgFQgEAAgFAJgAT/BgIAAieQAwAJAUAVQAUAWgEAgQgPArgLAKQgKAKgQAGQgMAFgPAAIgFAAgAUVBHQARgFALgPQAKgPADgRQABgSgJgNQgKgPgXgHgEAjeAA7IABjyQAGgRATgJQASgJAUAAQAUAAARAIQARAIAIAQIgCDwQgSAOgPAGQgRAGgPAAQgrgKgQgLgEAj0gC0IgBDlQAJAFAKADQALADALgBQAKAAALgEQAKgDAJgIIAEjhQgEgJgMgEQgNgDgOAAQgOAAgbARgEAhOAA7IABjyQAGgRASgJQATgJAUAAQAUAAAQAIQASAIAIAQIgDDwQgRAOgQAGQgQAGgQAAQgrgKgPgLgEAhkgC0IgBDlQAIAFAKADQALADALgBQAKAAALgEQALgDAJgIIADjhQgDgJgNgEQgNgDgNAAQgOAAgbARgAZOg+QATgVAGANQAGANAFAhIguACQAFgYAFgQgAMNg+QASgVAGANQAHANAFAhIgvACQAFgYAGgQgAsgg+QASgVAGANQAGANAGAhIgwACQAFgYAHgQgA+Hg+QASgVAGANQAHANAFAhIgvACQAFgYAGgQgAFvhUQAHgHAKgCQAjACAIAGQAKAGABAKQgBANgHAGQgHAGgKADQgKADgMAAIgWABgAGFhLIAAASQAGADAGgCQAHgBAKgHQACgDgOgMIgCAAQgIAAgHAEgAkxhUQAGgHALgCQAjACAIAGQAJAGACAKQgCANgGAGQgHAGgKADQgLADgMAAIgWABgAkchLIAAASQAHADAGgCQAGgBAKgHQACgDgOgMIgCAAQgIAAgHAEg");
	this.shape_21.setTransform(419.2,49.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,51,102,0.439)").s().p("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");
	this.shape_22.setTransform(419.2,49.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,51,102,0.376)").s().p("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");
	this.shape_23.setTransform(419.2,49.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,51,102,0.314)").s().p("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");
	this.shape_24.setTransform(419.2,49.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,51,102,0.251)").s().p("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");
	this.shape_25.setTransform(419.2,49.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,51,102,0.188)").s().p("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");
	this.shape_26.setTransform(419.2,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,51,102,0.125)").s().p("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");
	this.shape_27.setTransform(419.2,49.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,51,102,0.063)").s().p("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");
	this.shape_28.setTransform(419.2,49.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,51,102,0)").s().p("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");
	this.shape_29.setTransform(419.2,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},42).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// letters solid
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("AhiDIQgMgBgLgDQgLgEgGgHIgClnQACgIAJgFQAIgFANgCQAMgDAPAAQAOAAANADQANACAJAFQAJAFADAIIADCVIAtABIACibQAEgGAKgFQAKgFAMgCQAMgCAOABQANAAALAEQALADAHAHQAHAGAAAKIgBFfQgIAJgRAEQgRAEgSAAQgRgBgQgDQgPgEgFgFIgBh+IgrAAIgFB7QgCACgHADIgTAFIgXAFIgTABIgGAAg");
	this.shape_30.setTransform(196.2,47.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhiDIQgMgBgLgDQgLgEgGgHIgClnQACgIAJgFQAIgFANgCQAMgDAPAAQAOAAANADQANACAJAFQAJAFADAIIADCVIAtABIACibQAEgGAKgFQAKgFAMgCQAMgCAOABQANAAALAEQALADAHAHQAHAGAAAKIgBFfQgIAJgRAEQgRAEgSAAQgRgBgQgDQgPgEgFgFIgBh+IgrAAIgFB7QgCACgHADIgTAFIgXAFIgTABIgGAAg");
	this.shape_31.setTransform(196.2,47.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("ABsDJQgOgBgOgEIgbgIIgViTIg7gCIgPCMQgGAJgMAFQgNAEgOABQgPABgPgBIgbgFQgMgEgHgEQgIgEAAgDIBWlWQAFgNANgIQAMgHAQgEQAPgEASAAQAQAAAPADQAPADAMAGQALAFADAIIBqFmQgSAKgPAEQgOAEgOAAIgDAAgAABhnQgHADgGASQgHARgFAbIAzgCQgGglgHgOQgFgMgGAAIgCAAg");
	this.shape_32.setTransform(229.7,47.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AgJDIIgZgCQgLgCgFgEIgmh5IgdhaIgUhCIgOgsIgJgaIgFgOIgBgGIAAgBQAGgIAQgFQAQgGASgCQASgCARACQAQABAKAGIA8DcIA1jcQADgDAJgDQAIgCALgBQALgBAMABQAMAAALAEQAKAEAHAHQAIAIABALIhTFjQgEACgLACIgXAEIgcACIgSABIgJgBg");
	this.shape_33.setTransform(259.2,47.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AEFDJQgOAAgOgEIgcgJIgViSIg7gCIgQCLQgFAJgNAFQgMAFgPABQgPABgOgCIgbgFQgLgDgIgEQgIgEABgEIBUlWQAFgMANgIQANgIAPgEQAPgDASAAQARAAAQADQAPADALAFQALAGADAHIBqFmQgRALgQAEQgOADgNAAIgDAAgACZhmQgHACgHASQgHASgFAaIA1gCQgHgkgHgPQgFgMgGAAIgCABgAkaDGQgLgBgLgDQgLgEgHgHIgBlnQACgIAIgFQAJgFAMgCQANgDAOAAQAPAAAMADQANACAKAFQAJAFADAIIACCVIAvABIACibQAEgGAKgFQAKgFAMgCQAMgCAOABQANAAALAEQALADAHAHQAHAGgBAKIAAFfQgJAJgQAEQgRAEgSAAQgRgBgQgDQgPgEgFgFIgCh+IgsAAIgEB7QgCACgHADIgTAFIgYAFIgSABIgHAAg");
	this.shape_34.setTransform(214.5,47.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("Ah8jAIDvgDQAFAEADANQADAMgBAOQgCAOgHAMQgGAMgNAEIiBACIAFAyIBSACQAFACADAKQADAJABAMQABAMgCALQgCAKgFAGIhbADIACBMICKgBQAKANADAOQACAPgCANQgCANgFALQgFAMgGAHIjjAEg");
	this.shape_35.setTransform(290.4,47.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AB0DJQgOAAgOgEIgcgJIgViSIg6gCIgQCLQgFAJgNAFQgMAFgPABQgPABgOgCIgbgFQgMgDgIgEQgIgEABgEIBVlWQAFgMANgIQANgIAPgEQAPgDARAAQARAAAQADQAPADALAFQALAGADAHIBqFmQgRALgQAEQgOADgNAAIgDAAgAAIhmQgHACgGASQgHASgFAaIA0gCQgHgkgHgPQgFgMgGAAIgCABgAEjDIIgYgCQgLgCgFgEIgmh5IgdhaIgVhCIgNgsIgJgaIgFgOIgBgGIAAgBQAGgIAQgFQAQgGARgCQASgCASACQAQABAKAGIA9DcIA1jcQADgDAJgDQAIgCALgBQALgBAMABQAMAAAKAEQALAEAHAHQAHAIACALIhTFjQgFACgKACIgXAEIgcACIgTABIgKgBgAmrDGQgLgBgLgDQgLgEgHgHIgBlnQACgIAIgFQAJgFAMgCQANgDAOAAQAPAAAMADQANACAKAFQAJAFADAIIACCVIAvABIACibQAEgGAKgFQAKgFAMgCQAMgCAOABQANAAALAEQALADAHAHQAHAGgBAKIAAFfQgJAJgQAEQgRAEgSAAQgRgBgQgDQgPgEgFgFIgCh+IgsAAIgEB7QgCACgHADIgTAFIgYAFIgSABIgHAAg");
	this.shape_36.setTransform(229,47.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTDJQgOAAgOgEIgbgJIgViSIg8gCIgPCLQgGAJgMAFQgNAFgOABQgPABgPgCIgbgFQgMgDgHgEQgIgEAAgEIBWlWQAFgMANgIQAMgIAQgEQAPgDASAAQARAAAPADQAPADAMAFQALAGADAHIBpFmQgSALgPAEQgNADgNAAIgEAAgAh+hmQgIACgGASQgHASgFAaIA0gCQgGgkgHgPQgFgMgGAAIgCABgACcDIIgYgCQgLgCgGgEIgmh5IgchaIgVhCIgOgsIgIgaIgFgOIgBgGIAAgBQAGgIAQgFQAQgGARgCQASgCARACQARABAJAGIA9DcIA1jcQAEgDAIgDQAJgCALgBQALgBAMABQAMAAAKAEQAKAEAIAHQAHAIACALIhTFjQgFACgKACIgYAEIgbACIgUABIgJgBgAoyDGQgMgBgKgDQgLgEgHgHIgBlnQACgIAIgFQAJgFAMgCQANgDAOAAQAPAAAMADQANACAJAFQAKAFADAIIACCVIAvABIACibQAEgGAKgFQAJgFAMgCQANgCANABQAOAAALAEQALADAHAHQAHAGgBAKIAAFfQgJAJgQAEQgRAEgSAAQgSgBgPgDQgPgEgFgFIgCh+IgsAAIgFB7QgBACgIADIgSAFIgYAFIgSABIgHAAgAFijFIDwgDQAFAFADAMQADANgBAOQgCANgHANQgGAMgNADIiCACIAFAzIBTACQAFACADAJQADAKABAMQABALgCAMQgCAKgFAGIhcADIACBLICLgBQAKAOADAOQACAOgCAOQgCANgFALQgFALgGAIIjkAEg");
	this.shape_37.setTransform(242.5,47.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AM1DJQgOAAgOgEIgbgJIgViSIg8gCIgOCLQgHAJgMAFQgNAFgOABQgPABgPgCIgbgFQgMgDgHgEQgIgEAAgEIBWlWQAGgMAMgIQAMgIAQgEQAQgDARAAQARAAAPADQAPADAMAFQALAGAEAHIBpFmQgSALgPAEQgOADgNAAIgEAAgALKhmQgIACgGASQgGASgGAaIA0gCQgFgkgHgPQgGgMgGAAIgCABgAkrDJQgOAAgOgEIgcgJIgViSIg7gCIgQCLQgFAJgNAFQgMAFgPABQgPABgOgCIgbgFQgMgDgIgEQgIgEABgEIBVlWQAFgMANgIQANgIAPgEQAPgDASAAQARAAAQADQAPADALAFQALAGADAHIBqFmQgRALgQAEQgOADgNAAIgDAAgAmXhmQgHACgHASQgHASgFAaIA1gCQgHgkgHgPQgFgMgGAAIgCABgAh8DIIgYgCQgLgCgFgEIgmh5IgdhaIgVhCIgNgsIgJgaIgFgOIgBgGIAAgBQAGgIAQgFQAQgGARgCQASgCASACQAQABAKAGIA9DcIA1jcQADgDAJgDQAIgCALgBQALgBALABQAMAAAKAEQALAEAHAHQAHAIACALIhSFjQgFACgKACIgXAEIgcACIgTABIgKgBgAtLDGQgLgBgLgDQgLgEgHgHIgBlnQACgIAIgFQAJgFAMgCQANgDAOAAQAPAAAMADQANACAKAFQAJAFADAIIACCVIAvABIACibQAEgGAKgFQAKgFAMgCQAMgCAOABQANAAALAEQALADAHAHQAHAGgBAKIAAFfQgJAJgQAEQgRAEgSAAQgRgBgQgDQgPgEgFgFIgCh+IgsAAIgEB7QgCACgHADIgTAFIgYAFIgSABIgHAAgABJjFIDwgDQAGAFADAMQACANgBAOQgCANgHANQgGAMgNADIiCACIAFAzIBTACQAFACADAJQADAKACAMQAAALgCAMQgCAKgFAGIhbADIACBLICKgBQALAOACAOQACAOgBAOQgDANgEALQgGALgFAIIjlAEg");
	this.shape_38.setTransform(270.6,47.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("AhwDHQgegEgSgLIgElgQARgNAYgJQAYgIAbgDQAbgCAbAEQAbAEAWAKQAXALAQARQAPASAEAaIgBATIgDAVQgDALgFAJQgEAJgHAHQAQAAATAGQAUAHAPAOQAQANAIAYQAJAYgGAiQgEAcgVAVQgVAVgeAPQgeAOgkAJQgiAIgjABIgRABQgZAAgWgEgAhNBpQAWAKAWAAQAXAAARgHQASgHANgMQAMgMACgOQADgOgLgQQgKgPgbgNQgVAKgWACQgWACgVAAgAg7h6QgNACgHAIIACA1IAagCQANAAALgDQALgDAIgHQAIgHAAgOQgBgMgKgHQgJgHgNgCIgMgBQgHAAgHACg");
	this.shape_39.setTransform(397.3,48.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC00").s().p("AhEC7QgagOgTgZQgTgYgKgiQgLghAAgmQAAgwAPgoQAOgpAYgdQAZgdAggQQAhgRAkAAQAjAAAZARQAZAQAPAbQAQAcAHAjQAHAkgDAkQgDAkgMAkQgLAlgVAdQgVAdgdATQgeATglADQgfAAgagPgAgHhPQgKANgIAUQgIAVgFAYQgEAYAAAVQABAVAGAQQAGAPAOACQAPAAALgNQAMgNAHgTQAGgUADgYQACgXgBgUQgCgVgGgPQgHgPgKgEIgEAAQgKAAgIAKg");
	this.shape_40.setTransform(431,47.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ANwDJQgegEgSgLIgElgQARgNAYgJQAYgIAbgDQAbgCAbAEQAcAEAWAKQAXALAQARQAPASAEAaIgBATIgDAVQgDALgFAJQgEAJgHAHQAQAAATAGQAUAHAPAOQAQANAIAYQAJAYgGAiQgEAcgVAVQgVAVgeAPQgeAOgkAJQgjAIgjABIgRABQgZAAgWgEgAOTBrQAWAKAWAAQAXAAASgHQASgHANgMQAMgMACgOQADgOgLgQQgKgPgbgNQgWAKgWACQgWACgVAAgAOlh4QgNACgHAIIACA1IAagCQANAAALgDQALgDAIgHQAIgHABgOQgCgMgKgHQgJgHgNgCIgMgBQgHAAgHACgAIkDGQgOgBgOgEIgcgIIgViTIg7gCIgPCMQgGAJgNAFQgMAEgPABQgOABgPgBIgbgFQgMgEgIgEQgIgEABgDIBVlWQAGgNAMgIQANgHAPgEQAQgEARAAQASAAAPADQAPADALAGQALAFAEAIIBpFmQgRAKgQAEQgOAEgNAAIgDAAgAG4hqQgHADgHASQgGARgGAbIA1gCQgGglgHgOQgFgMgGAAIgDAAgAo9DGQgOgBgOgEIgcgIIgViTIg7gCIgPCMQgGAJgNAFQgMAEgPABQgOABgPgBIgbgFQgMgEgIgEQgIgEABgDIBVlWQAGgNAMgIQANgHAPgEQAQgEARAAQASAAAPADQAPADALAGQALAFAEAIIBpFmQgRAKgQAEQgOAEgNAAIgDAAgAqphqQgHADgHASQgGARgGAbIA1gCQgGglgHgOQgFgMgGAAIgDAAgAmNDFIgZgCQgLgCgFgEIgmh5IgdhbIgUhBIgOgsIgJgbIgFgOIgBgFIAAgBQAGgJAQgFQAQgFASgCQASgCARABQAQACAKAGIA9DcIA1jcQADgDAJgDQAIgDALgBQALgBAMABQAMABALAEQAKAEAHAHQAIAHABAMIhTFjQgEACgLACIgXADIgcACIgTABIgJAAgAxcDCQgMAAgLgEQgLgDgGgHIgCloQACgHAJgFQAIgFANgDQAMgDAPAAQAOAAANADQANADAJAFQAJAFADAIIADCUIAuABIACibQAEgGAKgFQAKgEAMgCQAMgDAOABQANABALADQALAEAHAGQAHAHAAAKIgBFeQgIAKgRAEQgRAEgSgBQgRAAgQgEQgPgEgFgFIgBh+IgsAAIgFB7QgCACgHADIgTAGIgXAEIgTACIgGgBgAjIjIIDvgDQAGAEADANQACAMgBAOQgBAOgHAMQgHAMgNAEIiBACIAFAyIBTACQAFACAEAKQADAJABAMQAAAMgCALQgCAKgFAGIhbADIACBMICKgBQAKANACAOQADAPgCANQgCANgFALQgGAMgFAHIjkAEg");
	this.shape_41.setTransform(298,48.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ALNDLQgegFgSgLIgElfQARgOAYgIQAZgIAbgDQAbgDAbAEQAbAEAXALQAWAKAQASQAQASAEAaIgBATIgEAVQgCAKgFAKQgFAJgHAGQARAAATAHQATAGAQAOQAPAOAJAXQAIAYgFAiQgFAcgVAVQgUAWgeAOQgeAPgkAIQgkAIgiACIgRAAQgZAAgXgDgALwBtQAWAJAXAAQAWAAATgHQASgHAMgLQANgMACgPQACgOgKgPQgLgQgbgNQgVAKgWACQgXADgUgBgAMCh3QgMADgHAHIABA1IAagBQANgBAMgDQALgDAHgHQAIgHABgOQgBgLgKgHQgKgHgNgCIgMgCQgHAAgHACgAGBDHQgOAAgOgEIgbgJIgViSIg8gCIgPCLQgGAJgMAFQgNAFgOABQgPABgPgCIgbgFQgMgDgHgEQgIgEAAgEIBWlWQAFgMANgIQAMgIAQgEQAPgDASAAQARAAAPADQAPADAMAFQALAGADAHIBqFmQgSALgPAEQgPADgNAAIgDAAgAEWhoQgIACgGASQgHASgFAaIA0gCQgGgkgHgPQgFgMgGAAIgCABgArgDHQgOAAgOgEIgbgJIgViSIg8gCIgPCLQgGAJgMAFQgNAFgOABQgPABgPgCIgbgFQgMgDgHgEQgIgEAAgEIBWlWQAFgMANgIQAMgIAQgEQAPgDASAAQARAAAPADQAPADAMAFQALAGADAHIBqFmQgSALgPAEQgPADgNAAIgDAAgAtLhoQgIACgGASQgHASgFAaIA0gCQgGgkgHgPQgFgMgGAAIgCABgAowDGIgYgCQgLgCgGgEIgmh5IgchaIgVhCIgOgsIgIgaIgFgOIgCgGIAAgBQAHgIAQgFQAQgGARgCQASgCARACQARABAJAGIA9DcIA1jcQAEgDAIgDQAJgCALgBQALgBAMABQAMAAAKAEQAKAEAIAHQAHAIACALIhTFjQgFACgKACIgYAEIgbACIgUAAIgJAAgARLC3QgagOgTgZQgTgYgKgiQgLghAAgmQAAgwAPgoQAOgpAYgdQAZgdAggQQAhgRAlAAQAjAAAZARQAZAQAPAbQAQAcAHAjQAHAkgDAkQgDAkgMAkQgLAlgVAdQgVAdgdATQgeATgmADQgfAAgagPgASIhTQgKANgIAUQgIAVgFAYQgEAYAAAVQABAVAGAQQAGAPAOACQAQAAALgNQAMgNAHgTQAGgUADgYQACgXgBgUQgCgVgGgPQgHgPgKgEIgEAAQgKAAgJAKgAz/DEQgMgBgKgDQgLgEgHgHIgBlnQACgIAIgFQAJgFAMgCQANgDAOAAQAPAAAMADQANACAJAFQAKAFADAIIACCVIAvABIACibQAEgGAKgFQAJgFAMgCQANgCANABQAOAAALAEQALADAHAHQAHAGgBAKIAAFfQgJAJgQAEQgRAEgSAAQgSgBgPgDQgPgEgFgFIgCh+IgsAAIgFB7QgBACgIADIgSAFIgYAFIgTABIgGAAgAlqjHIDwgDQAFAFADAMQADANgBAOQgCANgHANQgGAMgNADIiCACIAFAzIBTACQAFACADAJQADAKABAMQABALgCAMQgCAKgFAGIhcADIACBLICLgBQAKAOADAOQACAOgCAOQgCANgFALQgFALgGAIIjkAEg");
	this.shape_42.setTransform(314.2,48);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("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");
	this.shape_43.setTransform(331.6,48);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("AiGDBIgEl7QAdgMAhABQAgABAgALQAfAKAcAUQAcATAWAaQAVAaAMAgQALAfgCAiQgCAngPAfQgOAegWAWQgXAVgcAOQgcAOgdAGQgeAHgdABIgFAAQgaAAgWgFgAgtBgQAUABAQgGQAQgHAMgLQAMgMAIgQQAHgPACgRQAEgkgWgYQgWgZg1gJg");
	this.shape_44.setTransform(553,47.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("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");
	this.shape_45.setTransform(349.7,48);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("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");
	this.shape_46.setTransform(374.5,48);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("AgVDJQgUgFgRgQIACjJIh7iVQADgMAJgHQAJgHALgDQALgDANgBQAMgBAKABIARADQAHABABABIBMBuIA5huQALgEASgCQASgCATACQATACAQAGQAQAGAGAMIhoCZIgDDKQgJALgPAIQgPAHgSACIgKABQgNAAgOgFg");
	this.shape_47.setTransform(612.8,48);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("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");
	this.shape_48.setTransform(391.4,48);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("AgaDIQgJgHgGgLQgFgKAAgMQgBgNAFgKQAFgLAKgHQAKgIARAAQAPAAALAHQAKAHAFAKQAEALAAAMQgBAMgFALQgGALgKAHQgLAIgNAAQgPAAgKgHgAgaBZQgMgDgKgGIACkKQACgKAOgFQAOgFAQAAQAQAAAOAEQAPAFAEAKIgEEGQgKAIgNAEQgMAFgLAAQgNAAgMgDg");
	this.shape_49.setTransform(638.5,47.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("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AMADQANADAKAFQAJAFADAIIACCUIAvABIACibQAEgGAKgFQAKgEAMgCQAMgDAOABQANABALADQALAEAHAGQAHAHgBAKIAAFeQgJAKgQAEQgRAEgSgBQgRAAgQgEQgPgEgFgFIgCh+IgsAAIgEB7QgCACgHADIgTAGIgYAEIgSABIgHAAgASxDAIgFl8QAegLAgABQAhAAAfALQAhALAbATQAdAUAWAaQAUAaAMAfQAMAggCAhQgCAogPAeQgOAegXAWQgWAWgcANQgdAOgdAHQgeAHgdAAIgFAAQgaAAgWgEgAUKBeQATACARgHQARgGAMgMQAMgLAHgQQAIgQABgRQAEgjgWgZQgVgYg2gJgA2GjFIDwgDQAGAEADANQACAMgBAOQgCAOgHAMQgGAMgNAEIiCACIAFAyIBTACQAFACADAKQADAJACAMQAAAMgCALQgCAKgFAGIhbADIACBMICKgBQALANACAOQACAPgBANQgDANgEALQgGAMgFAHIjlAEgEAj5ABZQgNgEgJgGIABkKQAEgJANgFQAOgFARAAQAQgBAOAFQAOAEAFAKIgEEGQgKAJgNAEQgMAEgNABQgMAAgMgDg");
	this.shape_50.setTransform(419.4,47.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("AgZDIQgLgHgFgLQgFgKgBgMQAAgNAFgKQAFgLAKgHQAKgIARAAQAPAAALAHQAKAHAFAKQAEALAAAMQgBAMgFALQgFALgLAHQgKAIgPAAQgOAAgJgHgAgaBZQgNgDgJgGIABkKQAEgKANgFQAOgFAQAAQAQAAAOAEQAOAFAFAKIgEEGQgKAIgNAEQgMAFgMAAQgMAAgMgDg");
	this.shape_51.setTransform(651.8,47.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("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ANADQANADAJAFQAJAFAEAIIACCUIAuABIACibQAFgGAKgFQAJgEAMgCQANgDANABQAOABALADQAKAEAIAGQAGAHAAAKIAAFeQgJAKgQAEQgRAEgSgBQgSAAgQgEQgPgEgFgFIgBh+IgsAAIgFB7QgCACgHADIgTAGIgXAEIgTABIgGAAgATzDAIgEl8QAegLAgABQAhAAAfALQAgALAcATQAcAUAWAaQAVAaAMAfQALAggBAhQgDAogOAeQgOAegXAWQgWAWgdANQgcAOgdAHQgfAHgdAAIgFAAQgaAAgWgEgAVMBeQAUACAQgHQARgGANgMQALgLAIgQQAIgQABgRQAEgjgWgZQgWgYg2gJgA1DjFIDvgDQAGAEADANQADAMgBAOQgCAOgHAMQgGAMgOAEIiBACIAFAyIBTACQAEACAEAKQADAJABAMQABAMgDALQgBAKgGAGIhbADIACBMICLgBQAKANACAOQADAPgCANQgCANgFALQgGAMgFAHIjkAEgEAi2ABZQgMgEgKgGIACkKQADgJANgFQAPgFAQAAQAQgBAPAFQAOAEAFAKIgFEGQgJAJgNAEQgMAEgNABQgNAAgMgDg");
	this.shape_52.setTransform(412.8,47.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("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");
	this.shape_53.setTransform(419.4,47.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.937)").s().p("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");
	this.shape_54.setTransform(419.4,47.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.875)").s().p("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");
	this.shape_55.setTransform(419.4,47.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.812)").s().p("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");
	this.shape_56.setTransform(419.4,47.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.749)").s().p("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");
	this.shape_57.setTransform(419.4,47.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.686)").s().p("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");
	this.shape_58.setTransform(419.4,47.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.624)").s().p("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");
	this.shape_59.setTransform(419.4,47.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.561)").s().p("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");
	this.shape_60.setTransform(419.4,47.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.502)").s().p("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");
	this.shape_61.setTransform(419.4,47.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.439)").s().p("AFTDMQgegEgSgLIgElgQARgNAYgJQAZgIAbgDQAbgCAbAEQAbAEAWAKQAXALAQARQAPASAFAaQgDAegCAKQgDALgFAJQgEAJgHAHQARAAASAGQAUAHAQAOQAPANAJAYQAIAYgFAiQgFAcgVAVQgUAVgfAPQgdAOglAJQgjAIgjABIgQAAQgZAAgXgDgAF2BuQAWAKAWAAQAXAAATgHQASgHAMgMQAMgMgFgsQgLgPgbgNQgWAKgVACQgXACgUAAgAF1hrIABA1IAagCQANAAAMgDQAKgDAIgHQAIgHABgOQgCgMgKgHQgJgHgngBQgNACgGAIgAlODMQgegEgSgLIgDlgQAQgNAYgJQAZgIAbgDQAbgCAbAEQAbAEAXAKQAWALARARQAPASAEAaQgCAegDAKQgCALgFAJQgEAJgIAHQARAAATAGQATAHAQAOQAQANAIAYQAJAYgGAiQgFAcgVAVQgUAVgeAPQgeAOgkAJQgjAIgjABIgRAAQgZAAgXgDgAkrBuQAXAKAWAAQAWAAATgHQASgHAMgMQANgMgGgsQgKgPgbgNQgWAKgWACQgWACgVAAgAkshrIABA1IAagCQANAAAMgDQALgDAIgHQAHgHACgOQgCgMgKgHQgKgHgngBQgMACgHAIgEAj6ADHQgLgHgFgKQgFgLgBgMQAAgMAFgLQAZgZARgBQAQAAALAHQAKAHAFALQAEAKAAAMQgBANgFALQgFAKgLAIQgKAHgQABQgOAAgJgIgEAh0ADHQgJgHgGgKQgFgLAAgMQgBgMAFgLQAZgZARgBQAQAAALAHQAKAHAFALQAEAKAAAMQgBANgFALQgGAKgKAIQgLAHgOABQgPAAgKgIgAd4DKQgUgFgQgQIABjJIh7iVQAEgMAIgHQAggNAMgBQAMgBAKABIARADIBVBwIA6huQAKgEATgCQARgCATACQAUACAPAGQAQAGAGAMIhnCZIgDDKQgKALgOAIQgPAHgTACIgKAAQgOAAgOgEgAbWDJQgOgBgOgEIgcgIIgViTIg7gCIgQCMQgGAJgMAFQgMAEgPABQgPABgOgBIgbgFQgMgEgIgEQgIgEABgDIBVlWQAfgcAPgEQAPgEASAAQASAAAPADQAOADAMAGQALAFADAIIBqFmQgRAKgQAEQgOAEgNAAIgDAAgAZchSQgHARgFAbIA1gCQgHglgHgOQgCgGgFAAQgHAAgNAPgAOUDJQgOgBgOgEIgcgIIgUiTIg8gCIgPCMQgGAJgNAFQgMAEgPABQgOABgPgBIgbgFQgMgEgIgEQgIgEABgDIBWlWQAegcAQgEQAPgEARAAQASAAAPADQAPADAMAGQALAFADAIIBpFmQgRAKgPAEQgPAEgNAAIgDAAgAMbhSQgHARgGAbIA1gCQgGglgHgOQgCgGgFAAQgIAAgMAPgAqaDJQgOgBgOgEIgbgIIgViTIg8gCIgOCMQgHAJgMAFQgNAEgOABQgPABgPgBIgbgFQgMgEgHgEQgIgEAAgDIBWlWQAfgcAPgEQAQgEARAAQARAAAPADQAPADAMAGQALAFAEAIIBpFmQgSAKgPAEQgOAEgNAAIgEAAgAsThSQgGARgGAbIA0gCQgFglgHgOQgDgGgFAAQgHAAgNAPgA77DJQgOgBgOgEIgcgIIgViTIg7gCIgQCMQgFAJgNAFQgMAEgPABQgPABgOgBIgbgFQgMgEgIgEQgIgEABgDIBVlWQAfgcAPgEQAPgEASAAQARAAAQADQAPADALAGQALAFADAIIBqFmQgRAKgQAEQgOAEgNAAIgDAAgA91hSQgHARgFAbIA1gCQgHglgHgOQgCgGgFAAQgHAAgNAPgA5MDIIgYgCQgLgCgFgEIgmh5IgdhbIgVhBIgNgsIgJgbIgFgOIgBgFIAAgBQAGgJAQgFQAQgFARgCQASgCASABIBXDkIA1jcQADgDAJgDQAIgDALgBQALgBAMABQAMABAKAEQALAEAHAHQAHAHACAMIhTFjQgFACgKACIgXADIgcACIgTABIgKAAgAAvC5QgagPgSgYQgTgZgKghQgLghAAgmQAAgwAPgpQAOgoAXgeQAZgdAhgQQAhgQAkAAQAjAAAZAQQAZARAPAbQARAbAGAkQAHAjgDAlQgCAkgMAkQgMAkgVAdQgVAdgdATQgdATgnADQgfAAgagOgABthRQgLANgIAUQgIAUgFAZQgEAXABAWQAAAVAGAPQAHAQANABQAQABAMgNQALgNAHgUQAHgUACgXQACgXgBgVQgCgVgGgPQgFgKgRAAQgIAAgJACgEgkbADFQgLAAgLgEQgLgDgHgHIgBloQACgHAIgFQAJgFAMgDQANgDAOAAQAPAAAMADQANADAKAFQAJAFADAIIACCUIAvABIACibQAEgGAKgFQAKgEAMgCQAMgDAOABQANABALADQALAEAHAGQAHAHgBAKIAAFeQgJAKgQAEQgRAEgSgBQgRAAgQgEQgPgEgFgFIgCh+IgsAAIgEB7QgCACgHADIgTAGIgYAEIgSABIgHAAgASxDAIgFl8QAegLAgABQAhAAAfALQAhALAbATQAdAUAWAaQAUAaAMAfQAMAggCAhQgCAogPAeQgOAegXAWQgWAWgcANQgdAOgdAHQgeAHgdAAIgFAAQgaAAgWgEgAUKBeQATACARgHQARgGAMgMQAMgLAHgQQAIgQABgRQAEgjgWgZQgVgYg2gJgA2GjFIDwgDQALAdgBAOQgCAOgHAMQgGAMgNAEIiCACIAFAyIBTACQAFACADAKQADAJACAMQAAAMgCALQgCAKgFAGIhbADIACBMICKgBQALANACAOQACAPgBANQgDANgEALQgGAMgFAHIjlAEgEAj5ABZQgNgEgJgGIABkKQAfgTARAAQAQgBAOAFQAOAEAFAKIgEEGQgKAJgNAEQgMAEgNABQgMAAgMgDgEAh0ABZQgMgEgKgGIACkKQAegTARAAQAQgBAOAFQAPAEAEAKIgEEGQgKAJgNAEQgMAEgMABQgNAAgMgDg");
	this.shape_62.setTransform(419.4,47.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.376)").s().p("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");
	this.shape_63.setTransform(419.4,47.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.314)").s().p("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");
	this.shape_64.setTransform(419.4,47.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.251)").s().p("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");
	this.shape_65.setTransform(419.4,47.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.188)").s().p("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");
	this.shape_66.setTransform(419.4,47.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.125)").s().p("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");
	this.shape_67.setTransform(419.4,47.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.063)").s().p("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");
	this.shape_68.setTransform(419.4,47.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0)").s().p("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");
	this.shape_69.setTransform(419.4,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},23).to({state:[{t:this.shape_32,p:{x:229.7}},{t:this.shape_31}]},4).to({state:[{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_36},{t:this.shape_35}]},4).to({state:[{t:this.shape_37}]},3).to({state:[{t:this.shape_37},{t:this.shape_32,p:{x:341.9}}]},1).to({state:[{t:this.shape_38}]},4).to({state:[{t:this.shape_38},{t:this.shape_39,p:{x:397.3}}]},2).to({state:[{t:this.shape_41},{t:this.shape_40}]},4).to({state:[{t:this.shape_42},{t:this.shape_39,p:{x:464.6}}]},4).to({state:[{t:this.shape_43},{t:this.shape_32,p:{x:500.2}}]},4).to({state:[{t:this.shape_45},{t:this.shape_44}]},4).to({state:[{t:this.shape_46},{t:this.shape_32,p:{x:583.5}}]},4).to({state:[{t:this.shape_48},{t:this.shape_47}]},2).to({state:[{t:this.shape_50},{t:this.shape_49}]},4).to({state:[{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},23).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-7,808,104.5);


(lib.PointerEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eyeemoticon();
	this.instance.parent = this;
	this.instance.setTransform(0.4,38.8,0.601,0.592,0,0,0,0.5,17.2);

	this.instance_1 = new lib.pointer("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,34.7,0.643,0.641,0,0,0,0,54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PointerEye, new cjs.Rectangle(-23.5,-1.2,47,70), null);


(lib.link7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(605.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHAPIAAgdIAKAAIAAAdgAgPAPIAAgdIAJAAIAAAdg");
	this.shape_1.setTransform(600.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_2.setTransform(594.1,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTApIgBAAIAAAKIgLAAIAAhmIALAAIAAAtIABAAQAHgOAQAAQANAAAIAKQAHAJAAAPQAAARgIALQgJALgPAAQgMAAgHgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_3.setTransform(587.1,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAbQgKgKABgQQgBgRAKgJQAKgLAPAAQAQAAAIAKQAKAKgBAQQAAARgJAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgJAAgGAHg");
	this.shape_4.setTransform(578.6,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgNAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_5.setTransform(570.6,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_6.setTransform(559.5,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_7.setTransform(554.8,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_8.setTransform(551.1,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_9.setTransform(544.9,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_10.setTransform(539.7,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_11.setTransform(532.3,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQABARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_12.setTransform(524.4,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_13.setTransform(518.3,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNANAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_14.setTransform(512,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_15.setTransform(506.3,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAHAPIAAgdIAKAAIAAAdgAgQAPIAAgdIAKAAIAAAdg");
	this.shape_16.setTransform(501.8,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAiQgDgCAAgDQAAgEADgCQACgCACAAQADAAACACQADACAAAEQAAADgDACQgCADgDAAQgCAAgCgDgAgEgWQgDgDAAgDQAAgDADgCQACgCACgBQADABACACQADACAAADQAAADgDADQgCABgDAAQgCAAgCgBg");
	this.shape_17.setTransform(493.7,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAsQgIgKAAgQQAAgSAJgJQAIgLAOAAQAOAAAHAMIAAAAIAAgrIALAAIAABmIgLAAIAAgMIAAAAQgIAOgPAAQgNgBgIgIgAgOgDQgGAHAAANQAAAMAGAHQAGAHAIAAQAJAAAGgGQAGgHAAgKIAAgLQAAgIgFgGQgGgFgJAAQgJAAgGAHg");
	this.shape_18.setTransform(487.8,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_19.setTransform(482.2,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQAMAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgMAAQgJAAgHAHg");
	this.shape_20.setTransform(475.2,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARAjIgPgxIgBgHIAAAAIgBAHIgQAxIgKAAIgWhFIAMAAIAOAzIABAHIABAAIABgHIAQgzIAKAAIAOA0IABAGIAAAAIABgGIAPg0IALAAIgVBFg");
	this.shape_21.setTransform(466.1,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAyIAAgKIAHABQAJAAADgKIAHgMIgchGIAMAAIATA1IABAGIACgGIAUg1IALAAIggBQQgIAXgPAAIgIgCg");
	this.shape_22.setTransform(457.7,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJAAAQIAAAFIgwAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgGAGAAAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_23.setTransform(450.7,19.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AANA0IgdgiIgBAAIAAAiIgLAAIAAhnIALAAIAABBIABAAIAbgfIAQAAIggAhIAiAkg");
	this.shape_24.setTransform(444.4,18.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_25.setTransform(438.6,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAbQgIgKAAgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgOAAgIgKgAgLgVQgGAGgBAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_26.setTransform(428.7,19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEA0IAAhnIAKAAIAABng");
	this.shape_27.setTransform(423.3,18.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_28.setTransform(417.2,21.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAJAKgBAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_29.setTransform(409.2,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAJAKAAAQQAAARgKAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQAMAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgMAAQgJAAgHAHg");
	this.shape_30.setTransform(401,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAlQgNgNAAgXQAAgVAPgPQAOgPAVAAQAQABALAFIAAAMQgMgIgQAAQgQAAgKAMQgLAMAAAQQAAATAKAKQAKALAQAAQALAAAIgEIAAgbIgVAAIAAgKIAhAAIAAAsQgPAHgSABQgUAAgNgOg");
	this.shape_31.setTransform(391.9,18.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_32.setTransform(379.7,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(374.7,18.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAjIgbhFIANAAIARAyIACAJIAAAAIACgJIATgyIAMAAIgcBFg");
	this.shape_34.setTransform(369.6,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAaIAAgpIgNAAIAAgKIANAAIAAgRIAKgDIAAAUIASAAIAAAKIgSAAIAAAnQgBAGADAEQADACAFAAQAEAAAEgCIAAAKQgFACgGAAQgRAAAAgUg");
	this.shape_35.setTransform(360,18.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAFgGQAGgGAAgJIAAgoIALAAIAABFIgLAAIAAgLQgIANgNAAQgZAAAAgeg");
	this.shape_36.setTransform(353.7,19.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSBCIAAgLQAFADAFAAQAOAAAAgYIAAhEIALAAIAABCQAAARgHAJQgHAKgLAAQgFAAgFgCgAAHg2QgDgCAAgDQAAgDADgCQACgDACAAQADAAADADQACACAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_37.setTransform(346.9,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAkIAAgnQgBgWgQAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNAOAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_38.setTransform(342.5,19.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_39.setTransform(334.7,19.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEA0IAAhnIAKAAIAABng");
	this.shape_40.setTransform(329.7,18.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASA0IAAgpQgBgUgQAAQgHAAgGAGQgFAFAAAKIAAAoIgLAAIAAhnIALAAIAAAtIABAAQAHgNAOAAQAYAAAAAcIAAArg");
	this.shape_41.setTransform(320.3,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_42.setTransform(314.5,18.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAOAAQAOAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgNAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_43.setTransform(308.9,18.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVAbQgIgKgBgQQAAgQAKgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgJAHgPAAQgPAAgIgKgAgLgVQgGAGgBAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_44.setTransform(301,19.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEA0IAAhnIAKAAIAABng");
	this.shape_45.setTransform(295.6,18.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_46.setTransform(287.1,19.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_47.setTransform(282.4,18.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_48.setTransform(278.7,18.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_49.setTransform(272.5,19.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_50.setTransform(267.3,19.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_51.setTransform(259.9,21.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgKAAgHAHg");
	this.shape_52.setTransform(252,19.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_53.setTransform(245.9,18.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASAkIAAgnQAAgWgQAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_54.setTransform(239.6,19.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_55.setTransform(233.9,18.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSAFIAAgIIAkAAIAAAIg");
	this.shape_56.setTransform(229.4,19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_57.setTransform(223.6,19.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(218.9,18.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_59.setTransform(215.3,18.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_60.setTransform(209.1,19.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_61.setTransform(203.8,19.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_62.setTransform(196.5,21.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgKAAgHAHg");
	this.shape_63.setTransform(188.5,19.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_64.setTransform(182.5,18.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AASAkIAAgnQAAgWgQAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_65.setTransform(176.2,19.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_66.setTransform(170.2,18.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_67.setTransform(388,17.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_68.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(513.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQABARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_1.setTransform(507.3,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAbQgJgKAAgPQAAgRAKgKQAKgLAPAAQAJAAAHAEIAAALQgHgFgJAAQgKAAgHAHQgHAIAAAMQAAAMAHAHQAGAHAKAAQAJAAAIgGIAAALQgIAFgLAAQgOAAgJgKg");
	this.shape_2.setTransform(500,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(495.2,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAaIAAgpIgMAAIAAgKIAMAAIAAgRIAJgDIAAAUIASAAIAAAKIgSAAIAAAnQABAGACAEQACACAGAAQAEAAADgCIAAAKQgDACgHAAQgRAAAAgUg");
	this.shape_4.setTransform(491.3,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_5.setTransform(485.2,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_6.setTransform(479.9,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAGgGQAEgGAAgJIAAgoIAMAAIAABFIgMAAIAAgLQgGANgOAAQgZAAAAgeg");
	this.shape_7.setTransform(473,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANA0IgegiIAAAAIAAAiIgLAAIAAhnIALAAIAABBIAAAAIAcgfIAQAAIggAhIAiAkg");
	this.shape_8.setTransform(466.2,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_9.setTransform(458.4,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_10.setTransform(453.3,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_11.setTransform(443.2,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJAAAQIAAAFIgwAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgGAGAAAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_12.setTransform(436.3,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAxIAAhWIgcAAIAAgLIBDAAIAAALIgcAAIAABWg");
	this.shape_13.setTransform(430.4,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAbQgIgKAAgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgOAAgIgKgAgLgVQgGAGgBAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_14.setTransform(419.2,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEA0IAAhnIAKAAIAABng");
	this.shape_15.setTransform(413.8,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTApIgBAAIAAAKIgLAAIAAhmIALAAIAAAtIABAAQAHgOAPAAQAOAAAIAKQAHAJAAAPQAAARgIALQgJALgPAAQgNAAgGgMgAgOgEQgGAGAAAKIAAAKQAAAJAFAGQAHAGAIAAQAJAAAGgHQAGgJAAgOQAAgLgFgGQgGgGgKAAQgIAAgGAGg");
	this.shape_16.setTransform(408.2,18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgPAAQgMAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_17.setTransform(400,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAGgGQAEgGABgJIAAgoIALAAIAABFIgLAAIAAgLQgIANgNAAQgZAAAAgeg");
	this.shape_18.setTransform(391.6,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAxIAAhhIAbAAQANAAAHAGQAIAGgBALQABAIgFAGQgFAGgHADIAAAAQAJABAGAFQAGAHAAAKQAAAMgJAIQgJAIgNAAgAgRAmIAPAAQAJABAFgFQAGgFAAgJQAAgRgXAAIgMAAgAgRgGIALAAQAJAAAFgEQAFgFAAgJQAAgNgSAAIgMAAg");
	this.shape_19.setTransform(384,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_20.setTransform(372.1,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAyIAAgKIAGABQAIAAAFgKIAFgMIgbhGIANAAIATA1IAAAGIABgGIAUg1IAMAAIggBQQgHAXgRAAIgGgCg");
	this.shape_21.setTransform(365.4,21.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_22.setTransform(358.2,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARA0IAAgpQAAgUgPAAQgHAAgHAGQgFAFAAAKIAAAoIgLAAIAAhnIALAAIAAAtIABAAQAHgNAOAAQAYAAAAAcIAAArg");
	this.shape_23.setTransform(351,18.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_24.setTransform(343.2,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAxIAAhhIAcAAQAMAAAHAGQAIAGAAALQgBAIgEAGQgFAGgHADIAAAAQAJABAHAFQAFAHAAAKQAAAMgJAIQgJAIgMAAgAgRAmIAPAAQAJABAFgFQAGgFAAgJQAAgRgXAAIgMAAgAgRgGIALAAQAIAAAGgEQAGgFgBgJQABgNgTAAIgMAAg");
	this.shape_25.setTransform(336.1,18.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAFIAAgIIAkAAIAAAIg");
	this.shape_26.setTransform(325.2,19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_27.setTransform(315.6,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_28.setTransform(310.9,18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_29.setTransform(307.2,18.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_30.setTransform(301,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_31.setTransform(295.8,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_32.setTransform(288.4,21.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQABARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_33.setTransform(280.5,19.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_34.setTransform(274.4,18.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNANAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_35.setTransform(268.1,19.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_36.setTransform(262.2,18.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_37.setTransform(388,17.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_38.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(533,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAsQgIgKAAgQQAAgSAJgJQAIgLAOAAQAOAAAHAMIAAAAIAAgrIALAAIAABmIgLAAIAAgMIAAAAQgIAOgPAAQgNgBgIgIgAgOgDQgGAHAAANQAAAMAGAHQAGAHAIAAQAJAAAGgGQAGgHAAgKIAAgLQAAgIgFgGQgGgFgJAAQgJAAgGAHg");
	this.shape_1.setTransform(526.9,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(521.3,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(518.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAbQgKgKABgQQgBgRAKgJQAKgLAPAAQAQAAAIAKQAKAKgBAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgJAAgGAHg");
	this.shape_4.setTransform(512.5,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAaIAAgpIgMAAIAAgKIAMAAIAAgRIALgDIAAAUIASAAIAAAKIgSAAIAAAnQAAAGACAEQADACAFAAQAEAAAEgCIAAAKQgFACgGAAQgSAAAAgUg");
	this.shape_5.setTransform(506.1,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_6.setTransform(501.4,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_7.setTransform(496.8,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAaIAAgpIgMAAIAAgKIAMAAIAAgRIALgDIAAAUIASAAIAAAKIgSAAIAAAnQAAAGACAEQADACAFAAQAEAAAEgCIAAAKQgFACgGAAQgRAAgBgUg");
	this.shape_8.setTransform(492.7,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_9.setTransform(488.6,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_10.setTransform(478.5,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAbQgJgKABgQQgBgQAKgKQAJgLANAAQANAAAIAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_11.setTransform(471.6,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAxIAAhWIgcAAIAAgLIBDAAIAAALIgdAAIAABWg");
	this.shape_12.setTransform(465.7,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgFAGgCAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_13.setTransform(454.5,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_14.setTransform(449.1,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAIgOAQAAQANAAAHAKQAIAJAAAPQAAARgIALQgJALgPAAQgNAAgHgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_15.setTransform(443.5,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgNAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_16.setTransform(435.3,18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAFgGQAGgGAAgJIAAgoIALAAIAABFIgLAAIAAgLQgIANgNAAQgZAAAAgeg");
	this.shape_17.setTransform(426.9,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAxIAAhhIAcAAQAMAAAHAGQAIAGAAALQAAAIgFAGQgFAGgHADIAAAAQAKABAGAFQAFAHAAAKQAAAMgJAIQgJAIgMAAgAgRAmIAPAAQAJABAFgFQAGgFAAgJQAAgRgXAAIgMAAgAgRgGIALAAQAIAAAGgEQAGgFgBgJQABgNgTAAIgMAAg");
	this.shape_18.setTransform(419.3,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_19.setTransform(407.3,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_20.setTransform(399.5,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAaIAAgpIgMAAIAAgKIAMAAIAAgRIAJgDIAAAUIASAAIAAAKIgSAAIAAAnQABAGACAEQACACAGAAQAEAAADgCIAAAKQgEACgGAAQgSAAABgUg");
	this.shape_21.setTransform(393.7,18.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_22.setTransform(387.6,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARA0IAAgpQABgUgRAAQgGAAgGAGQgGAFAAAKIAAAoIgLAAIAAhnIALAAIAAAtIAAAAQAJgNAOAAQAXAAAAAcIAAArg");
	this.shape_23.setTransform(380.4,18.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAbQgIgKAAgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgKAHgPAAQgNAAgJgKgAgLgVQgFAGgCAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_24.setTransform(372.8,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_25.setTransform(366.1,19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAbQgJgKABgQQgBgQAKgKQAJgLANAAQANAAAIAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_26.setTransform(359.5,19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAxIglgtIgCgEIAAAxIgMAAIAAhhIAMAAIAAAuIACgEIAkgqIAOAAIgpAvIAsAyg");
	this.shape_27.setTransform(352.6,18.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_28.setTransform(340.3,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAaIAAgpIgNAAIAAgKIANAAIAAgRIAJgDIAAAUIATAAIAAAKIgTAAIAAAnQABAGACAEQACACAGAAQAEAAAEgCIAAAKQgEACgHAAQgRAAAAgUg");
	this.shape_29.setTransform(334.6,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANA0IgdgiIgBAAIAAAiIgLAAIAAhnIALAAIAABBIABAAIAcgfIAOAAIgfAhIAiAkg");
	this.shape_30.setTransform(329.4,18.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_31.setTransform(321.6,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAxIAAhhIAxAAIAAALIglAAIAAAhIAiAAIAAAKIgiAAIAAArg");
	this.shape_32.setTransform(315.7,18.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgRAFIAAgIIAkAAIAAAIg");
	this.shape_33.setTransform(305.3,19.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_34.setTransform(295.7,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_35.setTransform(291,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_36.setTransform(287.3,18.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_37.setTransform(281.1,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_38.setTransform(275.9,19.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_39.setTransform(268.5,21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_40.setTransform(260.6,19.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_41.setTransform(254.5,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AARAkIAAgnQABgWgRAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNAOAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_42.setTransform(248.2,19.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_43.setTransform(242.3,18.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_44.setTransform(388,17.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_45.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(509,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmAkIAAgnQABgMgEgFQgDgFgJAAQgHAAgGAGQgEAHAAAJIAAAnIgLAAIAAgpQAAgUgPAAQgIAAgFAGQgEAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAIgNANAAQAIAAAFAEQAFAEABAHQAIgPAPAAQAYAAAAAdIAAAqg");
	this.shape_1.setTransform(501.4,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgLAAgFAHg");
	this.shape_2.setTransform(491.2,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAbQgJgKAAgPQAAgRAKgKQAKgLAPAAQAJAAAHAEIAAALQgHgFgJAAQgKAAgHAHQgHAIAAAMQAAAMAHAHQAGAHAKAAQAJAAAIgGIAAALQgIAFgLAAQgOAAgJgKg");
	this.shape_3.setTransform(483.9,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_4.setTransform(479.1,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_5.setTransform(474.6,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_6.setTransform(467.9,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAQQAAAQgJALQgIAKgOAAQgOAAgHgLIAAAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAGAGQAFAGAJAAQAJAAAGgIQAGgHAAgOQAAgLgGgHQgFgGgJAAQgJAAgGAGg");
	this.shape_7.setTransform(460.8,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnAkIAAgnQgBgMgDgFQgEgFgIAAQgIAAgEAGQgGAHAAAJIAAAnIgKAAIAAgpQAAgUgQAAQgHAAgEAGQgFAGgBAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAPAAQAGAAAGAEQAEAEACAHQAIgPAQAAQAWAAAAAdIAAAqg");
	this.shape_8.setTransform(450.6,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAIAKQAKAKgBAQQAAARgJAJQgKALgPAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_9.setTransform(440.4,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANA0IgdgiIgBAAIAAAiIgLAAIAAhnIALAAIAABBIABAAIAbgfIAQAAIggAhIAiAkg");
	this.shape_10.setTransform(433.7,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_11.setTransform(427.9,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIAwQgCgCAAgDQAAgDACgCQACgDADAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCgAgJAWIgBgFIAAgFQAAgFABgDIAFgGIAFgGIAFgFIAFgGQACgEAAgDQgBgEgBgCQgBgDgDgBIgEgDIgGgBQgLAAgIAJIAAgMQAKgGALAAIAJABQAFABADADQAEADACAEQABAEAAAFQAAAFgBAEQgCAEgDADIgFAHIgHAFIgEAFQgBADAAAEIAAAGIACAEg");
	this.shape_12.setTransform(418.5,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_13.setTransform(411.5,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgPAAQgMAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_14.setTransform(404.5,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_15.setTransform(396,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAxIAAhhIAbAAQAMAAAIAGQAHAGAAALQAAAIgEAGQgEAGgJADIAAAAQALABAGAFQAFAHAAAKQAAAMgJAIQgJAIgNAAgAgSAmIAQAAQAJABAGgFQAFgFAAgJQAAgRgWAAIgOAAgAgSgGIAMAAQAIAAAGgEQAFgFABgJQgBgNgRAAIgOAAg");
	this.shape_16.setTransform(388.2,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAGgGQAEgGAAgJIAAgoIAMAAIAABFIgMAAIAAgLQgGANgOAAQgZAAAAgeg");
	this.shape_17.setTransform(376,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAaIAAgpIgMAAIAAgKIAMAAIAAgRIALgDIAAAUIASAAIAAAKIgSAAIAAAnQAAAGACAEQADACAFAAQAEAAAEgCIAAAKQgFACgGAAQgRAAgBgUg");
	this.shape_18.setTransform(369.7,18.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_19.setTransform(365.7,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_20.setTransform(356.4,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIAAAAQAJgOAOAAQAOAAAHAKQAIAJAAAQQAAAQgJALQgIAKgOAAQgNAAgIgLIAAAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAGAGQAFAGAJAAQAJAAAGgIQAGgHAAgOQAAgLgGgHQgFgGgJAAQgJAAgGAGg");
	this.shape_21.setTransform(349.3,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfAxIgLgcIgoAAIgKAcIgMAAIAlhhIALAAIAmBhgAgBgdIgPAoIAhAAIgPgoIgCgHIAAAAIgBAHg");
	this.shape_22.setTransform(340.4,18.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAFIAAgIIAkAAIAAAIg");
	this.shape_23.setTransform(329.3,19.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_24.setTransform(319.7,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_25.setTransform(315,18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_26.setTransform(311.3,18.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_27.setTransform(305.1,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_28.setTransform(299.9,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_29.setTransform(292.5,21.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAJAKgBAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_30.setTransform(284.6,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIA1IAAg8IgMAAIAAgKIAMAAIAAgLQAAgLAGgGQAGgGAJgBIAIABIAAAKQgDgBgEAAQgMAAAAAPIAAAKIAQAAIAAAKIgQAAIAAA8g");
	this.shape_31.setTransform(278.5,18.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAkIAAgnQgBgWgQAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAIgNAPAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_32.setTransform(272.2,19.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_33.setTransform(266.3,18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_34.setTransform(388,17.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_35.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(511.7,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAsQgIgKAAgQQAAgSAJgJQAIgLAOAAQAOAAAHAMIAAAAIAAgrIALAAIAABmIgLAAIAAgMIAAAAQgIAOgPAAQgNgBgIgIgAgOgDQgGAHAAANQAAAMAGAHQAGAHAIAAQAJAAAGgGQAGgHAAgKIAAgLQAAgIgFgGQgGgFgJAAQgJAAgGAHg");
	this.shape_1.setTransform(505.6,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(500,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(496.8,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgLAAgFAHg");
	this.shape_4.setTransform(491.2,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAbQgJgKAAgPQAAgRAKgKQAKgLAPAAQAJAAAHAEIAAALQgHgFgJAAQgKAAgHAHQgHAIAAAMQAAAMAHAHQAGAHAKAAQAJAAAIgGIAAALQgIAFgLAAQgOAAgJgKg");
	this.shape_5.setTransform(483.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_6.setTransform(479.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIABAAQAHgOAQAAQANAAAIAKQAHAJAAAQQAAAQgIALQgJAKgPAAQgMAAgHgLIgBAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAGAGQAFAGAJAAQAJAAAGgIQAGgHAAgOQAAgLgGgHQgFgGgKAAQgIAAgGAGg");
	this.shape_7.setTransform(473.7,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAbQgKgKABgQQgBgRAKgJQAKgLAPAAQAQAAAIAKQAKAKgBAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgJAAgGAHg");
	this.shape_8.setTransform(465.2,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAIAKQAKAKgBAQQAAARgJAJQgKALgPAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQALAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_9.setTransform(457,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA0IAAhnIAKAAIAABng");
	this.shape_10.setTransform(451.2,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_11.setTransform(447.8,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_12.setTransform(437.7,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJAAAQIAAAFIgwAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgGAGAAAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_13.setTransform(430.8,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAxIAAhWIgcAAIAAgLIBDAAIAAALIgcAAIAABWg");
	this.shape_14.setTransform(424.9,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAbQgIgKAAgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgKAHgPAAQgNAAgJgKgAgLgVQgFAGgCAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_15.setTransform(413.7,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEA0IAAhnIAKAAIAABng");
	this.shape_16.setTransform(408.3,18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTApIgBAAIAAAKIgLAAIAAhmIALAAIAAAtIABAAQAHgOAPAAQAOAAAIAKQAHAJAAAPQAAARgIALQgJALgOAAQgOAAgGgMgAgOgEQgGAGAAAKIAAAKQAAAJAFAGQAHAGAIAAQAJAAAGgHQAGgJAAgOQAAgLgFgGQgGgGgJAAQgJAAgGAGg");
	this.shape_17.setTransform(402.7,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAIgOAQAAQANAAAHAKQAIAJAAAPQAAARgIALQgJALgPAAQgMAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgFgGQgGgGgKAAQgIAAgGAGg");
	this.shape_18.setTransform(394.5,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAGgGQAEgGAAgJIAAgoIAMAAIAABFIgMAAIAAgLQgGANgOAAQgZAAAAgeg");
	this.shape_19.setTransform(386.1,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAxIAAhhIAbAAQAMAAAIAGQAIAGgBALQABAIgFAGQgEAGgJADIAAAAQALABAFAFQAGAHAAAKQAAAMgJAIQgJAIgNAAgAgSAmIAQAAQAJABAGgFQAFgFAAgJQAAgRgWAAIgOAAgAgSgGIAMAAQAIAAAGgEQAFgFAAgJQAAgNgRAAIgOAAg");
	this.shape_20.setTransform(378.5,18.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_21.setTransform(368.6,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_22.setTransform(363.2,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_23.setTransform(356,19.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgFAGgCAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_24.setTransform(348.3,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_25.setTransform(340.2,21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAkIAAgnQgBgWgQAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAIgNAPAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_26.setTransform(332.5,19.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAbQgJgKABgQQgBgQAKgKQAJgLANAAQANAAAIAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_27.setTransform(324.9,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAnAkIAAgnQAAgMgEgFQgEgFgIAAQgHAAgGAGQgEAHAAAJIAAAnIgKAAIAAgpQAAgUgQAAQgIAAgEAGQgGAGAAAKIAAAnIgKAAIAAhFIAKAAIAAALIABAAQAHgNAOAAQAIAAAFAEQAFAEACAHQAHgPAPAAQAYAAAAAdIAAAqg");
	this.shape_28.setTransform(315.3,19.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_29.setTransform(301.6,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIAaIAAgpIgLAAIAAgKIALAAIAAgRIAKgDIAAAUIASAAIAAAKIgSAAIAAAnQAAAGADAEQACACAGAAQAEAAADgCIAAAKQgEACgGAAQgSAAAAgUg");
	this.shape_30.setTransform(295.8,18.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AANA0IgegiIAAAAIAAAiIgLAAIAAhnIALAAIAABBIAAAAIAcgfIAQAAIggAhIAiAkg");
	this.shape_31.setTransform(290.7,18.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_32.setTransform(282.9,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAxIAAhhIAxAAIAAALIglAAIAAAhIAiAAIAAAKIgiAAIAAArg");
	this.shape_33.setTransform(276.9,18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAxIAEgSIAFgSIAGgPIAHgPIAHgMIAEgJIgwAAIAAgKIA9AAIAAAGIgFAKIgHANIgHAQIgHAQIgFASIgDASg");
	this.shape_34.setTransform(265.5,18.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_35.setTransform(388,17.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_36.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(559.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmAkIAAgnQAAgMgDgFQgEgFgIAAQgHAAgGAGQgEAHAAAJIAAAnIgKAAIAAgpQAAgUgQAAQgIAAgFAGQgEAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAHgNAOAAQAIAAAFAEQAEAEADAHQAHgPAPAAQAYAAAAAdIAAAqg");
	this.shape_1.setTransform(551.9,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAbQgKgKABgQQgBgRAKgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgKALgPAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgLAAgGAHg");
	this.shape_2.setTransform(541.7,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAbQgJgKAAgPQAAgRAKgKQAKgLAPAAQAJAAAHAEIAAALQgHgFgJAAQgKAAgHAHQgHAIAAAMQAAAMAHAHQAGAHAKAAQAJAAAIgGIAAALQgIAFgLAAQgOAAgJgKg");
	this.shape_3.setTransform(534.4,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_4.setTransform(529.6,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_5.setTransform(524.3,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA0IAAhnIALAAIAABng");
	this.shape_6.setTransform(519.3,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAbQgJgKABgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgCAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_7.setTransform(514,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgNAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_8.setTransform(506.4,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIABAAQAHgOAPAAQAOAAAIAKQAHAJAAAQQAAAQgIALQgJAKgPAAQgNAAgGgLIgBAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAFAGQAHAGAIAAQAJAAAGgIQAGgHAAgOQAAgLgFgHQgGgGgKAAQgIAAgGAGg");
	this.shape_9.setTransform(498.1,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAbQgKgKAAgQQAAgRAKgJQAKgLAPAAQAQAAAJAKQAJAKAAAQQAAARgKAJQgJALgQAAQgPAAgJgKgAgQgTQgGAHAAANQAAAMAGAHQAHAHAJAAQAMAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgMAAQgJAAgHAHg");
	this.shape_10.setTransform(489.7,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIABAAQAHgOAQAAQANAAAIAKQAHAJAAAQQAAAQgIALQgJAKgPAAQgNAAgGgLIgBAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAFAGQAHAGAIAAQAJAAAGgIQAGgHAAgOQAAgLgFgHQgGgGgKAAQgIAAgGAGg");
	this.shape_11.setTransform(481.7,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_12.setTransform(475.6,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_13.setTransform(465.5,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgPAAQgMAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_14.setTransform(458.5,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAIAKQAJAKAAAQQAAARgJAJQgJALgQAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgLAAgFAHg");
	this.shape_15.setTransform(450,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAxIAAhhIAbAAQAMAAAIAGQAHAGAAALQAAAIgEAGQgEAGgJADIAAAAQALABAGAFQAFAHAAAKQAAAMgJAIQgJAIgNAAgAgSAmIAQAAQAJABAGgFQAFgFAAgJQAAgRgWAAIgOAAgAgSgGIAMAAQAIAAAGgEQAFgFABgJQgBgNgRAAIgOAAg");
	this.shape_16.setTransform(442.2,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAkIAAgnQgBgWgQAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAIgNAPAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_17.setTransform(430.2,19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_18.setTransform(422.4,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAnAkIAAgnQgBgMgDgFQgEgFgIAAQgIAAgEAGQgGAHAAAJIAAAnIgJAAIAAgpQgBgUgQAAQgHAAgEAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAPAAQAGAAAGAEQAFAEACAHQAHgPAPAAQAXAAAAAdIAAAqg");
	this.shape_19.setTransform(413.1,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAGgGQAEgGAAgJIAAgoIAMAAIAABFIgMAAIAAgLQgGANgOAAQgZAAAAgeg");
	this.shape_20.setTransform(403,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARAkIAAgnQABgWgRAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNAOAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_21.setTransform(395.3,19.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(389.5,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAmAxIAAhBIABgTIAAAAIgDAKIgiBKIgEAAIghhKIgDgKIAAATIAABBIgLAAIAAhhIAPAAIAeBDIAEAMIAAAAIAEgMIAghDIAOAAIAABhg");
	this.shape_23.setTransform(381.6,18.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARA0IAAgpQAAgUgPAAQgIAAgGAGQgFAFAAAKIAAAoIgLAAIAAhnIALAAIAAAtIAAAAQAJgNAOAAQAXAAAAAcIAAArg");
	this.shape_24.setTransform(367.6,18.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_25.setTransform(359.8,19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_26.setTransform(354.5,19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_27.setTransform(347.8,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSBCIAAgLQAFADAEAAQAPAAAAgYIAAhEIALAAIAABCQAAARgHAJQgHAKgMAAQgEAAgFgCgAAHg2QgCgCAAgDQAAgDACgCQABgDADAAQAEAAACADQACACAAADQAAADgCACQgCACgEAAQgDAAgBgCg");
	this.shape_28.setTransform(341.6,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAbQgJgKABgQQgBgQAKgKQAJgLANAAQANAAAIAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_29.setTransform(337.5,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAzIgHgCIgGgCIgGgCIAAgOIAGAEIAGADIAIABIAHABQAJAAAGgEQAEgDAAgIQABgEgCgDIgFgFIgHgFIgIgFIgKgEIgHgGQgEgDgCgEQgCgEAAgGQAAgGADgFQAEgFAEgEQAFgCAGgCQAGgCAGAAQAOAAAGAEIAAAMQgIgFgNgBIgHACIgHACIgEAEQgDAEAAADQAAAEACADQABADADACIAHAFIAIAEIAKAEIAIAHQADADACAFQACAEABAGQAAAHgDAEQgDAFgFAEQgEADgHABIgMACIgGAAg");
	this.shape_30.setTransform(330.1,18.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_31.setTransform(320.8,18.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_32.setTransform(315.3,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAkIAAgnQgBgWgQAAQgHAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_33.setTransform(308.1,19.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJAAAQIAAAFIgwAAQAAAMAGAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgOAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_34.setTransform(300.5,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_35.setTransform(292.4,21.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AARAkIAAgnQABgWgRAAQgHAAgFAGQgGAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIAAAAQAJgNAOAAQALAAAGAIQAGAHAAAOIAAAqg");
	this.shape_36.setTransform(284.7,19.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAbQgIgKAAgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgOAAgIgKgAgLgVQgGAGgBAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_37.setTransform(277,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAnAkIAAgnQgBgMgDgFQgEgFgIAAQgIAAgEAGQgGAHAAAJIAAAnIgJAAIAAgpQgBgUgQAAQgHAAgEAGQgFAGgBAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAPAAQAGAAAGAEQAEAEADAHQAHgPAQAAQAWAAAAAdIAAAqg");
	this.shape_38.setTransform(267.4,19.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_39.setTransform(253.7,19.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAaIAAgpIgNAAIAAgKIANAAIAAgRIAKgDIAAAUIASAAIAAAKIgSAAIAAAnQgBAGADAEQADACAFAAQAEAAAEgCIAAAKQgFACgGAAQgRAAAAgUg");
	this.shape_40.setTransform(248,18.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AANA0IgegiIAAAAIAAAiIgLAAIAAhnIALAAIAABBIAAAAIAdgfIAOAAIgfAhIAiAkg");
	this.shape_41.setTransform(242.8,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_42.setTransform(235,19.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAxIAAhhIAxAAIAAALIglAAIAAAhIAiAAIAAAKIgiAAIAAArg");
	this.shape_43.setTransform(229.1,18.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgPAxIAEgSIAFgSIAGgPIAHgPIAHgMIAEgJIgwAAIAAgKIA9AAIAAAGIgFAKIgHANIgHAQIgHAQIgFASIgDASg");
	this.shape_44.setTransform(217.7,18.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_45.setTransform(388,17.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_46.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


(lib.link1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gotoArrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(751.4,19.5,1,1,0,0,0,12,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPA8QAVgaAAgiQAAghgVgaIAKAAQAVAZAAAiQAAAkgVAYg");
	this.shape.setTransform(588.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_1.setTransform(582.6,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgGAGAAAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_2.setTransform(575.7,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAaIAAgpIgLAAIAAgKIALAAIAAgRIAKgDIAAAUIASAAIAAAKIgSAAIAAAnQAAAGADAEQACACAGAAQAEAAADgCIAAAKQgDACgHAAQgSAAAAgUg");
	this.shape_3.setTransform(569.7,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAEIAAgHIA5AAIAAAHg");
	this.shape_4.setTransform(564.4,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAbQgIgKgBgQQABgQAJgKQAJgLANAAQAOAAAHAJQAIAJAAAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgJAHgPAAQgPAAgIgKgAgLgVQgGAGgBAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_5.setTransform(557.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_6.setTransform(552.5,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTApIgBAAIAAAKIgLAAIAAhmIALAAIAAAtIABAAQAHgOAQAAQANAAAIAKQAHAJAAAPQAAARgIALQgJALgPAAQgNAAgGgMgAgOgEQgGAGAAAKIAAAKQAAAJAFAGQAHAGAIAAQAJAAAGgHQAGgJAAgOQAAgLgFgGQgGgGgKAAQgIAAgGAGg");
	this.shape_7.setTransform(546.9,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgOAAgHgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_8.setTransform(538.7,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAFgGQAFgGABgJIAAgoIALAAIAABFIgLAAIAAgLQgIANgNAAQgZAAAAgeg");
	this.shape_9.setTransform(530.3,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTApIgBAAIAAAKIgLAAIAAhmIALAAIAAAtIABAAQAHgOAPAAQAOAAAIAKQAHAJAAAPQAAARgIALQgJALgPAAQgNAAgGgMgAgOgEQgGAGAAAKIAAAKQAAAJAFAGQAHAGAIAAQAJAAAGgHQAGgJAAgOQAAgLgFgGQgGgGgKAAQgIAAgGAGg");
	this.shape_10.setTransform(522.5,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcA5IAuhxIALAAIguBxg");
	this.shape_11.setTransform(515.4,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_12.setTransform(511,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANA0IgegiIAAAAIAAAiIgLAAIAAhnIALAAIAABBIAAAAIAcgfIAPAAIgfAhIAiAkg");
	this.shape_13.setTransform(506.4,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_14.setTransform(500.7,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAjIgOgxIgBgHIgBAAIAAAHIgQAxIgLAAIgVhFIAMAAIAPAzIABAHIAAAAIABgHIARgzIAIAAIAPA0IABAGIABAAIABgGIAOg0IALAAIgVBFg");
	this.shape_15.setTransform(493.9,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcA5IAuhxIALAAIguBxg");
	this.shape_16.setTransform(486.1,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_17.setTransform(479,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAkIAAhGIALAAIAAAPIAAAAQACgHAEgFQAFgEAGAAIAHABIAAAMQgDgCgFgBQgIAAgDAIQgFAGAAALIAAAkg");
	this.shape_18.setTransform(473.5,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAbQgJgKAAgQQAAgRAJgJQAKgLAPAAQAQAAAJAKQAIAKABAQQAAARgKAJQgKALgPAAQgPAAgJgKgAgPgTQgHAHAAANQAAAMAHAHQAGAHAKAAQALAAAFgHQAGgHAAgNQAAgMgGgHQgFgHgLAAQgLAAgFAHg");
	this.shape_19.setTransform(466.4,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_20.setTransform(460.8,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_21.setTransform(455.5,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(450.5,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAsQgIgKAAgQQAAgSAJgJQAIgLAOAAQAOAAAHAMIAAAAIAAgrIALAAIAABmIgLAAIAAgMIAAAAQgIAOgPAAQgNgBgIgIgAgOgDQgGAHAAANQAAAMAGAHQAGAHAIAAQAJAAAGgGQAGgHAAgKIAAgLQAAgIgFgGQgGgFgJAAQgJAAgGAHg");
	this.shape_23.setTransform(444.4,18.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAbQgJgKABgQQgBgQAKgKQAJgLANAAQANAAAIAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgBAKIAkAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_24.setTransform(436.9,19.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAQQAAAQgJALQgIAKgOAAQgOAAgHgLIAAAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAGAGQAFAGAJAAQAJAAAGgIQAGgHAAgOQAAgLgGgHQgFgGgJAAQgJAAgGAGg");
	this.shape_25.setTransform(429.3,21.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_26.setTransform(423.3,18.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANA0IgegiIAAAAIAAAiIgLAAIAAhnIALAAIAABBIAAAAIAcgfIAPAAIgfAhIAiAkg");
	this.shape_27.setTransform(418.7,18.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_28.setTransform(412.9,18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAjIgOgxIgBgHIgBAAIAAAHIgQAxIgLAAIgVhFIAMAAIAPAzIABAHIAAAAIABgHIARgzIAIAAIAPA0IABAGIABAAIABgGIAOg0IALAAIgVBFg");
	this.shape_29.setTransform(406.2,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_30.setTransform(399.6,22.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_31.setTransform(394.2,19.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgOAAgJgKgAgLgVQgFAGgCAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_32.setTransform(386.6,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAGA8QgVgYAAgkQAAgiAVgZIAKAAQgVAaAAAhQAAAiAUAag");
	this.shape_33.setTransform(381.2,19.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_34.setTransform(371.1,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAbQgJgKABgQQAAgQAJgKQAJgLANAAQAOAAAHAJQAIAJgBAQIAAAFIgwAAQAAAMAHAGQAFAGAKAAQAMAAAKgHIAAAKQgJAHgQAAQgNAAgJgKgAgLgVQgFAGgCAKIAlAAQAAgLgEgFQgFgFgJAAQgGAAgGAFg");
	this.shape_35.setTransform(364.1,19.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFAxIAAhWIgcAAIAAgLIBDAAIAAALIgdAAIAABWg");
	this.shape_36.setTransform(358.2,18.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgGAGAAAKIAkAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_37.setTransform(347.1,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_38.setTransform(341.7,18.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAPAAQANAAAHAKQAIAJAAAPQAAARgJALQgIALgPAAQgMAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAGAGQAFAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_39.setTransform(336.1,18.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUApIAAAAIAAAKIgLAAIAAhmIALAAIAAAtIAAAAQAJgOAOAAQAOAAAHAKQAIAJAAAPQAAARgJALQgIALgOAAQgNAAgIgMgAgOgEQgGAGAAAKIAAAKQAAAJAFAGQAGAGAJAAQAJAAAGgHQAGgJAAgOQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_40.setTransform(327.8,18.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcAGIAAgpIALAAIAAAnQAAAWARAAQAHAAAFgGQAGgGAAgJIAAgoIALAAIAABFIgLAAIAAgLQgIANgNAAQgZAAAAgeg");
	this.shape_41.setTransform(319.5,19.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAxIAAhhIAcAAQAMAAAHAGQAIAGAAALQgBAIgEAGQgFAGgHADIAAAAQAJABAHAFQAFAHAAAKQAAAMgJAIQgJAIgMAAgAgRAmIAPAAQAJABAFgFQAGgFAAgJQAAgRgXAAIgMAAgAgRgGIALAAQAIAAAGgEQAGgFgBgJQABgNgTAAIgMAAg");
	this.shape_42.setTransform(311.8,18.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAFIAAgIIAkAAIAAAIg");
	this.shape_43.setTransform(300.9,19.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASA0IAAgpQAAgUgQAAQgHAAgHAGQgFAFAAAKIAAAoIgLAAIAAhnIALAAIAAAtIABAAQAHgNAOAAQAYAAAAAcIAAArg");
	this.shape_44.setTransform(290.4,18.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWAgIAAgLQAJAGALAAQAOAAAAgKIgBgEIgEgEIgFgDIgFgCIgIgDIgGgEQgDgDgBgDQgBgDAAgDQAAgGACgDQADgEADgDIAJgDIAJgCQAJABAHADIAAALQgIgFgKAAIgEABIgFACIgCACIgCAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFADIAJADIAGAEIAEAFQABADAAAEQAAAGgCADQgCAEgEACQgEADgFABIgJACQgLgBgIgEg");
	this.shape_45.setTransform(283.4,19.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_46.setTransform(278.7,18.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA0IAAhnIAKAAIAABng");
	this.shape_47.setTransform(275.3,18.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAvIAAgLQAMAHAKAAQAZAAAAgcIAAgIIAAAAQgIAOgPAAQgNAAgIgJQgIgKAAgOQAAgSAIgLQAJgKAOAAQAOAAAHALIAAAAIAAgKIALAAIAABAQAAAmgkAAQgNAAgJgFgAgOgiQgGAHAAAOQAAALAGAGQAGAHAIAAQAJAAAGgGQAGgGAAgKIAAgLQAAgIgFgGQgGgGgJAAQgJAAgGAIg");
	this.shape_48.setTransform(269.2,21.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AARAkIAAgnQAAgWgPAAQgIAAgGAGQgFAGAAAKIAAAnIgLAAIAAhFIALAAIAAALIABAAQAHgNAOAAQAMAAAGAIQAGAHAAAOIAAAqg");
	this.shape_49.setTransform(261.5,19.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAxIAAhhIAxAAIAAALIgmAAIAAAgIAiAAIAAAJIgiAAIAAAiIAoAAIAAALg");
	this.shape_50.setTransform(254.2,18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgVAfQgGgFAAgKQAAgSAYgDIATgEQAAgRgOAAQgMAAgKAIIAAgLQALgHAMAAQAZAAAAAaIAAAtIgMAAIAAgLQgHANgNAAQgLAAgGgGgAAAACQgHABgEADQgEADAAAGQAAAFAEAEQADADAGAAQAIAAAFgFQAFgHAAgJIAAgGg");
	this.shape_51.setTransform(242.7,19.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_52.setTransform(237.7,18.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAsQgIgKAAgQQAAgSAJgJQAIgLAOAAQAOAAAHAMIAAAAIAAgrIALAAIAABmIgLAAIAAgMIAAAAQgIAOgPAAQgNgBgIgIgAgOgDQgGAHAAANQAAAMAGAHQAGAHAIAAQAJAAAGgGQAGgHAAgKIAAgLQAAgIgFgGQgGgFgJAAQgJAAgGAHg");
	this.shape_53.setTransform(231.6,18.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgVAbQgJgKAAgQQAAgQAKgKQAJgLANAAQANAAAIAJQAHAJABAQIAAAFIgxAAQABAMAFAGQAHAGAJAAQAMAAAKgHIAAAKQgKAHgOAAQgPAAgIgKgAgLgVQgFAGgCAKIAlAAQAAgLgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_54.setTransform(224.1,19.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfA0IAAhlIALAAIAAAMIABAAQAHgOAPAAQAOAAAIAKQAHAJAAAQQAAAQgIALQgJAKgPAAQgNAAgGgLIgBAAIAAAqgAgOgjQgGAHAAAKIAAAKQAAAIAFAGQAHAGAIAAQAJAAAGgIQAGgHAAgOQAAgLgFgHQgGgGgKAAQgIAAgGAGg");
	this.shape_55.setTransform(216.5,21.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_56.setTransform(210.5,18.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AANA0IgdgiIgBAAIAAAiIgLAAIAAhnIALAAIAABBIABAAIAcgfIAPAAIggAhIAiAkg");
	this.shape_57.setTransform(205.9,18.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAzIAAhFIAKAAIAABFgAgEgmQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(200.1,18.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAXAxIgVhHIgCgKIgBAKIgTBHIgOAAIgdhhIANAAIAVBKIACAKIAAAAIACgKIAWhKIAKAAIAUBLIACAJIACgJIAUhLIAMAAIgbBhg");
	this.shape_59.setTransform(191.9,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,153,153,0.498)").ss(2,1,1).p("Eg71gCuMB3rAAAQAyAAAAAyIAAD5QAAAygyAAMh3rAAAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_60.setTransform(388,17.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFCC").s().p("Eg71ACvQgyAAAAgyIAAj5QAAgyAyAAMB3rAAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_61.setTransform(388,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,778,37);


// stage content:
(lib.bobaabout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{section1:0,section2:4,section3page1:9,section3page2:11,section3page3:13,section4:14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		function gotoHome() {
			location.assign("boba-home.html");
		}
		
		function gotoSection(section) {
			this.gotoAndStop(section);
		}
		
		this.homeButton.addEventListener("click", gotoHome.bind(this));
		
		this.panel1Button.addEventListener("click", gotoSection.bind(this, "section1"));
		this.panel2Button.addEventListener("click", gotoSection.bind(this, "section2"));
		this.panel3Button.addEventListener("click", gotoSection.bind(this, "section3page1"));
		this.panel4Button.addEventListener("click", gotoSection.bind(this, "section4"));
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		
		function movePage(page) {
			this.gotoAndStop(page);
		}
		
		this.nextPage.addEventListener("click", movePage.bind(this, "section3page2"));
	}
	this.frame_11 = function() {
		this.stop();
		
		function movePage(page) {
			this.gotoAndStop(page);
		}
		
		this.prevPage.addEventListener("click", movePage.bind(this, "section3page1"));
		this.nextPage.addEventListener("click", movePage.bind(this, "section3page3"));
	}
	this.frame_13 = function() {
		this.stop();
		
		function movePage(page) {
			this.gotoAndStop(page);
		}
		
		function gotoWebpage(webpage) {
			window.open(webpage);
		}
		
		this.prevPage.addEventListener("click", movePage.bind(this, "section3page2"));
		
		this.link1.addEventListener("click", gotoWebpage.bind(this, "https://en.wikipedia.org/wiki/Bubble_tea"));
		this.link2.addEventListener("click", gotoWebpage.bind(this, "https://www.popbela.com/lifestyle/food/dinalathifa/7-fakta-tentang-sejarah-minuman-boba/full"));
		this.link3.addEventListener("click", gotoWebpage.bind(this, "https://loop.co.id/articles/fakta-bubble-tea/full"));
		this.link4.addEventListener("click", gotoWebpage.bind(this, "https://www.kompas.com/tren/read/2019/10/05/080300665/infografik--apa-itu-boba-"));
		this.link5.addEventListener("click", gotoWebpage.bind(this, "https://tirto.id/benarkah-bubble-tea-berbahaya-ecdr"));
		this.link6.addEventListener("click", gotoWebpage.bind(this, "https://akurat.co/infografis/id-710481-read-bubble-tea-berbahaya"));
		this.link7.addEventListener("click", gotoWebpage.bind(this, "https://www.google.com/search?safe=strict&q=infografis+boba&tbm=isch"));
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(1).call(this.frame_14).wait(5));

	// filterBox (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6NAxJQhQAAAAhQMAAAhM8QAAhQBQAAMCCTAAAQBQAAAABQMAAABM8QAABQhQAAg");
	mask.setTransform(469.4,314.5);

	// description
	this.RunnerSet = new lib.Runners();
	this.RunnerSet.name = "RunnerSet";
	this.RunnerSet.parent = this;
	this.RunnerSet.setTransform(514.5,577,1,1,0,0,0,425,52.3);

	this.text = new cjs.Text("Bebas Boba Boba Cafe adalah boba store yang ingin mengubah pengertian Boba yang ada sebelumnya dan membuat inovasi - inovasi baru dengan masih mengunakan model - model yang lama.\n\nBebas Boba Boba Cafe lahir di Jakarta dimana terdapat banyak boba yang hadir di berbagai Boba Cafe yang menyajikan minuman boba. Tetapi Bebas Boba Boba Cafe disini untuk membuang pengertian masyarakat tentang boba dengan hasil karya founder Bebas Boba Boba Cafe yang memunculkan berbagai jenis inovasi mulai dari boba matcha, boba macciato, thai boba, cheese boba, dan infused boba tea. Walau minuman yang tersediakan kita masih menyediakan topping biasa seperti boba pearl, kami juga menyediakan berbagai macam topping selain boba pearl kami juga menyediakan topping unik lainnya seperti pudding, grass jelly, nata de coco, dan aloe vera yang sangat disarankan and untuk dicoba di sini.\n\nDi sini juga menyajikan minuman dengan kadar gula dan es yang bisa kamu pilih sesuai keinginan anda serta ditawarkan dengan ukuran medium dan large (+Rp3.000,00 dari harga minuman ukuran medium).\n\nMari memulai hari dengan meminum Boba Inovatif dari Bebas Boba Boba Cafe!!", "16px 'Segoe UI'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 781;
	this.text.parent = this;
	this.text.setTransform(512,167.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6666").ss(1.5,1,1).p("EhBJgnuMCCTAAAQBQAAAABQMAAABM9QAABQhQAAMiCTAAAQhQAAAAhQMAAAhM9QAAhQBQAAg");
	this.shape.setTransform(512,374.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("EhBJAnuQhQAAAAhQMAAAhM8QAAhQBQAAMCCTAAAQBQAAAABQMAAABM8QAABQhQAAg");
	this.shape_1.setTransform(512,374.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAzQARgWAAgdQAAgdgRgVIAIAAQARAVAAAdQAAAfgRAUg");
	this.shape_2.setTransform(722.9,599.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAoQgFgCgDgGQgEgFgCgHQgCgJAAgJQAAgKACgJQACgIAEgGQAEgGAFgDQAFgCAGAAQAbgBgBArQAAAKgBAJQgCAHgEAGQgEAFgFADQgFADgGABQgGgBgFgDgAgRABQAAAjARAAQASgBAAgiQgBgkgRABQgQAAgBAjg");
	this.shape_3.setTransform(718.3,598.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAnIAAgKQAIAGALABQAEAAADgCIAGgDIAEgFQABgDABgEQgBgRgWABIgHAAIAAgIIAGAAQAVAAAAgPQAAgOgPAAQgKAAgHAFIAAgJQAIgEALAAQAFgBADACQAFACADACQADADABADQADAEAAAEQAAARgRAFQAEABAEABIAFADQAEADABAEQABADAAAEQAAAGgCAFQgCAEgEAEQgEADgFABQgFACgGABQgMAAgHgFg");
	this.shape_4.setTransform(711.7,598.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAdQgCgCAAgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAACgCACQgCACgDABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAgEgTQgCgCAAgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAADgCACQgCABgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAg");
	this.shape_5.setTransform(707.3,599.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAoQgFgCgDgGQgEgFgBgHQgCgJAAgJQAAgKACgJQABgIAEgGQADgGAGgDQAFgCAGAAQAagBABArQAAAKgCAJQgCAHgEAGQgEAFgFADQgFADgGABQgGgBgFgDgAgQABQAAAjAQAAQASgBAAgiQgBgkgQABQgRAAAAAjg");
	this.shape_6.setTransform(702.8,598.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZArIAAgEIABgKQABgEADgEIAHgHIALgIIAHgGIAFgGIACgGIABgGIgBgHIgDgFIgFgDIgFgBIgGABIgFACIgFAEIgFAEIAAgLQAEgEAGgCQAEgCAIAAQAEAAAEACQAFABADADQADADACAEQACAEAAAGIgBAJIgEAIIgGAFIgIAHIgJAHIgGAGQgCADgBACIgBAGIApAAIAAAJg");
	this.shape_7.setTransform(696.3,598.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_8.setTransform(690.7,599.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAoQgFgCgDgGQgEgFgCgHQgCgJAAgJQAAgKACgJQACgIAEgGQADgGAGgDQAFgCAGAAQAbgBgBArQAAAKgCAJQgCAHgDAGQgEAFgFADQgFADgGABQgGgBgFgDgAgRABQAAAjARAAQARgBAAgiQAAgkgRABQgQAAgBAjg");
	this.shape_9.setTransform(685.1,598.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAoQgFgCgEgGQgDgFgBgHQgCgJgBgJQABgKACgJQABgIAEgGQAEgGAEgDQAGgCAGAAQAbgBAAArQgBAKgCAJQgCAHgDAGQgDAFgGADQgFADgGABQgGgBgFgDgAgQABQAAAjAQAAQARgBAAgiQAAgkgQABQgSAAABAjg");
	this.shape_10.setTransform(678.6,598.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAdQgCgCAAgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAACgCACQgCACgDABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAgEgTQgCgCAAgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAADgCACQgCABgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAg");
	this.shape_11.setTransform(674.1,599.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAoQgFgCgDgGQgEgFgCgHQgBgJAAgJQAAgKABgJQACgIAEgGQADgGAGgDQAFgCAGAAQAbgBgBArQABAKgCAJQgCAHgEAGQgEAFgFADQgFADgGABQgGgBgFgDgAgRABQAAAjARAAQASgBAAgiQgBgkgRABQgQAAgBAjg");
	this.shape_12.setTransform(669.6,598.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFArIAAhIIgEADIgDADIgGACIgFACIAAgKIAGgCIAHgDIAGgEIAFgEIAEAAIAABVg");
	this.shape_13.setTransform(662.7,598.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAhAfIAAgiQAAgKgDgEQgDgFgHAAQgHAAgEAGQgEAGAAAIIAAAhIgJAAIAAgjQAAgSgNAAQgHAAgEAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAJQAHgLAMAAQAGAAAFAEQADADACAGQAHgNANAAQAUAAAAAZIAAAkg");
	this.shape_14.setTransform(651.4,599.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQABgQATgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGAKABQAWAAAAAWIAAAmIgKAAIAAgKQgGAMgMAAQgIgBgFgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQACAEAGAAQAGgBAFgFQAEgFAAgHIAAgGg");
	this.shape_15.setTransform(643,599.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPA4IAAgJQAEADAEAAQAMAAAAgVIAAg6IAKAAIAAA4QAAAPgGAIQgGAIgKAAIgIgCgAAGguQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_16.setTransform(637.7,599.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(632.5,598.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPAfIAAg8IAKAAIAAANQACgGAEgEQAEgDAFgBIAGABIAAAKQgDgBgEgBQgHABgDAFQgEAGAAAJIAAAfg");
	this.shape_18.setTransform(629.4,599.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAaQgFgEgBgIQABgQATgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGAKABQAWAAAAAWIAAAmIgKAAIAAgKQgHAMgLAAQgJgBgEgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQACAEAGAAQAGgBAEgFQAFgFAAgHIAAgGg");
	this.shape_19.setTransform(623.7,599.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAPAtIAAgjQAAgSgNAAQgGAAgGAGQgEAEAAAIIAAAjIgKAAIAAhZIAKAAIAAAnQAHgLAMAAQAUAAAAAYIAAAlg");
	this.shape_20.setTransform(617.4,598);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAsIAAhWIAKAAIAAALQAHgMANAAQAMAAAGAHQAHAIAAAOQAAAOgIAKQgHAIgNABQgKAAgHgLIAAAkgAgMgeQgFAHAAAIIAAAJQAAAGAFAFQAFAGAHAAQAIgBAFgGQAFgGAAgMQAAgKgFgGQgEgFgIgBQgIABgFAFg");
	this.shape_21.setTransform(607.3,600.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgDIARgCQAAgPgMgBQgKAAgJAIIAAgKQAJgGALABQAUAAAAAWIAAAmIgJAAIAAgKQgHAMgLAAQgJgBgEgFgAAAABQgGABgEADQgDACAAAHQAAAEADACQAEAEAEAAQAHgBAFgFQAEgFAAgHIAAgGg");
	this.shape_22.setTransform(600.4,599.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_23.setTransform(596.1,598.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGAWIAAgjIgLAAIAAgIIALAAIAAgOIAJgEIAAASIAOAAIAAAIIgOAAIAAAhQAAAGACADQABACAGAAQADAAACgCIAAAJQgDACgGAAQgOAAAAgSg");
	this.shape_24.setTransform(592.6,598.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAYQgHgJAAgPQAAgNAIgIQAIgJALAAQALgBAHAIQAGAIAAAOIAAADIgpAAQAAAKAFAGQAFAGAIAAQALgBAIgGIAAAJQgIAFgNABQgMgBgHgHgAgJgSQgFAFgBAIIAfAAQAAgIgEgFQgEgEgHgBQgFABgFAEg");
	this.shape_25.setTransform(587.5,599.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAKABQALAAAAgJIgBgEIgDgDIgFgCIgDgDIgHgDIgGgCIgCgFQgCgDAAgDQAAgEACgDQACgEAEgCIAGgDIAIgBQAIAAAGADIAAAJQgHgFgIAAIgEACIgEABIgCACIgBAEIABAEIACADIAFACIADADIAIACIAGADIACAFQACACAAAEQAAAEgCADQgCAEgEACQgDACgEABIgIACQgJAAgHgEg");
	this.shape_26.setTransform(581.8,599.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGAKABQAWAAgBAWIAAAmIgJAAIAAgKQgHAMgLAAQgIgBgFgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQACAEAGAAQAGgBAFgFQAEgFAAgHIAAgGg");
	this.shape_27.setTransform(572.7,599.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALAtIgZgdIAAAdIgKAAIAAhZIAKAAIAAA4IAYgbIANAAIgbAcIAdAgg");
	this.shape_28.setTransform(567.3,598);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_29.setTransform(560.4,599.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAqIAAhTIAYAAQAKAAAGAGQAGAEABAJQAAAHgFAGQgDAFgHACIAAAAQAIABAGAFQAFAFAAAJQAAAKgIAIQgIAGgLAAgAgPAhIANAAQAIAAAFgEQAEgEAAgHQABgPgUAAIgLAAgAgPgFIAKAAQAHAAAEgEQAFgEABgHQAAgMgQAAIgLAAg");
	this.shape_30.setTransform(553.9,598.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAFAzQgRgUAAgfQAAgdARgVIAJAAQgSAVAAAdQAAAdASAWg");
	this.shape_31.setTransform(548.7,599.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOAXQgHgJAAgNQgBgOAJgIQAIgJAOAAQAHAAAHADIAAAJQgHgEgIgBQgIABgGAGQgFAHAAAJQgBALAGAGQAGAHAIAAQAHAAAIgGIAAAJQgIAFgJAAQgMAAgIgJg");
	this.shape_32.setTransform(540.5,599.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAXQgHgJgBgOQAAgNAJgJQAIgJANABQAOgBAHAJQAIAIAAAOQgBAOgHAJQgJAJgNAAQgMAAgJgJgAgNgQQgGAGAAAKQAAALAGAGQAGAHAIAAQAJgBAFgFQAFgHAAgLQAAgKgFgGQgFgHgJAAQgIAAgGAHg");
	this.shape_33.setTransform(534.2,599.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_34.setTransform(529.2,598);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAqIAAhTIAYAAQAKAAAGAGQAGAEAAAJQAAAHgDAGQgEAFgHACIAAAAQAJABAEAFQAGAFAAAJQAAAKgIAIQgHAGgLAAgAgPAhIANAAQAIAAAEgEQAFgEABgHQgBgPgTAAIgLAAgAgPgFIAKAAQAHAAAFgEQAEgEAAgHQAAgMgPAAIgLAAg");
	this.shape_35.setTransform(524.6,598.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAhAqIAAg4IABgQIgDAIIgcBAIgEAAIgdg/IgCgJIgBAAIABARIAAA3IgKAAIAAhTIANAAIAaA6IADAKIAAAAIAEgKIAbg6IAMAAIAABTg");
	this.shape_36.setTransform(512.1,598.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAjQgOgMAAgWQAAgUAOgOQAOgOAUAAQAUAAANALQANAMAAAUQABANgIAIQgGAKgLgBQgMABAAgOQgFAOgMgBQgIAAgEgFQgFgHAAgJQAAgNAHgJQAGgIALgBQAEAAADADQADACABADIAAAAIABgHIAIAAIgDAgQAAAMAGAAQAHAAAEgGQAEgHAAgKQAAgQgKgKQgKgKgSAAQgQAAgMALQgMANAAARQAAASAMALQAKALASAAQAOAAALgFIAAAHQgLAFgPAAQgUAAgNgNgAgLgLQgEAGAAAKQAAAGADAEQADAEAFAAQAGAAAEgGQAFgIAAgLQAAgNgLAAQgGAAgFAIg");
	this.shape_37.setTransform(501.1,598.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgDIARgCQAAgPgMgBQgKAAgJAIIAAgKQAJgGALABQAUAAAAAWIAAAmIgJAAIAAgKQgHAMgLAAQgJgBgEgFgAAAABQgGABgEADQgDACAAAHQAAAEADACQAEAEAEAAQAHgBAFgFQAEgFAAgHIAAgGg");
	this.shape_38.setTransform(488.8,599.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_39.setTransform(482.7,598.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAXQgJgJABgOQAAgNAIgJQAIgJANABQAOgBAHAJQAIAIAAAOQgBAOgHAJQgJAJgNAAQgNAAgHgJgAgNgQQgFAGgBAKQABALAFAGQAGAHAHAAQAKgBAFgFQAFgHAAgLQAAgKgFgGQgFgHgKAAQgHAAgGAHg");
	this.shape_40.setTransform(475.5,599.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAqIAAhTIAYAAQAKAAAGAGQAGAEAAAJQAAAHgDAGQgEAFgHACIAAAAQAJABAEAFQAGAFAAAJQAAAKgIAIQgHAGgLAAgAgPAhIANAAQAIAAAEgEQAFgEABgHQgBgPgTAAIgLAAgAgPgFIAKAAQAHAAAFgEQAEgEAAgHQAAgMgPAAIgLAAg");
	this.shape_41.setTransform(468.8,598.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQgBgQAUgDIARgCQAAgPgMgBQgKAAgJAIIAAgKQAJgGALABQAUAAAAAWIAAAmIgJAAIAAgKQgHAMgKAAQgJgBgGgFgAAAABQgGABgEADQgDACAAAHQAAAEADACQAEAEAEAAQAHgBAFgFQAEgFAAgHIAAgGg");
	this.shape_42.setTransform(458.6,599.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_43.setTransform(452.5,598.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAXQgJgJABgOQAAgNAIgJQAIgJANABQAOgBAHAJQAIAIgBAOQAAAOgHAJQgIAJgOAAQgNAAgHgJgAgNgQQgFAGAAAKQAAALAFAGQAGAHAHAAQAKgBAFgFQAFgHAAgLQAAgKgFgGQgFgHgKAAQgHAAgGAHg");
	this.shape_44.setTransform(445.2,599.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAqIAAhTIAYAAQAKAAAGAGQAGAEAAAJQAAAHgDAGQgEAFgHACIAAAAQAJABAEAFQAGAFAAAJQAAAKgIAIQgIAGgKAAgAgPAhIANAAQAIAAAFgEQAEgEAAgHQAAgPgTAAIgLAAgAgPgFIAKAAQAHAAAEgEQAGgEgBgHQAAgMgPAAIgLAAg");
	this.shape_45.setTransform(438.5,598.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAKABQALAAAAgJIgBgEIgDgDIgFgCIgDgDIgIgDIgFgCIgDgFQgBgDAAgDQAAgEACgDQACgEAEgCIAHgDIAHgBQAIAAAGADIAAAJQgGgFgJAAIgEACIgEABIgCACIgBAEIABAEIACADIAFACIADADIAIACIAGADIACAFQACACAAAEQAAAEgCADQgCAEgDACQgDACgFABIgIACQgJAAgHgEg");
	this.shape_46.setTransform(429,599.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgDIARgCQAAgPgMgBQgKAAgJAIIAAgKQAJgGAKABQAWAAgBAWIAAAmIgJAAIAAgKQgHAMgLAAQgIgBgFgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQADAEAEAAQAHgBAFgFQAEgFAAgHIAAgGg");
	this.shape_47.setTransform(423.2,599.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_48.setTransform(417.1,598.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAYQgHgJAAgPQAAgNAIgIQAIgJALAAQALgBAHAIQAGAIAAAOIAAADIgpAAQAAAKAFAGQAFAGAIAAQALgBAIgGIAAAJQgIAFgNABQgMgBgHgHgAgJgSQgFAFgBAIIAfAAQAAgIgEgFQgEgEgHgBQgFABgFAEg");
	this.shape_49.setTransform(410.3,599.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAqIAAhTIAYAAQAKAAAGAGQAGAEAAAJQAAAHgDAGQgEAFgHACIAAAAQAJABAEAFQAGAFAAAJQAAAKgIAIQgHAGgLAAgAgPAhIANAAQAIAAAEgEQAFgEABgHQgBgPgTAAIgLAAgAgPgFIAKAAQAHAAAFgEQAEgEAAgHQAAgMgPAAIgLAAg");
	this.shape_50.setTransform(404,598.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_51.setTransform(395.5,598.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWApIAAgKQAKAGAJAAQAVAAAAgYIAAgGIAAAAQgHALgNAAQgLAAgHgIQgHgIAAgMQAAgQAIgJQAHgJAMAAQAMAAAGAKIAAAAIAAgIIAKAAIAAA2QAAAhgfAAQgLAAgIgEgAgMgdQgFAGAAAMQAAAKAFAFQAFAGAHAAQAIAAAFgGQAFgEAAgJIAAgJQAAgHgFgFQgFgGgHAAQgIAAgFAHg");
	this.shape_52.setTransform(390.3,600.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAPAfIAAghQAAgUgOAAQgGAAgFAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAKAAAFAHQAFAGAAAMIAAAkg");
	this.shape_53.setTransform(383.7,599.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_54.setTransform(376.7,599.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgPA4IAAgJQAEADAEAAQAMAAAAgVIAAg6IAKAAIAAA4QAAAPgGAIQgGAIgKAAIgIgCgAAGguQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_55.setTransform(371,599.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAQAfIAAghQAAgUgPAAQgFAAgFAGQgFAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAJAAAGAHQAFAGAAAMIAAAkg");
	this.shape_56.setTransform(367.2,599.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_57.setTransform(360.2,599.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAMAtIgagdIAAAdIgKAAIAAhZIAKAAIAAA4IAYgbIANAAIgbAcIAdAgg");
	this.shape_58.setTransform(354.4,598);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHAOIAHgbIAIAAIgIAbg");
	this.shape_59.setTransform(346.1,602.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAQAfIAAghQgBgUgOAAQgGAAgFAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAJAAAGAHQAFAGAAAMIAAAkg");
	this.shape_60.setTransform(341.7,599.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_61.setTransform(334.8,599.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_62.setTransform(330,598.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAJABQAMAAAAgJIgBgEIgDgDIgFgCIgDgDIgIgDIgEgCIgEgFQgBgDAAgDQAAgEACgDQACgEAEgCIAHgDIAHgBQAIAAAGADIAAAJQgGgFgJAAIgEACIgDABIgDACIgBAEIABAEIADADIADACIAFADIAHACIAGADIACAFQACACAAAEQAAAEgCADQgCAEgDACQgEACgEABIgIACQgJAAgHgEg");
	this.shape_63.setTransform(326.1,599.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGAKABQAWAAgBAWIAAAmIgJAAIAAgKQgHAMgLAAQgIgBgFgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQACAEAGAAQAGgBAFgFQAEgFAAgHIAAgGg");
	this.shape_64.setTransform(320.3,599.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGAWIAAgjIgKAAIAAgIIAKAAIAAgOIAIgEIAAASIAQAAIAAAIIgQAAIAAAhQAAAGACADQACACAFAAQAEAAADgCIAAAJQgEACgFAAQgPAAAAgSg");
	this.shape_65.setTransform(315.3,598.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAKABQALAAAAgJIgBgEIgDgDIgFgCIgEgDIgGgDIgGgCIgCgFQgCgDAAgDQAAgEACgDQACgEADgCIAHgDIAIgBQAIAAAGADIAAAJQgHgFgIAAIgEACIgEABIgCACIgBAEIABAEIACADIAFACIADADIAIACIAGADIADAFQABACAAAEQAAAEgCADQgCAEgEACQgDACgEABIgIACQgJAAgHgEg");
	this.shape_66.setTransform(310.8,599.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAdAqIgFgCIgEgEIgFgGIgFAFIgHAEIgHADIgKACQgGAAgFgCQgGgCgDgDQgEgDgCgEQgCgFAAgGQAAgJAFgGQAFgGAJgEIgDgCIgDgFIgDgEIAAgGQAAgFABgEQACgDADgDQADgCAEgBQAEgCAEABQAFgBAEACQACABADACIAEAGQACAEAAAEQAAAGgEAFQgEAEgHAEIAGAEIAGAEIAFAGIAFAGQAFgGACgIQADgHAAgIIAAgFIgBgEIAJAAIABAEIAAAEIgBALIgDAJIgFAKIgFAIIAEAFIADADIAEADIAEABIAEgBIADgBIAAAIIgEACIgFABIgFgCgAgWACIgGADIgDAGIgBAIIABAHQABADADACIAGADIAHABIAIgBIAGgDIAGgDIAFgFIgHgJIgFgHIgGgFIgIgDIgHADgAgUggQgDADAAAGIAAAFIACADIAEADIADADQAIgCADgEQADgDAAgGIAAgFIgDgDIgEgCIgEgBQgFAAgEADg");
	this.shape_67.setTransform(300.3,598.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_68.setTransform(290.6,598);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_69.setTransform(287.7,598);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQABgQATgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGAKABQAWAAAAAWIAAAmIgKAAIAAgKQgGAMgMAAQgIgBgFgFgAAAABQgGABgDADQgEACAAAHQAAAEAEACQACAEAGAAQAGgBAEgFQAFgFAAgHIAAgGg");
	this.shape_70.setTransform(283,599.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAhAfIAAgiQAAgKgDgEQgDgFgHAAQgHAAgEAGQgEAGAAAIIAAAhIgJAAIAAgjQAAgSgNAAQgHAAgEAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAJQAHgLAMAAQAGAAAFAEQADADACAGQAHgNANAAQAUAAAAAZIAAAkg");
	this.shape_71.setTransform(275,599.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPAfIAAg8IAKAAIAAANQACgGAEgEQAEgDAFgBIAGABIAAAKQgDgBgEgBQgHABgDAFQgEAGAAAJIAAAfg");
	this.shape_72.setTransform(264.8,599.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSAYQgHgJAAgPQAAgNAIgIQAIgJALAAQALgBAHAIQAGAIAAAOIAAADIgpAAQAAAKAFAGQAFAGAIAAQALgBAIgGIAAAJQgIAFgNABQgMgBgHgHgAgJgSQgFAFgBAIIAfAAQAAgIgEgFQgEgEgHgBQgFABgFAEg");
	this.shape_73.setTransform(259.2,599.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAJABQAMAAAAgJIgBgEIgDgDIgEgCIgFgDIgGgDIgGgCIgCgFQgCgDAAgDQAAgEACgDQACgEADgCIAHgDIAIgBQAIAAAGADIAAAJQgGgFgJAAIgEACIgEABIgCACIgBAEIABAEIACADIAEACIAFADIAHACIAFADIAEAFQABACAAAEQAAAEgCADQgCAEgEACQgDACgEABIgIACQgJAAgHgEg");
	this.shape_74.setTransform(253.6,599.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_75.setTransform(249.5,598.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAtIAAgjQABgSgOAAQgGAAgGAGQgEAEAAAIIAAAjIgKAAIAAhZIAKAAIAAAnQAHgLAMAAQAUAAAAAYIAAAlg");
	this.shape_76.setTransform(244.7,598);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgNAXQgJgJAAgNQABgOAIgIQAJgJANAAQAIAAAGADIAAAJQgHgEgIgBQgIABgFAGQgHAHAAAJQABALAFAGQAGAHAIAAQAHAAAIgGIAAAJQgIAFgJAAQgMAAgHgJg");
	this.shape_77.setTransform(238.5,599.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAQAfIAAghQgBgUgOAAQgGAAgEAGQgFAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAJAAAGAHQAFAGAAAMIAAAkg");
	this.shape_78.setTransform(232.4,599.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQAAgQATgDIARgCQAAgPgNgBQgJAAgJAIIAAgKQAJgGALABQAUAAABAWIAAAmIgKAAIAAgKQgGAMgLAAQgJgBgGgFgAAAABQgGABgEADQgDACAAAHQAAAEADACQAEAEAEAAQAHgBAEgFQAFgFAAgHIAAgGg");
	this.shape_79.setTransform(225.7,599.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgPAfIAAg8IAKAAIAAANQACgGAEgEQAEgDAFgBIAGABIAAAKQgDgBgEgBQgHABgDAFQgEAGAAAJIAAAfg");
	this.shape_80.setTransform(221.2,599.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgHAtIAAgzIgKAAIAAgIIAKAAIAAgJQAAgKAGgGQAEgFAIAAIAHABIAAAIQgDgBgDAAQgKAAAAANIAAAJIAOAAIAAAIIgOAAIAAAzg");
	this.shape_81.setTransform(217,598);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAKABQALAAAAgJIgBgEIgDgDIgEgCIgFgDIgGgDIgGgCIgCgFQgCgDAAgDQAAgEACgDQACgEADgCIAHgDIAIgBQAIAAAGADIAAAJQgHgFgIAAIgEACIgEABIgCACIgBAEIABAEIACADIAFACIADADIAIACIAGADIADAFQABACAAAEQAAAEgCADQgCAEgEACQgDACgEABIgIACQgJAAgHgEg");
	this.shape_82.setTransform(209.1,599.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_83.setTransform(203,599.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTAcIAAgKQAIAFAJABQAMAAAAgJIgBgEIgDgDIgEgCIgFgDIgHgDIgEgCIgDgFQgCgDAAgDQAAgEACgDQACgEADgCIAHgDIAIgBQAIAAAGADIAAAJQgGgFgJAAIgEACIgDABIgDACIgBAEIABAEIADADIADACIAFADIAHACIAFADIAEAFQABACAAAEQAAAEgCADQgCAEgEACQgCACgFABIgIACQgJAAgHgEg");
	this.shape_84.setTransform(197.2,599.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_85.setTransform(191.1,599.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAQAtIAAgjQAAgSgPAAQgFAAgFAGQgFAEAAAIIAAAjIgKAAIAAhZIAKAAIAAAnQAHgLAMAAQAUAAAAAYIAAAlg");
	this.shape_86.setTransform(184.5,598);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAQAqIgggnIgCgCIAAApIgKAAIAAhTIAKAAIAAAnIACgDIAegkIANAAIgjApIAlAqg");
	this.shape_87.setTransform(178.1,598.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgMAzQARgVAAgdQAAgegRgVIAIAAQARAVAAAeQAAAegRAUg");
	this.shape_88.setTransform(805.9,583.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgLApQgFgDgDgFQgEgGgCgIQgCgHAAgLQAAgKACgIQACgIAEgGQAEgFAEgDQAGgEAGAAQAaAAAAArQAAAKgCAIQgCAJgDAFQgEAGgFADQgFADgGAAQgGAAgFgDgAgRABQAAAiARAAQARABAAgkQABgjgSAAQgRAAAAAkg");
	this.shape_89.setTransform(801.3,582.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgLApQgFgDgEgFQgDgGgBgIQgCgHAAgLQAAgKACgIQABgIAEgGQADgFAFgDQAGgEAGAAQAbAAAAArQAAAKgDAIQgBAJgEAFQgDAGgGADQgFADgGAAQgGAAgFgDgAgQABQAAAiAQAAQARABABgkQAAgjgRAAQgSAAABAkg");
	this.shape_90.setTransform(794.8,582.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgDAeQgDgDAAgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAQgBADgBADQgCACgDAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgDgTQgDgCAAgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAAACABQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQgBADgBACQgCABgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_91.setTransform(790.3,583.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgYAnIAAgLQAJAIALgBQAEAAADgBIAGgDIAEgFQACgDAAgEQAAgRgXAAIgHAAIAAgHIAHAAQATAAAAgPQABgPgQAAQgIAAgIAHIAAgJQAIgGALAAQAEAAAFACQAEABADADQADADABAEQACADAAAEQABARgSAFQAFAAADABIAGAFQADACACADQACAEAAAEQAAAGgDAEQgCAFgEADQgDAEgGACQgGACgFAAQgMgBgIgEg");
	this.shape_92.setTransform(785.7,582.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgZArIAAgEIABgKQABgEADgEIAHgHIALgIIAHgGIAFgGIACgGIABgGIgBgHIgDgFIgFgDIgFgBIgGABIgFACIgFAEIgFAEIAAgLQAEgEAGgCQAEgCAIAAQAEAAAEACQAFABADADQADADACAEQACAEAAAGIgBAJIgEAIIgGAFIgIAHIgJAHIgGAGQgCADgBACIgBAGIApAAIAAAJg");
	this.shape_93.setTransform(779.3,582.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_94.setTransform(773.7,583.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgLApQgFgDgEgFQgDgGgBgIQgDgHAAgLQAAgKADgIQABgIAEgGQAEgFAEgDQAGgEAGAAQAaAAAAArQAAAKgCAIQgCAJgDAFQgEAGgFADQgFADgGAAQgGAAgFgDgAgRABQABAiAQAAQARABAAgkQABgjgSAAQgRAAAAAkg");
	this.shape_95.setTransform(768.1,582.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgLApQgFgDgEgFQgDgGgBgIQgCgHAAgLQAAgKACgIQABgIAEgGQADgFAFgDQAGgEAGAAQAaAAABArQAAAKgCAIQgDAJgDAFQgDAGgGADQgFADgGAAQgGAAgFgDgAgQABQAAAiAQAAQARABABgkQAAgjgRAAQgSAAABAkg");
	this.shape_96.setTransform(761.6,582.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDAeQgCgDgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAQgBADgBADQgCACgDAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgDgTQgCgCgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAAACABQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQgBADgBACQgCABgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_97.setTransform(757.1,583.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgNAqIADgPIAFgQIAFgNIAGgNIAGgLIAEgHIgqAAIAAgIIA1AAIAAAGIgFAIIgFALIgHAOIgGANIgEAQQgCAIAAAHg");
	this.shape_98.setTransform(752.5,582.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgLApQgFgDgEgFQgDgGgBgIQgCgHgBgLQABgKACgIQABgIAEgGQAEgFAEgDQAGgEAGAAQAbAAAAArQgBAKgCAIQgCAJgDAFQgDAGgGADQgFADgGAAQgGAAgFgDgAgQABQAAAiAQAAQARABAAgkQAAgjgQAAQgSAAABAkg");
	this.shape_99.setTransform(746.1,582.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAhAfIAAgiQAAgKgDgEQgDgFgHAAQgHAAgEAGQgEAGAAAIIAAAhIgJAAIAAgjQAAgSgNAAQgHAAgEAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAJQAHgLAMAAQAGAAAFAEQADADACAGQAHgNANAAQAUAAAAAZIAAAkg");
	this.shape_100.setTransform(734.4,583.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQAAgQATgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBAAAXIAAAmIgKAAIAAgJQgGAKgLABQgKAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQADACAFAAQAGABAEgGQAFgEAAgJIAAgFg");
	this.shape_101.setTransform(726,583.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgPA4IAAgJQAEADAEAAQAMAAAAgVIAAg6IAKAAIAAA4QAAAPgGAIQgGAIgKAAIgIgCgAAGguQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_102.setTransform(720.7,583.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_103.setTransform(715.5,582.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgPAeIAAg6IAKAAIAAAMQACgGAEgEQAEgEAFAAIAGACIAAAJQgDgCgEAAQgHAAgDAGQgEAGAAAJIAAAeg");
	this.shape_104.setTransform(712.4,583.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQAAgQATgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBAAAXIAAAmIgKAAIAAgJQgGAKgLABQgKAAgFgGgAAAACQgGABgEACQgDADAAAGQAAAEADADQADACAGAAQAGABAEgGQAFgEAAgJIAAgFg");
	this.shape_105.setTransform(706.7,583.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAPAsIAAgiQAAgSgNAAQgHAAgEAGQgFAEAAAIIAAAiIgKAAIAAhYIAKAAIAAAoQAHgMAMAAQAUAAAAAXIAAAlg");
	this.shape_106.setTransform(700.4,582.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgbAtIAAhXIAKAAIAAAKQAHgMANABQAMgBAGAJQAHAHAAAOQAAAOgIAKQgHAJgNAAQgKgBgHgJIAAAkgAgMgeQgFAHAAAIIAAAIQAAAHAFAFQAFAFAHAAQAIABAFgIQAFgFAAgMQAAgKgFgGQgEgFgIAAQgIAAgFAFg");
	this.shape_107.setTransform(690.3,584.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBgBAXIAAAmIgJAAIAAgJQgHAKgLABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQACACAGAAQAGABAFgGQAEgEAAgJIAAgFg");
	this.shape_108.setTransform(683.4,583.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_109.setTransform(679.1,582.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGAWIAAgjIgKAAIAAgIIAKAAIAAgOIAJgEIAAASIAPAAIAAAIIgPAAIAAAhQAAAGABADQACACAGAAQADAAADgCIAAAJQgEACgFAAQgPAAAAgSg");
	this.shape_110.setTransform(675.6,582.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgSAXQgHgIAAgPQAAgNAIgIQAIgKALABQALAAAHAHQAGAIAAANIAAAFIgpAAQAAAJAFAGQAFAFAIAAQALABAIgIIAAAJQgIAHgNAAQgMAAgHgJgAgJgSQgFAGgBAIIAfAAQAAgJgEgFQgEgEgHAAQgFAAgFAEg");
	this.shape_111.setTransform(670.5,583.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgTAcIAAgLQAIAHAKgBQALAAAAgIIgBgEIgDgDIgFgDIgDgBIgHgEIgGgCIgDgFQgBgCAAgEQAAgFACgDQACgDAEgCIAHgDIAHgBQAIAAAGACIAAAKQgHgFgIABIgEABIgEABIgCACIgBAEIABAEIACADIAFACIADADIAIACIAGADIACAEQACADAAAEQAAAFgCADQgCADgDACQgDADgFABIgIABQgJgBgHgDg");
	this.shape_112.setTransform(664.8,583.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgSAXQgHgIAAgPQAAgNAIgIQAIgKALABQALAAAHAHQAGAIAAANIAAAFIgpAAQAAAJAFAGQAFAFAIAAQALABAIgIIAAAJQgIAHgNAAQgMAAgHgJgAgJgSQgFAGgBAIIAfAAQAAgJgEgFQgEgEgHAAQgFAAgFAEg");
	this.shape_113.setTransform(655.8,583.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAfIAAghQAAgUgPAAQgFAAgFAGQgFAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAJAAAGAHQAFAGAAAMIAAAkg");
	this.shape_114.setTransform(649.3,583.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_115.setTransform(644.4,582.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgEAsIAAhYIAJAAIAABYg");
	this.shape_116.setTransform(641.5,582.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAQAfIAAghQAAgUgPAAQgFAAgFAGQgFAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAKQAHgMAMAAQAJAAAGAHQAFAGAAAMIAAAkg");
	this.shape_117.setTransform(636.7,583.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgUAXQgJgIABgPQAAgOAIgIQAIgIANAAQAOAAAHAIQAIAIgBAOQAAAOgHAJQgIAJgOAAQgNAAgHgJgAgNgQQgFAHgBAJQABALAFAGQAGAGAHAAQAKABAFgHQAFgFAAgMQAAgKgFgGQgFgGgKAAQgHAAgGAGg");
	this.shape_118.setTransform(629.7,583.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAFAzQgRgUAAgeQAAgeARgVIAJAAQgSAVAAAeQAAAdASAVg");
	this.shape_119.setTransform(624.8,583.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAnIAAgKQAJAGAJAAQAEAAADgCIAGgEQADgCABgDQACgEAAgEQAAgIgGgFQgFgDgKAAIgDAAIgEAAIgEAAIgDAAIADgqIAmAAIAAAJIgeAAIgCAZIAEgBIAEAAQAGAAAFACQAFACAEADQAEACACAFQACAFAAAGQAAAGgDAFQgCAFgEADQgDAEgGACQgFACgGAAQgMAAgGgEg");
	this.shape_120.setTransform(616.2,582.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgVApIAAgJQAHADAIAAQAFAAAEgCQAEgCADgFQAEgEABgHQACgHAAgIQgGALgMAAQgGAAgEgCQgFgCgDgEQgDgDgCgEQgCgEAAgHQAAgGACgFQACgFAEgEQAEgDAEgDQAFgCAFAAQAHAAAFADQAEACAEAFQADAGACAHQACAHAAAJQAAAKgDAKQgCAIgEAHQgFAGgGADQgGADgIABQgIAAgGgDgAgGghIgFAEIgEAGIgBAHIABAIIAEAHIAFACQADABADAAIAGgBQADgBADgBIADgGIABgFQAAgGgBgDQgBgFgDgCIgFgFQgDgCgDAAQgDABgDABg");
	this.shape_121.setTransform(609.6,582.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAFArIAAhHIgDACIgEADIgGADIgGACIAAgKIAHgDIAHgDIAFgEIAGgEIADAAIAABVg");
	this.shape_122.setTransform(602.8,582.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgNAqIADgPIAFgQIAFgNIAGgNIAGgLIAEgHIgqAAIAAgIIA1AAIAAAGIgFAIIgFALIgHAOIgGANIgEAQQgCAIAAAHg");
	this.shape_123.setTransform(596.7,582.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_124.setTransform(591.2,583.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgLApQgFgDgDgFQgEgGgCgIQgCgHAAgLQAAgKACgIQACgIAEgGQAEgFAFgDQAFgEAGAAQAbAAgBArQAAAKgBAIQgCAJgEAFQgEAGgFADQgFADgGAAQgGAAgFgDgAgRABQAAAiARAAQASABAAgkQgBgjgRAAQgQAAgBAkg");
	this.shape_125.setTransform(585.5,582.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgLApQgFgDgEgFQgDgGgBgIQgDgHAAgLQAAgKADgIQABgIAEgGQAEgFAEgDQAGgEAGAAQAaAAAAArQAAAKgCAIQgCAJgDAFQgEAGgFADQgFADgGAAQgGAAgFgDgAgRABQABAiAQAAQARABAAgkQABgjgSAAQgRAAAAAkg");
	this.shape_126.setTransform(579.1,582.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgKAqQgFgDgEgDQgDgDgCgFQgCgEAAgGIABgGIADgGIAEgGIAHgCQgFgEgEgEQgDgFAAgGQAAgEACgEIAFgHIAHgFQAFgCAEAAQAFAAAEACIAIAFIAFAHQABAEAAAEQAAAGgDAFQgDAEgFAEIAGACIAFAGIADAGQABADAAADQAAAGgCAEQgCAFgEADQgDADgFADQgFACgGAAQgFAAgFgCgAgGACQgDABgCADIgEAFQgBADAAADQAAAEABAEQABADADACQACADADABIAGABQAEAAADgBQADgBACgDIAEgFIABgIIgBgGIgEgFIgFgEQgDgBgEgBQgDABgDABgAgFghIgEADQgCABgBADIgBAGQAAADABACIADAFIAEADIAFABQADAAACgCIAFgCIADgFIABgFIgBgGIgDgEIgFgDQgCgBgDgBQgCABgDABg");
	this.shape_127.setTransform(572.6,582.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgYAnIAAgLQAJAIALgBQAEAAADgBIAGgDIAEgFQACgDAAgEQAAgRgXAAIgHAAIAAgHIAHAAQATAAAAgPQABgPgQAAQgIAAgIAHIAAgJQAIgGALAAQAEAAAFACQAEABADADQADADABAEQACADAAAEQABARgSAFQAFAAADABIAGAFQADACACADQACAEAAAEQAAAGgDAEQgCAFgEADQgDAEgGACQgGACgFAAQgMgBgIgEg");
	this.shape_128.setTransform(566.1,582.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_129.setTransform(560.6,583.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgYAnIAAgLQAJAIALgBQAEAAADgBIAGgDIAEgFQACgDAAgEQAAgRgXAAIgHAAIAAgHIAHAAQATAAAAgPQABgPgQAAQgIAAgIAHIAAgJQAIgGALAAQAEAAAFACQAEABADADQADADABAEQACADAAAEQABARgSAFQAFAAADABIAGAFQADACACADQACAEAAAEQAAAGgDAEQgCAFgEADQgDAEgGACQgGACgFAAQgMgBgIgEg");
	this.shape_130.setTransform(554.8,582.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgXAnIAAgLQAIAIALgBQAEAAADgBIAGgDIAEgFQABgDABgEQgBgRgWAAIgHAAIAAgHIAGAAQAVAAAAgPQAAgPgPAAQgKAAgHAHIAAgJQAIgGALAAQAFAAADACQAFABADADQADADABAEQADADAAAEQAAARgRAFQAEAAAEABIAFAFQAEACABADQABAEAAAEQAAAGgCAEQgCAFgEADQgEAEgFACQgFACgGAAQgMgBgHgEg");
	this.shape_131.setTransform(548.4,582.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgKAqQgFgDgEgDQgDgDgCgFQgCgEAAgGIABgGIADgGIAEgGIAHgCQgFgEgEgEQgDgFAAgGQAAgEACgEIAFgHIAHgFQAFgCAEAAQAFAAAEACIAIAFIAFAHQABAEAAAEQAAAGgDAFQgDAEgFAEIAGACIAFAGIADAGQABADAAADQAAAGgCAEQgCAFgEADQgDADgFADQgFACgGAAQgFAAgFgCgAgGACQgDABgCADIgEAFQgBADAAADQAAAEABAEQABADADACQACADADABIAGABQAEAAADgBQADgBACgDIAEgFIABgIIgBgGIgEgFIgFgEQgDgBgEgBQgDABgDABgAgFghIgEADQgCABgBADIgBAGQAAADABACIADAFIAEADIAFABQADAAACgCIAFgCIADgFIABgFIgBgGIgDgEIgFgDQgCgBgDgBQgCABgDABg");
	this.shape_132.setTransform(542,582.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgMAzQARgVAAgdQAAgegRgVIAIAAQARAVAAAeQAAAegRAUg");
	this.shape_133.setTransform(536.6,583.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZArIAAgEIABgKQABgEADgEIAHgHIALgIIAHgGIAFgGIACgGIABgGIgBgHIgDgFIgFgDIgFgBIgGABIgFACIgFAEIgFAEIAAgLQAEgEAGgCQAEgCAIAAQAEAAAEACQAFABADADQADADACAEQACAEAAAGIgBAJIgEAIIgGAFIgIAHIgJAHIgGAGQgCADgBACIgBAGIApAAIAAAJg");
	this.shape_134.setTransform(531.9,582.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKApQgFgDgEgEQgDgGgCgHQgCgHAAgJQAAgKADgJQACgJAFgGQAEgHAGgDQAGgEAIAAQAIAAAFADIAAAJQgGgDgHgBQgGABgDACQgFADgDAEQgDAFgCAGQgCAHAAAHQAGgJANAAQAFAAAFABQAEACADAEQADACACAFQACAEAAAHQAAAGgCAEQgCAGgEADQgDAEgFADQgFACgGAAQgFgBgFgCgAgFAAIgFACQgDADgBADQgBADAAAEQAAAEABAEQABAEACACIAGAFQADABADAAQADAAADgBIAFgEIAEgGIABgHIgBgIIgDgHQgDgCgDAAQgDgCgEABQgCgBgDACg");
	this.shape_135.setTransform(525.6,582.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgDAcIAAgYIgXAAIAAgHIAXAAIAAgXIAHAAIAAAXIAYAAIAAAHIgYAAIAAAYg");
	this.shape_136.setTransform(518.2,583.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAFAzQgRgUAAgeQAAgeARgVIAJAAQgSAVAAAeQAAAdASAVg");
	this.shape_137.setTransform(512.6,583.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAaAqIgIgYIgjAAIgJAYIgKAAIAghTIAJAAIAgBTgAgBgZIgNAiIAcAAIgNgiIgBgGIgBAGg");
	this.shape_138.setTransform(503.3,582.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AATAqIgRg8IgCgJIAAAJIgSA8IgLAAIgZhTIALAAIASBAQABAEAAAEIABAAIACgIIAThAIAIAAIASBAIABAIIACgIIARhAIAKAAIgXBTg");
	this.shape_139.setTransform(494.3,582.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgMAAQgKAAgJAHIAAgKQAJgFAKAAQAWgBgBAXIAAAmIgJAAIAAgJQgHAKgLABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQADACAEAAQAHABAFgGQAEgEAAgJIAAgFg");
	this.shape_140.setTransform(482.2,583.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_141.setTransform(477.8,582.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgFAeIgWg7IALAAIAOArQACAEAAAEIAAAAIACgIIAQgrIAKAAIgYA7g");
	this.shape_142.setTransform(473.5,583.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_143.setTransform(463.8,583.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgMAAQgKAAgJAHIAAgKQAJgFALAAQAUgBAAAXIAAAmIgJAAIAAgJQgHAKgLABQgJAAgEgGgAAAACQgGABgEACQgDADAAAGQAAAEADADQAEACAEAAQAHABAFgGQAEgEAAgJIAAgFg");
	this.shape_144.setTransform(457.3,583.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgGAWIAAgjIgKAAIAAgIIAKAAIAAgOIAJgEIAAASIAPAAIAAAIIgPAAIAAAhQAAAGABADQACACAGAAQADAAADgCIAAAJQgEACgFAAQgPAAAAgSg");
	this.shape_145.setTransform(452.4,582.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBgBAXIAAAmIgJAAIAAgJQgHAKgLABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQACACAGAAQAGABAFgGQAEgEAAgJIAAgFg");
	this.shape_146.setTransform(447.2,583.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgSAXQgHgIAAgPQAAgNAIgIQAIgKALABQALAAAHAHQAGAIAAANIAAAFIgpAAQAAAJAFAGQAFAFAIAAQALABAIgIIAAAJQgIAHgNAAQgMAAgHgJgAgJgSQgFAGgBAIIAfAAQAAgJgEgFQgEgEgHAAQgFAAgFAEg");
	this.shape_147.setTransform(437.9,583.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgHAtIAAgzIgKAAIAAgIIAKAAIAAgKQAAgJAGgGQAEgFAIAAIAHABIAAAJQgDgCgDAAQgKAAAAAMIAAAKIAOAAIAAAIIgOAAIAAAzg");
	this.shape_148.setTransform(433.1,582.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQAAgQATgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFALAAQAUgBABAXIAAAmIgKAAIAAgJQgGAKgLABQgJAAgGgGgAAAACQgGABgEACQgDADAAAGQAAAEADADQAEACAEAAQAHABAEgGQAFgEAAgJIAAgFg");
	this.shape_149.setTransform(427.8,583.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgNAXQgJgJABgMQAAgPAIgIQAJgKANABQAIAAAGACIAAAKQgHgEgIAAQgIgBgFAIQgHAGAAAJQABALAFAGQAGAGAIAAQAHAAAIgFIAAAJQgIAEgJABQgMAAgHgJg");
	this.shape_150.setTransform(422.1,583.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBgBAXIAAAmIgJAAIAAgJQgHAKgLABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQACACAGAAQAGABAFgGQAEgEAAgJIAAgFg");
	this.shape_151.setTransform(416.1,583.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_152.setTransform(410,582.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVAXQgHgIgBgPQAAgOAJgIQAIgIANAAQAOAAAHAIQAIAIAAAOQgBAOgHAJQgJAJgNAAQgMAAgJgJgAgNgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJABAFgHQAFgFAAgMQAAgKgFgGQgFgGgJAAQgIAAgGAGg");
	this.shape_153.setTransform(402.8,583.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_154.setTransform(395.9,582.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgTAcIAAgLQAIAHAJgBQAMAAAAgIIgBgEIgDgDIgEgDIgFgBIgHgEIgEgCIgEgFQgBgCAAgEQAAgFACgDQACgDADgCIAIgDIAHgBQAIAAAGACIAAAKQgHgFgIABIgEABIgDABIgDACIgBAEIABAEIADADIADACIAFADIAHACIAFADIAEAEQABADAAAEQAAAFgCADQgCADgDACQgDADgFABIgIABQgJgBgHgDg");
	this.shape_155.setTransform(389.7,583.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgSAaQgEgEgBgIQABgQATgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBAAAXIAAAmIgKAAIAAgJQgHAKgKABQgKAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQACACAGAAQAGABAEgGQAFgEAAgJIAAgFg");
	this.shape_156.setTransform(383.9,583.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_157.setTransform(377.8,582.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgSAXQgHgIAAgPQAAgNAIgIQAIgKALABQALAAAHAHQAGAIAAANIAAAFIgpAAQAAAJAFAGQAFAFAIAAQALABAIgIIAAAJQgIAHgNAAQgMAAgHgJgAgJgSQgFAGgBAIIAfAAQAAgJgEgFQgEgEgHAAQgFAAgFAEg");
	this.shape_158.setTransform(371,583.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgRAjIAAAJIgKAAIAAhYIAKAAIAAAnQAHgMANAAQAMAAAGAIQAHAIAAANQAAAPgIAJQgHAJgNAAQgLAAgGgKgAgMgDQgFAFAAAJIAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgHQAFgGAAgMQAAgKgFgFQgEgGgIAAQgIAAgFAGg");
	this.shape_159.setTransform(364.5,582.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgiAjQgNgNABgUQgBgVAOgOQAOgOAUAAQAUAAANAMQANALAAATQAAANgGAKQgIAIgJABQgNAAgBgPQgEAPgMAAQgHgBgFgFQgFgHAAgKQAAgMAGgIQAIgJAJAAQAEAAAEACQADACABAEIAAAAIABgHIAHAAIgCAfQgBAMAIABQAGgBAEgHQAEgGAAgKQAAgQgKgLQgKgKgTABQgPgBgMAMQgLANAAARQAAASALALQAKALARAAQAPAAALgEIAAAGQgLAFgPAAQgVAAgNgNgAgKgMQgFAIAAAIQAAAIADADQADAFAFAAQAGgBAFgHQAEgHAAgLQAAgNgLAAQgGABgEAGg");
	this.shape_160.setTransform(355.1,582.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgVAqIAAhTIApAAIAAAJIgfAAIAAAcIAdAAIAAAHIgdAAIAAAeIAhAAIAAAJg");
	this.shape_161.setTransform(343.3,582.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAWAqIgqhCIgDgFIAAAMIAAA7IgKAAIAAhTIANAAIApBBIADAFIAAgMIAAg6IAKAAIAABTg");
	this.shape_162.setTransform(335.5,582.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_163.setTransform(329.4,582.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgVAqIAAhTIAKAAIAABKIAhAAIAAAJg");
	this.shape_164.setTransform(325.4,582.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgMAAQgKAAgJAHIAAgKQAJgFAKAAQAWgBgBAXIAAAmIgJAAIAAgJQgHAKgLABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQADACAEAAQAHABAFgGQAEgEAAgJIAAgFg");
	this.shape_165.setTransform(315.7,583.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_166.setTransform(311.3,582.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgFAeIgWg7IALAAIAOArQACAEAAAEIAAAAIACgIIAQgrIAKAAIgYA7g");
	this.shape_167.setTransform(307,583.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEAsIAAg7IAJAAIAAA7gAgDggQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_168.setTransform(299.4,582.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAhAfIAAgiQAAgKgDgEQgDgFgHAAQgHAAgEAGQgEAGAAAIIAAAhIgJAAIAAgjQAAgSgNAAQgHAAgEAGQgEAFAAAJIAAAhIgKAAIAAg7IAKAAIAAAJQAHgLAMAAQAGAAAFAEQADADACAGQAHgNANAAQAUAAAAAZIAAAkg");
	this.shape_169.setTransform(292.8,583.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQABgQATgCIARgDQAAgPgNAAQgJAAgJAHIAAgKQAJgFAKAAQAWgBAAAXIAAAmIgKAAIAAgJQgGAKgMABQgIAAgFgGgAAAACQgGABgDACQgEADAAAGQAAAEAEADQACACAGAAQAGABAEgGQAFgEAAgJIAAgFg");
	this.shape_170.setTransform(284.4,583.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AALAsIgZgdIAAAdIgKAAIAAhYIAKAAIAAA4IAYgaIANAAIgbAcIAdAeg");
	this.shape_171.setTransform(279,582.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgGAWIAAgjIgLAAIAAgIIALAAIAAgOIAIgEIAAASIAPAAIAAAIIgPAAIAAAhQABAGACADQACACAEAAQAEAAACgCIAAAJQgDACgGAAQgOAAAAgSg");
	this.shape_172.setTransform(270.2,582.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgSAaQgEgEAAgIQAAgQATgCIARgDQAAgPgMAAQgKAAgJAHIAAgKQAJgFALAAQAUgBAAAXIAAAmIgJAAIAAgJQgGAKgLABQgJAAgGgGgAAAACQgGABgEACQgDADAAAGQAAAEADADQADACAFAAQAHABAEgGQAFgEAAgJIAAgFg");
	this.shape_173.setTransform(265,583.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAQAsIAAgiQAAgSgPAAQgFAAgFAGQgFAEAAAIIAAAiIgKAAIAAhYIAKAAIAAAoQAHgMAMAAQAUAAAAAXIAAAlg");
	this.shape_174.setTransform(258.7,582.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgTAgQgLgLAAgUQAAgSAMgNQAMgNASAAQAMAAAHAEIAAALQgJgGgKAAQgOAAgJAKQgJAKAAAPQAAAPAJAKQAIAJANAAQAMgBAJgFIAAAJQgJAGgOAAQgRAAgKgMg");
	this.shape_175.setTransform(251.5,582.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAdArIgFgDIgEgEIgFgGIgFAFIgHAEIgHAEIgKABQgGgBgFgBQgGgCgDgDQgEgDgCgFQgCgEAAgGQAAgJAFgGQAFgGAJgEIgDgDIgDgDIgDgGIAAgFQAAgFABgEQACgDADgCQADgDAEgBQAEgCAEAAQAFAAAEACQACABADADIAEAFQACADAAAEQAAAIgEAEQgEAEgHAEIAGAEIAGAEIAFAGIAFAHQAFgHACgIQADgHAAgJIAAgEIgBgEIAJAAIABAEIAAAEIgBALIgDAKIgFAJIgFAJIAEAEIADAEIAEACIAEABIAEgBIADgBIAAAJIgEABIgFABIgFgBgAgWABIgGAFIgDAFIgBAIIABAHQABADADACIAGADIAHABIAIgBIAGgCIAGgEIAFgEIgHgKIgFgHIgGgFIgIgDIgHACgAgUggQgDADAAAGIAAAFIACADIAEAEIADACQAIgDADgDQADgEAAgFIAAgFIgDgDIgEgCIgEgBQgFAAgEADg");
	this.shape_176.setTransform(239.9,582.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUAlQgHgIAAgOQAAgPAIgIQAHgJAMAAQAMAAAGAKIAAAAIAAglIAKAAIAABYIgKAAIAAgKIAAAAQgHALgNAAQgLAAgHgIgAgMgCQgFAFAAAMQAAAKAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgIIAAgJQAAgHgFgFQgFgFgHAAQgIAAgFAHg");
	this.shape_177.setTransform(227.9,582.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgUAlQgHgIAAgOQAAgPAIgIQAHgJAMAAQAMAAAGAKIAAAAIAAglIAKAAIAABYIgKAAIAAgKIAAAAQgHALgNAAQgLAAgHgIgAgMgCQgFAFAAAMQAAAKAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgIIAAgJQAAgHgFgFQgFgFgHAAQgIAAgFAHg");
	this.shape_178.setTransform(220.8,582.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgRAaQgGgEAAgIQAAgQAUgCIARgDQAAgPgMAAQgKAAgJAHIAAgKQAJgFALAAQAUgBAAAXIAAAmIgJAAIAAgJQgHAKgLABQgJAAgEgGgAAAACQgGABgEACQgDADAAAGQAAAEADADQAEACAEAAQAHABAFgGQAEgEAAgJIAAgFg");
	this.shape_179.setTransform(214.3,583.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgbAtIAAhXIAKAAIAAAKQAHgMANABQAMgBAGAJQAHAHAAAOQAAAOgIAKQgHAJgNAAQgKgBgHgJIAAAkgAgMgeQgFAHAAAIIAAAIQAAAHAFAFQAFAFAHAAQAIABAFgIQAFgFAAgMQAAgKgFgGQgEgFgIAAQgIAAgFAFg");
	this.shape_180.setTransform(204.8,584.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_181.setTransform(197.6,583.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AALAsIgZgdIAAAdIgKAAIAAhYIAKAAIAAA4IAYgaIANAAIgbAcIAdAeg");
	this.shape_182.setTransform(191.8,582.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgYAFIAAgjIAKAAIAAAiQAAATAOAAQAGAAAFgGQAEgFAAgIIAAgiIAKAAIAAA7IgKAAIAAgJQgGALgLAAQgWAAAAgag");
	this.shape_183.setTransform(184.8,583.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgTAgQgLgLAAgUQAAgSAMgNQAMgNASAAQAMAAAHAEIAAALQgJgGgKAAQgOAAgJAKQgJAKAAAPQAAAPAJAKQAIAJANAAQAMgBAJgFIAAAJQgJAGgOAAQgRAAgKgMg");
	this.shape_184.setTransform(177.7,582.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgKA+QgDgDAAgEQAAgEADgDQADgDAEAAQADAAACADQADADAAAEQAAAEgDADQgCADgDAAQgEAAgDgDgAgLAcIgCgGIAAgHQAAgGACgEIAFgIIAHgHIAHgHIAGgIQACgEAAgFQAAgFgCgDQgBgDgDgCIgHgEIgGgBQgPAAgLAMIAAgPQANgJAPAAQAFAAAGACQAGACAFADQAEAEADAFQACAFAAAHQAAAGgCAFIgGAKIgHAIIgIAHIgGAHQgBAEAAAEIAAAIIACAFg");
	this.shape_185.setTransform(493.2,562.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgGgxQgCgCAAgEQAAgEACgDQADgDADAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_186.setTransform(486.9,562.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAxAuIAAgzQAAgPgEgGQgFgHgKAAQgKAAgGAIQgHAJAAALIAAAzIgNAAIAAg1QAAgagVAAQgJAAgGAIQgHAIAAAMIAAAzIgOAAIAAhZIAOAAIAAAOIABAAQAJgQATAAQAJAAAHAFQAGAFACAJQAKgTAUAAQAeAAAAAlIAAA2g");
	this.shape_187.setTransform(477,564.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgbAoQgHgHgBgMQABgYAdgFIAagDQAAgXgTAAQgPAAgNALIAAgOQAOgJAQAAQAfAAABAhIAAA6IgPAAIAAgOIgBAAQgIAQgSAAQgNAAgIgHgAAAACQgJACgGAEQgFADAAAJQAAAHAFAEQAEAEAJAAQAJAAAHgHQAHgIAAgLIAAgJg");
	this.shape_188.setTransform(464.4,564.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AARBCIgngqIAAAAIAAAqIgOAAIAAiDIAOAAIAABSIAAAAIAlgoIATAAIgpArIAsAug");
	this.shape_189.setTransform(456.3,562.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgbAjQgLgMAAgXQAAgUAMgNQAMgNAQAAQASAAAKALQAJALAAAVIAAAGIg+AAQAAAPAIAJQAHAIANAAQAPAAANgKIAAANQgMAJgTAAQgTAAgKgMgAgOgaQgIAGgBAMIAvAAQAAgMgGgHQgGgHgKAAQgJAAgHAIg");
	this.shape_190.setTransform(441.5,564.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgdAqIAAgPQAMAIAOAAQASAAAAgNQAAgEgBgBQgCgEgDgBIgHgDIgHgEIgKgFIgIgEQgCgDgCgEQgCgEABgFQgBgGADgGQADgEAFgEQAFgDAGgBQAGgCAGAAQALAAAKAEIAAAPQgKgHgNAAIgGABIgGACQgCACgBADIgCAEQAAAEACACIADAFIAGADIAHADIALAFIAIAEIAFAHQACAEAAAGQAAAGgDAGQgDAEgFADQgFAEgGABQgHACgGAAQgNAAgLgFg");
	this.shape_191.setTransform(433,564.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgGgxQgCgCAAgEQAAgEACgDQADgDADAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_192.setTransform(426.9,562.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAXBCIAAgzQAAgbgVAAQgKAAgHAHQgHAIAAANIAAAyIgOAAIAAiDIAOAAIAAA5IAAAAQALgRASAAQAeAAAAAkIAAA3g");
	this.shape_193.setTransform(419.7,562.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgVAjQgMgNAAgUQAAgVANgOQANgNAUAAQAMAAAJAEIAAAPQgKgHgMAAQgMAAgJAKQgJAKAAAPQAAAQAIAJQAJAJANAAQALAAALgIIAAAOQgLAGgOAAQgSAAgMgMg");
	this.shape_194.setTransform(410.4,564.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAXAuIAAgzQAAgcgVAAQgKAAgHAIQgHAIAAAMIAAAzIgPAAIAAhZIAPAAIAAAPIABAAQAKgRASAAQAPAAAIAKQAHAJAAASIAAA2g");
	this.shape_195.setTransform(401.2,564.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgbAoQgIgHAAgMQABgYAdgFIAagDQAAgXgTAAQgOAAgOALIAAgOQAOgJAQAAQAfAAAAAhIAAA6IgOAAIAAgOIgBAAQgIAQgSAAQgOAAgHgHgAAAACQgKACgFAEQgFADAAAJQAAAHAFAEQAEAEAJAAQAJAAAHgHQAHgIAAgLIAAgJg");
	this.shape_196.setTransform(391.2,564.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgWAuIAAhZIAOAAIAAASIAAAAQADgJAGgFQAGgGAIAAIAJABIAAAPQgFgDgGAAQgJAAgGAJQgGAJAAAOIAAAug");
	this.shape_197.setTransform(384.5,564.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgLBDIAAhMIgPAAIAAgNIAPAAIAAgOQAAgOAIgJQAIgHAMgBQAGAAAEACIAAANQgEgDgFABQgPgBAAAUIAAANIAVAAIAAANIgVAAIAABMg");
	this.shape_198.setTransform(378.2,562.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgGgxQgCgCAAgEQAAgEACgDQADgDADAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_199.setTransform(368,562.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgXAuIAAhZIAPAAIAAASIABAAQADgJAFgFQAGgGAIAAIAIABIAAAPQgDgDgIAAQgJAAgFAJQgGAJAAAOIAAAug");
	this.shape_200.setTransform(363.4,564.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgbAoQgIgHAAgMQABgYAdgFIAagDQAAgXgTAAQgOAAgOALIAAgOQAOgJAQAAQAfAAAAAhIAAA6IgOAAIAAgOIgBAAQgIAQgSAAQgOAAgHgHgAAAACQgJACgGAEQgFADAAAJQAAAHAFAEQAEAEAJAAQAJAAAHgHQAHgIAAgLIAAgJg");
	this.shape_201.setTransform(354.8,564.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgfA3QgKgMAAgUQAAgXALgMQAMgOASAAQASAAAJAPIAAAAIAAg3IAOAAIAACDIgOAAIAAgPIAAAAQgKARgVABQgQAAgLgNgAgSgEQgIAJAAARQAAAQAHAIQAIAJALAAQAMABAIgJQAHgJAAgNIAAgOQAAgLgHgGQgHgIgLABQgMgBgIAKg");
	this.shape_202.setTransform(344.8,562.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAXAuIAAgzQAAgcgVAAQgKAAgHAIQgHAIAAAMIAAAzIgPAAIAAhZIAPAAIAAAPIABAAQAJgRATAAQAOAAAJAKQAHAJABASIAAA2g");
	this.shape_203.setTransform(329.9,564.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgbAoQgIgHAAgMQAAgYAegFIAagDQAAgXgSAAQgQAAgNALIAAgOQAOgJAQAAQAgAAgBAhIAAA6IgOAAIAAgOIAAAAQgKAQgRAAQgOAAgHgHgAAAACQgJACgFAEQgGADAAAJQAAAHAFAEQAEAEAIAAQAKAAAHgHQAHgIAAgLIAAgJg");
	this.shape_204.setTransform(319.9,564.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgGgxQgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_205.setTransform(313.4,562.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgiA9IAAgPQAPAJAOAAQAgAAAAgkIAAgJIgBAAQgJARgUAAQgRAAgLgMQgKgMABgTQgBgXALgOQAMgNASAAQASAAAIAOIABAAIAAgMIAOAAIAABSQABAxgvAAQgRAAgMgGgAgSgsQgIAJAAASQAAAPAHAIQAIAJALAAQAMAAAIgJQAHgHAAgOIAAgNQAAgLgHgIQgIgHgKAAQgNAAgHAKg");
	this.shape_206.setTransform(305.6,566.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgbAoQgIgHABgMQAAgYAdgFIAagDQAAgXgSAAQgPAAgOALIAAgOQANgJARAAQAgAAAAAhIAAA6IgPAAIAAgOIAAAAQgJAQgSAAQgNAAgIgHgAAAACQgKACgEAEQgGADAAAJQAAAHAFAEQAFAEAHAAQAKAAAHgHQAHgIAAgLIAAgJg");
	this.shape_207.setTransform(295.8,564.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgZA0IgBAAIAAANIgOAAIAAiDIAOAAIAAA6IABAAQAKgRAUgBQARAAAJANQALALgBAUQABAWgLAOQgMAOgSAAQgSAAgIgQgAgTgEQgHAHAAANIAAANQAAALAHAHQAIAIAKAAQANAAAHgKQAIgKgBgSQAAgOgGgIQgIgJgLABQgLAAgJAJg");
	this.shape_208.setTransform(286.7,562.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgGBCIAAhZIANAAIAABZgAgFgxQgEgCAAgEQAAgEAEgDQACgDADAAQAEAAACADQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_209.setTransform(274,562.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgfA3QgKgMAAgUQABgXAKgMQAMgOASAAQASAAAJAPIAAAAIAAg3IAOAAIAACDIgOAAIAAgPIAAAAQgKARgVABQgQAAgLgNgAgSgEQgIAJAAARQAAAQAIAIQAGAJAMAAQAMABAIgJQAHgJAAgNIAAgOQAAgLgHgGQgHgIgLABQgMgBgIAKg");
	this.shape_210.setTransform(266.2,562.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgbAoQgHgHAAgMQgBgYAegFIAagDQAAgXgTAAQgPAAgNALIAAgOQANgJARAAQAfAAABAhIAAA6IgPAAIAAgOIgBAAQgJAQgRAAQgNAAgIgHgAAAACQgKACgFAEQgFADAAAJQAAAHAFAEQAFAEAHAAQAKAAAHgHQAHgIAAgLIAAgJg");
	this.shape_211.setTransform(256.4,564.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgYBUIAAgOQAHAFAGAAQATgBAAgfIAAhYIAOAAIAABVQAAAXgJAMQgJAMgPAAQgGAAgHgDgAAJhGQgDgDAAgDQAAgEADgEQACgCAEAAQAEAAACACQAEAEAAAEQAAADgEADQgCACgEABQgEgBgCgCg");
	this.shape_212.setTransform(248.4,564.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAXAuIAAgzQAAgcgVAAQgKAAgHAIQgHAIAAAMIAAAzIgPAAIAAhZIAPAAIAAAPIAAAAQAKgRATAAQAOAAAJAKQAHAJABASIAAA2g");
	this.shape_213.setTransform(242.7,564.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgbAjQgLgMAAgXQAAgUAMgNQAMgNAQAAQASAAAKALQAJALAAAVIAAAGIg+AAQAAAPAIAJQAHAIANAAQAPAAANgKIAAANQgMAJgTAAQgTAAgKgMgAgOgaQgIAGgBAMIAvAAQAAgMgGgHQgGgHgKAAQgJAAgHAIg");
	this.shape_214.setTransform(232.8,564.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAyAuIAAgzQgBgPgEgGQgFgHgKAAQgKAAgGAIQgHAJAAALIAAAzIgNAAIAAg1QAAgagVAAQgJAAgGAIQgHAIABAMIAAAzIgPAAIAAhZIAPAAIAAAOIAAAAQAJgQATAAQAJAAAHAFQAGAFADAJQAKgTATAAQAeAAAAAlIAAA2g");
	this.shape_215.setTransform(220.4,564.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAXAuIAAgzQAAgcgVAAQgKAAgHAIQgHAIAAAMIAAAzIgPAAIAAhZIAPAAIAAAPIAAAAQAKgRATAAQAOAAAJAKQAHAJABASIAAA2g");
	this.shape_216.setTransform(202.6,564.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgGgxQgCgCAAgEQAAgEACgDQADgDADAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_217.setTransform(195.3,562.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgiA9IAAgPQAPAJAOAAQAgAAAAgkIAAgJIgBAAQgKARgTAAQgRAAgKgMQgKgMAAgTQAAgXALgOQALgNASAAQASAAAIAOIABAAIAAgMIAPAAIAABSQAAAxgvAAQgRAAgMgGgAgSgsQgIAJAAASQAAAPAHAIQAIAJALAAQAMAAAHgJQAIgHAAgOIAAgNQAAgLgHgIQgIgHgLAAQgMAAgHAKg");
	this.shape_218.setTransform(187.5,566.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAXAuIAAgzQAAgcgVAAQgKAAgHAIQgHAIAAAMIAAAzIgPAAIAAhZIAPAAIAAAPIABAAQAJgRATAAQAPAAAHAKQAIAJAAASIAAA2g");
	this.shape_219.setTransform(177.5,564.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgGA/IAAh9IAOAAIAAB9g");
	this.shape_220.setTransform(169.9,562.9);

	this.instance = new lib.PointerEye();
	this.instance.parent = this;
	this.instance.setTransform(137.5,583.1,0.778,0.777,0,0,0,0,38.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(153,153,153,0.498)").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_221.setTransform(389.3,580.6,1,1,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(153,153,153,0.498)").ss(3,1,1).p("Ag7iVIB3CVIh3CW");
	this.shape_222.setTransform(404.3,580.6,1,1,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgjA7IAAgQQAMAKARAAQAGAAAEgCQAFgCAEgCQAEgEADgEQACgFgBgFQABgZgjAAIgKAAIAAgMIAKAAQAeABAAgXQAAgWgXAAQgNAAgMAJIAAgOQAMgHARAAQAGAAAHACQAGACAFAEQAEAEADAFQADAGgBAHQAAAZgZAHIAAAAQAHABAGABQAFADAEADQAEAEACAGQADAFAAAGQAAAJgEAHQgDAHgGAFQgGAEgIADQgIADgJAAQgSAAgKgGg");
	this.shape_223.setTransform(542.4,581.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgkBJIA7iRIAOAAIg7CRg");
	this.shape_224.setTransform(534.1,582.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAHBBIAAhsIgEADIgHAFIgIADIgJADIAAgOIAKgEIALgEIAJgHIAHgFIAGAAIAACAg");
	this.shape_225.setTransform(525.1,581.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgbAjQgLgMAAgXQAAgTAMgOQAMgNAQAAQASAAAKALQAJAMAAAUIAAAHIg+AAQAAAOAIAJQAHAIANAAQAPAAANgKIAAAOQgMAIgTAAQgTAAgKgMgAgOgbQgIAIgBALIAvAAQAAgMgGgHQgGgHgKAAQgJAAgHAHg");
	this.shape_226.setTransform(511.3,583.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgiA9IAAgPQAPAJAOAAQAgAAAAgkIAAgJIAAAAQgKARgVAAQgQAAgLgMQgKgMAAgTQAAgXALgOQALgNATAAQASAAAJAOIAAAAIAAgMIAOAAIAABSQABAxgvAAQgRAAgMgGgAgSgsQgIAJAAASQAAAPAHAIQAIAJALAAQAMAAAIgJQAHgHAAgOIAAgNQAAgLgHgIQgHgHgLAAQgMAAgIAKg");
	this.shape_227.setTransform(501,585.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgbAoQgHgHAAgMQgBgYAegFIAagDQAAgXgTAAQgOAAgOALIAAgPQANgIARAAQAgAAAAAiIAAA5IgPAAIAAgOIgBAAQgIAQgSAAQgNAAgIgHgAAAADQgKABgEADQgGAEAAAJQAAAHAFAEQAFAEAHAAQAKAAAHgIQAHgHAAgMIAAgIg");
	this.shape_228.setTransform(491.2,583.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AglA/IAAh9IAiAAQAUAAAKAKQAMAJAAATQAAARgNALQgMALgUAAIgQAAIAAAwgAgWACIAPAAQAOAAAIgGQAIgHAAgMQAAgZgcAAIgRAAg");
	this.shape_229.setTransform(482.2,581.8);

	this.nextPage = new lib.nextArrow();
	this.nextPage.name = "nextPage";
	this.nextPage.parent = this;
	this.nextPage.setTransform(612.2,565.6);
	new cjs.ButtonHelper(this.nextPage, 0, 1, 2, false, new lib.nextArrow(), 3);

	this.prevPage = new lib.prevArrow();
	this.prevPage.name = "prevPage";
	this.prevPage.parent = this;
	this.prevPage.setTransform(381.8,565.6);
	new cjs.ButtonHelper(this.prevPage, 0, 1, 2, false, new lib.prevArrow(), 3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgmBAIAAgGQAAgIACgHQABgFAFgGQADgGAIgFIAQgNIAKgIQAFgFACgEQADgFABgEIABgKQAAgGgCgEQgBgEgDgDQgEgDgDgBQgFgCgEAAIgIABIgIADIgIAFIgGAGIAAgPQAGgGAIgDQAHgDALAAQAGAAAHACQAHADAFADQAEAFAEAGQACAHAAAIQAAAIgBAFQgCAGgEAGIgJAJIgMAKIgOALQgGAFgDADQgDAEgBAEQgCAEAAAFIA+AAIAAANg");
	this.shape_230.setTransform(525.8,581.7);

	this.link7 = new lib.link7();
	this.link7.name = "link7";
	this.link7.parent = this;
	this.link7.setTransform(512,491.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link7, 0, 1, 1);

	this.link6 = new lib.link6();
	this.link6.name = "link6";
	this.link6.parent = this;
	this.link6.setTransform(512,441.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link6, 0, 1, 1);

	this.link5 = new lib.link5();
	this.link5.name = "link5";
	this.link5.parent = this;
	this.link5.setTransform(512,391.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link5, 0, 1, 1);

	this.link4 = new lib.link4();
	this.link4.name = "link4";
	this.link4.parent = this;
	this.link4.setTransform(512,341.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link4, 0, 1, 1);

	this.link3 = new lib.link3();
	this.link3.name = "link3";
	this.link3.parent = this;
	this.link3.setTransform(512,291.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link3, 0, 1, 1);

	this.link2 = new lib.link2();
	this.link2.name = "link2";
	this.link2.parent = this;
	this.link2.setTransform(512,241.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link2, 0, 1, 1);

	this.link1 = new lib.link1();
	this.link1.name = "link1";
	this.link1.parent = this;
	this.link1.setTransform(512,191.5,1,1,0,0,0,387.9,17.5);
	new cjs.ButtonHelper(this.link1, 0, 1, 1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgjA7IAAgQQAMAKAQAAQAHAAAFgCQAEgCAFgCQADgEACgEQACgFAAgFQAAgZghAAIgLAAIAAgMIAKAAQAeABAAgXQAAgWgXAAQgNAAgMAJIAAgOQAMgHARAAQAGAAAHACQAHACAEAEQAEAEADAFQADAGAAAHQAAAZgZAHIAAAAQAGABAFABQAGADAEADQAEAEACAGQADAFgBAGQAAAJgDAHQgDAHgGAFQgGAEgIADQgIADgJAAQgSAAgKgGg");
	this.shape_231.setTransform(525.7,581.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgFAnQgDgDAAgDQAAgDADgDQACgDADAAQADAAADADQADADAAADQAAADgDADQgDACgDAAQgDAAgCgCgAgFgaQgDgDAAgDQAAgEADgCQACgCADgBQADABADACQADACAAAEQAAADgDADQgDADgDgBQgDABgCgDg");
	this.shape_232.setTransform(540.8,149.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgYAkQgGgHAAgKQAAgVAagFIAXgCQAAgVgRAAQgNAAgLAKIAAgNQALgIAPAAQAcAAAAAeIAAAzIgNAAIAAgMIgBAAQgHAOgQAAQgMAAgHgGgAAAACQgJABgEAEQgEADgBAIQABAGAEAEQAEADAHAAQAJAAAGgGQAGgIAAgJIAAgIg");
	this.shape_233.setTransform(534.8,149.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgYAfQgKgLAAgTQAAgTAKgLQALgMAPAAQAQAAAIAKQAJALAAARIAAAGIg4AAQABANAGAIQAHAHALAAQAOAAALgJIAAAMQgLAIgQAAQgQAAgKgLgAgNgYQgGAHgCAKIAqAAQAAgLgEgGQgGgGgJAAQgJAAgGAGg");
	this.shape_234.setTransform(526.8,149.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgJAeIAAgvIgNAAIAAgLIANAAIAAgUIAMgDIAAAXIAUAAIAAALIgUAAIAAAsQAAAIADAEQADADAGAAQAFAAADgCIAAAKQgEACgIAAQgUABAAgXg");
	this.shape_235.setTransform(520,148.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgYAfQgKgLAAgTQAAgTAKgLQALgMAPAAQAQAAAIAKQAJALAAARIAAAGIg4AAQABANAGAIQAHAHALAAQAOAAALgJIAAAMQgLAIgQAAQgQAAgKgLgAgNgYQgGAHgCAKIAqAAQAAgLgEgGQgGgGgJAAQgJAAgGAGg");
	this.shape_236.setTransform(508.8,149.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_237.setTransform(502.6,147.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXAvIAAALIgNAAIAAh1IANAAIAAA0QAKgQARAAQAPAAAJALQAJALAAARQAAAUgKAMQgKAMgRAAQgPAAgIgNgAgQgEQgHAHAAALIAAAMQAAAKAHAGQAGAHAKAAQAKAAAHgJQAHgIAAgQQAAgOgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_238.setTransform(496.2,147.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgXAvIAAALIgNAAIAAh1IANAAIAAA0QAKgQARAAQAPAAAJALQAJALAAARQAAAUgKAMQgKAMgRAAQgPAAgIgNgAgQgEQgHAHAAALIAAAMQAAAKAHAGQAGAHAKAAQAKAAAHgJQAHgIAAgQQAAgOgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_239.setTransform(486.8,147.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AggAHIAAgvIAMAAIAAAtQAAAZAUAAQAIAAAHgHQAFgGABgMIAAgtIAMAAIAABPIgMAAIAAgMIgBAAQgIAOgPAAQgdAAAAgig");
	this.shape_240.setTransform(477.3,149.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgXAvIAAALIgNAAIAAh1IANAAIAAA0QAKgQARAAQAPAAAJALQAJALAAARQAAAUgKAMQgKAMgRAAQgPAAgIgNgAgQgEQgHAHAAALIAAAMQAAAKAHAGQAGAHAKAAQAKAAAHgJQAHgIAAgQQAAgOgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_241.setTransform(468.4,147.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgaAlIAAgOQALAIANAAQAPAAABgLQgBgDgBgDIgEgDIgFgDIgGgEIgKgDIgGgFIgFgFIgBgIQAAgHADgDQACgFAEgDQAFgDAFgCQAFgBAGAAQAKAAAIAEIAAAMQgJgFgLAAIgGABIgFACIgDADIgBAFIABAFIADAEIAGADIAGADIAKAEIAHAEQACACACAEQACAEgBAFQABAFgDAFQgDAEgEADQgFADgFABQgFACgGAAQgNAAgJgFg");
	this.shape_242.setTransform(455.7,149.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgYAkQgGgHAAgKQAAgVAagFIAXgCQAAgVgRAAQgNAAgLAKIAAgNQALgIAPAAQAcAAAAAeIAAAzIgNAAIAAgMIgBAAQgHAOgQAAQgMAAgHgGgAAAACQgJABgEAEQgEADgBAIQABAGAEAEQAEADAHAAQAJAAAGgGQAGgIAAgJIAAgIg");
	this.shape_243.setTransform(447.9,149.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_244.setTransform(442.1,147.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_245.setTransform(438.2,147.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgYAkQgGgHgBgKQAAgVAbgFIAXgCQAAgVgRAAQgNAAgMAKIAAgNQAMgIAOAAQAcAAAAAeIAAAzIgMAAIAAgMIgBAAQgIAOgPAAQgMAAgHgGgAAAACQgJABgEAEQgEADAAAIQAAAGAEAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_246.setTransform(432,149.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgXAkQgIgHABgKQgBgVAbgFIAXgCQAAgVgQAAQgOAAgLAKIAAgNQALgIAPAAQAbAAAAAeIAAAzIgMAAIAAgMIAAAAQgIAOgQAAQgMAAgGgGgAAAACQgIABgFAEQgFADAAAIQAAAGAFAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_247.setTransform(419.4,149.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgXAvIAAALIgNAAIAAh1IANAAIAAA0QAKgQARAAQAPAAAJALQAJALAAARQAAAUgKAMQgKAMgRAAQgPAAgIgNgAgQgEQgHAHAAALIAAAMQAAAKAHAGQAGAHAKAAQAKAAAHgJQAHgIAAgQQAAgOgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_248.setTransform(411.3,147.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgcAeQgKgLAAgSQgBgTALgMQAMgLARAAQASAAALALQAJALABATQAAATgMALQgKAMgSAAQgSAAgKgMgAgSgWQgIAJAAAOQAAANAIAJQAHAIALAAQANAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgNAAQgLAAgHAIg");
	this.shape_249.setTransform(401.7,149.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgXAvIAAALIgNAAIAAh1IANAAIAAA0QAKgQARAAQAPAAAJALQAJALAAARQAAAUgKAMQgKAMgRAAQgPAAgIgNgAgQgEQgHAHAAALIAAAMQAAAKAHAGQAGAHAKAAQAKAAAHgJQAHgIAAgQQAAgOgGgGQgHgIgKAAQgKAAgHAIg");
	this.shape_250.setTransform(392.5,147.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_251.setTransform(381.2,147.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgXAkQgIgHAAgKQABgVAagFIAXgCQAAgVgQAAQgOAAgLAKIAAgNQALgIAOAAQAcAAAAAeIAAAzIgMAAIAAgMIAAAAQgIAOgQAAQgMAAgGgGgAAAACQgJABgEAEQgFADABAIQgBAGAFAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_252.setTransform(375,149.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAUApIAAgtQAAgZgSAAQgJAAgGAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAAOQAJgQAQAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_253.setTransform(366.7,149.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgYAfQgKgLAAgTQAAgTALgLQAKgMAPAAQAQAAAIAKQAJALAAARIAAAGIg4AAQABANAGAIQAIAHAKAAQAOAAALgJIAAAMQgKAIgRAAQgQAAgKgLgAgNgYQgGAHgCAKIAqAAQAAgLgEgGQgGgGgJAAQgIAAgHAGg");
	this.shape_254.setTransform(358,149.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgeA2IAAgNQANAIANAAQAcAAAAgfIAAgJIgBAAQgJAPgRAAQgPAAgJgKQgJgLAAgRQAAgVAKgMQAKgMAQAAQAQAAAHANIABAAIAAgLIANAAIAABJQAAAsgpAAQgPAAgLgGgAgQgnQgHAIAAAQQAAANAHAHQAGAIAKAAQAKAAAHgHQAHgHAAgMIAAgMQAAgJgHgHQgGgHgJAAQgLAAgHAJg");
	this.shape_255.setTransform(348.8,151.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAUApIAAgtQAAgZgSAAQgJAAgGAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAAOQAJgQAQAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_256.setTransform(339.9,149.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgZAfQgJgLAAgTQAAgTAKgLQALgMAPAAQAQAAAIAKQAJALAAARIAAAGIg3AAQAAANAGAIQAIAHAKAAQAOAAALgJIAAAMQgLAIgRAAQgPAAgLgLgAgNgYQgGAHgBAKIApAAQAAgLgEgGQgGgGgKAAQgIAAgGAGg");
	this.shape_257.setTransform(331.2,149.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAsApIAAgtQAAgNgEgGQgEgGgKAAQgIAAgGAHQgGAIAAAKIAAAtIgLAAIAAgvQAAgXgTAAQgIAAgFAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAANQAJgPAQAAQAIAAAGAFQAGAEACAHQAJgQARAAQAbAAAAAhIAAAwg");
	this.shape_258.setTransform(320.1,149.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAPA7IgigmIAAAmIgNAAIAAh1IANAAIAABKIAggkIARAAIgkAmIAnApg");
	this.shape_259.setTransform(305.4,147.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_260.setTransform(298.8,147.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgUApIAAhPIANAAIAAAQQADgIAFgFQAFgFAHAAIAIABIAAAOQgDgDgHAAQgIAAgEAIQgGAIAAAMIAAApg");
	this.shape_261.setTransform(294.7,149.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgXAkQgIgHABgKQgBgVAbgFIAXgCQAAgVgQAAQgOAAgLAKIAAgNQALgIAPAAQAcAAAAAeIAAAzIgNAAIAAgMIgBAAQgIAOgPAAQgMAAgGgGgAAAACQgIABgFAEQgFADAAAIQAAAGAFAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_262.setTransform(287,149.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAUApIAAgtQAAgZgSAAQgJAAgGAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAAOQAJgQAQAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_263.setTransform(278.7,149.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgYAfQgKgLAAgTQAAgTALgLQAKgMAPAAQAPAAAJAKQAJALAAARIAAAGIg4AAQAAANAIAIQAGAHALAAQAOAAALgJIAAAMQgLAIgQAAQgRAAgJgLgAgNgYQgGAHgCAKIArAAQAAgLgGgGQgFgGgJAAQgJAAgGAGg");
	this.shape_264.setTransform(270,149.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAsApIAAgtQAAgNgEgGQgEgGgKAAQgIAAgGAHQgGAIAAAKIAAAtIgLAAIAAgvQAAgXgTAAQgIAAgFAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAANQAJgPAQAAQAIAAAGAFQAGAEACAHQAJgQARAAQAbAAAAAhIAAAwg");
	this.shape_265.setTransform(258.9,149.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_266.setTransform(245.6,147.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgZAlIAAgOQAKAIAMAAQAQAAAAgLQAAgDgBgDIgEgDIgFgDIgHgEIgJgDIgHgFIgEgFIgBgIQAAgHADgDQACgFAEgDQAEgDAGgCQAGgBAEAAQALAAAIAEIAAAMQgJgFgLAAIgGABIgEACIgEADIgBAFIABAFIAEAEIAEADIAHADIAJAEIAIAEQADACABAEQABAEAAAFQAAAFgCAFQgDAEgEADQgEADgGABQgGACgFAAQgMAAgJgFg");
	this.shape_267.setTransform(240.3,149.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgXAkQgIgHABgKQgBgVAbgFIAXgCQAAgVgQAAQgOAAgLAKIAAgNQALgIAPAAQAcAAAAAeIAAAzIgNAAIAAgMIgBAAQgIAOgPAAQgMAAgGgGgAAAACQgIABgFAEQgFADAAAIQAAAGAFAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_268.setTransform(232.6,149.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAsApIAAgtQAAgNgEgGQgEgGgKAAQgIAAgGAHQgGAIAAAKIAAAtIgLAAIAAgvQAAgXgTAAQgIAAgFAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAANQAJgPAQAAQAIAAAGAFQAGAEACAHQAJgQARAAQAbAAAAAhIAAAwg");
	this.shape_269.setTransform(221.9,149.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgUApIAAhPIANAAIAAAQQADgIAFgFQAFgFAHAAIAIABIAAAOQgDgDgHAAQgIAAgEAIQgGAIAAAMIAAApg");
	this.shape_270.setTransform(212.8,149.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgcAeQgLgLABgSQAAgTALgMQALgLARAAQASAAAKALQAKALAAATQAAATgLALQgLAMgRAAQgRAAgLgMgAgSgWQgHAJAAAOQAAANAHAJQAHAIAMAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgMAAgHAIg");
	this.shape_271.setTransform(204.7,149.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgJA8IAAhEIgOAAIAAgLIAOAAIAAgNQAAgMAHgIQAGgHALAAQAGAAADABIAAAMQgDgCgFgBQgOABAAAQIAAANIATAAIAAALIgTAAIAABEg");
	this.shape_272.setTransform(197.8,147.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAUApIAAgtQAAgZgSAAQgJAAgGAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAAOQAJgQAQAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_273.setTransform(190.6,149.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_274.setTransform(184,147.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgUAFIAAgJIApAAIAAAJg");
	this.shape_275.setTransform(178.9,149.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgGA7IAAhPIAMAAIAABPgAgFgrQgCgDAAgDQAAgDACgDQACgDADABQADgBADADQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_276.setTransform(173.7,147.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgZAlIAAgOQAKAIAMAAQAQAAAAgLQABgDgCgDIgEgDIgFgDIgHgEIgJgDIgHgFIgEgFIgBgIQAAgHADgDQACgFAEgDQAFgDAFgCQAGgBAEAAQALAAAIAEIAAAMQgJgFgLAAIgGABIgEACIgEADIgBAFIABAFIAEAEIAEADIAHADIAJAEIAIAEQADACABAEQACAEAAAFQAAAFgDAFQgCAEgFADQgFADgFABQgGACgFAAQgNAAgIgFg");
	this.shape_277.setTransform(168.4,149.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgXAkQgIgHAAgKQAAgVAbgFIAXgCQAAgVgQAAQgOAAgLAKIAAgNQALgIAPAAQAcAAAAAeIAAAzIgNAAIAAgMIAAAAQgIAOgQAAQgMAAgGgGgAAAACQgIABgFAEQgFADAAAIQAAAGAFAEQAEADAHAAQAIAAAHgGQAGgIAAgJIAAgIg");
	this.shape_278.setTransform(160.7,149.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAsApIAAgtQAAgNgEgGQgEgGgKAAQgIAAgGAHQgGAIAAAKIAAAtIgLAAIAAgvQAAgXgTAAQgIAAgFAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAANQAJgPAQAAQAIAAAGAFQAGAEACAHQAJgQARAAQAbAAAAAhIAAAwg");
	this.shape_279.setTransform(150,149.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgUApIAAhPIANAAIAAAQQADgIAFgFQAFgFAHAAIAIABIAAAOQgDgDgHAAQgIAAgEAIQgGAIAAAMIAAApg");
	this.shape_280.setTransform(140.9,149.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgcAeQgKgLAAgSQAAgTALgMQALgLARAAQASAAAKALQAKALAAATQAAATgLALQgLAMgRAAQgRAAgLgMgAgSgWQgHAJgBAOQABANAHAJQAHAIALAAQANAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgNAAQgLAAgHAIg");
	this.shape_281.setTransform(132.8,149.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgJA8IAAhEIgOAAIAAgLIAOAAIAAgNQAAgMAHgIQAGgHALAAQAGAAADABIAAAMQgDgCgFgBQgOABAAAQIAAANIATAAIAAALIgTAAIAABEg");
	this.shape_282.setTransform(125.9,147.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAUApIAAgtQAAgZgSAAQgJAAgGAHQgGAHAAALIAAAtIgNAAIAAhPIANAAIAAAOQAJgQAQAAQANAAAHAIQAHAJAAAQIAAAwg");
	this.shape_283.setTransform(118.7,149.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_284.setTransform(111.9,148.1);

	this.instance_1 = new lib.an_Video({'id': 'instance_1', 'src':'videos/final%20video.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_1.setTransform(508.1,353.2,1.69,1.313,0,0,0,200,150);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgGBCIAAhZIANAAIAABZgAgFgxQgDgCAAgEQAAgEADgDQACgDADAAQAEAAACADQAEADAAAEQAAADgEADQgCADgEAAQgDAAgCgDg");
	this.shape_285.setTransform(325.5,585.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAyAuIAAgyQAAgPgFgIQgFgGgLAAQgJAAgGAJQgHAIAAAMIAAAyIgNAAIAAg0QAAgbgVAAQgJAAgHAIQgFAIAAANIAAAyIgPAAIAAhZIAPAAIAAAOIAAAAQAKgQASAAQAJAAAHAFQAFAFAEAIQAJgSAUAAQAeAAAAAkIAAA3g");
	this.shape_286.setTransform(315.6,587.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgbAoQgIgHABgMQAAgYAdgEIAagEQAAgXgSAAQgPAAgOALIAAgPQANgIARAAQAgAAAAAhIAAA6IgPAAIAAgOIAAAAQgJAQgSAAQgNAAgIgHgAAAADQgKABgEADQgGAEAAAJQAAAHAFAEQAFAEAHAAQAKAAAHgHQAHgIAAgMIAAgIg");
	this.shape_287.setTransform(303,587.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAXA/Igvg6IgEgEIAAA+IgPAAIAAh9IAPAAIAAA7IAEgEIAug3IASAAIg1A8IA5BBg");
	this.shape_288.setTransform(294.2,585.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgHBCIAAhZIAOAAIAABZgAgFgxQgEgCAAgEQAAgEAEgDQACgDADAAQAEAAACADQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_289.setTransform(281.1,585.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgdApIAAgPQAMAJAOAAQASAAAAgMQAAgFgBgCQgCgDgDgBIgHgEIgGgDIgLgEIgHgFQgEgDgBgEQgCgEABgFQgBgHADgEQADgFAFgEQAFgDAGgCQAGgBAGAAQALAAAJAEIAAAOQgJgGgNAAIgGABIgGACQgDACAAACIgCAGQAAADACADIADAEIAGADIAHAEIALAEIAIAEIAFAIQACAEAAAFQAAAHgDAEQgDAFgFADQgFAEgGACQgGABgHAAQgNAAgLgGg");
	this.shape_290.setTransform(275.1,587.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgfAiQgMgMAAgVQAAgWAMgMQAMgNAVAAQAUAAALANQALAMAAAVQAAAVgMANQgMANgUAAQgTAAgMgNgAgUgYQgJAJAAAQQAAAPAJAKQAIAJANAAQANAAAIgJQAIgJAAgRQAAgPgIgKQgIgJgNAAQgNAAgIAKg");
	this.shape_291.setTransform(265.9,587.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAxAuIAAgyQAAgPgEgIQgFgGgKAAQgKAAgHAJQgGAIAAAMIAAAyIgNAAIAAg0QAAgbgUAAQgKAAgGAIQgHAIAAANIAAAyIgOAAIAAhZIAOAAIAAAOIABAAQAJgQATAAQAJAAAHAFQAFAFADAIQAKgSAUAAQAeAAAAAkIAAA3g");
	this.shape_292.setTransform(253,587.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgfAiQgMgMAAgVQAAgWAMgMQAMgNAVAAQAUAAALANQALAMAAAVQAAAVgMANQgMANgUAAQgTAAgMgNgAgUgYQgJAJAAAQQAAAPAJAKQAIAJANAAQANAAAIgJQAIgJAAgRQAAgPgIgKQgIgJgNAAQgNAAgIAKg");
	this.shape_293.setTransform(239.9,587.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgmA/IAAh9IAjAAQAUAAAKAKQAMAJAAATQAAASgNAKQgMALgUAAIgQAAIAAAwgAgWACIAPAAQAOAAAIgGQAIgHAAgMQAAgagcABIgRAAg");
	this.shape_294.setTransform(224,585.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgfAiQgMgMAAgVQAAgWAMgMQAMgNAVAAQAUAAALANQALAMAAAVQAAAVgMANQgMANgUAAQgTAAgMgNgAgUgYQgJAJAAAQQAAAPAJAKQAIAJANAAQANAAAIgJQAIgJAAgRQAAgPgIgKQgIgJgNAAQgNAAgIAKg");
	this.shape_295.setTransform(208.3,587.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgbAjQgLgNAAgVQAAgVAMgNQAMgNAQAAQASAAAKAMQAJAKAAAVIAAAHIg+AAQAAAOAIAJQAHAIANAAQAPAAANgKIAAAOQgMAIgTAAQgTAAgKgMgAgOgbQgIAIgBAMIAvAAQAAgNgGgHQgGgHgKAAQgJAAgHAHg");
	this.shape_296.setTransform(198.4,587.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgeA4QgLgMABgWQgBgVALgNQAMgNASAAQASAAAIAOIABAAIAAg4IAOAAIAACFIgOAAIAAgQIgBAAQgJARgUAAQgRABgKgMgAgSgEQgIAJAAARQAAAPAHAKQAIAJALAAQAMAAAIgJQAHgJAAgNIAAgOQAAgLgHgGQgIgHgKgBQgNAAgHAKg");
	this.shape_297.setTransform(188,585.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgHA/Iguh9IAQAAIAjBjIACALIAAAAIADgLIAkhjIAPAAIguB9g");
	this.shape_298.setTransform(173,585.9);

	var maskedShapeInstanceList = [this.RunnerSet,this.text,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.instance,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.nextPage,this.prevPage,this.shape_230,this.link7,this.link6,this.link5,this.link4,this.link3,this.link2,this.link1,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.instance_1,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:512,y:167.1,text:"Bebas Boba Boba Cafe adalah boba store yang ingin mengubah pengertian Boba yang ada sebelumnya dan membuat inovasi - inovasi baru dengan masih mengunakan model - model yang lama.\n\nBebas Boba Boba Cafe lahir di Jakarta dimana terdapat banyak boba yang hadir di berbagai Boba Cafe yang menyajikan minuman boba. Tetapi Bebas Boba Boba Cafe disini untuk membuang pengertian masyarakat tentang boba dengan hasil karya founder Bebas Boba Boba Cafe yang memunculkan berbagai jenis inovasi mulai dari boba matcha, boba macciato, thai boba, cheese boba, dan infused boba tea. Walau minuman yang tersediakan kita masih menyediakan topping biasa seperti boba pearl, kami juga menyediakan berbagai macam topping selain boba pearl kami juga menyediakan topping unik lainnya seperti pudding, grass jelly, nata de coco, dan aloe vera yang sangat disarankan and untuk dicoba di sini.\n\nDi sini juga menyajikan minuman dengan kadar gula dan es yang bisa kamu pilih sesuai keinginan anda serta ditawarkan dengan ukuran medium dan large (+Rp3.000,00 dari harga minuman ukuran medium).\n\nMari memulai hari dengan meminum Boba Inovatif dari Bebas Boba Boba Cafe!!",textAlign:"center",lineHeight:22.25,lineWidth:781}},{t:this.RunnerSet}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:101.1,y:137,text:"Bebas Boba Boba Cafe hadir di beberapa titik di Jabodetabek:\n--> Palmerah BINUS Syahdan (Kanteen Lantai dasar)\n--> Stasiun Palmerah\n--> Stasiun MRT Blok A\n--> Stasiun LRT Rawamangun\n--> Stasiun Pondok Cina\n--> Blok M - M Bloc\n--> Citraland Grogol (LG2 East Entrace)\n--> Pluit Village (1st Floor, Belakang LaUV)\n--> Kota Kasablanka (LG, sekitar Carrefour)\n--> PGC Cililitan (Food court lantai dasar)\n--> Rest Area Jakarta Cikampek KM19 (Dekat SPBU)\n--> PIK Ruko Avenue (Setelah PIK Avenue)\n--> Giant Ekstra Harapan Indah (Food court)\n--> Ruko Kelapa Gading Square (Sebelah MOI)\n",textAlign:"",lineHeight:23.25,lineWidth:822}},{t:this.instance},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:363.4,y:564.6}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192,p:{x:426.9,y:562.6}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:512,y:137,text:"Boba alias bubble tea hadir dari Taiwan, negeri Milk Tea yang telah merambah ke seluruh dunia melalui beberapa brand ternamanya, Chatime, Xing Fu Tang, Tiger Tea, KOI, dan masih banyak brand-brand milk tea ternama lainnya dari Taiwan. Meski hadir dari Taiwan, kami belajar dari kehadiran brand-brand lokal yang turut mencoba asyiknya trend milk tea boba yang sudah ada sebelumnya.\n\nResep Boba (Tapioca Pearl) ini dibeli langsung melalui toko online dari Taiwan oleh divisi seller yang sudah mempunyai akun bisnis kami untuk mengimport langsung dari Taiwan dengan mengatasnamakan Bebas Boba-Boba sebagai importir khusus boba untuk Bebas Boba-Boba Cafe dan lebih dari 20+ brand boba lokal di Indonesia. Boba yang diimport tentunya berupa boba mentah yang akan dimasak saat akan memasuki jam penjualannya. Sisa boba yang tidak terpakai hari itu akan dijual kembali sebagai sachet boba instan yang akan dihadirkan di outlet-outlet di Indomaret dan warung terpilih dengan harga Rp7000/sachet/120gr.\n\nSelain boba pearl, ada pudding, grass jelly (cincau), nata de coco, dan aloe vera yang tentunya dibeli secara lokal dari toko-toko yang dituju ataupun melalui distributor terkemuka keempat toppingan tersebut. Keempatnya dipakai bila dibutuhkan oleh konsumen dan sisa tersebut nantinya dikembalikan sebagai sisa pemakaian barang tersebut.",textAlign:"center",lineHeight:22.25,lineWidth:817}},{t:this.nextPage},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{skewY:180,x:404.3}},{t:this.shape_221,p:{skewY:180,x:389.3}}]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:512,y:137,text:"Melihat dari strategi brand-brand Taiwan yang menyediakan boba tea dengan berbagai macam inovasi yang unik dan beragam, baik dari boba pearl yang dimasak saat penjualan, variasi rasa yang beragam, cara penyajian dan pengadukan minuman boba, dan topping yang beragam, Bebas Boba Boba mengambil konsep yang terbilang unik dan dengan perpaduan rasa minuman lokal (teh, susu, cokelat, dan buah-buahan Indonesia berkualitas terbaik), boba pearl dari Taiwan yang dimasak, dan hadir dengan berbagai macam toppingan yang unik serta menyejukkan bagi para penikmat boba tea!\n\nSelain itu, penyajian minuman boba dari Bebas Boba Boba juga dihadirkan rendah kalori dan bebas gluten dibanding dengan minuman boba dari brand-brand lokal lainnya. Setiap boba pearl yang dijual hanya mengandung tapioka berkalori rendah, mudah dicerna, dan bebas zat tambahan dan tentunya aman bagi penggiat makanan diet dengan total kalori hanya 2/3 dari minuman boba lainnya. Dalam standar penyajian Bebas boba boba, setiap gelasnya dibatasi hanya 1/3 gelas boba pearl rendah kalori (berlaku juga pada toppingan lainnya), 1/2 sendok makan gula, dan 1 sendok teh \"krimer\" kental manis dimana kadar kalori yang disajikan tidak melebihi 2/3 porsi nasi reguler sehingga tentunya aman dikonsumsi bagi pegiat minuman diet.\n\nPerlu diingat bahwa mengonsumsi minuman boba secara berlebihan dapat berpotensi obesitas, diabetes, dan berbagai potensi berbahaya yang dapat mengancam nyawa anda. PENTING UNTUK MENGKONSUMSI MINUMAN BOBA INI SEWAJAR-WAJARNYA DALAM BATASAN TERTENTU agar tetap menyehatkan bagi diri kita sebagai penikmat boba!",textAlign:"center",lineHeight:21.25,lineWidth:816}},{t:this.nextPage},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_230},{t:this.shape_224},{t:this.shape_223},{t:this.prevPage}]},2).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_222,p:{skewY:0,x:619.7}},{t:this.shape_221,p:{skewY:0,x:634.7}},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_231},{t:this.shape_224},{t:this.shape_223},{t:this.prevPage},{t:this.link1},{t:this.link2},{t:this.link3},{t:this.link4},{t:this.link5},{t:this.link6},{t:this.link7}]},2).to({state:[{t:this.shape_1},{t:this.shape},{t:this.shape_298},{t:this.shape_192,p:{x:180.9,y:585.6}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_200,p:{x:232.4,y:587.6}},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.instance_1}]},1).wait(5));

	// button
	this.panel4Button = new lib.VideoButton_1();
	this.panel4Button.name = "panel4Button";
	this.panel4Button.parent = this;
	this.panel4Button.setTransform(834,55.8);
	new cjs.ButtonHelper(this.panel4Button, 0, 1, 1);

	this.panel3Button = new lib.AboutBobaButton_1();
	this.panel3Button.name = "panel3Button";
	this.panel3Button.parent = this;
	this.panel3Button.setTransform(714,76.1,1,1,0,0,0,100,20.3);
	new cjs.ButtonHelper(this.panel3Button, 0, 1, 1);

	this.panel2Button = new lib.LocationButton_1();
	this.panel2Button.name = "panel2Button";
	this.panel2Button.parent = this;
	this.panel2Button.setTransform(524,76.1,1,1,0,0,0,70,20.3);
	new cjs.ButtonHelper(this.panel2Button, 0, 1, 1);

	this.panel1aButton = new lib.TeamButton();
	this.panel1aButton.name = "panel1aButton";
	this.panel1aButton.parent = this;
	this.panel1aButton.setTransform(364,76.1,1,1,0,0,0,70,20.3);
	new cjs.ButtonHelper(this.panel1aButton, 0, 1, 1);

	this.panel2aButton = new lib.LocationButton();
	this.panel2aButton.name = "panel2aButton";
	this.panel2aButton.parent = this;
	this.panel2aButton.setTransform(524,76.1,1,1,0,0,0,70,20.3);
	new cjs.ButtonHelper(this.panel2aButton, 0, 1, 1);

	this.panel1Button = new lib.TeamButton_1();
	this.panel1Button.name = "panel1Button";
	this.panel1Button.parent = this;
	this.panel1Button.setTransform(364,76.1,1,1,0,0,0,70,20.3);
	new cjs.ButtonHelper(this.panel1Button, 0, 1, 1);

	this.panel3aButton = new lib.AboutBobaButton();
	this.panel3aButton.name = "panel3aButton";
	this.panel3aButton.parent = this;
	this.panel3aButton.setTransform(714,76.1,1,1,0,0,0,100,20.3);
	new cjs.ButtonHelper(this.panel3aButton, 0, 1, 1);

	this.panel4aButton = new lib.VideoButton();
	this.panel4aButton.name = "panel4aButton";
	this.panel4aButton.parent = this;
	this.panel4aButton.setTransform(834,55.8);
	new cjs.ButtonHelper(this.panel4aButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel1aButton},{t:this.panel2Button,p:{regX:70,regY:20.3,x:524,y:76.1}},{t:this.panel3Button},{t:this.panel4Button}]}).to({state:[{t:this.panel1Button},{t:this.panel2aButton},{t:this.panel3Button},{t:this.panel4Button}]},4).to({state:[{t:this.panel1Button},{t:this.panel2Button,p:{regX:70,regY:20.3,x:524,y:76.1}},{t:this.panel3aButton},{t:this.panel4Button}]},5).to({state:[{t:this.panel1Button},{t:this.panel3Button},{t:this.panel2Button,p:{regX:0,regY:0,x:454,y:55.8}},{t:this.panel4aButton}]},5).wait(5));

	// header
	this.homeButton = new lib.homeButton();
	this.homeButton.name = "homeButton";
	this.homeButton.parent = this;
	this.homeButton.setTransform(54.1,23.7,1.346,1.345,0,0,0,13.4,8.7);
	new cjs.ButtonHelper(this.homeButton, 0, 1, 2, false, new lib.homeButton(), 3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgHAJQgCgDAAgFQAAgEADgFQADgEAEAAQAEAAADAEQACADAAAFQAAAEgDAFQgDAEgEAAQgEAAgDgEg");
	this.shape_299.setTransform(250,82.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgHAJQgCgDAAgFQAAgEADgFQADgEAEAAQAEAAADAEQACADAAAFQAAAEgDAFQgDAEgEAAQgEAAgDgEg");
	this.shape_300.setTransform(245.5,82.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgHAJQgCgDAAgFQAAgEADgFQADgEAEAAQAEAAADAEQACADAAAFQAAAEgDAFQgDAEgEAAQgEAAgDgEg");
	this.shape_301.setTransform(240.9,82.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgYAqQgOgQgBgXQgLgDAAgHQAAgDABgCQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQADAAAEACQAEgUAOgMQANgNARgBQASAAALAKQALALAAAPQAAAQgOAIQgNAHgUABQgLAAgQgEQABAQAKALQAKALAMAAQAHAAAHgCQAGgCADgCQAJgIADAAQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAGgNAHQgMAJgPgBQgWAAgNgQgAgKggQgKALgDAPQAMADAOAAQAPAAAJgFQAIgGAAgIQAAgIgFgHQgGgGgLAAQgOAAgJALg");
	this.shape_302.setTransform(232.5,78.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgjApQAAgPAFgbIgCgZIgCgUQAAgEACgDQACgDAEAAQAEAAADADQACADAAADIAAAKIAAAJQAEgLAKgJQAIgIAKAAQAKAAAFAEQAGAEAAAFQAAAEgDADQgCACgEABQgEAAgFgFQgEgDgDAAQgHAAgJAPQgJAPgDAPIABAqQAAALgJAAQgKAAAAgQg");
	this.shape_303.setTransform(222.9,78.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgkApQgPgQAAgZQAAgXAPgRQAPgSAVAAQAXABAOAQQAPARAAAYQAAAYgPARQgPARgWAAQgWAAgOgRgAgYgeQgLANAAARQAAASAKANQAKANAPAAQAPAAAKgNQALgNAAgSQAAgRgKgOQgKgMgPAAQgPAAgKANg");
	this.shape_304.setTransform(211.6,78.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgKAuIAAhGIgKABQgLAAAAgHQAAgIALAAIAJABIAAgZQAAgLAIAAQAIAAAAALIgBAZIASgBQAKAAABAIQgBAHgKAAIgSgBIgBAzQAAAUACAGQABAHAHAAQAEAAAEgDIAGgCQAFAAAAAFQAAAEgIAFQgIAFgIAAQgSAAAAgcg");
	this.shape_305.setTransform(201.8,76.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgcAxQgNgHAAgIQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIAEABIAEADIAFAFQACACAGACQAHADAFAAQALAAAIgFQAIgFAAgKQAAgLgWgIIgRgGQgJgDgHgHQgGgGAAgIQAAgMALgKQAKgIAPAAQAQAAAJAFQAJAGAAAFQAAAIgIAAQgDAAgDgCQgLgIgJAAQgJAAgGAEQgGAFAAAFQAAAGAHAEQAGAEAIADIATAHQAJAEAGAGQAHAIAAAJQAAAPgMAKQgNAJgRAAQgQAAgMgIg");
	this.shape_306.setTransform(193,78.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAfAxQgEgIAAgNQgFAMgLAJQgLAIgMAAQgNAAgKgJQgSgPAAgeQAAgXAPgTQANgRAWAAQAQAAALALQABgLAIAAQAKAAAAAPQAAAQgEAbQAAAQACALQADAKADABIADABIACABIABACQAAAFgCAFQgEADgGAAQgHAAgDgIgAgbgdQgKANAAARQAAATAHALQAHAMAMAAQALAAAKgLQAKgLAGgRIgBghQgNgNgOAAQgOAAgLANg");
	this.shape_307.setTransform(176.7,78.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgdBJQAAALgIAAQgKAAAAgPQAAgQAEgbIgCg3IgCgtQAAgEADgDQACgCAEAAQAEAAACACQACAEAAAFIAABFQAGgMAKgGQAKgIAMABQANAAAJAIQASAQAAAdQAAAYgOASQgNARgVAAQgRAAgMgLgAgOgDQgLAJgFASIABAhQANANAPABQANgBAKgNQALgNAAgSQAAgSgHgKQgHgNgMAAQgLAAgKAMg");
	this.shape_308.setTransform(164.4,75.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgkApQgPgQAAgZQAAgXAPgRQAPgSAVAAQAXABAOAQQAPARAAAYQAAAYgPARQgPARgWAAQgWAAgOgRgAgYgeQgLANAAARQAAASAKANQAKANAPAAQAPAAAKgNQALgNAAgSQAAgRgKgOQgKgMgPAAQgPAAgKANg");
	this.shape_309.setTransform(151.9,78.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgdBJQAAALgIAAQgKAAAAgPQAAgQAEgbIgCg3IgCgtQAAgEADgDQACgCAEAAQAEAAACACQACAEAAAFIAABFQAGgMAKgGQAKgIAMABQANAAAJAIQASAQAAAdQAAAYgOASQgNARgVAAQgRAAgMgLgAgOgDQgLAJgFASIABAhQANANAPABQANgBAKgNQALgNAAgSQAAgSgHgKQgHgNgMAAQgLAAgKAMg");
	this.shape_310.setTransform(139.9,75.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgjApQAAgPAFgbIgCgZIgCgUQAAgEACgDQACgDAEAAQAEAAADADQACADAAADIAAAKIAAAJQAEgLAKgJQAIgIAKAAQAKAAAFAEQAGAEAAAFQAAAEgDADQgCACgEABQgEAAgFgFQgEgDgDAAQgHAAgJAPQgJAPgDAPIABAqQAAALgJAAQgKAAAAgQg");
	this.shape_311.setTransform(124.4,78.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AAaAdQgPAcgYAAQgSAAgJgNQgKgNAAgTIABggQAAgJgBgIIgDgLQAAgCAEgDQACgDAEAAQAKAAAAASIgCAvQAAAPAHAJQAGAKALAAQALAAAKgNQALgNAEgPIAAgvQAAgLAIAAQAKAAAAAPQAAAQgEAbQAAAQACALQADAKADABIADABIACABIABACQAAAFgDAFQgEADgFAAQgOAAgBgcg");
	this.shape_312.setTransform(113.2,78.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgkApQgPgQAAgZQAAgXAPgRQAPgSAVAAQAXABAOAQQAPARAAAYQAAAYgPARQgPARgWAAQgWAAgOgRgAgYgeQgLANAAARQAAASAKANQAKANAPAAQAPAAAKgNQALgNAAgSQAAgRgKgOQgKgMgPAAQgPAAgKANg");
	this.shape_313.setTransform(100.3,78.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgKAuIAAhGIgKABQgLAAAAgHQAAgIALAAIAJABIAAgZQAAgLAIAAQAIAAAAALIgBAZIASgBQAKAAABAIQgBAHgKAAIgSgBIgBAzQAAAUACAGQABAHAHAAQAEAAAEgDIAGgCQAFAAAAAFQAAAEgIAFQgIAFgIAAQgSAAAAgcg");
	this.shape_314.setTransform(85.2,76.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAbAdQgRAcgXAAQgSAAgKgNQgJgNAAgTIABggQAAgJgCgIIgBgLQAAgCACgDQADgDAEAAQAKAAAAASIgBAvQAAAPAGAJQAHAKAKAAQALAAALgNQAKgNAEgPIgBgvQAAgLAJAAQAKAAAAAPQAAAQgFAbQABAQACALQACAKAEABIADABIADABIABACQAAAFgFAFQgDADgGAAQgNAAAAgcg");
	this.shape_315.setTransform(75.4,78.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgkApQgPgQAAgZQAAgXAPgRQAPgSAVAAQAXABAOAQQAPARAAAYQAAAYgPARQgPARgWAAQgWAAgOgRgAgYgeQgLANAAARQAAASAKANQAKANAPAAQAPAAAKgNQALgNAAgSQAAgRgKgOQgKgMgPAAQgPAAgKANg");
	this.shape_316.setTransform(62.5,78.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgdBJQAAALgIAAQgKAAAAgPQAAgQAEgbIgCg3IgCgtQAAgEADgDQACgCAEAAQAEAAACACQACAEAAAFIAABFQAGgMAKgGQAKgIAMABQANAAAJAIQASAQAAAdQAAAYgOASQgNARgVAAQgRAAgMgLgAgOgDQgLAJgFASIABAhQANANAPABQANgBAKgNQALgNAAgSQAAgSgHgKQgHgNgMAAQgLAAgKAMg");
	this.shape_317.setTransform(50.4,75.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAtBNIgIgYIgHgZIgkgBIgZABIgOAxQgDAHgGAAQgDAAgCgCQgCgCAAgDIACgKIAGgTIAGgTIgEAAQgKAAAAgJQAAgHAKgBIAJABIAdhUQAFgMAIAAQAEAAADACQADAEACAFIAHASIAWBCIAKAAQAFABADACQADACAAAEQAAAIgPAAIAFAQIAEANQAGAQAAADQAAADgCACQgCACgDAAQgHABgDgIgAgUgEIgGARIAaABIAZgBQgXhHgCgBQgDAAgRA3g");
	this.shape_318.setTransform(37.1,75.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(242,109,109,0.6)").s().p("EhP9AFYIAAqvMCf7AAAIAAKvg");
	this.shape_319.setTransform(512,76,1,0.815);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgvBCQgOgNAAgbQAAgZALgXQAMgZATgPQASgQATAAQALAAAJAGQAIAFAAAKQAAALgMALQgNAKgUAIQgUAIgVAEQgEAOAAAOQAAASAJAKQAJALAQAAQAYAAAPgSQAPgSAKgWIADgEQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgIAUQgJATgRARQgRARgYAAQgVAAgNgNgAgIg4QgLAIgIALQgIALgCAJQAPgCAQgHQAPgHALgHQALgIAAgGQAAgFgEgDQgGgCgHAAQgMAAgKAIg");
	this.shape_320.setTransform(661.9,25.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgQCEQgCgFAAgHQAAglgFhOIgBgKIgQADIgUACQgEAAgCgBQgDgBAAgEQAAgIAGAAIAUgBIASgDQAAg0APghQANghAcAAQAKAAAJAFQAJAFAFAIQAGAHAAAGQAAAEgCAGQgCAHgCAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgCgGQgDgLgIgIQgHgHgIAAQgWAAgKAeQgJAeAAApIAVgDIAPgDQAXgFAIAAQAGAAAAAGQAAAEgCAGQgCAFgEAAIgGgCQgFgCgHAAQgFAAgQAEIgZAEIACArQADA4AAAiQAAAGgBACQgBADgEAAQgFAAgCgFg");
	this.shape_321.setTransform(648.1,23.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AhBBIQgGgHAAgKQAAgNAMgVQALgWASgWQASgYARgPQAMgJAHgDQAHgDAFAAQAFAAAGADQAFADAEAGQAEAFAAAIQAAAKgFAIIAFgBQAEAAAAAIIABAWIABAYIAAAVIABAPQAAADADACIACAEQAAAEgDAFQgEAFgDAAQgFAAgDgHQgDgHAAgJIABguIAAgLQAAgHgDgDQgPAXgMASQgNASgSAPQgTAQgVABQgLgBgFgGgAANg0QgOANgQAUQgQATgKAVQgLATAAALQAAALAJgBQARABAQgNQAPgNANgSQANgSAPgZQAEgJAAgMQAAgGgEgFQgEgFgHAAQgIAAgMAKg");
	this.shape_322.setTransform(631.9,25.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("Ag7BaQgTgRABggQgBgWAIgbQAHgcALgVQALgUANgOQAOgOAOAAQAOAAAHAKQAIAKgBAPQAAAFgCAGIgEAJQgDAEgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgEIABgGQAAgIgCgHQgBgGgFgEQgFgEgFAAQgXAAgUAtQgHARgGAXQgGAVAAAVQAAAOAHAMQAFAMAMAHQALAHAOAAQAXAAASgLQAUgLASgSIAFgHQAEgGACAAIACAAIAAAEQAAADgFAIQgNATgYARQgWARgaAAQgdAAgSgQg");
	this.shape_323.setTransform(616.8,23.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AhBBIQgGgHAAgKQAAgNAMgVQALgWASgWQASgYARgPQAMgJAHgDQAHgDAFAAQAFAAAGADQAFADAEAGQAEAFAAAIQAAAKgFAIIAFgBQAEAAAAAIIABAWIABAYIAAAVIABAPQAAADADACIACAEQAAAEgDAFQgEAFgDAAQgFAAgDgHQgDgHAAgJIABguIAAgLQAAgHgDgDQgPAXgMASQgNASgSAPQgTAQgVABQgLgBgFgGgAANg0QgOANgQAUQgQATgKAVQgLATAAALQAAALAJgBQARABAQgNQAPgNANgSQANgSAPgZQAEgJAAgMQAAgGgEgFQgEgFgHAAQgIAAgMAKg");
	this.shape_324.setTransform(588.2,25.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgiB0QgCgCAAgEQAAgDADgEQADgDAGgDQAWgKARgSQASgSALgUQAKgUAAgPQAAgGgDgDQgDgDgGAAQgNAAgOALQgOAKgLASQgKANgIATQgJATgFAVQgCALgIAAQgDAAgCgEQgDgEAAgDQAAglgChHIgEhSIAAgEIgBgDIAAgEIgBgEQAAgIAHAAQAFAAAEAHQADAHAAAJIAAARQAABMACAoIADAWQADgKAIgOIAQgYQAPgTAQgNQASgMAPAAQAJAAAHAGQAGAHAAAMQAAAagWAgQgWAgggAZQgOALgHAAQgEAAgCgDg");
	this.shape_325.setTransform(572.3,21.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgvA+QgKgNAAgRQAAgQAFgVQAGgXAKgSIAFgJQAFgIAGgFQAFgEAHAAQADAAADACQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAIgCADIgDAEQgLANgHANQgIAQgFAQQgGAPAAATQAAAaAggBQANAAAMgIQANgJAHgMQAHgMAAgJQAAgKgHgJQgIgIgMgKIgNgKQgCgDAAgDQgBgDAFgDQAGgCAHAAIAFAAIACACIgCACIgBACIAHAGQAMALAJALQAJALAAAOQAAAMgKARQgIAQgSAMQgQALgWAAQgVAAgKgLg");
	this.shape_326.setTransform(557.1,26.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgRBuQgDgCAAgDQABgFAEgEQADgEAGgCIAJgCQAHgCAFgDQAMgFAOgLQAPgMAIgJQAOgOAHgMQAHgLAAgLQAAgHgGgDQgHgDgJAAQgXAAgUAIIgMAGIgSAHIgQAFIgKAEIAAAMIABAPIABAUQgBAWgDAOIgCAGQgCACgFAAQgDAAgCgCQgDgCAAgDIAEgKQACgKAAgIQAAgZgCgnIgBgNIgCgiIACgXIABgTQgMADgTAJQgFACgJAGQgIAFgCAAQgEAAgCgDQgBgCAAgDQAAgGAVgKQAWgJAZgIQAXgGARgEQARgDATAAQAQAAAMAHQALAGAAAMQAAAcgeAeQANgCAMAAQAOAAAKAHQALAGAAAOQAAAOgLAQQgLAPgUAUQgOAOgUAOQgNAJgMAHQgLAGgHAAQgDAAgCgCgAACheQgTADgKADQgGAWAAAPIABAzIALgBIAOgFQAdgNAUgUQAUgVAAgWQAAgHgHgEQgIgEgMAAQgNAAgUADg");
	this.shape_327.setTransform(538,24);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgmAMQgDgCAAgDQAAgEADgCIAKgBIARAAIAIAAIAGgCIAUgDQADAAABgEQACgEACAAQADAAAEAEQAEAEAAAEQAAAFgFACQgEACgNABIgUADIgOABIgRABQgEAAgDgCg");
	this.shape_328.setTransform(522.4,25.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AhBBIQgGgHAAgKQAAgNAMgVQALgWASgWQASgYARgPQAMgJAHgDQAHgDAFAAQAFAAAGADQAFADAEAGQAEAFAAAIQAAAKgFAIIAFgBQAEAAAAAIIABAWIABAYIAAAVIABAPQAAADADACIACAEQAAAEgDAFQgEAFgDAAQgFAAgDgHQgDgHAAgJIABguIAAgLQAAgHgDgDQgPAXgMASQgNASgSAPQgTAQgVABQgLgBgFgGgAANg0QgOANgQAUQgQATgKAVQgLATAAALQAAALAJgBQARABAQgNQAPgNANgSQANgSAPgZQAEgJAAgMQAAgGgEgFQgEgFgHAAQgIAAgMAKg");
	this.shape_329.setTransform(508.3,25.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgiB0QgCgCAAgEQAAgDADgEQADgDAGgDQAWgKARgSQASgSALgUQAKgUAAgPQAAgGgDgDQgDgDgGAAQgNAAgOALQgOAKgLASQgKANgIATQgJATgFAVQgCALgIAAQgDAAgCgEQgDgEAAgDQAAglgChHIgEhSIAAgEIgBgDIAAgEIgBgEQAAgIAHAAQAFAAAEAHQADAHAAAJIAAARQAABMACAoIADAWQADgKAIgOQAIgNAIgLQAPgTAQgNQASgMAPAAQAJAAAHAGQAGAHAAAMQAAAagWAgQgWAgggAZQgOALgHAAQgEAAgCgDg");
	this.shape_330.setTransform(492.4,21.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgvA+QgKgNAAgRQAAgQAFgVQAGgXAKgSIAGgJQAEgIAGgFQAGgEAGAAQADAAADACQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAIgCADIgCAEQgMANgGANQgKAQgFAQQgEAPgBATQABAaAfgBQANAAAMgIQAMgJAIgMQAHgMAAgJQAAgKgHgJQgHgIgNgKIgNgKQgCgDAAgDQAAgDAEgDQAFgCAIAAIAGAAIABACIgBACIgBACIAGAGQANALAJALQAIALAAAOQAAAMgJARQgKAQgQAMQgSALgVAAQgVAAgKgLg");
	this.shape_331.setTransform(477.2,26.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgRBuQgCgCAAgDQAAgFADgEQAEgEAGgCIAIgCQAIgCAGgDQAKgFAPgLQAOgMAJgJQAOgOAHgMQAHgLAAgLQAAgHgGgDQgGgDgKAAQgYAAgTAIIgMAGIgSAHIgQAFIgKAEIABAMIAAAPIABAUQAAAWgEAOIgDAGQgBACgFAAQgCAAgDgCQgCgCAAgDIADgKQACgKAAgIQAAgZgCgnIgBgNIgCgiIACgXIABgTQgMADgSAJQgGACgJAGQgIAFgCAAQgDAAgDgDQgBgCAAgDQAAgGAVgKQAVgJAagIQAXgGAQgEQASgDASAAQARAAAMAHQALAGAAAMQAAAcgfAeQAOgCAMAAQAOAAALAHQAKAGAAAOQAAAOgLAQQgLAPgUAUQgOAOgUAOQgNAJgLAHQgMAGgGAAQgDAAgDgCgAACheQgTADgKADQgGAWAAAPIABAzIALgBIANgFQAegNAUgUQAUgVAAgWQAAgHgIgEQgHgEgMAAQgNAAgUADg");
	this.shape_332.setTransform(458.1,24);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgmBRQgFgCAAgFQAAgDAHgHQAIgHACAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgBACQAAABAAAAQAAAAABAAQAAABABAAQABAAABABIAKABQAMAAAOgFQANgFAJgIQAJgIAAgJQAAgIgGgGQgFgFgIgCIgbgHIghgIQgLgDgHgGQgHgFAAgJQAAgPAPgNQAPgNATgHQATgIAKAAQALAAAAAHQAAAEgCAEQgDAFgFAAIgEgCIgFgBQgGAAgNAEQgOAEgLAJQgLAIAAAMQAAAHAJAEQAJAEAXAFIAFACIAFABQAZAGANAGQANAHAAAPQAAAOgLANQgLANgTAIQgSAIgUAAQgNAAgFgDg");
	this.shape_333.setTransform(431.9,26.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AhBBIQgGgHAAgKQAAgNAMgVQALgWASgWQASgYARgPQAMgJAHgDQAHgDAFAAQAFAAAGADQAFADAEAGQAEAFAAAIQAAAKgFAIIAFgBQAEAAAAAIIABAWIABAYIAAAVIABAPQAAADADACIACAEQAAAEgDAFQgEAFgDAAQgFAAgDgHQgDgHAAgJIABguIAAgLQAAgHgDgDQgPAXgMASQgNASgSAPQgTAQgVABQgLgBgFgGgAANg0QgOANgQAUQgQATgKAVQgLATAAALQAAALAJgBQARABAQgNQAPgNANgSQANgSAPgZQAEgJAAgMQAAgGgEgFQgEgFgHAAQgIAAgMAKg");
	this.shape_334.setTransform(415.9,25.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgiB0QgCgCAAgEQAAgDADgEQADgDAGgDQAWgKARgSQASgSALgUQAKgUAAgPQAAgGgDgDQgDgDgGAAQgNAAgOALQgOAKgLASQgKANgIATQgJATgFAVQgCALgIAAQgDAAgCgEQgDgEAAgDQAAglgChHIgEhSIAAgEIgBgDIAAgEIgBgEQAAgIAHAAQAFAAAEAHQADAHAAAJIAAARQAABMACAoIADAWQADgKAIgOIAQgYQAPgTAQgNQASgMAPAAQAJAAAHAGQAGAHAAAMQAAAagWAgQgWAgggAZQgOALgHAAQgEAAgCgDg");
	this.shape_335.setTransform(399.9,21.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgvBCQgOgNAAgbQAAgZALgXQAMgZATgPQASgQATAAQALAAAJAGQAIAFAAAKQAAALgMALQgNAKgVAIQgSAIgWAEQgEAOAAAOQAAASAJAKQAJALAQAAQAYAAAPgSQAPgSAKgWIADgEQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAAGgJAUQgIATgRARQgRARgYAAQgVAAgNgNgAgJg4QgLAIgHALQgHALgDAJQAPgCAQgHQAQgHAKgHQAMgIAAgGQgBgFgFgDQgFgCgHAAQgMAAgLAIg");
	this.shape_336.setTransform(384.4,25.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgRBuQgCgCAAgDQAAgFADgEQAEgEAGgCIAIgCQAIgCAGgDQAKgFAPgLQAOgMAJgJQAOgOAHgMQAHgLAAgLQAAgHgGgDQgGgDgKAAQgYAAgTAIIgMAGIgSAHIgQAFIgKAEIABAMIAAAPIABAUQAAAWgEAOIgDAGQgBACgFAAQgCAAgDgCQgCgCAAgDIADgKQACgKAAgIQAAgZgCgnIgBgNIgCgiIACgXIABgTQgMADgSAJQgGACgJAGQgIAFgCAAQgDAAgDgDQgBgCAAgDQAAgGAVgKQAVgJAagIQAXgGAQgEQASgDASAAQARAAAMAHQALAGAAAMQAAAcgfAeQAOgCAMAAQAOAAALAHQAKAGAAAOQAAAOgLAQQgLAPgUAUQgOAOgUAOQgNAJgLAHQgMAGgGAAQgDAAgDgCgAACheQgTADgKADQgGAWAAAPIABAzIALgBIAOgFQAdgNAUgUQAUgVAAgWQAAgHgIgEQgHgEgMAAQgNAAgUADg");
	this.shape_337.setTransform(364.5,24);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#F25454").s().p("EhP9AFYIAAqvMCf7AAAIAAKvg");
	this.shape_338.setTransform(512,24,1,0.698);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.homeButton}]}).wait(19));

	// scripts
	this.instance_2 = new lib.an_Video({'id': 'instance_2', 'src':'videos/', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_2.setTransform(388,294,1,1,0,0,0,200,150);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(5));

	// bg
	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.bf(img.background, null, new cjs.Matrix2D(1,0,0,0.911,-12.5,-11.4)).s().p("EhP/A2sMAAAhtXMCf/AAAMAAABtXg");
	this.shape_339.setTransform(512,350);

	this.timeline.addTween(cjs.Tween.get(this.shape_339).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,350,1024,700);
// library properties:
lib.properties = {
	id: '72E1510B4B772045AE8989D115FE1DF2',
	width: 1024,
	height: 700,
	fps: 24,
	color: "#FF9999",
	opacity: 1.00,
	manifest: [
		{src:"images/background.png?1576559556763", id:"background"},
		{src:"images/madokarunning.png?1576559556763", id:"madokarunning"},
		{src:"images/sayakarunning.png?1576559556763", id:"sayakarunning"},
		{src:"components/lib/jquery-2.2.4.min.js?1576559556763", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1576559556763", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1576559556763", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['72E1510B4B772045AE8989D115FE1DF2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;