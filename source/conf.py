import os
# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'explicit-robotics'
copyright = '2023, Moses C. Nah and Johannes Lachner'
author = 'Moses C. Nah and Johannes Lachner'
release = 'v 1.0.0'


# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration


# Although annoying, we need to include the "absolute path of the explicit-MATLAB"
matlab_src_dir = '/Users/mosesnah/Documents/GitHub/Explicit-MATLAB'
# matlab_src_dir = '/Users/johanneslachner/Documents/GIT_private/Explicit-MATLAB'

# For Python 3.8
extensions = [ 'sphinxcontrib.matlab', 'sphinx.ext.autodoc', 'sphinxcontrib.napoleon' ]

# For Python 3.10
extensions = [ 'sphinxcontrib.matlab', 'sphinx.ext.autodoc', 'sphinx.ext.napoleon']

napoleon_numpy_docstring = True
# [REF] https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html
# [REF] https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_numpy.html#example-numpy

# templates_path = ['_templates']
# exclude_patterns = []
primary_domain = 'mat'

add_module_names = False

 
# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_theme = 'alabaster'
html_theme = 'sphinx_rtd_theme'
# html_static_path = ['_static']


