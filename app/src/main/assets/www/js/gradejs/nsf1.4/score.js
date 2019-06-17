Game.nsf1_4Score=function(game){

};

Game.nsf1_4Score.prototype={
	create:function(game){
		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);

		if(_this.video1==null)
			{	
				_this.video1 = _this.add.video('demo7_1_1');
				
			}
		
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-150,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(2,2);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			if(grade2Selected == false)
				_this.state.start('grade1levelSelectionScreen',true,false); 
			else
				_this.state.start('grade2levelSelectionScreen',true,false); 
			},_this);
		
		
		_this.nextBtn = _this.add.sprite(_this.world.centerX+150,_this.world.centerY,'CommonNextBtn');    
		_this.nextBtn.scale.setTo(2,2);
        _this.nextBtn.anchor.setTo(0.5);	
		_this.nextBtn.inputEnabled = true;
		_this.nextBtn.events.onInputDown.add(function()
		{
			_this.nextBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			//_this.cache.destroy();
			//_this.state.start('nsf2_4level1',true,false); 
			//_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					_this.video1.play(false);
					
					_this.video1.changeSource(window.baseUrl+"assets/demoVideos/nsf2_4.mp4");

					
					_this.video1.addToWorld();
					//_this.video1.addToWorld(0,0,0,0,1.05,1.13);
					
					_this.video1.play(false);
					_this.video1.mute = true;

					_this.video1.playbackRate = 1.2;
					
					_this.playDemoVideos('nsf2_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						_this.video1.stop(false);
						_this.game.input.enabled = true;
						_this.state.start('nsf2_4level1',true,false);
						
					},_this);
					},_this);


					_this.video1.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //_this.video1 = null;
		                     _this.state.start('nsf2_4level1',true,false);
	                    },_this);//

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
				

		},_this);
		//_this.nextBtn.visible = false;
        
                
                _this.replay = _this.add.button(_this.world.centerX,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		        _this.replay.scale.setTo(2,2);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
                    _this.state.start('nsf1_4level1',true,false);
                 },_this);

                   
	},

	playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
            case 'nsf1_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/English/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Hindi/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Kannada/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Gujrati/nsf1.4.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Odiya/nsf1.4.mp3");
						//_this.amplify = _this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsf2_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/English/nsf2.4E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Hindi/nsf2.4H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Kannada/nsf2.4K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Gujarati/nsf2.4G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Odiya/nsf2.4.mp3");
						//_this.amplify = _this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsf3_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/English/nsf3.4E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Hindi/nsf3.4H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Kannada/nsf3.4K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Gujarati/nsf3.4G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Odiya/nsf3.4.mp3");
						//_this.amplify = _this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
             }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
	

	pauseDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				//_this.playQuestionSound.currentTime = 0.0;
			}
		}
	},

	resumeDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			
			if(_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.play();
				//_this.playQuestionSound.currentTime = 0.0;
			}
		}
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
		_this.background = null;
		_this.homeBtn.events.onInputDown.removeAll();
		_this.homeBtn=null;
		_this.nextBtn.events.onInputDown.removeAll();
		_this.nextBtn=null;
		_this.replay.events.onInputDown.removeAll();
		_this.replay=null;
		
		_this = null;

		/*if(_this.video1)
		{
			_this.video1.destroy();
			_this.video1.removeVideoElement();
			_this.video1 = null;
		}*/
	}

};