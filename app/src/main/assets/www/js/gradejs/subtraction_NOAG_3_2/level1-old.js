Game.subtraction_NOAG_3_2level1=function(){};


Game.subtraction_NOAG_3_2level1.prototype={


    init:function(param,score)
	{
		_this = this;
         this.Stararr = param;
        this.score =parseInt(window.score);
        //telInitializer.gameIdInit("unity10_1_1",gradeSelected);
        
        this.video = this.add.video('demo');
        this.video.play(false);
        this.video.changeSource(window.baseUrl+"assets/demoVideos/10_1_2.mp4");
        _this.something =  this.video.addToWorld();
        
			if(window.languageSelected == "Gujarati")
			{
				_this.time.events.add(500, function(){
				_this.playDemoVideos('10_1_2a');
				_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						  _this.skipDemos.destroy();
						  commonNavBar.stopVoice();
						   this.video.stop(false);
							 _this.time.events.removeAll();
							_this.something.destroy();
							 //this.video.destroy();
							_this.stopDemoVoice();
						this.video.onComplete.removeAll();
							 _this.create1();		
						},_this);
				 },_this);
			}
			else
			{
					_this.time.events.add(500, function(){
					_this.playDemoVideos('10_1_2a');
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						  _this.skipDemos.destroy();
						  commonNavBar.stopVoice();
						   this.video.stop(false);
							 _this.time.events.removeAll();
							_this.something.destroy();
							 //this.video.destroy();
							_this.stopDemoVoice();
						this.video.onComplete.removeAll();
							 _this.create1();		
						},_this);
					_this.time.events.add(20000, function(){
						_this.playDemoVideos('10_1_2b');
					},_this);
				 },_this);
		}
        
        this.video.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something.destroy();
               //this.video.destroy();
             this.video.onComplete.removeAll();
               _this.create1();
        },this);
        telInitializer2.gameIdInit2("NOAG3.2");
	},
    create:function(game)
    {
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add( _this.shake);
    },
	create1:function(game){
       _this.Stararr = [];
	   _this.amplify = null;
	   
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.BlueAnimInc = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.someVar = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.toDisplayNoPad = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        _this.checkNumber1 = 0
        _this.checkNumber2 = 0
        
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=0;
		

             _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
             if(window.languageSelected == "English")
                {
                   _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.2.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.2.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.2.mp3";
                }
				else if(window.languageSelected == "Gujarati")
				{
					_this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2.1/10.1.1.mp3";
				}
                else
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.2.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
             commonNavBar.addNavBar(this,_this.soundurl,"numberoperation2");
             commonNavBar.addTimerToTheGame(this,0,0,0);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
             this.hintparams=['NOSG32','level1',false,false,true,1];
              commonNavBar.addHint(this,this.hintparams);
        
        
        _this.coinPannel = _this.add.sprite(100,58,'Level321_coinMachinePannel');
        _this.Pannel = _this.add.sprite(658,145,'Level321_pannel');
        
        _this.coinBoxGreen = _this.add.sprite(150,95,'Level1011_coinDecrease');
        _this.coinBoxGreen.name = "coinBoxGreen";
        _this.coinBoxGreen.frame =3
        _this.coinBoxBlue = _this.add.sprite(315,95,'Level1011_coinDecrease');
        _this.coinBoxBlue.name ="coinBoxBlue";
        _this.coinBoxBlue.frame = 2;
        _this.coinBoxYellow = _this.add.sprite(480,95,'Level1011_coinDecrease');
        _this.coinBoxYellow.name = "coinBoxYellow";
        _this.coinBoxYellow.frame = 1;
        
         _this.exchangeGreen = _this.add.sprite(160,160,'Level1011_coinExchange');
         _this.exchangeGreen.name = "exchangeGreen";
         _this.exchangeBlue = _this.add.sprite(325,160,'Level1011_coinExchange');
         _this.exchangeBlue.name ="exchangeBlue";

        _this.Level321_OneToHundred1 = _this.add.sprite(195,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(360,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(525,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
		
		_this.Level321_OneToHundredE1 = _this.add.sprite(675,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(730,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(787,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
    
        _this.LeverGreenNumber = _this.add.sprite(155,98,'Level321_numberVSmall');
        _this.LeverGreenNumber.frame = 0;
        _this.LeverBlueNumber = _this.add.sprite(320,98,'Level321_numberVSmall');
        _this.LeverBlueNumber.frame = 0;
        _this.LeverYellowNumber = _this.add.sprite(484,98,'Level321_numberVSmall');
        _this.LeverYellowNumber.frame = 0;
        
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(723,305,'Level321_numberBox');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(775,305,'Level321_numberBox');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(671,305,'Level321_numberBox');
         _this.numBox3.name = "numBox3";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
       // _this.shakeGroup.add(_this.numBox3);
        
        _this.minus = _this.add.sprite(650,230,'Level1011_Minus');
        
        _this.askNumber1 = _this.add.sprite(725,165,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
        
        _this.askNumber2 = _this.add.sprite(780,165,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
        
        _this.askNumber3 = _this.add.sprite(725,235,'Level321_numberSmall');
         _this.askNumber3.frame = 1;
        
        _this.askNumber4 = _this.add.sprite(780,235,'Level321_numberSmall');
        _this.askNumber4.frame = 1;

         _this.numBoxNum1 = _this.add.sprite(730,308,'Level321_numberSmall');
       // _this.numBoxNum1 = _this.add.sprite(510,95,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(0.9,0.9);
       // _this.numBoxNum1.frame  = 1;
        //_this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(782,308,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        //_this.numBoxNum2.frame  = 3;
         _this.numBoxNum2.scale.setTo(0.9,0.9);
       // _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(677,308,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        //_this.numBoxNum3.frame  = 4;
         _this.numBoxNum3.scale.setTo(0.9,0.9);
        //_this.numBoxNum3.visible = false;
        
         _this.generateStarsForTheScene(9);
        //  _this.no1++;
        //_this.getVoice();
  
         _this.getQuestion();
        /*if(window.languageSelected == "English")
            {
              commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.2.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
              commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.2.mp3");
            }
            else
            {
                commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.2.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }*/
    },

    getQuestion:function(target)
    {  //console.log("get Question "+_this.no1);
        
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
       
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;

    	switch(_this.qArrays[_this.no1])    
    	{
    		case 1: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.askNumber1.frame = 10;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =6;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.checkNumber2 = 5;
                    _this.rightAns = 44;
                    _this.toDisplayNoPad = 9;
    				break;
    		case 2: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 244;
                    _this.yaxisYCopy = _this.yaxisY = 323;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.askNumber1.frame = 10;
                    _this.askNumber2.frame =6;                 
                    _this.askNumber3.frame =4;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 3;
                    _this.rightAns = 62;
                    _this.toDisplayNoPad = 6;
    				break;
    		case 3: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisYCopy = _this.yaxisY = 343;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin1 = _this.Coin1.frame = 2;
                    _this.askNumber1.frame = 10;
                    _this.askNumber2.frame =5;                
                    _this.askNumber3.frame =7;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.checkNumber2 = 6;
                    _this.rightAns = 33;
                    _this.toDisplayNoPad = 7;
    				break;
    		case 4: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisYCopy = _this.yaxisY = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.askNumber1.frame = 10;
                    _this.askNumber2.frame =8;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 72;
                    _this.toDisplayNoPad = 7;
    				break;
    		case 5: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                     _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 9;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 62;
                    _this.toDisplayNoPad = 8;
    				break;
            case 6: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.askNumber1.frame = 9;
                    _this.askNumber2.frame =7;                
                    _this.askNumber3.frame =5;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 4;
                    _this.rightAns = 43;
                    _this.toDisplayNoPad = 7;
    				break;
            case 7: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 9;
                    _this.askNumber2.frame =10;                
                    _this.askNumber3.frame =6;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 5;
                    _this.rightAns = 34;
                    _this.toDisplayNoPad = 10;
    				break;
            case 8: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisYCopy = _this.yaxisY = 363;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin1 = _this.Coin1.frame = 1;
                    _this.askNumber1.frame = 9;
                    _this.askNumber2.frame =4;                
                    _this.askNumber3.frame =7;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.checkNumber2 = 6;
                    _this.rightAns = 22;
                    _this.toDisplayNoPad = 7;
    				break;
          case 9: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                   _this.yaxisBCopy = _this.yaxisB = 283;
                    _this.yaxisYCopy = _this.yaxisY = 264;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 8;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =5;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 4;
                    _this.rightAns = 33;
                    _this.toDisplayNoPad = 9;
    				break;
        case 10: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 284;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.askNumber1.frame = 8;
                    _this.askNumber2.frame =6;                
                    _this.askNumber3.frame =4;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.checkNumber2 = 3;
                    _this.rightAns = 43;
                    _this.toDisplayNoPad = 5;
    				break;
        case 11: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 284;
                    _this.yaxisYCopy = _this.yaxisY = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.askNumber1.frame = 8;
                    _this.askNumber2.frame =8;                
                    _this.askNumber3.frame =6;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.checkNumber2 = 5;
                    _this.rightAns = 26;
                    _this.toDisplayNoPad = 6;
    				break; 
        case 12: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 283;
                    _this.yaxisYCopy = _this.yaxisY = 344;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin1 = _this.Coin1.frame = 2;
                    _this.askNumber1.frame = 8;
                    _this.askNumber2.frame =5;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 62;
                    _this.toDisplayNoPad = 3;
    				break; 
        case 13: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =10;                
                    _this.askNumber3.frame =4;
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 3;
                    _this.rightAns = 32;
                    _this.toDisplayNoPad = 10;
    				break;
        case 14: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =5;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 4;
                    _this.rightAns = 23;
                    _this.toDisplayNoPad = 9;
    				break;
        case 15:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisYCopy = _this.yaxisY = 302;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =7;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 43;
                    _this.toDisplayNoPad = 5;
    				break;
        case 16:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 302;
                    _this.yaxisYCopy = _this.yaxisY = 322;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.askNumber1.frame = 7;
                    _this.askNumber2.frame =6;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 52;
                    _this.toDisplayNoPad = 4;
    				break; 
        case 17:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 6;
                    _this.askNumber2.frame =10;                
                    _this.askNumber3.frame =4;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 3;
                    _this.rightAns = 23;
                    _this.toDisplayNoPad = 9;
    				break;
        case 18:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 6;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 33;
                    _this.toDisplayNoPad = 7;
    				break;
        case 19:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.askNumber1.frame = 6;
                    _this.askNumber2.frame =7;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 43;
                    _this.toDisplayNoPad = 4;
    				break; 
        case 20:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.askNumber1.frame = 6;
                    _this.askNumber2.frame =6;                
                    _this.askNumber3.frame =4;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 3;
                    _this.rightAns = 22;
                    _this.toDisplayNoPad = 6;
    				break;
            
        case 21:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 5;
                    _this.askNumber2.frame =10;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 22;
                    _this.toDisplayNoPad = 9;
    				break; 
        case 22:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.askNumber1.frame = 5;
                    _this.askNumber2.frame =8;                
                    _this.askNumber3.frame =3;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.checkNumber2 = 2;
                    _this.rightAns = 26;
                    _this.toDisplayNoPad = 3;
    				break;
        case 23:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.askNumber1.frame = 5;
                    _this.askNumber2.frame =7;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 32;
                    _this.toDisplayNoPad = 5;
    				break;
        case 24:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 342;
                    _this.yaxisYCopy = _this.yaxisY = 365;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin1 = _this.Coin1.frame = 1;
                    _this.askNumber1.frame = 5;
                    _this.askNumber2.frame =4;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 32;
                    _this.toDisplayNoPad = 2
    				break; 
        case 25:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 362;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 4;
                    _this.askNumber2.frame =10;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 23;
                    _this.toDisplayNoPad = 7
    				break;
        case 26:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 362;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 4;
                    _this.askNumber2.frame =9;                
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 25;
                    _this.toDisplayNoPad = 4;
    				break;
         case 27:   //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 382;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 0;
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.askNumber1.frame = 3;
                    _this.askNumber2.frame =9;               
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 6;
    				break; 
        case 28:   //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 382;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 0;
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.askNumber1.frame = 3;
                    _this.askNumber2.frame =8;               
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 5;
    				break;
        case 29:   //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisBCopy = _this.yaxisB = 382;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin10 = _this.Coin10.frame = 0;
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.askNumber1.frame = 3;
                    _this.askNumber2.frame =10;               
                    _this.askNumber3.frame =2;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.checkNumber2 = 1;
                    _this.rightAns = 17;
                    _this.toDisplayNoPad = 3;
    				break;
    	}

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    

  inputDownFunctionForLeverAndBox :function(){
      
        _this.xaxisYCopy = _this.xaxisY = 507.5;//245 for 9 ,
        _this.xaxisBCopy = _this.xaxisB = 348;
        
      /*if(_this.qArrays[_this.no1]<4){
           _this.yaxisYCopy = _this.yaxisY = 245;
       }
       else if(_this.qArrays[_this.no1]<8){
           _this.yaxisYCopy = _this.yaxisY = 265; 
       }
      else if(_this.qArrays[_this.no1]<10){
           _this.yaxisYCopy = _this.yaxisY = 285; 
       }
      else if(_this.qArrays[_this.no1]<13){
           _this.yaxisYCopy = _this.yaxisY = 305; 
       }
      else if(_this.qArrays[_this.no1]<15){
           _this.yaxisYCopy = _this.yaxisY = 325;   
       } 
      else if(_this.qArrays[_this.no1]<17){
           _this.yaxisYCopy = _this.yaxisY = 345;   
       }
       else if(_this.qArrays[_this.no1]<18){
           _this.yaxisYCopy = _this.yaxisY = 365;   
       }*/
       _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
       _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
     
        _this.Coin1 = _this.add.sprite(500,220,'Level321_Coin1');
         _this.Coin10 = _this.add.sprite(340,220,'Level321_Coin10');
        //_this.Coin10.visible = false;
        
         _this.yellowCoin = _this.add.sprite(507.5,_this.yaxisY,'Level1011_YellowCoin');
         _this.yellowCoin.name = "YellowCoin";
         _this.yellowCoin.inputEnabled = true;
         _this.yellowCoin.input.useHandCursor = true;
         _this.yellowCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
     
         _this.blueCoin = _this.add.sprite(348,_this.yaxisB,'Level1011_BlueCoin');
         _this.blueCoin.name = "BlueCoin";
        /* _this.blueCoin.inputEnabled = true;
         _this.blueCoin.input.useHandCursor = true;*/
         _this.blueCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
   
  },
 gotoFirstQuestion:function(){

        _this.inputDownFunctionForLeverAndBox();
            _this.Coin1.frame = 7;
            _this.Coin10.frame = 0;
            _this.askNumber1.frame = 2;
            _this.askNumber2.frame =10;
            _this.askNumber3.frame =0;
            _this.askNumber4.frame =2;
            _this.checkNumber1 = 1;
            _this.rightAns = 18;
            _this.toDisplayNoPad = 1;
     },    
 singleCoinClickd:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
         commonNavBar.playClickSound();
        target.events.onDragStop.add(
            function(target){
                
                 if(_this.checkOverlap(target,_this.coinBoxYellow) && (target.name == "YellowCoin")){
                     //console.log("Hit");
                     if(_this.YellowAnimInc<_this.checkNumber1){
                         
                         commonNavBar.playCoinFallSound();
                         _this.yaxisY +=19.5;
                         _this.yellowCoin.y =_this.yaxisY;
                         _this.yellowCoin.x =_this.xaxisY;
                         _this.Coin1.frame--;
                         //console.log("11111111 "+  _this.Coin1.frame);
                         /* if(_this.Coin1.frame ==0)
                             _this.Coin1.visible  = false;*/
                         _this.LeverYellowNumber.frame++;
                        _this.YellowAnimInc++;
                         //console.log(_this.YellowAnimInc, _this.checkNumber1);
                         if(_this.YellowAnimInc ==_this.checkNumber1){
                             /*if(_this.Coin1.frame ==0 && _this.qArrays[_this.no1]>17)
                                 _this.Coin1.visible  = false;*/
                             
                             _this.blueCoin.inputEnabled = true;
                             _this.blueCoin.input.useHandCursor = true;
                             
                             _this.coinBoxYellow.animations.stop(null, true);
                             _this.coinBoxYellow.frame = 1;
                             _this.coinBoxBlue.animations.add('Level1011_coinDecrease',[0,2]);
                             _this.coinBoxBlue.animations.play('Level1011_coinDecrease',5,true);
                         }
                     }
                     else{
                         target.x = _this.vx;   
                         target.y = _this.vy;
                     }
                 }
                else if(_this.checkOverlap(target,_this.coinBoxBlue) && (target.name == "BlueCoin")){
                     //console.log("Hit");
                    if(_this.BlueAnimInc<_this.checkNumber2){
                         commonNavBar.playCoinFallSound();
                         _this.yaxisB +=18.5;
                        // _this.blueCoin.visible = false;
                         _this.blueCoin.y =_this.yaxisB;
                         _this.blueCoin.x =_this.xaxisB;
                         _this.Coin10.frame--;
                         _this.LeverBlueNumber.frame++;
                         _this.BlueAnimInc++;
                         if(_this.Coin10.frame ==0 && _this.qArrays[_this.no1]>26)
                                 _this.Coin10.visible  = false;
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                }
             }
          else{
                target.x = _this.vx;   
                target.y = _this.vy;
            }
            target.events.onDragStop.removeAll(); 
                
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc))
        {
            if( _this.toCheckNumberPad)
            {
                //console.log("im here hre hre");
                _this.addNumberPad();
                _this.numBox2.frame = 1;
                _this.numBox2Pressed = true;
                _this.toCheckNumberPad = false;
                _this.displayNopad = true;
                
                _this.coinBoxBlue.animations.stop(null, true);
                _this.coinBoxBlue.frame = 2;
            }
        }
                
         },_this);
 },
    
checkOverlap:function(spriteA, spriteB) 
{

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level321_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level321_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,505,'Level321_erase');
        _this.eraser.anchor.setTo(0.5);
       // _this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'Level321_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             commonNavBar.playClickSound();
             _this.eraser.frame = 1;

                /*if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;
                }
                else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numBoxNum3.visible = false;
                }*/
                _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.toCheckNumberPad = false;
              _this.time.events.add(500, function(){ _this.eraser.frame = 0;}, _this);
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
             commonNavBar.playClickSound();
             _this.rightbtn.frame = 1;
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns ||"0"+_this.selectedAns == _this.rightAns)  
                {
                    telInitializer2.gameCorrectAns();
                     this.Stararr.push(3);
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                     commonNavBar.stopVoice();
                   commonNavBar.playCelebrationSound();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.yellowCoin.visible = false;
                     _this.blueCoin.visible = false;
                     _this.Coin1.visible = true;
                    /*if(_this.qArrays[_this.no1]>8)
                        _this.Coin10.visible = false;
                    else*/
                        _this.Coin10.visible = true;
                    if(_this.qArrays[_this.no1]>26){
                            _this.Coin10.frame =_this.Coin10.frame+10;
                            _this.Coin1.frame =_this.Coin1.frame+11;
                        }
                    else{
                            _this.Coin1.frame =_this.Coin1.frame+11;
                           _this.Coin10.frame =_this.Coin10.frame+11;
                        }
                  
                    _this.numBox1.frame = 1;
                    _this.numBox2.frame = 1;
                   // _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);


                       _this.questionid = 1;
                   // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                { 
                    telInitializer2.gameWrongAns();
                    //console.log("wrong");
                    _this.rightbtn.frame = 1;
                     commonNavBar.stopVoice();
                      commonNavBar.playWrongCelebrationSound();
                    _this.starsGroup.getChildAt(_this.count1).frame = 1;
                     _this.Stararr.push(1);
                    // _this.count1++
                    _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
  
        },this);
       
        if(_this.displayNopad){
            //console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
     numClicked:function(target){
         
           //console.log(target.name);
          commonNavBar.playClickSound();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
             _this.numBox1.frame = 1;
            // _this.numBox3.frame = 1;
             _this.numBox2Pressed = false;
             _this.numBox1Pressed = true;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
 
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
       /* else if(_this.numBox3Pressed)
             {
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
             }*/
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         //console.log("2 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("2 "+this.numBox3Pressed);
    },
    
    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
 },
    
    removeEverthing:function() 
    {
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;

         _this.no1++;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<4)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
                _this.count =0;
                 _this.sceneCount++;
            _this.LeverYellowNumber.frame = 0;
            _this.LeverBlueNumber.frame = 0;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.numBox1Pressed = false;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.yellowCoin.destroy();
            _this.blueCoin.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.selectedAns = " ";
            _this.getQuestion();
            
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            
        }
        else
        {
             var timerStopVar = commonNavBar.stopTimer();
              commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            
        this.videoTwo = this.add.video('demo');
        this.videoTwo.play(false);
        this.videoTwo.changeSource(window.baseUrl+"assets/demoVideos/10_2_2.mp4");
        _this.something =  this.videoTwo.addToWorld();
		
		if(window.languageSelected == "Gujarati")
			{
				_this.time.events.add(400, function(){
					_this.playDemoVideos('10_2_2a');
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						 _this.skipDemos.destroy();
						commonNavBar.stopVoice();
						this.videoTwo.stop(false);
						 _this.time.events.removeAll();
						_this.something.destroy();
						 //this.videoTwo.destroy();
						_this.stopDemoVoice();
						 _this.state.start('subtraction_NOAG_3_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);				
						},_this);
				},_this);
			}
			else
			{
					_this.time.events.add(400, function(){
					_this.playDemoVideos('10_2_2a');
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						 _this.skipDemos.destroy();
						commonNavBar.stopVoice();
						this.videoTwo.stop(false);
						 _this.time.events.removeAll();
						_this.something.destroy();
						 //this.videoTwo.destroy();
						_this.stopDemoVoice();
						 _this.state.start('subtraction_NOAG_3_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);				
						},_this);
					_this.time.events.add(19000, function(){
						_this.playDemoVideos('10_2_2b');
						console.log("22222");
					},_this);
					_this.time.events.add(28000, function(){
						_this.playDemoVideos('10_2_2c');
						 console.log("3333");
					},_this);
				},_this);
			}
        this.videoTwo.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something.destroy();
              // this.videoTwo.destroy();
             this.videoTwo.onComplete.removeAll();
               _this.state.start('subtraction_NOAG_3_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        },this);
            
            
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();

		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=10;
					 _this.starsGroup.getChildAt(i).x+=10;
				}
			}
		}
        _this.starsGroup.getChildAt(0).frame = 2; 					
	},
    
	correctAns:function(target)
	{
        _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "click", 
                    res_id: "level12_TickMark", 
                    access_token: window.acctkn 
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);       
           
        
            target.events.onInputDown.removeAll();
             _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // ////console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();

                     _this.count1++;
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
},
wrongAns:function(target)
	{
        _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        _this.timer1.stop();	
         _this.wrong = false;
        _this.basketback.visible = false;
        
		 _this.shake.shake(10,  _this.basket);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();_this.getQuestion();},_this);
	},
      
    update:function(){

    },
    
    getVoice:function(){
        ////console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.2.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.2.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
        },

		amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
	
        stopVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
			
		if(_this.celebrationSound)
		{
			if(_this.celebrationSound.isPlaying)
			{
				_this.celebrationSound.stop();
				_this.celebrationSound = null;
			}
		}
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
            
        },

     playDemoVideos:function(target){
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
         switch(target)
        {
                 case '10_1_2a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.1.2a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.1.2a.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.1.2a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/10.1.1.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.1.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_1_2b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.1.2b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.1.2b.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.1.2b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.1.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
                            break;
                case '10_2_2a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.2a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.2a.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.2a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/10.2.1.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_2b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.2b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.2b.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.2b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
                            break;
            case '10_2_2c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.2c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.2c.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.2c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.2c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
            }
            _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    stopDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	},
    
      shutdown:function()
        {
            if(this.video)
                {
                    this.video.destroy();
                    this.video.removeVideoElement();
                    this.video = null;
                }
            commonNavBar.stopVoice();
        }
};