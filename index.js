const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const rarely = require("x-rarely-opposite"),
	worse = require("x-worse-clearly"),
	cheery = require("x-cheery-messenger"),
	however = require("tea-however-sleep"),
	fondue = require("x-fondue-indolent"),
	beside = require("tea-beside-yowza"),
	begonia = require("tea-begonia-instead"),
	amend = require("x-amend-beyond"),
	which = require("x-which-frequent"),
	usually = require("x-usually-longingly"),
	slobber = require("tea-slobber-cucumber"),
	unearth = require("tea-unearth-promptly"),
	whereas = require("tea-whereas-safely"),
	infect = require("x-infect-likewise"),
	wearily = require("tea-wearily-well-lit"),
	steel = require("tea-steel-zowie"),
	psst = require("tea-psst-yippee"),
	lambkin = require("tea-lambkin-while"),
	unlike = require("tea-unlike-often"),
	broil = require("x-broil-gadzooks"),
	about = require("tea-about-minor"),
	floor = require("tea-floor-align"),
	pfft = require("tea-pfft-along"),
	gosh = require("x-gosh-where"),
	despite = require("x-despite-cruelly"),
	anguish = require("x-anguish-notarize"),
	blah = require("tea-blah-concede"),
	attack = require("x-attack-yippee"),
	beneath = require("x-beneath-ill-fated"),
	first = require("x-first-boohoo"),
	repent = require("tea-repent-scorn"),
	playground = require("twt-playground"),
	quiz = require("tea-quiz-commit"),
	atop = require("x-atop-twister"),
	prod = require("x-prod-yippee"),
	fare = require("x-fare-barring"),
	indeed = require("tea-indeed-workforce");

const USERNAME = "athena.hermiston48",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
