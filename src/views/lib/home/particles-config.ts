export const particlesConfig = {
	particles: {
		number: {
			value: 10,
			density: {
				enable: true,
				value_area: 350,
			},
		},
		color: {
			value: "#aeb2f7",
		},
		shape: {
			type: "edge",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: "img/github.svg",
				width: 0,
				height: 0,
			},
		},
		opacity: {
			value: 0.3,
			random: true,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 500,
			color: "#ffffff",
			opacity: 0.4,
			width: 2,
		},
		move: {
			enable: true,
			speed: 10,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "bubble",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 0.5,
				},
			},
			bubble: {
				distance: 400,
				size: 4,
				duration: 0.3,
				opacity: 1,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};
