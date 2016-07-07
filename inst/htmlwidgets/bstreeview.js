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
	      onNodeSelected: function(event, node) {
		  //var nodeId = node.nodeId;
		  //all child node of the selected parent node should be selected
		  for(var i in node.nodes) {
                      var child = node.nodes[i];
                      $(this).treeview(true).selectNode(child.nodeId);
		  }
		  //$(el).treeview('toggleNodeSelected', [ nodeId, { silent: true } ]);
		  selectedNodes = $(el).treeview('getSelected', 0);
		  var d = [];
		  for (var i=0; i<selectedNodes.length; i++) {
		      d.push(selectedNodes[i].val)
		  }
		  syncData(d.join(','))
	      },
	      onNodeUnselected: function(event, node) {
		  //var nodeId = node.nodeId;
		  //all child node of the unselected parent node should be unselected
		  for(var i in node.nodes) {
                      var child = node.nodes[i];
                      $(this).treeview(true).unselectNode(child.nodeId);
		  }
		  //$(el).treeview('toggleNodeSelected', [ nodeId, { silent: true } ]);
		  selectedNodes = $(el).treeview('getSelected', 0);
		  var d = [];
		  for (var i=0; i<selectedNodes.length; i++) {
		      d.push(selectedNodes[i].val)
		  }
		  syncData(d.join(','))
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
