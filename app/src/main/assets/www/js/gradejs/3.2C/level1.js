Game.grade3_2Clevel1=function(){
     /*bg1;
         starsGroup;
         dragBox;
         count;
         gameBoxGroup;
         crocsGroup;
         tickMark;
         objGroup;
         rightOrderArray;
         glowOrderArray;
         no1,no2,no3;
         count;
         count1;
         qArrays;
         qArrays1;
         qArrays2;
         graphics;
         numGroup;
         selectedAns;
         rightAns;
         mainSprite;
         tapeXPos;
         tapeYPos;

         enterTxt;

         noofAttempts;
         timer;
         AnsTimerCount;

         gameid;*/
};


Game.grade3_2Clevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "3.2C";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/


        telInitializer.gameIdInit("weight3_2C",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade3MW2){

            window.grade3MW2 = true;

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

         _this.load.image('Level32C_bg',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/bg.png');
         
        //game assets.
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/gameBg.png');
        
        _this.load.image('Level32C_weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight1.png');
        _this.load.image('Level32C_weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight2.png');
        _this.load.image('Level32C_weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight3.png');
        
        _this.load.atlas('Level32C_Can',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2C/Can.json');
        _this.load.atlas('Level32C_Carrot',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2C/Carot.json');
        _this.load.atlas('Level32C_Coin',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2C/Coin.json');
        _this.load.atlas('Level32C_Ball',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2C/Ball.json');
        _this.load.atlas('Level32C_Book',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2C/Book.json');
        _this.load.atlas('Level32C_Banana',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2C/Banana.json');
        _this.load.atlas('Level32C_Comb',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2C/comb.json');
        _this.load.atlas('Level32C_Eraser',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2C/eraser.json');
        _this.load.atlas('Level32C_Eraser2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2C/eraser2.json');
        _this.load.atlas('Level32C_Glass',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2C/Glass.json');
        _this.load.atlas('Level32C_Glass2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2C/Glass2.json');
        _this.load.atlas('Level32C_Mug',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2C/Mug.json');
        _this.load.atlas('Level32C_Key',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2C/Key.json');
        _this.load.atlas('Level32C_Pappaya',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2C/Pappaya.json');
        _this.load.atlas('Level32C_Pencil',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2C/Pencil.json');
        _this.load.atlas('Level32C_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2C/ScrewDriver.json');
        _this.load.atlas('Level32C_Shoe',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2C/Shoe.json');
        
        //level2
        _this.load.image('Level32C_level2weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32C_level2weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32C_level2weight32',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32C_level2weight42',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32C_txtbox',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/box.png');
        _this.load.atlas('Level32C_numbg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2C/numbg.json');
        _this.load.atlas('Level32C_rightBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2C/rightBtn.json');
        _this.load.atlas('Level32C_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2C/wrongBtn.json');
        
        _this.load.atlas('Level32C_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2C/eraser2Anim.json');
        _this.load.atlas('Level32C_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2C/BananaAnim.json');
        _this.load.atlas('Level32C_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2C/CarrotAnim.json');
        _this.load.atlas('Level32C_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2C/CoinAnim.json');
        _this.load.atlas('Level32C_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2C/GlassAnim.json');
        
        _this.load.atlas('Level32C_level2weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2C/L2.json');
        _this.load.atlas('Level32C_level2weight4',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2C/R2.json');
       
             //level3
        _this.load.atlas('Level32C_bottle',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.2C/bottle.json');
        _this.load.atlas('Level32C_w1Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.2C/w1Anim.json');
        _this.load.image('Level32C_w1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1.png');
        _this.load.image('Level32C_w2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2.png');
        _this.load.atlas('Level32C_w2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.2C/w2Anim.json');
        _this.load.atlas('Level32C_tomoto',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.2C/tomoto.json');
        _this.load.atlas('Level32C_spoon',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.2C/spoon.json');
        _this.load.atlas('Level32C_eraser1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.2C/eraser1.json');
        _this.load.atlas('Level32C_rope',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.2C/rope.json');
        _this.load.atlas('Level32C_leef',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.2C/leef.json');
        _this.load.atlas('Level32C_coin1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.2C/coin1.json');
        _this.load.atlas('Level32C_Comb1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.2C/Comb1.json');
        _this.load.atlas('Level32C_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w1AnimGlow.json');
        _this.load.atlas('Level32C_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w2AnimGlow.json');
        
        _this.load.atlas('Level32C_w22AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22AnimGlow.json');
        _this.load.atlas('Level32C_w22Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22Anim.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22Anim.json');
        _this.load.image('Level32C_w22',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        _this.load.atlas('Level32C_bottle2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.2C/bottle2.json');
       

    }

    },



    create:function(game){
		
		_this.amplify = null;
		noofAttempts=0;
        AnsTimerCount=0;
        selectedAns = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCkeckVar = 0;
		_this.balancevar = 0;
		
		_this.playOnce = true;
		_this.playTwise = true;
		
        no1=0;
        //qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 0;
        objAdded = 0;
        /*objArray = [
        ['bottle','Level32C_Ball',40,10,10,3],['Can','Level32C_Book',40,20,10,5],['Can','Level32C_Comb',40,5,10,2],['Can','Level32C_Eraser',40,5,10,2],['Can','Level32C_Glass',40,10,10,3],['Can','Level32C_Mug',40,20,10,5],['Can','Level32C_Key',40,5,10,2],['Can','Level32C_Pappaya',40,30,10,7],['Can','Level32C_Carrot',40,5,10,1],['Can','Level32C_Coin',40,5,10,1]
        ['Can','Level32C_Pencil',40,5,10,2],['Can','Level32C_ScrewDriver',40,10,10,3],['Can','Level32C_Shoe',40,15,10,4],
        ['Ball','Level32C_Book',10,25,3,6],['Ball','Level32C_Comb',20,5,5,2],['Ball','Level32C_Eraser',20,5,5,2],['Ball','Level32C_Glass',20,10,5,3],['Ball','Level32C_Mug',10,25,3,6],['Ball','Level32C_Key',20,5,5,2],['Ball','Level32C_Pappaya',10,30,3,7],['Ball','Level32C_Pencil',20,5,5,2],['Ball','Level32C_ScrewDriver',20,8,5,2],['Ball','Level32C_Shoe',20,10,5,3],['Ball','Level32C_Carrot',20,5,5,1],['Ball','Level32C_Shoe',20,5,5,1],
        ['Book','Level32C_Comb',25,5,6,2],['Book','Level32C_Eraser',25,5,6,2],['Book','Level32C_Glass',25,10,6,3],['Book','Level32C_Mug',25,10,6,3],['Book','Level32C_Key',25,5,6,2],['Book','Level32C_Pappaya',20,40,5,10],['Book','Level32C_Pencil',25,5,6,2],['Book','Level32C_ScrewDriver',25,8,6,2],['Book','Level32C_Shoe',25,10,6,3],['Book','Level32C_Carrot',25,5,6,1],['Book','Level32C_Coin',25,5,6,1],
        ['Eraser','Level32C_Glass',5,20,2,5],['Eraser','Level32C_Mug',5,20,2,5],['Eraser','Level32C_Key',15,5,4,2],['Eraser','Level32C_Pappaya',5,30,2,8],['Eraser','Level32C_Pencil',15,5,4,2],['Eraser','Level32C_ScrewDriver',10,20,3,5],['Eraser','Level32C_Shoe',10,25,3,6],['Eraser','Level32C_Carrot',5,20,1,5],['Eraser','Level32C_Coin',15,5,3,1],
        ['Glass','Level32C_Mug',10,25,3,6],['Glass','Level32C_Key',15,5,3,2],['Glass','Level32C_Pappaya',10,30,3,7],['Glass','Level32C_Pencil',15,5,4,2],['Glass','Level32C_ScrewDriver',20,10,5,3],['Glass','Level32C_Shoe',10,20,3,5],['Glass','Level32C_Carrot',20,10,5,2],['Glass','Level32C_Coin',20,5,5,1],
        ['Mug','Level32C_Key',20,5,5,2],['Mug','Level32C_Pappaya',10,30,3,8],['Mug','Level32C_Pencil',20,5,5,2],['Mug','Level32C_ScrewDriver',20,10,5,3],['Mug','Level32C_Shoe',10,20,3,5],
        ['Key','Level32C_Pappaya',5,30,2,8],['Key','Level32C_Pencil',15,5,4,2],['Key','Level32C_ScrewDriver',5,20,1,5],['Key','Level32C_Shoe',5,20,1,5],['Key','Level32C_Carrot',5,20,1,5],['Key','Level32C_Coin',20,5,5,1],
        ['Pappaya','Level32C_Glass',25,10,6,3],['Pappaya','Level32C_Pencil',25,5,6,1],['Pappaya','Level32C_ScrewDriver',30,10,7,3],['Pappaya','Level32C_Shoe',30,10,7,3],['Pappaya','Level32C_Carrot',30,10,7,3],['Pappaya','Level32C_Coin',30,5,7,1],
        ['Pencil','Level32C_Glass',5,20,1,5],['Pencil','Level32C_ScrewDriver',5,20,1,5],['Pencil','Level32C_Shoe',5,20,1,5],
        ['ScrewDriver','Level32C_Glass',10,25,2,6],['ScrewDriver','Level32C_Shoe',10,25,2,6],
        ['Shoe','Level32C_Glass',25,10,6,2],['Carrot','Level32C_Coin',20,5,5,1]
        ];*/
        
        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        qArrays = this.shuffle(qArrays);
        
        
        /*weightArray = [
            [40,20],[40,20],[40,10],[40,10],[40,20],[40,20],[40,30],[40,10],[40,30],[40,10],[40,20],[40,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
        ];
        
        
        
        angleArray = [[10,5]];*/
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

       

        bg1 =_this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level32C_level2Bg');
		
		_this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
		
		var popup = this.add.sprite(480,65,'game32d_popup');
        popup.name="game32d_popup";
        if(window.languageSelected=="English")
            popup.frame=0;
        else if(window.languageSelected=="Hindi")
            popup.frame=1;
        else if(window.languageSelected=="Kannada")
            popup.frame=2;
        else if(window.languageSelected=="Odiya")
            popup.frame=3;
        else
            popup.frame=4;
        popup.anchor.setTo(0.5);
       
		_this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           
            _this.getVoice();
            
        },_this);
        
		
		_this.timebg=this.add.sprite(305,6,'Level42C_timer');
		_this.timebg.scale.setTo(1,1);
			
		_this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
		
         _this.generateStarsForTheScene(6);
		
   
        //no1++;
        this.getQuestion();
        
        //this.Voice1(10);
        //this.input.enabled = false;
        
       // this.gotoFirstQuestion();
        

    },

    updateTimer:function() {        
     _this.counterForTimer++;
     if(_this.counterForTimer>59)
         {
          _this.counterForTimer = 0;
           if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
                        }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
         }
                else{
                        if (_this.counterForTimer < 10)        
                                _this.seconds = '0' + _this.counterForTimer;
                        else
                                _this.seconds = _this.counterForTimer;
                    }
     _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
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
		_this.timer1.stop();
       numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        if(no1<5)
        {
            count =0;
            no1++;
			
			_this.balanceCkeckVar = 0;
			_this.balancevar = 0;
            
            var MaintweenDestroy = this.add.tween(objGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(scale1Group);
            Maintween1Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                scale1Group.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(scale2Group);
            Maintween2Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                scale2Group.destroy();
            },this);
            var Maintween3Destroy = this.add.tween(obj1Group);
            Maintween3Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween3Destroy.onComplete.add(function(){
                obj1Group.destroy();
            },this);
            var Maintween4Destroy = this.add.tween(obj2Group);
            Maintween4Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween4Destroy.onComplete.add(function(){
                obj2Group.destroy();
                this.getQuestion();
            },this);
            
        
        }
        else
        {
			_this.timer1.stop();
			_this.timer1 = null;
           // //console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
            
            this.state.start('grade3_2CScore');
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
    {
        
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    addNumberPad:function(){
        
          numGroup = this.add.group();
        var x = 50;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;
            
            /*var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level32C_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=65;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
        
		if(window.languageSelected=="English")
				var gmTxt1 = this.add.text(x+90,505, "gm");
			else if(window.languageSelected=="Hindi")
		   var gmTxt = this.add.text(x+90,505, "ग्राम");
			else if(window.languageSelected=="Kannada")
				var gmTxt = this.add.text(x+90,505, "ಗ್ರಾಂ"); 
			else if(window.languageSelected=="Odiya")
				var gmTxt = this.add.text(x+90,505, "ଗ୍ରାମ");
            else
                var gmTxt = this.add.text(x+90,505, "ગ્રા");
			
		if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati"){
				gmTxt.anchor.setTo(0.5);
				gmTxt.align = 'center';

				gmTxt.font = 'Alte Haas Grotesk';
				gmTxt.fontSize = 24;
				gmTxt.fontWeight = 'normal';
				gmTxt.fill = '#65B4C3';

				gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
				 numGroup.add(gmTxt);
		}
		else{
			gmTxt1.anchor.setTo(0.5);
			gmTxt1.align = 'center';

			gmTxt1.font = 'myfont';
			gmTxt1.fontSize = 28;
			gmTxt1.fontWeight = 'normal';
			gmTxt1.fill = '#65B4C3';

			gmTxt1.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
			 numGroup.add(gmTxt1);
		}
		
        var wrongbtn = numGroup.create(x+160,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+220,505,'tick');
        rightbtn.anchor.setTo(0.5);
        //rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        //rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){ _this.clickSound = _this.add.audio('ClickSound');
		target.frame = 1;
            _this.clickSound.play();
		 var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32C_CrossButton", 
                access_token: window.acctkn 
            } 
				_this.time.events.add(300, function(){ target.frame = 0;}, _this);
            //absdsjsapi.saveInteractEvent(interactEvent);
			enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
			target.frame = 1;
			 var currentTime = window.timeSaveFunc();

             noofAttempts++;
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32C_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
             _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
						
					if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

                     var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
					
                    ////console.log("correct");
                    target.events.onInputDown.removeAll();
                    _this.speakerbtn.inputEnabled=false;
                    //mainSprite.frame = 1;
//                    var anim = weightScale3.animations.add('glow');
//                    anim.play(10);
//                    var anim2 = weightScale4.animations.add('glow');
//                    anim2.play(10);
                    //var anim = mainSprite.animations.add('glow');
                    //anim.play(10);
                    
                  if(scale2Group.getByName("targetAnim") && _this.doAnim)
                    {
                       
                        var tempFrame = scale2Group.getByName("targetAnim").frame; 
                        var tempX = scale2Group.getByName("targetAnim").x; 
                        var tempY = scale2Group.getByName("targetAnim").y;
                        scale2Group.getByName("targetAnim").loadTexture('Level32C_w2AnimGlow',0,false);
                        scale2Group.getByName("targetAnim").frame = tempFrame;
                        scale2Group.getByName("targetAnim").x = tempX+2.5;
                        scale2Group.getByName("targetAnim").y = tempY+17;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                            largeTween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                        largeTween3.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                                //this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
                    if(scale2Group.getByName("targetAnim") && (!_this.doAnim))
                    {
                        var tempFrame = scale2Group.getByName("targetAnim").frame; 
                        var tempX = scale2Group.getByName("targetAnim").x; 
                        var tempY = scale2Group.getByName("targetAnim").y;
                        scale2Group.getByName("targetAnim").loadTexture('Level32C_w1AnimGlow',0,false);
                        scale2Group.getByName("targetAnim").frame = tempFrame;
                        scale2Group.getByName("targetAnim").x = tempX+5;
                        scale2Group.getByName("targetAnim").y = tempY+18.5;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                            largeTween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                        largeTween3.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                               // this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
					/*timer.stop();
					timer = null;
					
					noofAttempts++;
					var currentTime = window.timeSaveFunc();
							var saveAsment = 
							{ 
								id_game_play: window.gameid,
								id_question: window.gameid,  
								answer_given: "Yes",
								time2answer: AnsTimerCount,
								attempts: noofAttempts,
								date_time_event: currentTime, 
								access_token: window.acctkn 
							}
					AnsTimerCount=0;
					absdsjsapi.saveAssessment(saveAsment);*/
					
                    
                     _this.cmusic1 = _this.add.audio('celebr');
		              _this.cmusic1.play();
                     var starAnim = starsGroup.getChildAt(count1);
                       // //console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play();
                       // anim.onComplete.add(function(){this.removeEverthing();},this);
                        this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					this.time.events.add(300, function(){target.frame = 0;},this);
					//noofAttempts++;
                    ////console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    if(scale1Group.getByName("targetAnim"))
                    {
                        shake.shake(10, scale1Group.getByName("targetAnim"));
                    }
                    if(scale2Group.getByName("targetAnim"))
                    {
                        shake.shake(10, scale2Group.getByName("targetAnim"));
                    }
                    _this.wmusic1 = _this.add.audio('waudio');
		              _this.wmusic1.play();  
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
						_this.balancevar = 0;
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                   
                        var tempAngle = 0;
                        var tempweight = 0;
                        if(tp!=null)
                        {
                        for(var j=0;j<tp.length;j++)
                        {
                            if(!tp.getChildAt(j).visible||tp.getChildAt(j).tint == 0xA1A1A1)
                            {
                                tp.getChildAt(j).visible = true;
                                tp.getChildAt(j).tint = 0xFFFFFF;
                                tp.getChildAt(j).inputEnabled = true;
                                tp.getChildAt(j).input.useHandCursor = true;
                                tp.getChildAt(j).events.onInputDown.add(function(target){
									/*var currentTime = window.timeSaveFunc();
									var interactEvent = 
									{ 
										id_game_play: window.gameid, 
										id_question: window.gameid,  
										date_time_event: currentTime, 
										event_type: "click", 
										res_id: target.name, 
										access_token: window.acctkn 
									} 
									
									//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                                    this.objectClicked(target,tweenVal,angleVal);
                                },this);
                                //break;
                                tempAngle+=angleVal;
                                tempweight+=tweenVal;
                            }
                        }
                        }
                  
                        if(scale1Group.getByName("targetAnim"))
                        {
                            scale1Group.getByName("targetAnim").destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            weightScale2.angle+=tempAngle;
                            scale1Group.y-=tempweight;
                            scale2Group.y+=tempweight;
                        }
                        if(scale2Group.getByName("targetAnim"))
                        {
                            scale2Group.getByName("targetAnim").destroy();
                            weightScale2.angle-=tempAngle;
                            scale1Group.y+=tempweight;
                            scale2Group.y-=tempweight;
                        }
                       //this.getQuestion();
                        
                    },this);
                }
                                         
        },this);
        
        ////console.log(numGroup.length);
        
       /* for(var k=0;k<numGroup.length;k++)
        {
            numGroup.getChildAt(k).inputEnabled = false;  
        }*/
                
    },
    
    
    numClicked:function(target){
        ////console.log(target.name);
        
          var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32C_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
         _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(selectedAns.length<3)
        {
            selectedAns += target.frame;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
       // //console.log(selectedAns);
        
    },
    getQuestion:function(target)
    {     

        _this.doAnim = false;

		noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
		if(_this.playOnce == true && qArrays[no1]<=10)
		{
			_this.playOnce = false;
			_this.getVoice();
		}
		if(_this.playTwise == true && qArrays[no1]>10)
		{
			_this.playTwise = false;
			_this.getVoice();
		}
    	switch(qArrays[no1])    
            //switch(no1)    
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEightQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11:  
                    _this.doAnim = true;
                    this.gotoEleventhQuestion();
    				break;
            case 12: 
                    _this.doAnim = true;
                    this.gotoTwelvethQuestion();
    				break;
            case 13: 
                    _this.doAnim = true;
                    this.gotoThirteenthQuestion();
    				break;
            case 14: 
                     _this.doAnim = true;
                     this.gotoFourteenthQuestion();
    				break;
            case 15: 
                     _this.doAnim = true;
                     this.gotoFifteenthQuestion();
    				break;
            case 16: 
                     _this.doAnim = true;
                     this.gotoSixteenthQuestion();
    				break;
            case 17: 
                     _this.doAnim = true;
                     this.gotoSeventeenthQuestion();
    				break;
            case 18: 
                     _this.doAnim = true;
                     this.gotoEighteenthQuestion();
    				break;
            case 19: 
                     _this.doAnim = true;
                     this.gotoNinteenthQuestion();
    				break;
    	}
        
    },
     
   
     
    
    
    gotoFirstQuestion:function(){
		
		_this.questionid = 1;
        //_this.getVoice();;
       /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_bottle');
        object1.name = "bottle";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.8);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
       var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "100";
		_this.balanceCkeckVar =  10;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */   
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
   /* Voice1:function(question){
        if(no1<10){
        if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
        }
        else
            {
                if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
            }
    },*/
    
    gotoSecondQuestion:function(){
		
		_this.questionid = 1;
         //_this.getVoice();;
        /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.2,0.9);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "90";
		_this.balanceCkeckVar = 9;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
               weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        
        //this.objectClicked(object1,50,8);
       // this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */   
        
                 objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
     
    gotoThirdQuestion:function(){
		
		_this.questionid = 1;
         //_this.getVoice();;
       /*  if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/

        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
 
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Shoe');
        object1.name = "Shoe";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.44,1);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "80";
		_this.balanceCkeckVar =  8;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
               weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */   
        
             objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoFourthQuestion:function(){
		
		_this.questionid = 1;
         //_this.getVoice();;
         /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
         
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);   
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Book');
        object1.name = "Book";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
             object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.8,1.14);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "70";
		_this.balanceCkeckVar = 7;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
         
                weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */ 
         
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
      gotoFifthQuestion:function(){
		 
		_this.questionid = 1;
         //_this.getVoice();;
           /*if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
         var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Ball');
        object1.name = "Ball";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
             object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.3,1.43);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
         var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "60";
		_this.balanceCkeckVar = 6;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
          
          
                 weightScale2.angle-=8.5;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8.5);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
          
               objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoSixthQuestion:function(){
		 
		_this.questionid = 1;
         //_this.getVoice();;
         /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,276,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,196,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Carrot');
        object1.name = "Carrot";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
             object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.9,1.61);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "50";
		_this.balanceCkeckVar = 5;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+43;
         
                weightScale2.angle-=8.3;
          scale1Group.y-=20;
          scale2Group.y+=20;
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8.3);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
         
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
      gotoSeventhQuestion:function(){
		 
		_this.questionid = 1;
         //_this.getVoice();;
          /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,263,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,215,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Glass');
        object1.name = "Glass";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.905,1.3);
            },this);.1
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "40";
		_this.balanceCkeckVar = 4;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
          
                 weightScale2.angle-=5;
          scale1Group.y-=12;
          scale2Group.y+=12;
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,12,5);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */
          
               objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
      gotoEightQuestion:function(){
		
		_this.questionid = 1;
         //_this.getVoice();;
          /* if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,262,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,213,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_ScrewDriver');
        object1.name = "ScrewDriver";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,4,1.1);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "30";
		_this.balanceCkeckVar = 3;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+42;
          
                 weightScale2.angle-=3.5;
          scale1Group.y-=12;
          scale2Group.y+=12;
        
        //this.objectClicked(object1,50,8);
       // this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,12,4);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
          
               objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoNinthQuestion:function(){
		 
		_this.questionid = 1;
         //_this.getVoice();;
        /*  if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,254,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,222,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Mug');
        object1.name = "Mug";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
             object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.95,2.05);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "20";
		_this.balanceCkeckVar = 2;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
         
                weightScale2.angle-=4;
          scale1Group.y-=8;
          scale2Group.y+=8;
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,8,4);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
         
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoTenthQuestion:function(){
		 
		_this.questionid = 1;
         //_this.getVoice();;
          /*if(window.languageSelected=="English")
                    {
                        ElevelCa.play();
                        ElevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCa.play();
                        HlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCa.play();
                        KlevelCa.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,254,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,222,'Level32C_level2weight42');
        
         var graphics1 = this.add.graphics(40, -160);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,200);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_coin1');
        object1.name = "coin1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'Level32C_w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,8,4.3);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
       var graphics2 = this.add.graphics(0, 250);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,170);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "10";
		_this.balanceCkeckVar = 1;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+42;
        
        weightScale2.angle-=4;
          scale1Group.y-=8;
          scale2Group.y+=8;
         
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,8,4);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
      
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
      gotoEleventhQuestion:function(){
		 
		_this.questionid = 2;
         //_this.getVoice();;
          /*if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Banana');
        object1.name = "Banana";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.2,0.9);
            },this);
            
            x+=25;
            
            obj1Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "9";
		_this.balanceCkeckVar = 9;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+42;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
          
               objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoTwelvethQuestion:function(){
		
		_this.questionid = 2;
         //_this.getVoice();;
         /*if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_tomoto');
        object1.name = "tomoto";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.44,1);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "8";
		_this.balanceCkeckVar = 8
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+130;
                        object1.y = weightScale3.y+44;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */   
         
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
      gotoThirteenthQuestion:function(){

        _this.questionid = 2;
         //_this.getVoice();;
         /* if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_spoon');
        object1.name = "spoon";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.9,1.14);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "7";
		_this.balanceCkeckVar = 7;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+130;
                        object1.y = weightScale3.y+42;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */
          
               objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
     gotoFourteenthQuestion:function(){
		
		_this.questionid = 2;
         //_this.getVoice();;
       /*  if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(200,280,'Level32C_Comb1');
        object1.name = "Comb1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.3,1.43);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "6";
		_this.balanceCkeckVar = 6;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */ 
         
              objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
      
     },
    
    
     gotoFifteenthQuestion:function(){
		
		_this.questionid = 2;
         //_this.getVoice();;
        /*if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,235,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Level32C_Key');
        object1.name = "Key";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.9,1.61);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "5";
		_this.balanceCkeckVar = 5;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+130;
                        object1.y = weightScale3.y+42;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
           objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSixteenthQuestion:function(){
		
		_this.questionid = 2;
         //_this.getVoice();;
       /* if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,235,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_eraser1');
        object1.name = "eraser1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.905,1.3);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "4";
		_this.balanceCkeckVar = 4;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+130;
                        object1.y = weightScale3.y+41;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5;
          scale1Group.y+=12;
          scale2Group.y-=12;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
           objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
      gotoSeventeenthQuestion:function(){
		  
		_this.questionid = 2;
         //_this.getVoice();;
        /* if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_Pencil');
        object1.name = "Pencil";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.995,1.09);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "3";
		_this.balanceCkeckVar = 3;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+41;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4;
          scale1Group.y+=12;
          scale2Group.y-=12;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
           objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
     gotoEighteenthQuestion:function(){
		 
		_this.questionid = 2;
         //_this.getVoice();;
        /* if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_rope');
        object1.name = "rope";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
		/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
            if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
			/*	var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,3.95,2.05);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar = 2;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+41;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4;
          scale1Group.y+=8;
          scale2Group.y-=8;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
           objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoNinteenthQuestion:function(){
		
		_this.questionid = 2;
         //_this.getVoice();;
        /*if(window.languageSelected=="English")
                {
                        ElevelCb.play();
                        ElevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        HlevelCb.play();
                        HlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }
                    else
                    {
                        KlevelCb.play();
                        KlevelCb.onStop.add(function(){this.input.enabled = true;}, this);
                    }*/
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'Level32C_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32C_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32C_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'Level32C_level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'Level32C_level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-200,280,'Level32C_leef');
        object1.name = "leef";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<12;i++)
        {
            
           if(i==6)
            {
                x-=165;
                y+=14;
            }
            object2 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'Level32C_w2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w2";
            object2.anchor.setTo(0.5,1);
            //object2.scale.setTo(0.7,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
				/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);*/
			
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,8,4.3);
            },this);
            x+=25;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "1";
		_this.balanceCkeckVar = 1;
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+140;
                        object1.y = weightScale3.y+42;
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4;
          scale1Group.y+=8;
          scale2Group.y-=8;
        //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
           objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },


    objectClicked:function(target,tween1,tween2)
    {
             _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

             var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32C_MeasuringObject", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){

                 var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32C_MeasuringObject", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&_this.doAnim)
                {
                     if(target.name=="bottle"||target.name=="Pappaya"||target.name=="Shoe"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef")
                    {
                        scale2Empty = false;
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+25;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
						 _this.balancevar++;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									_this.clungSound = _this.add.audio('ClungSound');
									_this.clungSound.play();
								}, this);
							}
							
                       var tempFrame = 0;
                       target.visible = false;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim').frame+1;
                            scale2Group.getByName('targetAnim').destroy();
                        }
                        tempName = "Level32C_"+target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+25,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            ////console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);
                    }
                    _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                    target.events.onInputDown.removeAll();
                    //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&(!_this.doAnim))
                {
                    if(target.name=="bottle"||target.name=="Pappaya"||target.name=="Shoe"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef")
                    {
                        scale2Empty = false;
                    
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
						_this.balancevar++;
						if(_this.balanceCkeckVar == _this.balancevar)
							{
								_this.time.events.add(200, function()
								{
									_this.clungSound = _this.add.audio('ClungSound');
									_this.clungSound.play();
								}, this);
							}
							
                       var tempFrame = 0;
                      // target.visible = false;
                        target.tint = 0xA1A1A1;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim').frame+1;
                            scale2Group.getByName('targetAnim').destroy();
                        }
                        tempName = "Level32C_"+target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+44,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            ////console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);
                    }
                    _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    
    objectRemoved:function(target,tween1,tween2)
    {
		console.log("Removed");
         _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32C_MeasuringObject", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);

        //console.log(target.parent);
        var targetParent = target.parent;
        if(targetParent==scale2Group&&(!_this.doAnim))
        {
            console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+43.5,tempName);
        }
        else
        {
             console.log("here2");
            var targetAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+25,tempName);
        }
        
        targetAnim.name = "targetAnim";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
            this.objectRemoved(target,tweenVal,angleVal);
        },this);
               
			   console.log("QQQQQ");
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                //console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){

                 var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32C_MeasuringObject", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  
					
                    _this.snap1 = _this.add.audio('snapSound');
					_this.snap1.play();
					_this.balancevar--;
					if(_this.balanceCkeckVar == _this.balancevar)
						{
							_this.time.events.add(200, function()
							{
								_this.clungSound = _this.add.audio('ClungSound');
								_this.clungSound.play();
							}, this);
						}
							
                    for(var j=0;j<tp.length;j++)
                    {
                        //console.log(tp.getChildAt(j).tint);
                        if(tp.getChildAt(j).tint == 0xA1A1A1 || !tp.getChildAt(j).visible)
                        {
                            tp.getChildAt(j).visible = true;
                            tp.getChildAt(j).tint = 0xFFFFFF;
                            tp.getChildAt(j).inputEnabled = true;
                            tp.getChildAt(j).input.useHandCursor = true;
                            tp.getChildAt(j).events.onInputDown.add(function(target){
                                this.objectClicked(target,tweenVal,angleVal);
                            },this);
                            
                            if(!targetAnim.visible)
                                targetAnim.destroy();
                            
                            break;
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                        console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                        console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                    if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    target.destroy();
                   // newTarget.x = tempX;
                   // newTarget.y = tempY;
                   // newTarget.visible = false;
                   // target.frame+=1;
                   // target.visible=true;
                }
            },this);
    
        
         /*   for(var j=0;j<obj2Group.length;j++)
            {
                if(!obj2Group.getChildAt(j).visible)
                {
                    newTarget = obj2Group.getChildAt(j); 
                   
                    tempX = newTarget.x;
                    tempY = newTarget.y;
                    
                    newTarget.visible = true;
                    break;
                }
            }
        
            newTarget.input.enableDrag();
            newTarget.events.onDragStop.add(function(){
                newTarget.input.disableDrag();
                newTarget.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {
                          
                    _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                    newTarget.x = tempX;
                    newTarget.y = tempY;
                }
                else
                {
                    newTarget.x = tempX;
                    newTarget.y = tempY;
                    newTarget.visible = false;
                    target.frame+=1;
                    target.visible=true;
                }
            },this);*/
   },
                                                                  
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0,'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
             //object1.events.onInputDown.add(this.checkCorrectAns,this);   
             //object2.events.onInputDown.add(this.checkCorrectAns,this);
          /*  for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0,'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
            // object1.events.onInputDown.add(this.checkCorrectAns,this);   
            // object2.events.onInputDown.add(this.checkCorrectAns,this);  
           /* for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    
     
   
    
   
    generateStarsForTheScene:function(count)
    {
        starsGroup = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(this.world.centerX-15, 10,'starAnim1');
            
            for(var j =0;j<i;j++)
            {
                if(starsGroup.getChildAt(j))
                {
                    starsGroup.getChildAt(j).x-=15;
                    starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },

     /*speakeron:function(){
        this.stopAllVoice();
        
        switch(qArrays[no1])
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
                    if(window.languageSelected=="English")
                    ElevelCa.play();
                    else if(window.languageSelected=="Hindi")
                    HlevelCa.play();
                    else
                    KlevelCa.play();
                    break;
                
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                    if(window.languageSelected=="English")
                    ElevelCb.play();
                    else if(window.languageSelected=="Hindi")
                    HlevelCb.play();
                    else
                    KlevelCb.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        ElevelCa.stop();
        HlevelCa.stop();
        KlevelCa.stop();
        ElevelCb.stop();
        HlevelCb.stop();
        KlevelCb.stop();
       
    },
    */
 
    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(qArrays[no1])
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
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/ElevelCa.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/HlevelCa.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/KlevelCa.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2A/ElevelCa.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/3.2_C1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/ElevelCb.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/HlevelCb.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/KlevelCb.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2A/ElevelCb.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2A/3.2_C2.mp3");
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
                 console.log("stop"); 
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
    
    shutdown:function()
    {
        _this.stopVoice();

        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1,no2,no3;
        delete count;
        delete count1;
        delete qArrays;
        delete qArrays1;
        delete qArrays2;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete rightAns;
        delete mainSprite;
        delete tapeXPos;
        delete tapeYPos;

        delete enterTxt;

        delete noofAttempts;
        delete timer;
        delete AnsTimerCount;

        delete gameid;*/
        
    }
    
};