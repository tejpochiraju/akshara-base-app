Game.addition_NOAG_4_3level2=function(){};
var randarr;
var yellowCoinArray;
var coinset;
var grpdrag;

Game.addition_NOAG_4_3level2.prototype={


     init:function(param,score,timerStopVar)
    {
        _this = this;
        _this.gameid = "7.2.3";
        
        this.Stararr = param;
        this.score = score;
        
        this.timerStopVar = timerStopVar;
       //alert(this.timerStopVar);
        console.log(this.timerStopVar);
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        _this.coinFall = _this.add.audio('coinFall');
        _this.cashOut = _this.add.audio('cashOut');
        
        
      /* // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       //telInitializer.gameIdInit("CoinMachine7_2_1",gradeSelected);
        

    },
    
	create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

		_this.amplify = null;
		_this.eraserclicked=0;
        _this.displayNopad=false;
        _this.zeroalready=0;
        _this.bluecarry=0;
        _this.checkno=0;
        _this.lessthanb=0;
        _this.lessthangreen=0;
        coinset=null;
        _this.numpad=false;
        _this.LeverBlueNumber1=0;
        _this.noaction=0;
        _this.already10=0;
        grpdrag=this.add.group();
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.YellowAnimInc1 = 0;
        _this.GreenAnimInc = 0;
        _this.BlueAnimInc = 0;
        _this.BlueAnimInc1 = 0;
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
        randarr = new Array();
        yellowCoinArray = new Array();
        _this.toDisplayNoPad = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [6,7,8];
         _this.qArrays1 = [6,7,5];
        _this.greenArray1 = [1,2,3,4,5];
        _this.greenArray2 =[1,2,3];
        _this.displayNumber1 = 0;
        _this.displayNumber2 = 0;
       
        _this.animArraylength = 9;
         _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=4;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level723_bg1');
            if(window.languageSelected == "English")
                {
                   _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/English/Game 7.2.3.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Hindi/Game 7.2.3.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Kannada/Game 7.2.3.mp3";
                }
                else
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Odiya/7.2.3.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
             commonNavBar.addNavBar(this,_this.soundurl,"numberoperation1");
             commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
             this.hintparams=['NOAG43','level2',false,false,true,1];
              commonNavBar.addHint(this,this.hintparams);
        
        
        _this.coinPannel = _this.add.sprite(70,58,'Level723_coinMachinePannel');
        _this.Pannel = _this.add.sprite(624,125,'Level723_pannel1');
        
        _this.LeverGreen = _this.add.sprite(110,67,'Level723_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
		_this.LeverGreen.inputEnabled=false;
        _this.LeverBlue = _this.add.sprite(290,67,'Level723_LeverBlue');//290,60
         _this.LeverBlue.name ="LeverBlue";
		_this.LeverBlue.inputEnabled=false;
        _this.LeverYellow = _this.add.sprite(470,67,'Level723_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
		
        
        _this.Levercoin1 = _this.add.sprite(505,160,'Level723_coin1Anim');
        _this.Levercoin1.visible = false;
        _this.Levercoin2 = _this.add.sprite(510,160,'Level723_coin1Anim');
        _this.Levercoin2.visible = false;
        _this.Levercoin10 = _this.add.sprite(335,160,'Level723_coin10Anim');
        _this.Levercoin10.visible = false; 
        _this.Levercoin10s = _this.add.sprite(332,160,'Level723_coin10Anim');
        _this.Levercoin10s.visible = false; 
        _this.Levercoin100 = _this.add.sprite(153,220,'Level723_coin100Anim');
        _this.Levercoin100.visible = false; 
        
        
        _this.LeverGreenNumber = _this.add.sprite(129,99,'Level723_numberVSmall');
        _this.LeverGreenNumber.frame = 0;
        _this.LeverBlueNumber = _this.add.sprite(309,99,'Level723_numberVSmall');//304,83
         _this.LeverBlueNumber.frame = 0;
        _this.LeverYellowNumber = _this.add.sprite(489,99,'Level723_numberVSmall');
        _this.LeverYellowNumber.frame = 0;
        
         _this.numBox1 = _this.add.sprite(648,300,'Level723_numberBox');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(718,300,'Level723_numberBox');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(789,300,'Level723_numberBox');
         _this.numBox3.name = "numBox3";
        
        _this.askNumber1 = _this.add.sprite(795,148,'Level723_numberSmall');
         _this.askNumber1.frame = 1;
        // _this.askNumber1.scale.setTo(1.3,1.3);
        
            _this.askNumber2 = _this.add.sprite(795,210,'Level723_numberSmall');
        _this.askNumber2.alpha=0;
            _this.askNumber2.frame = 1;
        //    _this.askNumber2.scale.setTo(1.3,1.3);
        
        _this.askNumber3 = _this.add.sprite(725,148,'Level723_numberSmall');
         _this.askNumber3.frame = 1;
       //  _this.askNumber3.scale.setTo(1.3,1.3);
        
            _this.askNumber4 = _this.add.sprite(725,210,'Level723_numberSmall');
        _this.askNumber4.alpha=0;
            _this.askNumber4.frame = 1;
      //      _this.askNumber4.scale.setTo(1.3,1.3);
        
        _this.askNumber5 = _this.add.sprite(655,148,'Level723_numberSmall');
         _this.askNumber5.frame = 1;
       //  _this.askNumber5.scale.setTo(1.3,1.3);
        
            _this.askNumber6 = _this.add.sprite(655,210,'Level723_numberSmall');
        _this.askNumber6.alpha=0;
            _this.askNumber6.frame = 1;
          //  _this.askNumber6.scale.setTo(1.3,1.3);
        

        _this.numBoxNum1 = _this.add.sprite(663,310,'Level723_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(0.9,0.9);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(732,310,'Level723_numberSmall');
         _this.numBox2Pressed = false;
        _this.numBoxNum2.scale.setTo(0.9,0.9);
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(803,310,'Level723_numberSmall');
         _this.numBox3Pressed = false;
        _this.numBoxNum3.scale.setTo(0.9,0.9);
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
        _this.plusSign = _this.add.sprite(610,220,'Level723_plusSign');
        _this.insertbox1 = _this.add.sprite(274,154,'Level723_coininsertbox','a1');
        _this.insertbox1.name="dragbluecoin";
        _this.insertbox2 = _this.add.sprite(459,154,'Level723_coininsertbox','a1');
        _this.insertbox2.name="dragcoin";
         _this.generateStarsForTheScene(9);
        
        
        _this.getQuestion();
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

    getQuestion:function(target)
    {  //console.log("get Question "+_this.no1);
       
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin100 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
     _this.yellowcoin=_this.add.sprite(0,0,'Level723_Coin1');
        _this.yellowcoin.visible=true;
     
     _this.bluecoin=_this.add.sprite(325,0,'Level723_Coin10');
        _this.bluecoin.visible=true;
     
     _this.greencoin=_this.add.sprite(0,0,'Level723_Coin100');
        _this.greencoin.visible=true;
        
        //_this.timer = _this.time.create(false);
        
         _this.toCheckNumberPad = true;
          
        
        _this.questionid = "7.2_3#SCR-"+_this.sceneCount;
        _this.inputDownFunctionForLeverAndBox();
        _this.displayNumber1 = _this.qArrays[0];
        
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.displayNumber2 = _this.qArrays1[0];
        _this.askNumber2.frame = _this.displayNumber2 + 1;
     
        _this.qArrays1 = _this.shuffle( _this.qArrays1);
        _this.displayNumber3 = _this.qArrays1[0];
        
        _this.qArrays1 = _this.shuffle( _this.qArrays1);
        _this.displayNumber4 = _this.qArrays1[0];
        _this.askNumber4.frame = _this.displayNumber4 + 1;
       
       
        _this.askNumber1.frame = _this.displayNumber1+1;
        _this.askNumber3.frame = _this.displayNumber3+1;
     
        _this.greenArray1 = _this.shuffle( _this.greenArray1);
        _this.displayNumber5 = _this.greenArray1[0];
        _this.askNumber5.frame = _this.displayNumber5 + 1;
        _this.greenArray2 = _this.shuffle( _this.greenArray2);
        _this.displayNumber6 = _this.greenArray2[0];
        _this.askNumber6.frame = _this.displayNumber6 + 1;
     
        _this.Ans1 = String(_this.displayNumber5) + String(_this.displayNumber3) + String(_this.displayNumber1);
        _this.Ans2 = String(_this.displayNumber6) + String(_this.displayNumber4) + String(_this.displayNumber2);
         _this.displayNumber1 = Number(_this.displayNumber1);
         _this.displayNumber2 = Number(_this.displayNumber2);
         _this.displayNumber3 = Number(_this.displayNumber3);
         _this.displayNumber4 = Number(_this.displayNumber4);
         _this.displayNumber5 = Number(_this.displayNumber5);
         _this.displayNumber6 = Number(_this.displayNumber6);
     
        _this.rightAns = Number(_this.Ans1)+Number(_this.Ans2);
         //console.log("ans1 =="+_this.Ans1);
         //console.log("ans2 =="+_this.Ans2);
         //console.log("correct ans =="+_this.rightAns);
         _this.assign1=_this.displayNumber1;
         _this.assign=_this.displayNumber2;

         _this.assign3=_this.displayNumber3;
         _this.assign4=_this.displayNumber4;

         _this.assign5=_this.displayNumber5;
         _this.assign6=_this.displayNumber6;
     
    
     if(_this.sceneCount==1){
         _this.timeupdate = 1000;
     }else{
         _this.timeupdate = 2000;
     }
     this.time.events.add(_this.timeupdate,function(){
          _this.askNumber2.alpha=1;
          _this.askNumber4.alpha=1;
          _this.askNumber6.alpha=1;
     },this);
   
    
     _this.addYellowCoins();
     _this.addBlueCoins();
     _this.addGreenCoins();
    },
  inputDownFunctionForLeverAndBox:function(){
      
      _this.Coin1 = _this.add.sprite(500,210,'Level723_Coin1');
      _this.Coin1.visible = false;
      _this.Coin3 = _this.add.sprite(560,210,'Level723_Coin1');
      _this.Coin3.visible = false;
      
      //_this.Coin1.frame=7;
      _this.Coin10 = _this.add.sprite(332,210,'Level723_Coin10');//350,210
      _this.Coin10.visible = false;
      
      _this.Coin10s = _this.add.sprite(332,210,'Level723_Coin10');//330,145
      _this.Coin10s.visible = false;
      
      _this.Coin100 = _this.add.sprite(153,210,'Level723_Coin100');//330,145   _this.Coin100 = _this.add.sprite(130,210,'Level723_Coin100');
      _this.Coin100.visible = false;
      
      _this.LeverYellow.inputEnabled = true;
     // _this.LeverYellow.input.useHandCursor = true;
	  _this.LeverYellowanim = _this.LeverYellow.animations.add('Level722_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
        _this.LeverYellowanim.play(2,true);
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
      
      // _this.LeverBlue.inputEnabled = true;
      // _this.LeverBlue.input.useHandCursor = true;
     //  _this.LeverBlue.events.onInputDown.add(_this.levelBlueClicked,_this); 
     
     //  _this.LeverGreen.inputEnabled = true;
      // _this.LeverGreen.events.onInputDown.add(_this.leverGreenClicked,_this);
     
       _this.numBox1.inputEnabled = true;
       _this.numBox1.name="numbox1";
     //  _this.numBox1.input.useHandCursor = true;
       _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox2.inputEnabled = true;
       _this.numBox2.name="numbox2";
      // _this.numBox2.input.useHandCursor = true;
       _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox3.inputEnabled = true;
       _this.numBox3.name="numbox3";
     //  _this.numBox3.input.useHandCursor = true;
       _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
      
    _this.Level721_OneToHundred1 = _this.add.sprite(124,70,'Level723_OneToHundred');
	        _this.Level721_OneToHundred10 = _this.add.sprite(304,70,'Level723_OneToHundred');//304,55
	        _this.Level721_OneToHundred10.frame = 1;
	        _this.Level721_OneToHundred100 = _this.add.sprite(484,70,'Level723_OneToHundred');
	        _this.Level721_OneToHundred100.frame = 2;
			
			_this.Level321_OneToHundredE1 = _this.add.sprite(665,120,'Level723_OneToHundred');
	        _this.Level321_OneToHundredE1.scale.setTo(0.8,0.8);
	        _this.Level321_OneToHundredE10 = _this.add.sprite(735,120,'Level723_OneToHundred');
	        _this.Level321_OneToHundredE10.scale.setTo(0.8,0.8);
	        _this.Level321_OneToHundredE10.frame = 1;
	        _this.Level321_OneToHundredE100 = _this.add.sprite(800,120,'Level723_OneToHundred');
	        _this.Level321_OneToHundredE100.scale.setTo(0.8,0.8);
	        _this.Level321_OneToHundredE100.frame = 2;
},
 
    numberBoxClicked:function(target){
        
        
        commonNavBar.playClickSound();
        
        if(target.name=="numbox2"){
            _this.numBox2Pressed = true;
            _this.numBox2.frame = 1;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numbox3"){
            _this.numBox3Pressed = true;
            _this.numBox3.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numbox1"){
            _this.numBox1Pressed = true;
            _this.numBox1.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
        }
        
        if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            //_this.addNumberPad();
        }
        
        /*if( _this.displayNopad==false){
            _this.addNumberPad();
        }*/
    },
   
   
    leve1Clicked:function(target,frame){
        commonNavBar.playCoinFallSound();
         ////console.log("_this.coinset in func=="+_this.coinset);   
         //console.log("Im Clicked "+target.name);
        //console.log("_this.YellowAnimInc"+_this.YellowAnimInc);
        //console.log("_this.YellowAnimInc2"+_this.YellowAnimInc1);

        //console.log("_this.displayNumber2"+_this.displayNumber2);
        
        if(target.name == "LeverYellow"){
              
            if(_this.YellowAnimInc<_this.displayNumber2)
            {
                
                    ////console.log("sum is==="+(_this.displayNumber1 + _this.YellowAnimInc));
                if(_this.displayNumber1+_this.displayNumber2 < 10)
                    _this.lessthan=1;
                if(_this.displayNumber1 + _this.YellowAnimInc < 9){
                    
                    _this.yellowcoin.visible=true;
                _this.LeverYellow.animations.add('Level723_LeverYellow',[0,1,2,3,4,5,0]);
                
                _this.LeverYellow.animations.play('Level723_LeverYellow');  

                _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level723_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin1.animations.play('Level723_coin1Anim');
                _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					
					_this.LeverYellowanim.play(2,true);
					
                    //console.log("on complete");
                _this.LeverYellowNumber.frame++;
                _this.Coin1.visible = true;
                _this.Levercoin1.visible = false;
                _this.Coin1.frame =  _this.YellowAnimInc;
                    
                     //console.log("it is not full"+_this.Coin1.frame);
                    _this.YellowAnimInc++;
                   /* if(coinset=="full" && _this.YellowAnimInc==1){
                        //console.log("Haaaa");
                   // _this.assign3=_this.assign3+1;
                        
                    _this.Coin1.frame =  _this.YellowAnimInc;
                        _this.YellowAnimInc++;
                       
                    }*/
                    _this.Coin1.x=500;
                    if((Number(_this.assign1))==1)
                    _this.Coin1.y=190;
                    else if((Number(_this.assign1))==2)
                        _this.Coin1.y=171;
                    else if((Number(_this.assign1))==3)
                        _this.Coin1.y=152;
                     else if((Number(_this.assign1))==4)
                            _this.Coin1.y=133;
                     else if((Number(_this.assign1))==5)
                            _this.Coin1.y=114;
                     else if((Number(_this.assign1))==6)
                            _this.Coin1.y=95;
                     else if((Number(_this.assign1))==7)
                            _this.Coin1.y=76;
                     else if((Number(_this.assign1))==8)
                            _this.Coin1.y=57;
                    else if((Number(_this.assign1))==9)
                            _this.Coin1.y=38;
                _this.animArrayCoin1.pop();
                     //console.log("coin y===="+_this.Coin1.y);
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                   //console.log("_this.LeverBlueNumber.frame=="+_this.LeverBlueNumber.frame);
                }, this);
                } if(_this.displayNumber1 + _this.YellowAnimInc == 9){
					//_this.LeverYellow.inputEnabled=false;
                    _this.sum2=0;
                    _this.glow=_this.add.sprite(509,203,'Level723_glow');
                    _this.glow.visible=false;
                    _this.glow.height+=26;
                    _this.glow.width+=10;
                    
                    _this.LeverYellow.animations.add('Level723_LeverYellow',[0,1,2,3,4,5,0]);
                _this.LeverYellow.animations.play('Level723_LeverYellow');  
                commonNavBar.playCoinFallSound();
                _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level723_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin1.animations.play('Level723_coin1Anim');
                _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					
					if(_this.displayNumber1+_this.displayNumber2==10){
                        console.log("stop here2");
                        _this.LeverYellowanim.stop();
	                    }
	                    else{
	                        _this.LeverYellowanim.play(2,true);
	                    }
					
                _this.LeverYellowNumber.frame++;
                    //console.log("on complete=9");
                    if(_this.displayNumber1==9)
                    _this.Coin1.y=38;
                _this.Coin1.visible = true;
                _this.Levercoin1.visible = false;
                _this.Coin1.frame =  _this.YellowAnimInc;
                        _this.YellowAnimInc++;
                        //console.log("it is full"+_this.Coin1.frame);
                       
                        _this.yellowcoin.x=500;
                       
                        var tween=_this.add.tween(_this.Coin1);
                        //var tween3=_this.add.tween(_this.Coin2);
                        var tween2=_this.add.tween(_this.yellowcoin);
                        var tween4=_this.add.tween(_this.glow);
                    
                    _this.newcoinset=_this.add.sprite(430,209,'Level723_Coin1','Symbol 15 copy 2 instance 10009');
                    _this.newcoinset.inputEnabled=true;
                    _this.newcoinset.name="dragcoin";
                    _this.newcoinset.visible=false;
                                        
                        tween.to({ x: 430 }, 0, 'Linear', true, 0);
                        tween2.to({ x: 430 }, 0, 'Linear', true, 0);
                        //tween3.to({ x: 479 }, 0, 'Linear', true, 0);
                        tween4.to({ x: 420 }, 0, 'Linear', true, 0);
                        tween4.onComplete.add(function(){
							//_this.LeverYellowanim.stop(null,true);
							_this.LeverYellow.frame = 0;
							_this.newcoinset.visible=true;
                            
                            _this.Coin1.visible=false;
                            _this.yellowcoin.visible=false;
                            
                            _this.glow.visible=true;
                            _this.glow.width+=10;
                            _this.glow.x-=6;
                            
                            
                        },this);
                    
                    _this.animArrayCoin1.pop();
                    
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
					 
		
                }, this);
                }
            }else{
                _this.coinFall.stop();
            }
            
            if(_this.displayNumber1 + _this.YellowAnimInc > 9 ){
                //_this.coinFall.stop();
                if(_this.YellowAnimInc1<_this.displayNumber2){
                    //console.log("it is greater");
                    
                    _this.sum2=Number(_this.displayNumber1)+Number(_this.displayNumber2) ;
                    _this.sum2=_this.sum2-10;
                    //console.log("sum2=="+_this.sum2);
                    //console.log("_this.YellowAnimInc1=="+_this.YellowAnimInc1);
                    if(_this.YellowAnimInc1<_this.sum2){
                        if(_this.YellowAnimInc1==_this.sum2-1){
	                            _this.insertbox2anim = _this.insertbox2.animations.add('Level723_coininsertbox',["a2","a1"]);
	                            _this.insertbox2anim.play(1.5,true);
	                            _this.newcoinset.input.enableDrag(true);
	                            _this.newcoinset.events.onDragStart.add(this.onDragStart, this);
	                            _this.newcoinset.events.onDragStop.add(this.onDragStop, this);
	                            
	                            
	                        }
                        _this.LeverYellow.animations.add('Level723_LeverYellow',[0,1,2,3,4,5,0]);
                _this.LeverYellow.animations.play('Level723_LeverYellow');  
                commonNavBar.playCoinFallSound();
                _this.Levercoin2.visible = true;
                _this.Levercoin2.animations.add('Level723_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin2.animations.play('Level723_coin1Anim');
                _this.Levercoin2.animations.currentAnim.onComplete.add(function () {
                    
                    if(_this.YellowAnimInc1==_this.sum2-1)
	                        _this.LeverYellowanim.stop();
	                    else					
					        _this.LeverYellowanim.play(2,true);
		
                    //console.log("on complete>9");
                _this.LeverYellowNumber.frame++;
                _this.Coin3.visible = true;
                _this.Levercoin2.visible = false;
                         _this.Coin3.frame =  _this.YellowAnimInc1;
                    //console.log("_this.Coin3.frame=="+_this.Coin3.frame);
                         
                         _this.Coin3.x=494;
                     _this.Coin3.y=210;
                       _this.YellowAnimInc1++;
                    _this.animArrayCoin1.pop();
 }, this);
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc1);
                    }
                                    

                    
                }
                    
            }
          
        }
		
        
    },
    
    levelBlueClicked:function(target,frame){
        
       // _this.coinFall.play();
         ////console.log("_this.coinset in func=="+_this.coinset);   
         //console.log("Im Clicked "+target.name);
        //console.log("_this.YellowAnimInc"+_this.BlueAnimInc);
        //console.log("_this.YellowAnimInc2"+_this.BlueAnimInc1);

        //console.log("_this.displayNumber2"+_this.displayNumber4);
        
        if(target.name == "LeverBlue"){
              
            if(_this.displayNumber1+_this.displayNumber2 > 9){
                //console.log("iiiiiiiiiiiiiiiiiii");
                if(coinset==null){
                    _this.noaction=1;
                    //console.log("finish the yellow one first");
                }else{
                    //console.log("it is0");
                    _this.noaction=0;
                }
            
            }
            if(_this.noaction==0)
            {
                //console.log("it is no actin");
         //  if(_this.LeverBlueNumber.frame==_this.displayNumber4 || _this.BlueAnimInc<_this.displayNumber4)
                 if((_this.BlueAnimInc<_this.displayNumber4 && coinset==null) || (_this.BlueAnimInc<=_this.displayNumber4 && coinset=="full"))
            {
                //console.log("it is onside1");
                
                    ////console.log("sum is==="+(_this.displayNumber1 + _this.YellowAnimInc));
                if(_this.displayNumber3+_this.displayNumber4 < 10)
                    _this.lessthan=1;
               // if((Number(_this.displayNumber3) + Number(_this.LeverBlueNumber.frame) < 10) || (_this.displayNumber3 + _this.BlueAnimInc < 9)){
                 if(_this.displayNumber3 + _this.BlueAnimInc < 9){
                    //console.log("it is still less");
                  if(_this.lessthanb==0){
                    
                    _this.bluecoin.visible=true;
                _this.LeverBlue.animations.add('Level723_LeverBlue',[0,1,2,3,4,5,0]);
                
                _this.LeverBlue.animations.play('Level723_LeverBlue');  
                       commonNavBar.playCoinFallSound();
                _this.Levercoin10.visible = true;
                _this.Levercoin10.animations.add('Level723_coin10Anim',_this.animArrayCoin10);
                _this.Levercoin10.animations.play('Level723_coin10Anim');
                _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
					 _this.LeverBlueanim.play(2,true);
                    //console.log("on complete");
                _this.LeverBlueNumber.frame++;
                _this.Coin10.visible = true;
                _this.Levercoin10.visible = false;
                _this.Coin10.frame =  _this.BlueAnimInc;
                
                    
                    
                    _this.BlueAnimInc++;
                    _this.Coin10.x=332;//325
                    //console.log("_this.BlueAnimInc==="+_this.BlueAnimInc);
                     //console.log("it is not full"+_this.Coin10.frame);
                    if(coinset=="full" && _this.BlueAnimInc==1){
                        //console.log("Helllllll");
                   // _this.assign3=_this.assign3+1;
                            
                    _this.Coin10.frame =  _this.BlueAnimInc;
                  _this.BlueAnimInc++;
                       
                    }
                        if((Number(_this.assign3))==1)
                        _this.Coin10.y=190;
                        if((Number(_this.assign3))==2)
                            _this.Coin10.y=171;
                        if((Number(_this.assign3))==3)
                            _this.Coin10.y=152;
                        if((Number(_this.assign3))==4)
                                _this.Coin10.y=133;
                        if((Number(_this.assign3))==5)
                                _this.Coin10.y=114;
                        if((Number(_this.assign3))==6)
                                _this.Coin10.y=95;
                        if((Number(_this.assign3))==7)
                                _this.Coin10.y=76;
                        if((Number(_this.assign3))==8)
                                _this.Coin10.y=57;
                        if((Number(_this.assign3))==9)
                                _this.Coin10.y=38;

                _this.animArrayCoin10.pop();
                     //console.log("_this.Coin10.frame===="+_this.Coin10.frame);
                     //console.log(" _this.BlueAnimInc "+ _this.BlueAnimInc);
                    //console.log("dis="+_this.displayNumber3);
                    
                }, this);
                }
                }//if(((_this.displayNumber3 + _this.BlueAnimInc == 9) || (_this.displayNumber3 + (_this.LeverBlueNumber.frame) == 10))){
                if(_this.displayNumber3 + _this.BlueAnimInc == 9){
                     //console.log("this already=="+_this.already10);
					//_this.LeverBlue.inputEnabled=false;
                    if(_this.already10==0){
                        _this.already10=1;
                    //console.log("blue is 10 now");
                    _this.sumblue=0;
                    _this.glow=_this.add.sprite(324,203,'Level723_glow');
                    _this.glow.visible=false;
                    _this.glow.height+=26;
                    _this.glow.width+=10;
                    
                    _this.LeverBlue.animations.add('Level723_LeverBlue',[0,1,2,3,4,5,0]);
                    _this.LeverBlue.animations.play('Level723_LeverBlue');  
                    commonNavBar.playCoinFallSound();
                    _this.Levercoin10.visible = true;
                    _this.Levercoin10.animations.add('Level723_coin1Anim',_this.animArrayCoin10);
                    _this.Levercoin10.animations.play('Level723_coin1Anim');
                    _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
						
						 _this.LeverBlueanim.play(2,true);
						 
                    _this.LeverBlueNumber.frame++;
                     //console.log("on complete=9");
                    _this.Coin10.visible = true;
                    _this.Levercoin10.visible = false;
                    if(coinset=="full" && (_this.displayNumber3==8 || _this.displayNumber3==9))
                    _this.Coin10.frame =  _this.BlueAnimInc+1;
                    else
                    _this.Coin10.frame =  _this.BlueAnimInc;
                    _this.BlueAnimInc++;
                        //console.log("it is full"+_this.Coin10.x);
                       
                        _this.bluecoin.x=332;//325
                        _this.Coin10.x=332;//325
                        var tween=_this.add.tween(_this.Coin10);
                        //var tween3=_this.add.tween(_this.bluetopCoin);
                        var tween2=_this.add.tween(_this.bluecoin);
                        var tween4=_this.add.tween(_this.glow);
                        
                        _this.newcoinset=_this.add.sprite(266,210,'Level723_Coin10','Symbol 15 copy 4 instance 10009');
                        _this.newcoinset.inputEnabled=true;
                        _this.newcoinset.name="dragbluecoin";
                        _this.newcoinset.visible=false;
                    
                        tween.to({ x: 265 }, 0, 'Linear', true, 0);
                        tween2.to({ x: 265 }, 0, 'Linear', true, 0);
                      //  tween3.to({ x: 319 }, 0, 'Linear', true, 0);
                        tween4.to({ x: 255 }, 0, 'Linear', true, 0);
                        
                        tween4.onComplete.add(function(){
							// _this.LeverBlueanim.stop(null,true);
							 _this.LeverBlue.frame = 0;
                            _this.Coin10.visible=false;
                            _this.bluecoin.visible=false;
                            _this.newcoinset.visible=true;
                            
                           
                            _this.glow.width+=10;
                            _this.glow.x-=6;
                            _this.glow.visible=true;
                            //_this.insertbox1anim = _this.insertbox1.animations.add('Level723_coininsertbox',["blue","a1"]);
                           // _this.insertbox1anim.play(1.5,true);
                        },this);

                    _this.animArrayCoin10.pop();
                     //console.log(" _this.BlueAnimInc "+ _this.BlueAnimInc);
                }, this);
                }
                }
            //}//here it was
            
            //if((_this.displayNumber3 + _this.BlueAnimInc > 9) || (_this.displayNumber3 + (_this.LeverBlueNumber.frame) > 10)){
                if(_this.displayNumber3 + _this.BlueAnimInc > 9){
               _this.lessthanb=2;
               // if(_this.displayNumber3 + _this.BlueAnimInc > 9){
                //console.log("hhhhxxxxh");
                _this.coinFall.stop();
                //if(_this.BlueAnimInc1<_this.displayNumber4 || _this.LeverBlueNumber.frame < _this.displayNumber4){
                    ////console.log("it is greater"+_this.LeverBlueNumber.frame);
                if(_this.BlueAnimInc1<_this.displayNumber4){
                    //console.log("coinset=="+coinset);
                    _this.sumblue=Number(_this.displayNumber3)+Number(_this.displayNumber4);
                    if(_this.displayNumber1+_this.displayNumber2>=10)
                    _this.sumblue=_this.sumblue-9;
                    else
                    _this.sumblue=_this.sumblue-10;
                    
                    //console.log("sumblue=="+_this.sumblue);
                    //console.log("_this.BlueAnimInc1=="+_this.BlueAnimInc1);
                    if(_this.BlueAnimInc1<_this.sumblue){
                        if(_this.BlueAnimInc1 == (_this.sumblue-1)){
	                            _this.newcoinset.input.enableDrag(true);
	                            _this.newcoinset.events.onDragStart.add(this.onDragStart, this);
	                            _this.newcoinset.events.onDragStop.add(this.onDragStop, this);
	                            _this.insertbox1anim = _this.insertbox1.animations.add('Level723_coininsertbox',["blue","a1"]);
	                            _this.insertbox1anim.play(1.5,true);
	                        }
                        //console.log("in right place");
                        _this.LeverBlue.animations.add('Level723_LeverBlue',[0,1,2,3,4,5,0]);
                _this.LeverBlue.animations.play('Level723_LeverBlue');  
                commonNavBar.playCoinFallSound();
                _this.Levercoin10s.visible = true;
                _this.Levercoin10s.animations.add('Level723_coin10Anim',_this.animArrayCoin10);
                _this.Levercoin10s.animations.play('Level723_coin10Anim');
                _this.Levercoin10s.animations.currentAnim.onComplete.add(function () {
                    if(_this.BlueAnimInc1 == (_this.sumblue-1))
	                        _this.LeverBlueanim.stop();
	                    else
					       _this.LeverBlueanim.play(2,true);
					 
                    //console.log("on complete>9");
                _this.LeverBlueNumber.frame++;
                _this.Coin10s.visible = true;
                _this.Levercoin10s.visible = false;
                         _this.Coin10s.frame =  _this.BlueAnimInc1;
                    //console.log("_this.Coin10s.frame=="+_this.Coin10s.frame);
                         
                         _this.Coin10s.x=332;//341
                     _this.Coin10s.y=210;
                       _this.BlueAnimInc1++;
                    _this.animArrayCoin10.pop();
 }, this);
                     //console.log(" _this.BlueAnimInc1 "+ _this.BlueAnimInc1);
                    }
                                    

                    
                }
                    
            }
            }//removed now
            }//added 
			
        }
    //    }//removed
    },
    
    
    leverGreenClicked:function(target,frame){
        
        commonNavBar.playCoinFallSound();
         ////console.log("_this.coinset in func=="+_this.coinset);   
         //console.log("Im Clicked "+target.name);
        //console.log("_this.GreenAnimInc"+_this.GreenAnimInc);

        if(target.name == "LeverGreen"){
                if(_this.GreenAnimInc<_this.displayNumber6 || (_this.bluecarry==1 && _this.GreenAnimInc<=_this.displayNumber6)){
                    if(_this.lessthangreen==0)
                    {
                        //console.log("green is less");
                        _this.greencoin.visible=true;
                        _this.LeverGreen.animations.add('Level723_LeverGreen',[0,1,2,3,4,5,0]);
                        _this.LeverGreen.animations.play('Level723_LeverGreen');  
                        commonNavBar.playCoinFallSound();
                        _this.Levercoin100.visible = true;
                        _this.Levercoin100.animations.add('Level723_coin100Anim',_this.animArrayCoin100);
                        _this.Levercoin100.animations.play('Level723_coin100Anim');
                        _this.Levercoin100.animations.currentAnim.onComplete.add(function () {
							 _this.LeverGreenanim.play(2,true);
                        //console.log("on complete 100");
                        this.LeverGreenNumber.frame++;
                        _this.Coin100.visible = true;
                        _this.Levercoin100.visible = false;
                        _this.Coin100.frame =  _this.GreenAnimInc;
                        _this.GreenAnimInc++;
                        _this.Coin100.x=153;
                        if(_this.bluecarry==1 && _this.GreenAnimInc==1){
                            _this.Coin100.frame =  _this.GreenAnimInc;
                            _this.GreenAnimInc++;  
                        }
                        if((Number(_this.assign5))==1)
                            _this.Coin100.y=190;
                        if((Number(_this.assign5))==2)
                            _this.Coin100.y=171;
                        if((Number(_this.assign5))==3)
                            _this.Coin100.y=152;
                        if((Number(_this.assign5))==4)
                                _this.Coin100.y=133;
                        if((Number(_this.assign5))==5)
                                _this.Coin100.y=114;
                        if((Number(_this.assign5))==6)
                                _this.Coin100.y=95;
                        if((Number(_this.assign5))==7)
                                _this.Coin100.y=76;
                        if((Number(_this.assign5))==8)
                                _this.Coin100.y=57;
                        if((Number(_this.assign5))==9)
                                _this.Coin100.y=38;

                        _this.animArrayCoin100.pop();
                         //console.log("_this.Coin100.frame===="+_this.LeverGreenNumber.frame);
                         //console.log(" _this.GreenAnimInc "+ _this.GreenAnimInc);
                    
                    },this);
                  }
                }else{
                      _this.coinFall.stop();
                  }
            
           
            
             if(_this.GreenAnimInc == (Number(_this.assign6)-1 ))
             {
                 //_this.LeverGreen.inputEnabled=false;
                
                 _this.time.events.add(800, function(){ _this.LeverGreenanim.stop(null,true);_this.LeverGreen.frame = 0;}, _this);
                    //console.log("dmm green");
                if(_this.displayNopad==false){
                    _this.numpad=true;
                    _this.displayNopad=true;
					 _this.time.events.add(800, function(){ _this.LeverGreenanim.stop(null,true);_this.LeverGreen.frame = 0;}, _this);
                    _this.addNumberPad();
                }
            
            }else if(_this.GreenAnimInc > (Number(_this.assign6)-1 )){
                 //console.log("dmm green greater");
                  _this.time.events.add(800, function(){ _this.LeverGreenanim.stop(null,true);_this.LeverGreen.frame = 0;}, _this);
             _this.LeverGreen.inputEnabled=false;
            _this.lessthangreen=2;
                if(_this.displayNopad==false && _this.numpad==false){
                    _this.numpad=true;
                    _this.displayNopad=true;
					 _this.time.events.add(800, function(){ _this.LeverGreenanim.stop(null,true);_this.LeverGreen.frame = 0;}, _this);
                    _this.addNumberPad();
                }
        }
            
        }
    //    }//removed
    },
    
    
    addYellowCoins:function(){       
        //console.log("first num in yellow"+ Number(_this.assign1));
     //console.log("second num"+ Number(_this.assign));
        _this.yellowcoin.x=500;
        //console.log("www=="+_this.yellowcoin.x);
        _this.yellowcoin.y=210;
        _this.yellowcoin.frame=Number(_this.assign1) -1;
        //console.log(" _this.yellowcoin.frame"+_this.yellowcoin.frame);
        
    },
    
    addBlueCoins:function(){       
        //console.log("first num in blue"+ Number(_this.assign3));
     //console.log("second num in blue"+ Number(_this.assign4));
        _this.bluecoin.x=332;//325
        //console.log("www=="+_this.bluecoin.x);
        _this.bluecoin.y=210;
        _this.bluecoin.frame=Number(_this.assign3) -1;
        //console.log(" _this.bluecoin.frame"+_this.bluecoin.frame);
        
    },
    
    addGreenCoins:function(){       
        //console.log("first num in green"+ Number(_this.assign5));
     //console.log("second num in green"+ Number(_this.assign6));
        _this.greencoin.x=153;
        //console.log("www=="+_this.greencoin.x);
        _this.greencoin.y=210;
        _this.greencoin.frame=Number(_this.assign5) -1;
        //console.log(" _this.greencoin.frame"+_this.greencoin.frame);
        
    },
    
    
    addNumberPad:function(){
       
	   
		
        _this.numBackground = this.add.sprite(480,505,'Level723_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        _this.numBox3Pressed=true;
        _this.numBox3.frame = 1;
        _this.numBox2.frame = 0;
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level723_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1,'');
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
          //  _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,508,'Level723_erase','Symbol 14 copy 5 instance 10000');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        //_this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+95,508,'Level723_rightmark','Symbol 14 copy instance 10000');
        _this.rightbtn.scale.setTo(1.20,1.20);
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = false;
        //_this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
			 _this.eraserclicked=1;
             _this.eraser.frame=1;
             commonNavBar.playClickSound();

                if(_this.numBox1Pressed){
					_this.numBox1.frame = 1;
                    _this.numBoxNum1.visible = false;
					_this.numBox1Pressed = true;
                }
                else if(_this.numBox2Pressed){
					_this.numBox2.frame = 1;
                    _this.numBoxNum2.visible = false;
					_this.numBox2Pressed = true;
                }
                else if(_this.numBox3Pressed)
                {
					_this.numBox3.frame = 1;
                    _this.numBoxNum3.visible = false;
					_this.numBox3Pressed = true;
                }
               // _this.numBoxNum1.visible = false;
               // _this.numBoxNum2.visible = false;
               // _this.numBoxNum3.visible = false;
             if(_this.numBoxNum1.visible ==false || _this.numBoxNum2.visible==false || _this.numBoxNum3.visible==false  ){
                 this.time.events.add(500,function(){
                      _this.eraser.frame=0;                
                 },this);
                 
             }
                    
                   /* _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.numBox3Pressed = true;
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;*/
                           
                    _this.toCheckNumberPad = false;
             
             
         },this);
        
            
        
         
       
        if(_this.displayNopad){
            //console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
           // _this.LeverYellow.events.onInputDown.removeAll();
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
     numClicked:function(target){
         _this.rightbtn.inputEnabled = true;
       // _this.rightbtn.input.useHandCursor = true;
         _this.rightbtn.events.onInputDown.add(function(target){
             _this.rightbtn.frame=1;
             _this.noofAttempts++;
             if(_this.glow)
             _this.glow.destroy();
            
             commonNavBar.playClickSound();
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
            if(_this.selectedAns== _this.rightAns)  
                {
                    //console.log("correct");
                    this.Stararr.push(3);
					_this.eraserclicked=0;
                    target.events.onInputDown.removeAll();
                    commonNavBar.stopVoice();
                   commonNavBar.playCelebrationSound();
                    if(_this.timer1!=null)
                    {
                        _this.timer1.stop();
                       _this.timer1 = null;
                    }

                    
                      _this.questionid = 1;
                      //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                    
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     //_this.count1++;
                   
                    //_this.numBox1.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 
                    //console.log("wrong");
					_this.rightbtn.frame = 1;
                      commonNavBar.stopVoice();
                      commonNavBar.playWrongCelebrationSound();
                    _this.starsGroup.getChildAt(_this.count1).frame = 1;
                     _this.Stararr.push(1);
                     //_this.count1++;
                    _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                    }
             target.events.onInputDown.removeAll();
  
        },this);
  
        
           //console.log(target.name);
         
         commonNavBar.playClickSound();
         if(target == _this.numbox1){
             _this.numBox1Pressed=true;
         }else if(target == _this.numbox2){
             _this.numBox2Pressed=true;
         }else if(target == _this.numbox3){
             _this.numBox3Pressed=true;
         }
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             _this.numBox1.frame = 1;
             _this.numBox2.frame = 0;
             _this.numBox3.frame = 0;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = true;
             _this.numBox3Pressed = true;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
             if(_this.selectedAns2>=0 && _this.eraserclicked==0){
                 _this.numBox2.frame = 0;
                 _this.numBox1.frame = 1;
                 _this.numBox3.frame = 0;
                 _this.numBox1Pressed=true;
                 _this.numBox2Pressed=false;
                 _this.numBox3Pressed=false;
             }else{
				if(_this.eraserclicked==0){
                 	_this.numBox2.frame = 1;
                 	_this.numBox1.frame = 0;
                 	_this.numBox3.frame = 0;
                 	_this.numBox1Pressed=false;
                 	_this.numBox2Pressed=true;
                 	_this.numBox3Pressed=false;
				}
             }
         }
        else if(_this.numBox3Pressed)
             {
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 
                 _this.numBoxNum3.frame = target.name+1;
                 if(_this.selectedAns3>=0 && ((_this.displayNumber1+ _this.displayNumber2)>10) && _this.eraserclicked==0){
                     //console.log("selected greater");
                     _this.numBox2.frame = 1;
                     _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else if(_this.selectedAns3>=0 && ((_this.displayNumber1+ _this.displayNumber2)<=10) && _this.eraserclicked==0){
                     //console.log("selected lesser"); 
                     _this.numBox2.frame = 1;
                     _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else{
                     //console.log("not selected");
					 if(_this.eraserclicked==0){
	                     _this.numBox2.frame = 0;
	                     _this.numBox1.frame = 0;
	                     _this.numBox3.frame = 1;
	                     _this.numBox1Pressed = false;
	                     _this.numBox2Pressed = false;
	                     _this.numBox3Pressed = true;
					 }
                 }
                 
            // _this.numBox1.frame = 1;
                 
             }
         
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
        _this.numGroup.destroy();

        _this.displayNopad=false;
        _this.zeroalready=0;
        _this.numpad=false;
        _this.lessthanb=0;
        _this.lessthangreen=0;
        _this.already10=0;
        _this.numGroup.destroy();
        _this.insertbox2.frame=0;
        _this.insertbox1.frame=0;
        coinset=null;
         _this.no1++;
        if(_this.glow)
        _this.glow.destroy();
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
       _this.yellowcoin.destroy();
        _this.bluecoin.destroy();
        _this.greencoin.destroy();
        _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<5)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
			if(_this.timer1 !=null)
             _this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            
            
           // _this.displayNumber1 = 0;
           // _this.askNumber1.frame = 0;
           // _this.displayNumber2 = 0;
           // _this.askNumber2.frame =0;
            _this.rightAns = null;
             _this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
            _this.Levercoin100.visible = false;
            _this.LeverGreenNumber.frame = 0;
            _this.LeverYellowNumber.frame = 0;
            _this.LeverBlueNumber.frame = 0;
            
            if(_this.Coin1)
            _this.Coin1.destroy();
            if(_this.Coin10)
            _this.Coin10.destroy();
            if(_this.Coin2)
            _this.Coin2.destroy();
            if(_this.Coin3)
            _this.Coin3.destroy();
            if(_this.Coin10s)
            _this.Coin10s.destroy();
            if(_this.Coin100)
            _this.Coin100.destroy();
            
            _this.YellowAnimInc=0;
            _this.YellowAnimInc1=0;
            _this.BlueAnimInc=0;
            _this.BlueAnimInc1=0;
            _this.GreenAnimInc=0;
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.animArrayCoin10 =null;
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            _this.numBox1Pressed = false;
            _this.numBox2Pressed = false;
            _this.numBox3Pressed = false;
            _this.LeverYellow.events.onInputDown.removeAll();
            _this.LeverBlue.events.onInputDown.removeAll();
            _this.LeverGreen.events.onInputDown.removeAll();
            _this.rightbtn.events.onInputDown.removeAll();
            
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            
            this.time.events.add(500,function(){
                _this.getQuestion();
            },this);
        }
        else
        {
			commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
           this.createScoreScene();
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX, 10, 'starAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=10;
					 _this.starsGroup.getChildAt(i).x+=10;
				}
			}
		if(this.Stararr[i])
                    {  
                        _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
           
		}
        _this.starsGroup.getChildAt(4).frame = 2;						
	},
    
    
    createScoreScene:function()
    {

        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        /* this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        this.tryAgainText.anchor.setTo(0.5);
        this.tryAgainText.align = 'center';
        this.tryAgainText.fontWeight = 'bold';
        this.tryAgainText.fontSize = 40;
        this.tryAgainText.fill = 'White';
        this.tryAgainText.visible = false;
        
        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';
        this.terrificText.visible = false;
        
        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        this.verGoodText.anchor.setTo(0.5);
        this.verGoodText.align = 'center';
        this.verGoodText.fontWeight = 'bold';
        this.verGoodText.fontSize = 40;
        this.verGoodText.fill = 'White';
        this.verGoodText.visible = false;
        
        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        this.excellentText.anchor.setTo(0.5);
        this.excellentText.align = 'center';
        this.excellentText.fontWeight = 'bold';
        this.excellentText.fontSize = 40;
        this.excellentText.fill = 'White';
        this.excellentText.visible = false; */
  
  this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.6,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.6,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);


        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		this.backgroundtransp.visible=false; //Remove BackGround Opacity
        _this.state.start('numberoperation1',true,false);
        
    },

        
      
    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);

        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
         if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }
        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);    

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }    
    },
    
     replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3500, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('addition_NOAG_4_3level1',true,false);
        }, this);
    },    
    
    getVoice:function(){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/English/Game 7.2.3.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Hindi/Game 7.2.3.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Kannada/Game 7.2.3.mp3");
        }
		else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Odiya/7.2.3.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
                    
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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
                 case '7_2_3a':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3b':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
                case '7_2_3c':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
                case '7_2_3d':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 7.2.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/7.2.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            }
            _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
    onDragStart:function(target)
        {
            
            _this.glow.destroy();
            commonNavBar.playClickSound();
            //console.log("target name=="+target.name);
        },
    
    onDragStop:function(target)
        {
            commonNavBar.playClickSound();    
            if(this.checkOverlap(target,_this.insertbox2))
            {
               if(target.name==_this.insertbox2.name)
                {
                    commonNavBar.playcashOutSound();
                    //console.log("overlapped and matched"); 
                    _this.glow.destroy();
                    //_this.Coin2.destroy();
                   // _this.Coin1.destroy();
                    //_this.yellowcoin.destroy();
                    _this.newcoinset.destroy();
                    var yellowcoinreverse = this.add.sprite(440,145,'Level723_yellowcoinreverse','Symbol 15 copy 4 instance 10000');
                    var yellowcoinreverseanim=yellowcoinreverse.animations.add('reverse');
                    yellowcoinreverseanim.play();
                    yellowcoinreverseanim.onComplete.add(function () {
						
						//_this.LeverYellowanim.play(2,true);
						
                        if(_this.cashOut)
        {
            if(_this.cashOut.isPlaying)
            {
                _this.cashOut.stop();
                _this.cashOut = null;
            }
        }
                        commonNavBar.playCoinFallSound();
                        
						//_this.LeverYellow.inputEnabled=true;
                        coinset="full";
                        
						//if(_this.YellowAnimInc1 == ((_this.displayNumber1+_this.displayNumber2)-10)){
            
                            console.log("blue is ready now");
                            _this.LeverBlue.inputEnabled=true;
                            
                            _this.LeverBlue.events.onInputDown.add(_this.levelBlueClicked,_this);
                            _this.LeverBlueanim = _this.LeverBlue.animations.add('Level722_LeverBlue',["Symbol 19 instance 10005","Symbol 19 instance 10000"]);
                            _this.LeverBlueanim.play(2,true);
							
      
                        //}
                        _this.insertbox2.frame=0;
                        _this.insertbox2anim.stop();                
                        _this.Levercoin10.visible = true;
                        _this.Levercoin10.animations.add('Level723_coin10Anim',_this.animArrayCoin1);
                        _this.Levercoin10.animations.play('Level723_coin10Anim');
                        _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
                           // _this.LeverBlueNumber.frame++;
                           _this.Coin10.x=332;//327
                            if((Number(_this.assign3))==1)
                            _this.Coin10.y=190;
                            else if((Number(_this.assign3))==2)
                                _this.Coin10.y=171;
                            else if((Number(_this.assign3))==3)
                                _this.Coin10.y=152;
                             else if((Number(_this.assign3))==4)
                                _this.Coin10.y=133;
                             else if((Number(_this.assign3))==5)
                                _this.Coin10.y=114;
                             else if((Number(_this.assign3))==6)
                                _this.Coin10.y=95;
                             else if((Number(_this.assign3))==7)
                                _this.Coin10.y=76;
                             else if((Number(_this.assign3))==8)
                                _this.Coin10.y=57;
                            else if((Number(_this.assign3))==9)
                                _this.Coin10.y=38;
                            //_this.Coin10.y=190;
                            _this.Coin10.visible = true;
                            _this.Levercoin10.visible = false;
                            _this.Coin10.frame =  _this.BlueAnimInc;
                            _this.BlueAnimInc++;
                            /////////////
                          //  if(_this.displayNumber3 + (_this.LeverBlueNumber.frame-1) == 10){
                             if(_this.displayNumber3 + (_this.BlueAnimInc-1) == 9){
                                _this.already10=1;
                            //console.log("blue is 10 now");
                    _this.sumblue=0;
                    _this.glow=_this.add.sprite(324,203,'Level723_glow');
                    _this.glow.visible=false;
                    _this.glow.height+=26;
                    _this.glow.width+=10;
                        var tween=_this.add.tween(_this.Coin10);
                        //var tween3=_this.add.tween(_this.bluetopCoin);
                        var tween2=_this.add.tween(_this.bluecoin);
                        var tween4=_this.add.tween(_this.glow);
                    
                        tween.to({ x: 239 }, 0, 'Linear', true, 0);
                        tween2.to({ x: 239 }, 0, 'Linear', true, 0);
                      //  tween3.to({ x: 319 }, 0, 'Linear', true, 0);
                        tween4.to({ x: 229 }, 0, 'Linear', true, 0);
                        
                        tween4.onComplete.add(function(){
							
                            _this.Coin10.visible=false;
                            _this.bluecoin.visible=false;
                            _this.newcoinset=_this.add.sprite(240,210,'Level723_Coin10','Symbol 15 copy 4 instance 10009');
                            _this.newcoinset.inputEnabled=true;
                            _this.newcoinset.name="dragbluecoin";
                            _this.newcoinset.input.enableDrag(true);
                            _this.newcoinset.events.onDragStart.add(this.onDragStart, this);
                            _this.newcoinset.events.onDragStop.add(this.onDragStop, this);
                            _this.glow.width+=10;
                            _this.glow.x-=6;
                            _this.glow.visible=true;
                            _this.insertbox1anim = _this.insertbox1.animations.add('Level723_coininsertbox',["blue","a1"]);
                            _this.insertbox1anim.play(1.5,true);
                        },this);
                        
                    _this.animArrayCoin1.pop();

                     //console.log(" _this.BlueAnimInc "+ _this.BlueAnimInc);

                             }
                        },this);
                },this);
            }
            else{
                   target.x=309;
                   target.y=38;
               }
        }
        else if(this.checkOverlap(target,_this.insertbox1))
            {
               if(target.name==_this.insertbox1.name)
                {
                    _this.cashOut.play();
                    //console.log("blue overlapped and matched"); 
                    _this.glow.destroy();
                    _this.newcoinset.destroy();
                    var bluecoinreverse = this.add.sprite(275,145,'Level723_bluecoinreverse','Symbol 15 copy 9 instance 10000');
                    var bluecoinreverseanim=bluecoinreverse.animations.add('reverse');
                    bluecoinreverseanim.play();
                    bluecoinreverseanim.onComplete.add(function () {
						// _this.LeverBlueanim.play(2,true);
						//_this.LeverBlue.inputEnabled=true;
                        if(_this.cashOut)
        {
            if(_this.cashOut.isPlaying)
            {
                _this.cashOut.stop();
                _this.cashOut = null;
            }
        }
                        commonNavBar.playCoinFallSound();
                        coinset="full";
                        _this.bluecarry=1;
						//if((_this.BlueAnimInc==(Number(_this.assign4)+1)))
                        //{
                           // console.log("kkkk123");
                           /* if(_this.displayNopad==false && _this.numpad==false){
                                _this.displayNopad=true;
                                //_this.LeverBlue.inputEnabled=false;
                                _this.addNumberPad();
                                
                                
                            }*/
                            _this.LeverGreenanim =_this.LeverGreen.animations.add('Level722_LeverGreen',["Symbol 20 instance 10005","Symbol 20 instance 10000"]);
                            _this.LeverGreenanim.play(2,true);
                            _this.LeverGreen.inputEnabled = true;
                            _this.LeverGreen.events.onInputDown.add(_this.leverGreenClicked,_this);
                            
                    //}
                        _this.insertbox1.frame=0;
                        _this.insertbox1anim.stop();                
                        _this.Levercoin100.visible = true;
                        _this.Levercoin100.animations.add('Level723_coin100Anim',_this.animArrayCoin1);
                        _this.Levercoin100.animations.play('Level723_coin100Anim');
                        _this.Levercoin100.animations.currentAnim.onComplete.add(function () {
                           // _this.LeverGreenNumber.frame++;
                            _this.Coin100.x=153;//327
                            if((Number(_this.assign5))==1)
                            _this.Coin100.y=190;
                            else if((Number(_this.assign5))==2)
                                _this.Coin100.y=171;
                            else if((Number(_this.assign5))==3)
                                _this.Coin100.y=152;
                             else if((Number(_this.assign5))==4)
                                _this.Coin100.y=133;
                             else if((Number(_this.assign5))==5)
                                _this.Coin100.y=114;
                             else if((Number(_this.assign5))==6)
                                _this.Coin100.y=95;
                             else if((Number(_this.assign5))==7)
                                _this.Coin100.y=76;
                             else if((Number(_this.assign5))==8)
                                _this.Coin100.y=57;
                            else if((Number(_this.assign5))==9)
                                _this.Coin100.y=38;
                            _this.Coin100.visible = true;
                            _this.Levercoin100.visible = false;
                            _this.Coin100.frame =  _this.GreenAnimInc;
                            if(_this.BlueAnimInc1 > (Number(_this.assign4)-1 ))
                            _this.LeverBlue.inputEnabled=false;
                        },this);
                },this);
            }
            else{
                   target.x=325;
                   target.y=38;
               }
        }
},
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    
    shutdown:function(){
         commonNavBar.stopVoice();
             window.score = this.score;
            localStorage.setItem("Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("addition_NOAG_4_3state", "playedwithhint");
                localStorage.setItem("numberoperationPlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("addition_NOAG_4_3state", "fullycomplete");
                //localStorage.setItem("addition_NOAG_4_3state", "canplay");
                localStorage.setItem("numberoperationPlayed", "played");
            } 
    }
    
};