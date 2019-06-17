Game.gameModeSelectionScreen=function(){

};

window.mode = null;
Game.gameModeSelectionScreen.prototype={
	gameModeBg:null,
	gameModeNavBar:null,
	gameModeBackBtn:null,
	gameModePracticeImageBtn:null,
	gameModeChallengeImageBtn:null,
	gameModeTextStyle:{ font: "gradefont", fill: "#008DAE", align: "center", fontWeight: "Bold", fontSize: 36, },
	
	init:function()
	{
		
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			abbchmprmdsjsapi.syncTelemetryData();
			
			//sent.init({ dsn: 'https://6abe4b184d3b48d48d5776b4c5c74517@sentry.io/1302277' });
		}
		document.addEventListener("online", this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			abbchmprmdsjsapi.syncTelemetryData();
			
		}
	},
	preload:function(){

		_this = this;
		var sounds = document.getElementsByTagName('audio');
  		for(i=0; i<sounds.length; i++) sounds[i].pause();
		
	},
		
	create:function(game){		


		window.prevScreen = "gameModeSelectionScreen";
		window.currScreen = "gameModeSelectionScreen";

		nativeApp.screenViewStringPass("Type_selection_screen","Type_selection_screen");

		if(_this.loadingSound)
          {
               if(_this.loadingSound.contains(_this.loadingSoundSrc))
               {
                    _this.loadingSound.removeChild(_this.loadingSoundSrc);
                    _this.src = null;
               }
               if(!_this.loadingSound.paused)
               {
                   //console.log("here");
                    _this.loadingSound.pause();
                    _this.loadingSound.currentTime = 0.0;
               }
               _this.loadingSound = null;
               _this.loadingSoundSrc = null;
          }

		this.gameModeBg = game.add.image(0,0,'gameModeBg');

		this.gameModeNavBar = game.add.image(0,0,'gameModeNavBar');

		this.gameModeBackBtn = game.add.image(30,21,'gameModeBackBtn');
		this.gameModeBackBtn.anchor.setTo(0.5);
		this.gameModeBackBtn.inputEnabled = true;
		this.gameModeBackBtn.input.useHandCursor = true;
		this.gameModeBackBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
			//if(appConfig.cordova && !appConfig.browser)
			//{
				navigator.app.exitApp();
			//}
			
		},this);

		this.gameModePracticeImageBtn = game.add.image(game.world.centerX-230,game.world.centerY,'gameModePracticeSceen');
		this.gameModePracticeImageBtn.anchor.setTo(0.5);

		var practiceText = "Practice";
		var challengeText = "Challenge";

		if(window.languageSelected == "Kannada")
		{
			practiceText = "ಪ್ರಾಕ್ಟೀಸ್";
			challengeText = "ಚಾಲೆಂಜ್";
		}
		else if(window.languageSelected == "Hindi")
		{
			practiceText = "प्रैक्टिस";
			challengeText = "चैलेंज";
		}
		else if(window.languageSelected == "Odiya")
		{
			practiceText = "ପ୍ରାକ୍ଟିସ";
			challengeText = "ଚ୍ୟାଲେଞ୍ଜ";
		}
		else if(window.languageSelected == "Gujarati")
		{
			practiceText = "અભ્યાસ";
			challengeText = "પડકાર";
		}
		else
		{
			practiceText = "Practice";
			challengeText = "Challenge";
		}

		this.gameModePracticeImageTxt = game.add.text(game.world.centerX-220, game.world.centerY+105, "\n"+practiceText+"\n", this.gameModeTextStyle);
		this.gameModePracticeImageTxt.anchor.setTo(0.5);

		

		this.gameModePracticeImageBtn.inputEnabled = true;
		this.gameModePracticeImageBtn.input.useHandCursor = true;
		this.gameModePracticeImageBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
        	window.mode = "practice";
			//this.gotoSelectedModeLandingScreen(game);	
			nativeApp.selectModeType("Practice");
			game.state.start('practiceModegradeSelectionScreen',true,false);		
		},this);

		this.gameModeChallengeImageBtn = game.add.image(game.world.centerX+230,game.world.centerY,'gameModeChallengeSceen');
		this.gameModeChallengeImageBtn.anchor.setTo(0.5);

		this.gameModeChallengeImageTxt = game.add.text(game.world.centerX+240, game.world.centerY+105, "\n"+challengeText+"\n", this.gameModeTextStyle);
		this.gameModeChallengeImageTxt.anchor.setTo(0.5);


		this.gameModeChallengeImageBtn.inputEnabled = true;
		this.gameModeChallengeImageBtn.input.useHandCursor = true;
		this.gameModeChallengeImageBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
        	window.mode = "challenge";
			//this.gotoSelectedModeLandingScreen(game);	
			nativeApp.selectModeType("Challenge");
			game.state.start('challengeModeGgradeSelectionScreen',true,false);		
		},this);

		if(window.languageSelected == "Kannada")
		{
			this.gameModePracticeImageTxt.fontSize = 30;
			this.gameModeChallengeImageTxt.fontSize = 30;
		}

		
	},

	gotoSelectedModeLandingScreen:function(game)
	{
		this.gameModeBackBtn.events.onInputDown.removeAll();
		this.gameModePracticeImageBtn.events.onInputDown.removeAll();
		this.gameModeChallengeImageBtn.events.onInputDown.removeAll();

		if(appVariables.gameMode == "Practice")
		{
			game.state.start('practiceModeGradeSelectionScreen',true,false);
		}
		else if(appVariables.gameMode == "Challenge")
		{
			game.state.start('challengeModeLandingScreen',true,false);
			//getChallenge mode data.
		}
	},

	
	shutdown:function()
	{
		this.gameModeBg.destroy();
		this.gameModeNavBar.destroy();

		this.gameModeBackBtn.events.onInputDown.removeAll();
		this.gameModePracticeImageBtn.events.onInputDown.removeAll();
		this.gameModeChallengeImageBtn.events.onInputDown.removeAll();

		this.gameModeBackBtn.destroy();
		this.gameModePracticeImageBtn.destroy();
		this.gameModeChallengeImageBtn.destroy();

		this.gameModeBg = null;
		this.gameModeNavBar = null;
		this.gameModeBackBtn = null;
		this.gameModePracticeImageBtn = null;
		this.gameModeChallengeImageBtn = null;
	}
	
};