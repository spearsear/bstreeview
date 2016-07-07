#library(data.tree)

#parent1 <- Node$new("Parent 1")
#  child1 <- parent1$AddChild("Child 1")
#    grandchild1 <- child1$AddChild("Grandchild 1")
#    grandchild2 <- child1$AddChild("Grandchild 2")
#  child2 <- parent1$AddChild("Child 2")
#parent2 <- Node$new("Parent 2")
#parent3 <- Node$new("Parent 3")
#parent4 <- Node$new("Parent 4")
#parent5 <- Node$new("Parent 5")

tree <- list(list(text='Parent1',
                  nodes=list(list(text='Child1',
                                  nodes=list(list(text='GrandChild1'),
                                             list(text='GrandChild2'))),
                             list(text='Child2'))),
             list(text='Parent2'),
             list(text='Parent3'),
             list(text='Parent4'),
             list(text='Parent5'))
#library(bstreeview)
#library(toJSON)
#tree_str <- toJSON(tree)
#bstreeview(data=tree_str,tree_input_id='selected_nodes')