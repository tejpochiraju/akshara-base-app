var commonNavBar_sg8_1_2 = {

    soundVar:null,
    questionArray:null,
    questionCount:null,
    soundUrl:null,
    hint1:true,
    hint2:true,
    hint3:true,
    hintflag:0,
    hintparams:null,
    somethingV:null,
    video:null,
    minutes:0,
    seconds:0,
    counterForTimer:0,
    opt1:0,
    opt2:0,
    opt3:0,
    _this:null,
    addNavBar:function(game,qsoundurl)
    {
        console.log("qsoundurl=="+qsoundurl);

        this._this = game;
        
        if(this.navBar == null)
        {
            this.navBar = game.add.sprite(0,0,'Level42C_Topbar');
            /* this.navBar.alpha = 0.5; */
        }
        
        if(this.backbtn == null)
            this.backbtn = game.add.sprite(-3,3,'newCommonBackBtnForAll');
//        this.backbtn.scale.setTo(0.9);
        this.backbtn.inputEnabled = true;
        this.backbtn.events.onInputDown.add(this.backClicked,this);

//        this.mcIcon = game.add.sprite(70,8,'mcIcon2');

        if(this.speakerbtn == null){ 
            this.speakerbtn = game.add.sprite(610,5,'grade11_speaker');
            this.speakerbtn.inputEnabled = true;
            this.speakerbtn.events.onInputDown.add(function(){
                _this.stopVoice();
                this.speakerClicked(qsoundurl);
            },this);
        }

    },

    backClicked:function()
    {
        this.playClickSound();
        console.log('back');
        this.stopVoice();
        this._this.state.start('grade1levelSelectionScreen',true,false);
    },

    speakerClicked:function(qsoundurl)
    {
       // this.playClickSound();
        this.getVoice(qsoundurl);
    },

    playClickSound:function()
    {
        this.clickSound = new Audio('sounds/ClickSound.mp3');
        this.clickSound.play();
    },

    playCelebrationSound:function(){
        _this.cmusic = new Audio('sounds/celebration.mp3');
        _this.cmusic.play();
    }, 

    snapSound:function(){
        _this.snapmusic = new Audio('sounds/snapSound.mp3');
        _this.snapmusic.play();
    }, 

    playWrongCelebrationSound:function(){
        _this.wmusic = new Audio('sounds/WrongCelebrationSound.mp3');
        _this.wmusic.play();
    },
    
    playRollingSound:function(){
        _this.roll = new Audio('sounds/rollingsound.mp3');
        _this.roll.play();
    },
    
    playSlidingSound:function(){
        _this.slide = new Audio('sounds/slidingsound.mp3');
        _this.slide.play();
    },

    playDrawingSound:function(){
        _this.draw = new Audio('sounds/drawing sound.mp3');
        _this.draw.play();
    },

    stopDrawingSound:function(){
        _this.draw.pause();
    },


    addTimerToTheGame:function(game,min,sec,counter)
    {
        this.timerBg = game.add.sprite(game.world.centerX-150,6,'Level42C_timer');

        this.minutes = min;
        this.seconds = sec;
        this.counterForTimer = counter;

        this.timeText = game.add.text(game.world.centerX-124,22, this.minutes + ':'+  this.seconds);
        this.timeText.anchor.setTo(0.5);
        this.timeText.align = 'center';
        this.timeText.font = 'myfont';
//        this.timeText.fontWeight = 'normal';
        this.timeText.fontSize = 20;
        this.timeText.fill = '#ADFF2F';

    },

    startTimer:function(game)
    {
        this.timer = game.time.create(false);
        this.timer.loop(1000, function()
                        {
            this.updateTimer();
        }, this);
        this.timer.start();
    },

    stopTimer:function()
    {
        if(this.timer)
        {
            this.timer.stop();
            this.timer = null;
        }
        var timerObj = {
            min:this.minutes,
            sec:this.seconds,
            counter:this.counterForTimer
        };
        return timerObj;
    },

    updateTimer:function() 
    {
        this.counterForTimer++;

        if(this.counterForTimer>59)
        {
            this.counterForTimer = 0;

            if(this.minutes<10){
                this.minutes =  this.minutes+1;
                this.seconds = 00;
            }
            else
            {
                this.minutes =  this.minutes+1;
            }
        }
        else
        {
            if (this.counterForTimer < 10)        
                this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
        this.timeText.setText(this.minutes+':' + this.seconds);

    },

    getVoice:function(url,callback)
    {
        this.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        this.playQuestionSound = new Audio(url);
        this.playQuestionSound.play();
        this.playQuestionSound.addEventListener('ended', callback);

    },

    stopVoice:function()
    {
        if(this.playQuestionSound)
        {
            this.playQuestionSound.pause();
        }
    },

    generateStarsForTheScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = game.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(game.world.centerX, 10, 'starAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;
                }
            }
        }			
        this.starsGroup.getChildAt(0).frame = 2;			
    },

    disableNavBar:function()
    {
        this.speakerbtn.inputEnabled = false;
        this.backbtn.inputEnabled = false;
//        this.hintIcon.inputEnabled = false;
    },

};
