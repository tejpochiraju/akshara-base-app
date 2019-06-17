Game.comparison_NSCG_1_1level1=function(){};

Game.comparison_NSCG_1_1level1.prototype ={
    
    init:function(game)
    {
        _this= this;

        this.score =parseInt(window.score);
        
       // telInitializer.gameIdInit("Comparison4_1",gradeSelected);
       telInitializer2.gameIdInit2("NSCG1.1");
    },

    preload:function(game){
        if(!window.grade1NSCG1_1){

            window.grade1NSCG1_1 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

            //game assets.
        this.load.image('Unity4_1BG_01', window.baseUrl+'assets/gradeAssets/4.1/BG_01.png');
        this.load.image('Unity4_1practice',window.baseUrl+'assets/gradeAssets/4.1/practice.png');
        this.load.image('Unity4_1topic',window.baseUrl+'assets/gradeAssets/4.1/topic.png');
    
        this.load.atlas('Unity4_1crocodile_grt', window.baseUrl+'assets/gradeAssets/4.1/crocodile_grt.png', window.baseUrl+'json/gradeJson/4.1/crocodile_grt.json');
        this.load.atlas('Unity4_1crocodileEyerolling', window.baseUrl+'assets/gradeAssets/4.1/crocodileEyerolling.png', window.baseUrl+'json/gradeJson/4.1/crocodileEyerolling.json');
        this.load.atlas('Unity4_1crocodileIdle', window.baseUrl+'assets/gradeAssets/4.1/crocodileIdle.png', window.baseUrl+'json/gradeJson/4.1/crocodileIdle.json');
        this.load.atlas('Unity4_1fishbox', window.baseUrl+'assets/gradeAssets/4.1/fishbox.png', window.baseUrl+'json/gradeJson/4.1/fishbox.json');
        this.load.atlas('Unity4_1crocodile_lt', window.baseUrl+'assets/gradeAssets/4.1/crocodile_lt.png', window.baseUrl+'json/gradeJson/4.1/crocodile_lt.json');
        
        this.load.atlas('Unity4_1tick', window.baseUrl+'assets/gradeAssets/4.1/tickMark.png', window.baseUrl+'json/gradeJson/4.1/tickMark.json');

        this.load.image('Unity4_2BG_01', window.baseUrl+'assets/gradeAssets/4.2/BG_01.png');
        this.load.image('Unity4_2practice',window.baseUrl+'assets/gradeAssets/4.2/practice.png');
        this.load.image('Unity4_2topic',window.baseUrl+'assets/gradeAssets/4.2/topic.png');
    
        this.load.atlas('Unity4_2crocodileEqual', window.baseUrl+'assets/gradeAssets/4.2/crocodileEqual.png', window.baseUrl+'json/gradeJson/4.2/crocodileEqual.json');
        this.load.atlas('Unity4_2crocodileEyerolling', window.baseUrl+'assets/gradeAssets/4.2/crocodileEyerolling.png', window.baseUrl+'json/gradeJson/4.2/crocodileEyerolling.json');
        this.load.atlas('Unity4_2crocodileIdle', window.baseUrl+'assets/gradeAssets/4.2/crocodileIdle.png', window.baseUrl+'json/gradeJson/4.2/crocodileIdle.json');
        this.load.atlas('Unity4_2fishbox', window.baseUrl+'assets/gradeAssets/4.2/fishbox.png', window.baseUrl+'json/gradeJson/4.2/fishbox.json');
        
        this.load.atlas('Unity4_2tick', window.baseUrl+'assets/gradeAssets/4.2/tickMark.png', window.baseUrl+'json/gradeJson/4.2/tickMark.json');
        this.load.atlas('Unity4_2crossMark', window.baseUrl+'assets/gradeAssets/4.2/crossMark.png', window.baseUrl+'json/gradeJson/4.2/crossMark.json');

        this.load.image('Unity4_3_1BG_01', window.baseUrl+'assets/gradeAssets/4.3.1/BG_01.png');
        this.load.image('Unity4_3_1practice',window.baseUrl+'assets/gradeAssets/4.3.1/practice.png');
        this.load.image('Unity4_3_1topic',window.baseUrl+'assets/gradeAssets/4.3.1/topic.png');
    
        this.load.image('Unity4_3_1Crocodile_Equal', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_Equal.png');
        this.load.image('Unity4_3_1Crocodile_GreateThan', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_GreateThan.png');
        this.load.image('Unity4_3_1Crocodile_LessThan', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_LessThan.png');
        this.load.image('Unity4_3_1NumberPopupBox', window.baseUrl+'assets/gradeAssets/4.3.1/NumberPopupBox.png');
        //this.load.image('Unity4_3_1dropbox', window.baseUrl+'assets/gradeAssets/4.3.1/dropbox.png');
    
        this.load.atlas('Unity4_3_1dropbox', window.baseUrl+'assets/gradeAssets/4.3.1/dropbox.png', window.baseUrl+'json/gradeJson/4.3.1/dropbox.json');
        //this.load.atlas('Unity4_3_1Tick', window.baseUrl+'assets/gradeAssets/4.3.1/tick.png', window.baseUrl+'json/gradeJson/4.3.1/tick.json');


    }

    },
    
	create:function(game)
    {
        _this.sceneCount = 0;
        _this.amplify = null;
        this.Stararr = [];
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        //_this.correct;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.opt2;
        _this.opt3;
        
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
      
        _this.starsGroup;
       
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
      
        _this.compar;
        
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity4_1BG_01');
        
        
         commonNavBar.addNavBar(game,null,"numbersense3");
         commonNavBar.addTimerToTheGame(game,0,0,0);
         
        
         commonNavBar.addScore(game,this.score);
        // commonNavBar.getVoice("questionSounds/4.1/English/4.1G.mp3");
         //commonNavBar.getVoice("questionSounds/4.1/English/4.1L.mp3");
         this.hintparams=['NSCG1.1','level1',false,false,true,1];
         commonNavBar.addHint(game,this.hintparams);
        
        _this.generateStarsForTheScene(9);
        _this.getQuestion();
    
        //language selection sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
    
     /* if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/English/4.1G.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Hindi/4.1G.mp3");
        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Kannada/4.1G.mp3");
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
       */
        _this.time.events.repeat(Phaser.Timer.SECOND * 8, 8, this.createBall, this);
    },
    
    createBall:function()
    {
        this.bubble = this.add.audio('bubble');
        _this.bubble.play();
    },
    
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
    
    getQuestion:function(target)
    {
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        commonNavBar.startTimer(this);
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;

        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.questionid = 1;
        
        //_this.no11 = 0;
        if(_this.qArrays[_this.no11]==1 || _this.qArrays[_this.no11]==2 || _this.qArrays[_this.no11]==3 || _this.qArrays[_this.no11]==4){
            

            if(window.languageSelected=="English")
                    {
                        qsoundurl = window.baseUrl+"questionSounds/4.1/English/4.1G.mp3";
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        qsoundurl = window.baseUrl+"questionSounds/4.1/Hindi/4.1G.mp3";
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        qsoundurl = window.baseUrl+"questionSounds/4.1/Kannada/4.1G.mp3";
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         qsoundurl = window.baseUrl+"questionSounds/Gujarati/4.1/4.1G.mp3";
                    }
                    else
                    {
                        qsoundurl = window.baseUrl+"questionSounds/4.1/Odiya/4.1G.mp3";
                        
                    }


        }else{
            

            if(window.languageSelected=="English")
                    {
                       qsoundurl = window.baseUrl+"questionSounds/4.1/English/4.1L.mp3";
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                       qsoundurl = window.baseUrl+"questionSounds/4.1/Hindi/4.1L.mp3";
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                       qsoundurl = window.baseUrl+"questionSounds/4.1/Kannada/4.1L.mp3";
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        qsoundurl = window.baseUrl+"questionSounds/Gujarati/4.1/4.1L.mp3";
                    }
                    else
                    {
                       qsoundurl = window.baseUrl+"questionSounds/4.1/Odiya/4.1L.mp3";
                    }
        }
        
        //commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(qsoundurl);
            //_this.getVoice();
        },this);

    	switch(_this.qArrays[_this.no11])
    	{
    		case 1: _this.gotoFirstQuestion();
    				break;
    		case 2: _this.gotoSecondQuestion();
    				break;
    		case 3: _this.gotoThirdQuestion();
    				break;
    		case 4: _this.gotoFourthQuestion();
    				break;
    		case 5: _this.gotoFifthQuestion();
    				break;
    		case 6: _this.gotoSixthQuestion();
    				break;
            case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    stopVoice:function()
    {
        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            
            if(!_this.playQuestionSound.paused)
            {
                //console.log("here");
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

    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=10;
					_this.starsGroup.getChildAt(i).x+=10;
				}
			}
		}		
        _this.starsGroup.getChildAt(0).frame = 2; 
	},

    gotoFirstQuestion:function()
    {  
        _this.getVoice();
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        _this.compar=1;
        //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=1;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=8;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.correctAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);

        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);*/
        
        /*_this.tick2=_this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.correctAns,_this);*/
        
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
                    
    },
    
    gotoSecondQuestion:function()
    {   
        _this.getVoice();
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        _this.compar=2;
         //fish box
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=5;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame = 1;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.wrongAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.wrongAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         
    },
   
    gotoThirdQuestion:function()
    {
        _this.getVoice();
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        _this.compar=1;
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=0;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=3;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.correctAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.correctAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
   
    gotoFourthQuestion:function()
    {
        _this.getVoice();
        //console.log("gotoFourthQuestion");
        _this.questionNo = 4;
        _this.compar=2;
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=6;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=2;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.wrongAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /* _this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.wrongAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         
    },

    gotoFifthQuestion:function()
    {
        _this.getVoice();
        //console.log("gotoFifthQuestion");
        _this.questionNo = 5;
        _this.compar=2;
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=7;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=1;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.correctAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.correctAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
    },

    gotoSixthQuestion:function()
    {
        _this.getVoice();
        //console.log("gotoSixthQuestion");
        _this.questionNo = 6;
        _this.compar=1;
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=2;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=5;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.wrongAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.wrongAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
    
    gotoSeventhQuestion:function()
    {  
        _this.getVoice();
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        _this.compar=2;
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame =5;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=0;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.correctAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.correctAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
         
    },
    
    gotoEighthQuestion:function()
    {  
        _this.getVoice();
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        _this.compar=1;
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=2;
        _this.fishbox1.name = 'tick1';
        _this.fishbox1.inputEnabled = true;
        _this.fishbox1.input.useHandCursor = true;
        _this.fishbox1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_1fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=4;
        _this.fishbox2.name = 'tick2';
        _this.fishbox2.inputEnabled = true;
        _this.fishbox2.input.useHandCursor = true;
        _this.fishbox2.events.onInputDown.add(_this.wrongAns,_this);
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity4_1crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
    
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
       /*_this.tick1= _this.add.sprite(this.world.centerX-310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.5,1.5);
        
        _this.tick1.name = 'tick1';
        _this.tick1.inputEnabled = true;
        _this.tick1.input.useHandCursor = true;
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick2 = _this.add.sprite(this.world.centerX+310,_this.world.centerY+200,'Unity4_1tick');
        _this.tick2.anchor.setTo(0.5);
        _this.tick2.scale.setTo(1.5,1.5);
        
        _this.tick2.name = 'tick2';
        _this.tick2.inputEnabled = true;
        _this.tick2.input.useHandCursor = true;
        _this.tick2.events.onInputDown.add(_this.wrongAns,_this);*/
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.fishbox1);
        _this.optionGrp.add(_this.fishbox2);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
    
 	changeQuestion:function()
	{
		if(_this.no11<3)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        telInitializer2.gameCorrectAns();
		commonNavBar.disableHintIcon();
        target.events.onInputDown.removeAll();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        
        if(target.name=='tick1')
        {
            //_this.tick1.frame = 1;
            _this.fishbox2.inputEnabled = false;
        }
        
        if(target.name=='tick2')
        {
            //_this.tick2.frame =1;
            _this.fishbox1.inputEnabled = false;
        }

            

        _this.noofAttempts++;

        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level4.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

       
      
        // _this.currentTime = window.timeSaveFunc();

        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
       // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

     // if(_this.crocodileIdle.key === 'Unity4_1crocodileIdle')
        if(_this.compar==1)
       
        {
            _this.crocodileIdle.loadTexture('Unity4_1crocodile_grt', 0, false);
            _this.crocodileAni= _this.crocodileIdle.animations.add('walk',[0,1,2,3,4,5,6,7,11,16,17,17,17,17]);
            _this.crocodileAni.play(5,false);
    
        }
        else
        {
            _this.crocodileIdle.loadTexture('Unity4_1crocodile_lt', 0, false);
            _this.crocodileAni= _this.crocodileIdle.animations.add('walk',[0,1,2,3,4,5,6,7,11,16,17,17,17,17]);
            _this.crocodileAni.play(5,false);
        
        }
       
        
       
       // commonNavBar.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        commonNavBar.playClickSound();

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        _this.time.events.add(4000, _this.removeEverthing, _this);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        //_this.starAnim.animations.frame=3;
        _this.anim4 = _this.starAnim.animations.add('star',[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        
        _this.anim4.play(10,false); 
    
	},

    wrongAns:function(target)
	{
        telInitializer2.gameWrongAns();
		commonNavBar.disableHintIcon();
        //console.log("wrong function");
        _this.fishbox1.inputEnabled = false;
        _this.fishbox2.inputEnabled = false;
        _this.wrong = false;
        
       /* if(target.name=='tick1')
        {
            _this.tick1.frame = 1;
        }
        
        if(target.name=='tick2')
        {
            _this.tick2.frame =1;
        }*/
      
        _this.noofAttempts++;
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level4.1_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        //_this.timer3 = _this.time.create(false);
        //console.log("_this.crocodileIdle :"+_this.crocodileIdle.key);
        
       if(_this.crocodileIdle.key === 'Unity4_1crocodileIdle')
        {
            _this.crocodileIdle.loadTexture('Unity4_1crocodileEyerolling', 0, false);
            _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
            _this.crocodileAni.play(10,false);
           
        }
    
        //  Set a TimerEvent to occur after 2 seconds
         _this.time.events.add(300, function()
        {
            //console.log("344444444444");
            
            if(target.name == 'tick1')
            {
                //_this.tick1.frame = 0;
                
                _this.crocodileIdle.loadTexture('Unity4_1crocodileIdle', 0, false);
           _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
            _this.crocodileAni.play(10,true);
            
            }

            if(target.name=='tick2')
            {
              // _this.tick2.frame =0;
                
                _this.crocodileIdle.loadTexture('Unity4_1crocodileIdle', 0, false);
           _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
            _this.crocodileAni.play(10,true);
            
            }

        
           
          }, this);
          
        _this.shake.shake(10, this.crocodileIdle);
        commonNavBar.playClickSound();
        
		commonNavBar.playWrongCelebrationSound();
        
        
        _this.time.events.add(2000,_this.removeEverthing,_this);
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        //console.log("Question Number :"+_this.no11);
        
        /*_this.tick1.frame =0;
        _this.tick2.frame = 0;*/
        
        _this.no11++;
        
        _this.wrong = true;
      
        if(_this.no11<3)
        {
           // wrong = true;
           
            var timerStopVar = commonNavBar.stopTimer();
             
            
            _this.MaintweenDestroy = _this.add.tween(_this.fishGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;
                _this.count =0;
                _this.fishGrp.destroy();
                _this.optionGrp.destroy();
				commonNavBar.enableHintIcon();
                _this.getQuestion();
            },_this);  
        }
        else
        {
            //_this.stopVoice();
            var timerStopVar = commonNavBar.stopTimer();

								commonNavBar.enableHintIcon();

                                     commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;


            _this.state.start('comparison_NSCG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);//unity4_1_1Score
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
         commonNavBar.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2: 
            case 3: 
            case 4:
                   if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/English/4.1G.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Hindi/4.1G.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Kannada/4.1G.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1/4.1G.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Odiya/4.1G.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                   break;
            
           case 5:
           case 6:
           case 7:
           case 8:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/English/4.1L.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Hindi/4.1L.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Kannada/4.1L.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1/4.1L.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1/Odiya/4.1L.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                break;
                
                
        }

        //commonNavBar.addNavBar(_this,_this.src.src,"numbersense3");
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();


        
    },

    shutdown:function()
    {
        _this.stopVoice();

        if(this.bubble)
        {
            if(this.bubble.isPlaying)
            {
                this.bubble.stop();
                this.bubble = null;
            }
        }
    }

};