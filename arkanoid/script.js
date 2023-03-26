var game = {
    width: 640,
    height: 360,
    ctx: undefined,
    platform: undefined,
    ball: undefined,
    rows: 4,
    cols: 8,
    score: 0,
    running: true,
    blocks: [],
    sprites: {
        background: undefined,
        platform: undefined,
        ball: undefined,
        block: undefined,
    },

    init: function() {
        var canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');

        window.addEventListener('keydown', function(e){
            if ( e.keyCode == 37) {
                game.platform.dx = -game.platform.velocity;

            } else if (e.keyCode == 39) {
                game.platform.dx = game.platform.velocity;
            } else if (e.keyCode == 32) {
                game.platform.releaseBall();
            }
            
        });
        window.addEventListener('keyup', function(e){
            game.platform.stop();
        });
    },

    load: function() {

        for (let key in this.sprites) {
            this.sprites[key] = new Image();
            this.sprites[key].src = 'assets/' + key +'.png';
        }
    },

    create: function() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.blocks.push({
                    x: 68 * col + 50,
                    y: 38 * row + 35,
                    width: 64,
                    height: 32,
                    isAlive: true,
                });
            }
        } 
    },

    start: function() {
        this.init();
        this.load();
        this.create();
        this.run();
    },
    render: function() {
        this.ctx.clearRect(0, 0, this.width, this.height)

        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);

        this.blocks.forEach(function(elem){
            if(elem.isAlive) {
                this.ctx.drawImage(this.sprites.block, elem.x, elem.y);
            }   
        }, this)
    },

    update: function() {
        if(this.ball.collide(this.platform)) {
            this.ball.bumpPlatform(this.platform);
        }

        if(this.platform.dx) {
            this.platform.move();
        }
        if(this.ball.dx || this.ball.dy) {
            this.ball.move();
        }

        this.blocks.forEach(function(elem){
            if(elem.isAlive) {
                if(this.ball.collide(elem)) {
                    this.ball.bumpBlock(elem);
                }
            }
        }, this);

        this.ball.checkBounds();

    },

    run: function() {
        this.update();  
        this.render();

        if(this.running) {
            window.requestAnimationFrame(function() {
                game.run();
            });
        }
       
    },

    over: function(message) {
        alert(message);
        this.running = false;
        window.location.reload()

    }

};

game.ball = {
    x: 350,
    y: 278,
    width: 22,
    height: 22,
    dx: 0,
    dy: 0,
    velocity: 3,
    jump: function() {
        this.dy= -this.velocity;
        this.dx= -this.velocity;
    },
    move: function () {
        this.x += this.dx;
        this.y += this.dy;

    },
    collide: function(elem) {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if ( x + this.width > elem.x &&
             x < elem.x + elem.width &&
             y + this.height > elem.y &&
             y < elem.y + elem.height) {
                return true;  
        }
        return false;
    },
    bumpBlock: function(block) {
        this.dy *= -1;
        block.isAlive = false;
        ++game.score;

        if(game.score >= game.blocks.length) {
            game.over('You Win!');
        }
    },
    onTheLeftSise: function(platform) {
        return (this.x + this.width / 2) < (platform.x + platform.width / 2);
    },
    bumpPlatform: function(platform) {
        this.dy = -this.velocity;
        this.dx = this.onTheLeftSise(platform) ? -this.velocity : this.velocity;
    },
    checkBounds: function() {
        var x = this.x + this.dx;
        var y = this.y + this.dy;

        if( x < 0) {
            this.x = 0;
            this.dx = this.velocity;
        } else if(x + this.width > game.width) {
            this.x = game.width - this.width;
            this.dx = -this.velocity;
        } else if(y < 0) {
            this.y = 0;
            this.dy = this.velocity;

        } else if(y + this.height > game.height) {
            game.over('Game Over');
        }
    }
}


game.platform = {
    x: 300,
    y: 300,
    velocity: 6,
    dx: 0,
    ball: game.ball,
    width: 120,
    height: 25,
    releaseBall: function() {
        if (this.ball) {
            this.ball.jump();
            this.ball = false;
        }
    },
    move: function () {
        this.x += this.dx;

        if(this.ball) {
            this.ball.x += this.dx;
        }
    },
    stop: function () {
        this.dx = 0;

        if(this.ball) {
            this.ball.dx = 0;
        }
    }
}


window.addEventListener('load', function(){
    game.start();
})

