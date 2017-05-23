var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = Game.width;
        this.canvas.height = Game.height;
        this.context = this.canvas.getContext('2d');
        requestAnimationFrame(function () { return _this.update(); });
        this.hero = new Hero();
        this.map = new Map();
    }
    Game.prototype.update = function () {
        var _this = this;
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    Game.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.draw();
        this.hero.draw();
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
Game.width = window.innerWidth;
Game.height = window.innerHeight;
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.draw = function () {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
    };
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.speed = 5;
        _this.spriteUp1 = new Image(100, 200);
        _this.spriteUp2 = new Image(100, 200);
        _this.spriteLeft1 = new Image(100, 200);
        _this.spriteLeft2 = new Image(100, 200);
        _this.spriteDown1 = new Image(100, 200);
        _this.spriteDown2 = new Image(100, 200);
        _this.spriteRight1 = new Image(100, 200);
        _this.spriteRight2 = new Image(100, 200);
        _this.spriteUp1.src = '../docs/images/heroup1.png';
        _this.spriteUp2.src = '../docs/images/heroup2.png';
        _this.spriteLeft1.src = '../docs/images/heroleft1.png';
        _this.spriteLeft2.src = '../docs/images/heroleft2.png';
        _this.spriteDown1.src = '../docs/images/herodown1.png';
        _this.spriteDown2.src = '../docs/images/herodown2.png';
        _this.spriteRight1.src = '../docs/images/heroright1.png';
        _this.spriteRight2.src = '../docs/images/heroright2.png';
        _this.sprite = _this.spriteDown1;
        document.addEventListener('keydown', _this.move.bind(_this));
        return _this;
    }
    Hero.prototype.move = function (event) {
        if (event.keyCode == 37) {
            this.x -= this.speed;
            if (this.sprite === this.spriteLeft1) {
                this.sprite = this.spriteLeft2;
            }
            else {
                this.sprite = this.spriteLeft1;
            }
        }
        else if (event.keyCode == 38) {
            this.y -= this.speed;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        else if (event.keyCode == 39) {
            this.x += this.speed;
            if (this.sprite === this.spriteRight1) {
                this.sprite = this.spriteRight2;
            }
            else {
                this.sprite = this.spriteRight1;
            }
        }
        else if (event.keyCode == 40) {
            this.y += this.speed;
            if (this.sprite === this.spriteDown1) {
                this.sprite = this.spriteDown2;
            }
            else {
                this.sprite = this.spriteDown1;
            }
        }
    };
    return Hero;
}(GameObject));
var Map = (function () {
    function Map() {
        this.x = 0;
        this.y = 0;
        this.sprite = new Image(4096, 4096);
        this.sprite.src = '../docs/images/map.png';
        console.log(this.sprite);
    }
    Map.prototype.draw = function () {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
    };
    Map.prototype.update = function () {
    };
    return Map;
}());
//# sourceMappingURL=main.js.map