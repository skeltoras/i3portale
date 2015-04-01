//-- template created functions
Template.checkBlockIndicators.created = function(){
};

//-- template destroyed functions
Template.checkBlockIndicators.destroyed = function(){
};

//-- template rendered functions
Template.checkBlockIndicators.rendered = function(){ 
  $(document).ready(function(){
    $('input[rel="txtTooltip"]').tooltip();
  });
};

//-- template helpers                            
Template.checkBlockIndicators.helpers({
  getBlockIndicators: function() {
    //Meteor.subscribe('getAllAvBlockIndicators');
    var listItems = AvBlockIndicators.find({});
    var listItem = [];
    var getAvCustomerData = AvCustomers.findOne({_id: this._id}).avBlockIndicators;
    var getBlocksShort = [];
    listItems.forEach(function(blocks){
      var avBlockIndicatorsShort = blocks.blocksShort;
      var avBlockIndicatorsName = blocks.blocksName;
      var testFor = false;
      
      for (var i in getAvCustomerData) {
        if (getAvCustomerData.hasOwnProperty(i)) {
          getBlocksShort = getAvCustomerData[i].short;
          
          if(avBlockIndicatorsShort == getBlocksShort){
            listItem += ['<div class="form-group"><div class="col-sm-2"><input type="checkbox" class="checkbox acp blocks" id="' + avBlockIndicatorsShort + '" name="' + avBlockIndicatorsName + '" rel="txtTooltip" data-toggle="tooltip" data-placement="right" title="' + avBlockIndicatorsShort + '" checked="checked"></div><label for="' + avBlockIndicatorsShort + '" class="col-sm-10">' + avBlockIndicatorsName + '</label></div>'];
            testFor = true;
            break;
          }
        }
      }
      
      if(!testFor) {
        listItem += ['<div class="form-group"><div class="col-sm-2"><input type="checkbox" class="checkbox acp blocks" id="' + avBlockIndicatorsShort + '" name="' + avBlockIndicatorsName + '" rel="txtTooltip" data-toggle="tooltip" data-placement="right" title="' + avBlockIndicatorsShort + '"></div><label for="' + avBlockIndicatorsShort + '" class="col-sm-10">' + avBlockIndicatorsName + '</label></div>'];              
      }
    });
    return listItem;
  }
});

//-- template events
Template.checkBlockIndicators.events({
  'click .checkbox.acp.blocks': function(e){
    var avCustomersId = this._id;
    var avBlockIndicatorsShort = e.currentTarget.id;
    var avBlockIndicatorsName = e.currentTarget.name;
    var addData = [];
    var removeData = [];
    addData = {
      name: avBlockIndicatorsName,
      short: avBlockIndicatorsShort      
    };
    removeData = {
      short: avBlockIndicatorsShort      
    };
    if(e.currentTarget.checked == true ){
      Meteor.call('addAvCustomersBlockIndicators', avCustomersId, addData, function(error, result){
        if(error)
          console.log(error);  //debug
        if(result)
          console.log(result); //debug
      }); 
    } else {
      Meteor.call('removeAvCustomersBlockIndicators', avCustomersId, removeData, function(error, result){
        if(error)
          console.log(error); //debug
        if(result)
          console.log(result); //debug
      });
    }   
  } 
});