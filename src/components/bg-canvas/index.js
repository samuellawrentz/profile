/* N-body simulation background */

/* Config */
const G = 40;                    /* Gravitational constant */
const TRAIL_SIZE = 50;           /* Length of trail */
const MAX_FORCE = 5;             /* Force dampening (No infinite force) */
const MAX_VELOCITY = 10;         /* No super speeds */
const LINE_FADE_CONST = 10;      /* Higher = more faded trail */
const DEFAULT_COLOR = '#772777'; /* Default color of trail and circle */
const COLLISION_DAMPEN = 0.0;    /* Speed Loss from walls */
const RAINBOW_TRAIL = true;      /* Rainbow the trail? */
const BOUNDARY_RULE = 'loop';  /* None, loop or bounce */

/* Load the canvas */
let canvas, context, ctx = null
let points = []


/**
 * circle - Draw a circle at location
 *
 * @param  {number} x             center x
 * @param  {number} y             center y
 * @param  {number} r             radius
 * @param  {string} color='white' Hex code or color name
 */
function circle(x, y, r, color='white') {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
}

/**
 * line - Draw a line between 2 points
 *
 * @param  {number} x1             x1
 * @param  {number} y1             y1
 * @param  {number} x1             x2
 * @param  {number} y1             y2
 * @param  {string} color='white'  Hex code or color name
 */
function line(x1, y1, x2, y2, color='white') {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

/**
 * shadeColor2 - Shade a color
 * From https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 *
 * @param  {string} color   Hex code or color name
 * @param  {number} percent Percent to shade
 */

function shadeColor2(color, percent) {
    let f = parseInt(color.slice(1),16),
                     t = percent < 0 ? 0:255, p = percent < 0 ? percent * -1 : percent,
                     R = f >> 16,
                     G = f >> 8 & 0x00FF,
                     B = f & 0x0000FF;
    return "#" + (0x1000000 +
        (Math.round((t - R ) *p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B))
        .toString(16).slice(1);
}

/**
 * A point under gravitational influence
 */
class Point {
    /**
     * constructor - Construct a Point
     *
     * @param  {number} x                   X
     * @param  {number} y                   Y
     * @param  {number} mass=10             Mass
     * @param  {number} radius=100          Radius
     * @param  {string} color=DEFAULT_COLOR Hex code or color name
     * @param  {booolean} fixed=false       Can the point NOT move?
     */
    constructor(x, y, mass=10, radius=100, color=DEFAULT_COLOR, fixed=false) {
        this.previous_pos = [];
        this.pos = {x: x, y: y};
        this.velocity = {x: 0, y: 0};

        this.mass = mass;
        this.radius = radius;
        this.id = Math.random();   /* Unique ID */
        this.color = color;
        this.fixed = fixed;

        this.updated_counter = 0;
    }

    /**
     * update - Update location by calculating
     * gravity with others
     *
     * @param  {array} points Array of Point
     */
    update(points) {
        if (this.fixed) return;

        this.updated_counter++;

        if (this.updated_counter % 7 === 0) {
            this.previous_pos.push({x :this.pos.x, y: this.pos.y});
            this.previous_pos = this.previous_pos.slice(-TRAIL_SIZE);
            this.updated_counter = 0;
        }

        for (let point of points) {
            if (point.id === this.id) continue;

            let d2 = (this.pos.x - point.pos.x) ** 2 + (this.pos.y - point.pos.y) ** 2;
            let force = G * this.mass * point.mass / d2;

            /* Force Dampening */
            if (force > MAX_FORCE ) force = MAX_FORCE;
            if (force < -MAX_FORCE ) force = -MAX_FORCE;

            /* Repulsive force if way too close
             * MAGIC DO NOT TOUCH */
            if (d2 < 100) force = -force * 2;

            let v_change = force / this.mass;
            let angle = Math.atan2(point.pos.y - this.pos.y, point.pos.x - this.pos.x);

            this.velocity.x += Math.cos(angle) * v_change;
            this.velocity.y += Math.sin(angle) * v_change;
        }
    }

    /**
     * doBoundaryRule - If position is out of bounds,
     * apply boundary rules
     */
    doBoundaryRule() {
        switch(BOUNDARY_RULE) {
            case 'none': break;
            case 'loop': {
                if (this.pos.x > canvas.width) this.pos.x = 0;
                if (this.pos.x < 0) this.pos.x = canvas.width;

                if (this.pos.y > canvas.height) this.pos.y = 0;
                if (this.pos.y < 0) this.pos.y = canvas.height;
                break;
            }
            case 'bounce': {
                if (this.pos.x > canvas.width) this.velocity.x = -Math.abs(this.velocity.x) * COLLISION_DAMPEN;
                if (this.pos.x < 0) this.pos.x = this.velocity.x = Math.abs(this.velocity.x) * COLLISION_DAMPEN;

                if (this.pos.y > canvas.height) this.velocity.y = -Math.abs(this.velocity.y) * COLLISION_DAMPEN;
                if (this.pos.y < 0) this.pos.y = this.velocity.y = Math.abs(this.velocity.y) * COLLISION_DAMPEN;
            }
        }
    }

    /**
     * updatePos - Update current positon and
     * draw trail/point
     */
    updatePos() {
        if (!this.fixed) {
            /* Limiit velocity */
            if (this.velocity.x > MAX_VELOCITY) this.velocity.x = MAX_VELOCITY;
            if (this.velocity.x < -MAX_VELOCITY) this.velocity.x = -MAX_VELOCITY;
            if (this.velocity.y > MAX_VELOCITY) this.velocity.y = MAX_VELOCITY;
            if (this.velocity.y < -MAX_VELOCITY) this.velocity.y = -MAX_VELOCITY;

            this.pos.x += this.velocity.x;
            this.pos.y += this.velocity.y;
            this.doBoundaryRule();
        }

        circle(this.pos.x, this.pos.y, this.radius, this.color);

        if (this.fixed) return;

        let line_color = DEFAULT_COLOR;

        for (let i = this.previous_pos.length - 1; i > 0; i--) {
            let p1 = this.previous_pos[i];
            let p2 = this.previous_pos[i - 1];

            /* No lines streching across entire canvas on loop mode */
            if (Math.abs(p1.x - p2.x) + 100 >= canvas.width || Math.abs(p1.y - p2.y) + 100 >= canvas.height) continue;

            line(p1.x, p1.y, p2.x, p2.y, line_color);
            if (RAINBOW_TRAIL) line_color = shadeColor2(line_color, 30);
            ctx.globalAlpha = i / this.previous_pos.length / LINE_FADE_CONST;
        }
        ctx.globalAlpha = 1;
    }
}



/**
 * draw - Draw loop
 */
export function DrawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    for (let p of points) {
        for (let point of points) point.update(points);
        for (let point of points) point.updatePos();
    }

    window.requestAnimationFrame(DrawCanvas);
}

export function initCanvas() {
    canvas = document.getElementById('canvas');
 context = canvas.getContext('2d');
 ctx = context;  /* Alias */
 points = [];

 /* Generate a random number of points (3 to 8)
 * and add them to array */
for(let i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
    let mass = Math.floor(Math.random() * 10) + 20; // Random mass between 5 and 25

    points.push(new Point(
        Math.floor(Math.random() * canvas.width),
        Math.floor(Math.random() * canvas.height),
        mass, mass / 16,
    ));
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}