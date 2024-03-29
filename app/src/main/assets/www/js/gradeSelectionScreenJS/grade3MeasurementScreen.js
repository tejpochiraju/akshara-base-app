Game.grade3Measurement=function(game){
	
};

Game.grade3Measurement.prototype={

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

		nativeApp.screenViewStringPass("Practice_activity_list","grade3NumberOperation");
		
		
		
		_this = this;

		this.game.input.enabled = false;

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
		 grade3MeasurementSelected = true;

		 grade4MeasurementSelected = false;
		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = false;
		
		this.video = null;
		this.video1 = null;
		this.video2 = null;
		this.video3 = null;
		this.video4 = null;
		this.video5 = null;
		this.video6 = null;
		this.video7 = null;
		this.video8 = null;
		
		//_this.input.enabled = true;
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
			grade3MeasurementSelected = false;
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);
		
		
		_this.grade1FractionGroup = _this.add.group();
		_this.grade1LengthGroup = _this.add.group();
		_this.grade1WeightGroup = _this.add.group();
		_this.grade1TimeGroup = _this.add.group();
		_this.sequenceGroup = _this.add.group();
		_this.PlaceValueGroup = _this.add.group();
		_this.ComparisionOfNumbersGroup = _this.add.group();
		_this.additionwithPlaceValueGroup = _this.add.group();
		_this.SubtractionWithPlaceValueGroup = _this.add.group();
		_this.MultiplicationTableGroup = _this.add.group();
		_this.DivisionWithQuantityGroup = _this.add.group();
		//_this.DivisionPart2Group = _this.add.group();
		
		
		/*_this.addGrade1FractionTopic();
		_this.addGrade1LengthTopic();
		_this.addGrade1WeightTopic();
		_this.addGrade1TimeTopic();
		_this.Sequence();
		_this.PlaceValue();
		_this.ComparisionOfNumbers();
		_this.additionwithPlaceValue();
		_this.SubstractionWithPlaceValue();
		_this.MultiplicationTable();
		_this.DivisionWithQuantity();
		//_this.DivisionPart2();*/

		_this.additionwithPlaceValue();
		_this.SubstractionWithPlaceValue();
		_this.MultiplicationTable();
		_this.DivisionWithQuantity();
		
		/*_this.grade1FractionGroup.x = 0;
		_this.grade1FractionGroup.y = 0;
		
		_this.grade1LengthGroup.x = 0;
		_this.grade1LengthGroup.y = 250;
		
		_this.grade1WeightGroup.x = 0;
		_this.grade1WeightGroup.y = 500;

		_this.grade1TimeGroup.x = 0;
		_this.grade1TimeGroup.y = 750;

		_this.sequenceGroup.x = 0;
		_this.sequenceGroup.y = 1200;

		_this.PlaceValueGroup.x = 0;
		_this.PlaceValueGroup.y = 1850;

		_this.ComparisionOfNumbersGroup.x = 0;
		_this.ComparisionOfNumbersGroup.y = 2100;

		_this.additionwithPlaceValueGroup.x = 0;
		_this.additionwithPlaceValueGroup.y = 2350;
		//_this.additionwithPlaceValueGroup.y = 1650;

		_this.SubtractionWithPlaceValueGroup.x = 0;
		_this.SubtractionWithPlaceValueGroup.y = 2600;
		//_this.SubtractionWithPlaceValueGroup.y = 1900;

		_this.MultiplicationTableGroup.x = 0;
		_this.MultiplicationTableGroup.y = 2850;
		

		_this.DivisionWithQuantityGroup.x = 0;
		_this.DivisionWithQuantityGroup.y = 3100;

		//_this.DivisionPart2Group.x = 0;
		//_this.DivisionPart2Group.y = 3150;*/

		_this.additionwithPlaceValueGroup.x = 0;
		_this.additionwithPlaceValueGroup.y = 0;
		//_this.additionwithPlaceValueGroup.y = 1650;

		_this.SubtractionWithPlaceValueGroup.x = 0;
		_this.SubtractionWithPlaceValueGroup.y = 250;
		//_this.SubtractionWithPlaceValueGroup.y = 1900;

		_this.MultiplicationTableGroup.x = 0;
		_this.MultiplicationTableGroup.y = 500;
		

		_this.DivisionWithQuantityGroup.x = 0;
		_this.DivisionWithQuantityGroup.y = 950;
		
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xA24098, 0);
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
		
	
		_this.graphicsBg.addChild(_this.grade1FractionGroup);
		_this.graphicsBg.addChild(_this.grade1LengthGroup);
		_this.graphicsBg.addChild(_this.grade1WeightGroup);
		_this.graphicsBg.addChild(_this.grade1TimeGroup);
		_this.graphicsBg.addChild(_this.sequenceGroup);
		_this.graphicsBg.addChild(_this.PlaceValueGroup);
		_this.graphicsBg.addChild(_this.ComparisionOfNumbersGroup);
		_this.graphicsBg.addChild(_this.additionwithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.SubtractionWithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.MultiplicationTableGroup);
		_this.graphicsBg.addChild(_this.DivisionWithQuantityGroup);
		//_this.graphicsBg.addChild(_this.DivisionPart2Group);
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });

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
						if(_this.graphicsBg.y<=-920)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -920;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-920)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -920;
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
					else if(_this.graphicsBg.y<=-920)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -920;
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
						else if(_this.graphicsBg.y<=-920)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -920;
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




		if(gradeScreen)
		{
			_this.graphicsBg.y = -920;

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
		}
	},
	
	
	addGrade1FractionTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'fractionsTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.fractionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.fractions1_1AScreen = _this.add.sprite(100,120,'fractions1_1AScreen');
		//_this.fractions1_1AScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_1AScreenTxt.anchor.setTo(0.5);

		_this.fractions1_1AScreenTxt = this.add.text(175, 255, ' \n '+window.selctedLang.fraction1_1ADesc+' \n ');
		_this.fractions1_1AScreenTxt.anchor.setTo(0.5);
		_this.fractions1_1AScreenTxt.align = 'center';
		
				
		_this.fractions1_1AScreenTxt.font = 'gradefont';
		_this.fractions1_1AScreenTxt.fontSize = 20;
		_this.fractions1_1AScreenTxt.fontWeight = 'normal';
		_this.fractions1_1AScreenTxt.fill = 'white';

		_this.fractions1_1AScreenTxt.wordWrap = true;
		_this.fractions1_1AScreenTxt.wordWrapWidth = 500;
		//_this.fractions1_1AScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_1AScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_1AScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.fractions1_1AScreen.inputEnabled = true;
		_this.fractions1_1AScreen.input.useHandCursor = true;
		_this.fractions1_1AScreen.name = "Fractions 1.1 A";
		_this.fractions1_1AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_1Alevel1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			//_this.topicTitleText.frame = 1;
			//_this.fractions1_1AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			//_this.topicTitleText.frame = 2;
			//_this.fractions1_1AScreenTxt.frame = 2;
		}
		else
		{
			//_this.topicTitleText.frame = 0;
			//_this.fractions1_1AScreenTxt.frame = 0;
		}
		
		
		
		
		_this.grade1FractionGroup.add(_this.topicTxtBg);
		_this.grade1FractionGroup.add(_this.topicTitleText);
		_this.grade1FractionGroup.add(_this.topicBg);
		_this.grade1FractionGroup.add(_this.fractions1_1AScreen);
		_this.grade1FractionGroup.add(_this.fractions1_1AScreenTxt);
		
	},
	
	addGrade1LengthTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(215,83,'lengthTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.lengthTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.length2_1AScreen = _this.add.sprite(100,120,'length2_1AScreen');
		//_this.length2_1AScreenTxt = _this.add.sprite(175, 250, 'length2_1A');
		//_this.length2_1AScreenTxt.anchor.setTo(0.5);
		_this.length2_1AScreenTxt = this.add.text(175, 255, ' \n '+window.selctedLang.length2_ADesc+' \n ');
		_this.length2_1AScreenTxt.anchor.setTo(0.5);
		_this.length2_1AScreenTxt.align = 'center';
		
				
		_this.length2_1AScreenTxt.font = 'gradefont';
		_this.length2_1AScreenTxt.fontSize = 20;
		_this.length2_1AScreenTxt.fontWeight = 'normal';
		_this.length2_1AScreenTxt.fill = 'white';

		_this.length2_1AScreenTxt.wordWrap = true;
		_this.length2_1AScreenTxt.wordWrapWidth = 500;
		//_this.length2_1AScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_1AScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_1AScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.length2_1AScreen.inputEnabled = true;
		_this.length2_1AScreen.name = "Length 2.1 A";
		_this.length2_1AScreen.input.useHandCursor = true;
		_this.length2_1AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_1BScreen = _this.add.sprite(300,120,'length2_1BScreen');
		//_this.length2_1BScreenTxt = _this.add.sprite(375, 250, 'length2_1B');
		//_this.length2_1BScreenTxt.anchor.setTo(0.5);
		_this.length2_1BScreenTxt = this.add.text(375, 255, ' \n '+window.selctedLang.length2_BDesc+' \n ');
		_this.length2_1BScreenTxt.anchor.setTo(0.5);
		_this.length2_1BScreenTxt.align = 'center';
		
				
		_this.length2_1BScreenTxt.font = 'gradefont';
		_this.length2_1BScreenTxt.fontSize = 20;
		_this.length2_1BScreenTxt.fontWeight = 'normal';
		_this.length2_1BScreenTxt.fill = 'white';

		_this.length2_1BScreenTxt.wordWrap = true;
		_this.length2_1BScreenTxt.wordWrapWidth = 500;
		//_this.length2_1BScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_1BScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_1BScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.length2_1BScreen.inputEnabled = true;
		_this.length2_1BScreen.input.useHandCursor = true;
		_this.length2_1BScreen.name = "Length 2.1 B";
		_this.length2_1BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_2Screen = _this.add.sprite(500,120,'length2_2Screen');
		//_this.length2_2ScreenTxt = _this.add.sprite(575, 250, 'length2_2');
		//_this.length2_2ScreenTxt.anchor.setTo(0.5);

		_this.length2_2ScreenTxt = this.add.text(575, 255, ' \n '+window.selctedLang.length2_2Desc+' \n ');
		_this.length2_2ScreenTxt.anchor.setTo(0.5);
		_this.length2_2ScreenTxt.align = 'center';
		
				
		_this.length2_2ScreenTxt.font = 'gradefont';
		_this.length2_2ScreenTxt.fontSize = 20;
		_this.length2_2ScreenTxt.fontWeight = 'normal';
		_this.length2_2ScreenTxt.fill = 'white';

		_this.length2_2ScreenTxt.wordWrap = true;
		_this.length2_2ScreenTxt.wordWrapWidth = 500;
		//_this.length2_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.length2_2Screen.inputEnabled = true;
		_this.length2_2Screen.name = "Length 2.2";
		_this.length2_2Screen.input.useHandCursor = true;
		_this.length2_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_2level1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_3Screen = _this.add.sprite(700,115,'game2.3ScreenShot');
		//_this.length2_3ScreenTxt = _this.add.sprite(775, 250, 'length2_3');
		//_this.length2_3ScreenTxt.anchor.setTo(0.5);

		_this.length2_3ScreenTxt = this.add.text(775, 255, ' \n '+window.selctedLang.length2_3Desc+' \n ');
		_this.length2_3ScreenTxt.anchor.setTo(0.5);
		_this.length2_3ScreenTxt.align = 'center';
		
				
		_this.length2_3ScreenTxt.font = 'gradefont';
		_this.length2_3ScreenTxt.fontSize = 20;
		_this.length2_3ScreenTxt.fontWeight = 'normal';
		_this.length2_3ScreenTxt.fill = 'white';

		_this.length2_3ScreenTxt.wordWrap = true;
		_this.length2_3ScreenTxt.wordWrapWidth = 500;
		//_this.length2_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.length2_3Screen.inputEnabled = true;
		_this.length2_3Screen.name = "Length 2.3";
		_this.length2_3Screen.input.useHandCursor = true;
		_this.length2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){

				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_3level1',true,false);
				}
			},_this);
		},_this);
		


		if(window.languageSelected=="Hindi")
		{
			/*_this.topicTitleText.frame = 1;
			_this.length2_1AScreenTxt.frame = 1;
			_this.length2_1BScreenTxt.frame = 1;
			_this.length2_2ScreenTxt.frame = 1;
			_this.length2_3ScreenTxt.frame = 1;*/
		}
		else if(window.languageSelected=="Kannada")
		{
			/*_this.topicTitleText.frame = 2;
			_this.length2_1AScreenTxt.frame = 2;
			_this.length2_1BScreenTxt.frame = 2;
			_this.length2_2ScreenTxt.frame = 2;
			_this.length2_3ScreenTxt.frame = 2;*/
		}
		else
		{
			/*_this.topicTitleText.frame = 0;
			_this.length2_1AScreenTxt.frame = 0;
			_this.length2_1BScreenTxt.frame = 0;
			_this.length2_2ScreenTxt.frame = 0;
			_this.length2_3ScreenTxt.frame = 0;*/
		}
		
		
		
		_this.grade1LengthGroup.add(_this.topicTxtBg);
		_this.grade1LengthGroup.add(_this.topicTitleText);
		_this.grade1LengthGroup.add(_this.topicBg);
		_this.grade1LengthGroup.add(_this.length2_1AScreen);
		_this.grade1LengthGroup.add(_this.length2_1AScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_1BScreen);
		_this.grade1LengthGroup.add(_this.length2_1BScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_2Screen);
		_this.grade1LengthGroup.add(_this.length2_2ScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_3Screen);
		_this.grade1LengthGroup.add(_this.length2_3ScreenTxt);
		
		
	},
	
	addGrade1WeightTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.weightTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		//_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		//_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		_this.weight3_1ScreenTxt = this.add.text(175, 260, ' \n '+window.selctedLang.weight3_1Desc+' \n ');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		_this.weight3_1ScreenTxt.align = 'center';
		
				
		_this.weight3_1ScreenTxt.font = 'gradefont';
		_this.weight3_1ScreenTxt.fontSize = 20;
		_this.weight3_1ScreenTxt.fontWeight = 'normal';
		_this.weight3_1ScreenTxt.fill = 'white';

		_this.weight3_1ScreenTxt.wordWrap = true;
		_this.weight3_1ScreenTxt.wordWrapWidth = 500;
		//_this.weight3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		//_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		//_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		_this.weight3_2AScreenTxt = this.add.text(380, 260, ' \n '+window.selctedLang.weight3_2ADesc+' \n ');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		_this.weight3_2AScreenTxt.align = 'center';
		
				
		_this.weight3_2AScreenTxt.font = 'gradefont';
		_this.weight3_2AScreenTxt.fontSize = 20;
		_this.weight3_2AScreenTxt.fontWeight = 'normal';
		_this.weight3_2AScreenTxt.fill = 'white';

		_this.weight3_2AScreenTxt.wordWrap = true;
		_this.weight3_2AScreenTxt.wordWrapWidth = 500;
		//_this.weight3_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			//_this.topicTitleText.frame = 1;
			//_this.weight3_1ScreenTxt.frame = 1;
			//_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			//_this.topicTitleText.frame = 2;
			//_this.weight3_1ScreenTxt.frame = 2;
			//_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			//_this.topicTitleText.frame = 0;
			//_this.weight3_1ScreenTxt.frame = 0;
			//_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1WeightGroup.add(_this.topicTxtBg);
		_this.grade1WeightGroup.add(_this.topicTitleText);
		_this.grade1WeightGroup.add(_this.topicBg);
		_this.grade1WeightGroup.add(_this.weight3_1Screen);
		_this.grade1WeightGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1WeightGroup.add(_this.weight3_2AScreen);
		_this.grade1WeightGroup.add(_this.weight3_2AScreenTxt);
		
	},

	addGrade1TimeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200,83,'timeTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.timeTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.time5_1Screen = _this.add.sprite(100,120,'time5_1Screen');
		//_this.time5_1ScreenTxt = _this.add.sprite(175, 255, 'time5_1');
		//_this.time5_1ScreenTxt.anchor.setTo(0.5);
		_this.time5_1ScreenTxt = this.add.text(175, 255, ' \n '+window.selctedLang.time5_1Desc+' \n ');
		_this.time5_1ScreenTxt.anchor.setTo(0.5);
		_this.time5_1ScreenTxt.align = 'center';
		
				
		_this.time5_1ScreenTxt.font = 'gradefont';
		_this.time5_1ScreenTxt.fontSize = 20;
		_this.time5_1ScreenTxt.fontWeight = 'normal';
		_this.time5_1ScreenTxt.fill = 'white';

		_this.time5_1ScreenTxt.wordWrap = true;
		_this.time5_1ScreenTxt.wordWrapWidth = 500;
		//_this.time5_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time5_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.time5_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time5_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time5_1Screen.inputEnabled = true;
		_this.time5_1Screen.input.useHandCursor = true;
		_this.time5_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.time5_2Screen = _this.add.sprite(300,120,'time5_2Screen');
		//_this.time5_2ScreenTxt = _this.add.sprite(375, 255, 'time5_2');
		//_this.time5_2ScreenTxt.anchor.setTo(0.5);
		_this.time5_2ScreenTxt = this.add.text(375, 255, ' \n '+window.selctedLang.time5_2Desc+' \n ');
		_this.time5_2ScreenTxt.anchor.setTo(0.5);
		_this.time5_2ScreenTxt.align = 'center';
		
				
		_this.time5_2ScreenTxt.font = 'gradefont';
		_this.time5_2ScreenTxt.fontSize = 20;
		_this.time5_2ScreenTxt.fontWeight = 'normal';
		_this.time5_2ScreenTxt.fill = 'white';

		_this.time5_2ScreenTxt.wordWrap = true;
		_this.time5_2ScreenTxt.wordWrapWidth = 500;
		//_this.time5_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time5_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.time5_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time5_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time5_2Screen.inputEnabled = true;
		_this.time5_2Screen.input.useHandCursor = true;
		_this.time5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_2level1',true,false);
				}
			},_this);
		},_this);

		_this.time5_4Screen = _this.add.sprite(500,120,'time5_4Screen');
		//_this.time5_4ScreenTxt = _this.add.sprite(575, 255, 'time5_4');
		//_this.time5_4ScreenTxt.anchor.setTo(0.5);
		_this.time5_4ScreenTxt = this.add.text(575, 255, ' \n '+window.selctedLang.time5_4Desc+' \n ');
		_this.time5_4ScreenTxt.anchor.setTo(0.5);
		_this.time5_4ScreenTxt.align = 'center';
		
				
		_this.time5_4ScreenTxt.font = 'gradefont';
		_this.time5_4ScreenTxt.fontSize = 20;
		_this.time5_4ScreenTxt.fontWeight = 'normal';
		_this.time5_4ScreenTxt.fill = 'white';

		_this.time5_4ScreenTxt.wordWrap = true;
		_this.time5_4ScreenTxt.wordWrapWidth = 500;
		//_this.time5_4ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time5_4ScreenTxt.padding.set(50, 50);
		
		
		//_this.time5_4ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time5_4ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time5_4Screen.inputEnabled = true;
		_this.time5_4Screen.input.useHandCursor = true;
		_this.time5_4Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_4level1',true,false);
				}
			},_this);
		},_this);

		_this.time6_1Screen = _this.add.sprite(700,120,'time6_1Screen');
		//_this.time6_1ScreenTxt = _this.add.sprite(775, 255, 'time6_1');
		//_this.time6_1ScreenTxt.anchor.setTo(0.5);
		_this.time6_1ScreenTxt = this.add.text(775, 255, ' \n '+window.selctedLang.time6_1Desc+' \n ');
		_this.time6_1ScreenTxt.anchor.setTo(0.5);
		_this.time6_1ScreenTxt.align = 'center';
		
				
		_this.time6_1ScreenTxt.font = 'gradefont';
		_this.time6_1ScreenTxt.fontSize = 20;
		_this.time6_1ScreenTxt.fontWeight = 'normal';
		_this.time6_1ScreenTxt.fill = 'white';

		_this.time6_1ScreenTxt.wordWrap = true;
		_this.time6_1ScreenTxt.wordWrapWidth = 500;
		//_this.time6_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time6_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.time6_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time6_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time6_1Screen.inputEnabled = true;
		_this.time6_1Screen.input.useHandCursor = true;
		_this.time6_1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade6_1level1',true,false);
				}
			},_this);
		},_this);

		_this.time6_2Screen = _this.add.sprite(100,320,'time6_2Screen');
		//_this.time6_2ScreenTxt = _this.add.sprite(175, 450, 'time6_2');
		//_this.time6_2ScreenTxt.anchor.setTo(0.5);
		_this.time6_2ScreenTxt = this.add.text(175, 450, ' \n '+window.selctedLang.time6_2Desc+' \n ');
		_this.time6_2ScreenTxt.anchor.setTo(0.5);
		_this.time6_2ScreenTxt.align = 'center';
		
				
		_this.time6_2ScreenTxt.font = 'gradefont';
		_this.time6_2ScreenTxt.fontSize = 20;
		_this.time6_2ScreenTxt.fontWeight = 'normal';
		_this.time6_2ScreenTxt.fill = 'white';

		_this.time6_2ScreenTxt.wordWrap = true;
		_this.time6_2ScreenTxt.wordWrapWidth = 500;
		//_this.time6_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time6_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.time6_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time6_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time6_2Screen.inputEnabled = true;
		_this.time6_2Screen.input.useHandCursor = true;
		_this.time6_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade6_2level1',true,false);
				}
			},_this);
		},_this);
		


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.time5_1ScreenTxt.frame = 1;
			_this.time5_2ScreenTxt.frame = 1;
			_this.time5_4ScreenTxt.frame = 1;
			_this.time6_1ScreenTxt.frame = 1;
			_this.time6_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.time5_1ScreenTxt.frame = 2;
			_this.time5_2ScreenTxt.frame = 2;
			_this.time5_4ScreenTxt.frame = 2;
			_this.time6_1ScreenTxt.frame = 2;
			_this.time6_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.time5_1ScreenTxt.frame = 0;
			_this.time5_2ScreenTxt.frame = 0;
			_this.time5_4ScreenTxt.frame = 0;
			_this.time6_1ScreenTxt.frame = 0;
			_this.time6_2ScreenTxt.frame = 0;
		}*/
		
		
		_this.grade1TimeGroup.add(_this.topicTxtBg);
		_this.grade1TimeGroup.add(_this.topicTitleText);
		_this.grade1TimeGroup.add(_this.topicBg);
		_this.grade1TimeGroup.add(_this.time5_1Screen);
		_this.grade1TimeGroup.add(_this.time5_1ScreenTxt);
		_this.grade1TimeGroup.add(_this.time5_2Screen);
		_this.grade1TimeGroup.add(_this.time5_2ScreenTxt);
		_this.grade1TimeGroup.add(_this.time5_4Screen);
		_this.grade1TimeGroup.add(_this.time5_4ScreenTxt);
		_this.grade1TimeGroup.add(_this.time6_1Screen);
		_this.grade1TimeGroup.add(_this.time6_1ScreenTxt);
		_this.grade1TimeGroup.add(_this.time6_2Screen);
		_this.grade1TimeGroup.add(_this.time6_2ScreenTxt);
		
	},

	Sequence:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'sequence');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.sequenceTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,600,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.Caterpillar2_1_2Screen  = _this.add.sprite(100,120,'unity2_1_1Screen');
		//_this.Caterpillar2_1_2ScreenTxt = _this.add.sprite(175,255,'Mr. Caterpillar 2.1.2');
		//_this.Caterpillar2_1_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.Caterpillar2_1_2ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.MrCaterpillar2_1_2+' \n ');
		_this.Caterpillar2_1_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_1_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_1_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_1_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_1_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_1_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_1_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_1_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_1_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_1_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_1_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_1_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_1_2Screen.inputEnabled = true;
		_this.Caterpillar2_1_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_1_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_1_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_1",1);
					
					_this.state.start('unity2_1_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_2_2Screen = _this.add.sprite(300,120,'unity2_2_1Screen');
		//_this.Caterpillar2_2_2ScreenTxt = _this.add.sprite(375,255,'Mr. Caterpillar 2.2.2');
		//_this.Caterpillar2_2_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;


		_this.Caterpillar2_2_2ScreenTxt = this.add.text(425, 192, ' \n '+window.selctedLang.MrCaterpillar2_2_2+' \n ');
		_this.Caterpillar2_2_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_2_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_2_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_2_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_2_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_2_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_2_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_2_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_2_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_2_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_2_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_2_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_2_2Screen.inputEnabled = true;
		_this.Caterpillar2_2_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_2_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_2_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_2",1);

					_this.state.start('unity2_2_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_3_2Screen = _this.add.sprite(500,120,'unity2_3_1Screen');
		//_this.Caterpillar2_3_2ScreenTxt = _this.add.sprite(575,255,'Mr. Caterpillar 2.3.2');
		//_this.Caterpillar2_3_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;


		_this.Caterpillar2_3_2ScreenTxt = this.add.text(625, 192, ' \n '+window.selctedLang.MrCaterpillar2_3_2+' \n ');
		_this.Caterpillar2_3_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_3_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_3_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_3_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_3_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_3_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_3_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_3_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_3_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_3_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_3_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_3_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_3_2Screen.inputEnabled = true;
		_this.Caterpillar2_3_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_3_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_3_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity2_3_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_4_2Screen = _this.add.sprite(700,120,'unity2_4_1Screen');
		//_this.Caterpillar2_4_2ScreenTxt = _this.add.sprite(775,255,'Mr. Caterpillar 2.4.2');
		//_this.Caterpillar2_4_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;


		_this.Caterpillar2_4_2ScreenTxt = this.add.text(825, 192, ' \n '+window.selctedLang.MrCaterpillar2_4_2+' \n ');
		_this.Caterpillar2_4_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_4_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_4_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_4_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_4_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_4_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_4_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_4_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_4_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_4_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_4_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_4_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_4_2Screen.inputEnabled = true;
		_this.Caterpillar2_4_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_4_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_4_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity2_4_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_5_2Screen = _this.add.sprite(100,320,'unity2_5_1');
		//_this.Caterpillar2_5_2ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.2');
		//_this.Caterpillar2_5_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.Caterpillar2_5_2ScreenTxt = this.add.text(225, 392, ' \n '+window.selctedLang.MrCaterpillar2_5_2+' \n ');
		_this.Caterpillar2_5_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_5_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_5_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_5_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_5_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_5_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_5_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_5_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_5_2Screen.inputEnabled = true;
		_this.Caterpillar2_5_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_5_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_5_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.NumberPuzzle2_6_2Screen = _this.add.sprite(300,320,'unity2_6_1');
		//_this.NumberPuzzle2_6_2ScreenTxt = _this.add.sprite(370,455,'Number Puzzle 2.6.2');
		//_this.NumberPuzzle2_6_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;


		_this.NumberPuzzle2_6_2ScreenTxt = this.add.text(425, 392, ' \n '+window.selctedLang.NumberPuzzle2_6_2+' \n ');
		_this.NumberPuzzle2_6_2ScreenTxt.anchor.setTo(0.5);
		_this.NumberPuzzle2_6_2ScreenTxt.align = 'center';
		
				
		_this.NumberPuzzle2_6_2ScreenTxt.font = 'gradefont';
		_this.NumberPuzzle2_6_2ScreenTxt.fontSize = 20;
		_this.NumberPuzzle2_6_2ScreenTxt.fontWeight = 'normal';
		_this.NumberPuzzle2_6_2ScreenTxt.fill = 'white';

		_this.NumberPuzzle2_6_2ScreenTxt.wordWrap = true;
		_this.NumberPuzzle2_6_2ScreenTxt.wordWrapWidth = 500;
		//_this.NumberPuzzle2_6_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.NumberPuzzle2_6_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.NumberPuzzle2_6_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.NumberPuzzle2_6_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.NumberPuzzle2_6_2Screen.inputEnabled = true;
		_this.NumberPuzzle2_6_2Screen.input.useHandCursor = true;
		_this.NumberPuzzle2_6_2Screen.name = "Fractions 1.1 A";
		_this.NumberPuzzle2_6_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_6",1);
					
					_this.state.start('unity2_6_2level1',true,false);
				}
			},_this);
			
		},_this);







		_this.Caterpillar2_1_2aScreen  = _this.add.sprite(500,320,'unity2_1_1aScreen');
		//_this.Caterpillar2_1_1ScreenTxt = _this.add.sprite(175,255,'Mr. Caterpillar 2.1.1');
		//_this.Caterpillar2_1_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic7 = this.add.graphics(610,375);
		_this.bgGraphic7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic7.beginFill(0x493A19, 1);
		_this.bgGraphic7.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic7.boundsPadding = 0;

		_this.Caterpillar2_1_2aScreenTxt = this.add.text(625, 392, '7');
		_this.Caterpillar2_1_2aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_1_2aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_1_2aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_1_2aScreenTxt.fontSize = 20;
		_this.Caterpillar2_1_2aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_1_2aScreenTxt.fill = 'white';

		_this.Caterpillar2_1_2aScreenTxt.wordWrap = true;
		_this.Caterpillar2_1_2aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_1_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_1_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_1_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_1_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_1_2aScreen.inputEnabled = true;
		_this.Caterpillar2_1_2aScreen.input.useHandCursor = true;
		_this.Caterpillar2_1_2aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_1_2aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_1",1);
					
					_this.state.start('unity2_1_2alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_2_2aScreen = _this.add.sprite(700,320,'unity2_2_1aScreen');
		//_this.Caterpillar2_2_1ScreenTxt = _this.add.sprite(375,255,'Mr. Caterpillar 2.2.1');
		//_this.Caterpillar2_2_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic8 = this.add.graphics(810,375);
		_this.bgGraphic8.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic8.beginFill(0x493A19, 1);
		_this.bgGraphic8.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic8.boundsPadding = 0;

		_this.Caterpillar2_2_2aScreenTxt = this.add.text(825, 392, '8');
		_this.Caterpillar2_2_2aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_2_2aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_2_2aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_2_2aScreenTxt.fontSize = 20;
		_this.Caterpillar2_2_2aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_2_2aScreenTxt.fill = 'white';

		_this.Caterpillar2_2_2aScreenTxt.wordWrap = true;
		_this.Caterpillar2_2_2aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_2_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_2_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_2_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_2_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_2_2aScreen.inputEnabled = true;
		_this.Caterpillar2_2_2aScreen.input.useHandCursor = true;
		_this.Caterpillar2_2_2aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_2_2aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_2",1);

					_this.state.start('unity2_2_2alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_3_2aScreen = _this.add.sprite(100,920,'unity2_3_1aScreen');
		//_this.Caterpillar2_3_1ScreenTxt = _this.add.sprite(575,255,'Mr. Caterpillar 2.3.1');
		//_this.Caterpillar2_3_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic9 = this.add.graphics(210,575);
		_this.bgGraphic9.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic9.beginFill(0x493A19, 1);
		_this.bgGraphic9.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic9.boundsPadding = 0;

		_this.Caterpillar2_3_2aScreenTxt = this.add.text(225, 592, '9');
		_this.Caterpillar2_3_2aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_3_2aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_3_2aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_3_2aScreenTxt.fontSize = 20;
		_this.Caterpillar2_3_2aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_3_2aScreenTxt.fill = 'white';

		_this.Caterpillar2_3_2aScreenTxt.wordWrap = true;
		_this.Caterpillar2_3_2aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_3_2aScreen.inputEnabled = true;
		_this.Caterpillar2_3_2aScreen.input.useHandCursor = true;
		_this.Caterpillar2_3_2aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_3_2aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity2_3_2alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_4_2aScreen = _this.add.sprite(300,920,'unity2_4_1aScreen');
		//_this.Caterpillar2_4_1ScreenTxt = _this.add.sprite(775,255,'Mr. Caterpillar 2.4.1');
		//_this.Caterpillar2_4_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic10 = this.add.graphics(410,575);
		_this.bgGraphic10.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic10.beginFill(0x493A19, 1);
		_this.bgGraphic10.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic10.boundsPadding = 0;

		_this.Caterpillar2_4_2aScreenTxt = this.add.text(425, 592, '10');
		_this.Caterpillar2_4_2aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_4_2aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_4_2aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_4_2aScreenTxt.fontSize = 20;
		_this.Caterpillar2_4_2aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_4_2aScreenTxt.fill = 'white';

		_this.Caterpillar2_4_2aScreenTxt.wordWrap = true;
		_this.Caterpillar2_4_2aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_4_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_4_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_4_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_4_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_4_2aScreen.inputEnabled = true;
		_this.Caterpillar2_4_2aScreen.input.useHandCursor = true;
		_this.Caterpillar2_4_2aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_4_2aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity2_4_2alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_5_2aScreen = _this.add.sprite(500,920,'unity2_5_1a');
		//_this.Caterpillar2_5_1ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.1');
		//_this.Caterpillar2_5_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic11 = this.add.graphics(610,575);
		_this.bgGraphic11.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic11.beginFill(0x493A19, 1);
		_this.bgGraphic11.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic11.boundsPadding = 0;

		_this.Caterpillar2_5_2aScreenTxt = this.add.text(625, 592, '11');
		_this.Caterpillar2_5_2aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_5_2aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_5_2aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_5_2aScreenTxt.fontSize = 20;
		_this.Caterpillar2_5_2aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_5_2aScreenTxt.fill = 'white';

		_this.Caterpillar2_5_2aScreenTxt.wordWrap = true;
		_this.Caterpillar2_5_2aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_5_2aScreen.inputEnabled = true;
		_this.Caterpillar2_5_2aScreen.input.useHandCursor = true;
		_this.Caterpillar2_5_2aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_5_2aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_5_2alevel1',true,false);
				}
			},_this);
			
		},_this);





		/*	if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.Caterpillar2_1_2ScreenTxt.frame = 1;
			_this.Caterpillar2_2_2ScreenTxt.frame = 1;
			_this.Caterpillar2_3_2ScreenTxt.frame = 1;
			_this.Caterpillar2_4_2ScreenTxt.frame = 1;
			_this.Caterpillar2_5_2ScreenTxt.frame = 1;
			_this.NumberPuzzle2_6_2ScreenTxt.frame = 1;
			
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.Caterpillar2_1_2ScreenTxt.frame = 2;
			_this.Caterpillar2_2_2ScreenTxt.frame = 2;
			_this.Caterpillar2_3_2ScreenTxt.frame = 2;
			_this.Caterpillar2_4_2ScreenTxt.frame = 2;
			_this.Caterpillar2_5_2ScreenTxt.frame = 2;
			_this.NumberPuzzle2_6_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.Caterpillar2_1_2ScreenTxt.frame = 0;
			_this.Caterpillar2_2_2ScreenTxt.frame = 0;
			_this.Caterpillar2_3_2ScreenTxt.frame = 0;
			_this.Caterpillar2_4_2ScreenTxt.frame = 0;
			_this.Caterpillar2_5_2ScreenTxt.frame = 0;
			_this.NumberPuzzle2_6_2ScreenTxt.frame = 0;
		}
		*/
		
		
		
		_this.sequenceGroup.add(_this.topicTxtBg);
		_this.sequenceGroup.add(_this.topicTitleText);
		_this.sequenceGroup.add(_this.topicBg);

		_this.sequenceGroup.add(_this.Caterpillar2_1_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic1);
		_this.sequenceGroup.add(_this.Caterpillar2_1_2ScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_2_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic2);
		_this.sequenceGroup.add(_this.Caterpillar2_2_2ScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_3_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic3);
		_this.sequenceGroup.add(_this.Caterpillar2_3_2ScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_4_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic4);
		_this.sequenceGroup.add(_this.Caterpillar2_4_2ScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_5_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic5);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2ScreenTxt);

		_this.sequenceGroup.add(_this.NumberPuzzle2_6_2Screen);
		_this.sequenceGroup.add(_this.bgGraphic6);
		_this.sequenceGroup.add(_this.NumberPuzzle2_6_2ScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_1_2aScreen);
		_this.sequenceGroup.add(_this.bgGraphic7);
		_this.sequenceGroup.add(_this.Caterpillar2_1_2aScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_2_2aScreen);
		_this.sequenceGroup.add(_this.bgGraphic8);
		_this.sequenceGroup.add(_this.Caterpillar2_2_2aScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_3_2aScreen);
		_this.sequenceGroup.add(_this.bgGraphic9);
		_this.sequenceGroup.add(_this.Caterpillar2_3_2aScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_4_2aScreen);
		_this.sequenceGroup.add(_this.bgGraphic10);
		_this.sequenceGroup.add(_this.Caterpillar2_4_2aScreenTxt);

		_this.sequenceGroup.add(_this.Caterpillar2_5_2aScreen);
		_this.sequenceGroup.add(_this.bgGraphic11);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2aScreenTxt);

		
	},

	PlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,175,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'PLACE VALUE');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.placeValueTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.placeValue3_1_1Screen = _this.add.sprite(100,120,'unity3.1.1');
		//_this.placeValue3_1_1ScreenTxt = _this.add.sprite(165,255,'Coin Machine 3.1.1');
		//_this.placeValue3_1_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.placeValue3_1_1ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.CoinMachine3_1_1+' \n ');
		_this.placeValue3_1_1ScreenTxt.anchor.setTo(0.5);
		_this.placeValue3_1_1ScreenTxt.align = 'center';
		
				
		_this.placeValue3_1_1ScreenTxt.font = 'gradefont';
		_this.placeValue3_1_1ScreenTxt.fontSize = 20;
		_this.placeValue3_1_1ScreenTxt.fontWeight = 'normal';
		_this.placeValue3_1_1ScreenTxt.fill = 'white';

		_this.placeValue3_1_1ScreenTxt.wordWrap = true;
		_this.placeValue3_1_1ScreenTxt.wordWrapWidth = 500;
		//_this.placeValue3_1_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.placeValue3_1_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.placeValue3_1_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.placeValue3_1_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.placeValue3_1_1Screen.inputEnabled = true;
		_this.placeValue3_1_1Screen.input.useHandCursor = true;
		_this.placeValue3_1_1Screen.name = "Fractions 1.1 A";
		_this.placeValue3_1_1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity3_1_1level1',true,false);
				}
			},_this);
			
		},_this);

		_this.placeValue3_2_1Screen = _this.add.sprite(300,120,'unity3.1.2');
		//_this.placeValue3_2_1ScreenTxt = _this.add.sprite(365,255,'Coin Machine 3.2.1');
		//_this.placeValue3_2_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;


		_this.placeValue3_2_1ScreenTxt = this.add.text(425, 192, ' \n '+window.selctedLang.CoinMachine3_2_1+' \n ');
		_this.placeValue3_2_1ScreenTxt.anchor.setTo(0.5);
		_this.placeValue3_2_1ScreenTxt.align = 'center';
		
				
		_this.placeValue3_2_1ScreenTxt.font = 'gradefont';
		_this.placeValue3_2_1ScreenTxt.fontSize = 20;
		_this.placeValue3_2_1ScreenTxt.fontWeight = 'normal';
		_this.placeValue3_2_1ScreenTxt.fill = 'white';

		_this.placeValue3_2_1ScreenTxt.wordWrap = true;
		_this.placeValue3_2_1ScreenTxt.wordWrapWidth = 500;
		//_this.placeValue3_2_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.placeValue3_2_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.placeValue3_2_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.placeValue3_2_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.placeValue3_2_1Screen.inputEnabled = true;
		_this.placeValue3_2_1Screen.input.useHandCursor = true;
		_this.placeValue3_2_1Screen.name = "Fractions 1.1 A";
		_this.placeValue3_2_1Screen.events.onInputDown.add(function(target){

			if(this.video==null)
			{
				this.video = this.add.video('demo7_1_1');
				//this.video.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					this.video.changeSource(window.baseUrl+"assets/demoVideos/3_2_1.mp4");
					this.video.addToWorld();
					this.video.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('3_2_1a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity3_2_1level1',true,false);		
							},_this);
					},_this);
					}
					else
					{
						this.video.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('3_2_1a');
							_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity3_2_1level1',true,false);			
								},_this);
							_this.time.events.add(12000, function(){
								_this.playDemoVideos('3_2_1b');
						
							},_this);
						},_this);
					}
					/***********************************************************/
					

					//this.video.play(false);
					this.video.onComplete.add(function(){
					
					this.game.input.enabled = true;
					_this.state.start('unity3_2_1level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.placeValue3_1_1ScreenTxt.frame = 1;
			_this.placeValue3_2_1ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.placeValue3_1_1ScreenTxt.frame = 2;
			_this.placeValue3_2_1ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.placeValue3_1_1ScreenTxt.frame = 0;
			_this.placeValue3_2_1ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.PlaceValueGroup.add(_this.topicTxtBg);
		_this.PlaceValueGroup.add(_this.topicTitleText);
		_this.PlaceValueGroup.add(_this.topicBg);

		_this.PlaceValueGroup.add(_this.placeValue3_1_1Screen);
		_this.PlaceValueGroup.add(_this.bgGraphic1);
		_this.PlaceValueGroup.add(_this.placeValue3_1_1ScreenTxt);

		_this.PlaceValueGroup.add(_this.placeValue3_2_1Screen);
		_this.PlaceValueGroup.add(_this.bgGraphic2);
		_this.PlaceValueGroup.add(_this.placeValue3_2_1ScreenTxt);
		
	},

	ComparisionOfNumbers:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,230,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'NUMBERS');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(215, 85, ' \n '+window.selctedLang.ComparisionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		

		/*_this.TheCrocodile4_3_2Screen = _this.add.sprite(100,120,'unity1.3');
		//_this.CountingFish1_3ScreenTxt = _this.add.sprite(570,255,'Counting fish 1.3');
		//_this.CountingFish1_3ScreenTxt.anchor.setTo(0.5);

		_this.TheCrocodile4_3_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.TheCrocodile4_3_2+' \n ');
		_this.TheCrocodile4_3_2ScreenTxt.anchor.setTo(0.5);
		_this.TheCrocodile4_3_2ScreenTxt.align = 'center';
		
				
		_this.TheCrocodile4_3_2ScreenTxt.font = 'gradefont';
		_this.TheCrocodile4_3_2ScreenTxt.fontSize = 20;
		_this.TheCrocodile4_3_2ScreenTxt.fontWeight = 'normal';
		_this.TheCrocodile4_3_2ScreenTxt.fill = 'white';

		_this.TheCrocodile4_3_2ScreenTxt.wordWrap = true;
		_this.TheCrocodile4_3_2ScreenTxt.wordWrapWidth = 500;
		//_this.TheCrocodile4_3_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TheCrocodile4_3_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.TheCrocodile4_3_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TheCrocodile4_3_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TheCrocodile4_3_2Screen.inputEnabled = true;
		_this.TheCrocodile4_3_2Screen.input.useHandCursor = true;
		_this.TheCrocodile4_3_2Screen.name = "Fractions 1.1 A";
		_this.TheCrocodile4_3_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity4_3_2level1',true,false);
				}
			},_this);
			
		},_this);
*/

		_this.TreeClimbing4_4_2Screen = _this.add.sprite(100,120,'unity4_4_2');
		//_this.CountingFlowers1_4ScreenTxt = _this.add.sprite(765,255,'Counting flowers 1.4');
		//_this.CountingFlowers1_4ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.TreeClimbing4_4_2ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.TreeClimbing4_4_2+' \n ');
		_this.TreeClimbing4_4_2ScreenTxt.anchor.setTo(0.5);
		_this.TreeClimbing4_4_2ScreenTxt.align = 'center';
		
				
		_this.TreeClimbing4_4_2ScreenTxt.font = 'gradefont';
		_this.TreeClimbing4_4_2ScreenTxt.fontSize = 20;
		_this.TreeClimbing4_4_2ScreenTxt.fontWeight = 'normal';
		_this.TreeClimbing4_4_2ScreenTxt.fill = 'white';

		_this.TreeClimbing4_4_2ScreenTxt.wordWrap = true;
		_this.TreeClimbing4_4_2ScreenTxt.wordWrapWidth = 500;
		//_this.TreeClimbing4_4_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TreeClimbing4_4_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.TreeClimbing4_4_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TreeClimbing4_4_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TreeClimbing4_4_2Screen.inputEnabled = true;
		_this.TreeClimbing4_4_2Screen.input.useHandCursor = true;
		_this.TreeClimbing4_4_2Screen.name = "Fractions 1.1 A";
		_this.TreeClimbing4_4_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity4_4_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.TreeClimbing4_5_2Screen = _this.add.sprite(300,120,'unity4_5_2');
		//_this.PluckingMangoes1_5ScreenTxt = _this.add.sprite(175,455,'Plucking mangoes 1.5');
		//_this.PluckingMangoes1_5ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.TreeClimbing4_5_2ScreenTxt = this.add.text(425, 192, ' \n '+window.selctedLang.TreeClimbing4_5_2+' \n ');
		_this.TreeClimbing4_5_2ScreenTxt.anchor.setTo(0.5);
		_this.TreeClimbing4_5_2ScreenTxt.align = 'center';
		
				
		_this.TreeClimbing4_5_2ScreenTxt.font = 'gradefont';
		_this.TreeClimbing4_5_2ScreenTxt.fontSize = 20;
		_this.TreeClimbing4_5_2ScreenTxt.fontWeight = 'normal';
		_this.TreeClimbing4_5_2ScreenTxt.fill = 'white';

		_this.TreeClimbing4_5_2ScreenTxt.wordWrap = true;
		_this.TreeClimbing4_5_2ScreenTxt.wordWrapWidth = 500;
		//_this.TreeClimbing4_5_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TreeClimbing4_5_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.TreeClimbing4_5_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TreeClimbing4_5_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TreeClimbing4_5_2Screen.inputEnabled = true;
		_this.TreeClimbing4_5_2Screen.input.useHandCursor = true;
		_this.TreeClimbing4_5_2Screen.name = "Fractions 1.1 A";
		_this.TreeClimbing4_5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity4_5_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.SmallorBig4_6_1Screen = _this.add.sprite(500,120,'unity4_6_1');
		//_this.PluckingMangoes1_5ScreenTxt = _this.add.sprite(175,455,'Plucking mangoes 1.5');
		//_this.PluckingMangoes1_5ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.SmallorBig4_6_1ScreenTxt = this.add.text(625, 192, ' \n '+window.selctedLang.SmallorBig4_6_1+' \n ');
		_this.SmallorBig4_6_1ScreenTxt.anchor.setTo(0.5);
		_this.SmallorBig4_6_1ScreenTxt.align = 'center';
		
				
		_this.SmallorBig4_6_1ScreenTxt.font = 'gradefont';
		_this.SmallorBig4_6_1ScreenTxt.fontSize = 20;
		_this.SmallorBig4_6_1ScreenTxt.fontWeight = 'normal';
		_this.SmallorBig4_6_1ScreenTxt.fill = 'white';

		_this.SmallorBig4_6_1ScreenTxt.wordWrap = true;
		_this.SmallorBig4_6_1ScreenTxt.wordWrapWidth = 500;
		//_this.SmallorBig4_6_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.SmallorBig4_6_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.SmallorBig4_6_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.SmallorBig4_6_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.SmallorBig4_6_1Screen.inputEnabled = true;
		_this.SmallorBig4_6_1Screen.input.useHandCursor = true;
		_this.SmallorBig4_6_1Screen.name = "Fractions 1.1 A";
		_this.SmallorBig4_6_1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity4_6_1level1',true,false);
				}
			},_this);
			
		},_this);




		if(window.languageSelected=="Hindi")
		{
			/*_this.topicTitleText.frame = 1;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 1;
			_this.PluckingMangoes1_2ScreenTxt.frame = 1;
			_this.CountingFish1_3ScreenTxt.frame = 1;
			_this.CountingFlowers1_4ScreenTxt.frame = 1;
			_this.PluckingMangoes1_5ScreenTxt.frame = 1;
			_this.BurstingBubbles1_6ScreenTxt.frame = 1;
			_this.TracingNumbers1_7ScreenTxt.frame = 1;*/
		}
		else if(window.languageSelected=="Kannada")
		{
			/*_this.topicTitleText.frame = 2;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 2;
			_this.PluckingMangoes1_2ScreenTxt.frame = 2;
			_this.CountingFish1_3ScreenTxt.frame = 2;
			_this.CountingFlowers1_4ScreenTxt.frame = 2;
			_this.PluckingMangoes1_5ScreenTxt.frame = 2;
			_this.BurstingBubbles1_6ScreenTxt.frame = 2;
			_this.TracingNumbers1_7ScreenTxt.frame = 2;*/
		}
		else
		{
			/*_this.topicTitleText.frame = 0;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 0;
			_this.PluckingMangoes1_2ScreenTxt.frame = 0;
			_this.CountingFish1_3ScreenTxt.frame = 0;
			_this.CountingFlowers1_4ScreenTxt.frame = 0;
			_this.PluckingMangoes1_5ScreenTxt.frame = 0;
			_this.BurstingBubbles1_6ScreenTxt.frame = 0;
			_this.TracingNumbers1_7ScreenTxt.frame = 0;*/
		}
		
		
		
		
		_this.ComparisionOfNumbersGroup.add(_this.topicTxtBg);
		_this.ComparisionOfNumbersGroup.add(_this.topicTitleText);
		_this.ComparisionOfNumbersGroup.add(_this.topicBg);
		//_this.ComparisionOfNumbersGroup.add(_this.TheCrocodile4_3_2Screen);
		//_this.ComparisionOfNumbersGroup.add(_this.TheCrocodile4_3_2ScreenTxt);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_4_2Screen);
		_this.ComparisionOfNumbersGroup.add(_this.bgGraphic1);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_4_2ScreenTxt);

		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_5_2Screen);
		_this.ComparisionOfNumbersGroup.add(_this.bgGraphic2);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_5_2ScreenTxt);

		_this.ComparisionOfNumbersGroup.add(_this.SmallorBig4_6_1Screen);
		_this.ComparisionOfNumbersGroup.add(_this.bgGraphic3);
		_this.ComparisionOfNumbersGroup.add(_this.SmallorBig4_6_1ScreenTxt);

	},

	additionwithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'ADDITION');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.additionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine7_1_2Screen = _this.add.sprite(100,120,'unity7_2_1');
		//_this.coinMachine7_1_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 7.1.2');
		//_this.coinMachine7_1_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.coinMachine7_1_2ScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.coinMachine7_1_2ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine7_1_2ScreenTxt.align = 'center';
		
				
		_this.coinMachine7_1_2ScreenTxt.font = 'gradefont';
		_this.coinMachine7_1_2ScreenTxt.fontSize = 20;
		_this.coinMachine7_1_2ScreenTxt.fontWeight = 'normal';
		_this.coinMachine7_1_2ScreenTxt.fill = 'white';

		_this.coinMachine7_1_2ScreenTxt.wordWrap = true;
		_this.coinMachine7_1_2ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine7_1_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine7_1_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine7_1_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine7_1_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine7_1_2Screen.inputEnabled = true;
		_this.coinMachine7_1_2Screen.input.useHandCursor = true;
		_this.coinMachine7_1_2Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_1_2Screen.events.onInputDown.add(function(target){

			if(this.video1 == null)
			{
				this.video1 = this.add.video('demo7_1_1');
				//this.video1.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video1.play(false);
					this.video1.changeSource(window.baseUrl+"assets/demoVideos/7_1_3.mp4");
					this.video1.addToWorld();
					this.video1.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video1.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('7_1_3a');
							_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video1.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity7_1_3level1',true,false);	
								},_this);
							_this.time.events.add(5000, function(){
								_this.playDemoVideos('7_1_3b');
							},_this);
							_this.time.events.add(20000, function(){
								_this.playDemoVideos('7_1_3c');
							},_this);
						},_this);
					}
					else
					{
						this.video1.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('7_1_3a');
							_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video1.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity7_1_3level1',true,false);	
								},_this);
							_this.time.events.add(7000, function(){
								_this.playDemoVideos('7_1_3b');
							},_this);
							_this.time.events.add(17000, function(){
								_this.playDemoVideos('7_1_3c');
							},_this);
						},_this);
					}
					/***********************************************************/
					//this.video1.play(false);
					this.video1.onComplete.add(function(){
						
						this.game.input.enabled = true;
					
						_this.state.start('unity7_1_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		_this.coinMachine7_2_2Screen = _this.add.sprite(300,120,'unity7_2_1');
		//_this.coinMachine7_2_2ScreenTxt = _this.add.sprite(365,255,'Coin Machine 7.2.2');
		//_this.coinMachine7_2_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;


		_this.coinMachine7_2_2ScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.coinMachine7_2_2ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine7_2_2ScreenTxt.align = 'center';
		
				
		_this.coinMachine7_2_2ScreenTxt.font = 'gradefont';
		_this.coinMachine7_2_2ScreenTxt.fontSize = 20;
		_this.coinMachine7_2_2ScreenTxt.fontWeight = 'normal';
		_this.coinMachine7_2_2ScreenTxt.fill = 'white';

		_this.coinMachine7_2_2ScreenTxt.wordWrap = true;
		_this.coinMachine7_2_2ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine7_2_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine7_2_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine7_2_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine7_2_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine7_2_2Screen.inputEnabled = true;
		_this.coinMachine7_2_2Screen.input.useHandCursor = true;
		_this.coinMachine7_2_2Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_2_2Screen.events.onInputDown.add(function(target){

			if(this.video2 == null)
			{
				this.video2 = this.add.video('demo7_1_1');
				//this.video2.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";


					this.video2.play(false);
					this.video2.changeSource(window.baseUrl+"assets/demoVideos/7_2_3.mp4");
					this.video2.addToWorld();
					this.video2.play(false);

					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati" || window.languageSelected == "Odiya")
					{
						this.video2.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('7_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video2.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity7_2_3level1',true,false);		
							},_this);
						_this.time.events.add(20000, function(){
								_this.playDemoVideos('7_2_3b');
						
							},_this);
					},_this);
					}
					else
					{
						this.video2.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('7_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video2.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity7_2_3level1',true,false);		
							},_this);
						_this.time.events.add(7000, function(){
							_this.playDemoVideos('7_2_3b');
						},_this);
						_this.time.events.add(18000, function(){
							_this.playDemoVideos('7_2_3c');
						},_this);
						_this.time.events.add(28000, function(){
							_this.playDemoVideos('7_2_3d');
						},_this);
					},_this);
					}
					/***********************************************************/
					

					//this.video2.play(false);
					this.video2.onComplete.add(function(){
					
						this.game.input.enabled = true;
						_this.state.start('unity7_2_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine7_1_2ScreenTxt.frame = 1;
			_this.coinMachine7_2_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine7_1_2ScreenTxt.frame = 2;
			_this.coinMachine7_2_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine7_1_2ScreenTxt.frame = 0;
			_this.coinMachine7_2_2ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.additionwithPlaceValueGroup.add(_this.topicTxtBg);
		_this.additionwithPlaceValueGroup.add(_this.topicTitleText);
		_this.additionwithPlaceValueGroup.add(_this.topicBg);

		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_2Screen);
		_this.additionwithPlaceValueGroup.add(_this.bgGraphic1);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_2ScreenTxt);

		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_2Screen);
		_this.additionwithPlaceValueGroup.add(_this.bgGraphic2);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_2ScreenTxt);
		
	},

	SubstractionWithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(195,83,'SUBTRACTION');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(200, 85, ' \n '+window.selctedLang.subtractionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine10_1_2Screen = _this.add.sprite(100,120,'unity10.1.2');
		//_this.coinMachine10_1_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 10.1.2');
		//_this.coinMachine10_1_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;


		_this.coinMachine10_1_2ScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.coinMachine10_1_2ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine10_1_2ScreenTxt.align = 'center';
		
				
		_this.coinMachine10_1_2ScreenTxt.font = 'gradefont';
		_this.coinMachine10_1_2ScreenTxt.fontSize = 20;
		_this.coinMachine10_1_2ScreenTxt.fontWeight = 'normal';
		_this.coinMachine10_1_2ScreenTxt.fill = 'white';

		_this.coinMachine10_1_2ScreenTxt.wordWrap = true;
		_this.coinMachine10_1_2ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine10_1_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine10_1_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine10_1_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine10_1_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		

		_this.coinMachine10_1_2Screen.inputEnabled = true;
		_this.coinMachine10_1_2Screen.input.useHandCursor = true;
		_this.coinMachine10_1_2Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_1_2Screen.events.onInputDown.add(function(target){

			if(this.video3 == null)
			{
				this.video3 = this.add.video('demo7_1_1');
				//this.video3.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video3.play(false);
					this.video3.changeSource(window.baseUrl+"assets/demoVideos/10_1_3.mp4");
					this.video3.addToWorld();
					this.video3.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video3.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_1_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video3.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_1_3level1',true,false);		
							},_this);
						_this.time.events.add(5000, function(){
							_this.playDemoVideos('10_1_3b');
						},_this);
						_this.time.events.add(27000, function(){
							_this.playDemoVideos('10_1_3c');
						},_this);
						},_this);
					}
					else
					{
						
					this.video3.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_1_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video3.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_1_3level1',true,false);		
							},_this);
						_this.time.events.add(5000, function(){
							_this.playDemoVideos('10_1_3b');
						},_this);
						_this.time.events.add(27000, function(){
							_this.playDemoVideos('10_1_3c');
						},_this);
					},_this);
					}
					/***********************************************************/
					
					

					//this.video3.play(false);
					this.video3.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity10_1_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.coinMachine10_2_2Screen = _this.add.sprite(300,120,'unity10.2.2');
		//_this.coinMachine10_2_2ScreenTxt = _this.add.sprite(365,255,'Coin Machine 10.2.2');
		//_this.coinMachine10_2_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;


		_this.coinMachine10_2_2ScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.coinMachine10_2_2ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine10_2_2ScreenTxt.align = 'center';
		
				
		_this.coinMachine10_2_2ScreenTxt.font = 'gradefont';
		_this.coinMachine10_2_2ScreenTxt.fontSize = 20;
		_this.coinMachine10_2_2ScreenTxt.fontWeight = 'normal';
		_this.coinMachine10_2_2ScreenTxt.fill = 'white';

		_this.coinMachine10_2_2ScreenTxt.wordWrap = true;
		_this.coinMachine10_2_2ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine10_2_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine10_2_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine10_2_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine10_2_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine10_2_2Screen.inputEnabled = true;
		_this.coinMachine10_2_2Screen.input.useHandCursor = true;
		_this.coinMachine10_2_2Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_2_2Screen.events.onInputDown.add(function(target){

			if(this.video4 == null)
			{
				this.video4 = this.add.video('demo7_1_1');
				//this.video4.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video4.play(false);
					this.video4.changeSource(window.baseUrl+"assets/demoVideos/10_2_3.mp4");
					this.video4.addToWorld();
					this.video4.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video4.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video4.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_2_3level1',true,false);		
							},_this);
						_this.time.events.add(11000, function(){
							_this.playDemoVideos('10_2_3b');
						},_this);
					  _this.time.events.add(35000, function(){
							_this.playDemoVideos('10_2_3c');
						},_this);
					},_this);
					}
					else{
						
					this.video4.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video4.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_2_3level1',true,false);		
							},_this);
						_this.time.events.add(5000, function(){
							_this.playDemoVideos('10_2_3b');
						},_this);
						_this.time.events.add(21000, function(){
							_this.playDemoVideos('10_2_3c');
						},_this);
					  _this.time.events.add(35000, function(){
							_this.playDemoVideos('10_2_3d');
						},_this);
					},_this);
					}
					/***********************************************************/

					//this.video4.play(false);
					this.video4.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity10_2_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine10_1_2ScreenTxt.frame = 1;
			_this.coinMachine10_2_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine10_1_2ScreenTxt.frame = 2;
			_this.coinMachine10_2_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine10_1_2ScreenTxt.frame = 0;
			_this.coinMachine10_2_2ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTxtBg);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTitleText);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicBg);

		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_2Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.bgGraphic1);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_2ScreenTxt);

		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_2Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.bgGraphic2);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_2ScreenTxt);
		
	},

	MultiplicationTable:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,230,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'MULTIPLICATION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(215, 85, ' \n '+window.selctedLang.multiplicationTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.multiplication12_1Screen = _this.add.sprite(100,120,'unity12_1');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.multiplication12_1ScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.multiplication12_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_1ScreenTxt.align = 'center';
		
				
		_this.multiplication12_1ScreenTxt.font = 'gradefont';
		_this.multiplication12_1ScreenTxt.fontSize = 20;
		_this.multiplication12_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_1ScreenTxt.fill = 'white';

		_this.multiplication12_1ScreenTxt.wordWrap = true;
		_this.multiplication12_1ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_1Screen.inputEnabled = true;
		_this.multiplication12_1Screen.input.useHandCursor = true;
		_this.multiplication12_1Screen.name = "Fractions 1.1 A";
		_this.multiplication12_1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_1level1',true,false);
				}
			},_this);
			
		},_this);


		_this.multiplication12_2Screen = _this.add.sprite(300,120,'unity12_2');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.multiplication12_2ScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.multiplication12_2ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_2ScreenTxt.align = 'center';
		
				
		_this.multiplication12_2ScreenTxt.font = 'gradefont';
		_this.multiplication12_2ScreenTxt.fontSize = 20;
		_this.multiplication12_2ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_2ScreenTxt.fill = 'white';

		_this.multiplication12_2ScreenTxt.wordWrap = true;
		_this.multiplication12_2ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_2Screen.inputEnabled = true;
		_this.multiplication12_2Screen.input.useHandCursor = true;
		_this.multiplication12_2Screen.name = "Fractions 1.1 A";
		_this.multiplication12_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.multiplication12_3_2Screen = _this.add.sprite(500,120,'unity12_3_2');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.multiplication12_3_2ScreenTxt = this.add.text(625, 192, ' \n 3 \n ');
		_this.multiplication12_3_2ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_3_2ScreenTxt.align = 'center';
		
				
		_this.multiplication12_3_2ScreenTxt.font = 'gradefont';
		_this.multiplication12_3_2ScreenTxt.fontSize = 20;
		_this.multiplication12_3_2ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_3_2ScreenTxt.fill = 'white';

		_this.multiplication12_3_2ScreenTxt.wordWrap = true;
		_this.multiplication12_3_2ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_3_2Screen.inputEnabled = true;
		_this.multiplication12_3_2Screen.input.useHandCursor = true;
		_this.multiplication12_3_2Screen.name = "Fractions 1.1 A";
		_this.multiplication12_3_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_3_2level1',true,false);
				}
			},_this);
			
		},_this);



		_this.multiplication12_3_3Screen = _this.add.sprite(700,120,'unity12_3_3');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.multiplication12_3_3ScreenTxt = this.add.text(825, 192, ' \n 4 \n ');
		_this.multiplication12_3_3ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_3_3ScreenTxt.align = 'center';
		
				
		_this.multiplication12_3_3ScreenTxt.font = 'gradefont';
		_this.multiplication12_3_3ScreenTxt.fontSize = 20;
		_this.multiplication12_3_3ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_3_3ScreenTxt.fill = 'white';

		_this.multiplication12_3_3ScreenTxt.wordWrap = true;
		_this.multiplication12_3_3ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_3_3Screen.inputEnabled = true;
		_this.multiplication12_3_3Screen.input.useHandCursor = true;
		_this.multiplication12_3_3Screen.name = "Fractions 1.1 A";
		_this.multiplication12_3_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_3_3level1',true,false);
				}
			},_this);
			
		},_this);

		_this.multiplication13_1Screen = _this.add.sprite(100,320,'unity13_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.multiplication13_1ScreenTxt = this.add.text(225, 392, ' \n 5 \n ');
		_this.multiplication13_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication13_1ScreenTxt.align = 'center';
		
				
		_this.multiplication13_1ScreenTxt.font = 'gradefont';
		_this.multiplication13_1ScreenTxt.fontSize = 20;
		_this.multiplication13_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication13_1ScreenTxt.fill = 'white';

		_this.multiplication13_1ScreenTxt.wordWrap = true;
		_this.multiplication13_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication13_1Screen.inputEnabled = true;
		_this.multiplication13_1Screen.input.useHandCursor = true;
		_this.multiplication13_1Screen.name = "Fractions 1.1 A";
		_this.multiplication13_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity13_1level1',true,false);
					
				}
			},_this);
			
		},_this);


		_this.multiplication14_1Screen = _this.add.sprite(300,320,'unity14_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.multiplication14_1ScreenTxt = this.add.text(425, 392, ' \n 6 \n ');
		_this.multiplication14_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication14_1ScreenTxt.align = 'center';
		
				
		_this.multiplication14_1ScreenTxt.font = 'gradefont';
		_this.multiplication14_1ScreenTxt.fontSize = 20;
		_this.multiplication14_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication14_1ScreenTxt.fill = 'white';

		_this.multiplication14_1ScreenTxt.wordWrap = true;
		_this.multiplication14_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_1Screen.inputEnabled = true;
		_this.multiplication14_1Screen.input.useHandCursor = true;
		_this.multiplication14_1Screen.name = "Fractions 1.1 A";
		_this.multiplication14_1Screen.events.onInputDown.add(function(target){

			if(this.video7 == null)
			{
				this.video7 = this.add.video('demo7_1_1');
			//	this.video7.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video7.play(false);
					this.video7.changeSource(window.baseUrl+"assets/demoVideos/14_1.mp4");
					this.video7.addToWorld();
					this.video7.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video7.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_1a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video7.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_1level1',true,false);		
								},_this);
							_this.time.events.add(12000, function(){
								_this.playDemoVideos('14_1b');//second sound
							},_this);
							
						},_this);
					}
					else
					{
						this.video7.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_1a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video7.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_1level1',true,false);		
								},_this);
							_this.time.events.add(12000, function(){
								_this.playDemoVideos('14_1b');//second sound
							},_this);
							
						},_this);
					}
					
					/***********************************************************/
					
					

					//this.video3.play(false);
					this.video7.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity14_1level1',true,false);
					},_this);
					
				}
			},_this);
			
		},_this);


		_this.multiplication14_2Screen = _this.add.sprite(500,320,'unity14_2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic7 = this.add.graphics(610,375);
		_this.bgGraphic7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic7.beginFill(0x493A19, 1);
		_this.bgGraphic7.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic7.boundsPadding = 0;

		_this.multiplication14_2ScreennTxt = this.add.text(625, 392, ' \n 7 \n ');
		_this.multiplication14_2ScreennTxt.anchor.setTo(0.5);
		_this.multiplication14_2ScreennTxt.align = 'center';
		
				
		_this.multiplication14_2ScreennTxt.font = 'gradefont';
		_this.multiplication14_2ScreennTxt.fontSize = 20;
		_this.multiplication14_2ScreennTxt.fontWeight = 'normal';
		_this.multiplication14_2ScreennTxt.fill = 'white';

		_this.multiplication14_2ScreennTxt.wordWrap = true;
		_this.multiplication14_2ScreennTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_2Screen.inputEnabled = true;
		_this.multiplication14_2Screen.input.useHandCursor = true;
		_this.multiplication14_2Screen.name = "Fractions 1.1 A";
		_this.multiplication14_2Screen.events.onInputDown.add(function(target){

			if(this.video8 == null)
			{
				this.video8 = this.add.video('demo7_1_1');
				//this.video8.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video8.play(false);
					this.video8.changeSource(window.baseUrl+"assets/demoVideos/14_2.mp4");
					this.video8.addToWorld();
					this.video8.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video8.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_2a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video8.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_2level1',true,false);		
								},_this);
							_this.time.events.add(13000, function(){
								_this.playDemoVideos('14_2b');//second sound
							},_this);
							_this.time.events.add(26000, function(){
								_this.playDemoVideos('14_2c');//third sound
							},_this);
						},_this);
					}
					else
					{
						this.video8.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
							_this.playDemoVideos('14_2a');//first sound
							_this.skipDemos = _this.add.sprite(803,465,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video8.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity14_2level1',true,false);		
								},_this);
							_this.time.events.add(13000, function(){
								_this.playDemoVideos('14_2b');//second sound
							},_this);
							_this.time.events.add(26000, function(){
								_this.playDemoVideos('14_2c');//third sound
							},_this);
						},_this);
					}
					/***********************************************************/
					
					

					//this.video3.play(false);
					this.video8.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity14_2level1',true,false);
					},_this);
					
				}
			},_this);
			
		},_this);


		


		if(window.languageSelected=="Hindi")
		{
			//_this.topicTitleText.frame = 1;
			//_this.AforApple11_1ScreenTxt.frame = 1;
			//_this.AforApple11_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			//_this.topicTitleText.frame = 2;
			//_this.AforApple11_1ScreenTxt.frame = 2;
			//_this.AforApple11_2ScreenTxt.frame = 2;
		}
		else
		{
			//_this.topicTitleText.frame = 0;
			//_this.AforApple11_1ScreenTxt.frame = 0;
			//_this.AforApple11_2ScreenTxt.frame = 0;
		}
		
		
		//_this.AforApple11_2Screen.visible = false;
		//_this.AforApple11_2ScreenTxt.visible = false;
		
		_this.MultiplicationTableGroup.add(_this.topicTxtBg);
		_this.MultiplicationTableGroup.add(_this.topicTitleText);
		_this.MultiplicationTableGroup.add(_this.topicBg);

		_this.MultiplicationTableGroup.add(_this.multiplication12_1Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic1);
		_this.MultiplicationTableGroup.add(_this.multiplication12_1ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication12_2Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic2);
		_this.MultiplicationTableGroup.add(_this.multiplication12_2ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication12_3_2Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic3);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_2ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication12_3_3Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic4);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_3ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication13_1Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic5);
		_this.MultiplicationTableGroup.add(_this.multiplication13_1ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication14_1Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic6);
		_this.MultiplicationTableGroup.add(_this.multiplication14_1ScreenTxt);

		_this.MultiplicationTableGroup.add(_this.multiplication14_2Screen);
		_this.MultiplicationTableGroup.add(_this.bgGraphic7);
		_this.MultiplicationTableGroup.add(_this.multiplication14_2ScreennTxt);

		
	},

	DivisionWithQuantity:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(195,83,'DIVISION');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(200, 85, ' \n '+window.selctedLang.divisionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		/*_this.FishInATank15_1Screen = _this.add.sprite(100,120,'unity15_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.FishInATank15_1ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.FishInATank15_1ScreenTxt.anchor.setTo(0.5);
		_this.FishInATank15_1ScreenTxt.align = 'center';
		
				
		_this.FishInATank15_1ScreenTxt.font = 'gradefont';
		_this.FishInATank15_1ScreenTxt.fontSize = 20;
		_this.FishInATank15_1ScreenTxt.fontWeight = 'normal';
		_this.FishInATank15_1ScreenTxt.fill = 'white';

		_this.FishInATank15_1ScreenTxt.wordWrap = true;
		_this.FishInATank15_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.FishInATank15_1Screen.inputEnabled = true;
		_this.FishInATank15_1Screen.input.useHandCursor = true;
		_this.FishInATank15_1Screen.name = "Fractions 1.1 A";
		_this.FishInATank15_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity15_1level1',true,false);

				}
			},_this);
			
		},_this);*/


		_this.Division16_1Screen = _this.add.sprite(100,120,'unity16_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(210,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		//_this.Division16_1ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_1ScreenTxt = this.add.text(225, 192, '1');
		_this.Division16_1ScreenTxt.anchor.setTo(0.5);
		_this.Division16_1ScreenTxt.align = 'center';
		
				
		_this.Division16_1ScreenTxt.font = 'gradefont';
		_this.Division16_1ScreenTxt.fontSize = 20;
		_this.Division16_1ScreenTxt.fontWeight = 'normal';
		_this.Division16_1ScreenTxt.fill = 'white';

		_this.Division16_1ScreenTxt.wordWrap = true;
		_this.Division16_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_1Screen.inputEnabled = true;
		_this.Division16_1Screen.input.useHandCursor = true;
		_this.Division16_1Screen.name = "Fractions 1.1 A";
		_this.Division16_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_1level1',true,false);

				}
			},_this);
			
		},_this);


		_this.Division16_2Screen = _this.add.sprite(300,120,'unity16_2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(410,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		//_this.Division16_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_2ScreenTxt = this.add.text(425, 192, '2');
		_this.Division16_2ScreenTxt.anchor.setTo(0.5);
		_this.Division16_2ScreenTxt.align = 'center';
		
				
		_this.Division16_2ScreenTxt.font = 'gradefont';
		_this.Division16_2ScreenTxt.fontSize = 20;
		_this.Division16_2ScreenTxt.fontWeight = 'normal';
		_this.Division16_2ScreenTxt.fill = 'white';

		_this.Division16_2ScreenTxt.wordWrap = true;
		_this.Division16_2ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_2Screen.inputEnabled = true;
		_this.Division16_2Screen.input.useHandCursor = true;
		_this.Division16_2Screen.name = "Fractions 1.1 A";
		_this.Division16_2Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_2level1',true,false);

				}
			},_this);
			
		},_this);


		_this.Division16_3Screen = _this.add.sprite(500,120,'unity16_3');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(610,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		//_this.Division16_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_3ScreenTxt = this.add.text(625, 192, '3');
		_this.Division16_3ScreenTxt.anchor.setTo(0.5);
		_this.Division16_3ScreenTxt.align = 'center';
		
				
		_this.Division16_3ScreenTxt.font = 'gradefont';
		_this.Division16_3ScreenTxt.fontSize = 20;
		_this.Division16_3ScreenTxt.fontWeight = 'normal';
		_this.Division16_3ScreenTxt.fill = 'white';

		_this.Division16_3ScreenTxt.wordWrap = true;
		_this.Division16_3ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_3Screen.inputEnabled = true;
		_this.Division16_3Screen.input.useHandCursor = true;
		_this.Division16_3Screen.name = "Fractions 1.1 A";
		_this.Division16_3Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_3level1',true,false);

				}
			},_this);
			
		},_this);


		_this.division17_2Screen = _this.add.sprite(700,120,'unity17.2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(810,175);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.division17_2ScreenTxt = this.add.text(825, 192, '4');
		_this.division17_2ScreenTxt.anchor.setTo(0.5);
		_this.division17_2ScreenTxt.align = 'center';
		
				
		_this.division17_2ScreenTxt.font = 'gradefont';
		_this.division17_2ScreenTxt.fontSize = 20;
		_this.division17_2ScreenTxt.fontWeight = 'normal';
		_this.division17_2ScreenTxt.fill = 'white';

		_this.division17_2ScreenTxt.wordWrap = true;
		_this.division17_2ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_2Screen.inputEnabled = true;
		_this.division17_2Screen.input.useHandCursor = true;
		_this.division17_2Screen.name = "Fractions 1.1 A";
		_this.division17_2Screen.events.onInputDown.add(function(target){

			if(this.video5==null)
			{

				this.video5 = this.add.video('demo7_1_1');
				//this.video5.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";


					this.video5.play(false);
					this.video5.changeSource(window.baseUrl+"assets/demoVideos/17_2.mp4");
					this.video5.addToWorld();
					this.video5.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video5.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('17_2a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video5.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity17_2level1',true,false);
							},_this);
						_this.time.events.add(15000, function(){
							_this.playDemoVideos('17_2b');
						},_this);
						_this.time.events.add(39000, function(){
							_this.playDemoVideos('17_2c');
						},_this);
						},_this);
					}
					else
					{
					this.video5.playbackRate = 1;    // slow down the video
						_this.time.events.add(2000, function(){
						_this.playDemoVideos('17_2a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						document.getElementById('phaser_canvas').style.pointerEvents = "initial";
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video5.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity17_2level1',true,false);
							},_this);
						_this.time.events.add(15000, function(){
							_this.playDemoVideos('17_2b');
						},_this);
						_this.time.events.add(39000, function(){
							_this.playDemoVideos('17_2c');
						},_this);
						},_this);
					}
					
					/***********************************************************/
					

					//this.video5.play(false);
					this.video5.onComplete.add(function(){
						this.game.input.enabled = true;
						_this.state.start('unity17_2level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.division17_3Screen = _this.add.sprite(100,320,'unity17_3');
		//_this.division17_3ScreenTxt = _this.add.sprite(365,250,'Coin Machine');
		//_this.division17_3ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(210,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.division17_3ScreenTxt = this.add.text(225, 392, '5');
		_this.division17_3ScreenTxt.anchor.setTo(0.5);
		_this.division17_3ScreenTxt.align = 'center';
		
				
		_this.division17_3ScreenTxt.font = 'gradefont';
		_this.division17_3ScreenTxt.fontSize = 20;
		_this.division17_3ScreenTxt.fontWeight = 'normal';
		_this.division17_3ScreenTxt.fill = 'white';

		_this.division17_3ScreenTxt.wordWrap = true;
		_this.division17_3ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_3Screen.inputEnabled = true;
		_this.division17_3Screen.input.useHandCursor = true;
		_this.division17_3Screen.name = "Fractions 1.1 A";
		_this.division17_3Screen.events.onInputDown.add(function(target){

			if(this.video6==null)
			{
				this.video6 = this.add.video('demo7_1_1');
				//this.video6.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					for(var i=0;i<_this.graphicsBg.children.length;i++)
					{
						_this.graphicsBg.getChildAt(i).setAll("inputEnabled",false);
					}
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					//telInitializer.gameIdInit("unity8_1",1);

					this.video6.play(false);
					this.video6.changeSource(window.baseUrl+"assets/demoVideos/17_3.mp4");
					this.video6.addToWorld();
					this.video6.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					if(window.languageSelected == "Gujarati")
					{
						this.video6.playbackRate = 0.8;    // slow down the video
						_this.time.events.add(1000, function(){
							_this.playDemoVideos('17_3a');
							_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video6.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity17_3level1',true,false);
								},_this);
							_this.time.events.add(8000, function(){
								_this.playDemoVideos('17_3b');
							},_this);
							_this.time.events.add(22000, function(){
								_this.playDemoVideos('17_3c');
							},_this);
							_this.time.events.add(29000, function(){
								_this.playDemoVideos('17_3d');
							},_this);
						},_this);
					}
					else
					{
					this.video6.playbackRate = 0.8;    // slow down the video
						_this.time.events.add(1000, function(){
							_this.playDemoVideos('17_3a');
							_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
							document.getElementById('phaser_canvas').style.pointerEvents = "initial";
							_this.skipDemos.inputEnabled = true;
							_this.skipDemos.events.onInputDown.add(function(){
								  _this.stopDemoVoice();
								  this.video6.stop(false);
								  this.game.input.enabled = true;
								  _this.state.start('unity17_3level1',true,false);
								},_this);
							_this.time.events.add(8000, function(){
								_this.playDemoVideos('17_3b');
							},_this);
							_this.time.events.add(22000, function(){
								_this.playDemoVideos('17_3c');
							},_this);
							_this.time.events.add(29000, function(){
								_this.playDemoVideos('17_3d');
							},_this);
						},_this);
					}
					
					/***********************************************************/
					
					//this.video6.play(false);
					this.video6.onComplete.add(function(){
					
						this.game.input.enabled = true;
						_this.state.start('unity17_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		
		
		_this.DivisionWithQuantityGroup.add(_this.topicTxtBg);
		_this.DivisionWithQuantityGroup.add(_this.topicTitleText);
		_this.DivisionWithQuantityGroup.add(_this.topicBg);

		/*_this.DivisionWithQuantityGroup.add(_this.FishInATank15_1Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic1);
		_this.DivisionWithQuantityGroup.add(_this.FishInATank15_1ScreenTxt);*/

		_this.DivisionWithQuantityGroup.add(_this.Division16_1Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic2);
		_this.DivisionWithQuantityGroup.add(_this.Division16_1ScreenTxt);

		_this.DivisionWithQuantityGroup.add(_this.Division16_2Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic3);
		_this.DivisionWithQuantityGroup.add(_this.Division16_2ScreenTxt);

		_this.DivisionWithQuantityGroup.add(_this.Division16_3Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic4);
		_this.DivisionWithQuantityGroup.add(_this.Division16_3ScreenTxt);

		_this.DivisionWithQuantityGroup.add(_this.division17_2Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic5);
		_this.DivisionWithQuantityGroup.add(_this.division17_2ScreenTxt);

		_this.DivisionWithQuantityGroup.add(_this.division17_3Screen);
		_this.DivisionWithQuantityGroup.add(_this.bgGraphic6);
		_this.DivisionWithQuantityGroup.add(_this.division17_3ScreenTxt);
		
		
	},

	DivisionPart2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(195,83,'DIVISION');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(200, 85, ' \n '+window.selctedLang.divisionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.division17_2Screen = _this.add.sprite(100,120,'unity17.2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.division17_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.CoinMachine17_2+' \n ');
		_this.division17_2ScreenTxt.anchor.setTo(0.5);
		_this.division17_2ScreenTxt.align = 'center';
		
				
		_this.division17_2ScreenTxt.font = 'gradefont';
		_this.division17_2ScreenTxt.fontSize = 20;
		_this.division17_2ScreenTxt.fontWeight = 'normal';
		_this.division17_2ScreenTxt.fill = 'white';

		_this.division17_2ScreenTxt.wordWrap = true;
		_this.division17_2ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_2Screen.inputEnabled = true;
		_this.division17_2Screen.input.useHandCursor = true;
		_this.division17_2Screen.name = "Fractions 1.1 A";
		_this.division17_2Screen.events.onInputDown.add(function(target){

			if(this.video5==null)
			{

				this.video5 = this.add.video('demo7_1_1');
				//this.video5.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();


					this.video5.play(false);
					this.video5.changeSource(window.baseUrl+"assets/demoVideos/17_2.mp4");
					this.video5.addToWorld();
					this.video5.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					_this.playDemoVideos('17_2');
					this.video5.playbackRate = 1;    // slow down the video

					_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video5.stop(false);
						this.game.input.enabled = true;
						_this.state.start('unity17_2level1',true,false);
						
					},_this);
					
					/***********************************************************/
					//this.video5.play(false);
					this.video5.onComplete.add(function(){
						this.game.input.enabled = true;
						_this.state.start('unity17_2level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.division17_3Screen = _this.add.sprite(300,120,'unity17_3');
		//_this.division17_3ScreenTxt = _this.add.sprite(365,250,'Coin Machine');
		//_this.division17_3ScreenTxt.anchor.setTo(0.5);

		_this.division17_3ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.CoinMachine17_3+' \n ');
		_this.division17_3ScreenTxt.anchor.setTo(0.5);
		_this.division17_3ScreenTxt.align = 'center';
		
				
		_this.division17_3ScreenTxt.font = 'gradefont';
		_this.division17_3ScreenTxt.fontSize = 20;
		_this.division17_3ScreenTxt.fontWeight = 'normal';
		_this.division17_3ScreenTxt.fill = 'white';

		_this.division17_3ScreenTxt.wordWrap = true;
		_this.division17_3ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_3Screen.inputEnabled = true;
		_this.division17_3Screen.input.useHandCursor = true;
		_this.division17_3Screen.name = "Fractions 1.1 A";
		_this.division17_3Screen.events.onInputDown.add(function(target){

			if(this.video6==null)
			{
				this.video6 = this.add.video('demo7_1_1');
				//this.video6.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);

					this.video6.play(false);
					this.video6.changeSource(window.baseUrl+"assets/demoVideos/17_3.mp4");
					this.video6.addToWorld();
					this.video6.play(false);
					//this.game.input.enabled = false;
					
					//this.video6.play(false);
					this.video6.onComplete.add(function(){
					
						this.game.input.enabled = true;
						_this.state.start('unity17_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.division17_2ScreenTxt.frame = 1;
			//_this.division17_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.division17_2ScreenTxt.frame = 2;
			//_this.division17_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.division17_2ScreenTxt.frame = 0;
			//_this.division17_3ScreenTxt.frame = 0;
		}
		*/
		
		
		
		_this.DivisionPart2Group.add(_this.topicTxtBg);
		_this.DivisionPart2Group.add(_this.topicTitleText);
		_this.DivisionPart2Group.add(_this.topicBg);
		_this.DivisionPart2Group.add(_this.division17_2Screen);
		_this.DivisionPart2Group.add(_this.division17_2ScreenTxt);
		_this.DivisionPart2Group.add(_this.division17_3Screen);
		_this.DivisionPart2Group.add(_this.division17_3ScreenTxt);
		
	},
	
	 playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
            case '3_2_2':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 3.1.2.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 3.1.2.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 3.1.2.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/3.2.2.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/3.2.2.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '7_1_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.3a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.1.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_1_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.3b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.1.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_1_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.1.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.1.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.1.3c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.1.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.1.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '7_2_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.2.1a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/7.2.1b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3d': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '10_1_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.1.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.1.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.1.3a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.1.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.1.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_1_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.1.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.1.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.1.3b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.1.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.1.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_1_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.1.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.1.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.1.3c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.1.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.1.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '10_2_3a':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.3a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.2.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3b':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.3b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.2.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3c':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.3c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/10.2.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3d':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 10.2.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 10.2.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 10.2.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/10.2.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '17_2a':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.2a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_2b':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.2b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_2c':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.2c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '17_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.3a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
		    case '17_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.3b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.3c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_3d': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.3d.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/17.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_1a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.1a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.1a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.1a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_1b': 
						if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.1b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.1b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.1b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_2a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2a.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_2b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2b.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '14_2c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 14.2c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 14.2c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 14.2c.mp3");
							}
							else if(window.languageSelected == "Gujarati")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Gujarati/14.2c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/14.2c.mp3");
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
		if(this.video6)
		{
			this.video6.destroy();
			this.video6.removeVideoElement();
			this.video6 = null;
		}
		
		/*_this.clickSound = null;
		_this.mc = null;
		//_this = null;
		_this.tween = null;
		_this.tap = null;
		_this.background = null;
		_this.gradeBackBtn = null;
		_this.grade1FractionGroup = null;
		_this.grade1LengthGroup = null;
		_this.grade1WeightGroup = null;
		_this.graphicsBg = null;
		_this.mask = null;
		_this.swipeUpFlag = null;
		_this.swipeDownFlag = null;
		_this.page = null; 
		_this.input.onDown.removeAll();
		_this.input.onTap.removeAll();
		_this.time.events.removeAll();
		
		_this.topicTxtBg = null;
		_this.topicTitleText = null;
		_this.topicBg = null;
		
		_this.fractions1_1AScreen.events.onInputDown.removeAll();
		_this.fractions1_1AScreen = null;
		_this.fractions1_1AScreenTxt = null;
		
		_this.length2_1AScreen.events.onInputDown.removeAll();
		_this.length2_1AScreen = null;
		_this.length2_1AScreenTxt = null;
		
		_this.length2_1BScreen.events.onInputDown.removeAll();
		_this.length2_1BScreen = null;
		_this.length2_1BScreenTxt = null;
		
		_this.length2_2Screen.events.onInputDown.removeAll();
		_this.length2_2Screen = null;
		_this.length2_2ScreenTxt = null;
		
		_this.length2_3Screen.events.onInputDown.removeAll();
		_this.length2_3Screen = null;
		_this.length2_3ScreenTxt = null;
		
		_this.weight3_1Screen.events.onInputDown.removeAll();
		_this.weight3_1Screen = null;
		_this.weight3_1ScreenTxt = null;
		
		_this.weight3_2AScreen.events.onInputDown.removeAll();
		_this.weight3_2AScreen = null;
		_this.weight3_2AScreenTxt = null;
		
		console.log(_this.world);

		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		_this = null;*/
	}
	
};