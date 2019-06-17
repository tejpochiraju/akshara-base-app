Game.numbersense4=function(){

};


Game.numbersense4.prototype={
	
	init:function()
	{
		_this = this;

		window.mcIcon = "placevalue";
		
	},
			

	create:function(game){	

	numberSense4 = true;	

		 nativeApp.screenViewStringPass("Challenge_activity_list","numbersene4");
		_this.game.stage.disableVisibilityChange = true;
		_this.input.enabled = true;
			
		_this.background1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameSceneBg');
		_this.background2 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height+540,'gameSceneBg');

		_this.navBar = _this.add.sprite(0,0,'landingnavBar');


		_this.graphicsBg = _this.add.graphics(0, 0);
		
		_this.backBtn = _this.add.sprite(30,21,'landingbackBtn');
		_this.backBtn.anchor.setTo(0.5);
		_this.backBtn.priorityID = 1;
		_this.backBtn.inputEnabled = true;
		_this.backBtn.events.onInputDown.add(function()
		{
			numberSense4 = false;
			this.state.start('gradeSelectionScreen',true,false);
		},this);

		this.scoreBg = this.add.sprite(750,7,'scoreBg');

        this.scoreVar = parseInt(window.score);

        this.scoreTxt = this.add.text(815,24, this.scoreVar);
        this.scoreTxt.anchor.setTo(0.5);
        this.scoreTxt.align = 'center';
        this.scoreTxt.font = 'myfont';
        this.scoreTxt.fontWeight = 'normal';
        this.scoreTxt.fontSize = 20;
        this.scoreTxt.fill = '#ADFF2F';

		this.numbersenseText = this.add.sprite(140,20,'numbersenseText');
		this.numbersenseText.anchor.setTo(0.5);

		this.numbersenseTxt = this.add.text(140,23, "Number Sense");
		this.numbersenseTxt.fontSize = 18;

		if(window.languageSelected == "Gujarati")
                        {
                            this.numbersenseTxt.setText("નંબર જ્ઞાન");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            this.numbersenseTxt.setText("नंबर ज्ञान");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            this.numbersenseTxt.setText("ಸಂಖ್ಯೆ ಪರಿಚಯ");
                            this.numbersenseTxt.fontSize = 14;
                        }
                        else if(window.languageSelected == "Odiya")
                        {
                           this.numbersenseTxt.setText("ସଂଖ୍ୟା ପରିଚୟ");
                        }
                        else
                        {
                        	this.numbersenseTxt.setText("Number Sense");
                        }
       
        this.numbersenseTxt.anchor.setTo(0.5);
        this.numbersenseTxt.align = 'center';

        this.numbersenseTxt.font = 'gradefont';
        
        this.numbersenseTxt.fill = '#FFFF00';

		this.numberMc = this.add.sprite(250,20,'placevalueMc');
		this.numberMc.anchor.setTo(0.5);


		this.numbersense1_1State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_1_1state");
		this.numbersense1_2State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_2_1state");
		//this.numbersense1_3State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_3_2state");
		this.numbersense1_4State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_4_2state");
		this.numbersense1_5State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_5_2state");
		this.numbersense1_6State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_6_3state");
		this.numbersense1_7State = localStorage.getItem(window.avatarName+"placevalue_NSPVG_7_3state");
		
		this.addgameIcons();	

		/*_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xA24098, 0);
		_this.graphicsBg.drawRect(0,0,960,4000);
		_this.graphicsBg.boundsPadding = 0;
		
		
		
		_this.mask = _this.add.graphics();
        _this.mask.position.x = 0;   
        _this.mask.position.y = 40;   
        _this.mask.beginFill(0, 1);   
        _this.mask.moveTo(0, 0);   
        _this.mask.lineTo(960, 0);   
        _this.mask.lineTo(960, 505);   
        _this.mask.lineTo(0, 505);   
        _this.mask.lineTo(0, 0);   
        _this.mask.endFill();   
        _this.graphicsBg.mask = _this.mask;


        _this.graphicsBg.addChild(_this.numbersense1_1);
        _this.graphicsBg.addChild(_this.ntext1_1);
        _this.graphicsBg.addChild(_this.numbersense1_2);
        _this.graphicsBg.addChild(_this.ntext1_2);
        //_this.graphicsBg.addChild(_this.numbersense1_3);
        _this.graphicsBg.addChild(_this.numbersense1_4);
        _this.graphicsBg.addChild(_this.ntext1_4);
        _this.graphicsBg.addChild(_this.numbersense1_5);
        _this.graphicsBg.addChild(_this.ntext1_5);
        _this.graphicsBg.addChild(_this.numbersense1_6);
        _this.graphicsBg.addChild(_this.ntext1_6);
        _this.graphicsBg.addChild(_this.numbersense1_7);
        _this.graphicsBg.addChild(_this.ntext1_7);


		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

			_this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           _this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			_this.mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						//_this.tween = null;
						if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						//_this.tween = null;
						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, _this);
					
					_this.tween.onUpdateCallback(function(){
						tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							if(_this.tween.isRunning)
							{
								_this.tween.stop();
								//_this.tween = null;
							}
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
			//	}
			});

			_this.input.onDown.add(function(){
				if(_this.tween)
				{
					if(_this.tween.isRunning)
					{
						_this.tween.stop();
						//_this.tween = null;
					}
				}
				_this.graphicsBg.inputEnabled = true;
				_this.graphicsBg.input.enableDrag();
				_this.graphicsBg.input.allowHorizontalDrag = false;

				_this.graphicsBg.events.onDragUpdate.add(function(){
					_this.tap = false;
					if(_this.tween)
					{
						if(_this.tween.isRunning)
						{
							_this.tween.stop();
							//_this.tween = null;
						}
					}
					if(_this.graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					else if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
							//tween.stop();
							//game.input.enabled = true;
						}
				},_this);

				_this.graphicsBg.events.onDragStop.add(function(e){
					_this.tap = false;
					//console.log(e);
					if(_this.tween)
					{
						//if(tween.isRunning)
						if(_this.tween.isRunning)
						{
							_this.tween.stop();
							//_this.tween = null;
						}
						//_this.tween = null;
					}

						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						else if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
						}
					
				},_this);

			},_this);
		
		_this.input.onTap.add(function(){
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(300, function(){
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			},_this);
		},_this);






		
		/*if(gradeScreen)
		{
			_this.graphicsBg.y = -520;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0}, 0, 'Linear', true, 0);
			gameScreenTween.onComplete.add(function(){
					this.game.input.enabled = true;	

					if(_this.mc)
					{
						_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
					}


			}, _this);


			gradeScreen = false;

		}
		else
		{
			if(_this.mc)
			{
				_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
			}
			this.game.input.enabled = true;
		}	*/		
		
	},

	addgameIcons:function()
	{
		this.numbersense1_1 = this.add.sprite(this.world.centerX-250,200,"numbersense4_1");
		this.numbersense1_1.anchor.setTo(0.5);

		this.ntext1_1 = this.add.sprite(this.world.centerX-190,245,"n1");
		this.ntext1_1.anchor.setTo(0.5);
		
		if(this.numbersense1_1State=="playedwithhint"||this.numbersense1_1State=="canplay")
		{
			this.numbersense1_1.inputEnabled = true;
			this.numbersense1_1.events.onInputDown.add(function()
			{
				if(this.numbersense1_1State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_1_1level1');
				}
				else
					this.state.start('placevalue_NSPVG_1_1level1',true,false);
			},this);
		}

		this.numbersense1_2 = this.add.sprite(this.world.centerX,200,"numbersense4_2");
		this.numbersense1_2.anchor.setTo(0.5);

		this.ntext1_2 = this.add.sprite(this.world.centerX+60,245,"n2");
		this.ntext1_2.anchor.setTo(0.5);
		
		if(this.numbersense1_2State=="playedwithhint"||this.numbersense1_2State=="canplay")
		{
			this.numbersense1_2.inputEnabled = true;
			this.numbersense1_2.events.onInputDown.add(function()
			{
				if(this.numbersense1_2State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_2_1level1');
				}
				else
					this.state.start('placevalue_NSPVG_2_1level1',true,false);
			},this);
		}

		/*this.numbersense1_3 = this.add.sprite(this.world.centerX,400,"numbersense4_2");
		this.numbersense1_3.anchor.setTo(0.5);

		if(this.numbersense1_3State=="playedwithhint"||this.numbersense1_3State=="canplay")
		{
			this.numbersense1_3.inputEnabled = true;
			this.numbersense1_3.events.onInputDown.add(function()
			{
				if(this.numbersense1_3State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			//this.deductScore(this,-5,false,false,null,'length_MLG_2_1level1');
				}
				//else
					//this.state.start('length_MLG_2_1level1',true,false);
			},this);
		}*/

		this.numbersense1_4 = this.add.sprite(this.world.centerX+250,200,"numbersense4_3");
		this.numbersense1_4.anchor.setTo(0.5);

		this.ntext1_4 = this.add.sprite(this.world.centerX+310,245,"n3");
		this.ntext1_4.anchor.setTo(0.5);

		if(this.numbersense1_4State=="playedwithhint"||this.numbersense1_4State=="canplay")
		{
			this.numbersense1_4.inputEnabled = true;
			this.numbersense1_4.events.onInputDown.add(function()
			{
				if(this.numbersense1_4State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_4_2level1');
				}
				else
					this.state.start('placevalue_NSPVG_4_2level1',true,false);
			},this);
		}

		this.numbersense1_5 = this.add.sprite(this.world.centerX,400,"numbersense4_4");
		this.numbersense1_5.anchor.setTo(0.5);

		this.ntext1_5 = this.add.sprite(this.world.centerX+60,445,"n5");
		this.ntext1_5.anchor.setTo(0.5);

		if(this.numbersense1_5State=="playedwithhint"||this.numbersense1_5State=="canplay")
		{
			this.numbersense1_5.inputEnabled = true;
			this.numbersense1_5.events.onInputDown.add(function()
			{
				if(this.numbersense1_5State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_5_2level1');
				}
				else
					this.state.start('placevalue_NSPVG_5_2level1',true,false);
			},this);
		}

		this.numbersense1_6 = this.add.sprite(this.world.centerX-250,400,"numbersense4_3");
		this.numbersense1_6.anchor.setTo(0.5);
		this.ntext1_6 = this.add.sprite(this.world.centerX-190,445,"n4");
		this.ntext1_6.anchor.setTo(0.5);

		if(this.numbersense1_6State=="playedwithhint"||this.numbersense1_6State=="canplay")
		{
			this.numbersense1_6.inputEnabled = true;
			this.numbersense1_6.events.onInputDown.add(function()
			{
				if(this.numbersense1_6State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_6_3level1');
				}
				else
					this.state.start('placevalue_NSPVG_6_3level1',true,false);
			},this);
		}

		this.numbersense1_7 = this.add.sprite(this.world.centerX+250,400,"numbersense4_4");
		this.numbersense1_7.anchor.setTo(0.5);

		this.ntext1_7 = this.add.sprite(this.world.centerX+310,445,"n6");
		this.ntext1_7.anchor.setTo(0.5);

		if(this.numbersense1_7State=="playedwithhint"||this.numbersense1_7State=="canplay")
		{
			this.numbersense1_7.inputEnabled = true;
			this.numbersense1_7.events.onInputDown.add(function()
			{
				if(this.numbersense1_7State=="playedwithhint")
				{
					window.score -= 5;
        			localStorage.setItem(window.avatarName+"Score", window.score);
        			this.deductScore(this,-5,false,false,null,'placevalue_NSPVG_7_3level1');
				}
				else
					this.state.start('placevalue_NSPVG_7_3level1',true,false);
			},this);
		}


		this.checkState(this.numbersense1_1,this.ntext1_1,this.numbersense1_1State);
		this.checkState(this.numbersense1_2,this.ntext1_2,this.numbersense1_2State);
		//this.checkState(this.numbersense1_3,this.ntext1_3,this.numbersense1_3State);
		this.checkState(this.numbersense1_4,this.ntext1_4,this.numbersense1_4State);
		this.checkState(this.numbersense1_5,this.ntext1_5,this.numbersense1_5State);
		this.checkState(this.numbersense1_6,this.ntext1_6,this.numbersense1_6State);
		this.checkState(this.numbersense1_7,this.ntext1_7,this.numbersense1_7State);


		//this.ntext1_1.visible = false;
		//this.ntext1_2.visible = false;

		
	},

	checkState:function(target,target2,state)
	{
		if(state=="canplay")
		{
			target.frame = 0;
			target2.frame = 0;
		}
		else if(state=="playedwithhint")
		{
			target.frame = 1;
			target2.frame = 0;
		}
		else if(state=="fullycomplete")
		{
			target.frame = 2;
			target2.frame = 1;
		}
		else if(state=="cannotplay")
		{
			target.frame = 3;
			target2.frame = 1;
		}
	},

	deductScore:function(game,value,flag,colorflag,hintparams,gamest)
    {
    	this.gamestate = gamest;
    	this.scoreVar+=value;
        this.scoreDeductGroup = game.add.group();

        this.deductScoreVar = game.add.sprite(650,150,'endscreendeductBg');
        this.deductScoreVar.scale.setTo(1.3,1.3);
        var deductScoreVaranim = this.deductScoreVar.animations.add('load');
        deductScoreVaranim.play(10,false);

        this.deductScoreVar.anchor.setTo(0.5);

        this.deductText = game.add.text(648,150,value);
        this.deductText.anchor.setTo(0.5);
        this.deductText.align = 'center';
        this.deductText.font = 'myfont';
        this.deductText.fontWeight = 'normal';

        this.deductText.fontSize = 30;
        this.deductText.fill = '#FFFFFF';

        this.scoreDeductGroup.add(this.deductScoreVar);
        this.scoreDeductGroup.add(this.deductText);

        game.add.tween(this.deductScoreVar).to({ x: 820, y: 22}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductScoreVar.scale).to({x: 0.2,y:0.2}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductText.scale).to({x: 0.5,y:0.5}, 1500, 'Linear', true, 0);
        game.add.tween(this.deductText).to({ x: 820, y: 22}, 1500, 'Linear', true, 0).onComplete.add(function(){
            this.deductScoreVar.destroy();
            this.deductText.destroy();
            this.scoreDeductGroup.destroy();
            game.state.start(this.gamestate,true,false);
    	},this);

    },

	
	shutdown:function()
	{
		
	}
	
};