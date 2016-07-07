#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
bstreeview <- function(...,  width = NULL, height = NULL) {
  #params is a list of parameter pass to bootstrap treeview widget
  #usage: treestr <- '[{"text":"Parent 1","nodes":[{"text":"Child 1","nodes":[{"text":"Grandchild 1"},{"text":"Grandchild 2"}]},{"text":"Child 2"}]},{"text":"Parent 2"},{"text":"Parent 3"},{"text":"Parent 4"},{"text":"Parent 5"}]'
  #       bstreeview(data=treestr,tree_input_id='selected_nodes')

  params <- list(
    options = list(..., height=height, width=width),
    width = width,
    height = height
  )
  params <- Filter(Negate(is.null),params)

  # create widget using params
  htmlwidgets::createWidget(
    name = 'bstreeview',
    params,
    width = width,
    height = height,
    sizingPolicy = htmlwidgets::sizingPolicy(viewer.padding=0,browser.fill=TRUE),
    package = 'bstreeview')
}

#' Shiny bindings for bstreeview
#'
#' Output and render functions for using bstreeview within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a bstreeview
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name bstreeview-shiny
#'
#' @export
bstreeviewOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'bstreeview', width, height, package = 'bstreeview')
}

#' @rdname bstreeview-shiny
#' @export
renderBstreeview <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, bstreeviewOutput, env, quoted = TRUE)
}