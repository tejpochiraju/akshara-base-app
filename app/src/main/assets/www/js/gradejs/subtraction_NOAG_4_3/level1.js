Game.subtraction_NOAG_4_3level1=function(){};


Game.subtraction_NOAG_4_3level1.prototype={


    init:function(param,score)
	{
		_this = this;
        this.Stararr = param;
        this.score =parseInt(window.score);
        
		//telInitializer.gameIdInit("unity10_1_1",gradeSelected);
        
        

        telInitializer2.gameIdInit2("NOAG4.3");
        
	},

  preload:function(game){
        if(!window.grade1NOA1){

            window.grade1NOA1 = true;

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

        this.load.image('Level721_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level321_bg1',window.baseUrl+'assets/gradeAssets/3.2.1/BG.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        
        this.load.image('Level721_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level721_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level721_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level721_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        this.load.image('Level723_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level723_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level723_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level723_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
       
        this.load.image('Level722_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level723_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
    
        _this.load.atlas('Level722_CommonBackBtn',window.baseUrl+'assets/commonAssets/newBackBtn.png',window.baseUrl+'assets/commonAssets/newBackBtn.json');
    
        this.load.image('Level722_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level722_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level722_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level722_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        


        this.load.atlas('Level721_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level721_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level721_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level721_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level721_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level721_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level721_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level721_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level721_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level721_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level721_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level721_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level721_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level721_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level721_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
      
        this.load.image('Level721_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level721_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level721_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level721_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level721_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level721_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level721_bluecoin',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level721_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level721_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');



        
        this.load.atlas('Level722_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level722_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level722_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level722_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level722_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level722_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level722_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level722_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level722_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level722_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level722_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level722_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level722_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level722_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level722_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level722_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level722_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level722_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level722_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level722_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level722_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level722_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level722_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level722_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level722_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level722_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level722_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level722_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');
        


        
        this.load.atlas('Level723_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level723_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level723_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level723_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level723_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level723_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level723_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level723_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level723_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level723_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level723_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level723_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level723_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level723_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level723_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level723_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level723_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level723_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level723_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level723_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level723_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level723_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level723_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level723_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level723_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level723_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');

        this.load.atlas('Level723_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');


        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
      //this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
      //this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

      this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
      this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
      this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');


    }

    },

    
    create :function(game){
      _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

     this.video = this.add.video('demo');
        this.video.play(false);
        this.video.changeSource(window.baseUrl+"assets/demoVideos/10_1_3.mp4");
        _this.something =  this.video.addToWorld();
    if(window.languageSelected == "Gujarati")
      {
        _this.time.events.add(2000, function(){
          _this.playDemoVideos('10_1_3a');
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
              _this.create1();
               this.video.onComplete.removeAll();
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
        _this.time.events.add(2000, function(){
          _this.playDemoVideos('10_1_3a');
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
              _this.create1();
               this.video.onComplete.removeAll();
            },_this);
          _this.time.events.add(5000, function(){
            _this.playDemoVideos('10_1_3b');
          },_this);
          _this.time.events.add(27000, function(){
            _this.playDemoVideos('10_1_3c');
          },_this);
        },_this);
      }
       
        this.video.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something.destroy();
              // this.video.destroy();
                _this.create1();
             this.video.onComplete.removeAll();

        },this);


    },
	create1:function(game){
    _this.eraserclicked=0;
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
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
        _this.checkNumber1 = 0
        _this.checkNumber2 = 0
        _this.checkNumber3 = 0
        
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=0;
		 
             _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
             if(window.languageSelected == "English")
                {
                   _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.3.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.3.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.3.mp3";
                }
				else if(window.languageSelected == "Gujarati")
				{
					_this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2.1/10.1.3.mp3";
				}
                else
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.3.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
             commonNavBar.addNavBar(this,_this.soundurl,"numberoperation2");
             commonNavBar.addTimerToTheGame(this,0,0,0);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
             this.hintparams=['NOSG43','level1',false,false,true,1];
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
        _this.shakeGroup.add(_this.numBox3);
        
        _this.minus = _this.add.sprite(650,230,'Level1011_Minus');
        
        _this.askNumber1 = _this.add.sprite(725,165,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
        
        _this.askNumber2 = _this.add.sprite(780,165,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
        
        _this.askNumber5 = _this.add.sprite(725,235,'Level321_numberSmall');
         _this.askNumber5.frame = 1;
        
        _this.askNumber4 = _this.add.sprite(780,235,'Level321_numberSmall');
        _this.askNumber4.frame = 1;
        
        _this.askNumber3 = _this.add.sprite(670,165,'Level321_numberSmall');
        _this.askNumber3.frame = 1;
        
        _this.askNumber6 = _this.add.sprite(670,235,'Level321_numberSmall');
        _this.askNumber6.frame = 1;

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
       /* if(window.languageSelected == "English")
            {
              commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.3.mp3");
            }
            else if(window.languageSelected == "Hindi")
            {
              commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.3.mp3");
            }
            else
            {
                commonNavBar.getVoice( window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.3.mp3");
                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }*/
    },

    updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
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

    getQuestion:function(target)
    {  //console.log("get Question "+_this.no1);

      commonNavBar.enableHintIcon();
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;

    	switch(_this.qArrays[_this.no1])    
    	{
    		case 1: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 246;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.askNumber3.frame =10;
                    _this.askNumber1.frame = 10;              
                     _this.askNumber2.frame =8;
                    _this.askNumber6.frame =8;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 7;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 232;
                    _this.toDisplayNoPad = 18;
    				break;
    		case 2: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 246;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.askNumber3.frame =10;
                    _this.askNumber1.frame = 9;              
                     _this.askNumber2.frame =8;
                    _this.askNumber6.frame =6;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 5;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 424;
                    _this.toDisplayNoPad = 14;
    				break;
    		case 3: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 303;
                    _this.yaxisGCopy = _this.yaxisG = 246;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.askNumber3.frame =10;
                    _this.askNumber1.frame = 7;              
                     _this.askNumber2.frame =9;
                    _this.askNumber6.frame =6;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =7;
                    _this.checkNumber3 = 5;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 432;
                    _this.toDisplayNoPad = 14;
    				break;
    		case 4: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 321;
                    _this.yaxisGCopy = _this.yaxisG = 246;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.askNumber3.frame =10;
                    _this.askNumber1.frame = 6;              
                     _this.askNumber2.frame =7;
                    _this.askNumber6.frame =5;
                    _this.askNumber5.frame =3;
                    _this.askNumber4.frame =5;
                    _this.checkNumber3 = 4;
                    _this.checkNumber2 = 2;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 532;
                    _this.toDisplayNoPad = 10;
    				break;
    		case 5: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 361;
                    _this.yaxisGCopy = _this.yaxisG = 246;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin100 = _this.Coin100.frame = 7;
                    _this.askNumber3.frame =10;
                    _this.askNumber1.frame = 4;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =7;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =8;
                    _this.checkNumber3 = 6;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 7;
                    _this.rightAns = 322;
                    _this.toDisplayNoPad = 14;
    				break;
            case 6: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 266;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.askNumber3.frame =9;
                    _this.askNumber1.frame = 10;              
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =7;
                    _this.askNumber5.frame =8;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 6;
                    _this.checkNumber2 = 7;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 222;
                    _this.toDisplayNoPad = 18;
    				break;
            case 7: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 266;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.askNumber3.frame =9;
                    _this.askNumber1.frame = 9;              
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =6;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =2;
                    _this.checkNumber3 = 5;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 324;
                    _this.toDisplayNoPad = 12;
    				break;
            case 8: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 283;
                    _this.yaxisGCopy = _this.yaxisG = 266;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.askNumber3.frame =9;
                    _this.askNumber1.frame = 8;              
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =5;
                    _this.askNumber5.frame =3;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 4;
                    _this.checkNumber2 = 2;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 452;
                    _this.toDisplayNoPad = 11;
    				break;
          case 9: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 303;
                    _this.yaxisGCopy = _this.yaxisG = 266;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.askNumber3.frame =9;
                    _this.askNumber1.frame = 7;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =7;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 532;
                    _this.toDisplayNoPad = 12;
    				break;
        case 10: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 340;
                    _this.yaxisGCopy = _this.yaxisG = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin100 = _this.Coin100.frame = 6;
                    _this.askNumber3.frame =9;
                    _this.askNumber1.frame = 5;              
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 632;
                    _this.toDisplayNoPad = 6;
    				break;
        case 11: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.askNumber3.frame =8;
                    _this.askNumber1.frame = 10;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =6;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =8;
                    _this.checkNumber3 = 5;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 7;
                    _this.rightAns = 232;
                    _this.toDisplayNoPad = 18;
    				break; 
        case 12: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.askNumber3.frame =8;
                    _this.askNumber1.frame = 9;              
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =6;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 5;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 253;
                    _this.toDisplayNoPad = 11;
    				break; 
        case 13: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 305;
                    _this.yaxisGCopy = _this.yaxisG = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.askNumber3.frame =8;
                    _this.askNumber1.frame =7;              
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =5;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =2;
                    _this.checkNumber3 = 4;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 334;
                    _this.toDisplayNoPad = 8;
    				break;
        case 14: _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 345;
                    _this.yaxisBCopy = _this.yaxisB = 361;
                    _this.yaxisGCopy = _this.yaxisG = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 2;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.askNumber3.frame =8;
                    _this.askNumber1.frame =4;              
                    _this.askNumber2.frame =5;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =3;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 422;
                    _this.toDisplayNoPad = 6;
    				break;
        case 15:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.yaxisBCopy = _this.yaxisB = 341;
                    _this.yaxisGCopy = _this.yaxisG = 284;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 3;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin100 = _this.Coin100.frame = 5;
                    _this.askNumber3.frame =8;
                    _this.askNumber1.frame =5;              
                    _this.askNumber2.frame =6;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =3;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 2;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 622;
                    _this.toDisplayNoPad = 6;
    				break;
        case 16:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.askNumber3.frame =7;
                    _this.askNumber1.frame =10;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =5;
                    _this.askNumber5.frame =8;
                    _this.askNumber4.frame =7;
                    _this.checkNumber3 = 4;
                    _this.checkNumber2 = 7;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 222;
                    _this.toDisplayNoPad = 17;
    				break; 
        case 17:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 285;
                    _this.yaxisGCopy = _this.yaxisG = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.askNumber3.frame =7;
                    _this.askNumber1.frame =8;              
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =6;
                    _this.askNumber4.frame =3;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 5;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 324;
                    _this.toDisplayNoPad = 10;
    				break;
        case 18:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 345;
                    _this.yaxisBCopy = _this.yaxisB = 322;
                    _this.yaxisGCopy = _this.yaxisG = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 2;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.askNumber3.frame =7;
                    _this.askNumber1.frame =6;              
                    _this.askNumber2.frame =5;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =2;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 443;
                    _this.toDisplayNoPad = 4;
    				break;
        case 19:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 362;
                    _this.yaxisGCopy = _this.yaxisG = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 1;
                    _this.wCoin100 = _this.Coin100.frame = 4;
                    _this.askNumber3.frame =7;
                    _this.askNumber1.frame =4;              
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 324;
                    _this.toDisplayNoPad = 7;
    				break; 
        case 20:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 325;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.askNumber3.frame =6;
                    _this.askNumber1.frame =10;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =8;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 7;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 224;
                    _this.toDisplayNoPad = 15;
    				break;
            
        case 21:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 322;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.askNumber3.frame =6;
                    _this.askNumber1.frame =9;              
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =4;
                    _this.askNumber5.frame =6;
                    _this.askNumber4.frame =2;
                    _this.checkNumber3 = 3;
                    _this.checkNumber2 = 5;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 235;
                    _this.toDisplayNoPad = 9;
    				break; 
        case 22:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 303;
                    _this.yaxisGCopy = _this.yaxisG = 322;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 4;
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.askNumber3.frame =6;
                    _this.askNumber1.frame =7;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 334;
                    _this.toDisplayNoPad = 10;
    				break;
        case 23:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 343;
                    _this.yaxisGCopy = _this.yaxisG = 322;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 2;
                    _this.wCoin100 = _this.Coin100.frame = 3;
                    _this.askNumber3.frame =6;
                    _this.askNumber1.frame =5;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =2;
                    _this.askNumber4.frame =5;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 1;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 334;
                    _this.toDisplayNoPad = 7;
    				break;
        case 24:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 342;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.askNumber3.frame =5;
                    _this.askNumber1.frame =10;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =3;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 236;
                    _this.toDisplayNoPad = 10;
    				break; 
        case 25:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.yaxisBCopy = _this.yaxisB = 285;
                    _this.yaxisGCopy = _this.yaxisG = 342;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 4;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.askNumber3.frame =5;
                    _this.askNumber1.frame =8;              
                    _this.askNumber2.frame =7;
                    _this.askNumber6.frame =3;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 2;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 243;
                    _this.toDisplayNoPad = 8;
    				break;
        case 26:    _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 325;
                    _this.yaxisGCopy = _this.yaxisG = 342;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.askNumber3.frame =5;
                    _this.askNumber1.frame =6;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =6;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 324;
                    _this.toDisplayNoPad = 9;
    				break;
         case 27:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 342;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 2;
                    _this.askNumber3.frame =5;
                    _this.askNumber1.frame =9;              
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =5;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 4;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 344;
                    _this.toDisplayNoPad = 8;
    				break; 
        case 28:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 245;
                    _this.yaxisGCopy = _this.yaxisG = 362;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 7;
                    _this.wCoin100 = _this.Coin100.frame = 1;
                    _this.askNumber3.frame =4;
                    _this.askNumber1.frame =10;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =8;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 7;
                    _this.rightAns = 232;
                    _this.toDisplayNoPad = 14;
    				break;
        case 29:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 345;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 362;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 2;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 1;
                    _this.askNumber3.frame =4;
                    _this.askNumber1.frame =9;              
                    _this.askNumber2.frame =5;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =2;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 253;
                    _this.toDisplayNoPad = 5;
    				break;
        case 30:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 285;
                    _this.yaxisGCopy = _this.yaxisG = 362;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin100 = _this.Coin100.frame = 1;
                    _this.askNumber3.frame =4;
                    _this.askNumber1.frame =8;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =4;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 3;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 245;
                    _this.toDisplayNoPad = 7;
    				break;
        case 31:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.yaxisBCopy = _this.yaxisB = 265;
                    _this.yaxisGCopy = _this.yaxisG = 382;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 7;
                    _this.wCoin10 = _this.Coin10.frame = 6;
                    _this.wCoin100 = _this.Coin100.frame = 0;
                    _this.askNumber3.frame =3;
                    _this.askNumber1.frame =9;              
                    _this.askNumber2.frame =10;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =7;
                    _this.askNumber4.frame =7;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 6;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 123;
                    _this.toDisplayNoPad = 13;
    				break; 
        case 32:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.yaxisBCopy = _this.yaxisB = 325;
                    _this.yaxisGCopy = _this.yaxisG = 382;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 6;
                    _this.wCoin10 = _this.Coin10.frame = 3;
                    _this.wCoin100 = _this.Coin100.frame = 0;
                    _this.askNumber3.frame =3;
                    _this.askNumber1.frame =6;              
                    _this.askNumber2.frame =9;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =3;
                    _this.askNumber4.frame =4;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 2;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 135;
                    _this.toDisplayNoPad = 6;
    				break;
        case 33:   _this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.yaxisBCopy = _this.yaxisB = 285;
                    _this.yaxisGCopy = _this.yaxisG = 382;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin1 = _this.Coin1.frame = 5;
                    _this.wCoin10 = _this.Coin10.frame = 5;
                    _this.wCoin100 = _this.Coin100.frame = 0;
                    _this.askNumber3.frame =3;
                    _this.askNumber1.frame =8;              
                    _this.askNumber2.frame =8;
                    _this.askNumber6.frame =2;
                    _this.askNumber5.frame =6;
                    _this.askNumber4.frame =3;
                    _this.checkNumber3 = 1;
                    _this.checkNumber2 = 5;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 125;
                    _this.toDisplayNoPad = 8;
    				break;
    	}
      telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    

  inputDownFunctionForLeverAndBox :function(){
      
        _this.xaxisYCopy = _this.xaxisY = 507.5;//245 for 9 ,
        _this.xaxisBCopy = _this.xaxisB = 348;
        _this.xaxisGCopy = _this.xaxisG = 183;
        
       _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
       _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
     
        _this.Coin1 = _this.add.sprite(500,220,'Level321_Coin1');
            _this.Coin10 = _this.add.sprite(340,220,'Level321_Coin10');
            _this.Coin100 = _this.add.sprite(168,220,'Level321_Coin100');
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
   
        _this.greenCoin = _this.add.sprite(183,_this.yaxisG,'Level1011_GreenCoin');
         _this.greenCoin.name = "GreenCoin";
       _this.greenCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
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
                         /*if(_this.Coin10.frame ==0 && _this.qArrays[_this.no1]>26)
                                 _this.Coin10.visible  = false;*/
                        if(_this.BlueAnimInc ==_this.checkNumber2){
                        
                             _this.greenCoin.inputEnabled = true;
                             _this.greenCoin.input.useHandCursor = true;
                             
                             _this.coinBoxBlue.animations.stop(null, true);
                             _this.coinBoxBlue.frame = 2;
                             _this.coinBoxGreen.animations.add('Level1011_coinDecrease',[0,3]);
                             _this.coinBoxGreen.animations.play('Level1011_coinDecrease',5,true);
                         }
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                }
             }
         else if(_this.checkOverlap(target,_this.coinBoxGreen) && (target.name == "GreenCoin")){
                     //console.log("Hit");
                    if(_this.GreenAnimInc<_this.checkNumber3){
                         commonNavBar.playCoinFallSound();
                         _this.yaxisG +=18.5;
                        if(_this.Coin100.frame ==0 && _this.qArrays[_this.no1]>30)
                                 _this.Coin100.visible  = false;
                         _this.greenCoin.y =_this.yaxisG;
                         _this.greenCoin.x =_this.xaxisG;
                         _this.Coin100.frame--;
                         _this.LeverGreenNumber.frame++;
                         _this.GreenAnimInc++;
                         
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
                
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc +_this.GreenAnimInc))
        {
            if( _this.toCheckNumberPad)
            {
                //console.log("im here hre hre");
                _this.addNumberPad();
                _this.numBox2.frame = 1;
                _this.numBox2Pressed = true;
                _this.toCheckNumberPad = false;
                _this.displayNopad = true;
                
                _this.coinBoxGreen.animations.stop(null, true);
                _this.coinBoxGreen.frame = 3;
				
				   _this.numBox1.inputEnabled = true;
                   _this.numBox1.input.useHandCursor = true;
                   _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox2.inputEnabled = true;
                   _this.numBox2.input.useHandCursor = true;
                   _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox3.inputEnabled = true;
                   _this.numBox3.input.useHandCursor = true;
                   _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
            }
        }
                
         },_this);
 },
 
  numberBoxClicked:function(target){
        
         commonNavBar.playClickSound();
        
        if(target.name == "numBox1")
        {
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.numBox2Pressed = false;
            _this.numBox1.frame = 1;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
        } 
        if(target.name == "numBox2")
        {
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox3Pressed = false;
            _this.numBox2.frame = 1;
            _this.numBox1.frame = 0;
            _this.numBox3.frame = 0;
        }
        if(target.name == "numBox3")
        {
           _this.numBox3Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox3.frame = 1;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
        }
        
        if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            _this.addNumberPad();
        }
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
				        _this.eraserclicked=1;
                 if(_this.numBox1Pressed){
                    // _this.numBox1Pressed =  true;
                    // _this.numBox2Pressed =  false;
                    // _this.numBox3Pressed =  false;
                    _this.numBoxNum1.visible = false;
                    // _this.numBox1.frame = 1;
                    // _this.numBox3.frame = 0;
                    // _this.numBox2.frame = 0;
                    _this.selectedAns1="";
                }
                else if(_this.numBox2Pressed){
                    // _this.numBox1Pressed =  false;
                    // _this.numBox2Pressed =  true;
                    // _this.numBox3Pressed =  false;
                    _this.numBoxNum2.visible = false;
                    // _this.numBox1.frame = 0;
                    // _this.numBox3.frame = 0;
                    // _this.numBox2.frame = 1;
                    _this.selectedAns2="";
                }
                else if(_this.numBox3Pressed)
                {
                    // _this.numBox1Pressed =  false;
                    // _this.numBox2Pressed =  false;
                    // _this.numBox3Pressed =  true;
                    _this.numBoxNum3.visible = false;
                    // _this.numBox1.frame = 0;
                    // _this.numBox3.frame = 1;
                    // _this.numBox2.frame = 0;
                    _this.selectedAns3="";
                }

                _this.selectedAns="";

                /* to use eraser to next textbox */
                // if(_this.numBox3.frame == 1){
                //     _this.numBox2.frame = 0;
                //     _this.numBox1.frame = 1;
                //     _this.numBox3.frame = 0;
                //     _this.numBox2Pressed = false;
                //     _this.numBox1Pressed = true;
                //     _this.numBox3Pressed = false;
                // }else if(_this.numBox1.frame == 1){
                //     _this.numBox2.frame = 1;
                //     _this.numBox1.frame = 0;
                //     _this.numBox3.frame = 0;
                //     _this.numBox3Pressed = false;
                //     _this.numBox1Pressed = false;
                //     _this.numBox2Pressed = true;
                // }

                /*_this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;*/
                    _this.toCheckNumberPad = false;
              _this.time.events.add(500, function(){ _this.eraser.frame = 0}, _this);
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
            _this.noofAttempts++;
            commonNavBar.disableHintIcon();
           commonNavBar.playClickSound();
             _this.rightbtn.frame = 1;
             _this.selectedAns = ""+_this.selectedAns3+_this.selectedAns1+_this.selectedAns2;
             //console.log("selected Answer "+ _this.selectedAns);
             //console.log("selected Answer "+ _this.rightAns);
            if( _this.selectedAns== _this.rightAns ||"0"+_this.selectedAns == _this.rightAns)  
                {
                  telInitializer2.gameCorrectAns();
                    //console.log("correct");

                    _this.eraserclicked=0;

                    target.events.onInputDown.removeAll();
                    this.Stararr.push(3);
                     commonNavBar.stopVoice();
                   commonNavBar.playCelebrationSound();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     //_this.count1++;
                     _this.yellowCoin.visible = false;
                     _this.blueCoin.visible = false;
                     _this.greenCoin.visible = false;
                     _this.Coin1.visible = true;
                    /*if(_this.qArrays[_this.no1]>8)
                        _this.Coin10.visible = false;
                    else*/
                        _this.Coin10.visible = true;
                        _this.Coin100.visible = true;
                    if(_this.qArrays[_this.no1]>30){
                            _this.Coin100.frame =_this.Coin100.frame+10;
                            _this.Coin10.frame =_this.Coin10.frame+11;
                            _this.Coin1.frame =_this.Coin1.frame+11;
                        }
                    else{
                            _this.Coin1.frame =_this.Coin1.frame+11;
                           _this.Coin10.frame =_this.Coin10.frame+11;
                           _this.Coin100.frame =_this.Coin100.frame+11;
                        }
                  
                    _this.numBox1.frame = 1;
                    _this.numBox2.frame = 1;
                    _this.numBox3.frame = 1;
					
					_this.numBox1.inputEnabled = false;
                    _this.numBox2.inputEnabled = false;
                    _this.numBox3.inputEnabled = false;
					
                   // _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);

                       _this.questionid = 1;
                    //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                { 
                  telInitializer2.gameWrongAns();

                  _this.eraserclicked=0;

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
         
           console.log(target.name);
        commonNavBar.playClickSound();
         
         if(_this.numBox1Pressed){
          console.log("11");
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
               _this.numBox1.frame = 0;
               _this.numBox3.frame = 1;
               _this.numBox2Pressed = false;
               _this.numBox1Pressed = false;
               _this.numBox3Pressed = true;
         }
         else if(_this.numBox2Pressed){
          console.log("22");
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
 
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
        else if(_this.numBox3Pressed)
             {
                 console.log("33");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
                 
             }
             console.log("1 "+_this.numBox1Pressed);
             console.log("2 "+_this.numBox2Pressed);
             console.log("3 "+_this.numBox3Pressed);


        // if((_this.eraserclicked == 1) && (_this.numBox1Pressed) &&(_this.numBox1.frame == 1)){
        //         console.log("HERE-- 2");
        //         _this.numBox2.frame = 0;
        //         _this.numBox1.frame = 1;
        //         _this.numBox3.frame = 0;
        //         _this.numBox2Pressed = false;
        //         _this.numBox1Pressed = true;
        //         _this.numBox3Pressed = false;
        //     }else if( (_this.eraserclicked == 1) && (_this.numBox2Pressed) &&(_this.numBox2.frame == 1)){
        //         console.log("HERE-- 1");
        //         _this.numBox2.frame = 0;
        //         _this.numBox1.frame = 0;
        //         _this.numBox3.frame = 1;
        //         _this.numBox2Pressed = false;
        //         _this.numBox1Pressed = false;
        //         _this.numBox3Pressed = true;
        //     }
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
            _this.LeverGreenNumber.frame = 0;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.askNumber1.frame = 0;
            _this.askNumber2.frame =0; 
            _this.askNumber3.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.GreenAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.Coin100.destroy();
            _this.yellowCoin.destroy();
            _this.blueCoin.destroy();
            _this.greenCoin.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.selectedAns = " ";
            
             _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            _this.getQuestion();
            
        }
        else
        {
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.Coin100.destroy();
            _this.yellowCoin.destroy();
            _this.blueCoin.destroy();
            _this.greenCoin.destroy();
            _this.numGroup.destroy();
            
           var timerStopVar = commonNavBar.stopTimer();
              commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            
              this.video1 = this.add.video('demo');
        this.video1.play(false);
        this.video1.changeSource(window.baseUrl+"assets/demoVideos/10_2_3.mp4");
        _this.something =  this.video1.addToWorld();
		if(window.languageSelected == "Gujarati")
			{
								_this.time.events.add(2000, function(){
					_this.playDemoVideos('10_2_3a');
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						  _this.skipDemos.destroy();
						  commonNavBar.stopVoice();
						  this.video1.stop(false);
							 _this.time.events.removeAll();
							_this.something.destroy();
							 //this.video1.destroy();
						 this.video1.onComplete.removeAll();
							_this.stopDemoVoice();
							  _this.state.start('subtraction_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);	
						},_this);
						_this.time.events.add(11000, function(){
							_this.playDemoVideos('10_2_3b');
						},_this);
					  _this.time.events.add(35000, function(){
							_this.playDemoVideos('10_2_3c');
						},_this);
				 },_this);

			}
			else
			{
				_this.time.events.add(2000, function(){
					_this.playDemoVideos('10_2_3a');
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						  _this.skipDemos.destroy();
						  commonNavBar.stopVoice();
						  this.video1.stop(false);
							 _this.time.events.removeAll();
							_this.something.destroy();
							 //this.video1.destroy();
						 this.video1.onComplete.removeAll();
							_this.stopDemoVoice();
							  _this.state.start('subtraction_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);	
						},_this);
					_this.time.events.add(5000, function(){
						_this.playDemoVideos('10_2_3b');
					},_this);
					_this.time.events.add(21000, function(){
						_this.playDemoVideos('10_2_3c');
					},_this);
				  _this.time.events.add(37000, function(){
						_this.playDemoVideos('10_2_3d');
					},_this);
				 },_this);
			}
        
        this.video1.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something.destroy();
               //this.video1.destroy();
             this.video1.onComplete.removeAll();
               _this.state.start('subtraction_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
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
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
      // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
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
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.3.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.3.mp3");
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