Game.addition_NOAG_4_3level1=function(){};




Game.addition_NOAG_4_3level1.prototype={


     init:function(game,param,score)
    {
        _this = this;
        this.Stararr = param;
        this.score =parseInt(window.score);
        
        _this.gameid = "7.1.3";
        //telInitializer.gameIdInit("CoinMachine7_1_1",gradeSelected);
        
      
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
    
    create:function(game){
        
         _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

         this.video = this.add.video('demo');
        this.video.play(false);
        this.video.changeSource(window.baseUrl+"assets/demoVideos/7_1_3.mp4");
        _this.something =  this.video.addToWorld();
        
        if(window.languageSelected == "Gujarati")
        {
             _this.time.events.add(2000, function(){
            _this.playDemoVideos('7_1_3a');
            _this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
            _this.skipDemos.inputEnabled = true;
            _this.skipDemos.events.onInputDown.add(function(){
                _this.skipDemos.destroy();
                  this.stopVoice();
                  this.video.stop(false);
                     _this.time.events.removeAll();
                    _this.something.destroy();
                    //this.video.destroy();
                     _this.create1();
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
            _this.time.events.add(2000, function(){
                _this.playDemoVideos('7_1_3a');
                _this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
                _this.skipDemos.inputEnabled = true;
                _this.skipDemos.events.onInputDown.add(function(){
                    _this.skipDemos.destroy();
                      this.stopVoice();
                      this.video.stop(false);
                         _this.time.events.removeAll();
                        _this.something.destroy();
                        //this.video.destroy();
                         _this.create1();
                    },_this);
                _this.time.events.add(7000, function(){
                    _this.playDemoVideos('7_1_3b');
                },_this);
                _this.time.events.add(17000, function(){
                    _this.playDemoVideos('7_1_3c');
                },_this);
            },_this);
        }
        
         this.video.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something.destroy();
               //this.video.destroy();
             _this.create1();
              this.video.onComplete.removeAll();
               
        },this);  
    },
    
	create1:function(game){
       	_this.eraserclicked=0;
	    _this.amplify = null;
        _this.Stararr = [];
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.counts=0;
        _this.BlueAnimInc = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.total=0;
        _this.total1=0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.rightAns1 = "";
        randarr = new Array();
        yellowCoinArray = new Array();
        _this.toDisplayNoPad = 0;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.displayNumber1 = 0
        _this.displayNumber2 = 0
        _this.displayNumber3 = 0
        _this.displayNumber4 = 0
        _this.animArraylength = 9;
         _this.count=0;
         _this.count1=0;
		 //_this.shake = new Phaser.Plugin.Shake(game);
		 //game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level723_bg1');
            
        if(window.languageSelected == "English")
                {
                   _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/English/Game 7.1.3.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Hindi/Game 7.1.3.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Kannada/Game 7.1.3.mp3";
                }
				else if(window.languageSelected == "Gujarati")
				{
					_this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2.1/7.1.2.mp3";
				}
                else
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/7.2.3/Odiya/7.1.3.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
             commonNavBar.addNavBar(this,_this.soundurl,"numberoperation1");
             commonNavBar.addTimerToTheGame(this,0,0,0);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
             this.hintparams=['NOAG43','level1',false,false,true,1];
              commonNavBar.addHint(this,this.hintparams);
        
        _this.coinPannel = _this.add.sprite(70,50,'Level723_coinMachinePannel1');
       // _this.Pannel = _this.add.sprite(628,105,'Level321_pannel1');
        _this.Pannel = _this.add.sprite(625,105,'Level723_pannel1');
        
        _this.LeverGreen = _this.add.sprite(140,60,'Level723_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(300,60,'Level723_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(465,60,'Level723_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
        _this.Levercoin1 = _this.add.sprite(485,160,'Level723_coin1Anim');
        _this.Levercoin1.visible = false;
        
      _this.Levercoin10 = _this.add.sprite(315,160,'Level723_coin10Anim');
        _this.Levercoin10.visible = false; 

        _this.Levercoin100 = _this.add.sprite(145,160,'Level723_coin100Anim');
        _this.Levercoin100.visible = false; 
        
        _this.Level321_OneToHundred1 = _this.add.sprite(152,63,'Level723_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(315,63,'Level723_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(478,63,'Level723_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
		
		_this.Level321_OneToHundredE1 = _this.add.sprite(665,95,'Level723_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(735,95,'Level723_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(810,95,'Level723_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
        
        
        _this.LeverBlueNumber = _this.add.sprite(152,83,'Level723_numberSmall');
         _this.LeverBlueNumber.frame = 1;
        _this.LeverGreenNumber = _this.add.sprite(315,83,'Level723_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverYellowNumber = _this.add.sprite(478,83,'Level723_numberSmall');
        _this.LeverYellowNumber.frame = 1;
        
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(650,278,'Level723_numberBox');
         _this.numBox1.name = "numBox1";
         _this.numBox1.inputEnabled = true;
         _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);
         _this.numBox2 = _this.add.sprite(720,278,'Level723_numberBox');
		 _this.numBox2.inputEnabled = true;
         _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(790,278,'Level723_numberBox');
         _this.numBox3.name = "numBox3";
		 _this.numBox3.inputEnabled = true;
         _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        
       

       _this.numBoxNum1 = _this.add.sprite(662,280,'Level723_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(1,1);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(732,280,'Level723_numberSmall');
         _this.numBox2Pressed = false;
        _this.numBoxNum2.scale.setTo(1,1);
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(803,280,'Level723_numberSmall');
         _this.numBox3Pressed = false;
        _this.numBoxNum3.scale.setTo(1,1);
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
         _this.coinDisplay();
        
        //_this.plusSign = _this.add.sprite(610,200,'Level321_plusSign');
        _this.plusSign = _this.add.sprite(610,200,'Level723_plusSign');
        
         _this.generateStarsForTheScene(9);
        //  _this.no1++;
        //_this.getVoice();
        _this.getQuestion();
    },
    coinDisplay:function(){
        _this.yellowcoin=this.add.sprite(475,210,'Level723_Coin1');
        _this.yellowcoin.visible=true;
        _this.Coin1 = _this.add.sprite(0,0,'Level723_Coin1');
        _this.Coin1.visible = false;
        _this.bluecoin=this.add.sprite(310,210,'Level723_Coin10');
        _this.bluecoin.visible=true;
        _this.Coin10 = _this.add.sprite(0,0,'Level723_Coin10');
        _this.Coin10.visible = false;
        _this.greencoin=this.add.sprite(135,210,'Level723_Coin100');
        _this.greencoin.visible=true;
        _this.Coin100 = _this.add.sprite(0,0,'Level723_Coin100');
        _this.Coin100.visible = false;
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
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin100 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
     
      _this.askNumber1 = _this.add.sprite(795,120,'Level723_numberSmall');
         //_this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(1.3,1.3);
        
        
        _this.askNumber2 = _this.add.sprite(795,190,'Level723_numberSmall');
        //_this.askNumber2.frame = 1;
         _this.askNumber2.scale.setTo(1.3,1.3);
        
        _this.askNumber3 = _this.add.sprite(725,120,'Level723_numberSmall');
        // _this.askNumber3.frame = 1;
         _this.askNumber3.scale.setTo(1.3,1.3);
        
        _this.askNumber4 = _this.add.sprite(725,190,'Level723_numberSmall');
        //_this.askNumber4.frame = 1;
         _this.askNumber4.scale.setTo(1.3,1.3);
     
     _this.askNumber5 = _this.add.sprite(655,120,'Level723_numberSmall');
        // _this.askNumber3.frame = 1;
         _this.askNumber5.scale.setTo(1.3,1.3);
        
        _this.askNumber6 = _this.add.sprite(655,190,'Level723_numberSmall');
        //_this.askNumber4.frame = 1;
         _this.askNumber6.scale.setTo(1.3,1.3);
     
     
     
        
       // _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
       /*   _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();*/
        
       /**************************************************************************/ 
       /* _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
                  _this.AnsTimerCount++;
		      }, _this);
		_this.timer1.start();*/
        /**************************************************************************/ 
        
       /* _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
     
                  _this.yellowcoin.destroy();
                    _this.Coin1.destroy();
                _this.bluecoin.destroy();
                    _this.Coin10.destroy();
                _this.greencoin.destroy();
                    _this.Coin100.destroy();*/
                    
                   // _this.numGroup.destroy();
        ////console.log(" _this.no1"+ _this.no1);
         //_this.no1 = 1;
    	switch( _this.qArrays[_this.no1])      
    	{
                
    		case 1: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.displayNumber5 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 2;
                    },this);
                    _this.displayNumber6 = 6;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =7;
                    },this);
                    
                    _this.toDisplayNoPad = 57; 
                    _this.rightAns = 768;
                    
    				break;
    		case 2: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                    _this.displayNumber3 = 6;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 7;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                    _this.displayNumber5 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 3;
                    },this);
                    _this.displayNumber6 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 477;
    				break;
    		case 3: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                    _this.displayNumber5 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 2;
                    },this);
                    _this.displayNumber6 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 275;
    				break;
    		case 4: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.displayNumber5 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 5;
                    },this);
                    _this.displayNumber6 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =3;
                    },this); 
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 674;
    				break;
    		case 5: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =6;
                    },this);
                    
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.displayNumber5 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 6;
                    },this);
                    _this.displayNumber6 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 746;
    				break;
    		case 6: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                    _this.displayNumber5 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 4;
                    },this);
                    _this.displayNumber6 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 562;
    				break;
            case 7: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 6;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =7;
                    },this);
                    _this.displayNumber5 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 3;
                    },this);
                    _this.displayNumber6 = 4;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =5;
                    },this);
                
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 687;
    				break;
            case 8: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 6;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 7;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                    _this.displayNumber5 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 6;
                    },this);
                    _this.displayNumber6 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 10;
                    _this.rightAns = 667;
    				break;
            case 9: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 4;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =5;
                    },this);
                    _this.displayNumber5 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 2;
                    },this);
                    _this.displayNumber6 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =4;
                    },this);
                
                    _this.toDisplayNoPad = 5;
                    _this.rightAns = 476;
    				break;
          case 10: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                    _this.displayNumber5 = 6;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 7;
                    },this);
                    _this.displayNumber6 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 2;
                    _this.rightAns = 755;
    				break;
        case 11: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 3;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.displayNumber5 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 5;
                    },this);
                    _this.displayNumber6 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 6;
                    _this.rightAns = 554;
    				break;
        case 12: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 3;
                    },this);
                    _this.displayNumber2 = 6;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =7;
                    },this);
                
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                    _this.displayNumber5 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 4;
                    },this);
                    _this.displayNumber6 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =6;
                    },this);
                
                    _this.toDisplayNoPad = 13;
                    _this.rightAns = 858;
    				break; 
        case 13: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                
                    _this.displayNumber3 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.displayNumber5 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 3;
                    },this);
                    _this.displayNumber6 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =6;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 736;
    				break; 
        case 14: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 4;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =5;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                    _this.displayNumber5 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 3;
                    },this);
                    _this.displayNumber6 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 11;
                    _this.rightAns = 387;
    				break;
        case 15: _this.questionid = "7.1_3#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    },this);
                    _this.displayNumber4 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =6;
                    },this);
                    _this.displayNumber5 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber5.frame = 2;
                    },this);
                    _this.displayNumber6 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber6.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 7;
                    _this.rightAns = 366;
    				break;
           
    	}
     //console.log("no1"+_this.no1);
     _this.assign1=_this.displayNumber1-1;
     _this.assign=_this.displayNumber2-1;
     _this.assign3=_this.displayNumber3-1;
     _this.assign4=_this.displayNumber4-1;
     _this.assign5=_this.displayNumber5-1;
     _this.assign6=_this.displayNumber6-1;
     //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
     _this.addYellowCoins();
     telInitializer2.gameQuestionStart(this,_this.questionid);
    },
  inputDownFunctionForLeverAndBox :function(){
      
      _this.Coin1 = _this.add.sprite(475,210,'Level723_Coin1');
      _this.Coin1.visible = false;
      _this.Coin10 = _this.add.sprite(310,210,'Level723_Coin10');
      _this.Coin10.visible = false;
      _this.Coin100 = _this.add.sprite(135,210,'Level723_Coin100');
      _this.Coin100.visible = false;
      //_this.Coin1.frame=7;
      
      _this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
	  _this.LeverYellowanim = _this.LeverYellow.animations.add('Level723_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
      _this.LeverYellowanim.play(2,true);
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
       _this.LeverBlue.inputEnabled = false;
       //_this.LeverBlue.input.useHandCursor = true;
       _this.LeverBlue.events.onInputDown.add(_this.leve1Clicked,_this); 
     
       _this.LeverGreen.inputEnabled = false;
       //_this.LeverGreen.input.useHandCursor = true;
       _this.LeverGreen.events.onInputDown.add(_this.leve1Clicked,_this);
     

  },
    
 
  numberBoxClicked:function(target){
        
        commonNavBar.playClickSound();
        
        if(target.name=="numBox2"){
            _this.numBox2Pressed = true;
            _this.numBox2.frame = 1;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numBox3"){
            _this.numBox3Pressed = true;
            _this.numBox3.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numBox1"){
            _this.numBox1Pressed = true;
            _this.numBox1.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
        }
        
       /* if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            _this.addNumberPad();
        }*/
    },
   
    leve1Clicked:function(target,frame){
        
         //console.log("Im Clicked "+target.name);
        if(target.name == "LeverYellow"){
             
            if(_this.YellowAnimInc<_this.displayNumber2){
                _this.LeverYellow.animations.add('Level723_LeverYellow',[0,1,2,3,4,5,0]);
             _this.LeverYellow.animations.play('Level723_LeverYellow');  
               commonNavBar.playCoinFallSound();
                 _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level723_coin1Anim',_this.animArrayCoin1);
                 _this.Levercoin1.animations.play('Level723_coin1Anim');
                 _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					 _this.LeverYellowanim.play(2,true);
					 
                      _this.LeverYellowNumber.frame++;
                      _this.Coin1.visible = true;
                      _this.Levercoin1.visible = false;
                      _this.Coin1.frame =  _this.YellowAnimInc;
                      _this.YellowAnimInc++;
                       _this.animArrayCoin1.pop();
					    if(_this.YellowAnimInc==(Number(_this.assign+1)))
							{
								 _this.LeverYellowanim.stop(null,true);
								 _this.LeverYellow.frame = 0;
							}
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                }, this);
            }
        }
        if(target.name == "LeverBlue"){
             
            if(_this.BlueAnimInc<_this.displayNumber4){
                
                _this.LeverBlue.animations.add('Level723_LeverBlue',[0,1,2,3,4,5,0]);
                _this.LeverBlue.animations.play('Level723_LeverBlue');
                commonNavBar.playCoinFallSound();
                 _this.Levercoin10.visible = true;
                _this.Levercoin10.animations.add('Level723_coin10Anim',_this.animArrayCoin10);
                 _this.Levercoin10.animations.play('Level723_coin10Anim');
                 _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
					 _this.LeverBlueanim.play(2,true);
					 
                      _this.LeverGreenNumber.frame++;
                      _this.Coin10.visible = true;
                      _this.Coin10.frame =  _this.BlueAnimInc;
                     _this.Levercoin10.visible = false;
                      _this.BlueAnimInc++;
                       _this.animArrayCoin10.pop();
                     //console.log("_this.BlueAnimInc "+_this.BlueAnimInc);
                      //console.log(_this.BlueAnimInc);
                        //console.log(Number(_this.assign4+1));
                     if(_this.BlueAnimInc==(Number(_this.assign4+1)))
           
                        {
							_this.LeverBlueanim.stop(null,true);
							_this.LeverBlue.frame = 0;
                            _this.LeverGreen.inputEnabled = true;
							_this.LeverGreenanim = _this.LeverGreen.animations.add('Level723_LeverGreen',["Symbol 20 instance 10005","Symbol 20 instance 10000"]);
                            _this.LeverGreenanim.play(2,true);
                        }
                     
                }, this);
            }
           
        }
        
        if(target.name == "LeverGreen"){
             
            if(_this.GreenAnimInc<_this.displayNumber6){
                _this.LeverGreen.animations.add('Level723_LeverGreen',[0,1,2,3,4,5,0]);
             _this.LeverGreen.animations.play('Level723_LeverGreen');  
               commonNavBar.playCoinFallSound();
                 _this.Levercoin100.visible = true;
                _this.Levercoin100.animations.add('Level723_Coin100Anim',_this.animArrayCoin100);
                 _this.Levercoin100.animations.play('Level723_Coin100Anim');
                 _this.Levercoin100.animations.currentAnim.onComplete.add(function () {
					 _this.LeverGreenanim.play(2,true);
					 
                      _this.LeverBlueNumber.frame++;
                      _this.Coin100.visible = true;
                      _this.Levercoin100.visible = false;
                      _this.Coin100.frame =  _this.GreenAnimInc;
                      _this.GreenAnimInc++;
                       _this.animArrayCoin100.pop();
                     //console.log("come here");
                     //console.log(" _this.GreenAnimInc "+ _this.GreenAnimInc);
                     //console.log(Number(_this.assign6+1));
                     if(_this.GreenAnimInc==(Number(_this.assign6+1)))
           
                        {
							_this.LeverGreenanim.stop(null,true);
							_this.LeverGreen.frame = 0;
                            //console.log("come here");
                            //console.log(" _this.GreenAnimInc "+ _this.GreenAnimInc);
                            //console.log(Number(_this.assign6+1));
                         _this.addNumberPad();
                         _this.numBox3.frame = 1;
                         _this.numBox3Pressed = true;
                         _this.toCheckNumberPad = false;
                            _this.displayNopad = true;
                            _this.LeverBlue.inputEnabled = false;
                        
                        }
                    }, this);
            }
        }
        
        if(_this.YellowAnimInc==(Number(_this.assign+1)-1))
            {
                _this.LeverBlue.inputEnabled = true;
				_this.LeverBlueanim = _this.LeverBlue.animations.add('Level723_LeverBlue',["Symbol 19 instance 10005","Symbol 19 instance 10000"]);
                _this.LeverBlueanim.play(2,true);
                _this.LeverYellow.inputEnabled = false;
                
            }

        
         
         _this.Allnumbers();
   
    
   
    },
    
    Allnumbers:function(){
        //console.log("vami")
        if((Number(_this.assign1+1))==1)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=190;
                         }
                     if((Number(_this.assign1+1))==2)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=171;
                         }
                     if((Number(_this.assign1+1))==3)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=152;
                         }
                     if((Number(_this.assign1+1))==4)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=133;
                         }
                     if((Number(_this.assign1+1))==5)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=114;
                         }
                     if((Number(_this.assign1+1))==6)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=95;
                         }
                     if((Number(_this.assign1+1))==7)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=82;
                         }
                     if((Number(_this.assign1+1))==8)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=55;
                         }
        //===================
        
        
        if((Number(_this.assign3+1))==1)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin10.x=310;
                            _this.Coin10.y=190;
                         }
                     if((Number(_this.assign3+1))==2)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=171;
                         }
                     if((Number(_this.assign3+1))==3)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=152;
                         }
                     if((Number(_this.assign3+1))==4)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=133;
                         }
                     if((Number(_this.assign3+1))==5)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=114;
                         }
                     if((Number(_this.assign3+1))==6)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=95;
                         }
                     if((Number(_this.assign3+1))==7)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=82;
                         }
                     if((Number(_this.assign3+1))==8)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=55;
                         }
        //===============
        
        if((Number(_this.assign5+1))==1)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin100.x=135;
                            _this.Coin100.y=190;
                         }
                     if((Number(_this.assign5+1))==2)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=171;
                         }
                     if((Number(_this.assign5+1))==3)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=152;
                         }
                     if((Number(_this.assign5+1))==4)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=133;
                         }
                     if((Number(_this.assign5+1))==5)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=114;
                         }
                     if((Number(_this.assign5+1))==6)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=95;
                         }
                     if((Number(_this.assign5+1))==7)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=82;
                         }
                     if((Number(_this.assign5+1))==8)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin100.x=135;
                            _this.Coin100.y=55;
                         }
                    
    },
    
    addYellowCoins:function(){
        
                _this.yellowcoin.x=475;
                _this.yellowcoin.y=210;
        
                _this.bluecoin.x=310;
                _this.bluecoin.y=210;
        
                _this.greencoin.x=135;
                _this.greencoin.y=210;
        
        _this.numDisplay();
          
        ////console.log(randarr[randarr.length-1].x);
        ////console.log(randarr[randarr.length-1].y-17);
        //console.log("lengthx="+_this.yellowcoin.x);
        //console.log("lengthy="+_this.yellowcoin.y);
    },
    
    numDisplay:function(){
        
        //console.log("display coins");
        //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
         //console.log("third num"+ Number(_this.assign3+1));
     //console.log("fourth num"+ Number(_this.assign4+1));
       
        _this.coinDisplay();
        
        
        if((Number(_this.assign1+1))==1)
            {
            _this.yellowcoin.frame=0;
            }
        else if((Number(_this.assign1+1))==2)
            {
            _this.yellowcoin.frame=1;
            }
        else if((Number(_this.assign1+1))==3)
            {
            _this.yellowcoin.frame=2;
            }
        else if((Number(_this.assign1+1))==4)
            {
            _this.yellowcoin.frame=3;
            }
        else if((Number(_this.assign1+1))==5)
            {
            _this.yellowcoin.frame=4;
            }
        else if((Number(_this.assign1+1))==6)
            {
            _this.yellowcoin.frame=5;
            }
        else if((Number(_this.assign1+1))==7)
            {
            _this.yellowcoin.frame=6;
            }
        else if((Number(_this.assign1+1))==8)
            {
            _this.yellowcoin.frame=7;
            }
       //===========
       
        
        
        if((Number(_this.assign3+1))==1)
            {
            _this.bluecoin.frame=0;
            }
        else if((Number(_this.assign3+1))==2)
            {
            _this.bluecoin.frame=1;
            }
        else if((Number(_this.assign3+1))==3)
            {
            _this.bluecoin.frame=2;
            }
        else if((Number(_this.assign3+1))==4)
            {
            _this.bluecoin.frame=3;
            }
        else if((Number(_this.assign3+1))==5)
            {
            _this.bluecoin.frame=4;
            }
        else if((Number(_this.assign3+1))==6)
            {
            _this.bluecoin.frame=5;
            }
        else if((Number(_this.assign3+1))==7)
            {
            _this.bluecoin.frame=6;
            }
        else if((Number(_this.assign3+1))==8)
            {
            _this.bluecoin.frame=7;
            }
        
        //=============
        
        if((Number(_this.assign5+1))==1)
            {
            _this.greencoin.frame=0;
            }
        else if((Number(_this.assign5+1))==2)
            {
            _this.greencoin.frame=1;
            }
        else if((Number(_this.assign5+1))==3)
            {
            _this.greencoin.frame=2;
            }
        else if((Number(_this.assign5+1))==4)
            {
            _this.greencoin.frame=3;
            }
        else if((Number(_this.assign5+1))==5)
            {
            _this.greencoin.frame=4;
            }
        else if((Number(_this.assign5+1))==6)
            {
            _this.greencoin.frame=5;
            }
        else if((Number(_this.assign5+1))==7)
            {
            _this.greencoin.frame=6;
            }
        else if((Number(_this.assign5+1))==8)
            {
            _this.greencoin.frame=7;
            }
        
        
        
    },
    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level723_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);

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
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,508,'Level723_erase','Symbol 14 copy 5 instance 10000');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,508,'Level723_rightmark','Symbol 14 copy instance 10000');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.20,1.20);
        _this.rightbtn.name = "rightbtn";
        
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             commonNavBar.playClickSound();
             _this.eraserclicked=1;
             _this.eraser.frame=1;
             if(_this.numBox1Pressed){
					// _this.numBox1.frame = 1;
     //                _this.numBox1Pressed = true;
                    _this.numBoxNum1.visible = false;
                    _this.selectedAns1="";
                }
                else if(_this.numBox2Pressed){
					// _this.numBox2.frame = 1;
     //                _this.numBox2Pressed = true;
                    _this.numBoxNum2.visible = false;
                    _this.selectedAns2="";
                }
                else if(_this.numBox3Pressed)
                {
					// _this.numBox3.frame = 1;
     //                _this.numBox3Pressed = true;
                    _this.numBoxNum3.visible = false;
                    _this.selectedAns3="";
                }

                _this.selectedAns="";

                /* to use eraser to next textbox */
                // if(_this.numBox1.frame == 1){
                //     _this.numBox2.frame = 1;
                //     _this.numBox1.frame = 0;
                //     _this.numBox3.frame = 0;
                //     _this.numBox2Pressed = true;
                //     _this.numBox1Pressed = false;
                // }else if(_this.numBox2.frame == 1){
                //     _this.numBox2.frame = 0;
                //     _this.numBox1.frame = 0;
                //     _this.numBox3.frame = 1;
                //     _this.numBox3Pressed = true;
                //     _this.numBox2Pressed = false;
                // }
             
                if(_this.numBoxNum1.visible ==false || _this.numBoxNum2.visible==false || _this.numBoxNum3.visible==false  ){
                    this.time.events.add(500,function(){
                        _this.eraser.frame=0;                
                    },this); 
                }
             
                _this.toCheckNumberPad = false;
                  
         },this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.rightbtn.frame=1;
             
            _this.noofAttempts++;
            commonNavBar.playClickSound();

            commonNavBar.disableHintIcon();
             
             _this.time.events.add(1000, function(){
                 _this.rightbtn.frame=0;
             },_this);
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns)  
                {
                    telInitializer2.gameCorrectAns();
                    //console.log("correct");
                    this.Stararr.push(3);
                    _this.eraserclicked=0;
                    
                  /* this.AnsTimerCount=_this.minutes+':' + _this.seconds;
                this.currentTime = window.timeSaveFunc();
                this.saveAsment = 
                   { 
                    id_game_play: this.savedVar,
                    id_question: this.questionid,  
                    pass: "yes",
                    time2answer: this.AnsTimerCount,
                    attempts: this.noofAttempts,
                    date_time_submission: this.currentTime, 
                    access_token: window.acctkn 
                   }*/
                    
                   
                    _this.questionid = 1;
                    //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                    //counts=1;
                    target.events.onInputDown.removeAll();
                    
                    commonNavBar.playCelebrationSound();
                    commonNavBar.stopVoice();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     //_this.count1++;
                    //
                   // _this.yellowcoin.frame=_this.yellowcoin.frame+10;
                    _this.glowAnim();
                    //_this.Coin1.frame =_this.Coin1.frame+10 ;
                   // _this.Coin10.frame =_this.Coin10.frame+10 ;
                   
                    
                    _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.numBox3Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    _this.toCheckNumberPad = false;
                    
                    
                    
                    
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 
                    telInitializer2.gameWrongAns();
                    //console.log("wrong");
                    _this.eraserclicked=0;
                   _this.numBox3Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    
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
    
    glowAnim:function(){
        //_this.Coin1.visible = false;
       //_this.yellowcoin.destroy();
        //_this.Coin1.destroy();
       
        //console.log("first num"+ Number(_this.assign1+1));
     //console.log("second num"+ Number(_this.assign+1));
        if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=11;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                //console.log("glow");
                                _this.yellowcoin.frame=17;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=14;
                            }
                    if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=13;
                            }
                    if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==6)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=14;
                            }
                    if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=13;
                            }
                    if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==6))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=17;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==4))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
        //=================
                    
        if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==6)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                //console.log("glow");
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==6))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=17;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==4))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==1)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=12;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=17;
                            }
                    if(((Number(_this.assign3+1))==1)&&((Number(_this.assign4+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=13;
                            }
        //===========
        
                    if(((Number(_this.assign5+1))==1)&&((Number(_this.assign6+1))==6))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=16;
                            }
                    if(((Number(_this.assign5+1))==2)&&((Number(_this.assign6+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=13;
                            }
                    if(((Number(_this.assign5+1))==1)&&((Number(_this.assign6+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=11;
                            }
                    if(((Number(_this.assign5+1))==4)&&((Number(_this.assign6+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=15;
                            }
                    if(((Number(_this.assign5+1))==5)&&((Number(_this.assign6+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=16;
                            }
                    if(((Number(_this.assign5+1))==3)&&((Number(_this.assign6+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=14;
                            }
                    if(((Number(_this.assign5+1))==2)&&((Number(_this.assign6+1))==4))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=15;
                            }
                    if(((Number(_this.assign5+1))==5)&&((Number(_this.assign6+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=15;
                            }
                    if(((Number(_this.assign5+1))==1)&&((Number(_this.assign6+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=13;
                            }
                    if(((Number(_this.assign5+1))==6)&&((Number(_this.assign6+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=16;
                            }
                    if(((Number(_this.assign5+1))==4)&&((Number(_this.assign6+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=14;
                            }
                    if(((Number(_this.assign5+1))==3)&&((Number(_this.assign6+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=17;
                            }
                    if(((Number(_this.assign5+1))==2)&&((Number(_this.assign6+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=16;
                            }
                    if(((Number(_this.assign5+1))==2)&&((Number(_this.assign6+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=12;
                            }
                    if(((Number(_this.assign5+1))==1)&&((Number(_this.assign6+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.greencoin.frame=12;
                            }
                    
        
    },
    
     numClicked:function(target){
         
           //console.log(target.name);
         commonNavBar.playClickSound();
         
        if(_this.numBox1Pressed){
            console.log("11");
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
             _this.numBox3.frame = 0;
             _this.numBox1Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
            _this.numBox1Pressed = true;
         }
        
        if(_this.numBox2Pressed){
             console.log("22");
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
                 console.log("33");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
                 
				if(_this.selectedAns3>=0 && _this.eraserclicked==0){
                     _this.numBox2.frame = 1;
                     _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else{
                     if(_this.eraserclicked==0){
	                     _this.numBox2.frame = 0;
	                     _this.numBox1.frame = 0;
	                     _this.numBox3.frame = 1;
	                     _this.numBox1Pressed = false;
	                     _this.numBox2Pressed = false;
	                     _this.numBox3Pressed = true;
				    }
                 }
             }

            // if((_this.eraserclicked == 1) && (_this.numBox3Pressed) &&(_this.numBox3.frame == 1)){
            //     console.log("HERE-- 2");
            //     _this.numBox2.frame = 1;
            //     _this.numBox1.frame = 0;
            //     _this.numBox3.frame = 0;
            //     _this.numBox2Pressed = true;
            //     _this.numBox1Pressed = false;
            //     _this.numBox3Pressed = false;
            // }else if( (_this.eraserclicked == 1) && (_this.numBox2Pressed) &&(_this.numBox2.frame == 1)){
            //     console.log("HERE-- 1");
            //     _this.numBox2.frame = 0;
            //     _this.numBox1.frame = 1;
            //     _this.numBox3.frame = 0;
            //     _this.numBox2Pressed = false;
            //     _this.numBox1Pressed = true;
            //     _this.numBox3Pressed = false;
            // }
            
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
        
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         //console.log("1 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("3 "+this.numBox3Pressed);
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
         _this.no1++;

          _this.noofAttempts=0;
       _this.AnsTimerCount=0;
        
        _this.askNumber1.destroy();
        _this.askNumber2.destroy();
        _this.askNumber3.destroy();
        _this.askNumber4.destroy();
        _this.askNumber5.destroy();
        _this.askNumber6.destroy();
        
        //console.log("index="+_this.qArrays);
        //qArrays[0]=randomno;
        //_this.qArrays.splice(0,1);
        //console.log("index="+_this.qArrays);
        
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<4)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
             //_this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
             _this.Levercoin100.visible = false;
            _this.LeverGreenNumber.frame = 1;
            _this.LeverYellowNumber.frame = 1;
            _this.LeverBlueNumber.frame = 1;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.GreenAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.Coin100.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
           
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            
            _this.yellowcoin.destroy();
            _this.bluecoin.destroy();
            _this.greencoin.destroy();
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            _this.getQuestion();
            
        }
        else
        {
            _this.Coin1.destroy();
            _this.yellowcoin.destroy();
            _this.bluecoin.destroy();
            
             var timerStopVar = commonNavBar.stopTimer();
              commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            //_this.state.start('unity7_1_1Score');
            
            this.videoLevel2 = this.add.video('demo');
        this.videoLevel2.play(false);
        this.videoLevel2.changeSource(window.baseUrl+"assets/demoVideos/7_2_3.mp4");
        _this.something1 =  this.videoLevel2.addToWorld();
        if(window.languageSelected == "Gujarati"|| window.languageSelected == "Odiya")
		{
			_this.time.events.add(2000, function(){
				_this.playDemoVideos('7_2_3a');
				_this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
				_this.skipDemos.inputEnabled = true;
				_this.skipDemos.events.onInputDown.add(function(){
					_this.skipDemos.destroy();
					  this.stopVoice();
					  this.videoLevel2.stop(false);
						 _this.time.events.removeAll();
						_this.something1.destroy();
					   // this.videoLevel2.destroy();
					 this.videoLevel2.onComplete.removeAll();
						 _this.state.start('addition_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
					},_this);
					_this.time.events.add(20000, function(){
						_this.playDemoVideos('7_2_3b');
				
					  },_this);
			},_this);
		}
		else
		{
			_this.time.events.add(2000, function(){
				_this.playDemoVideos('7_2_3a');
				_this.skipDemos = _this.add.sprite(803,405,'skipDemoVideos');
				_this.skipDemos.inputEnabled = true;
				_this.skipDemos.events.onInputDown.add(function(){
					_this.skipDemos.destroy();
					  this.stopVoice();
					  this.videoLevel2.stop(false);
						 _this.time.events.removeAll();
						_this.something1.destroy();
					   // this.videoLevel2.destroy();
					 this.videoLevel2.onComplete.removeAll();
						 _this.state.start('addition_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
					},_this);
				_this.time.events.add(7000, function(){
					_this.playDemoVideos('7_2_3b');
				},_this);
				_this.time.events.add(17000, function(){
					_this.playDemoVideos('7_2_3c');
				},_this);
				_this.time.events.add(26000, function(){
					_this.playDemoVideos('7_2_3d');
				},_this);
			},_this);
		}
        
         this.videoLevel2.onComplete.add(function(){
              _this.skipDemos.destroy();
             _this.something1.destroy();
               //this.videoLevel2.destroy();
             this.videoLevel2.onComplete.removeAll();
                _this.state.start('addition_NOAG_4_3level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
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
                case 15:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/English/Game 7.1.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Hindi/Game 7.1.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Kannada/Game 7.1.3.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.3/Odiya/7.1.3.mp3");
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
			
            }
            _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
      shutdown:function(){
         if(this.video)
		{
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}
        
        if(this.videoLevel2)
            {
                 console.log("VVVVV Completed 3");
                //this.videoLevel2.destroy();
                //this.videoLevel2.removeVideoElement();
                this.videoLevel2 = null;
            }
         commonNavBar.stopVoice();
        /*
         delete _this.YellowAnimInc;
        delete _this.GreenAnimInc;
        delete _this.counts;
        delete _this.BlueAnimInc;
        delete _this.noofAttempts;
		delete _this.AnsTimerCount;   
        delete _this.sceneCount;
        delete _this.seconds;
        delete _this.minutes;
        delete _this.total;
        delete _this.counterForTimer;
        delete _this.selectedAns;
        delete _this.selectedAns1;
        delete _this.selectedAns2;
        delete _this.selectedAns3;
        delete _this.rightAns;
        delete randar;
        delete yellowCoinArray;
        delete _this.toDisplayNoPad;
        delete _this.displayNopad;
        delete _this.toCheckNumberPad;
         delete _this.no1;
         delete _this.qArrays;
        delete _this.displayNumber1;
        delete _this.displayNumber2;
        delete _this.animArraylength;
        delete _this.count;
        delete _this.count1;
        delete _this.shake;
        delete _this.bg1;
        delete _this.navBar;
        delete _this.timebg;
        delete _this.topicOutline;
        delete _this.practice;
        delete _this.timeDisplay;
        delete _this.backbtn;
        delete _this.speakerbtn;
        delete _this.clickSound;
        delete _this.coinPannel;
        delete _this.Pannel;
        delete _this.LeverGreen;
        delete _this.LeverBlue;
        delete _this.LeverYellow;
        delete _this.Levercoin1;
        delete _this.Levercoin10;
        delete _this.Levercoin100;
        delete _this.Level321_OneToHundred1;
        delete _this.Level321_OneToHundred10;
        delete _this.Level321_OneToHundred100;
        delete _this.LeverBlueNumber;
        delete _this.LeverGreenNumber;
        delete _this.LeverYellowNumber;
        delete _this.numBox1;
        delete _this.numBox2;
        delete _this.numBox3;
        delete _this.askNumber1;
        delete _this.askNumber2;
        delete _this.askNumber3;
        delete _this.askNumber4;
        delete _this.askNumber5;
        delete _this.askNumber6;
        delete _this.numBoxNum1;
        delete _this.numBoxNum2;
        delete _this.numBoxNum3;
        delete _this.plusSign;
        delete _this.animArrayCoin1;
        delete _this.animArrayCoin10;
        delete _this.animArrayCoin100;
*/
       
		
        
    }

    
};