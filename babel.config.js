const presets = [
	[
	  "@babel/preset-env",
	  {
		targets: {
		  edge: "17",
		  firefox: "67",
		  chrome: "75",
		  safari: "12",
		  node: "current"
		},
		useBuiltIns: "usage",
	  },
	],
  ];
  
  module.exports = { presets };