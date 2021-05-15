(TeX-add-style-hook
 "cv_Dong"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "a4paper" "10pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("xcolor" "usenames" "dvipsnames") ("bibunits" "subsectionbib") ("tocbibind" "nottoc" "numbib")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "xcolor"
    "bibunits"
    "fullpage"
    "hyperref"
    "titlesec"
    "graphicx"
    "footnote"
    "longtable"
    "textcomp"
    "tocbibind")
   (TeX-add-symbols
    "myname")
   (LaTeX-add-xcolor-definecolors
    "linkcolour"))
 :latex)

