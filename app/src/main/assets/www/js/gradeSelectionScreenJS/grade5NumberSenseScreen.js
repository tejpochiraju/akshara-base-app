Game.grade5NumberSense=function(game){
	
};

Game.grade5NumberSense.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}

		document.addEventListener("online", _this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},
	
	create:function(game){

		//nativeApp.screenViewStringPass("Practice_activity_list","grade5NumberScene");
		
		_this = this;

		this.video = null;
		this.video1 = null;
		this.video2 = null;

		this.game.input.enabled = true;

		 grade1ShapesSenseSelected = false;
		 grade2ShapesSenseSelected = false;
		 grade3ShapesSenseSelected = false;
		 grade4ShapesSenseSelected = false;
		 grade5ShapesSenseSelected = false;

		 grade1NumberSenseSelected = false;
		 grade1NumberOperationSelected = false;
		 grade1MeasurementSelected = false;

		
		 grade2NumberSenseSelected = false;
		 grade2NumberOperationSelected = false;
		 grade2MeasurementSelected = false;

		 
		 grade3NumberSenseSelected = false;
		 grade3NumberOperationSelected = false;
		 grade3MeasurementSelected = false;

		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = true;
		 grade4MeasurementSelected = false;


		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(-5,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            grade5NumberSenseSelected = false;
			
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);
		
		
		_this.spatialRelationshipGroup = _this.add.group();
		_this.placeValueGroup = _this.add.group();
						
		
		_this.spatialRelationshipTopic();
		_this.placeValueTopic();
		

		_this.spatialRelationshipGroup.x = 0;
		_this.spatialRelationshipGroup.y = 0;

		_this.placeValueGroup.x = 0;
		_this.placeValueGroup.y = 650;

		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
		_this.graphicsBg.drawRect(0,0,960,4000);
		_this.graphicsBg.boundsPadding = 0;
		
		
		
		_this.mask = _this.add.graphics();
        _this.mask.position.x = 0;   
        _this.mask.position.y = 35;   
        _this.mask.beginFill(0, 1);   
        _this.mask.moveTo(0, 0);   
        _this.mask.lineTo(960, 0);   
        _this.mask.lineTo(960, 505);   
        _this.mask.lineTo(0, 505);   
        _this.mask.lineTo(0, 0);   
        _this.mask.endFill();   
        _this.graphicsBg.mask = _this.mask;
		
	
		_this.graphicsBg.addChild(_this.spatialRelationshipGroup);
		_this.graphicsBg.addChild(_this.placeValueGroup);
		
		
		
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
						_this.tween = null;
						if(_this.graphicsBg.y<=-382)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -382;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-382)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -382;
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
						_this.tween = null;
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
							_this.tween.stop();
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
					else if(_this.graphicsBg.y<=-382)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -382;
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
						_this.tween.stop();
						//_this.tween = null;
					}

						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						else if(_this.graphicsBg.y<=-382)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -382;
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
	},
	
	
	spatialRelationshipTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.fractionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0,0,805,600,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.spatialRelationship1 = _this.add.sprite(100,120,'nsf1.5');
		
		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.spatialRelationship1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.spatialRelationship1Txt.anchor.setTo(0.5);
		_this.spatialRelationship1Txt.align = 'center';
		
				
		_this.spatialRelationship1Txt.font = 'gradefont';
		_this.spatialRelationship1Txt.fontSize = 20;
		_this.spatialRelationship1Txt.fontWeight = 'normal';
		_this.spatialRelationship1Txt.fill = 'white';

		_this.spatialRelationship1Txt.wordWrap = true;
		_this.spatialRelationship1Txt.wordWrapWidth = 500;
		

		_this.spatialRelationship1.inputEnabled = true;
		_this.spatialRelationship1.input.useHandCursor = true;
		_this.spatialRelationship1.name = "Fractions 1.1 A";
		_this.spatialRelationship1.events.onInputDown.add(function(target){

			if(this.video3==null)
			{	
				this.video3 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video3.play(false);
					
					this.video3.changeSource(window.baseUrl+"assets/demoVideos/nsf1_5.mp4");

					
					this.video3.addToWorld();
					//this.video3.addToWorld(0,0,0,0,1.05,1.13);
					
					this.video3.play(false);
					this.video3.mute = true;
					
					_this.playDemoVideos('nsf1_5');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video3.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsf1_5level1',true,false);
						
					},_this);
					},_this);


					this.video3.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video3 = null;
		                     _this.state.start('nsf1_5level1',true,false);
	                    },this);//

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5500;
						t2=20000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4700;
						t2=20000;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=6000;
						t2=20000;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=6500;
						t2=20000;
					}
					else
					{
						t1=6000;
						t2=20000;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);
				}
			},_this);
			
		},_this);

		
		_this.spatialRelationship2 = _this.add.sprite(300,120,'nsf2.5');
		//_this.fractions1_2AScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.spatialRelationship2Txt = this.add.text(425, 192, ' \n 2 \n ');
		_this.spatialRelationship2Txt.anchor.setTo(0.5);
		_this.spatialRelationship2Txt.align = 'center';
		
				
		_this.spatialRelationship2Txt.font = 'gradefont';
		_this.spatialRelationship2Txt.fontSize = 20;
		_this.spatialRelationship2Txt.fontWeight = 'normal';
		_this.spatialRelationship2Txt.fill = 'white';

		_this.spatialRelationship2Txt.wordWrap = true;
		_this.spatialRelationship2Txt.wordWrapWidth = 500;
		//_this.fractions1_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship2.inputEnabled = true;
		_this.spatialRelationship2.input.useHandCursor = true;
		_this.spatialRelationship2.name = "Fractions 1.1 A";
		_this.spatialRelationship2.events.onInputDown.add(function(target){

			if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);

					document.getElementById('phaser_canvas').style.pointerEvents = "none";
					
					this.video.inputEnabled = false;

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/nsf2_5.mp4");
					
					this.video.addToWorld();
					
					this.video.play(false);


					_this.playDemoVideos('nsf2_5');

					_this.time.events.add(1000, function(){
					_this.skipDemos = _this.add.sprite(870,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsf2_5level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){
						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('nsf2_5level1',true,false);
	                    },this);//

					var t1=0,t2=0;

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
						
					},_this);
					
					
				}
			},_this);
			
		},_this);

		_this.spatialRelationship3 = _this.add.sprite(500,120,'nsf3.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.spatialRelationship3Txt = this.add.text(625, 192, ' \n 3 \n ');
		_this.spatialRelationship3Txt.anchor.setTo(0.5);
		_this.spatialRelationship3Txt.align = 'center';
		
				
		_this.spatialRelationship3Txt.font = 'gradefont';
		_this.spatialRelationship3Txt.fontSize = 20;
		_this.spatialRelationship3Txt.fontWeight = 'normal';
		_this.spatialRelationship3Txt.fill = 'white';

		_this.spatialRelationship3Txt.wordWrap = true;
		_this.spatialRelationship3Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship3.inputEnabled = true;
		_this.spatialRelationship3.input.useHandCursor = true;
		_this.spatialRelationship3.name = "Fractions 1.1 A";
		_this.spatialRelationship3.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('nsf3_5level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship4 = _this.add.sprite(700,120,'nsf4.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.spatialRelationship4Txt = this.add.text(825, 192, ' \n 4 \n ');
		_this.spatialRelationship4Txt.anchor.setTo(0.5);
		_this.spatialRelationship4Txt.align = 'center';
		
				
		_this.spatialRelationship4Txt.font = 'gradefont';
		_this.spatialRelationship4Txt.fontSize = 20;
		_this.spatialRelationship4Txt.fontWeight = 'normal';
		_this.spatialRelationship4Txt.fill = 'white';

		_this.spatialRelationship4Txt.wordWrap = true;
		_this.spatialRelationship4Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship4.inputEnabled = true;
		_this.spatialRelationship4.input.useHandCursor = true;
		_this.spatialRelationship4.name = "Fractions 1.1 A";
		_this.spatialRelationship4.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('nsf4_5level1',true,false);
				}
			},_this);
			
		},_this);


		_this.spatialRelationship5 = _this.add.sprite(100,320,'nsf5.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.spatialRelationship5Txt = this.add.text(225, 392, ' \n 5 \n ');
		_this.spatialRelationship5Txt.anchor.setTo(0.5);
		_this.spatialRelationship5Txt.align = 'center';
		
				
		_this.spatialRelationship5Txt.font = 'gradefont';
		_this.spatialRelationship5Txt.fontSize = 20;
		_this.spatialRelationship5Txt.fontWeight = 'normal';
		_this.spatialRelationship5Txt.fill = 'white';

		_this.spatialRelationship5Txt.wordWrap = true;
		_this.spatialRelationship5Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship5.inputEnabled = true;
		_this.spatialRelationship5.input.useHandCursor = true;
		_this.spatialRelationship5.name = "Fractions 1.1 A";
		_this.spatialRelationship5.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('nsf5_5level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship6 = _this.add.sprite(300,320,'nsd1.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.spatialRelationship6Txt = this.add.text(425, 392, ' \n 6 \n ');
		_this.spatialRelationship6Txt.anchor.setTo(0.5);
		_this.spatialRelationship6Txt.align = 'center';
		
				
		_this.spatialRelationship6Txt.font = 'gradefont';
		_this.spatialRelationship6Txt.fontSize = 20;
		_this.spatialRelationship6Txt.fontWeight = 'normal';
		_this.spatialRelationship6Txt.fill = 'white';

		_this.spatialRelationship6Txt.wordWrap = true;
		_this.spatialRelationship6Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship6.inputEnabled = true;
		_this.spatialRelationship6.input.useHandCursor = true;
		_this.spatialRelationship6.name = "Fractions 1.1 A";
		_this.spatialRelationship6.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('nsd1_5level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship7 = _this.add.sprite(500,320,'nsd2.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic7 = this.add.graphics(610,375);
		_this.bgGraphic7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic7.beginFill(0x493A19, 1);
		_this.bgGraphic7.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic7.boundsPadding = 0;

		_this.spatialRelationship7Txt = this.add.text(625, 392, ' \n 7 \n ');
		_this.spatialRelationship7Txt.anchor.setTo(0.5);
		_this.spatialRelationship7Txt.align = 'center';
		
				
		_this.spatialRelationship7Txt.font = 'gradefont';
		_this.spatialRelationship7Txt.fontSize = 20;
		_this.spatialRelationship7Txt.fontWeight = 'normal';
		_this.spatialRelationship7Txt.fill = 'white';

		_this.spatialRelationship7Txt.wordWrap = true;
		_this.spatialRelationship7Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship7.inputEnabled = true;
		_this.spatialRelationship7.input.useHandCursor = true;
		_this.spatialRelationship7.name = "Fractions 1.1 A";
		_this.spatialRelationship7.events.onInputDown.add(function(target){

			if(this.video1==null)
			{	
				this.video1 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video1.play(false);
					
					this.video1.changeSource(window.baseUrl+"assets/demoVideos/nsd2_5.mp4");
					
					this.video1.addToWorld();
					
					this.video1.play(false);

					_this.playDemoVideos('nsd2_5');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(800,430,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video1.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsd2_5level1',true,false);
						
					},_this);
					},_this);


					this.video1.onComplete.add(function(){
	                    //this.video1 = null;
	                    _this.stopDemoVoice();
		                     _this.state.start('nsd2_5level1',true,false);
	                    },this);//

					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5500;
						t2=20000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4700;
						t2=20000;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=6000;
						t2=20000;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=6500;
						t2=20000;
					}
					else
					{
						t1=6000;
						t2=20000;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
					
				}
			},_this);
			
		},_this);

		_this.spatialRelationship8 = _this.add.sprite(700,320,'nsd4.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic8 = this.add.graphics(810,375);
		_this.bgGraphic8.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic8.beginFill(0x493A19, 1);
		_this.bgGraphic8.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic8.boundsPadding = 0;

		_this.spatialRelationship8Txt = this.add.text(825, 392, ' \n 8 \n ');
		_this.spatialRelationship8Txt.anchor.setTo(0.5);
		_this.spatialRelationship8Txt.align = 'center';
		
				
		_this.spatialRelationship8Txt.font = 'gradefont';
		_this.spatialRelationship8Txt.fontSize = 20;
		_this.spatialRelationship8Txt.fontWeight = 'normal';
		_this.spatialRelationship8Txt.fill = 'white';

		_this.spatialRelationship8Txt.wordWrap = true;
		_this.spatialRelationship8Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship8.inputEnabled = true;
		_this.spatialRelationship8.input.useHandCursor = true;
		_this.spatialRelationship8.name = "Fractions 1.1 A";
		_this.spatialRelationship8.events.onInputDown.add(function(target){

			if(this.video2==null)
			{	
				this.video2 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video2.play(false);
					
					this.video2.changeSource(window.baseUrl+"assets/demoVideos/nsd4_5.mp4");
					
					this.video2.addToWorld();
					//this.video2.addToWorld(0,0,0,0,1.25,1.32);
					
					this.video2.play(false);
					this.video2.mute = true;

					_this.playDemoVideos('nsd4_5');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video2.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsd4_5level1',true,false);
						
					},_this);
					},_this);

					this.video2.onComplete.add(function(){
	                   // this.video2 = null;
	                    _this.stopDemoVoice();
		                     _this.state.start('nsd4_5level1',true,false);
	                    },this);//

					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5500;
						t2=20000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4700;
						t2=20000;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=6000;
						t2=20000;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=6500;
						t2=20000;
					}
					else
					{
						t1=6000;
						t2=20000;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
				}
			},_this);
			
		},_this);

		_this.spatialRelationship9 = _this.add.sprite(100,520,'nsd5.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic9 = this.add.graphics(210,575);
		_this.bgGraphic9.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic9.beginFill(0x493A19, 1);
		_this.bgGraphic9.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic9.boundsPadding = 0;

		_this.spatialRelationship9Txt = this.add.text(225, 592, ' \n 9 \n ');
		_this.spatialRelationship9Txt.anchor.setTo(0.5);
		_this.spatialRelationship9Txt.align = 'center';
		
				
		_this.spatialRelationship9Txt.font = 'gradefont';
		_this.spatialRelationship9Txt.fontSize = 20;
		_this.spatialRelationship9Txt.fontWeight = 'normal';
		_this.spatialRelationship9Txt.fill = 'white';

		_this.spatialRelationship9Txt.wordWrap = true;
		_this.spatialRelationship9Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship9.inputEnabled = true;
		_this.spatialRelationship9.input.useHandCursor = true;
		_this.spatialRelationship9.name = "Fractions 1.1 A";
		_this.spatialRelationship9.events.onInputDown.add(function(target){

			if(this.video4==null)
			{	
				this.video4 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video4.play(false);
					
					this.video4.changeSource(window.baseUrl+"assets/demoVideos/nsd5_5.mp4");

					
					this.video4.addToWorld();
					//this.video4.addToWorld(0,0,0,0,1.05,1.13);
					
					this.video4.play(false);
					this.video4.mute = true;
					
					_this.playDemoVideos('nsd5_5');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video4.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsd5_5level1',true,false);
						
					},_this);
					},_this);


					this.video4.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video4 = null;
		                     _this.state.start('nsd5_5level1',true,false);
	                    },this);//

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
				}
			},_this);
			
		},_this);

		_this.spatialRelationship10 = _this.add.sprite(300,520,'nsd6.5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic10 = this.add.graphics(410,575);
		_this.bgGraphic10.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic10.beginFill(0x493A19, 1);
		_this.bgGraphic10.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic10.boundsPadding = 0;

		_this.spatialRelationship10Txt = this.add.text(425, 592, ' \n 10 \n ');
		_this.spatialRelationship10Txt.anchor.setTo(0.5);
		_this.spatialRelationship10Txt.align = 'center';
		
				
		_this.spatialRelationship10Txt.font = 'gradefont';
		_this.spatialRelationship10Txt.fontSize = 20;
		_this.spatialRelationship10Txt.fontWeight = 'normal';
		_this.spatialRelationship10Txt.fill = 'white';

		_this.spatialRelationship10Txt.wordWrap = true;
		_this.spatialRelationship10Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship10.inputEnabled = true;
		_this.spatialRelationship10.input.useHandCursor = true;
		_this.spatialRelationship10.name = "Fractions 1.1 A";
		_this.spatialRelationship10.events.onInputDown.add(function(target){

			if(this.video5==null)
			{	
				this.video5 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video5.play(false);
					
					this.video5.changeSource(window.baseUrl+"assets/demoVideos/nsd6_5.mp4");

					
					this.video5.addToWorld();
					//this.video5.addToWorld(0,0,0,0,1.25,1.32);
					
					this.video5.play(false);
					this.video5.mute = true;
					this.video5.playbackRate = 2;
					_this.playDemoVideos('nsd6_5a');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,485,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video5.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsd6_5level1',true,false);
						
					},_this);
					},_this);


					this.video5.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video5 = null;
		                     _this.state.start('nsd6_5level1',true,false);
	                    },this);//

					_this.time.events.add(17000, function(){
						_this.stopDemoVoice();
						_this.video5.playbackRate = 1.2;
						_this.playDemoVideos('nsd6_5b');
						
					},_this);

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
				}
			},_this);
			
		},_this);
		
		
		_this.spatialRelationshipGroup.add(_this.topicTxtBg);
		_this.spatialRelationshipGroup.add(_this.topicTitleText);
		_this.spatialRelationshipGroup.add(_this.topicBg);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship1);
		_this.spatialRelationshipGroup.add(_this.bgGraphic1);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship1Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship2);
		_this.spatialRelationshipGroup.add(_this.bgGraphic2);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship2Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship3);
		_this.spatialRelationshipGroup.add(_this.bgGraphic3);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship3Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship4);
		_this.spatialRelationshipGroup.add(_this.bgGraphic4);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship4Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship5);
		_this.spatialRelationshipGroup.add(_this.bgGraphic5);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship5Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship6);
		_this.spatialRelationshipGroup.add(_this.bgGraphic6);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship6Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship7);
		_this.spatialRelationshipGroup.add(_this.bgGraphic7);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship7Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship8);
		_this.spatialRelationshipGroup.add(_this.bgGraphic8);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship8Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship9);
		_this.spatialRelationshipGroup.add(_this.bgGraphic9);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship9Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship10);
		_this.spatialRelationshipGroup.add(_this.bgGraphic10);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship10Txt);

		
		
		
	},

	placeValueTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.placeValueTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.placevalue1 = _this.add.sprite(100,120,'pv1.5');
		
		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.placevalue1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.placevalue1Txt.anchor.setTo(0.5);
		_this.placevalue1Txt.align = 'center';
		
				
		_this.placevalue1Txt.font = 'gradefont';
		_this.placevalue1Txt.fontSize = 20;
		_this.placevalue1Txt.fontWeight = 'normal';
		_this.placevalue1Txt.fill = 'white';

		_this.placevalue1Txt.wordWrap = true;
		_this.placevalue1Txt.wordWrapWidth = 500;
		

		_this.placevalue1.inputEnabled = true;
		_this.placevalue1.input.useHandCursor = true;
		_this.placevalue1.name = "Fractions 1.1 A";
		_this.placevalue1.events.onInputDown.add(function(target){

			if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv1.5.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					//_this.playDemoVideos('nsf1_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv1_5level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv1_5level1',true,false);
	                    },this);//



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
					
				}
			},_this);
			
		},_this);

		
		_this.placevalue2 = _this.add.sprite(300,120,'pv2.5');
		
		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.placevalue2Txt = this.add.text(425, 192, ' \n 2 \n ');
		_this.placevalue2Txt.anchor.setTo(0.5);
		_this.placevalue2Txt.align = 'center';
		
				
		_this.placevalue2Txt.font = 'gradefont';
		_this.placevalue2Txt.fontSize = 20;
		_this.placevalue2Txt.fontWeight = 'normal';
		_this.placevalue2Txt.fill = 'white';

		_this.placevalue2Txt.wordWrap = true;
		_this.placevalue2Txt.wordWrapWidth = 500;
		

		_this.placevalue2.inputEnabled = true;
		_this.placevalue2.input.useHandCursor = true;
		_this.placevalue2.name = "Fractions 1.1 A";
		_this.placevalue2.events.onInputDown.add(function(target){

			if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv2.5.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					_this.playDemoVideos('pv2_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv2_5level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv2_5level1',true,false);
	                    },this);//



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
					
				}
			},_this);
			
		},_this);

		_this.placevalue3 = _this.add.sprite(500,120,'pv3.5');
		
		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.placevalue3Txt = this.add.text(625, 192, ' \n 3 \n ');
		_this.placevalue3Txt.anchor.setTo(0.5);
		_this.placevalue3Txt.align = 'center';
		
				
		_this.placevalue3Txt.font = 'gradefont';
		_this.placevalue3Txt.fontSize = 20;
		_this.placevalue3Txt.fontWeight = 'normal';
		_this.placevalue3Txt.fill = 'white';

		_this.placevalue2Txt.wordWrap = true;
		_this.placevalue2Txt.wordWrapWidth = 500;
		

		_this.placevalue3.inputEnabled = true;
		_this.placevalue3.input.useHandCursor = true;
		_this.placevalue3.name = "Fractions 1.1 A";
		_this.placevalue3.events.onInputDown.add(function(target){

			if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv3.5.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					//_this.playDemoVideos('nsf1_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv3_5level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv3_5level1',true,false);
	                    },this);//



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
					
				}
			},_this);
			
		},_this);

		


		
		
		
		_this.placeValueGroup.add(_this.topicTxtBg);
		_this.placeValueGroup.add(_this.topicTitleText);
		_this.placeValueGroup.add(_this.topicBg);

		_this.placeValueGroup.add(_this.placevalue1);
		_this.placeValueGroup.add(_this.bgGraphic1);
		_this.placeValueGroup.add(_this.placevalue1Txt);

		_this.placeValueGroup.add(_this.placevalue2);
		_this.placeValueGroup.add(_this.bgGraphic2);
		_this.placeValueGroup.add(_this.placevalue2Txt);

		_this.placeValueGroup.add(_this.placevalue3);
		_this.placeValueGroup.add(_this.bgGraphic3);
		_this.placeValueGroup.add(_this.placevalue3Txt);		
		
	},

	playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
            case 'nsf1_5':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/English/nsf1.5E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Hindi/nsf1.5H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Kannada/nsf1.5K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Gujarati/nsf1.5G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Odiya/nsf1.5O.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsf2_5':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/English/nsf2.5E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Hindi/nsf2.5H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Kannada/nsf2.5K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Gujarati/nsf2.5G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.5/Odiya/nsf2.5O.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsd2_5':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/English/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Hindi/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Kannada/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Gujrati/nsd2.5a.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Odiya/nsd2.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsd4_5':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/English/nsd4.5.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Hindi/nsd4.5.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Kannada/nsd4.5.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Gujarati/nsd4.5.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Odiya/nsd4.5.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsd5_5':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/English/nsd5.5aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Hindi/nsd5.5aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Kannada/nsd5.5aK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Gujarati/nsd5.5aG.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd5.5/Odiya/nsd5.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsd6_5a':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/English/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Hindi/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Kannada/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Gujarati/nsd6.5a.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Odiya/nsd6.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
             case 'nsd6_5b':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/English/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Hindi/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Kannada/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Gujarati/nsd6.5b.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Odiya/nsd6.5b.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'pv2_4':  if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/English/NSPVG2.4E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Hindi/NSPVG2.4H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Kannada/NSPVG2.4K.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Gujarati/NSPVG2.4G.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Odiya/NSPVG2.4.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);

		_this.stopDemoVoice();
		if(this.video)
		{
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}
		
		if(this.video1)
		{
			this.video1.destroy();
			this.video1.removeVideoElement();
			this.video1 = null;
		}
		if(this.video2)
		{
			this.video2.destroy();
			this.video2.removeVideoElement();
			this.video2 = null;
		}
		if(this.video3)
		{
			this.video3.destroy();
			this.video3.removeVideoElement();
			this.video3 = null;
		}
		if(this.video4)
		{
			this.video4.destroy();
			this.video4.removeVideoElement();
			this.video4 = null;
		}
		if(this.video5)
		{
			this.video5.destroy();
			this.video5.removeVideoElement();
			this.video5 = null;
		}
		
	}
	
};