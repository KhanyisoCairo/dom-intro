describe('calculateBtnClicked function' , function(){
    it('should  return call and total Bill  ' , function(){
        assert.equal(calculateBtnClicked('call'),2.75 )
    });
    it('should  return sms and total Bill ' , function(){
        assert.equal(calculateBtnClicked('sms'),0.65 )
    });
    it('should  return sms and total Bill ' , function(){
        assert.equal(calculateBtnClicked('sms,sms,sms'),1.95 )
    });
    it('should  return sms/call and total Bill ' , function(){
        assert.equal(calculateBtnClicked('sms,sms,call,sms,call,call'),10.20 )
    });
    

});