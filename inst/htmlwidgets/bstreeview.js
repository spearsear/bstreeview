HTMLWidgets.widget({

  name: 'bstreeview',

  type: 'output',

  factory: function(el, width, height) {
    var renderBstreeview = function(x){
	  var syncData = function(d){
	      if(x.options.hasOwnProperty('tree_input_id')){
		  //associate element with tree_input_id with data
  		  //$('input',$('#' + x.options.tree_input_id)).val(d);
		  $('#' + x.options.tree_input_id).val(d);
		  //update shiny server on date change
		  Shiny.onInputChange(x.options.tree_input_id, d);
	      }
	  };
          $(el).treeview({
	      data: JSON.parse(x.options.data),
	      multiSelect: x.options.multiSelect==1?true:false,
	      onNodeSelected: function(event, data) {
		  var nodeId = data.nodeId;
		  //$(el).treeview('toggleNodeSelected', [ nodeId, { silent: true } ]);
		  selectedNodes = $(el).treeview('getSelected', 0);
		  data = []
		  for (var i=0; i<selectedNodes.length; i++) {
		      data.push(selectedNodes[i].val)
		  }
		  syncData(data.join(','))
	      },
	      onNodeUnselected: function(event, data) {
		  var nodeId = data.nodeId;
		  //$(el).treeview('toggleNodeSelected', [ nodeId, { silent: true } ]);
		  selectedNodes = $(el).treeview('getSelected', 0);
		  data = []
		  for (var i=0; i<selectedNodes.length; i++) {
		      data.push(selectedNodes[i].val)
		  }
		  syncData(data.join(','))
	      }
	  });
	  //somehow bstreeview width is set to 960px, need to override that
	  $('.bstreeview').css('width','auto');
	  syncData('');
    };

    // TODO: define shared variables for this instance
    return {
      initialize: function(el, width, height) {
      },

      renderValue: function(x) {
	  //if (x.type == 'calendar') {
          if (true) {
	      renderBstreeview(x);
	  } else {
	      $(el).html('');
	  }
      },

      resize: function(width, height) {
        // TODO: code to re-render the widget with a new size	
      },
    };
  }
});
