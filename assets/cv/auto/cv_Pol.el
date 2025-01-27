(TeX-add-style-hook
 "cv_Pol"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "a4paper" "10pt")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("xcolor" "usenames" "dvipsnames") ("tocbibind" "nottoc" "numbib")))
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
    "fontspec"
    "xunicode"
    "xltxtra"
    "url"
    "parskip"
    "xcolor"
    "fullpage"
    "hyperref"
    "titlesec"
    "graphicx"
    "footnote"
    "longtable"
    "bibunits"
    "textcomp"
    "tocbibind")
   (TeX-add-symbols
    "myname")
   (LaTeX-add-xcolor-definecolors
    "linkcolour"))
 :latex)

