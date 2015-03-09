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
    Meteor.subscribe('getAllAvBlockIndicators');
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
            listItem += ['<div class="form-group"><label for="' + avBlockIndicatorsShort + '" class="col-sm-6 control-label">' + avBlockIndicatorsShort + '</label><div class="col-sm-6"><input type="checkbox" class="checkbox acp blocks" id="' + avBlockIndicatorsShort + '" name="' + avBlockIndicatorsShort + '" rel="txtTooltip" data-toggle="tooltip" data-placement="right" title="' + avBlockIndicatorsName + '" checked="checked"></div></div>'];
            testFor = true;
            break;
          }
        }
      }
      
      if(!testFor) {
        listItem += ['<div class="form-group"><label for="' + avBlockIndicatorsShort + '" class="col-sm-6 control-label">' + avBlockIndicatorsShort + '</label><div class="col-sm-6"><input type="checkbox" class="checkbox acp blocks" id="' + avBlockIndicatorsShort + '" name="' + avBlockIndicatorsShort + '" rel="txtTooltip" data-toggle="tooltip" data-placement="right" title="' + avBlockIndicatorsName + '"></div></div>'];              
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
    var avBlockIndicatorsName = e.currentTarget.title;
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
          console.log(error);
        if(result)
          console.log(result);
      }); 
    } else {
      Meteor.call('removeAvCustomersBlockIndicators', avCustomersId, removeData, function(error, result){
        if(error)
          console.log(error);
        if(result)
          console.log(result);
      });
    }   
  } 
});