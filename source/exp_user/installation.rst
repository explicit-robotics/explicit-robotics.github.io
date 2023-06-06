============
Installation
============

.. contents:: Table of Contents

Explicit-MATLAB 
================
We assume that users have access to recent versions of `MATLAB`_. 
*Exp[licit]-MATLAB* was tested for versions after R2022a. 
For users having issues running the software with older versions of MATLAB, please create a `Github issue`_.

To clone our `Exp[licit]-MATLAB repository`_, run:

.. code-block:: 

	git clone https://github.com/explicit-robotics/Explicit-MATLAB.git [SET_UP_YOUR_DIRECTORY]

Once the download is complete, run MATLAB and set the current folder to be the *Exp[licit]-MATLAB* folder.
Run the ``setup.m`` script to include all subfolders. You can also run the following command in the command window:

.. code-block:: MATLAB

	setup

If the following line appeares in your command window, you are all set! 

.. code-block:: MATLAB

 	'EXPlicit (c) Moses C. Nah & Johannes Lachner 2022-2023, https://explicit-robotics.github.io'


Explicit-C++
==================
The current version is in active development and might be unstable. 
A formal announcement will be made once the first stable version of *Exp[licit]-cpp* is complete. 
For vector and matrix calculations, we use `Eigen version 3.4.0`_, which is added as a git submodule.

To clone our `Exp[licit]-C++ repository`_, run:

.. code-block:: 

	git clone https://github.com/explicit-robotics/Explicit-cpp.git [SET_UP_YOUR_DIRECTORY]

All .cpp-files can be found in the main directory. To compile them, simply run 

.. code-block:: 

	make

in your terminal.

Explicit-FRI
==================
As for *Exp[licit]-cpp*, the current version is in active development and might be unstable. 
A formal announcement will be made once the first stable version is complete. 

This software contains a submodule of the `Exp[licit]-C++ repository`_. *Exp[licit]-cpp* in turn contains a 
submodule of `Eigen version 3.4.0`_. To update the submodules, type:

.. code-block:: 

	git submodule update --init --recursive

You always need to check for Explicit-cpp updates. For that, type:

.. code-block:: 

	git submodule update --remote

To run *Exp[licit]-FRI*, a .so-file of *Exp[licit]-cpp* has to be compiled. This can be done by running

.. code-block:: 

    make -f Makefile-lib

in the head folder. Note that the intial source files are created for a "Media Flange Touch." 
If needed, please adapt the Flange Position in *Exp[licit]-cpp*. 

The Libraries folder contains a C++ version of ``myFRIClient``.  This library is provided by KUKA and establishes a state-machine for communication 
between the Client-PC and the Sunrise controller. The software uploaded here was extracted from a Sunrise 1.17-version. 
If the provided lib-file under 'myFRIClient/lib' doesn't work, please refer to the README-file inside for re-compilation.

To get started with FRI (C++), we provide a "basic application." 
While any IDE can be used, you can run the application by opening the CMAKE-file under 'basic_app/src' with  `Qt-Creator`_.

Explicit-py (TBA)
=================
TBA



.. _`MATLAB`: https://www.mathworks.com/
.. _`Exp[licit]-MATLAB repository`: https://github.com/explicit-robotics/Explicit-MATLAB
.. _`Exp[licit]-C++ repository`: https://github.com/explicit-robotics/Explicit-cpp
.. _`Eigen version 3.4.0`: https://gitlab.com/libeigen/eigen/-/releases/3.4.0
.. _`campus-wide MATLAB license`: https://www.mathworks.com/academia.html
.. _`Github issue`: https://github.com/explicit-robotics/Explicit-MATLAB/issues
.. _`Qt-Creator`: https://www.qt.io/product/development-tools