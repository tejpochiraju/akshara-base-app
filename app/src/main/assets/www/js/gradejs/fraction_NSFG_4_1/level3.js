Game.fraction_NSFG_4_1level3=function(){};
var countstar1=6;

Game.fraction_NSFG_4_1level3.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;

        //        _this.gameid = "1.2C";
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

        commonNavBar.level2Bool = true;

    },


    create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

        //        _this.starsGroup.getChildAt(0).frameName="Symbol 10 copy 2 instance 10035";
        //        _this.starsGroup.getChildAt(1).frameName="Symbol 10 copy 2 instance 10035";
        //        _this.starsGroup.getChildAt(2).frameName="Symbol 10 copy 2 instance 10035";
        //        _this.starsGroup.getChildAt(3).frameName="Symbol 10 copy 2 instance 10035";
        _this.amplify = null;
        _this.selectedColor = null;
        _this.blankCount = 0;
        _this.redCount = 0;
        _this.greenCount = 0;
        _this.yellowCount=0;
        _this.rightAnswer = false;
        _this.dragStarted = false;
        _this.wind1=true;
        _this.wind2=true;
        _this.wind3=true;
        _this.wind4=true;
        _this.wind5=true;
        _this.wind6=true;
        _this.wind7=true;
        _this.wind8=true;

        //_this.minutes=0;
        // _this.seconds=0;
        // _this.counterForTimer=0;

        _this.lastRemoved = new Array();
        _this.lastclicked = new Array();

        _this.crayonFrame = 0;

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount = 0;

        _this.questionArray = [1,2,3,4,5,6,7,8,9];
        _this.questionArray = _this.shuffle(_this.questionArray);
        _this.count = 0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level12A_background');
        
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense5");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSFG4.1','levelThirdScene',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

        _this.displayQuestion();

    },

    /*stopVoice:function(){
     Eng_12C1.stop();
     Hin_12C1.stop();
     Kan_12C1.stop();
     Eng_12C2.stop();
     Hin_12C2.stop();
     Kan_12C2.stop();
     Eng_12C3.stop();
     Hin_12C3.stop();
     Kan_12C3.stop();
    },*/


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
            if(this.Stararr[i])
            {  
                _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
            }
        } 
        _this.starsGroup.getChildAt(6).frame = 2;	
    },
    
    updateTimer:function() {        
        counterForTimer++;
        if(counterForTimer>59)
        {
            counterForTimer = 0;
            if(minutes<10){
                minutes =  _this.minutes+1;
                seconds = 00;
            }
            else{
                minutes =  _this.minutes+1;

            }
        }
        else{
            if (counterForTimer < 10)        
                seconds = '0' + counterForTimer;
            else
                seconds = counterForTimer;
        }
        _this.timeDisplay.setText(minutes+':' + seconds);
    },

    displayQuestion:function()
    {
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;

        _this.sceneCount++;

        _this.timer = null;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        /**************************************************************************/ 
//        _this.timer1 = _this.time.create(false);
//        _this.timer1.loop(1000, function(){
//            _this.updateTimer();
//        }, _this);
//        _this.timer1.start();
        /**************************************************************************/ 

        _this.timer.start();

//        _this.speakerbtn.inputEnabled=true;
//        _this.speakerbtn.events.onInputDown.add(function()
//                                                {
//            console.log("speaker is on");
//            _this.clickSound = _this.add.audio('ClickSound');
//            _this.clickSound.play();
//
//            _this.getVoice();
//
//        },_this);
        _this.stopVoice();

        _this.wind1=true;
        _this.wind2=true;
        _this.wind3=true;
        _this.wind4=true;
        _this.wind5=true;
        _this.wind6=true;
        _this.wind7=true;
        _this.wind8=true;
        _this.lastRemoved = new Array();

        switch(_this.questionArray[_this.count])
        {
            case 1: _this.questionid = 1;_this.addFirstWindMill(); break;
            case 2: _this.questionid = 2;_this.addFirstWindMill(); break;
            case 3: _this.questionid = 3;_this.addFirstWindMill(); break;
            case 4: _this.questionid = 1;_this.addSixthWindMill(); break;
            case 5: _this.questionid = 2;_this.addSixthWindMill(); break;
            case 6: _this.questionid = 3;_this.addSixthWindMill(); break;
            case 7: _this.questionid = 1;_this.addSeventhWindMill(); break;
            case 8: _this.questionid = 2;_this.addSeventhWindMill(); break;
            case 9: _this.questionid = 3;_this.addSeventhWindMill(); break;

        }
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    update:function()
    {

        if(_this.rightAnswer)
        {

            if(_this.windAnim1!=null)
            {
                _this.windAnim1.rotation-=0.1;
            }
            if(_this.windAnim2!=null)
            {
                _this.windAnim2.rotation-=0.1;
            }
            if(_this.windAnim3!=null)
            {
                _this.windAnim3.rotation-=0.1;
            }
            if(_this.windAnim4!=null)
            {
                _this.windAnim4.rotation-=0.1;
            }
            if(_this.windAnim5!=null)
            {
                _this.windAnim5.rotation-=0.1;
            }
            if(_this.windAnim6!=null)
            {
                _this.windAnim6.rotation-=0.1;
            }
            if(_this.windAnim7!=null)
            {
                _this.windAnim7.rotation-=0.1;
            }
            if(_this.windAnim8!=null)
            {
                _this.windAnim8.rotation-=0.1;
            }
            if(_this.windAnim9!=null)
            {
                _this.windAnim9.rotation-=0.1;
            }
            if(_this.windAnim10!=null)
            {
                _this.windAnim10.rotation-=0.1;
            }
            if(_this.windAnim11!=null)
            {
                _this.windAnim11.rotation-=0.1;
            }
            if(_this.windAnim12!=null)
            {
                _this.windAnim12.rotation-=0.1;
            }
            if(_this.windAnim13!=null)
            {
                _this.windAnim13.rotation-=0.1;
            }
            if(_this.windAnim14!=null)
            {
                _this.windAnim14.rotation-=0.1;
            }
            if(_this.windAnim15!=null)
            {
                _this.windAnim15.rotation-=0.1;
            }
            if(_this.windAnim16!=null)
            {
                _this.windAnim16.rotation-=0.1;
            }
        }

    },

    addEventListeners:function()
    {
        var timeforlang=0;
        _this.crayon = _this.add.sprite(_this.world.centerX-250,_this.world.centerY,'Level12A_pencil');
        _this.crayon.anchor.setTo(0.5);

        _this.eraser = _this.add.sprite(_this.world.centerX-350,_this.world.centerY,'Level12A_eraser');
        _this.eraser.anchor.setTo(0.5);

        // _this.time.events.add(timeforlang,function(){
        //console.log("tienm"+timeforlang);
        _this.crayon.inputEnabled = true;
        _this.crayon.input.useHandCursor = true;
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
        // },_this);

        _this.crayon.name = "Level12C_Crayon";
        _this.eraser.name = "Level12C_Eraser";

        _this.crayon.frame = Math.floor(Math.random()*6);
        //_this.crayon.frame = 2;
        _this.crayonFrame = _this.crayon.frame;

        //  //console.log(_this.crayonFrame);

        //        checkbtn = _this.add.button(_this.world.centerX+290,_this.world.centerY,'Level12A_checkbtn',null,_this,0,2,1);
        //		checkbtn.scale.setTo(1);
        //		checkbtn.anchor.setTo(0.5);

        _this.circlegraphics = _this.add.graphics(0, 0);

        _this.circlegraphics.beginFill(0xFFFF00, 1);
        _this.circlegraphics.drawCircle(-50, -10, 10);
        _this.circlegraphics.x = 50;
        _this.circlegraphics.y = -50;
        _this.circlegraphics.alpha = 0;
        _this.circlegraphics.name = "graphics";

        _this.circlegraphics.boundsPadding = 0;

        _this.crayon.addChild(_this.circlegraphics);

        _this.circlegraphics1 = _this.add.graphics(0, 0);

        _this.circlegraphics1.beginFill(0xFFFF00, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 10);
        _this.circlegraphics1.x = 50;
        _this.circlegraphics1.y = -30;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "graphics";

        _this.circlegraphics1.boundsPadding = 0;

        _this.eraser.addChild(_this.circlegraphics1);

        _this.crayon.events.onInputDown.add(function(target){

            _this.crayon.scale.setTo(0.5);
            _this.crayon.angle = 400;
            //_this.crayon.anchor.setTo(1);
            //_this.crayon.x = _this.world.centerX+100;
            //_this.crayon.y = _this.world.centerY;

            setTimeout(function(){	
                //_this.crayon.input.enableDrag(true);

            }, 10);

            _this.crayon.input.enableDrag(true);
            _this.crayon.events.onDragStart.add(_this.onDragStart, _this);
            _this.crayon.events.onDragStop.add(_this.onDragStop, _this);

        }, _this); 

        _this.eraser.events.onInputDown.add(function(target){

            _this.eraser.scale.setTo(0.5);
            _this.eraser.angle = 245;
            //_this.crayon.anchor.setTo(1);
            //_this.crayon.x = _this.world.centerX+100;
            //_this.crayon.y = _this.world.centerY;

            setTimeout(function(){	
                //_this.crayon.input.enableDrag(true);

            }, 10);
            _this.eraser.input.enableDrag(true);
            _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
            _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);

        //_this.input.addMoveCallback(_this.moveCallback, _this);

        //_this.crayon.events.onInputDown.add(function(){_this.ClickSound = _this.add.audio('ClickSound');
        //_this.ClickSound.play();_this.selectedColor="red"}, _this);
        //_this.eraser.events.onInputDown.add(function(){_this.ClickSound = _this.add.audio('ClickSound');
        //_this.ClickSound.play();_this.selectedColor="Level12C_Eraser"}, _this);
        /*_this.redpaint.inputEnabled = true;
		_this.yellowpaint.inputEnabled = true;
		_this.greenpaint.inputEnabled = true;

		_this.redpaint.input.useHandCursor = true;
		_this.yellowpaint.input.useHandCursor = true;
		_this.greenpaint.input.useHandCursor = true;

		_this.redpaint.events.onInputDown.add(function(){_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();_this.selectedColor="red"}, _this);
		_this.yellowpaint.events.onInputDown.add(function(){_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();_this.selectedColor="yellow"}, _this);
		_this.greenpaint.events.onInputDown.add(function(){_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();_this.selectedColor="green"}, _this);	*/	
        console.log(_this.count);
    },

    checkOverlap:function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    onEraserDragStart:function(target)
    {
        commonNavBar.playClickSound();
    },
    
    onDragStart:function(target)
    {
        _this.dragStarted = true;
        _this.wind1 = false;
        _this.wind2 = false;
        _this.wind3 = false;
        _this.wind4 = false;
        _this.wind5 = false;
        _this.wind6 = false;
        _this.wind7 = false;
        _this.wind8 = false;
        
        commonNavBar.playClickSound();

        for(var i=0;i<_this.windmillGroup.children.length;i++)
        {
            if(_this.windmillGroup.getByName("_this.windAnim"+i))
            {

                if(_this.windmillGroup.getByName("_this.windAnim"+i).frame==0)
                {
                    //_this.windmillGroup.getByName("_this.windAnim1"+i).inputEnabled = false;
                }
                else{
                    _this.dragStarted = false;

                    if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim1")
                    {
                        _this.wind2 = true;
                        _this.wind4 = true;	
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim2")
                    {
                        _this.wind1 = true;
                        _this.wind3 = true;		
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim3")
                    {
                        _this.wind2 = true;
                        _this.wind4 = true;		
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim4")
                    {

                        _this.wind3 = true;	
                        _this.wind1 = true;	

                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim5")
                    {
                        _this.wind4 = true;
                        _this.wind6 = true;		
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim6")
                    {
                        _this.wind5 = true;
                        _this.wind7 = true;		
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim7")
                    {
                        _this.wind6 = true;
                        _this.wind8 = true;		
                    }
                    else if(_this.windmillGroup.getByName("_this.windAnim"+i).name == "_this.windAnim8")
                    {
                        _this.wind7 = true;
                        _this.wind1 = true;		
                    }

                }
            }
        }
        if(_this.dragStarted)
        {
            _this.wind1 = true;
            _this.wind2 = true;
            _this.wind3 = true;
            _this.wind4 = true;
            _this.wind5 = true;
            _this.wind6 = true;
            _this.wind7 = true;
            _this.wind8 = true;
        }
        else{

        }
        /*		else
					{


						if(_this.questionArray[_this.count]==1||_this.questionArray[_this.count]==2||_this.questionArray[_this.count]==3||_this.questionArray[_this.count]==7||_this.questionArray[_this.count]==8||_this.questionArray[_this.count]==9)
						{
							if(_this.windmillGroup.getByName("_this.windAnim1"+i).name=="_this.windAnim1")
							{
								_this.wind1 = true;
								_this.wind2 = true;
								//_this.wind3 = false;
								_this.wind4 = true;
							}
							else if(_this.windmillGroup.getByName("_this.windAnim1"+i).name=="_this.windAnim2")
							{
								_this.wind1 = true;
								_this.wind2 = true;
								_this.wind3 = true;
								//_this.wind4 = false;
							}
							else if(_this.windmillGroup.getByName("_this.windAnim1"+i).name=="_this.windAnim3")
							{
								//_this.wind1 = false;
								_this.wind2 = true;
								_this.wind3 = true;
								_this.wind4 = true;
							}
							else if(_this.windmillGroup.getByName("_this.windAnim1"+i).name=="_this.windAnim4")
							{
								_this.wind1 = true;
								//_this.wind2 = false;
								_this.wind3 = true;
								_this.wind4 = true;
							}
						}
					}
				}
		}*/

    },

    timer:function()
    {
        if(_this.input.pointer1.targetObject!=null)
        {

            if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim1")
                _this.windAnim1.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim2")
                _this.windAnim2.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim3")
                _this.windAnim3.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim4")
                _this.windAnim4.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim5")
                _this.windAnim5.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim6")
                _this.windAnim6.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim7")
                _this.windAnim7.frame = 1;
            else if(_this.input.pointer1.targetObject.sprite.name=="_this.windAnim8")
                _this.windAnim8.frame = 1;

            _this.crayon.visible = true;
            _this.checkButton.visible = true;
        }
        else
        {
            _this.crayon.visible = true;
        }
        //alert(_this.input.pointer1.targetObject);
    },

    timer2:function()
    {

        if(_this.input.touchPointer.targetObject!=null)
        {

            if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim1")
                _this.windAnim1.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim2")
                _this.windAnim2.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim3")
                _this.windAnim3.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim4")
                _this.windAnim4.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim5")
                _this.windAnim5.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim6")
                _this.windAnim6.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim7")
                _this.windAnim7.frame = 0;
            else if(_this.input.touchPointer.targetObject.sprite.name=="_this.windAnim8")
                _this.windAnim8.frame = 0;

            _this.eraser.visible = true;
        }
        else
        {
            _this.eraser.visible = true;
        }
    },

    onDragStop:function(target)
    {

        _this.dragStarted = false;

        //additional
        _this.wind1 = true;
        _this.wind2 = true;
        _this.wind3 = true;
        _this.wind4 = true;
        _this.wind5 = true;
        _this.wind6 = true;
        _this.wind7 = true;
        _this.wind8 = true;

        commonNavBar.playSnapSound();

        _this.crayon.x = _this.world.centerX-250;
        _this.crayon.y = _this.world.centerY;
        _this.crayon.scale.setTo(1);
        _this.crayon.anchor.setTo(0.5);
        _this.crayon.angle = 0;

        _this.eraser.x = _this.world.centerX-350;
        _this.eraser.y = _this.world.centerY-0;
        _this.eraser.scale.setTo(1);
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.angle = 0;


        if((_this.windAnim1!=null||_this.windAnim1!=undefined)&&_this.wind1)
        {
            for(var i=0;i<_this.windAnim1.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim1.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim1.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim1.frame = _this.crayonFrame+1;

                        _this.checkButton.visible = true;
                        break;
                    }
                    else
                    {
                        _this.windAnim1.frame = 0;

                    }
                }
            }
        }
        if((_this.windAnim2!=null||_this.windAnim2!=undefined)&&_this.wind2)
        {
            for(var i=0;i<_this.windAnim2.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim2.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim2.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim2.frame = _this.crayonFrame+1;

                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim3!=null||_this.windAnim3!=undefined)&&_this.wind3)
        {
            for(var i=0;i<_this.windAnim3.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim3.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim3.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim3.frame = _this.crayonFrame+1;

                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim4!=null||_this.windAnim4!=undefined)&&_this.wind4)
        {
            for(var i=0;i<_this.windAnim4.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim4.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim4.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim4.frame = _this.crayonFrame+1;
                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim5!=null||_this.windAnim5!=undefined)&&_this.wind5)
        {
            for(var i=0;i<_this.windAnim5.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim5.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim5.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim5.frame = _this.crayonFrame+1;
                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim6!=null||_this.windAnim6!=undefined)&&_this.wind6)
        {
            for(var i=0;i<_this.windAnim6.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim6.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim6.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim6.frame = _this.crayonFrame+1;

                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim7!=null||_this.windAnim7!=undefined)&&_this.wind7)
        {

            for(var i=0;i<_this.windAnim7.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim7.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim7.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim7.frame = _this.crayonFrame+1;

                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }
        if((_this.windAnim8!=null||_this.windAnim8!=undefined)&&_this.wind8)
        {
            for(var i=0;i<_this.windAnim8.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim8.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim8.getChildAt(i)))
                {
                    if(target.name=="Level12C_Crayon")
                    {
                        _this.windAnim8.frame = _this.crayonFrame+1;
                        _this.checkButton.visible = true;
                        break;
                    }
                }
            }
        }

    },

    onEraserDragStop:function(target)
    {
        _this.crayon.x = _this.world.centerX-250;
        _this.crayon.y = _this.world.centerY;
        _this.crayon.scale.setTo(1);
        _this.crayon.anchor.setTo(0.5);
        _this.crayon.angle = 0;

        _this.eraser.x = _this.world.centerX-350;
        _this.eraser.y = _this.world.centerY-0;
        _this.eraser.scale.setTo(1);
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.angle = 0;
        commonNavBar.playSnapSound();
        if((_this.windAnim1!=null||_this.windAnim1!=undefined))
        {
            for(var i=0;i<_this.windAnim1.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim1.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim1.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim1.frame = 0;
                    }
                }
            }
        }
        if((_this.windAnim2!=null||_this.windAnim2!=undefined))
        {
            for(var i=0;i<_this.windAnim2.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim2.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim2.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim2.frame = 0;

                    }
                }

            }
        }
        if((_this.windAnim3!=null||_this.windAnim3!=undefined))
        {
            for(var i=0;i<_this.windAnim3.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim3.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim3.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim3.frame = 0;
                    }

                }
            }
        }
        if((_this.windAnim4!=null||_this.windAnim4!=undefined))
        {
            for(var i=0;i<_this.windAnim4.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim4.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim4.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim4.frame = 0;
                    }

                }
            }
        }
        if((_this.windAnim5!=null||_this.windAnim5!=undefined))
        {
            for(var i=0;i<_this.windAnim5.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim5.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim5.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim5.frame = 0;
                    }
                }
            }
        }
        if((_this.windAnim6!=null||_this.windAnim6!=undefined))
        {
            for(var i=0;i<_this.windAnim6.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim6.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim6.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim6.frame = 0;

                    }
                }
            }
        }
        if((_this.windAnim7!=null||_this.windAnim7!=undefined))
        {

            for(var i=0;i<_this.windAnim7.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim7.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim7.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim7.frame = 0;
                    }
                }
            }
        }
        if((_this.windAnim8!=null||_this.windAnim8!=undefined))
        {
            for(var i=0;i<_this.windAnim8.children.length;i++)
            {
                if (_this.checkOverlap(_this.circlegraphics, _this.windAnim8.getChildAt(i))||_this.checkOverlap(_this.circlegraphics1, _this.windAnim8.getChildAt(i)))
                {
                    if(target.name=="Level12C_Eraser")
                    {
                        _this.windAnim8.frame = 0;
                    }
                }
            }
        }
    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    correctAns:function(target)
    {
        telInitializer2.gameCorrectAns();
		 this.Stararr.push(3);
        _this.checkButton.inputEnabled = false;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

//        _this.speakerbtn.inputEnabled=false;

        for(var i=0;i<_this.windmillGroup.children.length;i++)
        {
            if(_this.windmillGroup.getChildAt(i).frame!=0)
            {
                if(_this.questionArray[_this.count-1]==1||_this.questionArray[_this.count-1]==2||_this.questionArray[_this.count-1]==3)
                {
                    if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim1")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ y: _this.windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ y: target.y+20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim2")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x-20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim3")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ y: _this.windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ y: target.y-20}, 100,'Linear', true, 100);
                        }, _this);
                    } 
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim4")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x+20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                }
            }

            if(_this.windmillGroup.getChildAt(i).frame!=0)
            {
                //console.log("if"+_this.questionArray[_this.count-1]);
                if(_this.questionArray[_this.count-1]==4||_this.questionArray[_this.count-1]==5||_this.questionArray[_this.count-1]==6)
                {
                    if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim1")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x-20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim2")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ y: _this.windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ y: target.y-20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim3")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x+20}, 100,'Linear', true, 100);
                        }, _this);
                    } 
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim4")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ y: _this.windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ y: target.y+20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                }
            }


            if(_this.windmillGroup.getChildAt(i).frame!=0)
            {
                //console.log("if"+_this.questionArray[_this.count-1]);
                if(_this.questionArray[_this.count-1]==7||_this.questionArray[_this.count-1]==8||_this.questionArray[_this.count-1]==9)
                {
                    if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim1")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x+20,y: _this.windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x-20,y: target.y-20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim2")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x-20,y: _this.windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x+20,y: target.y-20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim3")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x-20,y: _this.windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x+20,y: target.y+20}, 100,'Linear', true, 100);
                        }, _this);
                    } 
                    else if(_this.windmillGroup.getChildAt(i).name == "_this.windAnim4")
                    {
                        var tween = _this.add.tween(_this.windmillGroup.getChildAt(i));
                        tween.to({ x: _this.windmillGroup.getChildAt(i).x+20,y: _this.windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                        tween.onComplete.add(function(target){
                            //_this.addQuestion(_this.count);
                            // _this.addEventListeners();
                            var tween2 = _this.add.tween(target);
                            tween2.to({ x: target.x-20,y: target.y+20}, 100,'Linear', true, 100);
                        }, _this);
                    }
                }
            }
        }

        _this.time.events.add(500, function(){
            commonNavBar.spinSound();
            _this.rightAnswer = true;
        }, _this);

        _this.disableListeners();
        //score+=10;
        //scoretext.setText(selctedLang.score+' : '+score);
//        countstar1++;
        var starAnim = _this.starsGroup.getChildAt(countstar1);

        starAnim.smoothed = false;
        var anim = starAnim.animations.add('star');
        anim.play();

        commonNavBar.playCelebrationSound();

        //_this.checkButton.visible = false;
        //_this.resetButton.visible = false;
        _this.time.events.add(3000, _this.tweenAndDestroy, _this);

    },

    disableListeners:function()
    {
        if(_this.windAnim1!=null||_this.windAnim1!=undefined)
        {
            _this.windAnim1.events.onInputDown.removeAll();
        }
        if(_this.windAnim2!=null||_this.windAnim2!=undefined)
        {
            _this.windAnim2.events.onInputDown.removeAll();
        }
        if(_this.windAnim3!=null||_this.windAnim3!=undefined)
        {
            _this.windAnim3.events.onInputDown.removeAll();
        }
        if(_this.windAnim4!=null||_this.windAnim4!=undefined)
        {
            _this.windAnim4.events.onInputDown.removeAll();
        }
        if(_this.windAnim5!=null||_this.windAnim5!=undefined)
        {
            _this.windAnim5.events.onInputDown.removeAll();
        }
        if(_this.windAnim6!=null||_this.windAnim6!=undefined)
        {
            _this.windAnim6.events.onInputDown.removeAll();
        }
        if(_this.windAnim7!=null||_this.windAnim7!=undefined)
        {
            _this.windAnim7.events.onInputDown.removeAll();
        }
        if(_this.windAnim8!=null||_this.windAnim8!=undefined)
        {
            _this.windAnim8.events.onInputDown.removeAll();
        }
        if(_this.windAnim9!=null||_this.windAnim9!=undefined)
        {
            _this.windAnim9.events.onInputDown.removeAll();
        }
        if(_this.windAnim10!=null||_this.windAnim10!=undefined)
        {
            _this.windAnim10.events.onInputDown.removeAll();
        }
        if(_this.windAnim11!=null||_this.windAnim11!=undefined)
        {
            _this.windAnim11.events.onInputDown.removeAll();
        }
        if(_this.windAnim12!=null||_this.windAnim12!=undefined)
        {
            _this.windAnim12.events.onInputDown.removeAll();
        }
        if(_this.windAnim13!=null||_this.windAnim13!=undefined)
        {
            _this.windAnim13.events.onInputDown.removeAll();
        }
        if(_this.windAnim14!=null||_this.windAnim14!=undefined)
        {
            _this.windAnim14.events.onInputDown.removeAll();
        }
        if(_this.windAnim15!=null||_this.windAnim15!=undefined)
        {
            _this.windAnim15.events.onInputDown.removeAll();
        }
        if(_this.windAnim16!=null||_this.windAnim16!=undefined)
        {
            _this.windAnim16.events.onInputDown.removeAll();
        }
    },

    wrongAns:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.checkButton.frame = 0;

        _this.shake.shake(10,_this.windmillGroup);
        
        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(countstar1).frame = 1;
        
         commonNavBar.playWrongCelebrationSound();
        
        _this.time.events.add(3000, _this.tweenAndDestroy, _this);
        
    },

    tweenAndDestroy:function()
    {
        _this.rightAnswer = false;
        var tween = _this.add.tween(_this.windmillGroup);

        var tween2 = _this.add.tween(_this.crayon);
        tween2.to({ x: -300}, 0,'Linear', true, 0);
        tween2.onComplete.add(function(){
            //_this.removeCelebration();
        }, _this);

        var tween3 = _this.add.tween(_this.eraser);
        tween3.to({ x: -300}, 0,'Linear', true, 0);
        tween3.onComplete.add(function(){
            //_this.removeCelebration();
        }, _this);

        tween.to({ x: -500}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.removeCelebration();
        }, _this);


    },

    removeCelebration:function()
    {
//        _this.timer1.stop();
//        if(_this.spin2)
//        {
//            if(_this.spin2.isPlaying)
//            {
//                _this.spin2.stop();
//            }
//        }
        _this.rightAnswer = false;
        //_this.windAnim1.animations.stop('rotate');
        //questionBackground.destroy();
        _this.windmillGroup.destroy();
        _this.crayon.destroy();
        _this.eraser.destroy();
        _this.checkButton.visible = false;
        if(_this.count < 3)
        {
            _this.displayQuestion();
            _this.starsGroup.getChildAt(countstar1+1).frame = 2; 
            countstar1++;
        }
        else
        {
            countstar1=6;
//            _this.timer1.stop();
//            _this.timer1 = null;
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
            commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
            this.createScoreScene();
        }
    },

    createScoreScene:function()
    {
        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
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
        
        this.generateStarsForScoreScene(this,9);
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
		
		this.backgroundtransp.visible=false;

        _this.state.start('numbersense5',true,false);
        
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
        console.log(this.scoreSceneScore);
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
            commonNavBar.speakerbtn=null;
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('fraction_NSFG_4_1level1',true,false);
        }, this);
    },
    
    checkAns:function()
    {
        
        _this.crayon.inputEnabled = false; 
        _this.eraser.inputEnabled = false;
            
        _this.noofAttempts++;

        for(var i=1;i<=_this.windmillGroup.total;i++)
        {
            if(_this.windmillGroup.getByName('_this.windAnim'+i))
            {
                if(_this.windmillGroup.getByName('_this.windAnim'+i).frame == 0)
                {
                    _this.blankCount++;
                }
                else if(_this.windmillGroup.getByName('_this.windAnim'+i).frame == 1)
                {
                    _this.redCount++;
                }
                else if(_this.windmillGroup.getByName('_this.windAnim'+i).frame == 2)
                {
                    _this.yellowCount++;
                }
                else if(_this.windmillGroup.getByName('_this.windAnim'+i).frame == 3)
                {
                    _this.greenCount++;
                }
            }
        }
        
        console.log(_this.questionArray[_this.count-1],_this.blankCount);
        switch(_this.questionArray[_this.count-1])
        {
            case 1 : 
                if(_this.blankCount==3)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 2 :
                if(_this.blankCount==2)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 3 :
                if(_this.blankCount==1)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 4 :
                if(_this.blankCount==3)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 5 :
                if(_this.blankCount==2)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 6 :
                if(_this.blankCount==1)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 7 :
                if(_this.blankCount==3)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 8 :
                if(_this.blankCount==2)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;
            case 9 :
                if(_this.blankCount==1)
                {
                    _this.correctAns();
                }
                else
                {
                    _this.wrongAns();
                }
                break;

        }

        _this.blankCount=0;
        _this.redCount=0;
        _this.yellowCount=0;
        _this.greenCount=0;

    },

    resetAll:function()
    {
        for(var i=1;i<=_this.windmillGroup.total;i++)
        {
            if(_this.windmillGroup.getByName('_this.windAnim1'+i))
            {
                _this.windmillGroup.getByName('_this.windAnim1'+i).frame = 0;
            }
        }
    },

    addFirstWindMill:function()
    {

        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY+20,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.sprite(_this.world.centerX+290,_this.world.centerY,'Level12A_checkbtn');
        _this.checkButton.frame = 0;
        _this.checkButton.scale.setTo(1);
        _this.checkButton.anchor.setTo(0.5);


        //		var checktext = _this.add.text(0, 0, selctedLang.check);
        //		checktext.anchor.set(0.5);
        //		checktext.align = 'center';
        //
        //		checktext.font = 'Comic Sans MS';
        //		checktext.fontSize = 30;
        //		//text.fontWeight = 'bold';
        //		checktext.fill = '#FFFFFF';
        //
        //		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        //		_this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(function(){
            _this.checkButton.frame = 1;
            commonNavBar.playClickSound();
            
            _this.checkButton.inputEnabled = false;
            
            _this.time.events.add(500, function(){
                _this.checkAns();
            }, _this);
        },_this);

        _this.checkButton.visible = false;


        //adding _this.windmill to the game.
        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1');
        _this.windAnim1.anchor.setTo(0,1);
        //_this.windAnim1.scale.setTo(0.9);
        _this.windAnim1.angle = -45;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX+0;
        _this.windAnim1.y = _this.world.centerY-0;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;


        wronggraphics1 = _this.add.graphics(180, 100);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,50,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim1.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(180, 100);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,80,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim1.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(180, 100);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-170,80,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim1.addChild(wronggraphics3);

        // wronggraphics1.alpha =0;

        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1');
        _this.windAnim2.anchor.setTo(0,1);
        //_this.windAnim2.scale.setTo(0.9);
        _this.windAnim2.angle = 45;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX+0;
        _this.windAnim2.y = _this.world.centerY-0;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;

        wronggraphics1 = _this.add.graphics(180, 100);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,50,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim2.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(180, 100);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,80,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim2.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(180, 100);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-170,80,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim2.addChild(wronggraphics3);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1');
        _this.windAnim3.anchor.setTo(0,1);
        //_this.windAnim3.scale.setTo(0.9);
        _this.windAnim3.angle = 135;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX-0;
        _this.windAnim3.y = _this.world.centerY-0; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;


        wronggraphics1 = _this.add.graphics(180, 100);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,50,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim3.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(180, 100);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,80,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim3.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(180, 100);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-170,80,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim3.addChild(wronggraphics3);

        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1');
        _this.windAnim4.anchor.setTo(0,1);
        //_this.windAnim4.scale.setTo(0.9);
        _this.windAnim4.angle = 225;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX+0;
        _this.windAnim4.y = _this.world.centerY-0;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;


        wronggraphics1 = _this.add.graphics(180, 100);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,50,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim4.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(180, 100);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,80,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim4.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(180, 100);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-170,80,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim4.addChild(wronggraphics3);

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
        centerCircle.y = _this.world.centerY-0;


        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 1400;
        //_this.windmillGroup.y = 10;

        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 1500,'Linear', true, 0);
        tween.onComplete.add(function(){

            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addSecondWindMill:function()
    {

        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-40,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.sprite(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn');
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 0, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 40;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(function(){
            _this.checkButton.frame = 1;
                                                            
            commonNavBar.playClickSound();
                 
            _this.checkButton.inputEnabled = false;
            
            _this.time.events.add(500, function(){
                _this.checkAns();
            }, _this);
        },_this);

        _this.checkButton.visible = false;


        //adding _this.windmill to the game.
        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
        _this.windAnim1.anchor.setTo(1,1);
        _this.windAnim1.angle = -45;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX+10;
        _this.windAnim1.y = _this.world.centerY-30;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
        _this.windAnim2.anchor.setTo(1,1);
        _this.windAnim2.angle = 45;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX+0;
        _this.windAnim2.y = _this.world.centerY-30;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
        _this.windAnim3.anchor.setTo(1,1);
        _this.windAnim3.angle = 135;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX-8;
        _this.windAnim3.y = _this.world.centerY-30; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind4','Level12A_Symbol 68 instance 10000');
        _this.windAnim4.anchor.setTo(1,1);
        _this.windAnim4.angle = 225;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX+3;
        _this.windAnim4.y = _this.world.centerY-30;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
        centerCircle.y = _this.world.centerY-90;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  
    },

    addThirdWindMill:function()
    {

        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-90,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn',null,_this,0,1,2);
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 5, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 40;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(_this.checkAns,_this);

        _this.checkButton.visible = false;


        //adding _this.windmill to the game.
        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
        _this.windAnim1.anchor.setTo(1,1);
        _this.windAnim1.angle = -45;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX+10;
        _this.windAnim1.y = _this.world.centerY-90;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
        _this.windAnim2.anchor.setTo(1,1);
        _this.windAnim2.angle = 45;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX+0;
        _this.windAnim2.y = _this.world.centerY-80;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
        _this.windAnim3.anchor.setTo(1,1);
        _this.windAnim3.angle = 135;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX-8;
        _this.windAnim3.y = _this.world.centerY-95; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
        _this.windAnim4.anchor.setTo(1,1);
        _this.windAnim4.angle = 225;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX+3;
        _this.windAnim4.y = _this.world.centerY-105;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {
                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-0;
        centerCircle.y = _this.world.centerY-90;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addFourthWindMill:function()
    {

        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-40,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn');
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 0, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 30;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(function(){_this.checkButton.frame = 1; _this.checkButton.inputEnabled = false;
                                                            commonNavBar.playClickSound();
                                                            _this.time.events.add(500, function(){_this.checkAns();}, _this);},_this);

        _this.checkButton.visible = false;



        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim1.anchor.setTo(1,1);
        _this.windAnim1.angle = -2;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY-77;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        //adding _this.windmill to the game.		
        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim2.anchor.setTo(1,1);
        _this.windAnim2.angle = 40;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX-10;
        _this.windAnim2.y = _this.world.centerY-70;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim3.anchor.setTo(1,1);
        _this.windAnim3.angle = 90;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX-30;
        _this.windAnim3.y = _this.world.centerY-80; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim4.anchor.setTo(1,1);
        _this.windAnim4.angle = 130;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX-34;
        _this.windAnim4.y = _this.world.centerY-86;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this); 


        _this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim5.anchor.setTo(1,1);
        _this.windAnim5.angle = 175;
        _this.windAnim5.name = '_this.windAnim5';
        _this.windAnim5.x = _this.world.centerX-30;
        _this.windAnim5.y = _this.world.centerY-105;
        _this.windAnim5.inputEnabled = true;
        _this.windAnim5.input.useHandCursor = true;
        _this.windAnim5.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim6.anchor.setTo(1,1);
        _this.windAnim6.angle = 225;
        _this.windAnim6.name = '_this.windAnim6';
        _this.windAnim6.x = _this.world.centerX-12;
        _this.windAnim6.y = _this.world.centerY-110;
        _this.windAnim6.inputEnabled = true;
        _this.windAnim6.input.useHandCursor = true;
        _this.windAnim6.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim7.anchor.setTo(1,1);
        _this.windAnim7.angle = 270;
        _this.windAnim7.name = '_this.windAnim7';
        _this.windAnim7.x = _this.world.centerX+5;
        _this.windAnim7.y = _this.world.centerY-105;
        _this.windAnim7.inputEnabled = true;
        _this.windAnim7.input.useHandCursor = true;
        _this.windAnim7.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim8.anchor.setTo(1,1);
        _this.windAnim8.angle = 310;
        _this.windAnim8.name = '_this.windAnim8';
        _this.windAnim8.x = _this.world.centerX+10;
        _this.windAnim8.y = _this.world.centerY-95;
        _this.windAnim8.inputEnabled = true;
        _this.windAnim8.input.useHandCursor = true;
        _this.windAnim8.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);
        /*	
		_this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
		_this.windAnim9.anchor.setTo(1,1);
		_this.windAnim9.angle = 320;
		_this.windAnim9.name = '_this.windAnim9';
		_this.windAnim9.x = _this.world.centerX+13;
		_this.windAnim9.y = _this.world.centerY-105;
		_this.windAnim9.inputEnabled = true;
		_this.windAnim9.input.useHandCursor = true;
		_this.windAnim9.events.onInputDown.add(function(target)
		{

			if(_this.selectedColor!=null)
			{
				switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);


		*/

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-15;
        centerCircle.y = _this.world.centerY-100;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(_this.windAnim5);
        _this.windmillGroup.add(_this.windAnim6);
        _this.windmillGroup.add(_this.windAnim7);
        _this.windmillGroup.add(_this.windAnim8);
        //_this.windmillGroup.add(_this.windAnim9);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  

    },

    addFifthWindMill:function()
    {


        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-90,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn',null,_this,0,1,2);
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 5, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 40;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(_this.checkAns,_this);

        _this.checkButton.visible = false;

        //adding _this.windmill to the game.		
        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim1.anchor.setTo(1,1);
        _this.windAnim1.angle = -2;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY-87;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        //adding _this.windmill to the game.		
        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim2.anchor.setTo(1,1);
        _this.windAnim2.angle = 40;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX-10;
        _this.windAnim2.y = _this.world.centerY-80;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim3.anchor.setTo(1,1);
        _this.windAnim3.angle = 90;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX-30;
        _this.windAnim3.y = _this.world.centerY-90; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim4.anchor.setTo(1,1);
        _this.windAnim4.angle = 130;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX-34;
        _this.windAnim4.y = _this.world.centerY-96;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this); 


        _this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim5.anchor.setTo(1,1);
        _this.windAnim5.angle = 175;
        _this.windAnim5.name = '_this.windAnim5';
        _this.windAnim5.x = _this.world.centerX-30;
        _this.windAnim5.y = _this.world.centerY-115;
        _this.windAnim5.inputEnabled = true;
        _this.windAnim5.input.useHandCursor = true;
        _this.windAnim5.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim6.anchor.setTo(1,1);
        _this.windAnim6.angle = 225;
        _this.windAnim6.name = '_this.windAnim6';
        _this.windAnim6.x = _this.world.centerX-12;
        _this.windAnim6.y = _this.world.centerY-120;
        _this.windAnim6.inputEnabled = true;
        _this.windAnim6.input.useHandCursor = true;
        _this.windAnim6.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim7.anchor.setTo(1,1);
        _this.windAnim7.angle = 270;
        _this.windAnim7.name = '_this.windAnim7';
        _this.windAnim7.x = _this.world.centerX+5;
        _this.windAnim7.y = _this.world.centerY-115;
        _this.windAnim7.inputEnabled = true;
        _this.windAnim7.input.useHandCursor = true;
        _this.windAnim7.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
        _this.windAnim8.anchor.setTo(1,1);
        _this.windAnim8.angle = 310;
        _this.windAnim8.name = '_this.windAnim8';
        _this.windAnim8.x = _this.world.centerX+10;
        _this.windAnim8.y = _this.world.centerY-105;
        _this.windAnim8.inputEnabled = true;
        _this.windAnim8.input.useHandCursor = true;
        _this.windAnim8.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 8 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
                        case "green": target.frameName = 'Symbol 8 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);
        /*	
		_this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
		_this.windAnim9.anchor.setTo(1,1);
		_this.windAnim9.angle = 320;
		_this.windAnim9.name = '_this.windAnim9';
		_this.windAnim9.x = _this.world.centerX+13;
		_this.windAnim9.y = _this.world.centerY-105;
		_this.windAnim9.inputEnabled = true;
		_this.windAnim9.input.useHandCursor = true;
		_this.windAnim9.events.onInputDown.add(function(target)
		{

			if(_this.selectedColor!=null)
			{
				switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);


		*/

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX-15;
        centerCircle.y = _this.world.centerY-100;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(_this.windAnim5);
        _this.windmillGroup.add(_this.windAnim6);
        _this.windmillGroup.add(_this.windAnim7);
        _this.windmillGroup.add(_this.windAnim8);
        //_this.windmillGroup.add(_this.windAnim9);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addSixthWindMill:function()
    {


        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+20,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX+290,_this.world.centerY,'Level12A_checkbtn');
        _this.checkButton.scale.setTo(1);
        _this.checkButton.anchor.setTo(0.5);
        _this.checkButton.frame = 0;

        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(function(){
            _this.checkButton.frame = 1;
                                                            
            commonNavBar.playClickSound();
                      
            _this.checkButton.inputEnabled = false;
            
            _this.time.events.add(500, function(){
                _this.checkAns();
            }, _this);
        },_this);

        _this.checkButton.visible = false;

        //adding _this.windmill to the game.		
        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
        _this.windAnim1.anchor.setTo(0,0.5);
        //_this.windAnim1.scale.setTo(0.7);
        //_this.windAnim1.angle = -2;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY-20;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        //_this.windAnim1.alpha = 0;


        wronggraphics1 = _this.add.graphics(240, 200);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,80,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim1.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(200, 180);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,50,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim1.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(230, 200);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-220,50,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim1.addChild(wronggraphics3);

        wronggraphics4 = _this.add.graphics(230, 230);
        wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics4.beginFill(0xFF700B, 1);
        wronggraphics4.drawRect(-180,-220,80,50);
        wronggraphics4.boundsPadding = 0;
        wronggraphics4.alpha=0;

        _this.windAnim1.addChild(wronggraphics4);

        //adding _this.windmill to the game.		
        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
        _this.windAnim2.anchor.setTo(0,0.5);
        //_this.windAnim2.scale.setTo(0.7);
        _this.windAnim2.angle = 90;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX;
        _this.windAnim2.y = _this.world.centerY-20;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;

        wronggraphics1 = _this.add.graphics(240, 200);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,80,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim2.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(200, 180);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,50,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim2.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(230, 200);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-220,50,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim2.addChild(wronggraphics3);

        wronggraphics4 = _this.add.graphics(230, 230);
        wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics4.beginFill(0xFF700B, 1);
        wronggraphics4.drawRect(-180,-220,80,50);
        wronggraphics4.boundsPadding = 0;
        wronggraphics4.alpha=0;

        _this.windAnim2.addChild(wronggraphics4);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
        _this.windAnim3.anchor.setTo(0,0.5);
        //_this.windAnim3.scale.setTo(0.7);
        _this.windAnim3.angle = 180;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX;
        _this.windAnim3.y = _this.world.centerY-20; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        //_this.windAnim3.alpha = 0;

        wronggraphics1 = _this.add.graphics(240, 200);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,80,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim3.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(200, 180);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,50,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim3.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(230, 200);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-220,50,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim3.addChild(wronggraphics3);

        wronggraphics4 = _this.add.graphics(230, 230);
        wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics4.beginFill(0xFF700B, 1);
        wronggraphics4.drawRect(-180,-220,80,50);
        wronggraphics4.boundsPadding = 0;
        wronggraphics4.alpha=0;

        _this.windAnim3.addChild(wronggraphics4);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
        _this.windAnim4.anchor.setTo(0,0.5);
        //_this.windAnim4.scale.setTo(0.7);
        _this.windAnim4.angle = 270;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX;
        _this.windAnim4.y = _this.world.centerY-20;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;

        wronggraphics1 = _this.add.graphics(240, 200);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-180,-270,80,50);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim4.addChild(wronggraphics1);

        wronggraphics2 = _this.add.graphics(200, 180);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.drawRect(-180,-220,50,50);
        wronggraphics2.boundsPadding = 0;
        wronggraphics2.alpha=0;

        _this.windAnim4.addChild(wronggraphics2);

        wronggraphics3 = _this.add.graphics(230, 200);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.drawRect(-180,-220,50,50);
        wronggraphics3.boundsPadding = 0;
        wronggraphics3.alpha=0;

        _this.windAnim4.addChild(wronggraphics3);

        wronggraphics4 = _this.add.graphics(230, 230);
        wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics4.beginFill(0xFF700B, 1);
        wronggraphics4.drawRect(-180,-220,80,50);
        wronggraphics4.boundsPadding = 0;
        wronggraphics4.alpha=0;

        _this.windAnim4.addChild(wronggraphics4);


        /*	_this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
		_this.windAnim5.anchor.setTo(1,1);
		_this.windAnim5.scale.setTo(0.7);
		_this.windAnim5.angle = 175;
		_this.windAnim5.name = '_this.windAnim5';
		_this.windAnim5.x = _this.world.centerX-30;
		_this.windAnim5.y = _this.world.centerY-115;
		_this.windAnim5.inputEnabled = true;
		_this.windAnim5.input.useHandCursor = true;
		_this.windAnim5.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				switch(_this.selectedColor)
					{
						case "red": target.frame = 1;break;
						case "Level12C_Eraser": target.frame = 0;break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);
		wronggraphics1 = _this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;

		_this.windAnim5.addChild(wronggraphics1);

		/*wronggraphics2 = _this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;

		_this.windAnim5.addChild(wronggraphics2);*/


        /*	_this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
		_this.windAnim6.anchor.setTo(1,1);
		_this.windAnim6.scale.setTo(0.7);
		_this.windAnim6.angle = 225;
		_this.windAnim6.name = '_this.windAnim6';
		_this.windAnim6.x = _this.world.centerX-12;
		_this.windAnim6.y = _this.world.centerY-120;
		_this.windAnim6.inputEnabled = true;
		_this.windAnim6.input.useHandCursor = true;
		_this.windAnim6.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				switch(_this.selectedColor)
					{
						case "red": target.frame = 1;break;
						case "Level12C_Eraser": target.frame = 0;break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);
		wronggraphics1 = _this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;

		_this.windAnim6.addChild(wronggraphics1);

		/*wronggraphics2 = _this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;

		_this.windAnim6.addChild(wronggraphics2);*/

        /*	_this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
		_this.windAnim7.anchor.setTo(1,1);
		_this.windAnim7.scale.setTo(0.7);
		_this.windAnim7.angle = 270;
		_this.windAnim7.name = '_this.windAnim7';
		_this.windAnim7.x = _this.world.centerX+5;
		_this.windAnim7.y = _this.world.centerY-115;
		_this.windAnim7.inputEnabled = true;
		_this.windAnim7.input.useHandCursor = true;
		_this.windAnim7.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				switch(_this.selectedColor)
					{
						case "red": target.frame = 1;break;
						case "Level12C_Eraser": target.frame = 0;break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);
		wronggraphics1 = _this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;

		_this.windAnim7.addChild(wronggraphics1);

		/*wronggraphics2 = _this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;

		_this.windAnim7.addChild(wronggraphics2);*/

        /*	
		_this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind3');
		_this.windAnim8.anchor.setTo(1,1);
		_this.windAnim8.scale.setTo(0.7);
		_this.windAnim8.angle = 310;
		_this.windAnim8.name = '_this.windAnim8';
		_this.windAnim8.x = _this.world.centerX+10;
		_this.windAnim8.y = _this.world.centerY-105;
		_this.windAnim8.inputEnabled = true;
		_this.windAnim8.input.useHandCursor = true;
		_this.windAnim8.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				switch(_this.selectedColor)
					{
						case "red": target.frame = 1;break;
						case "Level12C_Eraser": target.frame = 0;break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);
		wronggraphics1 = _this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;

		_this.windAnim8.addChild(wronggraphics1);

		/*wronggraphics2 = _this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;

		_this.windAnim8.addChild(wronggraphics2);*/
        /*	
		_this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_scene3_this.wind2','Level12A_Symbol 8 instance 10000');
		_this.windAnim9.anchor.setTo(1,1);
		_this.windAnim9.angle = 320;
		_this.windAnim9.name = '_this.windAnim9';
		_this.windAnim9.x = _this.world.centerX+13;
		_this.windAnim9.y = _this.world.centerY-105;
		_this.windAnim9.inputEnabled = true;
		_this.windAnim9.input.useHandCursor = true;
		_this.windAnim9.events.onInputDown.add(function(target)
		{

			if(_this.selectedColor!=null)
			{
				switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;
			}

		}, _this);


		*/

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX;
        centerCircle.y = _this.world.centerY-20;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        //_this.windmillGroup.add(_this.windAnim5);
        //_this.windmillGroup.add(_this.windAnim6);
        //_this.windmillGroup.add(_this.windAnim7);
        //_this.windmillGroup.add(_this.windAnim8);
        //_this.windmillGroup.add(_this.windAnim9);
        _this.windmillGroup.add(centerCircle);


        _this.windmillGroup.x = 1400;
        _this.windmillGroup.y = 20;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: -0}, 1500,'Linear', true, 0);
        tween.onComplete.add(function(){

            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addSeventhWindMill:function()
    {

        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX-5,_this.world.centerY+20,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX+290,_this.world.centerY,'Level12A_checkbtn');
        _this.checkButton.scale.setTo(1);
        _this.checkButton.anchor.setTo(0.5);
        _this.checkButton.frame = 0;

        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(function(){
            _this.checkButton.frame = 1;
                                                            
            commonNavBar.playClickSound();
            
            _this.checkButton.inputEnabled = false;
            
            _this.time.events.add(500, function(){
                _this.checkAns();
            }, _this);
        },_this);

        _this.checkButton.visible = false;

        //adding _this.windmill to the game.	

        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2');
        //_this.windAnim1.scale.setTo(0.8);
        _this.windAnim1.anchor.setTo(0,0);
        _this.windAnim1.angle = 0;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                switch(_this.selectedColor)
                {
                    case "red": target.frame = 1;break;
                    case "Level12C_Eraser": target.frame = 0;break;
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);

        wronggraphics1 = _this.add.graphics(90, 270);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-85,-270,150,150);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim1.addChild(wronggraphics1);

        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2');
        _this.windAnim2.anchor.setTo(0,0);
        //_this.windAnim2.scale.setTo(0.8);
        _this.windAnim2.angle = 90;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX;
        _this.windAnim2.y = _this.world.centerY;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        //_this.windAnim2.alpha = 0;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                switch(_this.selectedColor)
                {
                    case "red": target.frame = 1;break;
                    case "Level12C_Eraser": target.frame = 0;break;
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);
        wronggraphics1 = _this.add.graphics(85, 270);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-85,-270,150,150);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim2.addChild(wronggraphics1);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2');
        _this.windAnim3.anchor.setTo(0,0);
        //_this.windAnim3.scale.setTo(0.8);
        _this.windAnim3.angle = 180;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX;
        _this.windAnim3.y = _this.world.centerY; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        //_this.windAnim3.alpha = 0;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                switch(_this.selectedColor)
                {
                    case "red": target.frame = 1;break;
                    case "Level12C_Eraser": target.frame = 0;break;
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this);
        wronggraphics1 = _this.add.graphics(85, 270);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-85,-270,150,150);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim3.addChild(wronggraphics1);

        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2');
        _this.windAnim4.anchor.setTo(0,0);
        _this.windAnim4.angle = 270;
        //_this.windAnim4.scale.setTo(0.8);
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX;
        _this.windAnim4.y = _this.world.centerY;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        //_this.windAnim4.alpha = 0;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                switch(_this.selectedColor)
                {
                    case "red": target.frame = 1;break;
                    case "Level12C_Eraser": target.frame = 0;break;
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;
            }

        }, _this); 

        wronggraphics1 = _this.add.graphics(87, 270);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        wronggraphics1.drawRect(-85,-270,150,150);		
        wronggraphics1.boundsPadding = 0;
        wronggraphics1.alpha=0;

        _this.windAnim4.addChild(wronggraphics1);

        /*	_this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim5.anchor.setTo(0.5,1);
		_this.windAnim5.angle = 90;
		_this.windAnim5.name = '_this.windAnim5';
		_this.windAnim5.x = _this.world.centerX-0;
		_this.windAnim5.y = _this.world.centerY-50;
		_this.windAnim5.inputEnabled = true;
		_this.windAnim5.input.useHandCursor = true;
		_this.windAnim5.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);


		_this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim6.anchor.setTo(0.5,1);
		_this.windAnim6.angle = 112.5;
		_this.windAnim6.name = '_this.windAnim6';
		_this.windAnim6.x = _this.world.centerX-0;
		_this.windAnim6.y = _this.world.centerY-50;
		_this.windAnim6.inputEnabled = true;
		_this.windAnim6.input.useHandCursor = true;
		_this.windAnim6.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim7.anchor.setTo(0.5,1);
		_this.windAnim7.angle = 135;
		_this.windAnim7.name = '_this.windAnim7';
		_this.windAnim7.x = _this.world.centerX;
		_this.windAnim7.y = _this.world.centerY-50;
		_this.windAnim7.inputEnabled = true;
		_this.windAnim7.input.useHandCursor = true;
		_this.windAnim7.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);


		_this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim8.anchor.setTo(0.5,1);
		_this.windAnim8.angle = 157.5;
		_this.windAnim8.name = '_this.windAnim8';
		_this.windAnim8.x = _this.world.centerX;
		_this.windAnim8.y = _this.world.centerY-50;
		_this.windAnim8.inputEnabled = true;
		_this.windAnim8.input.useHandCursor = true;
		_this.windAnim8.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim9.anchor.setTo(0.5,1);
		_this.windAnim9.angle = 180;
		_this.windAnim9.name = '_this.windAnim9';
		_this.windAnim9.x = _this.world.centerX;
		_this.windAnim9.y = _this.world.centerY-50;
		_this.windAnim9.inputEnabled = true;
		_this.windAnim9.input.useHandCursor = true;
		_this.windAnim9.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim10 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim10.anchor.setTo(0.5,1);
		_this.windAnim10.angle = 202.5;
		_this.windAnim10.name = '_this.windAnim10';
		_this.windAnim10.x = _this.world.centerX;
		_this.windAnim10.y = _this.world.centerY-50;
		_this.windAnim10.inputEnabled = true;
		_this.windAnim10.input.useHandCursor = true;
		_this.windAnim10.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim11 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim11.anchor.setTo(0.5,1);
		_this.windAnim11.angle = 225;
		_this.windAnim11.name = '_this.windAnim11';
		_this.windAnim11.x = _this.world.centerX;
		_this.windAnim11.y = _this.world.centerY-50;
		_this.windAnim11.inputEnabled = true;
		_this.windAnim11.input.useHandCursor = true;
		_this.windAnim11.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim12 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim12.anchor.setTo(0.5,1);
		_this.windAnim12.angle = 247.5;
		_this.windAnim12.name = '_this.windAnim12';
		_this.windAnim12.x = _this.world.centerX;
		_this.windAnim12.y = _this.world.centerY-50;
		_this.windAnim12.inputEnabled = true;
		_this.windAnim12.input.useHandCursor = true;
		_this.windAnim12.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim13 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim13.anchor.setTo(0.5,1);
		_this.windAnim13.angle = 270;
		_this.windAnim13.name = '_this.windAnim13';
		_this.windAnim13.x = _this.world.centerX;
		_this.windAnim13.y = _this.world.centerY-50;
		_this.windAnim13.inputEnabled = true;
		_this.windAnim13.input.useHandCursor = true;
		_this.windAnim13.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim14 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim14.anchor.setTo(0.5,1);
		_this.windAnim14.angle = 292.5;
		_this.windAnim14.name = '_this.windAnim14';
		_this.windAnim14.x = _this.world.centerX;
		_this.windAnim14.y = _this.world.centerY-50;
		_this.windAnim14.inputEnabled = true;
		_this.windAnim14.input.useHandCursor = true;
		_this.windAnim14.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim15 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim15.anchor.setTo(0.5,1);
		_this.windAnim15.angle = 315;
		_this.windAnim15.name = '_this.windAnim15';
		_this.windAnim15.x = _this.world.centerX;
		_this.windAnim15.y = _this.world.centerY-50;
		_this.windAnim15.inputEnabled = true;
		_this.windAnim15.input.useHandCursor = true;
		_this.windAnim15.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		_this.windAnim16 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		_this.windAnim16.anchor.setTo(0.5,1);
		_this.windAnim16.angle = 337.5;
		_this.windAnim16.name = '_this.windAnim16';
		_this.windAnim16.x = _this.world.centerX;
		_this.windAnim16.y = _this.world.centerY-50;
		_this.windAnim16.inputEnabled = true;
		_this.windAnim16.input.useHandCursor = true;
		_this.windAnim16.events.onInputDown.add(function(target)
		{
			_this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
			if(_this.selectedColor!=null)
			{

				if(target.frame==0)
				{
				   switch(_this.selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(_this.checkButton.visible == false)
					_this.checkButton.visible = true;

			}

		}, _this);

		*/

        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_centerCircle');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX;
        centerCircle.y = _this.world.centerY;

        /*var bigCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = _this.world.centerX;
		bigCircle.y = _this.world.centerY-50;*/

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        /*_this.windmillGroup.add(_this.windAnim5);
		_this.windmillGroup.add(_this.windAnim6);
		_this.windmillGroup.add(_this.windAnim7);
		_this.windmillGroup.add(_this.windAnim8);
		_this.windmillGroup.add(_this.windAnim9);
		_this.windmillGroup.add(_this.windAnim10);
		_this.windmillGroup.add(_this.windAnim11);
		_this.windmillGroup.add(_this.windAnim12);
		_this.windmillGroup.add(_this.windAnim13);
		_this.windmillGroup.add(_this.windAnim14);
		_this.windmillGroup.add(_this.windAnim15);
		_this.windmillGroup.add(_this.windAnim16);*/
        _this.windmillGroup.add(centerCircle);
        //_this.windmillGroup.add(bigCircle);


        _this.windmillGroup.x = 1400;
        _this.getVoice();
        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 1500,'Linear', true, 0);
        tween.onComplete.add(function(){

            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addEightWindMill:function()
    {


        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-90,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn',null,_this,0,1,2);
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 0, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 30;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(_this.checkAns,_this);

        _this.checkButton.visible = false;

        //adding _this.windmill to the game.	

        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim1.anchor.setTo(0.5,1);
        _this.windAnim1.angle = 0;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY-50;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim2.anchor.setTo(0.5,1);
        _this.windAnim2.angle = 22.5;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX;
        _this.windAnim2.y = _this.world.centerY-50;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim3.anchor.setTo(0.5,1);
        _this.windAnim3.angle = 45;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX;
        _this.windAnim3.y = _this.world.centerY-50; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim4.anchor.setTo(0.5,1);
        _this.windAnim4.angle = 67.5;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX;
        _this.windAnim4.y = _this.world.centerY-50;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this); 

        _this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim5.anchor.setTo(0.5,1);
        _this.windAnim5.angle = 90;
        _this.windAnim5.name = '_this.windAnim5';
        _this.windAnim5.x = _this.world.centerX-0;
        _this.windAnim5.y = _this.world.centerY-50;
        _this.windAnim5.inputEnabled = true;
        _this.windAnim5.input.useHandCursor = true;
        _this.windAnim5.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim6.anchor.setTo(0.5,1);
        _this.windAnim6.angle = 112.5;
        _this.windAnim6.name = '_this.windAnim6';
        _this.windAnim6.x = _this.world.centerX-0;
        _this.windAnim6.y = _this.world.centerY-50;
        _this.windAnim6.inputEnabled = true;
        _this.windAnim6.input.useHandCursor = true;
        _this.windAnim6.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim7.anchor.setTo(0.5,1);
        _this.windAnim7.angle = 135;
        _this.windAnim7.name = '_this.windAnim7';
        _this.windAnim7.x = _this.world.centerX;
        _this.windAnim7.y = _this.world.centerY-50;
        _this.windAnim7.inputEnabled = true;
        _this.windAnim7.input.useHandCursor = true;
        _this.windAnim7.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim8.anchor.setTo(0.5,1);
        _this.windAnim8.angle = 157.5;
        _this.windAnim8.name = '_this.windAnim8';
        _this.windAnim8.x = _this.world.centerX;
        _this.windAnim8.y = _this.world.centerY-50;
        _this.windAnim8.inputEnabled = true;
        _this.windAnim8.input.useHandCursor = true;
        _this.windAnim8.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim9.anchor.setTo(0.5,1);
        _this.windAnim9.angle = 180;
        _this.windAnim9.name = '_this.windAnim9';
        _this.windAnim9.x = _this.world.centerX;
        _this.windAnim9.y = _this.world.centerY-50;
        _this.windAnim9.inputEnabled = true;
        _this.windAnim9.input.useHandCursor = true;
        _this.windAnim9.events.onInputDown.add(function(target)
                                               {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim10 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim10.anchor.setTo(0.5,1);
        _this.windAnim10.angle = 202.5;
        _this.windAnim10.name = '_this.windAnim10';
        _this.windAnim10.x = _this.world.centerX;
        _this.windAnim10.y = _this.world.centerY-50;
        _this.windAnim10.inputEnabled = true;
        _this.windAnim10.input.useHandCursor = true;
        _this.windAnim10.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim11 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim11.anchor.setTo(0.5,1);
        _this.windAnim11.angle = 225;
        _this.windAnim11.name = '_this.windAnim11';
        _this.windAnim11.x = _this.world.centerX;
        _this.windAnim11.y = _this.world.centerY-50;
        _this.windAnim11.inputEnabled = true;
        _this.windAnim11.input.useHandCursor = true;
        _this.windAnim11.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim12 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim12.anchor.setTo(0.5,1);
        _this.windAnim12.angle = 247.5;
        _this.windAnim12.name = '_this.windAnim12';
        _this.windAnim12.x = _this.world.centerX;
        _this.windAnim12.y = _this.world.centerY-50;
        _this.windAnim12.inputEnabled = true;
        _this.windAnim12.input.useHandCursor = true;
        _this.windAnim12.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim13 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim13.anchor.setTo(0.5,1);
        _this.windAnim13.angle = 270;
        _this.windAnim13.name = '_this.windAnim13';
        _this.windAnim13.x = _this.world.centerX;
        _this.windAnim13.y = _this.world.centerY-50;
        _this.windAnim13.inputEnabled = true;
        _this.windAnim13.input.useHandCursor = true;
        _this.windAnim13.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim14 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim14.anchor.setTo(0.5,1);
        _this.windAnim14.angle = 292.5;
        _this.windAnim14.name = '_this.windAnim14';
        _this.windAnim14.x = _this.world.centerX;
        _this.windAnim14.y = _this.world.centerY-50;
        _this.windAnim14.inputEnabled = true;
        _this.windAnim14.input.useHandCursor = true;
        _this.windAnim14.events.onInputDown.add(function(target)
                                                {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim15 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim15.anchor.setTo(0.5,1);
        _this.windAnim15.angle = 315;
        _this.windAnim15.name = '_this.windAnim15';
        _this.windAnim15.x = _this.world.centerX;
        _this.windAnim15.y = _this.world.centerY-50;
        _this.windAnim15.inputEnabled = true;
        _this.windAnim15.input.useHandCursor = true;
        _this.windAnim15.events.onInputDown.add(function(target)
                                                {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim16 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim16.anchor.setTo(0.5,1);
        _this.windAnim16.angle = 337.5;
        _this.windAnim16.name = '_this.windAnim16';
        _this.windAnim16.x = _this.world.centerX;
        _this.windAnim16.y = _this.world.centerY-50;
        _this.windAnim16.inputEnabled = true;
        _this.windAnim16.input.useHandCursor = true;
        _this.windAnim16.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);



        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX;
        centerCircle.y = _this.world.centerY-50;

        var bigCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = _this.world.centerX;
        bigCircle.y = _this.world.centerY-50;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(_this.windAnim5);
        _this.windmillGroup.add(_this.windAnim6);
        _this.windmillGroup.add(_this.windAnim7);
        _this.windmillGroup.add(_this.windAnim8);
        _this.windmillGroup.add(_this.windAnim9);
        _this.windmillGroup.add(_this.windAnim10);
        _this.windmillGroup.add(_this.windAnim11);
        _this.windmillGroup.add(_this.windAnim12);
        _this.windmillGroup.add(_this.windAnim13);
        _this.windmillGroup.add(_this.windAnim14);
        _this.windmillGroup.add(_this.windAnim15);
        _this.windmillGroup.add(_this.windAnim16);
        _this.windmillGroup.add(centerCircle);
        _this.windmillGroup.add(bigCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    addNinthWindMill:function()
    {


        _this.count++;
        var stick = _this.add.sprite(_this.world.centerX,_this.world.centerY-90,'Level12A_stick');
        stick.scale.setTo(1,1.2);

        _this.selectedColor = null;

        _this.checkButton = _this.add.button(_this.world.centerX,_this.world.centerY+120,'Level12A_scene2Btn',null,_this,0,1,2);
        _this.checkButton.scale.setTo(0.8);
        _this.checkButton.anchor.setTo(0.5);

        var checktext = _this.add.text(0, 5, selctedLang.check);
        checktext.anchor.set(0.5);
        checktext.align = 'center';

        checktext.font = 'Comic Sans MS';
        checktext.fontSize = 40;
        //text.fontWeight = 'bold';
        checktext.fill = '#FFFFFF';

        checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
        _this.checkButton.addChild(checktext);
        _this.checkButton.inputEnabled = true;
        _this.checkButton.input.useHandCursor = true;

        _this.checkButton.events.onInputDown.add(_this.checkAns,_this);

        _this.checkButton.visible = false;

        //adding _this.windmill to the game.	

        _this.windAnim1 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim1.anchor.setTo(0.5,1);
        _this.windAnim1.angle = 0;
        _this.windAnim1.name = '_this.windAnim1';
        _this.windAnim1.x = _this.world.centerX;
        _this.windAnim1.y = _this.world.centerY-50;
        _this.windAnim1.inputEnabled = true;
        _this.windAnim1.input.useHandCursor = true;
        _this.windAnim1.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim2.anchor.setTo(0.5,1);
        _this.windAnim2.angle = 22.5;
        _this.windAnim2.name = '_this.windAnim2';
        _this.windAnim2.x = _this.world.centerX;
        _this.windAnim2.y = _this.world.centerY-50;
        _this.windAnim2.inputEnabled = true;
        _this.windAnim2.input.useHandCursor = true;
        _this.windAnim2.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim3 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim3.anchor.setTo(0.5,1);
        _this.windAnim3.angle = 45;
        _this.windAnim3.name = '_this.windAnim3';
        _this.windAnim3.x = _this.world.centerX;
        _this.windAnim3.y = _this.world.centerY-50; 
        _this.windAnim3.inputEnabled = true;
        _this.windAnim3.input.useHandCursor = true;
        _this.windAnim3.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim4 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim4.anchor.setTo(0.5,1);
        _this.windAnim4.angle = 67.5;
        _this.windAnim4.name = '_this.windAnim4';
        _this.windAnim4.x = _this.world.centerX;
        _this.windAnim4.y = _this.world.centerY-50;
        _this.windAnim4.inputEnabled = true;
        _this.windAnim4.input.useHandCursor = true;
        _this.windAnim4.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this); 

        _this.windAnim5 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim5.anchor.setTo(0.5,1);
        _this.windAnim5.angle = 90;
        _this.windAnim5.name = '_this.windAnim5';
        _this.windAnim5.x = _this.world.centerX-0;
        _this.windAnim5.y = _this.world.centerY-50;
        _this.windAnim5.inputEnabled = true;
        _this.windAnim5.input.useHandCursor = true;
        _this.windAnim5.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim6 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim6.anchor.setTo(0.5,1);
        _this.windAnim6.angle = 112.5;
        _this.windAnim6.name = '_this.windAnim6';
        _this.windAnim6.x = _this.world.centerX-0;
        _this.windAnim6.y = _this.world.centerY-50;
        _this.windAnim6.inputEnabled = true;
        _this.windAnim6.input.useHandCursor = true;
        _this.windAnim6.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim7 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim7.anchor.setTo(0.5,1);
        _this.windAnim7.angle = 135;
        _this.windAnim7.name = '_this.windAnim7';
        _this.windAnim7.x = _this.world.centerX;
        _this.windAnim7.y = _this.world.centerY-50;
        _this.windAnim7.inputEnabled = true;
        _this.windAnim7.input.useHandCursor = true;
        _this.windAnim7.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);


        _this.windAnim8 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim8.anchor.setTo(0.5,1);
        _this.windAnim8.angle = 157.5;
        _this.windAnim8.name = '_this.windAnim8';
        _this.windAnim8.x = _this.world.centerX;
        _this.windAnim8.y = _this.world.centerY-50;
        _this.windAnim8.inputEnabled = true;
        _this.windAnim8.input.useHandCursor = true;
        _this.windAnim8.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim9 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim9.anchor.setTo(0.5,1);
        _this.windAnim9.angle = 180;
        _this.windAnim9.name = '_this.windAnim9';
        _this.windAnim9.x = _this.world.centerX;
        _this.windAnim9.y = _this.world.centerY-50;
        _this.windAnim9.inputEnabled = true;
        _this.windAnim9.input.useHandCursor = true;
        _this.windAnim9.events.onInputDown.add(function(target)
                                               {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim10 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim10.anchor.setTo(0.5,1);
        _this.windAnim10.angle = 202.5;
        _this.windAnim10.name = '_this.windAnim10';
        _this.windAnim10.x = _this.world.centerX;
        _this.windAnim10.y = _this.world.centerY-50;
        _this.windAnim10.inputEnabled = true;
        _this.windAnim10.input.useHandCursor = true;
        _this.windAnim10.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim11 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim11.anchor.setTo(0.5,1);
        _this.windAnim11.angle = 225;
        _this.windAnim11.name = '_this.windAnim11';
        _this.windAnim11.x = _this.world.centerX;
        _this.windAnim11.y = _this.world.centerY-50;
        _this.windAnim11.inputEnabled = true;
        _this.windAnim11.input.useHandCursor = true;
        _this.windAnim11.events.onInputDown.add(function(target)
                                                {
           commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim12 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim12.anchor.setTo(0.5,1);
        _this.windAnim12.angle = 247.5;
        _this.windAnim12.name = '_this.windAnim12';
        _this.windAnim12.x = _this.world.centerX;
        _this.windAnim12.y = _this.world.centerY-50;
        _this.windAnim12.inputEnabled = true;
        _this.windAnim12.input.useHandCursor = true;
        _this.windAnim12.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim13 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim13.anchor.setTo(0.5,1);
        _this.windAnim13.angle = 270;
        _this.windAnim13.name = '_this.windAnim13';
        _this.windAnim13.x = _this.world.centerX;
        _this.windAnim13.y = _this.world.centerY-50;
        _this.windAnim13.inputEnabled = true;
        _this.windAnim13.input.useHandCursor = true;
        _this.windAnim13.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim14 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim14.anchor.setTo(0.5,1);
        _this.windAnim14.angle = 292.5;
        _this.windAnim14.name = '_this.windAnim14';
        _this.windAnim14.x = _this.world.centerX;
        _this.windAnim14.y = _this.world.centerY-50;
        _this.windAnim14.inputEnabled = true;
        _this.windAnim14.input.useHandCursor = true;
        _this.windAnim14.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim15 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim15.anchor.setTo(0.5,1);
        _this.windAnim15.angle = 315;
        _this.windAnim15.name = '_this.windAnim15';
        _this.windAnim15.x = _this.world.centerX;
        _this.windAnim15.y = _this.world.centerY-50;
        _this.windAnim15.inputEnabled = true;
        _this.windAnim15.input.useHandCursor = true;
        _this.windAnim15.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);

        _this.windAnim16 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
        _this.windAnim16.anchor.setTo(0.5,1);
        _this.windAnim16.angle = 337.5;
        _this.windAnim16.name = '_this.windAnim16';
        _this.windAnim16.x = _this.world.centerX;
        _this.windAnim16.y = _this.world.centerY-50;
        _this.windAnim16.inputEnabled = true;
        _this.windAnim16.input.useHandCursor = true;
        _this.windAnim16.events.onInputDown.add(function(target)
                                                {
            commonNavBar.playClickSound();
            if(_this.selectedColor!=null)
            {

                if(target.frame==0)
                {
                    switch(_this.selectedColor)
                    {
                        case "red": target.frameName = 'Symbol 1 instance 10001';break;
                        case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
                        case "green": target.frameName = 'Symbol 1 instance 10003';break;
                    }
                }
                else
                {
                    target.frame = 0;	
                }
                if(_this.checkButton.visible == false)
                    _this.checkButton.visible = true;

            }

        }, _this);



        var centerCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = _this.world.centerX;
        centerCircle.y = _this.world.centerY-50;

        var bigCircle = _this.add.sprite(_this.world.centerX,_this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = _this.world.centerX;
        bigCircle.y = _this.world.centerY-50;

        _this.windmillGroup= _this.add.group();
        _this.windmillGroup.add(stick);
        _this.windmillGroup.add(_this.windAnim1);
        _this.windmillGroup.add(_this.windAnim2);
        _this.windmillGroup.add(_this.windAnim3);
        _this.windmillGroup.add(_this.windAnim4);
        _this.windmillGroup.add(_this.windAnim5);
        _this.windmillGroup.add(_this.windAnim6);
        _this.windmillGroup.add(_this.windAnim7);
        _this.windmillGroup.add(_this.windAnim8);
        _this.windmillGroup.add(_this.windAnim9);
        _this.windmillGroup.add(_this.windAnim10);
        _this.windmillGroup.add(_this.windAnim11);
        _this.windmillGroup.add(_this.windAnim12);
        _this.windmillGroup.add(_this.windAnim13);
        _this.windmillGroup.add(_this.windAnim14);
        _this.windmillGroup.add(_this.windAnim15);
        _this.windmillGroup.add(_this.windAnim16);
        _this.windmillGroup.add(centerCircle);
        _this.windmillGroup.add(bigCircle);


        _this.windmillGroup.x = 960;

        var tween = _this.add.tween(_this.windmillGroup);
        tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            _this.getVoice();
            //_this.addQuestion(_this.count);
            _this.addEventListeners();
        }, _this);  


    },

    /* getVoice:function(){
        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 4:
            case 7:if(_this.window.languageSelected=="English")
                        Eng_12C1.play();
                    else if(_this.window.languageSelected=="Hindi")
                        Hin_12C1.play();
                    else
                        Kan_12C1.play();
                    break;
            case 2:
            case 5:
            case 8:if(_this.window.languageSelected=="English")
                        Eng_12C2.play();
                    else if(_this.window.languageSelected=="Hindi")
                        Hin_12C2.play();
                    else
                        Kan_12C2.play();
                    break;
            case 3:
            case 6:
            case 9:if(_this.window.languageSelected=="English")
                        Eng_12C3.play();
                    else if(_this.window.languageSelected=="Hindi")
                        Hin_12C3.play();
                    else
                        Kan_12C3.play();
                    break;

        }
    },
*/
    getVoice:function()
    {   
        _this.stopVoice();  
        commonNavBar.stopVoice();

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        console.log(_this.questionArray[_this.count-1]);

        switch(_this.questionArray[_this.count-1])
        {
            case 1:
            case 4:
            case 7:if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2C1.mp3");
               _this.soundurl =  window.baseUrl+"questionSounds/1.4/English/1.2C1.mp3";
            }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Hindi/1.2C1.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Kannada/1.2C1.mp3";
                }
                else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2C1.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/1.4/1.2C1.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2C1.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Odiya/1.2C1.mp3";
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
            case 2:
            case 5:
            case 8:if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2C2.mp3");
                _this.soundurl =  window.baseUrl+"questionSounds/1.4/English/1.2C2.mp3";
            }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", "sounds/1.2C2.mp3");
                    _this.soundurl =  "sounds/1.2C2.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2C2.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Kannada/1.2C2.mp3";
                }
                else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2C2.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/1.4/1.2C2.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2C2.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Odiya/1.2C2.mp3";
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
            case 3:
            case 6:
            case 9:if(window.languageSelected == "English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/English/1.2C3.mp3");
                _this.soundurl =  window.baseUrl+"questionSounds/1.4/English/1.2C3.mp3";
            }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Hindi/1.2C3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Hindi/1.2C3.mp3";
                }
                else if(window.languageSelected == "Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Kannada/1.2C3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Kannada/1.2C3.mp3";
                }
                else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.4/1.2C3.mp3");
                        _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/1.4/1.2C3.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.4/Odiya/1.2C3.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/1.4/Odiya/1.2C3.mp3";
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

        }

        commonNavBar.addNavBar(this,_this.soundurl,"numbersense5");
        
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

        window.score = this.score;

         window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;


            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"fraction_NSFG_4_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"fraction_NSFG_4_1state", "fullycomplete");
                //localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            } 
    }
};
