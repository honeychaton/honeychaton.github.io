var svgIconConfig = {
	clock : { 
		url : 'plugins/svg/icons/clock.svg',
		animation : [
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r630 32 32"}' } 
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val :'{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r80 32 32"}' } 
				} 
			},
		]
	},
	trash : { 
		url : 'plugins/svg/icons/trash.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}' }, 
					to : { val : '{"transform" : "t0 -8"}' } 
				} 
			}
		]
	},
	contract : { 
		url : 'plugins/svg/icons/contract.svg',
		animation : [
			{ 
				el : 'rect:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}', after : '{ "opacity" : 0 }' }, 
					to : { val : '{"transform" : "t-5 -5"}', before : '{ "opacity" : 1 }' }
				} 
			},
			{ 
				el : 'rect:nth-child(3)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}', after : '{ "opacity" : 0 }' }, 
					to : { val : '{"transform" : "t-10 -10"}', before : '{ "opacity" : 1 }' }
				} 
			}
		]
	},
	maximize : { 
		url : 'plugins/svg/icons/maximize.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}' }, 
					to : { val : '{"transform" : "t-5 -5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}' }, 
					to : { val : '{"transform" : "t5 -5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}' }, 
					to : { val : '{"transform" : "t-5 5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(4)', 
				animProperties : { 
					from : { val : '{"transform" : "t0 0"}' }, 
					to : { val : '{"transform" : "t5 5"}' }
				} 
			}
		]
	},
	maximizeRotate : { 
		url : 'plugins/svg/icons/maximize.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 16 16 t0 0"}' }, 
					to : { val : '{"transform" : "r180 16 16 t-5 -5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 48 16 t0 0"}' }, 
					to : { val : '{"transform" : "r-180 48 16 t5 -5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 16 48 t0 0"}' }, 
					to : { val : '{"transform" : "r-180 16 48 t-5 5"}' }
				} 
			},
			{ 
				el : 'path:nth-child(4)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 48 48 t0 0"}' }, 
					to : { val : '{"transform" : "r180 48 48 t5 5"}' }
				} 
			}
		]
	},
	volume : {
		url : 'plugins/svg/icons/volume.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "t-10 0 s0 32 32"}' }, 
					to : { val : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}', before : '{"transform" : "t-10 0 s0 32 32"}', delayFactor : .5 }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "t-10 0 s0 32 32"}', delayFactor : .25 }, 
					to : { val : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}', before : '{"transform" : "t-10 0 s0 32 32"}', delayFactor : .25 }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"transform" : "t-10 0 s0 32 32"}', delayFactor : .5 }, 
					to : { val : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}', before : '{"transform" : "t-10 0 s0 32 32"}' }
				} 
			}
		]
	},
	account : {
		url : 'plugins/svg/icons/account.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M33.683,29.753C36.035,27.473,39,24.542,39,21v-8c0-6.927-7.097-13-14-13S11,6.074,11,13v8 c0,3.539,2.965,6.471,5.315,8.752C6.79,31.241,0,35.1,0,39.597v4.132C0,47.194,2.797,50,6.25,50h37.5c3.453,0,6.25-2.807,6.25-6.271 v-4.115C50,35.118,43.209,31.246,33.683,29.753z M15,20v-8c0-4.642,4.702-8.18,10-8.18S35,7.359,35,12v8c0,4.642-4.702,9-10,9 C19.703,29,15,24.642,15,20z M46,44c0,1.152-0.851,2-2,2H6c-1.149,0-2-0.848-2-2v-4c0-0.487,1.367-2.463,4.934-3.963 C13.103,34.284,18.959,33,25,33c6.038,0,11.893,1.285,16.063,3.044C44.632,37.549,46,39.511,46,40V44z"}' }, 
					to : { val : '{"path" : "M33.683,29.753C36.035,27.473,39,24.542,39,21v-8c0-6.927-7.097-13-14-13S11,6.074,11,13v8 c0,3.539,2.965,6.471,5.315,8.752C6.79,31.241,0,35.1,0,39.597v4.132C0,47.194,2.797,50,6.25,50h37.5c3.453,0,6.25-2.807,6.25-6.271 v-4.115C50,35.118,43.209,31.246,33.683,29.753z M15,20v-8c0-4.642,0.703,1,6,1c5.298,0,13.731-7.076,14-1v8c0,4.642-4.702,9-10,9 C19.703,29,15,24.642,15,20z M46,44c0,1.152-0.851,2-2,2H6c-1.149,0-2-0.848-2-2v-4c0-0.487,1.367-2.463,4.934-3.963 C13.103,34.284,18.959,40,25,40c6.038,0,11.893-5.715,16.063-3.956C44.632,37.549,46,39.511,46,40V44z"}' }
				} 
			}
		]
	},
	cart : {
		url : 'plugins/svg/icons/cart.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 34.836674,15.196252 v -3.958053 c 0,-6.8315993 -4.857519,-10.88464561 -11.79248,-10.88464561 -6.934961,0 -11.792479,4.05304631 -11.792479,10.88464561 v 3.958053 H 0.44194174 v 36.117233 c 0,4.100544 3.37166636,7.42135 7.53342906,7.42135 H 38.112035 c 4.162745,0 7.534412,-3.320806 7.534412,-7.42135 V 15.196252 H 34.836674 z M 16.165248,11.238199 c 0,-4.0985638 2.718167,-6.9265926 6.878946,-6.9265926 4.16078,0 6.878947,2.8280288 6.878947,6.9265926 v 3.958053 H 16.165248 v -3.958053 z m 24.567665,38.591017 c 0,1.366517 -1.560537,3.958053 -2.94812,3.958053 H 9.2863014 c -1.3875817,0 -3.9308265,-2.591536 -3.9308265,-3.958053 V 20.143819 H 40.732913 v 29.685397 z"}' }, 
					to : { val : '{"path" : "M 35,15 V 11 C 35,4.096 30.057,0 23,0 15.943,0 11,4.096 11,11 v 4 H 0 V 51.5 C 0,55.644 3.431,59 7.666,59 H 38.333 C 42.569,59 46,55.644 46,51.5 V 15 H 35 z M 16,11 c 0,-4.142 2.766,-7 7,-7 4.234,0 7,2.858 7,7 v 4 H 16 V 11 z M 41,34 H 5 V 20 h 36 v 14 z"}' }
				} 
			}
		]
	},
	likeDark : {
		url : 'plugins/svg/icons/like_dark.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 32.216,47.961 -0.213,0.216 -15.53,-15.74 -7.764,-7.869 c -4.288,-4.347 -4.288,-11.395 0,-15.742 4.29,-4.347 11.241,-4.347 15.53,0 l 7.764,7.871 7.766,-7.871 c 4.287,-4.347 11.241,-4.347 15.529,0 3.135,3.178 3.968,7.795 2.52,11.75 1.731,0.726 3.333,1.695 4.775,2.854 2.661,-6.121 1.534,-13.523 -3.412,-18.538 -6.434,-6.521 -16.863,-6.521 -23.295,0 L 32.003,8.827 28.119,4.893 c -6.433,-6.521 -16.862,-6.521 -23.294,0 -6.433,6.52 -6.433,17.09 0,23.61 l 3.882,3.934 23.295,23.61 3.416,-3.462 c -1.273,-1.378 -2.354,-2.931 -3.202,-4.624 z"}' }, 
					to : { val : '{"path" : "m 22.026,39.523 c 0,-0.477 0.013,-0.951 0.036,-1.422 L 16.473,32.436 8.709,24.567 c -4.288,-4.347 -4.288,-11.395 0,-15.742 4.29,-4.347 11.241,-4.347 15.53,0 l 7.764,7.871 7.766,-7.871 c 4.287,-4.347 11.241,-4.347 15.529,0 0.898,0.911 1.598,1.944 2.119,3.042 2.252,0.559 4.396,1.387 6.401,2.446 C 63.33,10.866 61.797,7.542 59.18,4.891 52.746,-1.63 42.317,-1.63 35.885,4.891 L 32.002,8.826 28.118,4.892 c -6.433,-6.521 -16.862,-6.521 -23.294,0 -6.433,6.52 -6.433,17.09 0,23.61 l 3.882,3.934 14.295,14.488 c -0.632,-2.361 -0.975,-4.84 -0.975,-7.401 z"}' }
				} 
			}
		]
	},
	likedDark : {
		url : 'plugins/svg/icons/liked_dark.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 30.061,39.356 c 0,-10.861 8.946,-19.666 19.981,-19.666 4.578,0 8.783,1.531 12.152,4.08 3.091,-6.151 2.075,-13.83 -3.068,-18.961 -6.428,-6.412 -16.848,-6.412 -23.273,0 l -3.88,3.869 -3.88,-3.868 c -6.427,-6.412 -16.847,-6.412 -23.272,0 -6.427,6.41 -6.427,16.805 0,23.217 l 3.878,3.867 23.274,23.218 2.94,-2.933 C 31.896,48.735 30.061,44.26 30.061,39.356 z"}' }, 
					to : { val : '{"path" : "m 21.032,39.531 c 0,-15.736 12.758,-28.493 28.497,-28.493 5.232,0 10.132,1.417 14.346,3.877 -0.338,-3.688 -1.918,-7.283 -4.748,-10.106 -6.428,-6.412 -16.848,-6.412 -23.273,0 l -3.88,3.869 -3.88,-3.868 c -6.427,-6.412 -16.847,-6.412 -23.272,0 -6.427,6.41 -6.427,16.805 0,23.217 L 8.7,31.894 21.504,44.666 C 21.199,43 21.032,41.286 21.032,39.531 z"}' }
				} 
			}
		]
	},
	portfolio : {
		url : 'plugins/svg/icons/portfolio.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 16.071909,0.28763666 H 6.2067389 c -3.270304,0 -5.91910224,2.64879824 -5.91910224,5.91910224 v 9.8651701 c 0,3.270304 2.64879824,5.919102 5.91910224,5.919102 h 9.8651701 c 3.269318,0 5.919102,-2.648798 5.919102,-5.919102 V 6.2067389 c 0,-3.270304 -2.649784,-5.91910224 -5.919102,-5.91910224 z M 18.044943,16.071909 c 0,1.090101 -0.882933,1.973034 -1.973034,1.973034 H 6.2067389 c -1.0901014,0 -1.9730342,-0.883919 -1.9730342,-1.973034 V 6.2067389 c 0,-1.0901014 0.8829328,-1.9730342 1.9730342,-1.9730342 h 9.8651701 c 1.090101,0 1.973034,0.8829328 1.973034,1.9730342 V 16.071909 z M 41.721352,0.28763666 h -9.86517 c -3.270304,0 -5.919103,2.64879824 -5.919103,5.91910224 v 9.8651701 c 0,3.270304 2.648799,5.919102 5.919103,5.919102 h 9.86517 c 3.269318,0 5.919102,-2.648798 5.919102,-5.919102 V 6.2067389 c 0,-3.270304 -2.649784,-5.91910224 -5.919102,-5.91910224 z M 43.694386,16.071909 c 0,1.090101 -0.883919,1.973034 -1.973034,1.973034 h -9.86517 c -1.090101,0 -1.973034,-0.883919 -1.973034,-1.973034 V 6.2067389 c 0,-1.0901014 0.882933,-1.9730342 1.973034,-1.9730342 h 9.86517 c 1.089115,0 1.973034,0.8829328 1.973034,1.9730342 v 9.8651701 z m -1.973034,9.86517 h -9.86517 c -3.270304,0 -5.919103,2.649785 -5.919103,5.919103 v 9.86517 c 0,3.269318 2.648799,5.919102 5.919103,5.919102 h 9.86517 c 3.269318,0 5.919102,-2.649784 5.919102,-5.919102 v -9.86517 c 0,-3.269318 -2.649784,-5.919103 -5.919102,-5.919103 z m 1.973034,15.784273 c 0,1.089115 -0.883919,1.973034 -1.973034,1.973034 h -9.86517 c -1.090101,0 -1.973034,-0.883919 -1.973034,-1.973034 v -9.86517 c 0,-1.090101 0.882933,-1.973034 1.973034,-1.973034 h 9.86517 c 1.089115,0 1.973034,0.882933 1.973034,1.973034 v 9.86517 z M 16.071909,25.937079 H 6.2067389 c -3.270304,0 -5.91910224,2.649785 -5.91910224,5.919103 v 9.86517 c 0,3.269318 2.64879824,5.919102 5.91910224,5.919102 h 9.8651701 c 3.269318,0 5.919102,-2.649784 5.919102,-5.919102 v -9.86517 c 0,-3.269318 -2.649784,-5.919103 -5.919102,-5.919103 z m 1.973034,15.784273 c 0,1.089115 -0.882933,1.973034 -1.973034,1.973034 H 6.2067389 c -1.0901014,0 -1.9730342,-0.883919 -1.9730342,-1.973034 v -9.86517 c 0,-1.090101 0.8829328,-1.973034 1.9730342,-1.973034 h 9.8651701 c 1.090101,0 1.973034,0.882933 1.973034,1.973034 v 9.86517 z"}' }, 
					to : { val : '{"path" : "M 12.51483,0.16949149 H 5.4894068 c -2.9111599,0 -5.26906782,2.36359641 -5.26906782,5.28177971 v 7.0423728 c 0,2.918184 2.35790792,5.28178 5.26906782,5.28178 H 12.51483 c 2.910283,0 5.269068,-2.363596 5.269068,-5.28178 V 5.4512712 c 0,-2.9181833 -2.358785,-5.28177971 -5.269068,-5.28177971 z M 14.271187,12.493644 c 0,0.972728 -0.786848,1.760594 -1.756357,1.760594 H 5.4894068 c -0.9703866,0 -1.756356,-0.788747 -1.756356,-1.760594 V 5.4512712 c 0,-0.9727278 0.7859694,-1.7605932 1.756356,-1.7605932 H 12.51483 c 0.969509,0 1.756357,0.7878654 1.756357,1.7605932 V 12.493644 z M 40.616526,0.16949149 h -7.025425 c -2.911159,0 -5.269067,2.36359641 -5.269067,5.28177971 v 7.0423728 c 0,2.918184 2.357908,5.28178 5.269067,5.28178 h 7.025425 c 2.910281,0 5.269067,-2.363596 5.269067,-5.28178 V 5.4512712 c 0,-2.9181833 -2.358786,-5.28177971 -5.269067,-5.28177971 z M 42.372882,12.493644 c 0,0.972728 -0.786848,1.760594 -1.756356,1.760594 h -7.025425 c -0.970386,0 -1.756355,-0.788747 -1.756355,-1.760594 V 5.4512712 c 0,-0.9727278 0.785969,-1.7605932 1.756355,-1.7605932 h 7.025425 c 0.969508,0 1.756356,0.7878654 1.756356,1.7605932 v 7.0423728 z m -1.756356,15.845339 h -7.025425 c -2.911159,0 -5.269067,2.364476 -5.269067,5.28178 v 7.042373 c 0,2.917303 2.357908,5.281779 5.269067,5.281779 h 7.025425 c 2.910281,0 5.269067,-2.364476 5.269067,-5.281779 v -7.042373 c 0,-2.917304 -2.358786,-5.28178 -5.269067,-5.28178 z m 1.756356,12.324153 c 0,0.971847 -0.786848,1.760593 -1.756356,1.760593 h -7.025425 c -0.970386,0 -1.756355,-0.788746 -1.756355,-1.760593 v -7.042373 c 0,-0.972728 0.785969,-1.760594 1.756355,-1.760594 h 7.025425 c 0.969508,0 1.756356,0.787866 1.756356,1.760594 v 7.042373 z M 12.51483,28.338983 H 5.4894068 c -2.9111599,0 -5.26906782,2.364476 -5.26906782,5.28178 v 7.042373 c 0,2.917303 2.35790792,5.281779 5.26906782,5.281779 H 12.51483 c 2.910283,0 5.269068,-2.364476 5.269068,-5.281779 v -7.042373 c 0,-2.917304 -2.358785,-5.28178 -5.269068,-5.28178 z m 1.756357,12.324153 c 0,0.971847 -0.786848,1.760593 -1.756357,1.760593 H 5.4894068 c -0.9703866,0 -1.756356,-0.788746 -1.756356,-1.760593 v -7.042373 c 0,-0.972728 0.7859694,-1.760594 1.756356,-1.760594 H 12.51483 c 0.969509,0 1.756357,0.787866 1.756357,1.760594 v 7.042373 z"}' }
				} 
			}
		]
	},
	plus : { 
		url : 'plugins/svg/icons/plus.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32", "opacity" : 1}' }, 
					to : { val : '{"transform" : "r180 32 32", "opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r180 32 32"}' }
				} 
			}
		]
	},
	plusCross : { 
		url : 'plugins/svg/icons/plus.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r45 32 32"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r45 32 32"}' }
				} 
			}
		]
	},
	plusLight : { 
		url : 'plugins/svg/icons/plus_light.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32", "opacity" : 1}' }, 
					to : { val : '{"transform" : "r180 32 32", "opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r180 32 32"}' }
				} 
			}
		]
	},
	plusLightCross : { 
		url : 'plugins/svg/icons/plus_light.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r45 32 32"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r45 32 32"}' }
				} 
			}
		]
	},
	hamburger : {
		url : 'plugins/svg/icons/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' }, 
					to : { val : '{"path" : "m 5.091679,9.771104 53.816642,0"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' }, 
					to : { val : '{"path" : "m 5.0916789,54.00487 53.8166421,0"}' }
				} 
			}
		]
	},
	hamburgerCross : {
		url : 'plugins/svg/icons/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' }, 
					to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' }, 
					to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
				} 
			}
		]
	},
	navLeftArrow : {
		url : 'plugins/svg/icons/nav-left-arrow.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 48.592939,9.792208 15.407062,31.887987 48.592939,54.025974"}' }, 
					to : { val : '{"path" : "M 15.407062,9.792208 48.592939,31.887987 15.407062,54.025974"}' }
				} 
			}
		]
	},
	navUpArrow : {
		url : 'plugins/svg/icons/nav-up-arrow.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 9.8831175,48.502029 31.978896,15.316152 54.116883,48.502029"}' }, 
					to : { val : '{"path" : "M 9.8831175,15.316152 31.978896,48.502029 54.116883,15.316152"}' }
				} 
			}
		]
	},
	rightArrow : {
		url : 'plugins/svg/icons/right-arrow.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 34.419061,13.24425 57.580939,32.017897 34.419061,50.75575"}' }, 
					to : { val : '{"path" : "M 31.580939,13.24425 8.419061,32.017897 31.580939,50.75575"}' }
				} 
			}
		]
	},
	downArrow : {
		url : 'plugins/svg/icons/down-arrow.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 14.083963,33.258774 32.85761,56.420652 51.595463,33.258774"}' }, 
					to : { val : '{"path" : "M 14.083963,30.420652 32.85761,7.258774 51.595463,30.420652"}' }
				} 
			}
		]
	},
	filter : {
		url : 'plugins/svg/icons/filter.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 26.34375 0.3125 C 21.567512 0.3125 18.53125 2.6518592 18.53125 7.90625 L 18.53125 13 L 9.0625 13 C 4.2885258 13 0.4375 17.248145 0.4375 22.5 L 0.4375 54.1875 C 0.4375 59.436819 4.2885258 63.71875 9.0625 63.71875 L 55.15625 63.71875 C 59.930225 63.71875 63.8125 59.436819 63.8125 54.1875 L 63.8125 22.5 C 63.8125 17.248145 59.930225 13 55.15625 13 L 45.6875 13 L 45.6875 7.90625 C 45.6875 2.6518592 42.648974 0.3125 37.875 0.3125 L 26.34375 0.3125 z M 25.3125 5.375 L 38.90625 5.375 C 40.497574 5.375 41.15625 6.1539412 41.15625 7.90625 L 41.15625 13 L 23.0625 13 L 23.0625 7.90625 C 23.0625 6.1539412 23.721176 5.375 25.3125 5.375 z M 9.46875 18.0625 L 15.5625 18.0625 L 15.5625 58.625 L 9.46875 58.625 C 7.8774253 58.625 4.9375 55.312273 4.9375 53.5625 L 4.9375 23.125 C 4.9375 21.372692 7.8774253 18.0625 9.46875 18.0625 z M 20.125 18.0625 L 44.28125 18.0625 L 44.28125 58.625 L 20.125 58.625 L 20.125 18.0625 z M 48.84375 18.0625 L 54.75 18.0625 C 56.341326 18.0625 59.28125 21.372692 59.28125 23.125 L 59.28125 53.5625 C 59.28125 55.312273 56.341326 58.625 54.75 58.625 L 48.84375 58.625 L 48.84375 18.0625 z"}' }, 
					to : { val : '{"path" : "M 26.34375 0.3125 C 21.567512 0.3125 18.53125 2.6518592 18.53125 7.90625 L 18.53125 13 L 9.0625 13 C 4.2885258 13 0.4375 17.248145 0.4375 22.5 L 0.4375 54.1875 C 0.4375 59.436819 4.2885258 63.71875 9.0625 63.71875 L 55.15625 63.71875 C 59.930225 63.71875 63.8125 59.436819 63.8125 54.1875 L 63.8125 22.5 C 63.8125 17.248145 59.930225 13 55.15625 13 L 45.6875 13 L 45.6875 7.90625 C 45.6875 2.6518592 42.648974 0.3125 37.875 0.3125 L 26.34375 0.3125 z M 25.3125 5.375 L 38.90625 5.375 C 40.497574 5.375 41.15625 6.1539412 41.15625 7.90625 L 41.15625 13 L 23.0625 13 L 23.0625 7.90625 C 23.0625 6.1539412 23.721176 5.375 25.3125 5.375 z M 9.46875 18.0625 L 18.53125 18.0625 L 45.6875 18.0625 L 54.75 18.0625 C 56.341326 18.0625 59.28125 21.372692 59.28125 23.125 L 59.28125 27.71875 L 4.9375 27.71875 L 4.9375 23.125 C 4.9375 21.372692 7.8774253 18.0625 9.46875 18.0625 z M 4.9375 32.28125 L 59.28125 32.28125 L 59.28125 43.8125 L 4.9375 43.8125 L 4.9375 32.28125 z M 4.9375 48.375 L 59.28125 48.375 L 59.28125 53.5625 C 59.28125 55.312273 56.341326 58.625 54.75 58.625 L 45.6875 58.625 L 18.53125 58.625 L 9.46875 58.625 C 7.8774253 58.625 4.9375 55.312273 4.9375 53.5625 L 4.9375 48.375 z "}' }
				} 
			}
		]
	},
	smiley : {
		url : 'plugins/svg/icons/smiley.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 19.380224,39.901132 c 0,0 4.860771,5.28501 12.770151,5.28501 7.909379,0 12.770152,-5.28501 12.770152,-5.28501"}' }, 
					to : { val : '{"path" : "m 19.380224,45.186142 c 0,0 4.860771,-5.28501 12.770151,-5.28501 7.909379,0 12.770152,5.28501 12.770152,5.28501"}' }
				} 
			}
		]
	},
	play : {
		url : 'plugins/svg/icons/play.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 18.741071,52 31.30178,42.531655 45.258928,31.887987 18.741071,12 z"}' }, 
					to : { val : '{"path" : "M 18.741071,52 31.30178,42.531655 45.258928,31.887987 18.741071,12 z"}' }
				} 
			}
		]
	},
	pause : {
		url : 'plugins/svg/icons/pause.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 13.942276,0.28813559 c -7.5050573,0 -13.58634379,4.73565681 -13.58634379,10.57985141 v 42.31714 c 0,5.839661 6.08128649,10.577585 13.58634379,10.577585 7.505057,0 12.352793,-5.492818 12.352793,-11.334746 V 11.622881 c 0,-5.8419276 -4.847736,-11.33474541 -12.352793,-11.33474541 z M 17.648691,52.427966 c 0,1.947309 -1.204729,4.282267 -3.706415,4.282267 -2.501686,0 -4.9399648,-2.334958 -4.9399648,-4.282267 V 11.622881 c 0,-1.9473089 2.4382788,-4.2822666 4.9399648,-4.2822666 2.501686,0 3.706415,2.3349577 3.706415,4.2822666 V 52.427966 z M 50.173486,0.28813559 c -7.502175,0 -12.349912,5.49281781 -12.349912,11.33474541 v 40.805085 c 0,5.841928 4.847737,11.334746 12.349912,11.334746 7.502175,0 13.589226,-4.737924 13.589226,-10.577585 v -42.31714 c 0,-5.8441946 -6.084169,-10.57985141 -13.589226,-10.57985141 z M 55.116333,52.427966 c 0,1.947309 -2.441161,4.282267 -4.942847,4.282267 -2.498804,0 -3.703533,-2.334958 -3.703533,-4.282267 V 11.622881 c 0,-1.9473089 1.204729,-4.2822666 3.703533,-4.2822666 2.501686,0 4.942847,2.3349577 4.942847,4.2822666 v 40.805085 z"}' }, 
					to : { val : '{"path" : "M 11.022356,0.40677966 C 5.1302542,0.40677966 0.3559322,5.124733 0.3559322,10.94708 v 42.158946 c 0,5.817829 4.774322,10.538042 10.6664238,10.538042 5.892101,0 9.697983,-5.472285 9.697983,-11.292373 V 11.699152 c 0,-5.8200884 -3.805882,-11.29237234 -9.697983,-11.29237234 z M 13.932203,52.351695 c 0,1.940029 -0.945813,4.266259 -2.909847,4.266259 -1.9640339,0 -3.8782883,-2.32623 -3.8782883,-4.266259 V 11.699152 c 0,-1.9400292 1.9142544,-4.266258 3.8782883,-4.266258 1.964034,0 2.909847,2.3262288 2.909847,4.266258 V 52.351695 z M 53.043178,0.40677966 c -5.889839,0 -9.695721,5.47228394 -9.695721,11.29237234 v 40.652543 c 0,5.820088 3.805882,11.292373 9.695721,11.292373 5.889838,0 10.668686,-4.720213 10.668686,-10.538042 V 10.94708 c 0,-5.822347 -4.776585,-10.54030034 -10.668686,-10.54030034 z m 3.88055,51.94491534 c 0,1.940029 -1.916516,4.266259 -3.88055,4.266259 -1.961771,0 -2.907585,-2.32623 -2.907585,-4.266259 V 11.699152 c 0,-1.9400292 0.945814,-4.266258 2.907585,-4.266258 1.964034,0 3.88055,2.3262288 3.88055,4.266258 v 40.652543 z"}' }
				} 
			}
		]
	},
	cog: {
		url : 'plugins/svg/icons/style_switcher.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M43.75,31.25c3.451,0,6.25-2.799,6.25-6.25c0-3.452-2.799-6.25-6.25-6.25h-1.067 c-0.222-0.627-0.476-1.239-0.761-1.834l0.756-0.755c2.44-2.441,2.44-6.398,0-8.839c-2.441-2.44-6.398-2.44-8.839,0l-0.755,0.755 c-0.595-0.285-1.207-0.539-1.834-0.761V6.25C31.25,2.798,28.451,0,25,0s-6.25,2.798-6.25,6.25v1.067 c-0.627,0.222-1.239,0.476-1.834,0.761l-0.755-0.755c-2.441-2.44-6.398-2.44-8.839,0s-2.44,6.398,0,8.839l0.755,0.755 c-0.284,0.595-0.538,1.207-0.761,1.834H6.25C2.799,18.75,0,21.548,0,25c0,3.451,2.799,6.25,6.25,6.25h1.066 c0.223,0.627,0.477,1.238,0.761,1.834l-0.755,0.755c-2.44,2.44-2.44,6.397,0,8.839c2.44,2.44,6.397,2.44,8.839,0l0.755-0.756 c0.595,0.285,1.207,0.539,1.834,0.762v1.066c0,3.451,2.799,6.25,6.25,6.25s6.25-2.799,6.25-6.25v-1.066 c0.627-0.223,1.239-0.477,1.834-0.762l0.755,0.756c2.44,2.44,6.397,2.44,8.839,0c2.44-2.441,2.44-6.398,0-8.839l-0.756-0.755 c0.285-0.596,0.539-1.207,0.761-1.834H43.75z M39.436,27.083c-0.354,2.472-1.326,4.741-2.756,6.65l2.97,2.97l0.082,0.082 c0.813,0.813,0.813,2.133,0,2.946s-2.133,0.813-2.946,0l-0.082-0.082l-2.97-2.97c-1.909,1.43-4.179,2.402-6.65,2.756v4.314 c0,1.15-0.933,2.084-2.083,2.084s-2.083-0.934-2.083-2.084v-4.314c-2.472-0.354-4.742-1.326-6.65-2.756l-2.97,2.97l-0.082,0.082 c-0.813,0.813-2.133,0.813-2.946,0s-0.813-2.133,0-2.946l0.082-0.082l2.969-2.97c-1.429-1.909-2.401-4.179-2.756-6.65H6.25 c-1.15,0-2.084-0.933-2.084-2.083S5.1,22.917,6.25,22.917h4.313c0.354-2.471,1.327-4.741,2.756-6.65l-2.969-2.97l-0.082-0.081 c-0.813-0.814-0.813-2.133,0-2.947c0.813-0.813,2.133-0.813,2.946,0l0.082,0.082l2.97,2.969c1.908-1.429,4.179-2.402,6.65-2.755 V6.25c0-1.15,0.933-2.083,2.083-2.083S27.083,5.1,27.083,6.25v4.314c2.472,0.354,4.741,1.326,6.65,2.755l2.97-2.969l0.082-0.082 c0.813-0.813,2.133-0.813,2.946,0c0.813,0.813,0.813,2.133,0,2.947l-0.082,0.081l-2.97,2.97c1.43,1.909,2.402,4.18,2.756,6.65h4.314 c1.15,0,2.083,0.933,2.083,2.083s-0.933,2.083-2.083,2.083H39.436z M25,16.667c-4.603,0-8.334,3.731-8.334,8.333 s3.731,8.334,8.334,8.334s8.333-3.731,8.333-8.334S29.603,16.667,25,16.667z M25,29.166c-2.302,0-4.167-1.865-4.167-4.166 c0-2.301,1.865-4.167,4.167-4.167c2.301,0,4.167,1.865,4.167,4.167C29.167,27.301,27.301,29.166,25,29.166z"}' }, 
					to : { val : '{"path" : "M43.75,31.25c3.451,0,6.25-2.799,6.25-6.25c0-3.452-2.799-6.25-6.25-6.25h-1.067 c-0.222-0.627-0.476-1.239-0.761-1.834l0.756-0.755c2.44-2.441,2.44-6.398,0-8.839c-2.441-2.44-6.398-2.44-8.839,0l-0.755,0.755 c-0.595-0.285-1.207-0.539-1.834-0.761V6.25C31.25,2.798,28.451,0,25,0s-6.25,2.798-6.25,6.25v1.067 c-0.627,0.222-1.239,0.476-1.834,0.761l-0.755-0.755c-2.441-2.44-6.398-2.44-8.839,0s-2.44,6.398,0,8.839l0.755,0.755 c-0.284,0.595-0.538,1.207-0.761,1.834H6.25C2.799,18.75,0,21.548,0,25c0,3.451,2.799,6.25,6.25,6.25h1.066 c0.223,0.627,0.477,1.238,0.761,1.834l-0.755,0.755c-2.44,2.44-2.44,6.397,0,8.839c2.44,2.44,6.397,2.44,8.839,0l0.755-0.756 c0.595,0.285,1.207,0.539,1.834,0.762v1.066c0,3.451,2.799,6.25,6.25,6.25s6.25-2.799,6.25-6.25v-1.066 c0.627-0.223,1.239-0.477,1.834-0.762l0.755,0.756c2.44,2.44,6.397,2.44,8.839,0c2.44-2.441,2.44-6.398,0-8.839l-0.756-0.755 c0.285-0.596,0.539-1.207,0.761-1.834H43.75z M39.436,27.083c-0.354,2.472-1.326,4.741-2.756,6.65l2.97,2.97l0.082,0.082 c0.813,0.813,0.813,2.133,0,2.946s-2.133,0.813-2.946,0l-0.082-0.082l-2.97-2.97c-1.909,1.43-4.179,2.402-6.65,2.756v4.314 c0,1.15-0.933,2.084-2.083,2.084s-2.083-0.934-2.083-2.084v-4.314c-2.472-0.354-4.742-1.326-6.65-2.756l-2.97,2.97l-0.082,0.082 c-0.813,0.813-2.133,0.813-2.946,0s-0.813-2.133,0-2.946l0.082-0.082l2.969-2.97c-1.429-1.909-2.401-4.179-2.756-6.65H6.25 c-1.15,0-2.084-0.933-2.084-2.083S5.1,22.917,6.25,22.917h4.313c0.354-2.471,1.327-4.741,2.756-6.65l-2.969-2.97l-0.082-0.081 c-0.813-0.814-0.813-2.133,0-2.947c0.813-0.813,2.133-0.813,2.946,0l0.082,0.082l2.97,2.969c1.908-1.429,4.179-2.402,6.65-2.755 V6.25c0-1.15,0.933-2.083,2.083-2.083S27.083,5.1,27.083,6.25v4.314c2.472,0.354,4.741,1.326,6.65,2.755l2.97-2.969l0.082-0.082 c0.813-0.813,2.133-0.813,2.946,0c0.813,0.813,0.813,2.133,0,2.947l-0.082,0.081l-2.97,2.97c1.43,1.909,2.402,4.18,2.756,6.65h4.314 c1.15,0,2.083,0.933,2.083,2.083s-0.933,2.083-2.083,2.083H39.436z M25,16.667c-4.603,0-8.334,3.731-8.334,8.333 s3.731,8.334,8.334,8.334s8.333-3.731,8.333-8.334S29.603,16.667,25,16.667z M25,29.166c-2.302,0-4.167-1.865-4.167-4.166 c0-2.301,1.865-4.167,4.167-4.167c2.301,0,4.167,1.865,4.167,4.167C29.167,27.301,27.301,29.166,25,29.166z"}' }
				} 
			}
		]
	},
	previous : {
		url : 'plugins/svg/icons/previous.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 25.982,14 H 5.006 l 8.041,8.332 c 0.585,0.61 0.585,1.6 0,2.211 -0.586,0.609 -1.533,0.609 -2.119,-10e-4 L 0.439,13.604 c -0.585,-0.61 -0.585,-1.6 0,-2.209 L 10.928,0.458 C 11.221,0.152 11.604,0 11.987,0 c 0.383,0 0.767,0.152 1.06,0.458 0.585,0.609 0.585,1.599 0,2.209 L 5.006,11 h 20.976 c 0.828,0 1.986,0.637 1.986,1.5 0.001,0.863 -1.157,1.5 -1.986,1.5 z"}' }, 
					to : { val : '{"path" : "M 25.982,13.389524 H 5.006 l 8.041,5.483342 c 0.585,0.401445 0.585,1.05297 0,1.455073 -0.586,0.400787 -1.533,0.400787 -2.119,-6.58e-4 L 0.439,13.128914 c -0.585,-0.401445 -0.585,-1.05297 0,-1.453757 L 10.928,4.4774491 c 0.293,-0.2013805 0.676,-0.3014126 1.059,-0.3014126 0.383,0 0.767,0.1000321 1.06,0.3014126 0.585,0.4007868 0.585,1.052312 0,1.4537568 L 5.006,11.415206 h 20.976 c 0.828,0 1.986,0.419213 1.986,0.987159 0.001,0.567946 -1.157,0.987159 -1.986,0.987159 z"}' }
				} 
			}
		]
	},
	next : {
		url : 'plugins/svg/icons/next.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 0,12.5 C 0,11.637 1.158,11 1.986,11 H 22.963 L 14.922,2.667 c -0.585,-0.61 -0.585,-1.6 0,-2.209 C 15.215,0.152 15.598,0 15.981,0 c 0.383,0 0.767,0.152 1.06,0.457 L 27.53,11.395 c 0.585,0.61 0.585,1.599 0,2.209 L 17.041,24.542 c -0.586,0.61 -1.533,0.61 -2.119,10e-4 -0.585,-0.611 -0.585,-1.601 0,-2.211 L 22.963,14 H 1.986 C 1.158,14 0,13.363 0,12.5 z"}' }, 
					to : { val : '{"path" : "M 0,12.2744 C 0,11.683903 1.158,11.248043 1.986,11.248043 H 22.963 L 14.922,5.5462855 c -0.585,-0.4173853 -0.585,-1.0947811 0,-1.5114822 0.293,-0.2093769 0.676,-0.3133811 1.059,-0.3133811 0.383,0 0.767,0.1040042 1.06,0.3126969 L 27.53,11.518317 c 0.585,0.417385 0.585,1.094097 0,1.511482 l -10.489,7.484198 c -0.586,0.417386 -1.533,0.417386 -2.119,6.84e-4 -0.585,-0.418069 -0.585,-1.095466 0,-1.512851 l 8.041,-5.701072 H 1.986 C 1.158,13.300758 0,12.864898 0,12.2744 z"}' }
				} 
			}
		]
	},
	thumbs : {
		url : 'plugins/svg/icons/thumbnails.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "M 32.037119,56.799732 7.1448079,41.703816 0.35599576,45.18592 32.037119,63.761671 63.718242,45.18592 56.929429,41.703816 32.037119,56.799732 z m 0,-13.148568 L 7.1448079,28.555248 0.35599576,32.039618 32.037119,50.617638 63.718242,32.039618 56.929429,28.555248 32.037119,43.651164 z M 63.718242,18.854779 32.037119,0.27676043 0.35599576,18.854779 32.037119,37.432799 63.718242,18.854779 z M 32.037119,7.2001613 50.224346,18.854779 32.037119,30.509398 13.849891,18.854779 32.037119,7.2001613 z"}' }, 
					to : { val : '{"path" : "M 32.037119,49.012903 7.1448079,38.495404 0.35599576,40.921424 32.037119,53.863366 63.718242,40.921424 56.929429,38.495404 32.037119,49.012903 z m 0,-9.160761 L 7.1448079,29.334644 0.35599576,31.762243 32.037119,44.705765 63.718242,31.762243 56.929429,29.334644 32.037119,39.852142 z M 63.718242,22.576214 32.037119,9.6326924 0.35599576,22.576214 32.037119,35.519736 63.718242,22.576214 z M 32.037119,14.456305 50.224346,22.576214 32.037119,30.696121 13.849891,22.576214 32.037119,14.456305 z"}' }
				} 
			}
		]
	},
	mail : {
		url : 'plugins/svg/icons/mail.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,19.897984 z"}' }, 
					to : { val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,-19.7269617 z"}' }
				} 
			}
		]
	},
	equalizer : {
		url : 'plugins/svg/icons/equalizer.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "t 0 0"}' }, 
					to : { val : '{"transform" : "t 0 -30"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "t 0 0"}' }, 
					to : { val : '{"transform" : "t 0 35"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"transform" : "t 0 0"}' }, 
					to : { val : '{"transform" : "t 0 -10"}' }
				} 
			}
		]
	},
	glass : {
		url : 'plugins/svg/icons/glass.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 16.778805,44 c 0,0 9.518312,-3.481153 13.221195,-2 10,4 17.153596,2 17.153596,2 L 45,54 20,54 z"}' }, 
					to : { val : '{"path" : "M 13.183347,29 C 13.183347,29 25,31.439358 30,29 c 12.710171,-6.200932 20,0 20,0 l -5,25 -25,0 z"}' }
				} 
			}
		]
	},
	hourglass : {
		url : 'plugins/svg/icons/hourglass.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "r 0 32 32"}' }, 
					to : { val : '{"transform" : "r 180 32 32"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r 0 32 32"}', animAfter : '{"path" : "m 31,32 2,0 0,0 9,15 -20,0 9,-15 z"}' }, 
					to : { val : '{"transform" : "r 180 32 32"}', animAfter : '{"path" : "m 22,17 20,0 -9,15 0,0 -2,0 0,0 z"}' }
				} 
			}
		]
	},
	padlock : {
		url : 'plugins/svg/icons/padlock.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"transform" : "t 0 0"}' }, 
					to : { val : '{"transform" : "t 0 -11"}' }
				} 
			}
		]
	},
	zoom : {
		url : 'plugins/svg/icons/zoom.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"transform" : "s 1 1"}' }, 
					to : { val : '{"transform" : "s 1.1 1.1"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s 1 1", "stroke-width" : "1"}' }, 
					to : { val : '{"transform" : "s 2 2", "stroke-width" : "2"}' }
				} 
			}
		]
	},
	search : {
		url : 'plugins/svg/icons/search.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "M 23.681,22.138 17.49,15.947 C 18.833,14.267 20,12.318 20,10 20,4.578 15.531,0 10.006,0 4.48,0 0,4.48 0,10.006 c 0,5.525 4.48,10.006 10.006,10.006 2.362,0 4.262,-1.18 5.94,-2.522 l 6.191,6.19 c 0.214,0.214 0.493,0.32 0.772,0.32 0.279,0 0.558,-0.106 0.771,-0.32 0.426,-0.426 0.426,-1.117 0.001,-1.542 z M 9.99,17.984 c -4.416,0 -7.996,-3.579 -7.996,-7.995 0,-4.416 3.58,-7.995 7.996,-7.995 4.417,0 7.995,3.58 7.995,7.995 -10e-4,4.416 -3.579,7.995 -7.995,7.995 z"}' }, 
					to : { val : '{"path" : "M 0.31862511,22.138 6.5096251,15.947 c -1.343,-1.68 -2.51,-3.629 -2.51,-5.947 0,-5.422 4.469,-10 9.9939999,-10 5.526,0 10.006,4.48 10.006,10.006 0,5.525 -4.48,10.006 -10.006,10.006 -2.362,0 -4.2619999,-1.18 -5.9399999,-2.522 l -6.191,6.19 c -0.214,0.214 -0.493,0.32 -0.772,0.32 -0.27899999,0 -0.55799999,-0.106 -0.77099999,-0.32 -0.426,-0.426 -0.426,-1.117 -0.001,-1.542 z M 14.009625,17.984 c 4.416,0 7.996,-3.579 7.996,-7.995 0,-4.416 -3.58,-7.995 -7.996,-7.995 -4.4169999,0 -7.9949999,3.58 -7.9949999,7.995 0.001,4.416 3.579,7.995 7.9949999,7.995 z"}' }
				} 
			}
		]
	},
	monitor : {
		url : 'plugins/svg/icons/monitor.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 5,11.75 0,33.75 20.25,0 -6.75,6.75 27,0 -6.75,-6.75 20.25,0 0,-33.75 -54,0 z m 2.65625,2.875 48.6875,0 0,27.8125 -48.6875,0 0,-27.8125 z"}' }, 
					to : { val : '{"path" : "m 21.875,16.8125 0,30.375 3.375,0 3.5,0 3.25,0 6.75,0 3.375,0 0,-30.375 -20.25,0 z m 3.375,3.375 13.5,0 0,20.25 -13.5,0 0,-20.25 z m 6.75,22.25 c 0.756641,0 1.375,0.618359 1.375,1.375 0,0.756641 -0.618359,1.375 -1.375,1.375 -0.756641,0 -1.375,-0.618359 -1.375,-1.375 0,-0.756641 0.618359,-1.375 1.375,-1.375 z"}' }
				} 
			}
		]
	},
	flag : {
		url : 'plugins/svg/icons/flag.svg',
		animation : [
			{ 
				el : 'path', 
				animProperties : { 
					from : { val : '{"path" : "m 11.75,11.75 c 0,0 10.229631,3.237883 20.25,0 10.020369,-3.2378833 20.25,0 20.25,0 l 0,27 c 0,0 -6.573223,-3.833185 -16.007359,0 -9.434136,3.833185 -24.492641,0 -24.492641,0 z"}' }, 
					to : { val : '{"path" : "m 11.75,11.75 c 0,0 8.373476,-4.8054563 17.686738,0 9.313262,4.805456 22.813262,0 22.813262,0 l 0,27 c 0,0 -11.699747,4.363515 -22.724874,0 C 18.5,34.386485 11.75,38.75 11.75,38.75 z"}' }
				} 
			}
		]
	},
	social : {
		url : 'plugins/svg/icons/social.svg',
		animation : [
			{ 
				el : 'path:first-child', 
				animProperties : { 
					from : { val : '{"path" : "m 26.36993,33.94796 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m 62.36993,33.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"path" : "m 23.16993,35.158 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m -13.36993,34.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "m 23.16993,31.94796 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m -13.36993,31.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(4)', 
				animProperties : { 
					from : { val : '{"path" : "M 21.78451,27.255545 42.21549,17.040054"}' }, 
					to : { val : '{"path" : "M 39.78451,27.255545 20.21549,17.040054"}' }
				} 
			},
			{ 
				el : 'path:nth-child(5)', 
				animProperties : { 
					from : { val : '{"path" : "M 21.784512,36.74445 42.215489,46.959929"}' },
					to : { val : '{"path" : "M 42.784512,35.74445 21.215489,46.959929"}' }
				} 
			}
		]
	},
	socialLight : {
		url : 'plugins/svg/icons/social_light.svg',
		animation : [
			{ 
				el : 'path:first-child', 
				animProperties : { 
					from : { val : '{"path" : "m 26.36993,33.94796 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m 62.36993,33.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"path" : "m 23.16993,35.158 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m -13.36993,34.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "m 23.16993,31.94796 a 10.606602,10.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }, 
					to : { val : '{"path" : "m -13.36993,31.94796 a 7.606602,7.606602 0 1 1 -21.2132032,0 10.606602,10.606602 0 1 1 21.2132032,0 z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(4)', 
				animProperties : { 
					from : { val : '{"path" : "M 21.78451,27.255545 42.21549,17.040054"}' }, 
					to : { val : '{"path" : "M 39.78451,27.255545 20.21549,17.040054"}' }
				} 
			},
			{ 
				el : 'path:nth-child(5)', 
				animProperties : { 
					from : { val : '{"path" : "M 21.784512,36.74445 42.215489,46.959929"}' },
					to : { val : '{"path" : "M 42.784512,35.74445 21.215489,46.959929"}' }
				} 
			}
		]
	}
};